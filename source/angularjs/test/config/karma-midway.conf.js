var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'node_modules/ng-midway-tester/src/ngMidwayTester.js',

    //mocha stuff
    'test/config/mocha.conf.js',

    //test files
    'test/midway/app.spec.js',
    // 'test/midway/controllers/controllersSpec.js',
    // 'test/midway/filters/filtersSpec.js',
    // 'test/midway/directives/directivesSpec.js',
    // 'test/midway/requestsSpec.js',
    'test/midway/routes.spec.js'
    // 'test/midway/**/*.js'
  ]);

  conf.proxies = {
    '/': 'http://localhost/tdd-angularjs/source/app/'
  };

  conf.urlRoot = "/__testecular/";

  config.set(conf);
};