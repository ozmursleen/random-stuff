import app from './app';

describe('app', () => {

  describe('appController', () => {
    let ctrl, mock;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller, ozNotifierService) => {
        mock = {
          notification: ozNotifierService
        };
        ctrl = $controller('appController', mock);
      });
    });

    //it will validate whether the controller has url and it equals to the string
    it('should contain my stackoverflow profile', () => {
      expect(ctrl.url).toBe('http://stackoverflow.com/users/2633871/maverickosama92');
    });

    //it will validate if the list is empty
    it('is notification list empty', function(){
      mock.notification.clear();
      var output = mock.notification.getNotifications();
      expect(output).toEqual([]);
    });

    //it will validate does the list contain info type notification
    it('info notification', function(){
      mock.notification.clear();
      var title = 'Notification Title';
      var body = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
      mock.notification.show(title, body, 'info');
      var output = mock.notification.getNotifications();
      expect(output[0].notifType).toEqual('info');
    });
    
  });
});