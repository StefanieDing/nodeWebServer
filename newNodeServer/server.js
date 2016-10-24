//include http module
var http = require('http');
var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter(keys.twitterKeys);

//declare port
var GOODPORT = 7000;
var BADPORT = 7500;
var status;

//function to handle
function handleRequests(request, response){
  response.end(status + request.url);
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

//generate a random tweet
  var screenName = {screen_name: 'stefanieding'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response){
    if(!error){
     status = tweets[Math.floor(Math.random() * tweets.length)].text;
    }
  })
