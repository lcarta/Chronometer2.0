import { timesDigit } from "./timesDigit.js";

const times = document.querySelector('#times');
let timeSplit = times.innerText.split(':');

const reset = () => {
  times.innerHTML = '00:00:00:00';
  timeSplit = times.innerText.split(':');
  timesDigit.milliseconds = 0;
  timesDigit.seconds = 0;
  timesDigit.minute = 0;
  timesDigit.hours = 0;
}


export { reset }