const body = document.querySelector('body');
const darkToggle = document.querySelector('.darkToggle');

let count = 0;
darkToggle.addEventListener('click', () => {
  count++;
  if (count % 2 !== 0) {
    body.classList.add('lightBg');
    darkToggle.classList.add('lightToggle');
    darkToggle.innerHTML = `
        <i class="fa-solid fa-sun lightIcon"></i> Light Mode
        `;
  } else {
    body.classList.remove('lightBg');
    darkToggle.classList.remove('lightToggle');
    darkToggle.innerHTML = `
        <i class="fa-solid fa-moon darkIcon"></i> Dark Mode
        `;
  }
});
