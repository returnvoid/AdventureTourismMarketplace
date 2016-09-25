var mongoose = require('mongoose'),
    Entries = mongoose.model('Entries'),
    Users = mongoose.model('Users'),
    _ = require('lodash');

exports.all = function(req, res) {
    Entries.find().exec(function(err, entries) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(entries);
        }
    });
};

exports.create = function(req, res) {
    var entry = new Entries({"userId":req.body['userId'],"giveawayId":req.params.id, 'numberOfEntries': 1});
    var tokens = parseInt(req.body['tokensEntered']);

    Users.update(
        { firstName: 'Jenny'},
        { $inc: { "points" : -5 } }
        ).exec(function(err, user) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            entry.save();
            res.send(200);
        }
    });
};