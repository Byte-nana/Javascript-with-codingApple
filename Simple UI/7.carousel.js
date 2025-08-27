const btns = document.querySelectorAll('.card__dot');
const cardList = document.querySelector('.card__list');
const dotInd = document.querySelector('.card__dots');
const heartI = document.querySelectorAll('.card__dots .card__dot i');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');
const cardItem = document.querySelectorAll('.card__item');

// Set data to dotInd
function addData() {
  heartI.forEach((__, index) => {
    heartI[index].setAttribute('data-heart', index);
  });
}
addData();

let currentSlide = 0;
const totalSlides = cardItem.length;

// Add event listener
dotInd.addEventListener('click', (e) => {
  const dataHeart = e.target.dataset.heart;
  if (dataHeart) {
    let index = +dataHeart;
    cardList.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
  }
});

function goToSlide(index) {
  currentSlide = index;
  cardList.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
});
