// News page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add Framer-style classes to elements
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.classList.add('hover-lift', 'tilt', 'shimmer');
    });
    
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.classList.add('morph-btn', 'magnetic');
    });
    
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
        btn.classList.add('morph-btn', 'ripple-effect');
    });
    
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.classList.add('morph-btn', 'magnetic');
    }
    
    // Breaking news close functionality
    const breakingClose = document.querySelector('.breaking-close');
    const breakingNews = document.querySelector('.breaking-news');
    
    if (breakingClose && breakingNews) {
        breakingClose.classList.add('magnetic');
        
        breakingClose.addEventListener('click', () => {
            breakingNews.style.animation = 'slideUpFade 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards';
            setTimeout(() => {
                breakingNews.style.display = 'none';
            }, 600);
        });
    }
    
    // Category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const articleCards = document.querySelectorAll('.article-card:not(.featured)');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            
            // Filter articles
            articleCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(40px) scale(0.8) rotateX(45deg)';
                    card.style.filter = 'blur(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                        card.style.filter = 'blur(0)';
                    }, 200);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(40px) scale(0.8) rotateX(45deg)';
                    card.style.filter = 'blur(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Read more functionality
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add loading animation
            const originalText = btn.textContent;
            btn.textContent = 'LOADING...';
            btn.style.opacity = '0.8';
            btn.style.transform = 'scale(0.9) rotate(10deg)';
            btn.style.filter = 'blur(2px)';
            
            // Get article info
            const articleCard = btn.closest('.article-card');
            const articleTitle = articleCard.querySelector('.article-title').textContent;
            
            // Simulate loading
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.style.transform = 'scale(1) rotate(0deg)';
                btn.style.filter = 'blur(0)';
                
                // Simple alert for demo (in real app, would navigate to full article)
                alert(`Opening full article: "${articleTitle}"\n\nThis would navigate to the complete article page in a real application.`);
            }, 1000);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.classList.add('morph-btn', 'magnetic');
        
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animate button
            loadMoreBtn.textContent = 'LOADING...';
            loadMoreBtn.style.opacity = '0.8';
            loadMoreBtn.style.transform = 'scale(0.9) rotate(5deg)';
            loadMoreBtn.style.filter = 'blur(2px)';
            
            // Add loading spinner
            const spinner = document.createElement('div');
            spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            spinner.style.marginLeft = '8px';
            spinner.style.animation = 'spin 1s linear infinite';
            loadMoreBtn.appendChild(spinner);
            
            // Simulate loading
            setTimeout(() => {
                loadMoreBtn.textContent = 'LOAD MORE ARTICLES';
                loadMoreBtn.style.opacity = '1';
                loadMoreBtn.style.transform = 'scale(1) rotate(0deg)';
                loadMoreBtn.style.filter = 'blur(0)';
                
                // In a real app, this would load more articles
                alert('More articles would be loaded here in a real application.');
            }, 2500);
        });
    }
    
    // Newsletter signup
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterInput.classList.add('shimmer');
        
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (!email) {
                newsletterInput.style.animation = 'shake 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
                newsletterInput.style.borderColor = '#ef4444';
                newsletterInput.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.5)';
                alert('Please enter your email address.');
                setTimeout(() => {
                    newsletterInput.style.animation = 'none';
                    newsletterInput.style.borderColor = '#374151';
                    newsletterInput.style.boxShadow = 'none';
                }, 600);
                return;
            }
            
            if (!isValidEmail(email)) {
                newsletterInput.style.animation = 'shake 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
                newsletterInput.style.borderColor = '#ef4444';
                newsletterInput.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.5)';
                alert('Please enter a valid email address.');
                setTimeout(() => {
                    newsletterInput.style.animation = 'none';
                    newsletterInput.style.borderColor = '#374151';
                    newsletterInput.style.boxShadow = 'none';
                }, 600);
                return;
            }
            
            // Animate button
            newsletterBtn.textContent = 'SUBSCRIBING...';
            newsletterBtn.style.opacity = '0.8';
            newsletterBtn.style.transform = 'scale(0.9) rotate(10deg)';
            newsletterBtn.style.filter = 'blur(2px)';
            
            // Add success particle effect
            setTimeout(() => {
                createSuccessEffect(newsletterBtn);
            }, 1000);
            
            // Simulate subscription
            setTimeout(() => {
                newsletterBtn.textContent = 'SUBSCRIBED!';
                newsletterBtn.style.background = 'linear-gradient(135deg, #10b981, #059669, #10b981)';
                newsletterBtn.style.transform = 'scale(1.1) rotate(0deg)';
                newsletterBtn.style.filter = 'blur(0)';
                newsletterBtn.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.8)';
                newsletterInput.value = '';
                newsletterInput.style.borderColor = '#10b981';
                newsletterInput.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
                newsletterInput.classList.add('neon-glow');
                
                // Reset after delay
                setTimeout(() => {
                    newsletterBtn.textContent = 'SUBSCRIBE';
                    newsletterBtn.style.background = '';
                    newsletterBtn.style.transform = 'scale(1)';
                    newsletterBtn.style.opacity = '1';
                    newsletterBtn.style.boxShadow = 'none';
                    newsletterInput.style.borderColor = '#374151';
                    newsletterInput.style.boxShadow = 'none';
                    newsletterInput.classList.remove('neon-glow');
                }, 4000);
            }, 1500);
        });
        
        // Enter key support for newsletter
        newsletterInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
    
    // Article card hover effects
    const allArticleCards = document.querySelectorAll('.article-card');
    allArticleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(-15px) scale(1.05) rotateX(8deg)';
                card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(66, 208, 244, 0.3)';
                card.style.filter = 'brightness(1.1) saturate(1.2)';
                
                // Add glow effect to article image
                const img = card.querySelector('.article-image img');
                if (img) {
                    img.style.filter = 'brightness(1.2) contrast(1.2) saturate(1.3)';
                    img.style.transform = 'scale(1.1) rotate(2deg)';
                }
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                card.style.boxShadow = 'none';
                card.style.filter = 'brightness(1) saturate(1)';
                
                // Reset image filter
                const img = card.querySelector('.article-image img');
                if (img) {
                    img.style.filter = 'none';
                    img.style.transform = 'scale(1) rotate(0deg)';
                }
            }
        });
    });
    
    // Success effect function
    function createSuccessEffect(element) {
        const rect = element.getBoundingClientRect();
        const particles = 16;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.background = `linear-gradient(135deg, #10b981, #42d0f4)`;
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.8)';
            
            document.body.appendChild(particle);
            
            const angle = (i / particles) * Math.PI * 2;
            const velocity = 180 + Math.random() * 60;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1) rotate(0deg)', 
                    opacity: 1,
                    filter: 'blur(0)'
                },
                { 
                    transform: `translate(${vx}px, ${vy}px) scale(0) rotate(1080deg)`, 
                    opacity: 0,
                    filter: 'blur(8px)'
                }
            ], {
                duration: 1200,
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
            }).onfinish = () => particle.remove();
        }
    }
    
    // Add CSS animations for news page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUpFade {
            0% { 
                transform: translateY(0) scale(1); 
                opacity: 1; 
                filter: blur(0);
            }
            100% { 
                transform: translateY(-100%) scale(0.8); 
                opacity: 0; 
                filter: blur(10px);
            }
        }
        
        @keyframes shake {
            0%, 100% { 
                transform: translateX(0) scale(1); 
            }
            25% { 
                transform: translateX(-8px) scale(1.02); 
            }
            75% { 
                transform: translateX(8px) scale(1.02); 
            }
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .article-card {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .article-image img {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .newsletter-input {
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .category-tab, .read-more-btn, .load-more-btn, .newsletter-btn {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
    `;
    document.head.appendChild(style);
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}