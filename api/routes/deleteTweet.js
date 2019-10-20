import 'dotenv/config';

var express = require("express");
var router = express.Router();
var Twitter = require("twitter-node-client").Twitter;
import {CONFIG} from "./constants"

router.post("/:id", function(req, res, next) {
    var twitter = new Twitter(CONFIG);
    var url = 'https://api.twitter.com/1.1/statuses/destroy/'+req.params.id +'.json';
    console.log(url);
    twitter.doPost(url, {}, function(err, response, body) {
        console.log(err);
    }, function(data){
        console.log(data)
        res.send(data);
    });
});

module.exports = router;
