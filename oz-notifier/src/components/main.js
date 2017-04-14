/**
 * Created by oz on 4/14/2017.
 */

import angular from 'angular';

var appComponents = angular.module('app.components', [])
                            .service('ozNotifierService', require('./oz-notifier-service'))
                            .component('ozNotifier', require('./oz-notifier-component'));

export default appComponents;