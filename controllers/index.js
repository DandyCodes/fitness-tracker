const router = require("express").Router();
const home = require("./home");
const api = require("./api");

router.use("/", home);
router.use("/api", api);

module.exports = router;
