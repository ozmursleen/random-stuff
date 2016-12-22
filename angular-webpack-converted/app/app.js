
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import routes from './routes/app-routes';

(function () {
    'use strict';
    var angular = require('angular');
    var uiRouter = require('angular-ui-router');
    var uiBootstrap = require('angular-ui-bootstrap');

    angular.module('dashboard', [uiRouter, uiBootstrap]).config(routes);

    /* Styles */
    require('./index.scss');
    require('./main.less');

    require('./directives');
    require('./services');
    require('./controllers');
}());

