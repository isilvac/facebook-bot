//imports environment variables
const PAGE_ACCESS_TOKEN = process.env.SSLBOT_TOKEN;
const VERIFY_TOKEN = "CWtZ31Vf5k";

//import modules
const request = require('request');
const util = require('util');

// Logger
require('console-stamp')(console, {pattern: 'yyyy-mm-dd HH:MM:ss'});

function callSendAPI(sender_psid, response) {
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }
  console.log(util.inspect(request_body, false, null));
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!');
      console.log(body);
    } else {
      console.error("Unable to send message:" + err);
    }
  });
};

function getProfileDetails(psid) {
  return new Promise (
    function (resolve, reject) {
      request({
          "uri": "https://graph.facebook.com/v2.6/" + psid,
        "qs": { "access_token": PAGE_ACCESS_TOKEN,
                "fields":'first_name,last_name'},
        "method": "GET"
        },
        (err, res, body) => {
            if (!err) {
                var obj = JSON.parse(body);
                resolve(obj.first_name);
            } else {
                console.error("Error invocando url:" + err);
            }
          }
      )
    }
  );
};

module.exports = {
 callSendAPI,
 getProfileDetails
};