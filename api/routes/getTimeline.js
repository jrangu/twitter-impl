import 'dotenv/config';

var express = require("express");
var router = express.Router();
var twitter = require("twit")

// var T = new Twit(constants.credentials)

// var options = { screen_name: 'sandagolcea',
//                 count: 3 };

// T.get('statuses/user_timeline', options , function(err, data) {
//   for (var i = 0; i < data.length ; i++) {
//     console.log(data[i].text);
//   }
// })


router.get("/", function(req, res, next) {
    console.log(process.env.consumer_key)
    console.log(process.env.consumer_secret)
    console.log(process.env.access_token)
    console.log(process.env.access_token_secret)
    res.send("Hellp");
});

module.exports = router;
