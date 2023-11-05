const wrapper = document.querySelector('.wrapper');

const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

btnpopup.addEventListener('click', () => { wrapper.classList.add('active-popup'); });
/*const  btnpopup = document.querySelector('.btn-popup');

btnpopup.addEventListener('click', () => {wrapper.classList.add('active-popup');});*/
iconclose.addEventListener('click', () => { wrapper.classList.remove('active-popup'); });

document.addEventListener("scroll", function() {
  let textElement = document.getElementById('moving-text-box');
  if (window.scrollY > 0) {
    textElement.parentElement.classList.add('scrolling-down');
  } else {
    textElement.parentElement.classList.remove('scrolling-down');
  }
});