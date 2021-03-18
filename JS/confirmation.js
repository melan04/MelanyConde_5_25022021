let orderId = localStorage.getItem("order");

let total = localStorage.getItem("totalCost");
total = JSON.parse(total);


const order = document.getElementById("order_confirmed");
order.innerHTML = "";
order.innerHTML += `
<h2>Merci pour votre commande</h2>
    <h3>Total du panier: ${(total)} €</h3>
    <h3>Numéro de la commande: </br> ${orderId}</h3>`


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".cart-shop span").textContent = productNumbers;
    }
}

function init() {
    onLoadCartNumbers();
}
init();







