const imgBox = document.querySelector('.imgBox');
const countText = document.querySelector('.countText');
const imgCat = document.querySelector('.img__cat');

function changeImg() {
  imgCat.src = '/basic/Simple UI/purrdream.png';
  countText.innerHTML = 'Dreamly';
  countText.classList.add('darkText');
}

let count = 5;
let intervalID = setInterval(() => {
  countText.innerHTML = `${count}`;
  count--;

  if (count < 0) {
    clearInterval(intervalID);
    changeImg();
  }
}, 1000);
