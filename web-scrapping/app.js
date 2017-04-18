
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    request = require('request'),
    cheerio = require('cheerio');

var app = module.exports = express();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
    app.engine('.html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view options', {
        layout: false
    });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'omgnodeworks' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

appServer = app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", appServer.address().port, app.settings.env);
});
