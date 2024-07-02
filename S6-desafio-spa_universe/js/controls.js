import * as elements from "./elements.js";
import * as actions from "./actions.js";

export function linkControls() {
  for (let i = 0; i < elements.links.length; i++) {
    elements.links[i].addEventListener("click", actions.handlePageChange);
  }
}
