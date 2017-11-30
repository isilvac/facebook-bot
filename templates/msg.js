/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
  return {
      "attachment": {
        "type": "template",
        "payload":{
          "template_type": "button",
          "text": "Hola " + name + "! Bienvenido a Clubb!\nDinos como podemos ayudarte",
          "buttons": [
            {
              "type": "postback",
              "title": "Consultar Saldo",
              "payload": "saldo",
            },
            {
              "type": "postback",
              "title": "Comprar Paquetes",
              "payload": "paquetes",
            },
            {
              "type": "postback",
              "title": "Comprar Equipos",
              "payload": "equipos",
            }
          ]
        }
      }
  };
};

/**
 * Returns a Rich Card to make a call
 * @TODO	convert phone as a parameter
 */
const agent = {
	"attachment":{
	  "type":"template",
	  "payload":{
	    "template_type":"button",
	    "text":"Prefieres hablar con un ejecutivo?",
	    "buttons":[
	      {
	        "type":"phone_number",
	        "title":"Llamar SAC",
	        "payload":"+56224241551"
	      }
	    ]
	  }
	}
};

/**
 * Returns a Rich Card to make a call
 * @TODO	convert phone as a parameter
 */
const device = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"APPLE",
	        "image_url":"https://cdn.gsmarena.com/imgroot/news/17/09/apple-iphone-x-iphone-8-event-finally/-728w3/gsmarena_003.jpg",
	        "subtitle":"iPhone X",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.telcel.com/personas/equipos/telefonos-y-smartphones/apple/iphone-x",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SAMSUNG",
	        "image_url":"https://cdn.gsmarena.com/imgroot/news/17/09/note8-daydream/-728x314/gsmarena_001.jpg",
	        "subtitle":"Galaxy Note 8",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.telcel.com/personas/equipos/telefonos-y-smartphones/samsung/sm-n950f",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"LG",
	        "image_url":"https://cdn2.gsmarena.com/vv/bigpic/lg-g6-new.jpg",
	        "subtitle":"G6 Plus",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.telcel.com/personas/equipos/telefonos-y-smartphones/lg/h870u",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"MOTOROLA",
	        "image_url":"https://cdn2.gsmarena.com/vv/bigpic/motorola-moto-c.jpg",
	        "subtitle":"Moto C",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.telcel.com/personas/equipos/telefonos-y-smartphones/motorola/xt1756",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"APPLE",
	        "image_url":"https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg",
	        "subtitle":"iPhone 8",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.telcel.com/personas/equipos/telefonos-y-smartphones/apple/iphone-8",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"HUAWEI",
	        "image_url":"https://cdn2.gsmarena.com/vv/bigpic/huawei-p10-plus-r1.jpg",
	        "subtitle":"P10 Plus",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.telcel.com/personas/equipos/telefonos-y-smartphones/huawei/vky-l09",
	            "title":"Ver en la Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

/**
 * Returns Account Balance and gives the options to get a credit
 */
const balance = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "button",
	    "text": "Tu saldo es de $0,22 (vigencia: 31/12/2017)\n¿deseas ver opciones de crédito?",
	    "buttons": [
	      {
	        "type": "postback",
	        "title": "SI",
	        "payload": "si",
	      },
	      {
	        "type": "postback",
	        "title": "NO",
	        "payload": "no",
	      }
	    ]
	  }
	}
};

/**
 * Returns Pack offer based on user Account Balance
 */
const packs = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "No cuentas con saldo suficiente para comprar paquetes, ¿deseas ver opciones de crédito?",
      "buttons": [
        {
          "type": "postback",
          "title": "SI",
          "payload": "si",
        },
        {
          "type": "postback",
          "title": "NO",
          "payload": "no",
        }
      ]
    }
  }
};

/**
 * Returns Credit Offering based on user details
 */
const creditOffer = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Elige la opción de servicio que deseas solicitar",
      "buttons": [
        {
          "type": "postback",
          "title": "Avance de Saldo",
          "payload": "sos",
        },
        {
          "type": "postback",
          "title": "Avance de Paquetes",
          "payload": "pqt",
        }
      ]
    }
  }
};

const sosOffer = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Estos son los Avances que tenemos para ti ",
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
        },
        {
          "type": "postback",
          "title": "Avance de $3",
          "payload": "3",
        }
      ],
    }
  }
};

const pqtOffer = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Estos son los Paquetes que tenemos para ti ",
      "buttons": [
        {
          "type": "postback",
          "title": "Paquete de 50 MB",
          "payload": "50mb",
        },
        {
          "type": "postback",
          "title": "Paquete de 150 MB",
          "payload": "150mb",
        }
      ],
    }
  }
};

/**
 * Returns the Pack information and ask for Acceptance
 *
 * @param   {String}          pqtid - Pack ID to be purchased
 * @param   {double}          cost - Pack cost
 * @param   {String}          validity - Validity of the pack
 * @returns {String}
 */
function pqtPack(pqtid, cost, validity) {
  return {
  	"attachment": {
	    "type": "template",
	    "payload":{
	      "template_type": "button",
	      "text": "Este paquete tiene una vigencia de 1 " + validity + " y su costo es de $" + cost + " + $0,1 de fee. Valores con IVA inc.",
	      "buttons": [
	        {
	          "type": "postback",
	          "title": "Acepto",
	          "payload": pqtid + "ok"
	        }
	      ]
	    }
    }
  };	
};

module.exports = {
	greetings,
	agent,
	device,
	balance,
	packs,
	creditOffer,
	sosOffer,
	pqtOffer,
	pqtPack
};