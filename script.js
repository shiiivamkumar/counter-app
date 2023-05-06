const countEl = document.querySelector('.count');
const incrementBtn = document.querySelector('.increment-btn');
const resetBtn = document.querySelector('.reset-btn');
let count = 0;
incrementBtn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});
resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});
