'use strict';

const cardsJSON = localStorage.getItem('data');
const cards = JSON.parse(cardsJSON);

const modal = document.querySelector('.catalog__modal');
const closeButton = document.querySelector('.catalog__modal-close');
const saveButton = document.querySelector('.catalog__modal-save');

const buttonAddProduct = document.querySelector('.catalog__add-button');
const dataTable = document.querySelector('.catalog__table');

let editType = false;

function createDataTable(cards) {

  for (let cardKey in cards) {
    const card = cards[cardKey];
   
    let cardRow = dataTable.insertRow();

    cardRow.innerHTML = `
      <td>${card.id}</td>
      <td>${card.name}</td>
      <td>${card.short_desc}</td>
      <td>${card.price}</td>
      <td>${card.image_src}</td>
      <td>${card.image_alt}</td>
      <td>${card.sku}</td>
      <td>${card.categories}</td>
      <td>${card.tags}</td>
      <td>${card.link}</td>
      <button class="catalog__button-edit">edit</button>
      <button class="catalog__button-remove">delete</button>
    `;
    
    dataTable.append(cardRow);
  }

  buttonAddProduct.addEventListener('click', addProduct);

  closeButton.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  saveButton.addEventListener('click', saveRow);

  const editButtons = document.querySelectorAll('.catalog__button-edit');
  const removeButtons = document.querySelectorAll('.catalog__button-remove');

  editButtons.forEach(editBtn => {
    editBtn.addEventListener('click', editRow);
  });

  removeButtons.forEach(removeBtn => {
    removeBtn.addEventListener('click', removeRow);
  });

}

document.addEventListener("DOMContentLoaded", function() {
  createDataTable(cards);
});

function addProduct(){
  editType = false;
  modal.style.display = 'block';
  modal.querySelectorAll('input').forEach(el => {
    el.value = '';
  });
}

function editRow(event) {
  editType = true;
  let currentRow = event.target.closest('tr');
  const cells = currentRow.querySelectorAll('td');
  modal.style.display = 'block';
  const inputs = modal.querySelectorAll('input');
  cells.forEach((cell, index) => {
    inputs[index].value = cell.textContent;
  });
}

function removeRow() {
  const removingProduct = this.closest('tr');
  removingProduct.remove();
}

function saveRow(event) {
    
  let productId = document.querySelector('.productId').value;
  let productName = document.querySelector('.productName').value;
  let productDesc = document.querySelector('.productDesc').value;
  let productPrice = document.querySelector('.productPrice').value;
  let productImg = document.querySelector('.productImg').value;
  let productAlt = document.querySelector('.productAlt').value;
  let productSku = document.querySelector('.productSku').value;
  let productCat = document.querySelector('.productCat').value;
  let productTags = document.querySelector('.productTags').value;
  let productLink = document.querySelector('.productLink').value;

  if (editType ==  true) {
    let currentRow = event.target;
    let tds = currentRow.querySelectorAll('td');
    let inputs = modal.querySelectorAll('input');
    tds.forEach((td, index) => {
      td.textContent = inputs[index].value;
      console.log(inputs[index].value);
    });
  }

  else if (editType == false) {
    const newProduct = document.createElement('tr');
    newProduct.innerHTML = `
      <td>${productId}</td>
      <td>${productName}</td>
      <td>${productDesc}</td>
      <td>${productPrice}</td>
      <td>${productImg}</td>
      <td>${productAlt}</td>
      <td>${productSku}</td>
      <td>${productCat}</td>
      <td>${productTags}</td>
      <td>${productLink}</td>
    `;

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('catalog__button-edit');
    editButton.addEventListener('click', editRow);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'delete';
    removeButton.classList.add('catalog__button-remove');
    removeButton.addEventListener('click', removeRow);

    newProduct.append(editButton);
    newProduct.append(removeButton);
    dataTable.append(newProduct);
  }
  
  modal.style.display = 'none';  
  console.log(editType);
};