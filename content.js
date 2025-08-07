// Professional Content page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Category filtering with professional animations
    const categoryTabs = document.querySelectorAll('.category-tab');
    const videoCards = document.querySelectorAll('.video-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            
            // Professional filter animation
            videoCards.forEach((card, index) => {
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
    
    // Professional video play functionality
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get video info
            const videoCard = btn.closest('.video-card, .stream-card, .featured-video');
            let videoTitle = 'Video';
            
            if (videoCard) {
                const titleElement = videoCard.querySelector('.video-title, .stream-title');
                if (titleElement) {
                    videoTitle = titleElement.textContent;
                }
            }
            
            // Professional button animation
            btn.style.transform = 'translate(-50%, -50%) scale(1.2)';
            btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                btn.style.transform = 'translate(-50%, -50%) scale(1)';
                // In a real app, this would open the video player
                console.log(`Playing: ${videoTitle}`);
            }, 300);
        });
    });
    
    // Professional follow button functionality
    const followBtns = document.querySelectorAll('.follow-btn');
    
    followBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (btn.textContent === 'FOLLOW') {
                btn.textContent = 'FOLLOWING';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                btn.style.transform = 'translateY(-2px) scale(1.05)';
                btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount + 1}K`;
                followerCount.style.color = '#10b981';
                followerCount.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            } else {
                btn.textContent = 'FOLLOW';
                btn.style.background = '';
                btn.style.transform = 'translateY(0) scale(1)';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount - 1}K`;
                followerCount.style.color = '#42d0f4';
            }
            
            // Reset after delay
            setTimeout(() => {
                btn.style.transform = 'translateY(0) scale(1)';
                const followerCount = btn.closest('.creator-card').querySelector('.stat-number');
                followerCount.style.color = '#42d0f4';
            }, 2000);
        });
    });
    
    // Professional card hover effects
    const allCards = document.querySelectorAll('.video-card, .stream-card, .creator-card');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
    
    console.log('Content page - Professional effects loaded');
});