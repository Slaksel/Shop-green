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
    image_src: '/img/content/item-card1.png',
    image_alt: 'Angel Wing Begonia',
    sku: 1995751877777,
    categories: 'Potter Plants',
    tags: 'Home, Garden, Plants',
    link: 'product.html'
  }
};

function createDataTable(cards) {
  const buttonAddProduct = document.querySelector('.catalog__add-button');
  const dataTable = document.querySelector('.catalog__table');
  
  for (let cardKey in cards) {
    const card = cards[cardKey];
   
    const cardRow = document.createElement('tr'); 

    let idCard = document.createElement('td');
    idCard.textContent = card.id;
    cardRow.append(idCard);

    let cardName = document.createElement('td');
    cardName.textContent = card.name;
    cardRow.append(cardName);

    let cardDesc = document.createElement('td');
    cardDesc.textContent = card.short_desc;
    cardRow.append(cardDesc);

    let cardPrice = document.createElement('td');
    cardPrice.textContent = card.price;
    cardRow.append(cardPrice);

    let cardImgSrc = document.createElement('td');
    cardImgSrc.textContent = card.image_src;
    cardRow.append(cardImgSrc);

    let cardImgAlt = document.createElement('td');
    cardImgAlt.textContent = card.image_alt;
    cardRow.append(cardImgAlt);

    let cardSku = document.createElement('td');
    cardSku.textContent = card.sku;
    cardRow.append(cardSku);

    let cardCat = document.createElement('td');
    cardCat.textContent = card.categories;
    cardRow.append(cardCat);

    let cardTags = document.createElement('td');
    cardTags.textContent = card.tags;
    cardRow.append(cardTags);

    let cardLink = document.createElement('td');
    cardLink.textContent = card.link;
    cardRow.append(cardLink);

    const editBtn = document.createElement('button');
    editBtn.classList.add('catalog__button-edit');
    editBtn.textContent = 'edit';
  
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('catalog__button-remove');
    removeBtn.textContent = 'delete';
    removeBtn.addEventListener('click', function removeProduct() {
      let removingProduct = removeBtn.closest('tr');
      removingProduct.remove();
    });
    
    dataTable.append(cardRow);
    cardRow.append(editBtn);
    cardRow.append(removeBtn);
  }

  buttonAddProduct.addEventListener('click', function() {
    const newRowProduct = document.createElement('tr');

    const editBtn = document.createElement('button');
    editBtn.classList.add('catalog__button-edit');
    editBtn.textContent = 'edit';
  
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('catalog__button-remove');
    removeBtn.textContent = 'delete';
    removeBtn.addEventListener('click', function removeProduct() {
      let removingProduct = removeBtn.closest('tr');
      removingProduct.remove();
    });

    for (let i = 0; i < 10; i++) {
        let newColumnProduct = document.createElement('td');
        newRowProduct.append(newColumnProduct);
        newColumnProduct.insertAdjacentElement('afterend', removeBtn);
        newColumnProduct.insertAdjacentElement('afterend', editBtn);   
    }
    
    dataTable.append(newRowProduct);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  createDataTable(cards);
});
