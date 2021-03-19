//Récupérer l'order dans le locale storage
let orderId = localStorage.getItem("order");

// Récupérer le total des produits dans le locale storage 
let total = localStorage.getItem("totalCost");
total = JSON.parse(total);

// Afficher les infos dans la page de confirmation
const order = document.getElementById("order_confirmed");
order.innerHTML = "";
order.innerHTML += `
<h2>Merci pour votre commande</h2>
    <h3>Total du panier: ${total} €</h3>
    <h3>Numéro de la commande: </br> ${orderId}</h3>`;

// Afficher le nombre de produits dans le panier dans le header
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart-shop span").textContent = productNumbers;
  }
}
// Appeler la fonction 
function init() {
  onLoadCartNumbers();
}
init();
