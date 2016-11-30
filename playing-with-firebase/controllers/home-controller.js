/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.controller('homeController', function($scope, $timeout, $state, firebaseService){

        firebaseService.init();

        $timeout(function () {
            $state.go('tabs.customers');
        }, 3000);
    });
});