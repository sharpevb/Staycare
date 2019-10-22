const router = require("express").Router();
const utilsController = require("../../controllers/utilsController");

// Matches with "/api/utils"
router.route("/upload")
  .post(utilsController.uploadFile);

router.route("/email")
  .post(utilsController.sendEmail);

module.exports = router;