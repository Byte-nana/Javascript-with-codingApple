// subMenu
const submenu = document.querySelector('.nav__submenu');
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
  submenu.classList.toggle('visible');
});

// Scroll event
// navBar scrolling
const navBar = document.querySelector('.navBar');
const progressBar = document.querySelector('.progressBar');

window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    navBar.classList.add('scroll__navBar');
  } else {
    navBar.classList.remove('scroll__navBar');
  }
  // progression bar
  const scrollHeight = document.documentElement.scrollHeight;
  const innerHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = (scrollTop / (scrollHeight - innerHeight)) * 100;

  progressBar.style.width = `${progress}%`;
});

// toc srolling
const tocBox = document.querySelector('.toc__box');
const scrollable = tocBox.scrollHeight - tocBox.clientHeight;

tocBox.addEventListener('scroll', () => {
  if (tocBox.scrollTop > scrollable - 10) {
    const btnsBox = document.querySelector('.btns__box');
    btnsBox.innerHTML = `
      <button class="btn__decline">Decline</button>
      <button class="btn__accept">Accept</button>
    `;
  }
});
