//imports environment variables
const PAGE_ACCESS_TOKEN = process.env.SSLBOT_TOKEN;

//import modules
const util = require('util');

//import internal modules
const api = require('./api');
const msg = require('../templates/msg');

// Logger
require('console-stamp')(console, {pattern: 'yyyy-mm-dd HH:MM:ss'});

/**
 * Method that process "text" messages and based on its content, uses some of the predefined responses
 *
 * @param sender_psid       PSID of the user that sends the messagen
 * @param name              Given name of the person
 * @param received_message  Message received
 * @retun JSON content to be used as a response 
 **/
function handleMessage(sender_psid, name, received_message) {
  let response;
  if (received_message.text) {
    let message = received_message.text.toLowerCase(); 
    console.log("Texto: " + message);
    if((message.indexOf("hola") != -1) || (message.indexOf("hello") != -1) || (message.indexOf("holi") != -1) || (message.indexOf("iniciar") != -1)){
      response = msg.greetings(name);
    } else if((message.indexOf("agente") != -1) || (message.indexOf("hablar") != -1) || (message.indexOf("ejecutiv") != -1)){
      response = msg.agent;
    } else if((message.indexOf("chao") != -1) || (message.indexOf("adios") != -1) || (message.indexOf("hasta pronto") != -1) || (message.indexOf("hasta luego") != -1) || (message.indexOf("gracias") != -1)){
      response = { "text": "Adiós! Que tengas un buen día"};
    } else if((message.indexOf("smartphone") != -1) || (message.indexOf("telefono") != -1) || (message.indexOf("equipo") != -1) || (message.indexOf("celular") != -1)){
      response = msg.device;
    } else if(((message.indexOf("saldo") != -1) || (message.indexOf("balance") != -1)) && (message.indexOf("avance") == -1)){
      response = msg.balance;
    } else if((message.indexOf("avance") != -1) && (message.indexOf("credito") != -1) || (message.indexOf("avance") != -1) && (message.indexOf("saldo") != -1)){
      response = msg.sosOffer;
    } else if((message.indexOf("avance") != -1) && (message.indexOf("paquetes") != -1)){
      response = msg.pqtOffer;
    } else {
      response = { "text": `No entendí tu petición, solo soy un bot demo :\( envía \"iniciar\" para ver las opciones`}
    }
  } else if (received_message.attachments) {
    //let attachment_url = received_message.attachments[0].payload.url;
    //TODO something
  } 
  console.log(util.inspect(response, false, null));
  api.callSendAPI(sender_psid, response);    
}

/**
 * Method that handles predefined responses (from buttons)
 *
 * @param sender_psid       PSID of the user that sends the messagen
 * @param name              Given name of the person
 * @param received_postback Message received
 * @retun JSON content to be used as a response 
 **/
function handlePostback(sender_psid, name, received_postback) {
  let response;
  let payload = received_postback.payload;
  if (payload === 'saldo') {
    response = msg.balance;
  } else if (payload === 'paquetes') {
    response = msg.packs;
  } else if (payload === 'si') {
    response = msg.creditOffer;
  } else if (payload === 'sos') {
    response = msg.sosOffer;
  } else if (payload === 'pqt') {
    response = msg.pqtOffer;
  } else if (payload === '50mb') {
    response = msg.pqtPack(payload, 1.00, "semana");
  } else if (payload === '150mb') {
    response = msg.pqtPack(payload, 2.50, "mes");
  } else if (payload === '50mbok' || payload === '150mbok') {
    response = { "text": "Tu paquete será provisionado en los próximos minutos" }
  } else if (payload === 'no') {
    response = { "text": "OK, no olvides recargar para seguir comunicado!" }
  } else if (payload === '1') {
    response = { "text": "Se ha abonado $1 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,1) serán descontados de tu próxima recarga." }
  } else if (payload === '2') {
    response = { "text": "Se ha abonado $2 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,2) serán descontados de tu próxima recarga." }
  } else if (payload === '3') {
    response = { "text": "Se ha abonado $3 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,3) serán descontados de tu próxima recarga." }
  } else if (payload === 'equipos') {
    response = msg.device;
  }
  console.log(response);
  api.callSendAPI(sender_psid, response);
}

module.exports = {
  handleMessage,
  handlePostback
};
