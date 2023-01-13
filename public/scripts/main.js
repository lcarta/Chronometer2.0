import { sayHello } from './modules/sampleModule.js';
import { start, reset } from './modules/start.js';
import { checkTime } from './modules/checkTime.js';


//window.onload = sayHello();
//window.onload = startChrono();

let setTimer;
let clicked;



const startChrono = () => {
  if (clicked == true) {
    setTimer = setInterval(start, 10);
    clicked = false;
  }
}

const stopChrono = () => {
  clearInterval(setTimer);
  clicked = true;
}

const resetChrono = () => {

  reset();
  clearInterval(setTimer);
  clicked = true;
}

/*const start = () => {
  if (ms < 99) {
    ms += 1;
    timeSplit[3] = checkTime(ms);
    times.innerHTML = timeSplit.join(':');
  } else {
    ms = 0;
    timeSplit[3] = checkTime(ms);
    if (s < 59) {
      s += 1;
      timeSplit[2] = checkTime(s);
    } else {
      s = 0;
      timeSplit[2] = checkTime(s);
      if (m < 2) {
        m += 1;
        timeSplit[1] = checkTime(m);
      } else if (h < 59) {
        m = 0;
        timeSplit[1] = checkTime(m);
        h += 1;
        timeSplit[0] = checkTime(h);
      }

    }
  }

}*/


const startButton = document.querySelector('#start');
startButton.addEventListener('click', startChrono, clicked = true);


const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', stopChrono);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetChrono);


