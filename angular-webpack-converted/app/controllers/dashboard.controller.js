(function () {
    'use strict';

    DashboardController.$inject = ['$scope', 'GithubStatusService'];
    function DashboardController($scope, gh) {
        $scope.github = '';
        gh.getStatus().success(function (status) {
            $scope.github = status;
        });
    }

    module.exports = DashboardController;
}());