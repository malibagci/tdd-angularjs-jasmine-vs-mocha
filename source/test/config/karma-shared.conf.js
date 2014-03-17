module.exports = function() {
  return {
    basePath: '../../',
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    autoWatch: true,

    singleRun: false,
    colors: true,

    files: [
      // 3rd party code
      'app/scripts/lib/angular-1.2.14.min.js',
      'app/scripts/lib/angular-route-1.2.14.min.js',

      // app specific code
      // 'app/scripts/config/config.js',
      'app/scripts/services/**/*.js',
      'app/scripts/directives/**/*.js',
      'app/scripts/controllers/**/*.js',
      'app/scripts/filters/**/*.js',
      'app/scripts/config/routes.js',
      'app/scripts/app.js',

      // test specific code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  };
};
