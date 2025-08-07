// Content page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add Framer-style classes to elements
    const videoCards = document.querySelectorAll('.video-card, .stream-card');
    videoCards.forEach(card => {
        card.classList.add('hover-lift', 'tilt', 'shimmer');
    });
    
    const creatorCards = document.querySelectorAll('.creator-card');
    creatorCards.forEach(card => {
        card.classList.add('breathe', 'hover-lift');
    });
    
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(btn => {
        btn.classList.add('morph-btn', 'ripple-effect');
    });
    
    // Category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const videoCards = document.querySelectorAll('.video-card');
    
    categoryTabs.forEach(tab => {
        tab.classList.add('morph-btn', 'magnetic');
        
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
                    card.style.transform = 'translateY(30px) scale(0.8) rotateX(45deg)';
                    card.style.filter = 'blur(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                        card.style.filter = 'blur(0)';
                    }, 200);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px) scale(0.8) rotateX(45deg)';
                    card.style.filter = 'blur(10px)';
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
            btn.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(720deg)';
            btn.innerHTML = '<i class="fas fa-pause"></i>';
            btn.style.background = 'linear-gradient(135deg, #42d0f4, #6096dc)';
            btn.style.boxShadow = '0 0 50px rgba(66, 208, 244, 1), 0 0 100px rgba(66, 208, 244, 0.5)';
            btn.style.filter = 'brightness(1.2)';
            
            // Simple alert for demo (in real app, would open video player)
            setTimeout(() => {
                alert(`Playing: ${videoTitle}\n\nThis would open the video player in a real application.`);
                btn.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
                btn.innerHTML = '<i class="fas fa-play"></i>';
                btn.style.background = 'rgba(0, 0, 0, 0.8)';
                btn.style.boxShadow = 'none';
                btn.style.filter = 'brightness(1)';
            }, 800);
        });
    });
    
    // Follow button functionality
    const followBtns = document.querySelectorAll('.follow-btn');
    
    followBtns.forEach(btn => {
        btn.classList.add('morph-btn', 'magnetic');
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (btn.textContent === 'FOLLOW') {
                btn.textContent = 'FOLLOWING';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669, #10b981)';
                btn.style.transform = 'scale(1.2) rotate(5deg)';
                btn.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.5)';
                
                // Add success animation
                btn.style.animation = 'successPulse 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount + 1}K`;
                followerCount.style.animation = 'bounce 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                followerCount.classList.add('neon-glow');
            } else {
                btn.textContent = 'FOLLOW';
                btn.style.background = '';
                btn.style.transform = 'scale(1)';
                btn.style.animation = 'none';
                btn.style.boxShadow = 'none';
                
                // Update follower count
                const creatorCard = btn.closest('.creator-card');
                const followerCount = creatorCard.querySelector('.stat-number');
                const currentCount = parseInt(followerCount.textContent.replace('K', ''));
                followerCount.textContent = `${currentCount - 1}K`;
                followerCount.style.animation = 'none';
                followerCount.classList.remove('neon-glow');
            }
            
            // Reset animations after completion
            setTimeout(() => {
                btn.style.animation = 'none';
                btn.style.transform = 'scale(1)';
                const followerCount = btn.closest('.creator-card').querySelector('.stat-number');
                followerCount.style.animation = 'none';
            }, 800);
        });
    });
    
    // Live stream indicator animation
    const liveDots = document.querySelectorAll('.live-dot');
    liveDots.forEach(dot => {
        // Enhanced live dot animation is now handled by CSS
        dot.style.animation = 'livePulse 2s cubic-bezier(0.23, 1, 0.32, 1) infinite';
        dot.classList.add('neon-glow');
    });
    
    // Video card hover effects
    const allVideoCards = document.querySelectorAll('.video-card, .stream-card');
    allVideoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.05) rotateX(5deg)';
            card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(66, 208, 244, 0.3)';
            card.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            card.style.boxShadow = 'none';
            card.style.filter = 'brightness(1) saturate(1)';
        });
    });
    
    // Add CSS animations for content page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes successPulse {
            0% { 
                transform: scale(1) rotate(0deg); 
                box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
            }
            50% { 
                transform: scale(1.3) rotate(180deg); 
                box-shadow: 0 0 40px rgba(16, 185, 129, 0.8),
                           0 0 80px rgba(16, 185, 129, 0.4);
            }
            100% { 
                transform: scale(1) rotate(360deg); 
                box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
            }
        }
        
        .video-card, .stream-card {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .creator-card {
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .play-button {
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .category-tab {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
    `;
    document.head.appendChild(style);
});