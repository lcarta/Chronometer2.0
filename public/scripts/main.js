import { start, frame } from './modules/start.js';
import { reset } from './modules/reset.js';
import { selectTheme } from './modules/selectTheme.js';

const selectThemeButton = document.querySelector('#selectTheme');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');


const startChrono = () => {
  start();
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

const stopChrono = () => {
  cancelAnimationFrame(frame);
  startButton.removeAttribute('btn-hover');
  startButton.disabled = false;
  stopButton.disabled = true;
  stopButton.removeAttribute('btn-hover');
}

const resetChrono = () => {
  reset();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

const changeTheme = () => {
  selectTheme()
}

startButton.addEventListener('click', startChrono);

stopButton.addEventListener('click', stopChrono);

resetButton.addEventListener('click', resetChrono);

selectThemeButton.addEventListener('click', changeTheme);
