// Custom Cursor
let cursor = null;
let cursorDot = null;
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let dotX = 0;
let dotY = 0;

// Initialize custom cursor
function initCustomCursor() {
    // Create cursor elements
    cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor
    function animateCursor() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects
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

// Magnetic Effect
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.social-btn, .logo, .icon-btn');
    
    magneticElements.forEach(el => {
        el.classList.add('magnetic');
        
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.3;
            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

// Advanced Parallax
function initAdvancedParallax() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rate2 = scrolled * -0.3;
        const rate3 = scrolled * -0.7;
        
        // Background elements
        const bgElements = document.querySelectorAll('.bg-element');
        bgElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.2);
            const yPos = -(scrolled * speed);
            const rotate = scrolled * 0.1;
            element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotate}deg)`;
        });
        
        // Hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translate3d(0, ${rate2}px, 0)`;
        }
        
        // Gradient overlay
        const gradientOverlay = document.querySelector('.gradient-overlay');
        if (gradientOverlay) {
            gradientOverlay.style.transform = `translate3d(0, ${rate3}px, 0)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Reveal Animation on Scroll
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.section-title, .match-card, .team-card, .product-card, .article-card, .creator-card, .partner-card, .player-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// Stagger Animation
function initStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('.matches-grid, .teams-grid, .products-grid, .articles-grid, .creators-grid, .partners-grid, .players-grid');
    
    staggerContainers.forEach(container => {
        const items = container.children;
        Array.from(items).forEach((item, index) => {
            item.classList.add('stagger-item');
            item.style.animationDelay = `${index * 0.1}s`;
        });
    });
}

// Smooth Page Transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href^="/"]:not([href*="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Add exit animation
            document.body.style.opacity = '0';
            document.body.style.transform = 'scale(0.95)';
            document.body.style.filter = 'blur(10px)';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Page enter animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
        document.body.style.filter = 'blur(0)';
    });
}

// Advanced Button Effects
function initAdvancedButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn, .social-btn, .cta-btn, .add-to-cart-btn, .follow-btn');
    
    buttons.forEach(button => {
        // Add morph class
        button.classList.add('morph-btn');
        
        // Ripple effect
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(66, 208, 244, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Hover tilt effect
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const tiltX = (y / rect.height) * 10;
            const tiltY = (x / rect.width) * -10;
            
            button.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

// Floating Elements
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.logo-icon, .social-btn, .match-status, .live-badge');
    
    floatingElements.forEach((el, index) => {
        el.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
        el.style.animationDelay = `${index * 0.2}s`;
    });
}

// Text Reveal Animation
function initTextReveal() {
    const textElements = document.querySelectorAll('.hero-title, .page-title, .section-title');
    
    textElements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.cssText = `
                display: inline-block;
                opacity: 0;
                transform: translateY(50px) rotateX(90deg);
                animation: textReveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                animation-delay: ${index * 0.03}s;
            `;
            el.appendChild(span);
        });
    });
}

// Add CSS for new animations
function addAdvancedCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes textReveal {
            to {
                opacity: 1;
                transform: translateY(0) rotateX(0deg);
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        body {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .hover-lift {
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .hover-lift:hover {
            transform: translateY(-8px) scale(1.02) rotateX(5deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .tilt {
            transform-style: preserve-3d;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .breathe {
            animation: breathe 4s ease-in-out infinite;
        }
        
        .liquid {
            animation: liquid 8s ease-in-out infinite;
        }
        
        .neon-glow {
            animation: neonFlicker 2s ease-in-out infinite alternate;
        }
        
        .glitch:hover {
            animation: glitch 0.3s ease-in-out;
        }
        
        .shimmer {
            position: relative;
            overflow: hidden;
        }
        
        .shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                        transparent, 
                        rgba(66, 208, 244, 0.2), 
                        rgba(255,255,255,0.1), 
                        rgba(66, 208, 244, 0.2), 
                        transparent);
            animation: shimmer 3s infinite;
        }
        
        .ripple-effect {
            position: relative;
            overflow: hidden;
        }
        
        .ripple-effect::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(66, 208, 244, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        .ripple-effect:hover::before {
            width: 300px;
            height: 300px;
        }
    `;
    document.head.appendChild(style);
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const header = document.getElementById('header');

let isMenuOpen = false;

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileNav.classList.add('active');
        menuIcon.className = 'fas fa-times';
        // Add rotation animation to menu icon
        mobileMenuBtn.style.transform = 'rotate(180deg) scale(1.1)';
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

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
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
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-title, .match-card, .team-card, .product-card, .article-card, .creator-card, .partner-card, .player-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.classList.add(`fade-in-delay-${(index % 4) + 1}`);
        observer.observe(el);
    });
});

// Enhanced hover effects for cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.match-card, .team-card, .product-card, .article-card, .creator-card, .partner-card, .player-card, .stream-card, .video-card');
    
    cards.forEach(card => {
        // Add hover lift class
        card.classList.add('hover-lift', 'tilt');
        
        card.addEventListener('mouseenter', (e) => {
            card.style.transform = 'translateY(-12px) scale(1.03) rotateX(5deg)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(66, 208, 244, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            card.style.boxShadow = 'none';
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const rotateX = (mouseY - centerY) / 40;
            const rotateY = (centerX - mouseX) / 40;
            
            card.style.transform = `translateY(-12px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Button click animations
function addButtonAnimations() {
    const buttons = document.querySelectorAll('button, .btn, .social-btn, .cta-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });
}

// Loading animation for images
function addImageLoadingEffects() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.filter = 'blur(10px)';
            img.style.transform = 'scale(1.1)';
            img.addEventListener('load', () => {
                img.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                img.style.opacity = '1';
                img.style.filter = 'blur(0)';
                img.style.transform = 'scale(1)';
            });
        }
    });
}

// Smooth scrolling for navigation links
const allNavLinks = document.querySelectorAll('a[href^="#"]');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all Framer-style effects
    initCustomCursor();
    initMagneticEffect();
    initAdvancedParallax();
    initRevealAnimations();
    initStaggerAnimations();
    initPageTransitions();
    initAdvancedButtonEffects();
    initFloatingElements();
    initTextReveal();
    addAdvancedCSS();
    
    // Initialize all animations and effects
    addCardHoverEffects();
    initSmoothScroll();
    addButtonAnimations();
    addImageLoadingEffects();
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(66, 208, 244, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(6);
                opacity: 0;
            }
        }
        
        button, .btn, .social-btn, .cta-btn {
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
        }
    `;
    document.head.appendChild(style);
    
    console.log('ASPECT Esports website loaded successfully!');
});