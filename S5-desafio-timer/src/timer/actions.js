import * as timer from "./timer.js";
import * as element from "./elements.js";
import * as soundsLibrary from "./audios.js";

export function play() {
  soundsLibrary.clickSound.play();
  element.playButton.classList.add("playButtonRunning");
  timer.startCountdown();
}

export function stop() {
  element.playButton.classList.remove("playButtonRunning");
  timer.stopCountDown();
}

export function increaseTime() {
  timer.increaseTimeOnCountdown();
}

export function decreaseTime() {
  timer.decreaseTimeOnCountdown();
}
