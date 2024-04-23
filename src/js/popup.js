'use strict';

(function() {
  if (document.querySelector(".popup")) {
    const popup = document.querySelector(".popup");
    const popupOpenButton = document.querySelector(".header__button-login");
    const popupCloseButton = popup.querySelector(".popup__close-btn");

    const loginForm = document.querySelector('.popup__link-login');
    const regForm = document.querySelector('.popup__link-reg');
    const loginMenu = document.querySelector('.popup__menu-login');
    const regMenu = document.querySelector('.popup__menu-register');
  
    popupOpenButton.addEventListener('click', openPopup);
    popupCloseButton.addEventListener('click', closePopup);
    popupCloseButton.addEventListener('keydown', closePopupByEnterKey);
    loginForm.addEventListener('click', changeMenu);
    regForm.addEventListener('click', changeMenu);
    window.addEventListener('keydown', closePopupByEscKey);
  
    function openPopup() {
      popup.classList.add('popup__show');
    }
  
    function closePopup() {
      popup.classList.remove('popup__show');
    }

    function changeMenu(e) {
      e.preventDefault();
     loginForm.classList.toggle('popup__link--active');
     loginMenu.classList.toggle('visually-hidden');
     regForm.classList.toggle('popup__link--active');
     regMenu.classList.toggle('visually-hidden');
    }
  
    function closePopupByEnterKey(e) {
      if (e.keyCode === 13) {
        closePopup();
      }
    }
  
    function closePopupByEscKey(e) {
      if (e.keyCode === 27) {
          closePopup();
      }
    }
  }
})()