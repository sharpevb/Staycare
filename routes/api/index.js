const router = require("express").Router();
const memberRoutes = require("./member");
const familyRoutes = require("./family");
const activityRoutes = require("./activity");
const utilsRoutes = require("./utils");

// routes
router.use("/member", memberRoutes);
router.use("/family", familyRoutes);
router.use("/activity", activityRoutes);
router.use("/utils", utilsRoutes);

module.exports = router;
