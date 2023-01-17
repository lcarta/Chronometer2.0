import { toggleTimer, resetTimer, updateTimer } from "./modules/index.js";

window.toggleTimer = toggleTimer;
window.resetTimer = resetTimer;

let timer;
const onInitialize = () => (timer = document.getElementById("timer"));

const onApplicationRun = (timeStep) => {
  updateTimer(timeStep, timer);
  window.requestAnimationFrame(onApplicationRun);
};

onInitialize();
window.requestAnimationFrame(onApplicationRun);
