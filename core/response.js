//import modules
const util = require('util');
//  decache  = require('decache');

//import internal modules
const api = require('./api'),
  userMap = require('./userMap');

var ctx = require('./context');

// Logger
require('console-stamp')(console, { pattern: 'yyyy-mm-dd HH:MM:ss'});

/**
 * Method that process "text" messages and based on its content, uses some of the predefined responses
 *
 * @param sender_psid       PSID of the user that sends the messagen
 * @param received_message  Message received
 **/
function handleMessage(sender_psid, received_message) {
  // Get user data and assign template
  let obj = userMap.get(sender_psid);
  let context = obj.context;
  let locale = obj.locale;
  let msg;

  if (ctx['msg_' + context + '_' + locale]) {
    msg = ctx['msg_' + context + '_' + locale];
  } else {
    msg = ctx['msg_' + context + '_es'];
  }

  console.log('PSID:' + sender_psid + ',Type:Text,Content:' + received_message.text + ',Context:' + context +',Destination:MO');

  let response;
  if (received_message.text) {
    let message = received_message.text.toLowerCase();
    console.log("Text: " + message + " context: " + context);

    // TELCO section
    if((message.indexOf("smartphone") != -1) || (message.indexOf("telefono") != -1) || (message.indexOf("equipo") != -1) || (message.indexOf("celular") != -1)){
      response = msg.device;
      console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:device' + ',Context:' + context + ',Destination:MT');
    } else if(((message.indexOf("saldo") != -1) || (message.indexOf("balance") != -1)) && (message.indexOf("avance") == -1)){
      response = msg.balance;
      console.log('PSID:' + sender_psid + ',Type:Buttons,Content:balance' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("avance") != -1) && (message.indexOf("credito") != -1) || (message.indexOf("avance") != -1) && (message.indexOf("saldo") != -1)){
      response = msg.sosOffer;
      console.log('PSID:' + sender_psid + ',Type:Buttons,Content:sosOffer' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("avance") != -1) && (message.indexOf("paquetes") != -1)){
      response = msg.pqtOffer;
      console.log('PSID:' + sender_psid + ',Type:Buttons,Content:pqtOffer' + ',Context:' + context + ',Destination:MT');

    // SHOP + LAWYER
    } else if((message.indexOf("oficina") != -1) || (message.indexOf("sucursal") != -1) || (message.indexOf("ubicacion") != -1) || (message.indexOf("ubicación") != -1)){
      response = msg.sucursal;
      console.log('PSID:' + sender_psid + ',Type:Button,Content:sucursal' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("@gmail.com") != -1) || (message.indexOf("@hotmail.com") != -1) || (message.indexOf("@tiaxa.net") != -1)){
      response = { "text": `Te estaremos notificando de novedades en tu correo`};
      console.log('PSID:' + sender_psid + ',Type:Text,Content:email' + ',Context:' + context + ',Destination:MT');
    

    // CASINO
    } else if((message.indexOf("gastronomia") != -1) || (message.indexOf("comida") != -1) || (message.indexOf("restaurant") != -1) || (message.indexOf("cena") != -1) || (message.indexOf("comer") != -1)){
      response = msg.gastronomia;
      console.log('PSID:' + sender_psid + ',Type:Button,Content:gastronomia' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("hotel") != -1) || (message.indexOf("alojamiento") != -1) || (message.indexOf("dormir") != -1) || (message.indexOf("habitacion") != -1)){
      response = msg.hotel;
      console.log('PSID:' + sender_psid + ',Type:Button,Content:hotel' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("casino") != -1) || (message.indexOf("jugar") != -1) || (message.indexOf("apuesta") != -1) || (message.indexOf("apostar") != -1) || (message.indexOf("juego") != -1)){
      response = msg.casino;
      console.log('PSID:' + sender_psid + ',Type:Button,Content:casino' + ',Context:' + context + ',Destination:MT');

    // GENERIC
    } else if((message.indexOf("hola") != -1) || (message.indexOf("hello") != -1) || (message.indexOf("holi") != -1) || (message.indexOf("iniciar") != -1) || (message.indexOf("menu") != -1)){
      response = msg.menu;
      console.log('PSID:' + sender_psid + ',Type:Buttons,Content:menu' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("chao") != -1) || (message.indexOf("adios") != -1) || (message.indexOf("hasta pronto") != -1) || (message.indexOf("hasta luego") != -1) || (message.indexOf("gracias") != -1)){
      response = { "text": "Adiós! Que tengas un buen día"};
      console.log('PSID:' + sender_psid + ',Type:Text,Content:bye' + ',Context:' + context + ',Destination:MT');
    } else if((message.indexOf("telefono") != -1) || (message.indexOf("teléfono") != -1) || (message.indexOf("hablar") != -1) || (message.indexOf("ejecutiv") != -1)){
      response = msg.agent;
      console.log('PSID:' + sender_psid + ',Type:Call,Content:agent' + ',Context:' + context + ',Destination:MT');
    } else {
      response = { "text": `No entendí tu mensaje, solo soy un bot demo :\( envía \"menu\" para ver las opciones`}
      console.log('PSID:' + sender_psid + ',Type:Text,Content:unknown' + ',Context:' + context + ',Destination:MT');
    }
    // } else if (received_message.attachments) {
    //   let attachment_url = received_message.attachments[0].payload.url;
    //   //TODO something
  } 
  api.callSendAPI(sender_psid, response);    
}

