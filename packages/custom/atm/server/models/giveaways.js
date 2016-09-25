'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

/**
 * Giveaways Schema.
 */
var GiveawaySchema = new mongoose.Schema ({
    name: {
        type: String,
        trim: true
    }
});

mongoose.model('Giveaways', GiveawaySchema);