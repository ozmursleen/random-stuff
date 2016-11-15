/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("hectaController", ["$scope", function ($scope) {

        $scope.hectaInput1 = 0;
        $scope.hectaInput2 = 0;
        $scope.hectaInput3 = 0;
        $scope.hectaInput4 = 0;

        $scope.updateAllInputs = function(){
            var result = Math.round($scope.hectaInput4/3);
            $scope.hectaInput1 = result;
            $scope.hectaInput2 = result;
            $scope.hectaInput3 = result;
        };

        $scope.updateResult = function(){
            $scope.hectaInput4 = $scope.hectaInput1 + $scope.hectaInput2 + $scope.hectaInput3;
        };
    }]);
});