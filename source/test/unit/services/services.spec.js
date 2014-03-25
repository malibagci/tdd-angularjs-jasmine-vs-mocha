
describe("Unit: Testing services", function() {
  
  beforeEach( function() {
    module("ThesisApp");
  });

  describe("heroesFactory", function() {

    it("should contain be present", 
      inject( function($heroesFactory) {

      expect($heroesFactory).not.to.equal(null);
    }));

    it("should work (contain certain functions)", 
      inject( ['$heroesFactory', function($heroesFactory) {

      expect($heroesFactory.fetchHero).not.to.equal(undefined);
      expect($heroesFactory.getHeroes).not.to.equal(undefined);
      expect($heroesFactory.get).not.to.equal(undefined);

    }]));

    it("should load heroes through fetchHeroes", 
      inject( ['$heroesFactory', '$http', function($heroesFactory, $http) {

        console.log($http);

      var spy = sinon.spy($http, "get");
      $heroesFactory.fetchHero("Wolverine");
      expect(spy.called).to.be.true;
      spy.restore();

    }]));

    it("should be able to return heroes (async", 
      inject( ['$heroesFactory', function($heroesFactory){

        var heroes = $heroesFactory.getHeroes();
        expect(heroes.length).to.be.at.least(1);

    }]));

  });

});