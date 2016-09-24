'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

/**
 * Users Schema.
 */
var TourSchema = new mongoose.Schema ({
    name: {
        type: String,
        trim: true
    }
});

mongoose.model('Tours', TourSchema);