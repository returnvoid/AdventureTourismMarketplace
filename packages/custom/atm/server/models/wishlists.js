'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Wishlists Schema.
 */
var WishlistSchema = new Schema ({
  name: String,
  users: [
    {
      creator: Boolean, default: false,
      user_id: Schema.ObjectId,
    }
  ],
  tours: [{

  }]
});

mongoose.model('Wishlists', WishlistSchema);