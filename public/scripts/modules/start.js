import { timesDigit } from "./timesDigit.js";

const times = document.querySelector('#times');
let timeSplit = times.innerText.split(':');
let frame;

const start = () => {
  timesDigit.milliseconds += 1;
  let timesDigitMilliseconds = parseInt(timesDigit.milliseconds * 100 / 60);
  let timesDigitSeconds = parseInt(timesDigit.milliseconds / 60);
  let timesDigitMinute = parseInt(timesDigit.milliseconds / 3600);
  let timesDigitHour = parseInt(timesDigit.milliseconds / 216000);
  timeSplit[3] = String(((timesDigitMilliseconds) % 99)).padStart(2, '0');
  timeSplit[2] = String(((timesDigitSeconds) % 60)).padStart(2, '0');
  timeSplit[1] = String(((timesDigitMinute) % 60)).padStart(2, '0');
  timeSplit[0] = String(((timesDigitHour) % 99)).padStart(2, '0');
  times.innerHTML = `${timeSplit[0]}:${timeSplit[1]}.${timeSplit[2]},${timeSplit[3]}`;
  frame = requestAnimationFrame(start);
}

export { start, frame }