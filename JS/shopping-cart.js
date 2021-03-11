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
        <div class = "quantity "> ${product.inCart}
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


function displayForm () {

    const itemElement = document.createElement('div')  ;
    itemElement.setAttribute('class','item-form');


    const itemNameElement = document.createElement('div')
    const itemLabelNameElement = document.createElement('label');
    const itemInputNameElement = document.createElement('input')
    itemNameElement.setAttribute('class','item-form-name');
    itemLabelNameElement.textContent = "Nom",
    itemInputNameElement.type = "text",
    itemInputNameElement.placeholder = "Entrez votre nom",
    itemNameElement.appendChild(itemLabelNameElement);
    itemNameElement.appendChild(itemInputNameElement);


    const itemSurnameElement = document.createElement('div')
    const itemLabelSurnameElement = document.createElement('label');
    const itemInputSurnameElement = document.createElement('input')
    itemSurnameElement.setAttribute('class','item-form-surname');
    itemLabelSurnameElement.textContent = "Prénom",
    itemInputSurnameElement.type = "text",
    itemInputSurnameElement.placeholder = "Entrez votre prénom",
    itemSurnameElement.appendChild(itemLabelSurnameElement);
    itemSurnameElement.appendChild(itemInputSurnameElement);

    const itemAdressElement = document.createElement('div')
    const itemLabelAdressElement = document.createElement('label');
    const itemInputAdressElement = document.createElement('input')
    itemAdressElement.setAttribute('class','item-form-Adress');
    itemLabelAdressElement.textContent = "Adresse",
    itemInputAdressElement.type = "text",
    itemInputAdressElement.placeholder = "Entrez votre adresse",
    itemAdressElement.appendChild(itemLabelAdressElement);
    itemAdressElement.appendChild(itemInputAdressElement);

    const itemCityElement = document.createElement('div')
    const itemLabelCityElement = document.createElement('label');
    const itemInputCityElement = document.createElement('input')
    itemCityElement.setAttribute('class','item-form-City');
    itemLabelCityElement.textContent = "Ville",
    itemInputCityElement.type = "text",
    itemInputCityElement.placeholder = "Entrer votre nom",
    itemCityElement.appendChild(itemLabelCityElement);
    itemCityElement.appendChild(itemInputCityElement);

    const itemPostalElement = document.createElement('div')
    const itemLabelPostalElement = document.createElement('label');
    const itemInputPostalElement = document.createElement('input')
    itemPostalElement.setAttribute('class','item-form-postal');
    itemLabelPostalElement.textContent = "Code Postal",
    itemInputPostalElement.type = "number",
    itemInputPostalElement.placeholder = "Entrez votre code postal",
    itemPostalElement.appendChild(itemLabelPostalElement);
    itemPostalElement.appendChild(itemInputPostalElement);

    const itemMailElement = document.createElement('div')
    const itemLabelMailElement = document.createElement('label');
    const itemInputMailElement = document.createElement('input')
    itemMailElement.setAttribute('class','item-form-mail');
    itemLabelMailElement.textContent = "Adresse Mail",
    itemInputMailElement.type = "text",
    itemInputMailElement.placeholder = "Entrez votre e-mail",
    itemMailElement.appendChild(itemLabelMailElement);
    itemMailElement.appendChild(itemInputMailElement);

    const itemButton = document.createElement ('button')
    itemButton.setAttribute ('class','button-form')
    itemButton.textContent = "Valider";
    


    itemElement.appendChild(itemNameElement);
    itemElement.appendChild(itemSurnameElement);
    itemElement.appendChild(itemAdressElement);
    itemElement.appendChild(itemCityElement);
    itemElement.appendChild(itemPostalElement);
    itemElement.appendChild(itemMailElement);
    itemElement.appendChild(itemButton)



    document.getElementById('form-container').appendChild(itemElement);
} 



async function init() {
    displayCart();
    onLoadCartNumbers();
    displayForm()
}
init();