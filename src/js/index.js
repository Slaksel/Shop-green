"use strict"

const headerInput = document.querySelector('.header__input');
const headerInputIcon = document.querySelector('.header__input-icon');

headerInput.addEventListener('focus', () => {
    headerInputIcon.style.display = 'none';
});

headerInput.addEventListener('blur', () => {
    headerInputIcon.style.display = 'block';
});

