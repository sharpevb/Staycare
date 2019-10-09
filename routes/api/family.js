const router = require("express").Router();
const familyController = require("../../controllers/familyController");

// Matches with "/api/family"
router.route("/")
  .get(familyController.findFamily)
  .post(familyController.createFamily);

// Matches with "/api/family/:id"
router
  .route("/:id")
  .get(familyController.findFamilyById)
  .put(familyController.updateFamily)
  .delete(familyController.deleteFamily);

module.exports = router;
