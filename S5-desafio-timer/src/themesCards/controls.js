import * as elements from "./elements.js";
import * as actions from "./actions.js";
import { themeState } from "./state.js";

export function registerCardsControl() {
  elements.themesContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-theme]");

    if (!button) return;

    const theme = button.dataset.theme;

    if (typeof theme !== "string") return;

    if (themeState.themeActived) {
      themeState.themeSound.pause();
      themeState.themeSound.currentTime = 0;

      const buttonActived = elements.themesContainer.querySelector(
        `[data-theme="${themeState.themeChosed}"]`
      );

      buttonActived.classList.toggle(`bg-${themeState.themeChosed}`);
      buttonActived.querySelector("img").classList.toggle("selected");
    }

    switch (theme) {
      case "forestTheme":
        themeState.themeChosed = "forestTheme";
        actions.activeForestTheme(button);
        break;
      case "rainTheme":
        themeState.themeChosed = "rainTheme";
        actions.activeRainTheme(button);
        break;
      case "coffeeTheme":
        themeState.themeChosed = "coffeeTheme";
        actions.activeCoffeeShopTheme(button);
        break;
      case "fireplaceTheme":
        themeState.themeChosed = "fireplaceTheme";
        actions.activeFireplaceTheme(button);
        break;
    }
  });
}
