suite('Mocha with TDD interface', function(){
  setup(function(){
    console.log("setup here");
  });

  suite('Chai Assertion Style: "Assert"', function(){
    test('should assert true to be ok', function(){
      assert.ok(true, 'everything is ok');
    });
  });

  teardown(function(){
    console.log("teardown here");
  });
});