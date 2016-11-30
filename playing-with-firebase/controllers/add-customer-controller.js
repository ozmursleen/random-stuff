/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.controller('addCustomerController', ['$scope', '$uibModalInstance', 'firebaseService', '$firebaseArray', function ($scope, $uibModalInstance, firebaseService, $firebaseArray) {
        $scope.formHolder = {};
        $scope.newCustObject = {};

        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.addNewCustomer = function(newCustObject){
            if($scope.formHolder.frmNewCust.$valid){
                var customers = $firebaseArray(firebaseService.customersRef);
                customers.$loaded().then(function(data){
                    var mx = _.maxBy(data, 'id');
                    newCustObject.id = mx.id+1;
                    newCustObject.dob = moment(newCustObject.dob.toString()).format('L');
                    newCustObject.apptDate = newCustObject.apptDate.getTime();
                    customers.$add(newCustObject);
                    $scope.close();
                });
            }else{
                alert('Please fill required fields.')
            }
        }
    }]);
});