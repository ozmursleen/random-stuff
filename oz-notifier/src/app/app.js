import angular from 'angular';
import uirouter from 'angular-ui-router';

import appControllers from '../controllers/main';
import appRoutes from '../routes/app-routes';
import appComponents from '../components/main';

import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.css';
import '../style/app.less';

let app = () => {
  return {
    template: require('../templates/app.html'),
    controller: 'appController',
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, appControllers.name, appComponents.name])
       .config(appRoutes)
       .directive('app', app);

export default MODULE_NAME;