var mongoose = require('mongoose'),
    Wishlists = mongoose.model('Wishlists'),
    _ = require('lodash');

exports.all = function(req, res) {
    console.log(req);
    Wishlists.find().exec(function(err, wishlists) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(wishlists);
        }
    });
};

exports.test = function(req, res) {
    console.log(req);
    res.send("Hey, you're talking to my API!!!!");
};