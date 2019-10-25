const db = require("../models");
const sequelize = require('sequelize')

// Defining methods for the memberController
module.exports = {
  findMembers: function (req, res) {
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
    db.Member.findOne({
      where: { id: req.params.id }
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  },

  // Delete a member by id
  deleteMember: function (req, res) {
    db.Member.destroy({ where: { id: req.params.id } }).then(function (dbMember) {
      res.json(dbMember);
    });
  },
  //passing in the family id to get the associated children
  findMembersByFamily: function (req, res) {
    db.Member.findAll({
      include: [db.Family],
      where: { FamilyId: req.params.id },
      order: ["membertype", "name"]
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  },

  //validate that the email and password credentials are correct.
  validateUser: function (req, res) {
    //an object is passed in as the id for the where clause.  Should be email (lowercase)and password when we add password.
    var object_query = JSON.parse(req.params.id);
    var v_email = object_query.email;
    var v_password = object_query.password;
    //this will encrypt the password entered for comparison.
    db.Member.findOne({
      attributes: ["FamilyId", "id"],
      where: { password: db.sequelize.fn('aes_encrypt', v_password, 'fullstack'), email: v_email }
    }).then(function (dbMember) {
      res.json(JSON.stringify(dbMember));
    });
  },
  //concatenated list of 
  findMembersMessaging: function (req, res) {
    db.sequelize.query("SELECT a.id, familyname, GROUP_CONCAT(textaddress) addresses FROM Families a, Members b WHERE a.id = b.familyid GROUP BY a.id, familyname ORDER BY familyname",
      { type: db.sequelize.QueryTypes.SELECT })
      .then(function (family) {
        res.json(JSON.stringify(family));
      });
  }
};
