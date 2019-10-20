import 'dotenv/config';

var express = require("express");
var router = express.Router();
var Twitter = require("twitter-node-client").Twitter;

router.get("/", function(req, res, next) {
    var config = {
        consumerKey: process.env.consumer_key,
        consumerSecret: process.env.consumer_secret,
        accessToken: process.env.access_token,
        accessTokenSecret: process.env.access_token_secret
    }
    var twitter = new Twitter(config)
    var options = { screen_name: 'JahnaviRangu'};
    twitter.getUserTimeline(options, function(err, response, body) {

    }, function(data){
        console.log(data)
        res.send(data);
    });
});

module.exports = router;
