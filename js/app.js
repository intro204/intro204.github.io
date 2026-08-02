const productContainer = document.getElementById("product-list");

function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="price">

                ₱${product.price}

            </div>

            <button onclick="addToCart(${product.id})">

                Add to Cart

            </button>

        </div>

        `;

    });

}

function addToCart(id){

    alert("Added to cart: " + products.find(p=>p.id===id).name);

}

displayProducts();