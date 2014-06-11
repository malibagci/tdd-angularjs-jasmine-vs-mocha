'use strict';

angular.module('marvelSuperHeroesApp')
  .service('HeroService', function HeroService(HeroSearchFactory, HeroesService, $routeParams, $resource) {

    this.hero = HeroesService.get($routeParams.id);
    this.comics = [];
    this.events = [];
    this.series = [];

    this.resetService = function() {
      this.hero = HeroesService.get($routeParams.id);
      this.comics = [];
      this.events = [];
      this.series = [];
    };

    this.setRandomItemsByType = function(type, amount) {
      var service = this;
      this.hero.$promise.then( function(hero) {
        var items = hero[type].items;

        var setItem = function(current) {

          if(current === amount || current >= items.length) {
            return;
          }

          var item = items[Math.floor(Math.random()*items.length)];
          var itemsLookedUp = 0;

          while(item.used && itemsLookedUp < items.length) {
            item = items[Math.floor(Math.random()*items.length)];
            itemsLookedUp++;
          }

          if(item.used && itemsLookedUp === items.length) {
            // no more free items with thumbnail available
            return;
          }

          item.used = true;

          var ItemResource = $resource('/api/' + type + '/:resourceURI');
          var itemData = ItemResource.get({resourceURI: item.resourceURI});

          itemData.$promise.then( function(data) {
            if(!data.notAvailable) {
              // item is available in db
              console.log("item is available; no api call;")
              service[type].push(data);
            } else {
              console.log("create new item; api call", item);
              // create new item
              HeroSearchFactory.getItemByResourceURI(item.resourceURI, function(resultItem) {
              //
                if(resultItem.thumbnail.path.indexOf("image_not_available") !== -1) {
                  service.setRandomItemsByType(type, 1);
                } else {
                  ItemResource.save(resultItem).$promise.then( function(promiseResult) {
                    service[type].push(promiseResult);
                  });
                }
              });
            }
            setItem(++current);
          });

        }

        setItem(0);

      });
    };

  });
