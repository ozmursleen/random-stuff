/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("alphaController", ["$scope", function ($scope) {

    }]).config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                template: "<h4>{{displayMessage}}</h4>",
                controller: "homeController"
            })
            .state('profile', {
                url: '/profile',
                template: "<h4>{{displayMessage}}</h4>",
                controller: "profileController"
            })
            .state('messages', {
                url: '/messages',
                template: "<h4>{{displayMessage}}</h4>",
                controller: "messagesController"
            });
    });
});