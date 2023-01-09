const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let counter = 0;

incrementButton.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
});

decrementButton.addEventListener('click', () => {
  counter--;
  counterElement.textContent = counter;
});

resetButton.addEventListener('click', () => {
  counter = 0;
  counterElement.textContent = counter;
});
