/**
 * Created by oz on 4/14/2017.
 */

'use strict';

OZNotificationService.$inject = ['$timeout'];
function OZNotificationService($timeout) {
    var that = this;
    that.notifications = [];

    that.show = function(title, body, type) {
        that.notifications.push({
            'notifTitle': title,
            'notifType': type,
            'notifBody': body,
            'notifTime': new Date().getTime()
        });

        $timeout(function(){
            that.notifications.shift();
        }, 3000);
    }

    that.hide = function(){

    }

    that.clear = function(){
        that.notifications = [];
    };

    that.getNotifications = function(){
        return that.notifications;
    };
}

module.exports = OZNotificationService;