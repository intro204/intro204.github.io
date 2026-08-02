// ================================
// Shopping Cart
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(productId) {

    const product = products.find(p => p.id === productId);

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();

    alert(product.name + " added to your cart!");
}

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Cart counter
function updateCartCount() {

    const counter = document.getElementById("cart-count");

    if (!counter) return;

    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    counter.innerText = total;
}

// Run when page loads
updateCartCount();