import * as timer from "./timer.js";
import * as element from "./elements.js";
import * as soundsLibrary from "./audios.js";
import { state } from "./state.js";

export function play() {
  if (state.running) return;

  state.running = true;

  soundsLibrary.clickSound.play();
  element.playButton.classList.add("playButtonRunning");
  timer.startCountdown();
}

export function stop() {
  state.running = false;
  element.playButton.classList.remove("playButtonRunning");
  timer.stopCountDown();
}

export function increaseTime() {
  timer.increaseTimeOnCountdown();
}

export function decreaseTime() {
  timer.decreaseTimeOnCountdown();
}
