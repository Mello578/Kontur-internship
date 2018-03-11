/**
 * скрываем лоадер после загрузки страницы
 */
window.onload = () => {
  let preloader = document.getElementsByClassName('preloader');
  preloader[0].style.display = 'none';
};