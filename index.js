var request = require('request');
var express = require('express');
var app = express();
var twitter = require('./lib/twitter.js');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.all('*', function(req, res, next) {
    if (req.headers.origin && req.headers.origin.indexOf('speg.com') > -1){
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
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

app.get('/commits/', function (req, res){
    returnCommits(res);
});


function returnCommits(res){
    var GITHUB = process.env.GITHUB,
    GPASS = process.env.GPASS;

    request({
        url: GITHUB,
        auth: {user: 'speg', pass: GPASS},
        headers: {'User-Agent': 'npm requests'}
    }, function(error, response, body){
        var parsed = parseCommits(body);
        res.send(parsed);
    }); 
};

app.listen(3000);

function parseCommits(body){
    //parse incoming list of activities
    var obj = JSON.parse(body).slice(0, 20);
    var result = [];
    obj.forEach(function(o){
        console.log(o);
        if (o.type === 'PushEvent' && o.payload.commits){
            o.payload.commits.forEach(function(c){
                result.push({
                    type: 'commit',
                    title: c.message,
                    url: c.url
                });
            });
        }
    });
    return result.slice(0, 10);
}
