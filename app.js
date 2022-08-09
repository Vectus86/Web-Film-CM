'use strict';

// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

// Loader
document.onreadystatechange = function () {
  if (document.readyState !== 'complete') {
    document.querySelector('body').style.visibility = 'hidden';
    document.querySelector('#loader').style.visibility = 'visible';
  } else {
    setTimeout(function () {
      document.querySelector('#loader').style.display = 'none';
      document.querySelector('body').style.visibility = 'visible';
    }, 2000); // ganti 1000 dengan delaynya, dalam hitungan milidetik
  }
};

// const toggle = document.getElementById('toggle');
// const navbar = document.getElementById('navigasi');

// document.onclick = function (e) {
//   if (e.target.id !== 'navbar' && e.target.id !== 'toggle') {
//     toggle.classList.remove('active');
//     navbar.classList.remove('active');
//   }
// };
