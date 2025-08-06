// News page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Breaking news close functionality
    const breakingClose = document.querySelector('.breaking-close');
    const breakingNews = document.querySelector('.breaking-news');
    
    if (breakingClose && breakingNews) {
        breakingClose.addEventListener('click', () => {
            breakingNews.style.transform = 'translateY(-100%)';
            breakingNews.style.opacity = '0';
            setTimeout(() => {
                breakingNews.style.display = 'none';
            }, 300);
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
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
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
            
            // Get article info
            const articleCard = btn.closest('.article-card');
            const articleTitle = articleCard.querySelector('.article-title').textContent;
            
            // Animate button
            btn.style.transform = 'scale(0.95)';
            
            // Simple alert for demo (in real app, would navigate to full article)
            setTimeout(() => {
                alert(`Opening full article: "${articleTitle}"\n\nThis would navigate to the complete article page in a real application.`);
                btn.style.transform = 'scale(1)';
            }, 200);
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
            
            // Simulate loading
            setTimeout(() => {
                loadMoreBtn.textContent = 'LOAD MORE ARTICLES';
                loadMoreBtn.style.opacity = '1';
                
                // In a real app, this would load more articles
                alert('More articles would be loaded here in a real application.');
            }, 1500);
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
                alert('Please enter your email address.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Animate button
            newsletterBtn.textContent = 'SUBSCRIBING...';
            newsletterBtn.style.opacity = '0.7';
            
            // Simulate subscription
            setTimeout(() => {
                newsletterBtn.textContent = 'SUBSCRIBED!';
                newsletterBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                newsletterInput.value = '';
                
                // Reset after delay
                setTimeout(() => {
                    newsletterBtn.textContent = 'SUBSCRIBE';
                    newsletterBtn.style.background = '';
                    newsletterBtn.style.opacity = '1';
                }, 2000);
            }, 1000);
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
                card.style.transform = 'translateY(-8px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0)';
            }
        });
    });
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}