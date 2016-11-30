/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.controller('mainController', function ($scope, $timeout, $state) {
        $scope.go = function (route) {
            $state.go(route);
        };

        $scope.active = function (route) {
            return $state.is(route);
        };

        $scope.tabs = [
            {heading: "Customers", route: "tabs.customers", active: false},
            {heading: "Appointments", route: "tabs.appointments", active: false}
        ];

        $scope.$on("$stateChangeSuccess", function () {
            $scope.tabs.forEach(function (tab) {
                tab.active = $scope.active(tab.route);
            });
        });
    });
});