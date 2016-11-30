/**
 * Created by oz on 11/26/2016.
 */

// Configuration Options
require.config({
  baseUrl: 'js/', //for reading app.js and main.js under js/ folder
  // paths: maps ids with paths (no extension)
  paths: {
    'jquery': ['../scripts/lib/jquery/dist/jquery.min'],
    'angular': ['../scripts/lib/angular/angular.min'],
    'bootstrap': ["../scripts/lib/bootstrap/dist/js/bootstrap.min"],
    'angular-ui-bootstrap': ["../scripts/lib/angular-bootstrap/ui-bootstrap-tpls.min"],
    'angular-ui-router': ['../scripts/lib/angular-ui-router/release/angular-ui-router.min'],
    'lodash': ['../scripts/lib/lodash/dist/lodash.min'],
    'firebase': ['../scripts/lib/firebase/firebase'],
    'angularfire': ['../scripts/lib/angularfire/dist/angularfire.min']
  },
  // shim: makes external libraries reachable
  shim: {
    'jquery': {
      exports: '$'
    },
    'lodash': {
      exports: '_'
    },
    'angular': {
      exports: 'angular'
    },
    'angular-ui-router': {
      deps: ['angular']
    },
    'firebase': {
      exports: 'firebase'
    },
    'angularfire': {
      deps: ['firebase', 'angular']
    },
    'bootstrap':{
      deps: ['jquery', 'angular']
    },
    'angular-ui-bootstrap':{
      deps: ['bootstrap']
    }
  }
});

// Angular Bootstrap 
require(['app', 'lodash', '../directives/main', '../services/main' , '../routes/main', '../controllers/main'], function (app, _) {
  // initialisation code defined within app.js
  app.init();
});