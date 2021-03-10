const getProduct = async (id) => {
    const result = await fetch(`http://localhost:3000/api/teddies/${id}`)
    const product = await result.json()
    return product;
}

const displayProductDetail = (product) => {

    const itemELement = document.createElement('div');
    const itemImageElement = document.createElement('img');
    const itemTitleElement = document.createElement('h2');
    const itemPriceElement = document.createElement('strong')
    const itemDescriptionElement = document.createElement('p')
    const itemLabelElement = document.createElement('label')
    const itemOptionElement = document.createElement('select')
    const itemButtonElement = document.createElement('button-cart')

    itemELement.setAttribute('class', 'item-product-detail');
    itemButtonElement.setAttribute('class', 'cart');
    itemImageElement.setAttribute('src', product.imageUrl);
    itemTitleElement.textContent = product.name;
    itemPriceElement.textContent = `${product.price / 100}€`;
    itemDescriptionElement.textContent = product.description;
    itemLabelElement.textContent = ('Sélectionner votre couleur : ')

    product.colors.forEach(option => {
        const optionElement = document.createElement('option')
        optionElement.value = option
        optionElement.text = option
        itemOptionElement.appendChild(optionElement)
    });

    itemButtonElement.textContent = 'Ajouter au panier';

    itemELement.appendChild(itemImageElement)
    itemELement.appendChild(itemTitleElement)
    itemELement.appendChild(itemPriceElement)
    itemELement.appendChild(itemDescriptionElement)
    itemELement.appendChild(itemLabelElement)
    itemLabelElement.appendChild(itemOptionElement)
    itemELement.appendChild(itemButtonElement)
    document.getElementById('productDetail').appendChild(itemELement);


    // Ajouter un élément dans le panier 

    let carts = document.querySelectorAll('button-cart');

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(product);
            totalCost(product)

        })
    }


    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers')

        if (productNumbers) {
            document.querySelector('.cart-shop span').textContent = productNumbers;
        }
    }

    function cartNumbers(product) {

        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers); // on transforme le "string" en nombre  

        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1); // si productNumbers existe deja dans le locale storage
            document.querySelector('.cart-shop span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('cartNumbers', 1); // si productNumbers n'existe pas encore dans le local storage
            document.querySelector('.cart-shop span').textContent = 1;
        }

        setItems(product);

    }


    function setItems(product) {
        let cartItems = localStorage.getItem('productInCart');
        cartItems = JSON.parse(cartItems);


        if (cartItems !== null) {

            if (cartItems[product._id] == undefined) {
                product.inCart = 0;
                cartItems = {
                    ...cartItems,
                    [product._id]: product

                }
            }
            cartItems[product._id].inCart += 1;

        } else {
            product.inCart = 1;
            cartItems = {
                [product._id]: product
            }
        }

        localStorage.setItem('productInCart', JSON.stringify(cartItems));

    }

    function totalCost(product) {


        let cartCost = localStorage.getItem('totalCost');


        if (cartCost != null) {

            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price / 100)
        } else {
            localStorage.setItem("totalCost", product.price / 100)
        }



    }

    onLoadCartNumbers();
}


// Appeler la fonction 

async function init() {

    const paramsUrl = window.location.search;
    const params = new URLSearchParams(paramsUrl);
    const productId = params.get("id");
    const productList = await getProduct(productId)
    displayProductDetail(productList)

}
init();

