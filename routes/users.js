const express = require('express');
const router = express.Router();
const db = require("../model/helper");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;

const auth = require("../guards/auth");

router.post("/register", async (req, res) => {
  const { usernameReg, passwordReg } = req.body;
  try {
    const hash = await bcrypt.hash(passwordReg, saltRounds);
    await db(
      `INSERT INTO users (username, password) VALUES ("${usernameReg}", "${hash}")`
    );
    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const results = await db(
      `SELECT * FROM users WHERE username = "${username}"`
    );
    const user = results.data[0];
    if (user) {
      const user_id = user.id;
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error("Incorrect password");
      let token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
/* 
router.get("/loggedIn", auth, (req, res) => {
  
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send(false);
  } else {
    jwt.verify(token, supersecret, function (err, decoded) {
      if (err) res.status(401).send(false);
      else {
        //everything is awesome
        req.user_id = decoded.user_id;
        res.send(true)
      }
    });
  }
});
 */
router.get("/loggedIn", auth, (req, res) => {
  res.send({ status: true });
});
module.exports = router;
