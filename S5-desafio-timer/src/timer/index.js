import * as timer from "./timer.js";
import * as controls from "./controls.js";

export function startTimer() {
  timer.updateDisplay();
  controls.registerCouterControl();
}
