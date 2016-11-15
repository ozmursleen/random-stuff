/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("homeController", ["$scope", function ($scope) {

        $scope.displayMessage = "From home controller";
    }]);
});