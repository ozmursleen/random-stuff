/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("profileController", ["$scope", function ($scope) {

        $scope.displayMessage = "From profile controller";
    }]);
});