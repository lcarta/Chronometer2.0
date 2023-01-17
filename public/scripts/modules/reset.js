import { timesDigit } from "./timesDigit.js";
import { frame } from "./start.js";

const times = document.querySelector('#times');

const reset = () => {
  cancelAnimationFrame(frame);
  times.innerHTML = '00:00:00:00';
  timesDigit.milliseconds = 0;
  timesDigit.seconds = 0;
  timesDigit.minute = 0;
  timesDigit.hours = 0;
}


export { reset }