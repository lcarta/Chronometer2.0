import { timesDigit } from "./timesDigit.js";
//import { reset } from "./main.js";

const times = document.querySelector('#times');
let timeSplit = times.innerText.split(':');
//const setMs=(value)=>{ms=value}
const start = () => {
  timesDigit.milliseconds += 1;
  let timesDigitSeconds = parseInt(timesDigit.milliseconds / 100);
  let timesDigitMinute = parseInt(timesDigit.milliseconds / 6000);
  let timesDigitHour = parseInt(timesDigit.milliseconds / 360000);
  timeSplit[3] = String(((timesDigit.milliseconds) % 99)).padStart(2, '0');
  timeSplit[2] = String(((timesDigitSeconds) % 60)).padStart(2, '0');
  timeSplit[1] = String(((timesDigitMinute) % 60)).padStart(2, '0');
  timeSplit[0] = String(((timesDigitHour) % 99)).padStart(2, '0');
  times.innerHTML = timeSplit.join(':');
}

export { start }