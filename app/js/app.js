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
