const router = require("express").Router();
const authController = require("../../controllers/authController");



// Matches with "/api/auth"
router.route("/")
  .get(authController.test)
  .put(authController.login)
  .post(authController.create)
  .delete(authController.logout);

//Matches with "/api/auth/:id"
router.route("/:id")
  .get(authController.test)
  .put(authController.login)
  .post(authController.create)
  .delete(authController.logout);

module.exports = router;