/**
 * Method that handles predefined responses (from buttons)
 *
 * @param sender_psid       PSID of the user that sends the messagen
 * @param received_postback Message received
 **/
function handlePostback(sender_psid, received_postback) {
  // Get user data and assign template
  let obj = userMap.get(sender_psid);
  let context = obj.context;
  let locale = obj.locale;
  let msg;

  if (ctx['msg_' + context + '_' + locale]) {
    msg = ctx['msg_' + context + '_' + locale];
  } else {
    msg = ctx['msg_' + context + '_es'];
  }

  console.log('PSID:' + sender_psid + ',Type:Postback,Content:' + received_postback.payload + ',Context:' + context +',Destination:MO');
  let response;
  let payload = received_postback.payload;
  console.log("Payload: " + payload + " context: " + context);
  switch (context) {
      case 'bike':
        if (payload === 'catalogo') {
          response = msg.catalogo;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:catalogo' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'redesSociales') {
          response = msg.redesSociales;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:redesSociales' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursal') {
          response = msg.sucursal;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:tiendas' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'modelosMontana') {
          response = msg.modelosMontana;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:modelosMontana' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'modelosCarretera') {
          response = msg.modelosCarretera;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:modelosCarretera' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'modelosUrbano') {
          response = msg.modelosUrbano;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:modelosUrbano' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursalSantiago') {
          response = msg.sucursalSantiago;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:tiendasSantiago' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursalVitacura') {
          response = msg.sucursalVitacura;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:tiendasVitacura' + ',Context:' + context + ',Destination:MT');
        }
        break;
      case 'casino':
        if (payload === 'panorama') {
          response = msg.panorama;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:panorama' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'casino') {
          response = msg.casino;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:casino' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'hotel') {
          response = msg.hotel;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:hotel' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'panorama_gam') {
          response = msg.panorama_gam;
          console.log('PSID:' + sender_psid + ',Type:List,Content:panorama_gam' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'panorama_gam2') {
          response = msg.panorama_gam2;
          console.log('PSID:' + sender_psid + ',Type:List,Content:panorama_gam2' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'promocion') {
          response = msg.promocion;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:promocion' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'servicio') {
          console.log("entro");
          response = msg.servicio;
          console.log('PSID:' + sender_psid + ',Type:QuickReply,Content:servicio' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'gastronomia') {
          response = msg.gastronomia;
          console.log('PSID:' + sender_psid + ',Type:List,Content:gastronomia' + ',Context:' + context + ',Destination:MT');
        }
        break;
      case 'shop':
        if (payload === 'compra') {
          response = msg.compra;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:compra' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'disponibilidad') {
          response = msg.disponibilidad;
          console.log('PSID:' + sender_psid + ',Type:QuickReply,Content:disponibilidad' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'cathombre') {
          response = msg.cathombre;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:cathombre' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'catmujer') {
          response = msg.catmujer;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:catmujer' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'promociones') {
          response = msg.promociones;
          console.log('PSID:' + sender_psid + ',Type:QuickReply,Content:promociones' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'promohombre') {
          response = msg.promohombre;
          console.log('PSID:' + sender_psid + ',Type:QuickReply,Content:promohombre' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'promohombrechaq') {
          response = msg.promohombrechaq;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:promohombrechaq' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursal') {
          response = msg.sucursal;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:tiendas' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursalLasCondes') {
          response = msg.sucursalLasCondes;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:tiendasLasCondes' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursalLaReina') {
          response = msg.sucursalLaReina;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:tiendasLaReina' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'eventos') {
          response = msg.eventos;
          console.log('PSID:' + sender_psid + ',Type:List,Content:eventos' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'contact') {
          response = { "text": 'Déjanos tu correo y te enviaremos las novedades apenas salgan!'}
          console.log('PSID:' + sender_psid + ',Type:Text,Content:contact' + ',Context:' + context + ',Destination:MT');
        }
        break;
      case 'lawyer':
        if (payload === 'faq') {
          response = msg.faq;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:faq' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'consulta') {
          response = msg.consulta;        
          console.log('PSID:' + sender_psid + ',Type:Button,Content:consulta' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'llamada') {
          response = msg.llamada;
          console.log('PSID:' + sender_psid + ',Type:Call,Content:llamada' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'cobranza') {
          response = msg.cobranza;
          console.log('PSID:' + sender_psid + ',Type:List,Content:cobranza' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'cobranza2') {
          response = msg.cobranza2;
          console.log('PSID:' + sender_psid + ',Type:List,Content:cobranza2' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'embargo') {
          response = msg.embargo;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:embargo' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'quiebra') {
          response = msg.quiebra;
          console.log('PSID:' + sender_psid + ',Type:List,Content:quiebra' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'cartaEmbargo') {
          response = msg.cartaEmbargo;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:cartaEmbargo' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'notifJudicial') {
          response = msg.notifJudicial;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:notifJudicial' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'inventarioBienes') {
          response = msg.inventarioBienes;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:inventarioBienes' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'retirarBienes') {
          response = msg.retirarBienes;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:retirarBienes' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'costoAbogado') {
          response = msg.costoAbogado;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:costoAbogado' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursalSantiago') {
          response = msg.sucursalSantiago;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:sucursalSantiago' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sucursalProvidencia') {
          response = msg.sucursalProvidencia;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:sucursalProvidencia' + ',Context:' + context + ',Destination:MT');
        }
        break;
      default:
        if (payload === 'iniciar') {
          response = msg.menu;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:iniciar' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'saldo') {
          response = msg.balance;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:balance' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'paquetes') {
          response = msg.packs;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:packs' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'si') {
          response = msg.creditOffer;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:creditOffer' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'sos') {
          response = msg.sosOffer;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:sosOffer' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'pqt') {
          response = msg.pqtOffer;
          console.log('PSID:' + sender_psid + ',Type:Button,Content:pqtOffer' + ',Context:' + context + ',Destination:MT');
        } else if (payload === '50mb') {
          response = msg.pqtPack(payload, 1.00, "semana");
          console.log('PSID:' + sender_psid + ',Type:Button,Content:pqtPack50mb' + ',Context:' + context + ',Destination:MT');
        } else if (payload === '150mb') {
          response = msg.pqtPack(payload, 2.50, "mes");
          console.log('PSID:' + sender_psid + ',Type:Button,Content:pqtPack150mb' + ',Context:' + context + ',Destination:MT');
        } else if (payload === '50mbok' || payload === '150mbok') {
          response = { "text": "Tu paquete será provisionado en los próximos minutos" }
          console.log('PSID:' + sender_psid + ',Type:Text,Content:provisioningPend' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'no') {
          response = { "text": "OK, no olvides recargar para seguir comunicado!" }
          console.log('PSID:' + sender_psid + ',Type:Text,Content:cancel' + ',Context:' + context + ',Destination:MT');
        } else if (payload === '1') {
          response = { "text": "Se ha abonado $1 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,1) serán descontados de tu próxima recarga." }
          console.log('PSID:' + sender_psid + ',Type:Text,Content:provisioning1' + ',Context:' + context + ',Destination:MT');
        } else if (payload === '2') {
          response = { "text": "Se ha abonado $2 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,2) serán descontados de tu próxima recarga." }
          console.log('PSID:' + sender_psid + ',Type:Text,Content:provisioning2' + ',Context:' + context + ',Destination:MT');
        } else if (payload === '3') {
          response = { "text": "Se ha abonado $3 a tu saldo.\nRecuerda que el monto abonado y su fee ($0,3) serán descontados de tu próxima recarga." }
          console.log('PSID:' + sender_psid + ',Type:Text,Content:provisioning3' + ',Context:' + context + ',Destination:MT');
        } else if (payload === 'equipos') {
          response = msg.device;
          console.log('PSID:' + sender_psid + ',Type:Carrousel,Content:device' + ',Context:' + context + ',Destination:MT');
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
  // Get user data and assign template
  let obj = userMap.get(sender_psid);
  let name = obj.first_name;
  let currentContext = obj.context;
  let currentLocale = obj.locale;
  let msg;

  let command = text.toLowerCase().split(" ");
  console.log('PSID:' + sender_psid + ',Type:Command,Content:' + command[0] + ',Context:' + currentContext + ',Destination:MO');
  let response;
  if (command[0] === "/context") {

    // helper
    if ((command[1] === '?') || (command[1] === 'help') || (command[1] == null)) {
      response = { "text": "Los contextos disponibles para el bot son:\n\n" + 
        "1. Telco: /context telco\n2. Bicicletas: /context bike\n3. Abogado: /context lawyer\n" +
        "4. Tienda: /context shop\n5. Casino: /context casino"};
    }
    else {
      userMap.setUserContext(sender_psid, command[1]);
      let msg;
      if (ctx['msg_' + command[1] + '_' + currentLocale]) {
        msg = ctx['msg_' + command[1] + '_' + currentLocale];
      } else {
        msg = ctx['msg_' + command[1] + '_es'];
      }
      response = msg.menu;
      api.callSendAPI(sender_psid, msg.greetings(name));
      setTimeout(function() {
        response = msg.menu;
      }, 1000);

      console.log('PSID:' + sender_psid + ',Type:Command,Content:context' + ',Context:' + command[1] + ',Destination:MT');
    }

  } else {
    if ((command[0] === "/lang") && (command[1] != null)) {
      if ((command[1] === '?') || (command[1] === 'help')) {
        response = { "text": "Los idiomas disponibles para el bot son:\n1. Español: /lang es\n2. Inglés: /lang en"};
      }
      else {
        userMap.setUserLocale(sender_psid, command[1]);
        response = { "text": "Lenguaje cambiado a " + command[1]};
        console.log('PSID:' + sender_psid + ',Type:Command,Content:lang' + ',Context:' + currentContext + ',Destination:MT');
      }
    } else {
      response = { "text": "Comando sin cambios"}
      console.log('PSID:' + sender_psid + ',Type:Command,Content:' + command[0] + ',Context:' + currentContext + ',Destination:MT');
    }
  }
  api.callSendAPI(sender_psid, response);
}

/**
 * Method definition. handlePostback used instead
 **/
function handleQuickReply(sender_psid, received_reply) {
  // Get user data and assign template
  let obj = userMap.get(sender_psid);
  let context = obj.context;
  console.log('PSID:' + sender_psid + ',Type:quick_reply,Content:' + received_reply.payload + ',Context:' + context +',Destination:MO');
  handlePostback(sender_psid, received_reply); 
}

module.exports = {
  handleMessage,
  handlePostback,
  handleCommand,
  handleQuickReply
};

