// Professional Framer-style JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all professional effects
    initCustomCursor();
    initSmoothScrolling();
    initIntersectionObserver();
    initMobileMenu();
    initHeaderScroll();
    initProfessionalHoverEffects();
    
    console.log('ASPECT Esports - Professional site loaded');
});

// Custom Cursor with smooth movement
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects for interactive elements
    const hoverElements = document.querySelectorAll('a, button, .nav-link, .social-btn, .match-card, .team-card, .product-card, .article-card, .creator-card, .partner-card, .player-card, .stream-card, .video-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Professional intersection observer for fade-in effects
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section-title, .match-card, .team-card, .product-card, .article-card, .creator-card, .partner-card, .player-card, .stream-card, .video-card, .stat-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.classList.add(`fade-in-delay-${(index % 4) + 1}`);
        observer.observe(el);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    
    if (!mobileMenuBtn || !mobileNav || !menuIcon) return;
    
    let isMenuOpen = false;
    
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileNav.classList.add('active');
            menuIcon.className = 'fas fa-times';
            mobileMenuBtn.style.transform = 'rotate(180deg)';
        } else {
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
            mobileMenuBtn.style.transform = 'rotate(0deg)';
        }
    });
    
    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
            mobileMenuBtn.style.transform = 'rotate(0deg)';
        });
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Professional hover effects
function initProfessionalHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.match-card, .team-card, .product-card, .article-card, .creator-card, .partner-card, .player-card, .stream-card, .video-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('button, .btn, .social-btn, .cta-btn, .add-to-cart-btn, .follow-btn, .read-more-btn, .load-more-btn, .newsletter-btn, .quick-view-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        // Click effect
        button.addEventListener('click', (e) => {
            button.style.transform = 'translateY(0) scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
        });
    });
    
    // Logo hover effect
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            const logoIcon = logo.querySelector('.logo-icon');
            if (logoIcon) {
                logoIcon.style.transform = 'rotate(5deg) scale(1.1)';
                logoIcon.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
        
        logo.addEventListener('mouseleave', () => {
            const logoIcon = logo.querySelector('.logo-icon');
            if (logoIcon) {
                logoIcon.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    }
    
    // Navigation link effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-1px)';
            link.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Image hover effects
    const images = document.querySelectorAll('.team-image img, .product-image img, .article-image img, .stream-thumbnail img, .video-thumbnail img');
    images.forEach(img => {
        const parent = img.parentElement;
        
        parent.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        parent.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

// Utility function for smooth animations
function animateElement(element, properties, duration = 300, easing = 'cubic-bezier(0.4, 0, 0.2, 1)') {
    return new Promise(resolve => {
        element.style.transition = `all ${duration}ms ${easing}`;
        
        Object.keys(properties).forEach(prop => {
            element.style[prop] = properties[prop];
        });
        
        setTimeout(resolve, duration);
    });
}

// Professional loading animation for images
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.filter = 'blur(5px)';
            
            img.addEventListener('load', () => {
                animateElement(img, {
                    opacity: '1',
                    filter: 'blur(0)'
                }, 500);
            });
        }
    });
}

// Initialize image loading
initImageLoading();

// Professional page transition effect
function initPageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Fade out effect
            document.body.style.opacity = '0';
            document.body.style.transform = 'scale(0.98)';
            document.body.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Page enter animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
        document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Initialize page transitions
initPageTransitions();

// Professional scroll-based animations (subtle)
function initScrollAnimations() {
    let ticking = false;
    
    function updateScrollAnimations() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        
        // Subtle parallax for hero background
        const heroBackground = document.querySelector('.hero-bg');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Initialize subtle scroll animations
initScrollAnimations();

// Professional form interactions
function initFormInteractions() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-1px)';
            input.style.boxShadow = '0 4px 12px rgba(66, 208, 244, 0.15)';
            input.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
            input.style.boxShadow = 'none';
        });
    });
}

// Initialize form interactions
initFormInteractions();

// Professional error handling
window.addEventListener('error', (e) => {
    console.error('ASPECT Esports - Error:', e.error);
});

// Professional performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`ASPECT Esports - Page loaded in ${Math.round(loadTime)}ms`);
    });
}