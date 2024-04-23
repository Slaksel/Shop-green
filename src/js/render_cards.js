'use strict';

(function renderCards() {
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

  const products = document.querySelectorAll('.products__wrapper');
  if (products) {
    const productCard = document.querySelectorAll('.product');
    productCard.forEach(card => {
      card.addEventListener('click', function() {
        const productName = card.getAttribute('data-product');
        const productData = cards[productName];
        // Переход на страницу product.html с передачей параметра продукта
        window.location.href = `product.html?product=${productName}`;
      });
    });
  }
})();

