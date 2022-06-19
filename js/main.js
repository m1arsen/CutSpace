// Подсветка во время ввода в header

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', function () {
  form.classList.add('form--active');
})

input.addEventListener('blur', function () {
  form.classList.remove('form--active');
})

// Навигация

const nav = document.querySelector('#navigation');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = "./img/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
}