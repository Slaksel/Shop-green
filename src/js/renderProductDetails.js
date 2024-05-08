'use strict';

(function renderProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('product'); // данные из data-product 

    const cardsJSON = localStorage.getItem('data');
    const cards = JSON.parse(cardsJSON);

  if (productName && cards[productName]) {

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