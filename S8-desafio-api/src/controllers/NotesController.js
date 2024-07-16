const AppError = require("../utils/AppError.js");
const knex = require("../database/knex");

class NotesController {
  async index(req, res) {
    const { title } = req.query;
    const user_id = req.user.id;

    const notes = await knex("notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title");

    const userTags = await knex("tags").where({ user_id });

    const notesWithTags = notes.map((note) => {
      const noteTags = userTags.filter((tag) => tag.note_id === note.id);

      return {
        ...note,
        tags: noteTags,
      };
    });

    res.json(notesWithTags);
  }

  async show(req, res) {
    const { id } = req.params;

    const note = await knex("notes").where({ id }).first();
    const tags = await knex
      .select("name")
      .from("tags")
      .where("note_id", note.id)
      .orderBy("name");

    res.status(200).json({
      ...note,
      tags,
    });
  }

  async create(req, res) {
    const user_id = req.user.id;
    const { title, description, rating, tags } = req.body;

    const hasNoData = !title || !rating;

    if (hasNoData) {
      throw new AppError("É preciso passar os campos de titulo e nota!");
    }

    const notValidRating = rating > 5 || rating < 0;

    if (notValidRating) {
      throw new AppError("Nota inválida! A nota deve ser entre 1 e 5.");
    }

    const [note_id] = await knex("notes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsInsert = tags.map((tag) => {
      return {
        name: tag,
        user_id,
        note_id,
      };
    });

    await knex("tags").insert(tagsInsert);

    return res.status(201).json();
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("notes").where({ id }).delete();

    return res.status(204).json();
  }
}

module.exports = NotesController;
