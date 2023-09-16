const carouselContainer = document.querySelector('.img-container');
const carousel = document.querySelector('.imgs');
const carouselCards = Array.from(document.querySelectorAll('.slider-image'));
const paginationDots = Array.from(document.querySelectorAll('.slider-dot-box'));

const txtCards = Array.from(document.querySelectorAll('.slider-title'));
const titles = Array.from(document.querySelectorAll('.title'));

let cardWidth;
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    currentIndex =0;
    showCurrentCard();
  });

 function showCurrentCard() {
    const cardWidth = carouselCards[0].offsetWidth + parseFloat(getComputedStyle(carouselCards[0]).marginRight);
    carousel.style.transform = `translateX(-${currentIndex * (cardWidth)}px)`;

    paginationDots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
      });

    txtCards.forEach((txt, index) => {
        if (index === currentIndex) {
          txt.classList.add('active');
        } else {
          txt.classList.remove('active');
        }
      });

      titles.forEach((title, index) => {
        if (index === currentIndex) {
          title.classList.add('active');
        } else {
          title.classList.remove('active');
        }
      });
}
paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showCurrentCard();
    });
  });
  
  carouselContainer.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselCards.length;
    showCurrentCard();
  });