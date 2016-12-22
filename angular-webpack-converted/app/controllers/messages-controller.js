/**
 * Created by oz on 12/22/2016.
 */

(function () {
    'use strict';
    MessagesController.$inject = ['$scope', '$http'];
    function MessagesController($scope, $http) {
        var url = 'https://api.twilio.com/2010-04-01/Accounts/ACd91e4acf816f7bb50b18b78e810a7308/Messages.json?To=+14433056420&DateSent=2016-12-20';
        var authToken = 'Basic QUNkOTFlNGFjZjgxNmY3YmI1MGIxOGI3OGU4MTBhNzMwODo3ODc2YmFmZWNiYjg5ZTMzZTM1N2NhNmJmY2MxNWE3NA==';
        $scope.messageList = [];
        $http.get(url, {
            headers: {
                'Authorization': authToken,
                'Content-Type': 'application/json'
            }
        }).success(function(response){
            $scope.messageList = response.messages;
        });
    }
    module.exports = MessagesController;
}());
