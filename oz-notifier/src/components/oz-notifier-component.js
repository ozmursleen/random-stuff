/**
 * Created by oz on 4/14/2017.
 */

'use strict';

module.exports = {
    bindings:{

    },
    template: require('../templates/partials/oz-notifier-template.html'),
    controller: function(ozNotifierService){
        var that = this;
        that.notificationList = ozNotifierService.getNotifications();
        that.removeNotif = function(e, index){
            ozNotifierService.hide(e, index);
        };
    }
};