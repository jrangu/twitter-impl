import 'dotenv/config';

var express = require("express");
var router = express.Router();
var Twitter = require("twitter-node-client").Twitter;
import {CONFIG} from "./constants"

router.get("/", function(req, res, next) {
    // console.log(CONFIG);
    var twitter = new Twitter(CONFIG);
    twitter.getUserTimeline({}, function(err, response, body) {
        console.log(err);
    }, function(data){
        console.log(data)
        res.send(data);
    });
});

module.exports = router;
