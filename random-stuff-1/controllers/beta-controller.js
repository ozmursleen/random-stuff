/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("betaController", ["$scope", "sharedDataService", function ($scope, sharedDataService) {
        $scope.sharingModel = "";
        $scope.saveInService = function(){
            sharedDataService.setSharingObject($scope.sharingModel);
        };
    }]).controller("betaController2", ["$scope", "sharedDataService", function ($scope, sharedDataService) {

        $scope.sharingModel2 = sharedDataService.getSharingObject();
        
    }]).config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('switch', {
                views:{
                    'switch2':{
                        url: '/switch',
                        template: '<h4>Controller 2</h4><div>{{sharingModel2}}</div>',
                        controller: "betaController2"        
                    }
                }
            });
    });
});