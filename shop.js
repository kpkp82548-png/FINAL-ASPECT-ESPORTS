// Shop page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add Framer-style classes to elements
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.classList.add('hover-lift', 'tilt', 'shimmer');
    });
    
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.add('morph-btn', 'magnetic');
    });
    
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.classList.add('morph-btn', 'ripple-effect');
    });
    
    // Category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            // Filter products
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(40px) scale(0.7) rotateX(45deg)';
                    card.style.filter = 'blur(15px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                        card.style.filter = 'blur(0)';
                    }, 200);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(40px) scale(0.7) rotateX(45deg)';
                    card.style.filter = 'blur(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add to cart functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animate button
            btn.style.transform = 'scale(0.8) rotate(10deg)';
            btn.textContent = 'ADDED!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669, #10b981)';
            btn.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4)';
            btn.style.filter = 'brightness(1.2)';
            
            // Add success particle effect
            createParticleEffect(btn);
            
            // Update cart count
            cartItems++;
            cartCount.textContent = cartItems;
            cartCount.style.animation = 'cartBounce 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            cartCount.classList.add('neon-glow');
            
            // Reset button after delay
            setTimeout(() => {
                btn.style.transform = 'scale(1) translateY(-3px) rotate(0deg)';
                btn.textContent = 'ADD TO CART';
                btn.style.background = '';
                btn.style.boxShadow = '';
                btn.style.filter = 'brightness(1)';
                cartCount.style.animation = 'none';
                cartCount.classList.remove('neon-glow');
            }, 2000);
        });
    });
    
    // Quick view functionality
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    
    quickViewBtns.forEach(btn => {
        btn.classList.add('morph-btn', 'magnetic');
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add loading animation
            const originalText = btn.textContent;
            btn.textContent = 'LOADING...';
            btn.style.opacity = '0.8';
            btn.style.transform = 'scale(0.95) rotate(5deg)';
            btn.style.filter = 'blur(1px)';
            
            // Get product info
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Simulate loading
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.style.transform = 'scale(1) rotate(0deg)';
                btn.style.filter = 'blur(0)';
                
                // Simple alert for demo (in real app, would open modal)
                alert(`Quick View: ${productName}\nPrice: ${productPrice}\n\nThis would open a detailed product modal in a real application.`);
            }, 1000);
        });
    });
    
    // Product card hover effects
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.05) rotateX(8deg)';
            card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(66, 208, 244, 0.3)';
            card.style.filter = 'brightness(1.1) saturate(1.2)';
            
            // Add glow effect to product image
            const img = card.querySelector('.product-image img');
            if (img) {
                img.style.filter = 'brightness(1.2) contrast(1.2) saturate(1.3)';
                img.style.transform = 'scale(1.1) rotate(2deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            card.style.boxShadow = 'none';
            card.style.filter = 'brightness(1) saturate(1)';
            
            // Reset image filter
            const img = card.querySelector('.product-image img');
            if (img) {
                img.style.filter = 'none';
                img.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Particle effect function
    function createParticleEffect(button) {
        const rect = button.getBoundingClientRect();
        const particles = 12;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.background = `linear-gradient(135deg, #10b981, #42d0f4)`;
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.8)';
            
            document.body.appendChild(particle);
            
            const angle = (i / particles) * Math.PI * 2;
            const velocity = 150 + Math.random() * 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1) rotate(0deg)', 
                    opacity: 1,
                    filter: 'blur(0)'
                },
                { 
                    transform: `translate(${vx}px, ${vy}px) scale(0) rotate(720deg)`, 
                    opacity: 0,
                    filter: 'blur(5px)'
                }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
            }).onfinish = () => particle.remove();
        }
    }
    
    // Add CSS animations for shop page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cartBounce {
            0%, 20%, 50%, 80%, 100% { 
                transform: scale(1) rotate(0deg); 
                box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
            }
            40% { 
                transform: scale(1.5) rotate(180deg); 
                box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
            }
            60% { 
                transform: scale(1.2) rotate(270deg); 
                box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
            }
        }
        
        .product-card {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .product-image img {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .category-btn {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
        
        .add-to-cart-btn, .quick-view-btn {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
        }
    `;
    document.head.appendChild(style);
});