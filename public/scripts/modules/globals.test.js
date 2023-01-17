import {
  toggleTimer,
  isTimerActive,
  timeInfo,
  setTimeInfo,
  stopTimer,
} from "./globals.js";

describe("Check if setTimeInfo change time", () => {
  test("Change timeInfo", () => {
    setTimeInfo({ milliSeconds: 10, hours: 1 });
    expect(timeInfo.hours).toBe(1);
    expect(timeInfo.milliSeconds).toBe(10);
    expect(timeInfo.minutes).toBe(0);
  });
});

describe("Check changes on isTimerActive", () => {
  test("Toggle timer", () => {
    const isNowTimerActive = isTimerActive;
    toggleTimer();
    expect(isNowTimerActive).toBeFalsy();
    expect(isTimerActive).not.toBe(isNowTimerActive);
    toggleTimer();
  });

  test("Stop timer", () => {
    toggleTimer();
    expect(isTimerActive).toBeTruthy();
    stopTimer();
    expect(isTimerActive).toBeFalsy();
  });
});
