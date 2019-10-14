const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// Matches with "/api/activity"
router.route("/")
  .get(activityController.findActivity)
  .post(activityController.createActivity);


 //Matches with "/api/activity/child/id, dateget the activities for a child with a specific date
 router.route("/child/:id")
  .get(activityController.findActivityByChildId);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(activityController.findActivityById)
  .put(activityController.updateActivity)
  .delete(activityController.deleteActivity);

module.exports = router;
