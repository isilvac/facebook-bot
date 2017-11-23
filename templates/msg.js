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
const ejecutivo = {
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
const equipos = {
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

module.exports = {
	greetings,
	ejecutivo,
	equipos
};