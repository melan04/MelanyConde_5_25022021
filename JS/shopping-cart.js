const getProduct = async (id) => {
    const result = await fetch(`http://localhost:3000/api/teddies/${id}`);
    const product = await result.json();
    return product;
};

function displayCart() {
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    let total = localStorage.getItem("totalCost");
    total = JSON.parse(total);

    const productContainer = document.querySelector(".products");

    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map((product) => {
            productContainer.innerHTML += `
        <div class= "product">
        <i class="far fa-times-circle"></i>
        <img src = ${product.imageUrl}>
        <span>${product.name}</span>
        <div class= "price">${product.price / 100} €</div>
        <div class = "quantity "> ${product.inCart}
        </div>
        <div class= "total"> 
        ${(product.inCart * product.price) / 100}€
        </div>
        `;
        });

        productContainer.innerHTML += `
        <div class ="basketTotalContainer">
            <h4 class= "basketTotalTitle"> Panier total </h4>
            <h4 class = "basketTotal"> ${total} € </h4>
     
        `;
    } else {
        productContainer.innerHTML = "";
        productContainer.innerHTML += `
        <p class="paniervide"> Le panier est vide <p>
        `;
    }
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".cart-shop span").textContent = productNumbers;
    }
}

// ------------ CREATION DU FORMULAIRE ----------------//

function displayForm() {
    const itemLabelNameElement = document.createElement("label");
    const itemInputNameElement = document.createElement("input");
    itemLabelNameElement.setAttribute("class", "item-form-name");
    (itemLabelNameElement.textContent = "Nom"),
        (itemInputNameElement.type = "text"),
        (itemInputNameElement.placeholder = "Entrez votre nom"),
        (itemInputNameElement.name = "nom"),
        (itemInputNameElement.id = "nameid");
    itemLabelNameElement.appendChild(itemInputNameElement);

    const itemLabelSurnameElement = document.createElement("label");
    const itemInputSurnameElement = document.createElement("input");
    itemLabelSurnameElement.setAttribute("class", "item-form-surname");
    (itemLabelSurnameElement.textContent = "Prénom"),
        (itemInputSurnameElement.type = "text"),
        (itemInputSurnameElement.placeholder = "Entrez votre prénom"),
        (itemInputSurnameElement.name = "surname"),
        (itemInputSurnameElement.id = "surnameId");
    itemLabelSurnameElement.appendChild(itemInputSurnameElement);

    const itemLabelAdressElement = document.createElement("label");
    const itemInputAdressElement = document.createElement("input");
    itemLabelAdressElement.setAttribute("class", "item-form-Adress");
    (itemLabelAdressElement.textContent = "Adresse"),
        (itemInputAdressElement.type = "text"),
        (itemInputAdressElement.placeholder = "Entrez votre adresse"),
        (itemInputAdressElement.name = "adress"),
        (itemInputAdressElement.id = "adressId");
    itemLabelAdressElement.appendChild(itemInputAdressElement);

    const itemLabelCityElement = document.createElement("label");
    const itemInputCityElement = document.createElement("input");
    itemLabelCityElement.setAttribute("class", "item-form-City");
    (itemLabelCityElement.textContent = "Ville"),
        (itemInputCityElement.type = "text"),
        (itemInputCityElement.placeholder = "Entrer votre ville"),
        (itemInputCityElement.name = "city"),
        (itemInputCityElement.id = "cityId");
    itemLabelCityElement.appendChild(itemInputCityElement);

    const itemLabelPostalElement = document.createElement("label");
    const itemInputPostalElement = document.createElement("input");
    itemLabelPostalElement.setAttribute("class", "item-form-postal");
    (itemLabelPostalElement.textContent = "Code Postal"),
        (itemInputPostalElement.type = "text"),
        (itemInputPostalElement.placeholder = "Entrez votre code postal"),
        (itemInputPostalElement.name = "postal"),
        (itemInputPostalElement.id = "postalId"),
        (itemInputPostalElement.pattern = "[0-9]{5}"),
        itemLabelPostalElement.appendChild(itemInputPostalElement);

    const itemLabelMailElement = document.createElement("label");
    const itemInputMailElement = document.createElement("input");
    itemLabelMailElement.setAttribute("class", "item-form-mail");
    (itemLabelMailElement.textContent = "Adresse Mail"),
        (itemInputMailElement.type = "email"),
        (itemInputMailElement.placeholder = "Entrez votre e-mail"),
        (itemInputMailElement.name = "email"),
        (itemInputMailElement.id = "mailId");
    itemLabelMailElement.appendChild(itemInputMailElement);

    const itemButton = document.createElement("input");
    itemButton.type = "submit";
    itemButton.value = "Valider";
    itemButton.id = "envoiForm";
    itemButton.setAttribute("class", "button-form");

    document.getElementById("form-container").appendChild(itemLabelNameElement);
    document.getElementById("form-container").appendChild(itemLabelSurnameElement);
    document.getElementById("form-container").appendChild(itemLabelAdressElement);
    document.getElementById("form-container").appendChild(itemLabelCityElement);
    document.getElementById("form-container").appendChild(itemLabelPostalElement);
    document.getElementById("form-container").appendChild(itemLabelMailElement);
    document.getElementById("form-container").appendChild(itemButton);
}

// VALIDER LE FORMULAIRE

document.forms["form-container"].addEventListener("submit", function (e) {
    e.preventDefault();

    let erreur;
    let inputs = this;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }

    if (erreur) {
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert("Formulaire envoyé !");
    }

    // Récupération des valeurs du formulaires

    const contact = {
        lastName: document.querySelector("#nameid").value,
        firstName: document.querySelector("#surnameId").value,
        address: document.querySelector("#adressId").value,
        city: document.querySelector("#cityId").value,
        email: document.querySelector("#mailId").value,
    };

    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    // ENVOYER LA REQUETE POST

    const postOrder = async function () {
        const response = await fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contact,
                products: Object.values(cartItems).map((product) => product._id),
            }),
        });

        const data = await response.json();
        console.log(data);
        localStorage.setItem("order", data.orderId)
        window.location.replace("./confirmation.html");

    };
    postOrder();

});

function init() {
    displayCart();
    onLoadCartNumbers();
    displayForm();
}
init();
