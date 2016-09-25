'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

/**
 * Users Schema.
 */
var UserSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    points: Number
});

mongoose.model('Users', UserSchema);