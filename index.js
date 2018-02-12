//
// Facebook bot
// @date 2017-11-17
// @author Ignacio Silva
//
'use strict';
require('dotenv').config({path: '/home/isilva/facebookbot/parameters.env'});

//import modules
const express    = require('express');
const bodyParser = require('body-parser');
const request    = require('request');
const app        = express().use(bodyParser.json());
const fs         = require('fs');
const https      = require('https');
const util       = require('util');
//import internal modules
const api        = require('./core/api');
const response   = require('./core/response');

var ctx     = require('./core/context');
var options = {
  host : process.env.HTTPS_HOST,
  servername : process.env.HTTPS_SERVERNAME,
  port : process.env.HTTPS_PORT,
  key  : fs.readFileSync(process.env.HTTPS_KEY),
  cert : fs.readFileSync(process.env.HTTPS_CERT),
  ca   : fs.readFileSync(process.env.HTTPS_CA)
};

require('console-stamp')(console, {pattern: 'yyyy-mm-dd HH:MM:ss' });
// Sets server port and logs message on success
https.createServer(options, app).listen(
  process.env.HTTPS_PORT,
  () => {console.log('Secure server started')}
);

/*
 * POST METHOD
 * Process every request the web hook receives from the user
 */
app.post('/webhook/', function(req, res) {
  let messaging_events = req.body.entry[0].messaging

  for (let i = 0; i < messaging_events.length; i++) {
    let event  = req.body.entry[0].messaging[i];
    let sender = event.sender.id;
    console.log("INPUT:\n" + util.inspect(req.body.entry[0].messaging[i], false, null));

    api.getProfileDetails(sender).then(function(name) {
      if (event.message) {
        if (event.message.quick_reply) {
          response.handleQuickReply(sender, name, event.message.quick_reply);
          console.log('PSID:' + sender + ',Name:' + name + ',Type:quick_reply,Content:' + event.message.quick_reply.payload + ',Context:' + ctx.getContext() +',Destination:MO');
        }
        else {
          if (message.startsWith("/")) {
            response.handleCommand(sender, message);
          } else {
            response.handleMessage(sender, name, event.message);        
            console.log('PSID:' + sender + ',Name:' + name + ',Type:Text,Content:' + event.message.text + ',Context:' + ctx.getContext() +',Destination:MO');
          }
        }
      }        
      else if (event.postback) {
        response.handlePostback(sender, name, event.postback);
        console.log('PSID:' + sender + ',Name:' + name + ',Type:Postback,Content:' + event.postback.payload + ',Context:' + ctx.getContext() +',Destination:MO');
      } 
    });
  }
  res.sendStatus(200)
});


/*
 * GET METHOD
 * Only for Facebook verification of the Webhook
 */
app.get('/webhook', (req, res) => {
  let mode      = req.query['hub.mode'];
  let token     = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  if (mode && token) {
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      console.log('Webhook verified');
      res.status(200).send(challenge);
    } else {
      console.error('Webhook verification error');
      res.sendStatus(403);
    }
  }
});