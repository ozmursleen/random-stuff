/**
 * Created by oz on 4/14/2017.
 */

'use strict';

//this service is responsible for show/hide/remove of the notification
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
    
    that.show = function(title, body, type, duration) {
        var newNotification = {
            'notifId': that.autoId(),
            'notifTitle': title,
            'notifType': type,
            'notifBody': body,
            'notifTime': new Date().getTime(),
            'notifIcon': that.TYPE_ICONS_MAP[type],
            'notifHide': false
        };
        
        that.notifications.push(newNotification);

        if(duration){
            $timeout(function () {
                that.hide(newNotification);
            }, duration);    
        }
    };

    that.hide = function(notif){
        notif.notifHide = true;
        var index = that.notifications.findIndex(n => n.notifId === notif.notifId);
        $timeout(function(){
            that.notifications.splice(index, 1);
        }, 300);
    };

    that.clear = function(){
        that.notifications = [];
    };

    that.getNotifications = function(){
        return that.notifications;
    };

    //taken from: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    that.autoId = function() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
}

module.exports = OZNotificationService;
