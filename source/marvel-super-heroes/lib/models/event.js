'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
  resourceURI: String,
  title: String,
  thumbnail: Object
});


mongoose.model('Event', EventSchema);
