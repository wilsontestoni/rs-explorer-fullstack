import * as element from "./elements.js";
import * as actions from "./actions.js";

export function registerCouterControl() {
  element.controls.addEventListener("click", (event) => {
    const action = event.target.parentNode.dataset.action;

    if (typeof action !== "string") {
      return;
    }

    actions[action]();
  });
}
