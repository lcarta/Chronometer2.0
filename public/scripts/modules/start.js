import { checkTime } from "./checkTime.js";
//import { reset } from "./main.js";


const times = document.querySelector('#times');
let timeSplit = times.innerText.split(':')
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
console.log(ms, s, m, h)



const reset = () => {
  times.innerHTML = '00:00:00:00';
  timeSplit = times.innerText.split(':');
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  console.log(h, m, s, ms)
}
//const setMs=(value)=>{ms=value}

const start = () => {
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
      if (m < 59) {
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

}


export { start, ms, s, m, h, reset }