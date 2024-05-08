'use strict';

const cards = {
  barbertonDaisy: {
    id: '1',
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
    id: '2',
    name: 'Angel Wing Begonia',
    short_desc: 'Angel Wing Begonia',
    price: '$210.00',
    image_src: '/img/content/item-card2.png',
    image_alt: 'Angel Wing Begonia',
    sku: 1995751877777,
    categories: 'Potter Plants',
    tags: 'Home, Garden, Plants',
    link: 'product.html'
  },
  africanViolet: {
    id: '3',
    name: 'African Violet',
    short_desc: 'African Violet',
    price: '$333.00',
    image_src: '/img/content/item-card3.png',
    image_alt: 'African Violet',
    sku: 1995757999777,
    categories: 'Potter Plants',
    tags: 'Home, Garden, Plants',
    link: 'product.html'
  },
  beachSpiderLily: {
    id: '4',
    name: 'Beach Spider Lily',
    short_desc: 'Beach Spider Lily',
    price: '$222.00',
    image_src: '/img/content/item-card3.png',
    image_alt: 'Beach Spider Lily',
    sku: 199575755555,
    categories: 'Potter Plants',
    tags: 'Home, Garden, Plants',
    link: 'product.html'
  }
};

const cardsJson = JSON.stringify(cards);

localStorage.setItem('data', cardsJson);

// export default cardsJson;