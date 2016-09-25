'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Entries Schema.
 */
var EntriesSchema = new Schema ({
    giveawayId: Schema.ObjectId,
    userId: Schema.ObjectId,
    numberOfEntries: Number
});

mongoose.model('Entries', EntriesSchema);