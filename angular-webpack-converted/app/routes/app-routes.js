/**
 * Created by oz on 12/22/2016.
 */

routes.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];
function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'dashboardController',
            template: require('../templates/dashboard.html')
        })
        .state('messages', {
            url: '/messages',
            controller: 'messagesController',
            template: require('../templates/messages-list.html')
        });
}

module.exports = routes;