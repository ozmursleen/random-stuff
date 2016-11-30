/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeController',
                templateUrl: 'templates/home.html'
            })
            .state('tabs', {
                abstract: true,
                url: '/tabs',
                controller: 'mainController',
                templateUrl: 'templates/main.html'
            })
            .state('tabs.customers', {
                url: '/customers',
                controller: 'customerController',
                templateUrl: 'templates/customers.html'
            })
            .state('tabs.appointments', {
                url: '/appointments',
                controller: 'appointmentController',
                templateUrl: 'templates/appointments.html'
            });

        $urlRouterProvider.otherwise('/');
    });
});