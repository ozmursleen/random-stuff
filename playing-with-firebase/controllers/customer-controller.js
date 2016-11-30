/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.controller('customerController', ['$scope', '$uibModal', 'firebaseService', '$firebaseArray', function ($scope, $uibModal, firebaseService, $firebaseArray) {

        $scope.openAddCustDialog = function(){
            $uibModal.open({
                animation: true,
                templateUrl: 'templates/add-customer.html',
                size: "md",
                controller: "addCustomerController"
            });
        };

        $scope.customersList = $firebaseArray(firebaseService.customersRef);
    }]);
});