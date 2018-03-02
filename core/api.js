//import modules
const request = require('request');
// Logger
require('console-stamp')(console, { pattern: 'yyyy-mm-dd HH:MM:ss'});

/**
 * Sends a message via Facebook Graph API
 *
 * @param   {integer}   sender_psid - ID the user
 * @param   {String}    response - content to send
 */
function callSendAPI(sender_psid, response) {
  let request_body = {
    "recipient": { "id": sender_psid },
    "message": response
  };

  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  },
  (err, res, body) => {
    if (!err && (res.statusCode === 200)) {
      console.log('Message to ' + sender_psid + ' sent!');
      //console.log(body);
    } else {
      console.error("Unable to send message: " + err);
    }
  });
};

/**
 * Retrieves personal information of the user via Facebook Graph API
 *
 * @param   {integer}   sender_psid - ID the user
 * @return  {String}    name of the user
 */
function getUserDetails(psid) {
  return new Promise (
    function (resolve, reject) {
      request({
        "uri": "https://graph.facebook.com/v2.6/" + psid,
        "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN,
                "fields":'first_name,last_name,locale'},
        "method": "GET"
        },
        (err, res, body) => {
          if (!err && (res.statusCode === 200)) {
            var obj = JSON.parse(body);
            resolve(JSON.stringify(obj));
          } else {
            console.error("Error invocando getProfileDetails: " + body);
          }
        }
      );
    }
  );
};

module.exports = {
 callSendAPI,
 getUserDetails
};
