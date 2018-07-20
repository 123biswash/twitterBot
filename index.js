const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
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
  	//console.log(req.body.name_here)
  	res.send("hello world")
  })
  .get("/webhooks/twitter", (req, res) => {
  	//res.send({
  		//"response_token": "sha256="+hmac.get_challenge_response(config.consumer_secret, req.query.crc_token)
  	//})
  	res.send("hello world")
  })
  .listen(PORT, () => console.log('Listening ${ PORT }'))