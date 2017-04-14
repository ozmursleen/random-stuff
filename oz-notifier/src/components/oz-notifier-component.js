/**
 * Created by oz on 4/14/2017.
 */

'use strict';

module.exports = {
    bindings:{

    },
    template: require('../templates/partials/oz-notifier-template.html'),
    controller: function(ozNotifierService, $rootScope){
        var that = this;
        that.notificationList = ozNotifierService.getNotifications();

        /*var scope = $rootScope.$new();
        scope.$watch(function () {
            return ozNotifierService.getNotifications();
        }, function (newVal, oldVal) {
            console.log('controller', newVal, oldVal);
        }, true);*/
    }
}