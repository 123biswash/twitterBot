console.log('the bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var tweet = {
	status: 'Watch #ThisIsUs now at https://www.nbc.com/this-is-us' 
}
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
	if(err){
		console.log('something went wrong')
	}else{
		console.log('it worked')
	}
}
