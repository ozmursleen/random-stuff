/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.controller("tetraController", ["$scope", function ($scope) {
        $scope.tetraItems = [];
        $scope.sortType = "name";

        for (var i = 1; i <= 50; i++) {
            var name = randomString(5);
            $scope.tetraItems.push({
                name: name,
                age: i,
                email: name + "@gmail.com"
            });
        }

        function randomString(len, charSet) {
            charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var randomString = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz, randomPoz + 1);
            }
            return randomString;
        }
    }]);
});