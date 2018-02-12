//import modules
const util    = require('util');
const decache = require('decache');
//import internal modules
const api     = require('./api');
var ctx       = require('./context');

var msg = require('../templates/msg_' + ctx.getContext());
// Logger
require('console-stamp')(console, {pattern: 'yyyy-mm-dd HH:MM:ss'});

/**
 * Method that process "text" messages and based on its content, uses some of the predefined responses
 *
 * @param sender_psid       PSID of the user that sends the messagen
 * @param name              Given name of the person
 * @param received_message  Message received
 **/
function handleMessage(sender_psid, name, received_message) {
  let response;
  if (received_message.text) {
    let message = received_message.text.toLowerCase();
    console.log("Text: " + message + " context: " + ctx.getContext());

    // TELCO section
    if((message.indexOf("smartphone") != -1) || (message.indexOf("telefono") != -1) || (message.indexOf("equipo") != -1) || (message.indexOf("celular") != -1)){
      response = msg.device;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:device' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if(((message.indexOf("saldo") != -1) || (message.indexOf("balance") != -1)) && (message.indexOf("avance") == -1)){
      response = msg.balance;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Buttons,Content:balance' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("avance") != -1) && (message.indexOf("credito") != -1) || (message.indexOf("avance") != -1) && (message.indexOf("saldo") != -1)){
      response = msg.sosOffer;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Buttons,Content:sosOffer' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("avance") != -1) && (message.indexOf("paquetes") != -1)){
      response = msg.pqtOffer;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Buttons,Content:pqtOffer' + ',Context:' + ctx.getContext() + ',Destination:MT');

    // SHOP + LAWYER
    } else if((message.indexOf("oficina") != -1) || (message.indexOf("sucursal") != -1) || (message.indexOf("ubicacion") != -1) || (message.indexOf("ubicación") != -1)){
      response = msg.sucursal;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:sucursal' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("@gmail.com") != -1) || (message.indexOf("@hotmail.com") != -1) || (message.indexOf("@tiaxa.net") != -1)){
      response = { "text": `Te estaremos notificando de novedades en tu correo`};
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:email' + ',Context:' + ctx.getContext() + ',Destination:MT');
    

    // CASINO
    } else if((message.indexOf("gastronomia") != -1) || (message.indexOf("comida") != -1) || (message.indexOf("restaurant") != -1) || (message.indexOf("cena") != -1) || (message.indexOf("comer") != -1)){
      response = msg.gastronomia;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:gastronomia' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("hotel") != -1) || (message.indexOf("alojamiento") != -1) || (message.indexOf("dormir") != -1) || (message.indexOf("habitacion") != -1)){
      response = msg.hotel;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:hotel' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("casino") != -1) || (message.indexOf("jugar") != -1) || (message.indexOf("apuesta") != -1) || (message.indexOf("apostar") != -1) || (message.indexOf("juego") != -1)){
      response = msg.casino;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:casino' + ',Context:' + ctx.getContext() + ',Destination:MT');

    // GENERIC
    } else if((message.indexOf("hola") != -1) || (message.indexOf("hello") != -1) || (message.indexOf("holi") != -1) || (message.indexOf("iniciar") != -1) || (message.indexOf("menu") != -1)){
      response = msg.greetings(name);
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Buttons,Content:greetings' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("chao") != -1) || (message.indexOf("adios") != -1) || (message.indexOf("hasta pronto") != -1) || (message.indexOf("hasta luego") != -1) || (message.indexOf("gracias") != -1)){
      response = { "text": "Adiós! Que tengas un buen día"};
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:bye' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else if((message.indexOf("telefono") != -1) || (message.indexOf("teléfono") != -1) || (message.indexOf("hablar") != -1) || (message.indexOf("ejecutiv") != -1)){
      response = msg.agent;
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Call,Content:agent' + ',Context:' + ctx.getContext() + ',Destination:MT');
    } else {
      response = { "text": `No entendí tu mensaje, solo soy un bot demo :\( envía \"menu\" para ver las opciones`}
      console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:unknown' + ',Context:' + ctx.getContext() + ',Destination:MT');
    }
  } else if (received_message.attachments) {
    //let attachment_url = received_message.attachments[0].payload.url;
    //TODO something
  } 
  //console.log(util.inspect(response, false, null));
  api.callSendAPI(sender_psid, response);    
}

