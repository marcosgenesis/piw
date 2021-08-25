import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { render } from "../views/user.js";

export async function createSession(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    if (!bcrypt.compare(password, user.senha)) {
      return res.status(403).json({ error: "password does not match" });
    }
    const token = jwt.sign(
      { id: user.id, name: user.nome },
      "8a6ac14edc7397572ffb3ca9a2394218"
    );
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Is not possible create a session for this user. try again.",
    });
  }
}

export async function validateToken(req, res, next) {
  jwt.verify(req.headers.token, "8a6ac14edc7397572ffb3ca9a2394218", (err) => {
    if (err) {
      return res.status(404).json({ error: "jwt invalid" });
    }
    next();
  });
}
