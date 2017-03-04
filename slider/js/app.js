/**
 * Created by oz on 03/04/2017.
 */

define(['angular'], function (angular) {
  var app = angular.module('SliderApp', []);

  app.init = function () {
    angular.bootstrap(document, ['SliderApp']);
  };

  return app;
});