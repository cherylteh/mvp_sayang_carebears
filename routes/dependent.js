const express = require('express');
const router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM Dependent ORDER BY depID ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

const getAllDependents = (req, res) => {
  db("SELECT * FROM Dependent ORDER BY depID ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};

router.post("/dependent", (req, res) => {
  db(
    `INSERT INTO Dependent (dep_name) values ('${req.body.dependent.dep_name}');`
  )
    .then(() => {
      getAllDependents(req, res);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
