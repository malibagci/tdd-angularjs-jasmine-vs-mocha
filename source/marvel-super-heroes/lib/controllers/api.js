'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    HeroModel = mongoose.model('Hero');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.heroes = function(req, res) {
  return HeroModel.find(function (err, heroes) {
    if (!err) {
      return res.json(heroes);
    } else {
      return res.send(err);
    }
  });
};

exports.createHero = function (req, res) {
  var hero;
  console.log("POST: ");
  console.log(req.body.name);
  HeroModel.findOne({'id': req.body.id}, function(err, doc){
    if(doc) {
      console.log("hero " + doc.name + " is already stored in db");
      hero = doc;
    } else {
      console.log("new hero " + req.body.name);
      hero = new HeroModel({
        comics: req.body.comics,
        description: req.body.description,
        events: req.body.events,
        favorite: true,
        id: req.body.id,
        modified: req.body.modified,
        name: req.body.name,
        series: req.body.series,
        stories: req.body.stories,
        thumbnail: req.body.thumbnail,
        urls: req.body.urls
      });

      hero.save(function (err) {
        if (!err) {
          return console.log("created");
        } else {
          return console.log(err);
        }
      });
    }
  });

  return res.send(hero);
};

exports.hero = function (req, res){
  console.log("REQUEST")
  return HeroModel.findOne({'id': req.params.id}, function (err, hero) {
    if (!err) {
      return res.send(hero);
    } else {
      return console.log(err);
    }
  });
};

exports.deleteHero = function (req, res){
  console.log("Delete resource with id " + req.params.id);
  return HeroModel.findOne({'id': req.params.id}, function (err, hero) {
    return hero.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};
