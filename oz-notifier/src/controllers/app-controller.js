/**
 * Created by oz on 12/20/2016.
 */

'use strict';

AppController.$inject = ['ozNotifierService'];
function AppController(ozNotifierService) {
    var that = this;
    
    that.demo = {};
    that.formHolder = {};
    that.url = 'http://stackoverflow.com/users/2633871/maverickosama92';
    
    ozNotifierService.clear();
    
    that.submitNotificationForm = function(){
        ozNotifierService.show(that.demo.title, that.demo.body, that.demo.type);

        //clear form
        /*that.demo = {};
        that.formHolder.notifForm.$setPristine();
        that.formHolder.notifForm.$setUntouched();*/
    };

    var title = 'Notification Title';
    var body = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
    ozNotifierService.show(title, body, 'info');
    ozNotifierService.show(title, body, 'success');
    ozNotifierService.show(title, body, 'warning');
    ozNotifierService.show(title, body, 'error');
}

module.exports = AppController;