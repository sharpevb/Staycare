const router = require("express").Router();
const childController = require("../../controllers/childController");

// Matches with "/api/child"
router.route("/")
  .get(childController.findAll)
  .post(childController.create);

// Matches with "/api/child/:id"
router
  .route("/:id")
  .get(childController.findById)
  .put(childController.update)
  .delete(childController.delete);

module.exports = router;
