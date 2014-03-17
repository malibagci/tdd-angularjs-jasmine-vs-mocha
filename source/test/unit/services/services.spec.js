
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

      expect($heroesFactory.fetchHeroes).not.to.equal(undefined);
      expect($heroesFactory.getHeroes).not.to.equal(undefined);
      expect($heroesFactory.get).not.to.equal(undefined);

    }]));

    it("should load heroes through $http", 
      inject( ['$heroesFactory', function($heroesFactory) {

      var spy = sinon.spy( $heroesFactory.fetchHeroes );

      $heroesFactory.fetchHeroes();

      spy.called.should.equal(true);


    }]));

    it("should be able to return heroes", 
      inject( ['$heroesFactory', function($heroesFactory){

        var heroes;
        heroes = $heroesFactory.getHeroes();
        expect(heroes).not.to.equal(undefined);

    }]));

  });

});