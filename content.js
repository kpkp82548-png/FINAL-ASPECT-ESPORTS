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
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px) scale(0.9)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px) scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
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
            btn.style.transform = 'translate(-50%, -50%) scale(1.3) rotate(360deg)';
            btn.innerHTML = '<i class="fas fa-pause"></i>';
            btn.style.background = 'rgba(66, 208, 244, 1)';
            btn.style.boxShadow = '0 0 40px rgba(66, 208, 244, 0.8)';
            
            // Simple alert for demo (in real app, would open video player)
            setTimeout(() => {
                alert(`Playing: ${videoTitle}\n\nThis would open the video player in a real application.`);
                btn.style.transform = 'translate(-50%, -50%) scale(1)';
                btn.innerHTML = '<i class="fas fa-play"></i>';
                btn.style.background = 'rgba(0, 0, 0, 0.8)';
                btn.style.boxShadow = 'none';
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
                btn.style.transform = 'scale(1.1)';
                
                // Add success animation
                btn.style.animation = 'successPulse 0.6s ease-out';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount + 1}K`;
                followerCount.style.animation = 'bounce 0.6s ease-out';
            } else {
                btn.textContent = 'FOLLOW';
                btn.style.background = '';
                btn.style.transform = 'scale(1)';
                btn.style.animation = 'none';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount - 1}K`;
                followerCount.style.animation = 'none';
            }
            
            // Reset animations after completion
            setTimeout(() => {
                btn.style.animation = 'none';
                btn.style.transform = 'scale(1)';
                const followerCount = btn.closest('.creator-card').querySelector('.stat-number');
                followerCount.style.animation = 'none';
            }, 600);
        });
    });
    
    // Live stream indicator animation
    const liveDots = document.querySelectorAll('.live-dot');
    liveDots.forEach(dot => {
        // Enhanced live dot animation is now handled by CSS
        dot.style.animation = 'livePulse 1.5s ease-in-out infinite';
    });
    
    // Video card hover effects
    const allVideoCards = document.querySelectorAll('.video-card, .stream-card');
    allVideoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Add CSS animations for content page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes successPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
            100% { transform: scale(1); }
        }
        
        .video-card, .stream-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
});