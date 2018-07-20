var config = require('./config')
var request = require('request')

// twitter authentication
var twitter_oauth = {
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  token: config.access_token,
  token_secret: config.access_token_secret
}

var WEBHOOK_URL = 'https://your-webhook-url'


// request options
var request_options = {
  url: 'https://api.twitter.com/1.1/account_activity/webhooks.json',
  oauth: twitter_oauth,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
  form: {
    url: WEBHOOK_URL
  }
}

// POST request to create webhook config
request.post(request_options, function (error, response, body) {
  console.log(body)
})