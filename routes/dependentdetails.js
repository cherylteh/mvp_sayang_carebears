const express = require('express');
const router = express.Router();
const db = require("../model/helper");

const getAllDependents = (req, res) => {
  db("SELECT * FROM dependent ORDER BY depID ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};

const getDependentwithMeds = (req, res) => {
    db("SELECT dependent.dep_name, medsup.medName, medsup.medCondition, medsup.dosage, medsup.frequency FROM dependent, medsup WHERE dependent.depID=medsup.depID;")
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  };

// GET ALL Dependents - e.g. localhost:5000/dependent - WORKING
router.get('/dependent', function(req, res, next) {
  db("SELECT * FROM dependent ORDER BY depID ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET Dependent by ID - e.g. localhost:5000/dependent/1 - WORKING
router.get("/dependent:id", function(req, res, next) {
  db(`SELECT * FROM dependent WHERE depID=${req.params.id};`)
    .then(results => {
      console.log(results.data);
      res.send(results.data[0]);
    })
    .catch(err => res.status(404).send("There is no Dependent with this ID"));
});



module.exports = router;