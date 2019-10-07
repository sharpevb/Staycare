const db = require("../models");

// Defining methods for the childController
module.exports = {
  findAll: function (req, res) {
    console.log('db.children')
    db.Child.findAll({})
      .then(dbChild => res.json(dbChild))
      .catch(err => res.status(422).json(err));
  },
  // add a new child
  create: function (req, res) {
    db.Child.create(req.body).then(function (dbChild) {
      res.json(dbChild);
    });
  },

  // Update a child
  update: function (req, res) {
    console.log('db.update '+req.body)
    db.Child.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (dbChild) {
      res.json(dbChild);
    });
  },

  // Find One child
  findById: function (req, res) {
    db.Child.findOne({where: {id: req.params.id}    
    }).then(function (dbChild) {
      res.json(dbChild);
    });
  },

  // Delete a child by id
  delete: function (req, res) {
    db.Child.destroy({ where: { id: req.params.id } }).then(function (dbChild) {
      res.json(dbChild);
    });
  }
};
