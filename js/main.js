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
(function(){
  const navBar = document.querySelector('.navigation');
  const navBtn = document.querySelector('.nav__btn');
  const navLink = document.querySelectorAll('.navigation__link');

  navBtn.addEventListener("click", () => {

    if (! navBar.classList.contains('open')) {
      navBar.classList.add('open');
    } else {
      navBar.classList.remove('open');
    }
  });

  for(let i = 0; i < navLink.length; i++) {
    const currentNavLink = navLink[i];

    currentNavLink.addEventListener("click", () => {


        if(! currentNavLink.classList.contains('active')) {
          navLink.forEach(function() {
            for(let i = 0; i < navLink.length; i++) {
              navLink[i].classList.remove('active');
            };
            currentNavLink.classList.add('active');
          });
        }
    });
  }

}());