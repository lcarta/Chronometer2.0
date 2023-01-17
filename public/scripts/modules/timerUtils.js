import { isTimerActive, setTimeInfo, stopTimer, timeInfo } from "./globals.js";

export const resetTimer = () => {
  stopTimer();
  setTimeInfo({ milliSeconds: 0, seconds: 0, minutes: 0, hours: 0 });
};

export const getTimeInfoDisplay = () => {
  const hours = timeInfo.hours.toString().padStart("2", 0);
  const minutes = timeInfo.minutes.toString().padStart("2", 0);
  const seconds = timeInfo.seconds.toString().padStart("2", 0);
  const milliSeconds = timeInfo.milliSeconds.toString().padStart("3", 0);
  return `${hours}:${minutes}:${seconds}.${milliSeconds}`;
};

export const updateTimer = (timeStep, timer) => {
  if (isTimerActive) {
    setTimeInfo({
      milliSeconds: Math.trunc(timeStep % 1000),
      seconds: Math.trunc((timeStep / 1000) % 60),
      minutes: Math.trunc((timeStep / (1000 * 60)) % 60),
      hours: Math.trunc((timeStep / (1000 * 3600)) % 60),
    });
  }

  if (timer) timer.innerText = getTimeInfoDisplay();
};
