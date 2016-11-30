/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.controller('appointmentController', ['$scope', '$uibModal', 'firebaseService', '$firebaseArray', function ($scope, $uibModal, firebaseService, $firebaseArray) {

        $scope.custList = $firebaseArray(firebaseService.customersRef);

        $scope.filterNextWeekAppts = function(){
            var nextWeekStart = moment().add(1, 'weeks').startOf('isoWeek');
            var nextWeekEnd = moment().add(1, 'weeks').endOf('isoWeek');

            $scope.custList = $scope.custList.filter(function(appt){
               return moment(appt.apptDate).isBetween(nextWeekStart, nextWeekEnd);
            });
        };

        $scope.deleteAppt = function(cust){
            try {
                $scope.custList.$remove($scope.custList.$indexFor(cust.$id));
            } catch (e) {
                $scope.custList = $firebaseArray(firebaseService.customersRef);
                $scope.custList.$remove($scope.custList.$indexFor(cust.$id));
            }
        };

    }]);
});