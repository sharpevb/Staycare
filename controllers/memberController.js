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
  },
  //passing in the family id to get the associated children
  findMembersByFamily:  function (req, res) {
    console.log("findmembersbyfamily req id" +JSON.stringify(req.params.id));
    db.Member.findAll({
      include: [db.Family],
      where: {FamilyId: req.params.id},
      order: ["membertype", "name"]
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  },
  validateUser:  function (req, res) {
//an object is passed in as the id for the where clause.  Should be email and password when we add password.
    var object_query = req.params.id;
    //console.log("validate req params " +JSON.stringify(req.params.id));
    db.Member.findOne({
      attributes: ["FamilyId"],
      where: JSON.parse(object_query)
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  }
};
