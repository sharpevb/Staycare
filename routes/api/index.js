const router = require("express").Router();
const memberRoutes = require("./member");
const familyRoutes = require("./family");
const activityRoutes = require("./activity");

// routes
router.use("/member", memberRoutes);
router.use("/family", familyRoutes);
router.use("/activity", activityRoutes);

module.exports = router;
