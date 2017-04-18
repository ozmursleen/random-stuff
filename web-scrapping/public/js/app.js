'use strict';

angular.module('webScrappingApp', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/app',
      controller: AppController
    });
    $locationProvider.html5Mode(true);
  }]);