var express = require('express');
var app = express();
var twitter = require('./lib/twitter.js');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.all('*', function(req, res, next) {
    if (req.headers.origin && req.headers.origin.indexOf('speg.com') > -1){
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json; charset=utf-8');
    }
    next();
});
app.get('/', function(req, res){
	res.render('index');
});

app.get('/tweets/', function(req, res){
    var err = function(){res.send('[]')};
    var suc = function(data){res.send(data)};
    var tweets = twitter.getUserTimeline({count: 10}, err, suc);
});

app.listen(3000);

