import * as soundsLibrary from "./audios.js";
import { themeState } from "./state.js";

export function tree(button) {
  button.classList.toggle("bg-tree");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgFlorestSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgFlorestSound;
}

export function cloud(button) {
  button.classList.toggle("bg-cloud");""
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgRainSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgRainSound;
}

export function market(button) {
  button.classList.toggle("bg-market");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgCoffeShopSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgCoffeShopSound;
}

export function fire(button) {
  button.classList.toggle("bg-fire");
  button.querySelector("img").classList.toggle("selected");
  soundsLibrary.bgFireplaceSound.play();
  themeState.themeActived = true;
  themeState.themeSound = soundsLibrary.bgFireplaceSound;
}
