/**
 * Created by oz on 4/14/2017.
 */

'use strict';

OZNotificationService.$inject = ['$timeout'];
function OZNotificationService($timeout) {
    var that = this;
    that.notifications = [];
    that.TYPE_ICONS_MAP = {
        'error': 'fa-times-circle',
        'success': 'fa-check-circle-o',
        'warning': 'fa-exclamation-circle',
        'info': 'fa-info-circle'
    };
    
    that.show = function(title, body, type, autoRemove) {
        var newNotification = {
            'notifId': new Date().getTime(),
            'notifTitle': title,
            'notifType': type,
            'notifBody': body,
            'notifTime': new Date().getTime(),
            'notifIcon': that.TYPE_ICONS_MAP[type]
        };
        
        that.notifications.push(newNotification);

        /*$timeout(function () {
            that.notifications.shift();
        }, autoRemove);*/
    };

    that.hide = function(index){
        that.notifications.splice(index, 1);
    };

    that.clear = function(){
        that.notifications = [];
    };

    that.getNotifications = function(){
        return that.notifications;
    };
}

module.exports = OZNotificationService;