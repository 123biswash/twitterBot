console.log('the bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

tweetIt();
//setInterval(tweetIt, 1000*10);

function tweetIt(){

	var r = Math.floor(Math.random()*100);
	var tweet = {
		status: '#'+ r + ' Watch #ThisIsUs now at https://www.nbc.com/this-is-us' 
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
//thank you for following
//post a tweet
//
