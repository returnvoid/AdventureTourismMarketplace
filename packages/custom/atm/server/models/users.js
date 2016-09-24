'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

/**
 * Users Schema.
 */
var UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    }
});

mongoose.model('Users', UserSchema);