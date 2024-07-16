const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const notesRoutes = Router();

const checkAutentication = require("../middleware/checkAutentication");

notesRoutes.use(checkAutentication);

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.post("/", notesController.create);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
