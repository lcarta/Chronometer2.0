import { isTimerActive, timeInfo, toggleTimer } from "./globals";
import { getTimeInfoDisplay, resetTimer, updateTimer } from "./timerUtils";

describe("Check if getTimeInfoDisplay return correct time", () => {
  test("Get time info display value", () => {
    const time = getTimeInfoDisplay();
    expect(time).toBe("00:00:00.000");
  });
});

describe("Check if updateTimer work as expected", () => {
  test("Check if timer display update correctly", () => {
    resetTimer();
    expect(timeInfo.milliSeconds).toBe(0);
    expect(timeInfo.seconds).toBe(0);
    expect(timeInfo.minutes).toBe(0);
    expect(timeInfo.hours).toBe(0);
    expect(isTimerActive).toBeFalsy();
  });
});

describe("Check if updateTimer work correctly", () => {
  test("Check with timer inactive", () => {
    updateTimer(10);
    expect(timeInfo.milliSeconds).toBe(0);
    expect(timeInfo.seconds).toBe(0);
    expect(timeInfo.minutes).toBe(0);
    expect(timeInfo.hours).toBe(0);
    expect(isTimerActive).toBeFalsy();
  });

  test("Check if timer display update correctly", () => {
    document.body.innerHTML = "<p id='timer'>00:00:00.000</p>";
    const timer = document.getElementById("timer");
    toggleTimer();

    updateTimer(999, timer);
    expect(timer.innerText).toBe("00:00:00.999");
    updateTimer(1_000, timer);
    expect(timer.innerText).toBe("00:00:01.000");
    updateTimer(600_000, timer);
    expect(timer.innerText).toBe("00:10:00.000");
    updateTimer(3_600_000, timer);
    expect(timer.innerText).toBe("01:00:00.000");
  });
});
