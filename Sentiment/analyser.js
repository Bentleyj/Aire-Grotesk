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

app.post('localhost:8080/submit', function(req, res) {
	console.log("Submitted: \n" + req.body);
});


app.listen(8080);

var a = analyze("This is a fun app"); //Score: -6, Comparative:-1.5

console.log(a);