var http = require('http');
var analyze = require('Sentimental').analyze;

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
});

server.listen(8080);

console.log("Server running at localhost:8080");

var a = analyze("Hey you worthless scumbag"); //Score: -6, Comparative:-1.5

console.log(a);