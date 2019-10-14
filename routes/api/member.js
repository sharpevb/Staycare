const router = require("express").Router();
const memberController = require("../../controllers/memberController");

// Matches with "/api/member"
router.route("/")
  .get(memberController.findMembers)
  .post(memberController.createMember);

// Matches with "/api/member/family"
router.route("/family/:id")
.get(memberController.findMembersByFamily);

// Matches with "/api/member/validate"
router.route("/validate/:id")
.get(memberController.validateUser);

// Matches with "/api/member/:id"
router
  .route("/:id")
  .get(memberController.findMemberById)
  .put(memberController.updateMember)
  .delete(memberController.deleteMember);


module.exports = router;
