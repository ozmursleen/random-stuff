/**
 * Created by oz on 03/04/2017.
 */

// Configuration Options
require.config({
  baseUrl: "js/", //for reading app.js and main.js under js/ folder
  paths: {
    'angular': ['../scripts/lib/angularjs/angular.min'],
    'jquery': ['../scripts/lib/jquery/jquery.min'],
    'owlCarousel': ['../scripts/lib/owlcarousel2/owl.carousel.min']
  },
  // shim: makes external libraries reachable
  shim: {
    angular: {
      exports: 'angular'
    },
    jquery: {
      exports: '$'
    },
    owlCarousel: {
      deps: ['jquery']
    }
  }
});

// Angular Bootstrap 
require(['app', 'jquery', 'owlCarousel', '../controllers/main', '../components/main'], function (app, $) {
  // initialisation code defined within app.js
  app.init();
});