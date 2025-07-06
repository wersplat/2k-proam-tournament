# 2K Pro-Am Tournament Website

A modern, responsive website for the 2K Pro-Am Tournament, built with HTML, CSS, and vanilla JavaScript. This static website is optimized for performance and ready to be deployed on Cloudflare Pages.

![2K Pro-Am Tournament Preview](https://via.placeholder.com/1200x630/1a1a1a/ffffff?text=2K+Pro-Am+Tournament)

## 🌟 Features

- 🏀 Modern, responsive design that works on all devices
- ⚡ Blazing fast performance with optimized assets
- 🎮 Tournament listings with featured events
- 📱 Mobile-friendly navigation with dropdown menus
- 🎨 Smooth animations and transitions
- 🏆 Player and team showcase sections
- 📅 Tournament rules and information
- 🔗 Social media integration

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd 2k-proam-tournament
   ```

2. **Local Development**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python (Python 3)
     python3 -m http.server 8000
     
     # Or using Node.js with http-server
     npx http-server
     ```

## 🛠️ Customization

### Content Updates
- **Homepage**: Edit `index.html` to update tournament information, featured players, and other content
- **Styles**: Customize colors, typography, and layout in `styles.css`
- **Functionality**: Modify `script.js` for interactive elements and animations

### Branding
- Update the color scheme in `:root` variables within `styles.css`
- Replace the placeholder images in the `images/` directory with your own
- Update the favicon and social media meta tags in `index.html`

## 🌐 Deploying to Cloudflare Pages

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/)
3. Go to **Pages** > **Create a project**
4. Select your Git provider and repository
5. In the **Build settings**:
   - Framework preset: `None`
   - Build command: (leave empty)
   - Build output directory: (leave empty)
   - Root directory: (leave empty unless your files are in a subdirectory)
6. Click **Save and Deploy**

Your tournament website will be live at `https://<project-name>.pages.dev`

## 📁 Project Structure

```
2k-proam-tournament/
├── index.html          # Main HTML file
├── styles.css          # Global styles and variables
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎮 Features in Detail

### Tournament Listings
- Featured tournaments with key details
- Registration status and countdown timers
- Platform and prize pool information

### Player Showcase
- Featured players with statistics
- Responsive player cards
- Performance metrics and achievements

### Mobile Experience
- Responsive navigation with hamburger menu
- Optimized touch targets
- Smooth scrolling and transitions

## 🛡️ License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For tournament inquiries, please contact [your-email@example.com](mailto:your-email@example.com)
