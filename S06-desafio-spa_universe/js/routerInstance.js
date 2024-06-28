import { Router } from "./router.js";

export const router = new Router();

router.add(404, "/pages/404.html")
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");




