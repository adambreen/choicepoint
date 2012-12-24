
/**
 * Module dependencies.
 */

var
    express = require('express'),
    connect = require('express/node_modules/connect'),
    routes  = require('./routes'),
    http    = require('http'),
    path    = require('path')
;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(connect.compress());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function (req, res){
  res.sendfile('./public/pages/info.html');
});

app.get(/info\/?.*/, function (req, res){
  res.sendfile('./public/pages/info.html');
});

app.get(/annai\/?.*/, function (req, res){
  // res.sendfile('./public/pages/annai.html');
  res.redirect('http://annai.choicepoint.jp');
});

app.get(/booking\/?.*/, function (req, res){
  res.sendfile('./public/pages/booking.html');
});

app.get(/arigato/, function (req, res){
  res.sendfile('./public/pages/arigato.html');
});

app.get(/test\/?.*/, function (req, res){
  res.sendfile('./public/form.html');
});

app.post(/test/, function (req, res){
    console.log(req);
    res.end(200);
});

app.post(/booking/, function (req, res){
   
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

