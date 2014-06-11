'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Comic Schema
 */
var ComicSchema = new Schema({
  resourceURI: String,
  title: String,
  thumbnail: Object
});


mongoose.model('Comic', ComicSchema);
