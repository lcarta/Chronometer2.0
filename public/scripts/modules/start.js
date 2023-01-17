import { timesDigit } from "./timesDigit.js";
//import { reset } from "./main.js";

const times = document.querySelector('#times');
let timeSplit = times.innerText.split(':')

const reset = () => {
  times.innerHTML = '00:00:00:00';
  timeSplit = times.innerText.split(':');
  timesDigit.milliseconds = 0;
  timesDigit.seconds = 0;
  timesDigit.minute = 0;
  timesDigit.hours = 0;
}
//const setMs=(value)=>{ms=value}

const start = () => {
  if (timesDigit.milliseconds < 99) {
    timesDigit.milliseconds += 1;
    timeSplit[3] = String((timesDigit.milliseconds)).padStart(2, '0');
    times.innerHTML = timeSplit.join(':');
  } else {
    timesDigit.milliseconds = 0;
    timeSplit[3] = String((timesDigit.milliseconds)).padStart(2, '0');
    if (timesDigit.seconds < 59) {
      timesDigit.seconds += 1;
      timeSplit[2] = String((timesDigit.seconds)).padStart(2, '0');
    } else {
      timesDigit.seconds = 0;
      timeSplit[2] = String((timesDigit.seconds)).padStart(2, '0');
      if (timesDigit.minute < 59) {
        timesDigit.minute += 1;
        timeSplit[1] = String((timesDigit.minute)).padStart(2, '0');
      } else if (timesDigit.hours < 59) {
        timesDigit.minute = 0;
        timeSplit[1] = String((timesDigit.minute)).padStart(2, '0');
        timesDigit.hours += 1;
        timeSplit[0] = String((timesDigit.hours)).padStart(2, '0');

      }

    }
  }

}


export { start, reset }