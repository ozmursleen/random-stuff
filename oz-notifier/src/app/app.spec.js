import app from './app';

describe('app', () => {

  describe('appController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('appController', {});
      });
    });

    it('should contain my stackoverflow profile', () => {
      expect(ctrl.url).toBe('http://stackoverflow.com/users/2633871/maverickosama92');
    });
  });
});