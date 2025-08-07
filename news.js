// Professional News page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Breaking news close functionality
    const breakingClose = document.querySelector('.breaking-close');
    const breakingNews = document.querySelector('.breaking-news');
    
    if (breakingClose && breakingNews) {
        breakingClose.addEventListener('click', () => {
            breakingNews.style.transform = 'translateY(-100%)';
            breakingNews.style.opacity = '0';
            breakingNews.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => {
                breakingNews.style.display = 'none';
            }, 400);
        });
    }
    
    // Professional category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const articleCards = document.querySelectorAll('.article-card:not(.featured)');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            
            // Professional filter animation
            articleCards.forEach((card, index) => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
    
    // Professional read more functionality
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Professional loading animation
            const originalText = btn.textContent;
            btn.textContent = 'LOADING...';
            btn.style.opacity = '0.7';
            btn.style.transform = 'translateY(-2px) scale(0.95)';
            btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Get article info
            const articleCard = btn.closest('.article-card');
            const articleTitle = articleCard.querySelector('.article-title').textContent;
            
            // Simulate loading
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(-2px) scale(1)';
                
                // In a real app, this would navigate to the full article
                console.log(`Opening article: ${articleTitle}`);
            }, 800);
        });
    });
    
    // Professional load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Professional loading animation
            loadMoreBtn.textContent = 'LOADING...';
            loadMoreBtn.style.opacity = '0.7';
            loadMoreBtn.style.transform = 'translateY(-2px) scale(0.95)';
            loadMoreBtn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Simulate loading
            setTimeout(() => {
                loadMoreBtn.textContent = 'LOAD MORE ARTICLES';
                loadMoreBtn.style.opacity = '1';
                loadMoreBtn.style.transform = 'translateY(-2px) scale(1)';
                
                // In a real app, this would load more articles
                console.log('Loading more articles...');
            }, 1500);
        });
    }
    
    // Professional newsletter signup
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (!email) {
                newsletterInput.style.borderColor = '#ef4444';
                newsletterInput.style.transform = 'translateX(-5px)';
                setTimeout(() => {
                    newsletterInput.style.transform = 'translateX(5px)';
                }, 100);
                setTimeout(() => {
                    newsletterInput.style.transform = 'translateX(0)';
                    newsletterInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 200);
                return;
            }
            
            if (!isValidEmail(email)) {
                newsletterInput.style.borderColor = '#ef4444';
                newsletterInput.style.transform = 'translateX(-5px)';
                setTimeout(() => {
                    newsletterInput.style.transform = 'translateX(5px)';
                }, 100);
                setTimeout(() => {
                    newsletterInput.style.transform = 'translateX(0)';
                    newsletterInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 200);
                return;
            }
            
            // Professional success animation
            newsletterBtn.textContent = 'SUBSCRIBING...';
            newsletterBtn.style.opacity = '0.7';
            newsletterBtn.style.transform = 'translateY(-2px) scale(0.95)';
            
            setTimeout(() => {
                newsletterBtn.textContent = 'SUBSCRIBED!';
                newsletterBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                newsletterBtn.style.transform = 'translateY(-2px) scale(1.05)';
                newsletterBtn.style.opacity = '1';
                newsletterInput.value = '';
                newsletterInput.style.borderColor = '#10b981';
                
                // Reset after delay
                setTimeout(() => {
                    newsletterBtn.textContent = 'SUBSCRIBE';
                    newsletterBtn.style.background = '';
                    newsletterBtn.style.transform = 'translateY(-2px) scale(1)';
                    newsletterInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 3000);
            }, 1000);
        });
        
        // Enter key support
        newsletterInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
    
    // Professional article card hover effects
    const allArticleCards = document.querySelectorAll('.article-card');
    allArticleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
            }
        });
    });
    
    console.log('News page - Professional effects loaded');
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}