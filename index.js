/*
 * Facebook Webhook
 * @date 2017-11-17
 * @author Ignacio Silva
 */
'use strict';
require('dotenv').config({path: '/home/isilva/facebookbot/parameters.env'});

//import module,
const express  = require('express'),
  xhub         = require('express-x-hub'),
  bodyParser   = require('body-parser'),
  cookieParser = require('cookie-parser'),
  request      = require('request'),
  fs           = require('fs'),
  https        = require('https'),
  app          = express(),
  util         = require('util');
//import internal modules
const api  = require('./core/api'),
  response = require('./core/response'),
  userMap  = require('./core/userMap'),
  ctx      = require('./core/context');
// set parsers for app
app.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));
app.use(bodyParser.json());
app.use(cookieParser());

var options = {
  host : process.env.HTTPS_HOST,
  servername : process.env.HTTPS_SERVERNAME,
  port : process.env.HTTPS_PORT,
  key  : fs.readFileSync(process.env.HTTPS_KEY),
  cert : fs.readFileSync(process.env.HTTPS_CERT),
  ca   : fs.readFileSync(process.env.HTTPS_CA)
};

require('console-stamp')(console, { pattern: 'yyyy-mm-dd HH:MM:ss'});

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
  const data = req.body;
  //console.log("INPUT:\n" + util.inspect(data, false, null));

  if(!req.isXHub || !req.isXHubValid()) {
    console.log('Warning - request header X-Hub-Signature not present or invalid');
    return this.reject('No X-Hub Signature', req, res);
    res.sendStatus(401);
  }

  if (data.object === 'page') {
    res.sendStatus(200);

    // Iterate over each entry
    data.entry.forEach((pageEntry) => {
      if (!pageEntry.messaging) {
        return;
      }

      // Iterate over each messaging event
      pageEntry.messaging.forEach((messagingEvent) => {

        // check user in hashmap
        let sender = messagingEvent.sender.id;
        if (!userMap.has(sender)) {
          console.log("New user: " + sender);
          api.getUserDetails(sender).then(function(data) {
            let obj = JSON.parse(data);
            userMap.insert(
              obj.id,
              obj.first_name,
              obj.last_name,
              obj.locale.toLowerCase().split("_")[0],
              userMap.defaultContext(),
              new Date().toISOString()
            );
            // Say hello to the new user
            let msg = ctx['msg_' + userMap.defaultContext() + '_es'];// + obj.locale.toLowerCase().split("_")[0]];
            api.callSendAPI(sender, msg.greetings(obj.first_name));
            setTimeout(function() {
              processMessage(sender, messagingEvent);
            }, 1000);
          })
        } else {
          processMessage(sender, messagingEvent);
        }
      }) // pageEntry foreach
    }) // dataEntry foreach
  } else {
    res.sendStatus(400); // Not a valid message for Webhook
  }
});

/*
 * GET METHOD
 * Only for Facebook verification of the Webhook
 */
app.get('/webhook', (req, res) => {
  let mode      = req.query['hub.mode'];
  let token     = req.query['hub.verify_token'];
  if (mode && token) {
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      console.log('Webhook verified');
      res.status(200).send(req.query['hub.challenge']);
    } else {
      console.error('Webhook verification error');
      res.sendStatus(403);
    }
  }
});

/**
 * Method to process the message event based on its type
 */
function processMessage(sender, messagingEvent) {
  // process request
  if (messagingEvent.message) {
    if (messagingEvent.message.quick_reply) {
      response.handleQuickReply(sender, messagingEvent.message.quick_reply);
    }
    else {
      let message = messagingEvent.message.text; 
      if (message.startsWith("/")) {
        response.handleCommand(sender, message);
      } else {
        response.handleMessage(sender, messagingEvent.message);        
      }
    }
  }
  else if (messagingEvent.postback) {
    response.handlePostback(sender, messagingEvent.postback);
  }
  // else if (messagingEvent.account_linking) {
  //   response.handleReceiveAccountLink(sender, messagingEvent);
  // }
  else {
    console.error('Unknown messagingEvent: ', messagingEvent);
  }
}
