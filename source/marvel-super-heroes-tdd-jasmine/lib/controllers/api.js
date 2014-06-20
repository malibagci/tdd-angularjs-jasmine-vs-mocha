'use strict';

var mongoose = require('mongoose'),
    HeroModel = mongoose.model('Hero'),
    ComicModel = mongoose.model('Comic'),
    EventModel = mongoose.model('Event'),
    SeriesModel = mongoose.model('Series');

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

exports.createComic = function(req, res) {
  var comic;
  console.log("POST: " + req.body.title);

  ComicModel.findOne({'resourceURI': req.body.resourceURI}, function(err, doc){
    if(doc) {
      console.log("comic " + doc.title + " is already stored in db");
      comic = doc;
    } else {
      console.log("new comic " + req.body.title);
      comic = new ComicModel({
        resourceURI: req.body.resourceURI,
        title: req.body.title,
        thumbnail: req.body.thumbnail
      });

      comic.save(function (err) {
        if (!err) {
          return console.log("created");
        } else {
          return console.log(err);
        }
      });
    }
  });

  return res.send(comic);
};

exports.comic = function(req, res) {
  console.log("fetching item with title " + req.params.title);
  return ComicModel.findOne({'resourceURI': req.params.resourceURI}, function (err, comic) {
    if (!err) {
      if(comic) {
        return res.send(comic);
      } else {
        return res.send({notAvailable: true});
      }
    } else {
      return console.log(err);
    }
  });
};

exports.createEventEntry = function(req, res) {
  var eventEntry;
  console.log("POST: " + req.body.title);

  ComicModel.findOne({'resourceURI': req.body.resourceURI}, function(err, doc){
    if(doc) {
      console.log("event " + doc.title + " is already stored in db");
      eventEntry = doc;
    } else {
      console.log("new event " + req.body.title);
      eventEntry = new EventModel({
        resourceURI: req.body.resourceURI,
        title: req.body.title,
        thumbnail: req.body.thumbnail
      });

      eventEntry.save(function (err) {
        if (!err) {
          return console.log("created");
        } else {
          return console.log(err);
        }
      });
    }
  });

  return res.send(eventEntry);
};

exports.eventEntry = function(req, res) {
  return EventModel.findOne({'resourceURI': req.params.resourceURI}, function (err, eventEntry) {
    if (!err) {
      if(eventEntry) {
        return res.send(eventEntry);
      } else {
        return res.send({notAvailable: true});
      }
    } else {
      return console.log(err);
    }
  });
};

exports.createSeries = function(req, res) {
  var series;
  console.log("POST: " + req.body.name);

  SeriesModel.findOne({'resourceURI': req.body.resourceURI}, function(err, doc){
    if(doc) {
      console.log("series " + doc.title + " is already stored in db");
      series = doc;
    } else {
      console.log("new series " + req.body.title);
      series = new SeriesModel({
        resourceURI: req.body.resourceURI,
        title: req.body.title,
        thumbnail: req.body.thumbnail
      });

      series.save(function (err) {
        if (!err) {
          return console.log("created");
        } else {
          return console.log(err);
        }
      });
    }
  });

  return res.send(series);
};

exports.series = function(req, res) {
  return SeriesModel.findOne({'resourceURI': req.params.resourceURI}, function (err, series) {
    if (!err) {
      if(series) {
        return res.send(series);
      } else {
        return res.send({notAvailable: true});
      }
    } else {
      return console.log(err);
    }
  });
};
