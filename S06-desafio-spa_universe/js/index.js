import * as controls from "./controls.js";
import { router } from "./routerInstance.js";

controls.linkControls();
window.onpopstate = () => router.handle;
router.handle();

window.route = () => router.route();
