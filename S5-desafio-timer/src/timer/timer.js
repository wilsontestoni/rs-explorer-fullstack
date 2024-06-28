import * as element from "./elements.js";
import { state } from "./state.js";
import * as soundsLibrary from "./audios.js";

export function startCountdown() {

  clearTimeout(state.countDownId);


  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent) - 1;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    element.playButton.classList.remove("playButtonRunning");
    soundsLibrary.kitchenTimerSound.play();
    updateDisplay();
    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownId = setTimeout(startCountdown, 1000);
}

export function stopCountDown() {
  clearTimeout(state.countDownId);

  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  element.minutes.textContent = String(minutes).padStart(2, "0");
  element.seconds.textContent = String(seconds).padStart(2, "0");
}

export function increaseTimeOnCountdown() {
  const increasedCurrentMinutes = Number(element.minutes.textContent) + 5;
  if (increasedCurrentMinutes > 60) {
    element.minutes.textContent = String(60).padStart(2, "0");
    return;
  }
  element.minutes.textContent = String(increasedCurrentMinutes).padStart(
    2,
    "0"
  );
}

export function decreaseTimeOnCountdown() {
  const decreasedCurrentMinutes = Number(element.minutes.textContent) - 5;
  if (decreasedCurrentMinutes < 0) {
    console.log(decreasedCurrentMinutes);
    element.minutes.textContent = String(0).padStart(2, "0");
    return;
  }
  element.minutes.textContent = String(decreasedCurrentMinutes).padStart(
    2,
    "0"
  );
}

export function updateDisplay(
  minutes = state.minutes,
  seconds = state.seconds
) {
  element.minutes.textContent = String(minutes).padStart(2, "0");
  element.seconds.textContent = String(seconds).padStart(2, "0");
}
