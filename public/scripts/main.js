import { sayHello } from './modules/sampleModule.js';
import { start, reset } from './modules/start.js';

window.onload = sayHello();

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let setTimer;
let clicked;

const startChrono = () => {
  if (clicked == true) {
    setTimer = setInterval(start, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
  }
}

const stopChrono = () => {
  clearInterval(setTimer);
  startButton.disabled = false;
  stopButton.disabled = true;
}

const resetChrono = () => {
  reset();
  clearInterval(setTimer);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startChrono, clicked = true);

stopButton.addEventListener('click', stopChrono);

resetButton.addEventListener('click', resetChrono);


