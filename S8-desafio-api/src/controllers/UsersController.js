const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError.js")
const knex = require("../database/knex");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name) throw new AppError("É preciso informar o nome para cadastro")
    if (!email) throw new AppError("É preciso informar o email para cadastro")
    if (!password) throw new AppError("É preciso informar a senha para cadastro")
    
    const emailExists = await knex("users").where("email", email).first()
      
    console.log(emailExists)

    if (emailExists) {
      throw new AppError("E-mail já está cadastrado na plataforma");
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({ name, email, password: hashedPassword });

    return res.status(201).json();
  }
}

module.exports = UsersController;