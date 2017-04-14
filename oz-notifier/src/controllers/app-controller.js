/**
 * Created by oz on 12/20/2016.
 */

'use strict';

AppController.$inject = ['ozNotifierService'];
function AppController(ozNotifierService) {
    var that = this;
    that.demo = {};
    
    that.submitNotificationForm = function(){
        ozNotifierService.show(that.demo.title, that.demo.body, that.demo.type);
    };
}

module.exports = AppController;