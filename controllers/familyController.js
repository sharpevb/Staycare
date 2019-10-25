const db = require("../models");

// Defining methods for the familyController
module.exports = {
  findFamily: function (req, res) {
    db.Family.findAll({})
      .then(dbFamily => res.json(dbFamily))
      .catch(err => res.status(422).json(err));
  },
  // add a new family
  createFamily: function (req, res) {
    db.Family.create(req.body).then(function (dbFamily) {
      res.json(dbFamily);
    });
  },

  // Update a family
  updateFamily: function (req, res) {
    db.Family.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (dbFamily) {
      res.json(dbFamily);
    });
  },

  // Find One family
  findFamilyById: function (req, res) {
    db.Family.findOne({where: {id: req.params.id}    
    }).then(function (dbFamily) {
      res.json(dbFamily);
    });
  },

  // Delete a family by id
  deleteFamily: function (req, res) {
    db.Family.destroy({ where: { id: req.params.id } }).then(function (dbFamily) {
      res.json(dbFamily);
    });
  }
};
