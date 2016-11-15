// Configuration Options
require.config({
  baseUrl: "js/", //for reading app.js and main.js under js/ folder
  // paths: maps ids with paths (no extension)
  paths: {
    "angular": ["../scripts/lib/angularjs/angular.min"],
    "angular-ui-router": ["../scripts/lib/angularjs/angular-ui-router.min"],
    "angular-animate": ["../scripts/lib/angularjs/angular-animate"],
    "jquery": ["../scripts/lib/jquery/jquery-1.10.0.min"]
  },
  // shim: makes external libraries reachable
  shim: {
    angular: {
      exports: "angular"
    },
    "angular-ui-router": {
      deps: ["angular"]
    },
    "angular-animate": {
      deps: ["angular"]
    }
  }
});

// Angular Bootstrap 
require(["app", "jquery", "../controllers/main", "../directives/main", "../services/main"], function (app, $) {
  // initialisation code defined within app.js
  app.init();
});