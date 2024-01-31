let cart = [];

function addToCart(productId) {
    // Find the product with the given id
    const product = products.find(item => item.id === productId);

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            // image: product.imageUrl,
        });
    }

    updateCartDisplay();

    alert(`Product ${productId} added to cart`);
}

function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(`Cart count: ${cartCount}`);
    console.log('Cart contents:', cart);
}

function updateCartDisplay() {
    const cartSection = document.getElementById('cart');

    cartSection.style.display = 'block';

    const cartList = document.getElementById('cart-list');

    cartList.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>Quantity: ${item.quantity}</span>
            <span>Price: $${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartList.appendChild(cartItem);
    });

}