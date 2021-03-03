//Importer la liste des produits 

const getProductList = () => {
    return [
        {
            _id: '8585-8585-858',
            title: 'Mon Produit 1',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/00e5086b7308053bec09b3be036c036dbb27af5d_IMG-PRODUCT-234470-1.jpeg',
            price : 1555
        },
        {
            _id: '8585-8585-859',
            title: 'Mon Produit 2',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/9236ce51429d78cb3effb7d453e9736a90304d33_IMG-PRODUCT-473254-1.jpeg',
            price : 1555
        } , 
        {
            _id: '8585-8585-860',
            title: 'Mon Produit 3',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/9236ce51429d78cb3effb7d453e9736a90304d33_IMG-PRODUCT-473254-1.jpeg',
            price : 1355
        } , 
        {
            _id: '8585-8585-861',
            title: 'Mon Produit 4',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/9236ce51429d78cb3effb7d453e9736a90304d33_IMG-PRODUCT-473254-1.jpeg',
            price : 1055
        } 

    ]
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

        itemImageElement.setAttribute('src', productItem.imageSrc);
        itemTitleElement.textContent = productItem.title;
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
function init() {
    const productList = getProductList()
    displayProductList(productList)
}
init();