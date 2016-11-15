/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("messagesController", ["$scope", function ($scope) {

        $scope.displayMessage = "From messages controller";
    }]);
});