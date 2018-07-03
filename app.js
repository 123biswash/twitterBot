console.log('the bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var params = {
	q: 'This Is Us',
	count: 2
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
	console.log(data)
};


