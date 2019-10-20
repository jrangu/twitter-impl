import 'dotenv/config';

var express = require("express");
var router = express.Router();
var Twitter = require("twitter-node-client").Twitter;
import {CONFIG} from "./constants"

router.post("/", function(req, res, next) {
    var twitter = new Twitter(CONFIG);
    var options = { status:req.body.status};
    console.log(options);
    twitter.postTweet(options, function(err, response, body) {
        console.log(err);
    }, function(data){
        console.log(data)
        res.send(data);
    });
});

module.exports = router;
