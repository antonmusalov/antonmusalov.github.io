// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


let slideIndices = {};

function plusSlides(n, Id) {
  if (!slideIndices[Id]) {
    slideIndices[Id] = 1;
  }
  showSlides(slideIndices[Id] += n, Id);
}

function currentSlide(n, Id) {
  showSlides(slideIndices[Id] = n, Id);
}

function showSlides(n, Id) {
  let i;
  let slides = document.querySelectorAll(`.slideshow-container[data-id='${Id}'] .mySlides`);

  if (n > slides.length) { slideIndices[Id] = 1; }
  if (n < 1) { slideIndices[Id] = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndices[Id]-1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const targetIds = ['1', '2', '3','4'];  // specify the target data-id values
  targetIds.forEach(Id => {
    console.log("Initializing slideshow with ID:", Id); // Log to see which IDs are being processed
    slideIndices[Id] = 1;
    showSlides(1, Id);
  });
});

