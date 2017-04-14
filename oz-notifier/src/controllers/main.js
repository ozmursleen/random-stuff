/**
 * Created by oz on 12/20/2016.
 */

import angular from 'angular';
import appCtrl from './app-controller';

var appControllers = angular.module('app.controllers', []).controller('appController', appCtrl)

export default appControllers;