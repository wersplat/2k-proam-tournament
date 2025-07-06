const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const chalk = require('chalk').default;

// Configuration
const SITE_ROOT = path.join(__dirname, 'dist');
const IGNORE_LINKS = ['#', 'javascript:;'];
const EXTERNAL_DOMAINS = ['fonts.googleapis.com', 'cdnjs.cloudflare.com'];

// Track all links
const allLinks = new Set();
const brokenLinks = [];
const checkedLinks = new Set();

// Get all HTML files in the dist directory
function getHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    let htmlFiles = [];
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            htmlFiles = [...htmlFiles, ...getHtmlFiles(filePath)];
        } else if (file.endsWith('.html')) {
            htmlFiles.push(filePath);
        }
    });
    
    return htmlFiles;
}

// Check if a link is external
function isExternalLink(href) {
    if (!href) return false;
    try {
        const url = new URL(href, 'http://example.com');
        return !url.hostname.endsWith('example.com') && 
               !url.hostname.endsWith('localhost') &&
               !url.hostname.endsWith('127.0.0.1') &&
               url.protocol.startsWith('http');
    } catch (e) {
        return false;
    }
}

// Check if a file exists at the given path
function fileExists(filePath) {
    try {
        return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
    } catch (e) {
        return false;
    }
}

// Cache for storing anchor targets to avoid repeated file reads
const anchorCache = new Map();

// Get all anchor targets from an HTML file
function getAnchorTargets(htmlPath) {
    if (anchorCache.has(htmlPath)) {
        return anchorCache.get(htmlPath);
    }

    try {
        const content = fs.readFileSync(htmlPath, 'utf8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        // Get all elements with id attribute
        const elementsWithId = document.querySelectorAll('[id]');
        const targets = new Set();
        
        elementsWithId.forEach(el => {
            targets.add('#' + el.id);
        });
        
        // Also check for name attributes on anchors (legacy support)
        const namedAnchors = document.querySelectorAll('a[name]');
        namedAnchors.forEach(anchor => {
            targets.add('#' + anchor.getAttribute('name'));
        });
        
        anchorCache.set(htmlPath, targets);
        return targets;
    } catch (e) {
        console.error(`Error processing ${htmlPath}:`, e);
        return new Set();
    }
}

// Check all links in an HTML file
async function checkLinksInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    
    // Get all anchor tags
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Skip ignored links
        if (IGNORE_LINKS.includes(href)) return;
        
        // Skip mailto and tel links
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
        
        // Skip external links for now
        if (isExternalLink(href)) {
            allLinks.add(href);
            return;
        }
        
        // Handle anchor links
        if (href.startsWith('#')) {
            const targetId = href;
            const targets = getAnchorTargets(filePath);
            
            if (!targets.has(targetId)) {
                brokenLinks.push({
                    source: path.relative(SITE_ROOT, filePath),
                    link: href,
                    target: path.relative(SITE_ROOT, filePath) + targetId
                });
            }
            
            allLinks.add(href);
            return;
        }
        
        // Handle relative paths
        let targetPath = href;
        let anchor = '';
        
        // Check for anchor in the URL
        const anchorIndex = href.indexOf('#');
        if (anchorIndex !== -1) {
            anchor = href.substring(anchorIndex);
            targetPath = href.substring(0, anchorIndex);
        }
        
        if (href.startsWith('/')) {
            targetPath = path.join(SITE_ROOT, targetPath);
        } else {
            targetPath = path.join(path.dirname(filePath), targetPath);
        }
        
        // Normalize the path
        targetPath = path.normalize(targetPath);
        
        // Check if the target exists
        let targetExists = fileExists(targetPath);
        let targetHtmlPath = targetPath;
        
        if (!targetExists && !targetPath.endsWith('/')) {
            // Try with .html extension
            if (fileExists(targetPath + '.html')) {
                targetExists = true;
                targetHtmlPath = targetPath + '.html';
            }
        } else if (targetExists && fs.statSync(targetPath).isDirectory()) {
            // If it's a directory, check for index.html
            const indexPath = path.join(targetPath, 'index.html');
            if (fileExists(indexPath)) {
                targetHtmlPath = indexPath;
                targetExists = true;
            }
        }
        
        if (!targetExists) {
            brokenLinks.push({
                source: path.relative(SITE_ROOT, filePath),
                link: href,
                target: path.relative(SITE_ROOT, targetPath)
            });
            allLinks.add(href);
            return;
        }
        
        // If there's an anchor, check if it exists in the target file
        if (anchor) {
            const targets = getAnchorTargets(targetHtmlPath);
            
            if (!targets.has(anchor)) {
                brokenLinks.push({
                    source: path.relative(SITE_ROOT, filePath),
                    link: href,
                    target: path.relative(SITE_ROOT, targetHtmlPath) + anchor
                });
            }
        }
        
        allLinks.add(href);
    });
}

// Main function
async function main() {
    console.log(chalk.blue('🔍 Checking links in HTML files...\n'));
    
    const htmlFiles = getHtmlFiles(SITE_ROOT);
    
    // Check links in each HTML file
    for (const file of htmlFiles) {
        await checkLinksInFile(file);
    }
    
    // Print results
    if (brokenLinks.length > 0) {
        console.log(chalk.red(`❌ Found ${brokenLinks.length} broken links:\n`));
        
        brokenLinks.forEach((link, index) => {
            console.log(chalk.red(`${index + 1}.`), chalk.blue(link.source));
            console.log(`   ${chalk.gray('→')} ${chalk.red(link.link)}`);
            console.log(`   ${chalk.gray('↳')} ${chalk.yellow(link.target)}\n`);
        });
        
        process.exit(1);
    } else {
        console.log(chalk.green('✅ All links are valid!\n'));
        console.log(chalk.blue(`Checked ${htmlFiles.length} HTML files with ${allLinks.size} total links.`));
    }
}

// Run the script
main().catch(console.error);
