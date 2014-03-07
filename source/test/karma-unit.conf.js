var sharedConfig = require("./karma-shared.conf.js");

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    // extra testing code
    'app/scripts/lib/angular-mocks-1.2.14.js',

    // mocha stuff
    'test/mocha.conf.js',

    // test files
    'test/unit/**/*.spec.js'
  ]);

  config.set(conf);
};