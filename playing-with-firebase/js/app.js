/**
 * Created by oz on 11/26/2016.
 */

define(['angular', 'angular-ui-router', 'angular-ui-bootstrap', 'firebase', 'angularfire'], function (angular) {
  var app = angular.module('FirebasePlayground', ['ui.router', 'ui.bootstrap', 'firebase']);

  app.init = function () {
    angular.bootstrap(document, ['FirebasePlayground']);
  };

  return app;
});