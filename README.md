# Test-Driven Development with AngularJS
## A Comparison of the Testing-Frameworks Jasmine and Mocha

## Abstract
This bachelor thesis deals with the topics "Test-driven Development" (TDD) with AngularJS and which of the two testing frameworks "Jasmine" and "Mocha" is more suitable for this purpose.

Firstly, the topics "Testing in the web", "Test-driven Development", "AngularJS", "Jasmine" and "Mocha" are reported theortically and explained by examples. 
Secondly, an AngularJS application, which has been been developed test-driven (for each testing framework) is introduced. The testing frameworks are compared on basis of the theory and the developed AngularJS application. In order to make them comparable, the libraries Chai and Sinon.JS were added to the framework mocha.

The final result of the analysis indicates that TDD, used in connection with AngularJS, works very well. This is because AngularJS is already shipped with a good test functionality (such as mocks). From this can be drawn that selecting the correct testing framework is of secondary importance.

The differences between the frameworks are minimal.
Jasmine uses a Behaviour-driven Development (BDD)-Style, whilst Mocha allows it to choose a style (available are BDD, TDD and an "exports"-interface). Jasmine, however, is a completed framework, which is shipped with all necessary features for testing (e.g. spies and mocks), while mocha does not and therefore needs to be extended by several additional libraries.

**Note**: This thesis is written in german. The practical part (the code and the tests) are written in english.

### Keywords
*Test-Driven Development, TDD, AngularJS, Jasmine, Mocha*

## Practice
The practical part of this thesis may be found in the directory "source/" and mainly consists of two different types:
* "source/simple-tests": The tests in this folder help to understand the concepts and patterns of TDD
* "source/marvel-super-heroes-tdd-jasmine" and "source/marvel-super-heroes-tdd-jasmine": In this folders are the AngularJS applications which have been developed test-driven (as mentioned in the abstract) located.

**Note**: The data about the marvel universe are provided by © 2014 Marvel.

### Prerequisites
In order to try the simple-tests, the AngularJS applications, and the tests for them you need:
* Git (http://git-scm.com/)
* NodeJS (http://nodejs.org/)
* npm (https://www.npmjs.org/)
* MongoDB (http://www.mongodb.org/)

### Install
1. Clone this repository: `git clone git@github.com:Calvitium/tdd-angularjs-jasmine-vs-mocha.git && cd tdd-angular-jasmine-vs-mocha`
2. Install dependencies:
  * simple-tests:
    * `npm install -g karma karma-jasmine karma-jasmine-launcher`
  * marvel-super-heroes-tdd-*:
    * `npm install -g grunt-cli`
    * `cd source/marvel-super-heroes-tdd-jasmine (or -mocha)`
    * `npm install && bower install`

### Run the tests/start the applications
* simple-tests:
  * navigate to the directory (e.g. `cd source/simple-tests/green-bar-patterns/fake-it`
  * run `karma start karma.conf.js`
* marvel-super-heroes-tdd-*:
  * navigate to the directory (`cd source/marvel-super-heroes-tdd-jasmine (or -mocha)`
  * to start the application run: `grunt serve`
  * to run the tests run: `grunt test`






