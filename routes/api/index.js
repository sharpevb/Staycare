const router = require("express").Router();
const childRoutes = require("./child");

// Child routes
router.use("/child", childRoutes);

module.exports = router;
