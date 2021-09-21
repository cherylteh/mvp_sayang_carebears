let express = require('express');
let router = express.Router();
let jwt = require("jsonwebtoken");
//let userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
let db = require("../model/helper");
require("dotenv").config();
let bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

/* 
router.get("/", (req, res) => {
  console.log("checking if getting thru");
  res.send("Welcome to the API");
});
 */ 

router.get('/', function(req, res, next) {
  console.log("testing");
  db("SELECT * FROM users;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err, "what the heck"));
});

 
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


module.exports = router;
