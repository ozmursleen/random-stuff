define(['angular', 'angular-ui-router', 'angular-animate'], function (angular) {
  var app = angular.module('WallethubExercises', ['ui.router', 'ngAnimate']);

  app.init = function () {
    angular.bootstrap(document, ['WallethubExercises']);
  };

  return app;
});