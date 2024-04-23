'use strict';

(function showGallery() {
  const imageItems = document.querySelectorAll('.card__images-item');
  const currentImageItem = document.querySelector('.card__images-current-item');

  imageItems.forEach(imgItem => {
    imgItem.addEventListener('click', function() {
        const path = imgItem.src;
        imageItems.forEach(imgItem => {
            imgItem.classList.remove('card__images-item--active');
        });

        this.classList.add('card__images-item--active');

        currentImageItem.src = path;
    });
  });
})();