
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

      var extractLinks = function(){
        var linksArray = [];
        $('a').each(function(){
          var $a = $(this);
          if($a && $a.length && $a.prop('href')){
            linksArray.push({
              isExternal: ($a.prop('href').indexOf('http://') > -1 || $a.prop('href').indexOf('https://') > -1 || $a.prop('href').indexOf('www.') > -1),
              url: $a.prop('href'),
              text: $a.text()
            });
          }
        });
        
        return linksArray;
      };

      var getHtmlVer = function() {
        return html.toLowerCase().indexOf('<!DOCTYPE html>'.toLowerCase()) > -1 ? 5 : 4;
      };

      var getPageTitle = function(){
        return $('title').text();
      };

      var extractHeadings = function(){
        var headings = {
          h1: $('h1').length,
          h2: $('h2').length,
          h3: $('h3').length,
          h4: $('h4').length,
          h5: $('h5').length,
          h6: $('h6').length
        };
        headings.total = $('h1,h2,h3,h4,h5,h6').length;
        return headings;
      };

      var isLoginPageExists = function(){
        return $('input[type="password"]').length > 0;
      };
      
      var finalResult = {
        links: extractLinks(),
        pageTitle: getPageTitle(),
        htmlVersion: getHtmlVer(),
        headings: extractHeadings(),
        isLoginExists: isLoginPageExists()
      };
      
      res.render('scrapping-result.html', {
        jsonData: JSON.stringify(finalResult)
      });
    } else {
      res.render('error.html', {
        error: error,
        response: response,
        html: html
      });
    }
  });
});

appServer = app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", appServer.address().port, app.settings.env);
});
