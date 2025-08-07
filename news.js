// News page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Breaking news close functionality
    const breakingClose = document.querySelector('.breaking-close');
    const breakingNews = document.querySelector('.breaking-news');
    
    if (breakingClose && breakingNews) {
        breakingClose.addEventListener('click', () => {
            breakingNews.style.animation = 'slideUpFade 0.4s ease-out forwards';
            setTimeout(() => {
                breakingNews.style.display = 'none';
            }, 400);
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
                    card.style.transform = 'translateY(30px) scale(0.9)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px) scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
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
            btn.style.opacity = '0.7';
            btn.style.transform = 'scale(0.95)';
            
            // Get article info
            const articleCard = btn.closest('.article-card');
            const articleTitle = articleCard.querySelector('.article-title').textContent;
            
            // Simulate loading
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.style.transform = 'scale(1)';
                
                // Simple alert for demo (in real app, would navigate to full article)
                alert(`Opening full article: "${articleTitle}"\n\nThis would navigate to the complete article page in a real application.`);
            }, 800);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animate button
            loadMoreBtn.textContent = 'LOADING...';
            loadMoreBtn.style.opacity = '0.7';
            loadMoreBtn.style.transform = 'scale(0.95)';
            
            // Add loading spinner
            const spinner = document.createElement('div');
            spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            spinner.style.marginLeft = '8px';
            loadMoreBtn.appendChild(spinner);
            
            // Simulate loading
            setTimeout(() => {
                loadMoreBtn.textContent = 'LOAD MORE ARTICLES';
                loadMoreBtn.style.opacity = '1';
                loadMoreBtn.style.transform = 'scale(1)';
                
                // In a real app, this would load more articles
                alert('More articles would be loaded here in a real application.');
            }, 2000);
        });
    }
    
    // Newsletter signup
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (!email) {
                newsletterInput.style.animation = 'shake 0.5s ease-in-out';
                newsletterInput.style.borderColor = '#ef4444';
                alert('Please enter your email address.');
                setTimeout(() => {
                    newsletterInput.style.animation = 'none';
                    newsletterInput.style.borderColor = '#374151';
                }, 500);
                return;
            }
            
            if (!isValidEmail(email)) {
                newsletterInput.style.animation = 'shake 0.5s ease-in-out';
                newsletterInput.style.borderColor = '#ef4444';
                alert('Please enter a valid email address.');
                setTimeout(() => {
                    newsletterInput.style.animation = 'none';
                    newsletterInput.style.borderColor = '#374151';
                }, 500);
                return;
            }
            
            // Animate button
            newsletterBtn.textContent = 'SUBSCRIBING...';
            newsletterBtn.style.opacity = '0.7';
            newsletterBtn.style.transform = 'scale(0.95)';
            
            // Add success particle effect
            setTimeout(() => {
                createSuccessEffect(newsletterBtn);
            }, 800);
            
            // Simulate subscription
            setTimeout(() => {
                newsletterBtn.textContent = 'SUBSCRIBED!';
                newsletterBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                newsletterBtn.style.transform = 'scale(1.05)';
                newsletterInput.value = '';
                newsletterInput.style.borderColor = '#10b981';
                
                // Reset after delay
                setTimeout(() => {
                    newsletterBtn.textContent = 'SUBSCRIBE';
                    newsletterBtn.style.background = '';
                    newsletterBtn.style.transform = 'scale(1)';
                    newsletterBtn.style.opacity = '1';
                    newsletterInput.style.borderColor = '#374151';
                }, 3000);
            }, 1200);
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
                card.style.transform = 'translateY(-12px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
                
                // Add glow effect to article image
                const img = card.querySelector('.article-image img');
                if (img) {
                    img.style.filter = 'brightness(1.1) contrast(1.1)';
                }
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'none';
                
                // Reset image filter
                const img = card.querySelector('.article-image img');
                if (img) {
                    img.style.filter = 'none';
                }
            }
        });
    });
    
    // Success effect function
    function createSuccessEffect(element) {
        const rect = element.getBoundingClientRect();
        const particles = 8;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.background = '#10b981';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            document.body.appendChild(particle);
            
            const angle = (i / particles) * Math.PI * 2;
            const velocity = 120;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }
    
    // Add CSS animations for news page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUpFade {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-100%); opacity: 0; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .article-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .article-image img {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .newsletter-input {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}