/**
 * Method that handles predefined responses (from buttons)
 *
 * @param sender_psid       PSID of the user that sends the messagen
 * @param name              Given name of the person
 * @param received_postback Message received
 **/
function handlePostback(sender_psid, name, received_postback) {
  let response;
  let payload = received_postback.payload;
  console.log("Payload: " + payload + " context: " + ctx.getContext());
  switch (ctx.getContext()) {
      case 'bike':
        if (payload === 'catalogo') {
          response = msg.catalogo;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:catalogo' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'redesSociales') {
          response = msg.redesSociales;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:redesSociales' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursal') {
          response = msg.sucursal;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:tiendas' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'modelosMontana') {
          response = msg.modelosMontana;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:modelosMontana' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'modelosCarretera') {
          response = msg.modelosCarretera;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:modelosCarretera' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'modelosUrbano') {
          response = msg.modelosUrbano;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:modelosUrbano' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursalSantiago') {
          response = msg.sucursalSantiago;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:tiendasSantiago' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursalVitacura') {
          response = msg.sucursalVitacura;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:tiendasVitacura' + ',Context:' + ctx.getContext() + ',Destination:MT');
        }
        break;
      case 'casino':
        if (payload === 'panorama') {
          response = msg.panorama;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:panorama' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'casino') {
          response = msg.casino;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:casino' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'hotel') {
          response = msg.hotel;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:hotel' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'panorama_gam') {
          response = msg.panorama_gam;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:panorama_gam' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'panorama_gam2') {
          response = msg.panorama_gam2;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:panorama_gam2' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'promocion') {
          response = msg.promocion;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:promocion' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'servicio') {
          console.log("entro");
          response = msg.servicio;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:QuickReply,Content:servicio' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'gastronomia') {
          response = msg.gastronomia;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:gastronomia' + ',Context:' + ctx.getContext() + ',Destination:MT');
        }
        break;
      case 'shop':
        if (payload === 'compra') {
          response = msg.compra;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:compra' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'disponibilidad') {
          response = msg.disponibilidad;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:QuickReply,Content:disponibilidad' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'cathombre') {
          response = msg.cathombre;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:cathombre' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'catmujer') {
          response = msg.catmujer;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:catmujer' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'promociones') {
          response = msg.promociones;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:QuickReply,Content:promociones' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'promohombre') {
          response = msg.promohombre;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:QuickReply,Content:promohombre' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'promohombrechaq') {
          response = msg.promohombrechaq;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:promohombrechaq' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursal') {
          response = msg.sucursal;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:tiendas' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursalLasCondes') {
          response = msg.sucursalLasCondes;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:tiendasLasCondes' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursalLaReina') {
          response = msg.sucursalLaReina;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:tiendasLaReina' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'eventos') {
          response = msg.eventos;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:eventos' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'contact') {
          response = { "text": 'Déjanos tu correo y te enviaremos las novedades apenas salgan!'}
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:contact' + ',Context:' + ctx.getContext() + ',Destination:MT');
        }
        break;
      case 'lawyer':
        if (payload === 'faq') {
          response = msg.faq;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:faq' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'consulta') {
          response = msg.consulta;        
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:consulta' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'llamada') {
          response = msg.llamada;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Call,Content:llamada' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'cobranza') {
          response = msg.cobranza;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:cobranza' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'cobranza2') {
          response = msg.cobranza2;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:cobranza2' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'embargo') {
          response = msg.embargo;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:embargo' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'quiebra') {
          response = msg.quiebra;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:List,Content:quiebra' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'cartaEmbargo') {
          response = msg.cartaEmbargo;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:cartaEmbargo' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'notifJudicial') {
          response = msg.notifJudicial;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:notifJudicial' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'inventarioBienes') {
          response = msg.inventarioBienes;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:inventarioBienes' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'retirarBienes') {
          response = msg.retirarBienes;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:retirarBienes' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'costoAbogado') {
          response = msg.costoAbogado;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:costoAbogado' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursalSantiago') {
          response = msg.sucursalSantiago;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:sucursalSantiago' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sucursalProvidencia') {
          response = msg.sucursalProvidencia;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:sucursalProvidencia' + ',Context:' + ctx.getContext() + ',Destination:MT');
        }
        break;
      default:
        if (payload === 'iniciar') {
          response = msg.greetings(name);
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:iniciar' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'saldo') {
          response = msg.balance;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:balance' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'paquetes') {
          response = msg.packs;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:packs' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'si') {
          response = msg.creditOffer;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:creditOffer' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'sos') {
          response = msg.sosOffer;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:sosOffer' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'pqt') {
          response = msg.pqtOffer;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:pqtOffer' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === '50mb') {
          response = msg.pqtPack(payload, 1.00, "semana");
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:pqtPack50mb' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === '150mb') {
          response = msg.pqtPack(payload, 2.50, "mes");
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Button,Content:pqtPack150mb' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === '50mbok' || payload === '150mbok') {
          response = { "text": "Tu paquete será provisionado en los próximos minutos" }
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:provisioningPend' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'no') {
          response = { "text": "OK, no olvides recargar para seguir comunicado!" }
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:cancel' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === '1') {
          response = { "text": "Se ha abonado $1 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,1) serán descontados de tu próxima recarga." }
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:provisioning1' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === '2') {
          response = { "text": "Se ha abonado $2 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,2) serán descontados de tu próxima recarga." }
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:provisioning2' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === '3') {
          response = { "text": "Se ha abonado $3 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,3) serán descontados de tu próxima recarga." }
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Text,Content:provisioning3' + ',Context:' + ctx.getContext() + ',Destination:MT');
        } else if (payload === 'equipos') {
          response = msg.device;
          console.log('PSID:' + sender_psid + ',Name:' + name + ',Type:Carrousel,Content:device' + ',Context:' + ctx.getContext() + ',Destination:MT');
        }
  }
  console.log("OUTPUT:\n" + util.inspect(response, false, null));
  api.callSendAPI(sender_psid, response);
}

