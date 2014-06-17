'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Hero Schema
 */
var HeroSchema = new Schema({
  comics: Object,
  description: String,
  events: Object,
  favorite: Boolean,
  id: Number,
  modified: Date,
  name: String,
  series: Object,
  stories: Object,
  thumbnail: Object,
  urls: Array
});


mongoose.model('Hero', HeroSchema);
