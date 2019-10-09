const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// Matches with "/api/activity"
router.route("/")
  .get(activityController.findActivity)
  .post(activityController.createActivity);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(activityController.findActivityById)
  .put(activityController.updateActivity)
  .delete(activityController.deleteActivity);

module.exports = router;
