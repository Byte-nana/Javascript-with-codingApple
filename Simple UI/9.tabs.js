const btns = document.querySelector('.btns');
const boxes = document.querySelectorAll('.subscriptionBox');

btns.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (!id) return;

  boxes.forEach((box) => {
    box.style.display = box.dataset.id === id ? 'block' : 'none';
  });
});
