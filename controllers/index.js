const router = require("express").Router();
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
