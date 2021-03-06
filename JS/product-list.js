//Importer la liste des produits 

const getProductList = async () => {
    const result = await fetch ("http://localhost:3000/api/teddies")
    const productList = await result.json ()
    return productList ;

console.log(productList)
}

//Afficher la liste

const displayProductList = (productList) => {
    for (let productItem of productList) {
        const itemElement = document.createElement('div');
        const itemImageElement = document.createElement('img');
        const itemTitleElement = document.createElement('h2');
        const itemPriceElement = document.createElement('strong');
        const itemButton = document.createElement ('a')

        itemElement.setAttribute('class', 'item-product');

        itemImageElement.setAttribute('src', productItem.imageUrl);
        itemTitleElement.textContent = productItem.name;
        itemPriceElement.textContent = `${productItem.price/100}€`;
        itemButton.href = `detail.html?id=${productItem._id}`;
        itemButton.textContent = 'Afficher plus de détails';

        itemElement.appendChild(itemImageElement)
        itemElement.appendChild(itemTitleElement)
        itemElement.appendChild(itemPriceElement)
        itemElement.appendChild(itemButton)

        document.getElementById('productListContainer').appendChild(itemElement);
  
    }  
} 
async function init() {
    const productList = await getProductList()
    displayProductList(productList)
}
init();