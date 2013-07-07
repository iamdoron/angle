;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
require('./controllers');
require('./directives');
require('./filters');
require('./services');

// Declare app level module which depends on filters, and services
angular.module('angle', ['angle.filters', 'angle.services', 'angle.directives', 'angle.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'RegisterCtrl'});
    $routeProvider.when('/version', {templateUrl: 'partials/version.html', controller: 'VersionCtrl'});
    $routeProvider.otherwise({redirectTo: '/register'});
  }]);

},{"./controllers":2,"./directives":3,"./filters":4,"./services":5}],2:[function(require,module,exports){
/* Controllers */

angular.module('angle.controllers', []).
  controller('RegisterCtrl', [function() {

  }])
  .controller('VersionCtrl', [function() {

  }]);
},{}],3:[function(require,module,exports){
/* Directives */


angular.module('angle.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

},{}],4:[function(require,module,exports){
/* Filters */

angular.module('angle.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

},{}],5:[function(require,module,exports){
/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('angle.services', []).
  value('version', '0.1');

},{}]},{},[1])
;