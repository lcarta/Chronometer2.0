import { checkTime } from "./checkTime.js";
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
    timeSplit[3] = checkTime(timesDigit.milliseconds);
    times.innerHTML = timeSplit.join(':');
  } else {
    timesDigit.milliseconds = 0;
    timeSplit[3] = checkTime(timesDigit.milliseconds);
    if (timesDigit.seconds < 59) {
      timesDigit.seconds += 1;
      timeSplit[2] = checkTime(timesDigit.seconds);
    } else {
      timesDigit.seconds = 0;
      timeSplit[2] = checkTime(timesDigit.seconds);
      if (timesDigit.minute < 59) {
        timesDigit.minute += 1;
        timeSplit[1] = checkTime(timesDigit.minute);
      } else if (timesDigit.hours < 59) {
        timesDigit.minute = 0;
        timeSplit[1] = checkTime(timesDigit.minute);
        timesDigit.hours += 1;
        timeSplit[0] = checkTime(timesDigit.hours);
      }

    }
  }

}


export { start, reset }