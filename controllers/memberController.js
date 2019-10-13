const db = require("../models");

// Defining methods for the memberController
module.exports = {
  findMembers: function (req, res) {
    console.log('db.member')
    db.Member.findAll({})
      .then(dbMember => res.json(dbMember))
      .catch(err => res.status(422).json(err));
  },
  // add a new member
  createMember: function (req, res) {
    db.Member.create(req.body).then(function (dbMember) {
      res.json(dbMember);
    });
  },

  // Update a member
  updateMember: function (req, res) {
    console.log('db.update '+req.body)
    db.Member.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  },

  // Find One member
  findMemberById: function (req, res) {
    db.Member.findOne({where: {id: req.params.id}    
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  },

  // Delete a member by id
  deleteMember: function (req, res) {
    db.Member.destroy({ where: { id: req.params.id } }).then(function (dbMember) {
      res.json(dbMember);
    });
  }

  
};
