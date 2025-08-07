// Shop page functionality
document.addEventListener('DOMContentLoaded', () => {
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
                    card.style.transform = 'translateY(30px) scale(0.8)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px) scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
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
            btn.style.transform = 'scale(0.9)';
            btn.textContent = 'ADDED!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            btn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.5)';
            
            // Add success particle effect
            createParticleEffect(btn);
            
            // Update cart count
            cartItems++;
            cartCount.textContent = cartItems;
            cartCount.style.animation = 'cartBounce 0.6s ease-out';
            
            // Reset button after delay
            setTimeout(() => {
                btn.style.transform = 'scale(1) translateY(-2px)';
                btn.textContent = 'ADD TO CART';
                btn.style.background = '';
                btn.style.boxShadow = '';
                cartCount.style.animation = 'none';
            }, 1500);
        });
    });
    
    // Quick view functionality
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add loading animation
            const originalText = btn.textContent;
            btn.textContent = 'LOADING...';
            btn.style.opacity = '0.7';
            
            // Get product info
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Simulate loading
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                
                // Simple alert for demo (in real app, would open modal)
                alert(`Quick View: ${productName}\nPrice: ${productPrice}\n\nThis would open a detailed product modal in a real application.`);
            }, 800);
        });
    });
    
    // Product card hover effects
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
            
            // Add glow effect to product image
            const img = card.querySelector('.product-image img');
            if (img) {
                img.style.filter = 'brightness(1.1) contrast(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
            
            // Reset image filter
            const img = card.querySelector('.product-image img');
            if (img) {
                img.style.filter = 'none';
            }
        });
    });
    
    // Particle effect function
    function createParticleEffect(button) {
        const rect = button.getBoundingClientRect();
        const particles = 6;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#10b981';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            document.body.appendChild(particle);
            
            const angle = (i / particles) * Math.PI * 2;
            const velocity = 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }
    
    // Add CSS animations for shop page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cartBounce {
            0%, 20%, 50%, 80%, 100% { transform: scale(1); }
            40% { transform: scale(1.3); }
            60% { transform: scale(1.1); }
        }
        
        .product-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-image img {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
});