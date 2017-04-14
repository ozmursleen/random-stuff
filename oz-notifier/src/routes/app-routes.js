/**
 * Created by oz on 12/20/2016.
 */

routes.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];
function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/'
        });
}

module.exports = routes;
