document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('nav-open');
        mobileMenuToggle.setAttribute('aria-expanded', 
            mobileMenuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    }
    
    // Toggle dropdown menu on mobile
    function toggleDropdown(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.classList.toggle('active');
        }
    }
    
    // Smooth scrolling for anchor links
    function smoothScroll(e) {
        // Only handle links that start with #
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Calculate scroll position, accounting for fixed header
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        }
    }
    
    // Add active class to nav links on scroll
    function setActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    // Header scroll effect
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.tournament-card, .rule-item, .player-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }
    
    // Initialize animations
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.tournament-card, .rule-item, .player-card');
        
        animatedElements.forEach((element, index) => {
            // Add transition delay for staggered animations
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            element.style.transitionDelay = `${index * 0.1}s`;
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        });
        
        // Initial check for elements in viewport
        animateOnScroll();
    }
    
    // Event listeners
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Handle dropdown toggles
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDropdown);
    });
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    
    // Scroll event listeners
    window.addEventListener('scroll', () => {
        setActiveNavLink();
        handleHeaderScroll();
        animateOnScroll();
    });
    
    // Initialize
    handleHeaderScroll();
    initAnimations();
    
    // Handle page load with hash in URL
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo(0, elementPosition - headerHeight);
            }, 100);
        }
    }
});
