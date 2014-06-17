'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Series Schema
 */
var SeriesSchema = new Schema({
  resourceURI: String,
  title: String,
  thumbnail: Object
});


mongoose.model('Series', SeriesSchema);
