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
    Wishlists.find({_id: '57e6f403dba0135efffa0b5b'}).exec(function(err, wishlist) {
        console.log(wishlist);
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(wishlist);
        }
    });
};