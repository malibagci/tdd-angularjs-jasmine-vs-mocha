// app/scripts/services/HeroesFactory.js

angular.module( 'app.services' )
  .factory( 'HeroesFactory', function() {

    var factory = {};

    factory.heroes = [];

    factory.save = function(hero) {
      factory.heroes.push(hero);
    };

    factory.remove = function() {};

    return factory;

  });
