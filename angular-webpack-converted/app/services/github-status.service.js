(function () {
    'use strict';
    var angular = require('angular');
    GithubStatusService.$inject = ['$http'];
    function GithubStatusService($http) {
        var _this = this;
        _this.getStatus = function() {
            return $http({
                method: 'jsonp',
                url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
                transformResponse: appendTransform($http.defaults.transformResponse, function (value) {
                    return (value.status === 'good');
                })
            });
        };
    }

    function appendTransform(defaults, transform) {
        defaults = angular.isArray(defaults) ? defaults : [defaults];
        return defaults.concat(transform);
    }

    module.exports = GithubStatusService;
}());