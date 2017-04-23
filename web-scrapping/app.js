
/**
 * Module dependencies.
 */

var express = require('express'),
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

// Routes
app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/scrapping', function(req, res) {
  request(req.param('url'), function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = {title: "", release: "", rating: ""};

      $('.title_wrapper').filter(function () {
        var data = $(this);
        title = data.children().first().text().trim();
        release = data.children().last().children().last().text().trim();

        json.title = title;
        json.release = release;
      });

      $('.ratingValue').filter(function () {
        var data = $(this);
        rating = data.text().trim();

        json.rating = rating;
      });

      res.render('scrapping-result.html', {
        jsonData: JSON.stringify(json)
      });
    } else {
      res.render('error.html', {
        jsonData: JSON.stringify(error)
      });
    }
  });
});

appServer = app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", appServer.address().port, app.settings.env);
});
