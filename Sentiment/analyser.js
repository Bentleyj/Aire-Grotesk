var analyze = require('Sentimental').analyze;

var express = require("express");
var app 	= express();
var path	= require("path");
var myParser = require("body-parser");

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('libs')); // This serves everything in the libs file as static files. You access them by going directly to them without prepending the /libs/ file path.

app.use(myParser.urlencoded({extended : true}));

app.post('/submit', function(req, res) {
	var t = req.body.textToAnalyze;
	var a = analyze(t);
	var s = a.score.toString()
	res.end(s);
});


app.listen(8080);