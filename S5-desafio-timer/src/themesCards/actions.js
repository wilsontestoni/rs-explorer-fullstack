import * as soundsLibrary from "./audios.js";
import { themeState } from "./state.js";

export function activeForestTheme(button) {
  button.classList.toggle("bg-forestTheme");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgFlorestSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgFlorestSound;
}

export function activeRainTheme(button) {
  button.classList.toggle("bg-rainTheme");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgRainSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgRainSound;
}

export function activeCoffeeShopTheme(button) {
  button.classList.toggle("bg-coffeeTheme");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgCoffeShopSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgCoffeShopSound;
}

export function activeFireplaceTheme(button) {
  button.classList.toggle("bg-fireplaceTheme");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgFireplaceSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgFireplaceSound;
}
