console.log('the bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
	//console.log(eventMsg);
	var fs= require('fs');
	var json = JSON.stringify(eventMsg,null,2);
	fs.writeFile("tweet.json", json);
}

function tweetIt(txt){
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err){
			console.log('something went wrong')
		}else{
			console.log('it worked')
		}
	}
}

fs.readFile('/tweet.json', function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if(err) {
    console.log('Unknown Error');
    return;
  }
  // Otherwise, log the file contents
  console.log(data);
});