//imports environment variables
const PAGE_ACCESS_TOKEN = process.env.SSLBOT_TOKEN;

//import modules
const util = require('util');

//import internal modules
const api = require('./api');
const msg = require('../templates/msg');

// Logger
require('console-stamp')(console, {pattern: 'yyyy-mm-dd HH:MM:ss'});

function handleMessage(sender_psid, name, received_message) {
  let response;
  if (received_message.text) {
    console.log("Texto: " + received_message.text);
    switch(received_message.text){
        case 'hola': case 'Hola': case 'Iniciar': case 'iniciar':
          response = msg.greetings(name);
          break;
        case 'ejecutivo': case 'Ejecutivo': 
          response = msg.ejecutivo;
          break;
        case 'chao': case 'Chao': 
          response = { "text": "Adiós! Que tengas un buen día"};
          break;
        case 'equipos': case 'equipo': case 'telefono': case 'telefonos': case 'teléfono':
        case 'Equipos': case 'Equipo': case 'Telefono': case 'Telefonos': case 'Teléfono':
          response = msg.equipos;
          break;
        default:
          response = { "text": `No entendí tu petición, envía \"iniciar\" para ver las opciones`}
    }
  } else if (received_message.attachments) {
    let attachment_url = received_message.attachments[0].payload.url;
/*    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }*/
  } 
//  console.log(util.inspect(response, false, null));
  api.callSendAPI(sender_psid, response);    
};

function handlePostback(sender_psid, name, received_postback) {
  let response;
  let payload = received_postback.payload;
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  } else if (payload === 'saldo') {
    response = { "text": "Tu saldo es de $0,22\nVigencia: 31/12/2017" }
  } else if (payload === 'paquetes') {
    response = {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type": "button",
          "text": "No cuentas con saldo suficiente para comprar paquetes, ¿deseas pedir un crédito?",
          "buttons": [
            {
              "type": "postback",
              "title": "Avance de $1",
              "payload": "1",
            },
            {
              "type": "postback",
              "title": "Avance de $2",
              "payload": "2",
            }
          ],
        }
      }
    };
  } else if (payload === '1') {
    response = { "text": "Se ha abonado $1 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,2) serán descontados de tu próxima recarga." }
  } else if (payload === '2') {
    response = { "text": "Se ha abonado $2 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,2) serán descontados de tu próxima recarga." }
  } else if (payload === 'equipos') {
    response = msg.equipos;
  }
  console.log(response);
  api.callSendAPI(sender_psid, response);
};

module.exports = {
  handleMessage,
  handlePostback
};