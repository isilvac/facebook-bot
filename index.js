//
// Facebook bot dummy
// @date 2017-11-17
// @author Ignacio Silva
//
'use strict';

//imports environment variables
const VERIFY_TOKEN = "CWtZ31Vf5k";
  
//import modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express().use(bodyParser.json());

//import internal modules
const api = require('./core/api');
const response = require('./core/response');

// Logger to a file
//const output = fs.createWriteStream('./sslbot.log'),
//  logger = new console.Console(output);
//require('console-stamp')(logger, {pattern: 'yyyy-mm-dd HH:MM:ss', stdout: output });
require('console-stamp')(console, {pattern: 'yyyy-mm-dd HH:MM:ss'});

app.listen(process.env.PORT || 1337, () => console.log('Server started'));

/*
 * POST METHOD
 */
app.post('/webhook/', function(req, res) {
  let messaging_events = req.body.entry[0].messaging
  for (let i = 0; i < messaging_events.length; i++) {
    let event = req.body.entry[0].messaging[i]
    let sender = event.sender.id

    api.getProfileDetails(sender).then(function(name) {
      console.log('PSID: ' + sender + ' nombre: ' + name);
      if (event.message) {
        response.handleMessage(sender, name, event.message);        
      }         
      else if (event.postback) {
        response.handlePostback(sender, name, event.postback);
        console.log("postback! " + event.postback.text)
      } 
    });
  }
  res.sendStatus(200)
});


/*
 * GET METHOD
 */
app.get('/webhook', (req, res) => {
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK VERIFIED');
      res.status(200).send(challenge);
    } else {
      console.log('ERROR');
      res.sendStatus(403);      
    }
  }
});
