/**
 * Created by oz on 4/14/2017.
 */

'use strict';

//this is a component that i use to show notification its more of a container
module.exports = {
    template: require('../templates/partials/oz-notifier-template.html'),
    controller: function(ozNotifierService){
        var that = this;
        that.notificationList = ozNotifierService.getNotifications();
        that.removeNotif = function(notif){
            ozNotifierService.hide(notif);
        };
    }
};