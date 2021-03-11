const getProduct = async (id) => {
    const result = await fetch(`http://localhost:3000/api/teddies/${id}`)
    const product = await result.json()
    return product;
}

function displayCart() {

    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    let total = localStorage.getItem("totalCost");
    total = JSON.parse(total);

    const productContainer = document.querySelector('.products')

    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(product => {
            productContainer.innerHTML += `
        <div class= "product">
        <i class="far fa-times-circle"></i>
        <img src = ${product.imageUrl}>
        <span>${product.name}</span>
        <div class= "price">${product.price / 100} €</div>
        <div class = "quantity " > <span> ${product.inCart} </span>
        </div>
        <div class= "total"> 
        ${product.inCart * product.price / 100}€
        </div>
        `
        });

        productContainer.innerHTML += `
        <div class ="basketTotalContainer">
            <h4 class= "basketTotalTitle"> Panier total </h4>
            <h4 class = "basketTotal"> ${total} € </h4>
     
        `;


    }
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector('.cart-shop span').textContent = productNumbers;
    }
}


async function init() {
    displayCart();
    onLoadCartNumbers();
}
init();