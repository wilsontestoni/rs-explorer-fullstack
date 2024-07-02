import * as elements from "./elements.js";
import { router } from "./routerInstance.js";
import { linkState } from "./linkState.js";

export function handlePageChange(event) {
  router.route();

  const currentLink = event.currentTarget;

  if (linkState.activeLink) {
    elements.body.classList.remove(
      "bg-homepage",
      "bg-universepage",
      "bg-explorationpage"
    );

    for (let i = 0; i < elements.links.length; i++) {
      elements.links[i].classList.remove("active-link");
    }
  }

  const { pathname } = window.location;

  switch (pathname) {
    case "/":
      currentLink.classList.add("active-link");
      elements.body.classList.add("bg-homepage");
      break;
    case "/universe":
      currentLink.classList.add("active-link");
      elements.body.classList.add("bg-universepage");
      break;
    case "/exploration":
      currentLink.classList.add("active-link");
      elements.body.classList.add("bg-explorationpage");
      break;
  }

  linkState.activeLink = true;
  console.log("Link clicado:", pathname);
}
