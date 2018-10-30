var analyze = require('Sentimental').analyze;

var express = require("express");
var app 	= express();
var path	= require("path");

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/submit', function(req, res) {
	console.log("Submitted: " + req);
});

app.listen(8080);

var a = analyze("Hey you worthless scumbag"); //Score: -6, Comparative:-1.5

console.log(a);