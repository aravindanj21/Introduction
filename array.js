const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        errorMessage.innerText = "Error: " + error.message;
    });

function displayProducts(products) {
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" width="100">
        `;
        productContainer.appendChild(div);
    });
}


 










