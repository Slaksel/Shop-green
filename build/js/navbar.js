document.addEventListener('DOMContentLoaded', function() {
  const pathElement = document.querySelector('.card__current-path');
  const path = window.location.pathname; // Получаем текущий путь страницы

  // Создаем элементы ссылок
  const homeLink = document.createElement('a');
  homeLink.href = 'index.html'; // Устанавливаем ссылку для домашней страницы
  homeLink.textContent = 'Home'; // Устанавливаем текст для элемента ссылки
  homeLink.style.fontWeight = '700';

  const currentLink = document.createElement('a');
  currentLink.href = path; // Устанавливаем ссылку для текущего пути
  currentLink.textContent = ' / Shop'; // Устанавливаем текст для элемента ссылки

  // Очищаем содержимое элемента-контейнера, чтобы добавить новые элементы ссылок
  pathElement.innerHTML = '';

  // Добавляем созданные элементы ссылок внутрь элемента-контейнера
  pathElement.appendChild(homeLink);
  pathElement.appendChild(currentLink);

  // Устанавливаем стили курсора
  pathElement.style.cursor = 'pointer';

  // Добавляем обработчик клика для текущего пути
  currentLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)
    window.location.href = path; // Перенаправляем пользователя на текущую страницу
  });
});