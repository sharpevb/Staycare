const db = require("../models");

// Defining methods for the activityController
module.exports = {
  findActivity: function (req, res) {
    db.Activity.findAll({})
      .then(dbActivity => res.json(dbActivity))
      .catch(err => res.status(422).json(err));
  },
  // add a new activity
  createActivity: function (req, res) {
    db.Activity.create(req.body).then(function (dbActivity) {
      res.json(dbActivity);
    });
  },

  // Update a activity
  updateActivity: function (req, res) {
    console.log('db.update '+req.body)
    db.Activity.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (dbActivity) {
      res.json(dbActivity);
    });
  },

  // Find One activity
  findActivityById: function (req, res) {
    db.Activity.findOne({where: {id: req.params.id}    
    }).then(function (dbActivity) {
      res.json(dbActivity);
    });
  },

   // Find all activities for a child for a day
   findActivityByChildId: function (req, res) {
    console.log("findactivitybychild req id" +JSON.stringify(req.params.id));
    var object_query = req.params.id;
    db.Activity.findAll(
      {where: JSON.parse(object_query),
      order: ["activitycode", "time"]  
    }).then(function (dbActivity) {
      res.json(dbActivity);
    });
  },

  // Delete a activity by id
  deleteActivity: function (req, res) {
    db.Activity.destroy({ where: { id: req.params.id } }).then(function (dbActivity) {
      res.json(dbActivity);
    });
  }
};