/**
 * Method that process the message received as a command
 *
 * @param sender_psid   PSID of the user that sends the messagen
 * @param text          command and its arguments
 **/
function handleCommand(sender_psid, text) {
  let command = text.toLowerCase().split(" ");
  let response;
  if (command[0] === "/context") {
    if ((command[1] === '?') || (command[1] === 'help') || (command[1] == null)) {
      response = { "text": "Los contextos disponibles para el bot son:\n\n" + 
        "1. Telco: /context telco\n2. Bicicletas: /context bike\n3. Abogado: /context lawyer\n" +
        "4. Tienda: /context shop\n5. Casino: /context casino"};
    }
    else {
      if (ctx.getContext() === 'casino') {
        decache('../templates/msg_' + ctx.getContext() + "_" + ctx.getLang());
      } else {
        decache('../templates/msg_' + ctx.getContext());
      }
      ctx.setContext(command[1]);
      if (ctx.getContext() === 'casino') {
        msg = require('../templates/msg_' + ctx.getContext() + "_" + ctx.getLang());
      } else {
        msg = require('../templates/msg_' + ctx.getContext());
      }
      response = { "text": "Contexto de bot cambiado a " + ctx.getContext()}
      console.log('PSID:' + sender_psid + ',Name:S/I,Type:Command,Content:context' + ',Context:' + ctx.getContext() + ',Destination:MT');
    }
  }
  else {
    if ((command[0] === "/lang") && (command[1] != null)) {
      if ((command[1] === '?') || (command[1] === 'help')) {
        response = { "text": "Los idiomas disponibles para el bot son:\n1. Español: /lang es\n2. Inglés: /lang en"};
      }
      else {
        if (ctx.getContext() === 'casino') {
          decache('../templates/msg_' + ctx.getContext() + "_" + ctx.getLang());
          ctx.setLang(command[1]);
          msg = require('../templates/msg_' + ctx.getContext() + "_" + ctx.getLang());
          response = { "text": "Idioma de bot cambiado a " + ctx.getLang()}
        }
        console.log('PSID:' + sender_psid + ',Name:S/I,Type:Command,Content:lang' + ',Context:' + ctx.getContext() + ',Destination:MT');
      }
    }
    else {
      response = { "text": "Comando sin cambios"}
      console.log('PSID:' + sender_psid + ',Name:S/I,Type:Command,Content:' + command[0] + ',Context:' + ctx.getContext() + ',Destination:MT');
    }
  }
  api.callSendAPI(sender_psid, response);
}

/**
 * Method definition. handlePostback used instead
 **/
function handleQuickReply(sender_psid, name, received_postback) {
 handlePostback(sender_psid, name, received_postback); 
}

module.exports = {
  handleMessage,
  handlePostback,
  handleCommand,
  handleQuickReply
};

