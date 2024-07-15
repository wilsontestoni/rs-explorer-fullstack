//  TERMINAR DAQUI DEPOIS
const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError.js");
import auth from "../config/auth";

function checkAutentication(req, res, next) {
  const { token, id } = req.headers.authorization;

  console.log(token, id);
  return aaa

  // const validToken = verify(token, auth.jwt.secret)
}

module.exports = checkAutentication;
