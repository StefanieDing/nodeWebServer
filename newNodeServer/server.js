//include http module
var http = require('http');

//declare port
var GOODPORT = 7000;
var BADPORT = 7500;

//function to handle
function handleRequests(request, response){
  response.end('You go girl! ' + request.url);
}

//function to handle
function handleBadRequests(request, response){
  response.end("You're awful and everyone hates you!" + request.url);
}

//instantiate our server
var server = http.createServer(handleRequests);
var badserver = http.createServer(handleBadRequests)

//LISTEN ON PORT 7000
server.listen(GOODPORT, function(){
  console.log('SERVER LISTENING ON: http://localhost:%s', GOODPORT);
})

badserver.listen(BADPORT, function(){
  console.log('SERVER LISTENING ON: http://localhost:%s', BADPORT);
})