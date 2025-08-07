// Professional Shop page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Professional category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            // Professional filter animation
            productCards.forEach((card, index) => {
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
    
    // Professional add to cart functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Professional button animation
            btn.style.transform = 'translateY(-2px) scale(0.95)';
            btn.textContent = 'ADDED!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Update cart count with professional animation
            cartItems++;
            cartCount.textContent = cartItems;
            cartCount.style.transform = 'scale(1.3)';
            cartCount.style.background = '#10b981';
            cartCount.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Reset button after delay
            setTimeout(() => {
                btn.style.transform = 'translateY(-2px) scale(1)';
                btn.textContent = 'ADD TO CART';
                btn.style.background = '';
                cartCount.style.transform = 'scale(1)';
                cartCount.style.background = '#ef4444';
            }, 1500);
        });
    });
    
    // Professional quick view functionality
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Professional loading animation
            const originalText = btn.textContent;
            btn.textContent = 'LOADING...';
            btn.style.opacity = '0.7';
            btn.style.transform = 'scale(0.95)';
            btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Get product info
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Simulate loading
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.style.transform = 'scale(1)';
                
                // In a real app, this would open a product modal
                console.log(`Quick View: ${productName} - ${productPrice}`);
            }, 800);
        });
    });
    
    // Professional product card hover effects
    const allProductCards = document.querySelectorAll('.product-card');
    allProductCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Professional image hover effect
            const img = card.querySelector('.product-image img');
            if (img) {
                img.style.transform = 'scale(1.05)';
                img.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
            
            // Reset image
            const img = card.querySelector('.product-image img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    console.log('Shop page - Professional effects loaded');
});