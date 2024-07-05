const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError.js")
const knex = require("../database/knex");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const hasNoData = !name || !email || !password;

    if (hasNoData) {
      throw new AppError("É preciso informar todos os campos para cadastro")
    }

    const emailExists = (await knex.select("email").from("users").where(`email`, email)) > 0;
      
    if (emailExists) {
      throw new AppError("E-mail já está cadastrado na plataforma")
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({ name, email, password: hashedPassword });

    return res.status(201).json();
  }
}

module.exports = UsersController;