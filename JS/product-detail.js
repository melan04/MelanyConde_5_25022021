const getProductList = () => {
    return [
        {
            _id: '8585-8585-858',
            title: 'Mon Produit 1',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/00e5086b7308053bec09b3be036c036dbb27af5d_IMG-PRODUCT-234470-1.jpeg',
            price: 1555,
            description: `Cette adorable peluche Ours Caramel fait le bonheur des petits comme des grands. Avec sa jolie frimousse, son pelage doux et ses jolies couleurs, elle est rassurante et attachante. Écharpe décor étoiles. Posture: assis. Hauteur: 27 cm. Dès la naissance.`,
            option: ['Rouge', 'Bleu', 'Vert']
        },
        {
            _id: '8585-8585-859',
            title: 'Mon Produit 2',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/9236ce51429d78cb3effb7d453e9736a90304d33_IMG-PRODUCT-473254-1.jpeg',
            price: 1555,
            description: `Cette adorable peluche Ours Caramel fait le bonheur des petits comme des grands. Avec sa jolie frimousse, son pelage doux et ses jolies couleurs, elle est rassurante et attachante. Écharpe décor étoiles. Posture: assis. Hauteur: 27 cm. Dès la naissance.`,
            option: ['Rouge', 'Bleu', 'Vert']
        },
        {
            _id: '8585-8585-860',
            title: 'Mon Produit 3',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/9236ce51429d78cb3effb7d453e9736a90304d33_IMG-PRODUCT-473254-1.jpeg',
            price: 1355,
            description: `Cette adorable peluche Ours Caramel fait le bonheur des petits comme des grands. Avec sa jolie frimousse, son pelage doux et ses jolies couleurs, elle est rassurante et attachante. Écharpe décor étoiles. Posture: assis. Hauteur: 27 cm. Dès la naissance.`,
            option: ['Rouge', 'Bleu', 'Vert']
        },
        {
            _id: '8585-8585-861',
            title: 'Mon Produit 4',
            imageSrc: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/9236ce51429d78cb3effb7d453e9736a90304d33_IMG-PRODUCT-473254-1.jpeg',
            price: 1055,
            description: `Cette adorable peluche Ours Caramel fait le bonheur des petits comme des grands. Avec sa jolie frimousse, son pelage doux et ses jolies couleurs, elle est rassurante et attachante. Écharpe décor étoiles. Posture: assis. Hauteur: 27 cm. Dès la naissance.`,
            option: ['Rouge', 'Bleu', 'Vert']
        }

    ]
}
// ce qui est a l'intérieur de la fonction reste à l'intérieur de la fonction
const displayProductDetail = (productDetailOurs) => {

    const paramsUrl = window.location.search;
    const params = new URLSearchParams(paramsUrl);
    const productId = params.get("id");
    const product = productDetailOurs.find(oursDetail => productId === oursDetail._id);


    const itemELement = document.createElement('div');
    const itemImageElement = document.createElement('img');
    const itemTitleElement = document.createElement('h2');
    const itemPriceElement = document.createElement('strong')
    const itemDescriptionElement = document.createElement('p')
    const itemLabelElement = document.createElement('label')
    const itemOptionElement = document.createElement('select')
    const itemButtonElement = document.createElement('button')

    itemELement.setAttribute('class', 'item-product-detail');
    itemImageElement.setAttribute('src', product.imageSrc);
    itemTitleElement.textContent = product.title;
    itemPriceElement.textContent = `${product.price / 100}€`;
    itemDescriptionElement.textContent = product.description;
    itemLabelElement.textContent = ('Selectionner votre couleur : ')

    product.option.forEach(option => {
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


console.log(productDetail)

function init() {
    const productList = getProductList()
    displayProductDetail(productList)
}
init();

