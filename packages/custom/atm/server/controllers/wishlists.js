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
    if (req.body['operation'] == 'addTour') {
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
                res.send(200);
            }
        });
    }
    else if (req.body['operation'] == 'removeTour') {
        Wishlists.update(
            { _id: req.params.id},
            { $pull:
                {
                    tours: {
                        _id: req.body['tourId'],
                    }
                }
            }).exec(function(err, response) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send(200);
            }
        });
    }
    else if (req.body['operation'] == 'vote') {
        Wishlists.update(
            { '_id': req.params.id, 'tours._id': req.body['tourId']},
            { $inc: { "tours.$.votes" : 1 } }
        ).exec(function(err, response) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send(200);
            }
        });
    }
};
