const getProduct = async (id) => {
    const result = await fetch(`http://localhost:3000/api/teddies/${id}`)
    const product = await result.json()
    return product;
}

// ce qui est a l'intérieur de la fonction reste à l'intérieur de la fonction
const displayProductDetail = (product) => {

    const itemELement = document.createElement('div');
    const itemImageElement = document.createElement('img');
    const itemTitleElement = document.createElement('h2');
    const itemPriceElement = document.createElement('strong')
    const itemDescriptionElement = document.createElement('p')
    const itemLabelElement = document.createElement('label')
    const itemOptionElement = document.createElement('select')
    const itemButtonElement = document.createElement('button')

    itemELement.setAttribute('class', 'item-product-detail');
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

}

async function init() {

    const paramsUrl = window.location.search;
    const params = new URLSearchParams(paramsUrl);
    const productId = params.get("id");
    const productList = await getProduct(productId)
    displayProductDetail(productList)
}
init();

