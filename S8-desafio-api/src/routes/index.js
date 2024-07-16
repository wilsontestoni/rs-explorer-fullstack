const { Router } = require("express");

const usersRoutes = require("./user.routes.js");
const notesRoutes = require("./notes.routes.js");
const sessionsRoutes = require("./sessions.routes.js");

const routes = Router();

routes.use("/sessions", sessionsRoutes);
routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);

module.exports = routes;
