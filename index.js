const express = require('express')
const path = require('path')
//const PORT = process.env.PORT || 5000
console.log('aaa')
console.log(process.env.PORT)
let bodyParser = require("body-parser")
let hmac = require('./security')
let config = require('./config')
//var app = express()

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .get("/", (req, res) => {
  	res.send("index page")
  })
  .post("/webhooks/twitter", (req, res) => {
  	//console.log(req.body.)
  	if(req.body.favorite_events){
  		console.log('favorite event')
  	}
  	else if(req.body.direct_message_indicate_typing_events){
  		console.log('dm typing event')
  	}
  	else {
  		console.log('another event')
  	}
  	//res.send("hello world")
  })
  .get("/webhooks/twitter", (req, res) => {
  	//console.log('bbb')
  	//console.log(req.query.crc_token)
  	//console.log('bbb')
  	res.send(JSON.stringify({
  		"response_token": "sha256="+hmac.get_challenge_response(req.query.crc_token, config.consumer_secret)
  	}))
  	//res.send("hello world")
  })
  .listen(process.env.PORT || 5000, () => console.log('Listening ${ PORT }'))