var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Get request received");
});

module.exports = router;
