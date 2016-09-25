var mongoose = require('mongoose'),
    Wishlists = mongoose.model('Wishlists'),
    _ = require('lodash');

exports.all = function(req, res) {
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

exports.create = function(req, res) {
    console.log(req.body);
    var wishlist = new Wishlists(req.body);

    wishlist.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(wishlist);
        }
    });
};

exports.show = function(req, res, next) {
    Wishlists.findOne({_id: req.params.id}).exec(function(err, wishlist) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(wishlist);
        }
    });
};

exports.update = function(req, res) {

    // if req.body
    Wishlists.update(
        { _id: req.params.id},
        { $push:
            {
                tours: {
                    _id: req.body['tourId'],
                    name: req.body['tourName'],
                    votes: 0
                }
            }
        }).exec(function(err, response) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp({status: 200});
        }
    });
};


