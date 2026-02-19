// productContainer- holds all product carts
let productContainer = document.getElementById("product-container");
let errorMessage = document.getElementById("error-message"); //dispaly error if api fails


// Fetching data from api
     fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }
        return response.json();  //api response to json
    })
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {                             //error handling using catch
        errorMessage.innerText = error.message;
    });

// dynamic html element
function displayProducts(products) {
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.className = "product";

        let title = document.createElement("h4");
        title.innerText = product.title;   //product title

        let image = document.createElement("img");
        image.src = product.image;   //product image
        image.alt = product.title;

        productDiv.appendChild(image);
        productDiv.appendChild(title);
        productContainer.appendChild(productDiv);
    });
}

