
const products = [
    {
                 id: 1,
                 name: "Product 1",
                 price: 10599.99,
                 imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf2YywnN9HkhZBSUiRmfeu1i0Np4awTivQQ&usqp=CAU"
             },
             {
                 id: 2,
                 name: "Product 2",
                 price: 799.99,
                 imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5wjj0Lgwtin1yYfkTz2eP2l1SUBRbeMOhF5fPH-cAkm8UvH1Qyj8gf_iMDNvcrZE5CE&usqp=CAU"
             },
             {
                 id: 3,
                 name: "Product 3",
                 price: 45799.99,
                 imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEgix2DrDCE7Bsx1FQSwWxJ41YjxyMBqleg&usqp=CAU"
             },
             {
                 id: 4,
                 name: "Product 4",
                 price: 1399.99,
                 imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jzKNZw84mH-K18T17Kxx8Ai6sHlXl5viBQ&usqp=CAU"
             },
             {
                id: 5,
                name: "Product 5",
                price: 1999.99,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmf0NVTIPn8_eav7Nof_HcpNYNveQA2MEd-Q&usqp=CAU"
            },
            {
                id: 6,
                name: "Product 6",
                price: 18999.99,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApyjyoNbe5n2q2gZ9KDEYWKygXT8SmH-owQ&usqp=CAU"
            },
            {
                id: 7,
                name: "Product 7",
                price: 2999.99,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcSRdzvz6QJllFrd_1P_v9-_mb_OwXU7rQA&usqp=CAU"
            },
            {
                id: 8,
                name: "Product 8",
                price: 11999.99,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoCuyeQF6XdnOc5NFcWn7qwWvGBEop3PiKw&usqp=CAU"
            },
];

// Function to render products
function renderProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productElement);
    });
}

// Function to simulate adding a product to the cart
// function addToCart(productId) {
//     alert(`Product ${productId} added to cart`);
// }

function addToCart(productId) {
    // Call the addToCart function from cart.js
    addToCart(productId);

    updateCartDisplay()
}

const continueButton = document.querySelector('.btn');
continueButton.addEventListener('click', function (event) {
    event.preventDefault();

    const loginForm = document.querySelector('.login-form');
    loginForm.style.display = 'none';

    renderProducts();
});
