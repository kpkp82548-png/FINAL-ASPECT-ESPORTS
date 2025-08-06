// Content page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const videoCards = document.querySelectorAll('.video-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            
            // Filter videos
            videoCards.forEach(card => {
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
    
    // Video play functionality
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
            
            // Animate play button
            btn.style.transform = 'scale(1.1)';
            btn.innerHTML = '<i class="fas fa-pause"></i>';
            
            // Simple alert for demo (in real app, would open video player)
            setTimeout(() => {
                alert(`Playing: ${videoTitle}\n\nThis would open the video player in a real application.`);
                btn.style.transform = 'scale(1)';
                btn.innerHTML = '<i class="fas fa-play"></i>';
            }, 500);
        });
    });
    
    // Follow button functionality
    const followBtns = document.querySelectorAll('.follow-btn');
    
    followBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (btn.textContent === 'FOLLOW') {
                btn.textContent = 'FOLLOWING';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount + 1}K`;
            } else {
                btn.textContent = 'FOLLOW';
                btn.style.background = '';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount - 1}K`;
            }
        });
    });
    
    // Live stream indicator animation
    const liveDots = document.querySelectorAll('.live-dot');
    liveDots.forEach(dot => {
        setInterval(() => {
            dot.style.opacity = dot.style.opacity === '0.3' ? '1' : '0.3';
        }, 1000);
    });
    
    // Video card hover effects
    const allVideoCards = document.querySelectorAll('.video-card, .stream-card');
    allVideoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});