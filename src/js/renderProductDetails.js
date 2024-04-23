'use strict';

(function renderProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('product');

  if (productName) {
    const cards = {
      barbertonDaisy: {
        name: 'Barberton Daisy',
        short_desc: 'Barberton Daisy',
        price: '$119.00',
        image_src: '/img/content/item-card1.png',
        image_alt: 'Barberton Daisy',
        sku: 1995751877966,
        categories: 'Potter Plants',
        tags: 'Home, Garden, Plants',
        link: 'product.html'
      },
      angelWingBegonia: {
        name: 'Angel Wing Begonia',
        short_desc: 'Angel Wing Begonia',
        price: '$210.00',
        image_src: '/img/content/item-card1.png',
        image_alt: 'Angel Wing Begonia',
        sku: 1995751877777,
        categories: 'Potter Plants',
        tags: 'Home, Garden, Plants',
        link: 'product.html'
      }
    };
  
    const selectedProduct = cards[productName];
    const cardTitle = document.querySelector('.card__title');
    const cardDesc = document.querySelector('.card__text');
    const cardPrice = document.querySelector('.card__desc-header-price');
    const cardSku = document.querySelector('.card__sku-text');
    const cardCategories = document.querySelector('.card__categories-text');
    const cardTags = document.querySelector('.card__tags-text');
  
    cardTitle.innerHTML = selectedProduct.name;
    cardPrice.innerHTML = selectedProduct.price;
    cardDesc.innerHTML = selectedProduct.short_desc;
    cardSku.innerHTML = selectedProduct.sku;
    cardCategories.innerHTML = selectedProduct.categories;
    cardTags.innerHTML = selectedProduct.tags;
  }
  
  
})();