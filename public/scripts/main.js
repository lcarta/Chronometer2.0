import { start, frame } from './modules/start.js';
import { reset } from './modules/reset.js';

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let setTimer;

const startChrono = () => {
  start();
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

const stopChrono = () => {
  cancelAnimationFrame(frame);
  startButton.disabled = false;
  stopButton.disabled = true;
}

const resetChrono = () => {
  reset();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startChrono);

stopButton.addEventListener('click', stopChrono);

resetButton.addEventListener('click', resetChrono);


