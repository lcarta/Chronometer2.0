export let timeInfo = {
  milliSeconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
};

export let isTimerActive = false;

export const setTimeInfo = (info) => (timeInfo = { ...timeInfo, ...info });
export const toggleTimer = () => (isTimerActive = !isTimerActive);
export const stopTimer = () => (isTimerActive = false);
