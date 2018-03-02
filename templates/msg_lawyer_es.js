/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
  return { "text": "Hola " + name + "!" };
};

const menu = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "En Defensa Deudores hacemos valer tus derechos. Te orientamos y defendemos. Cuando no sabes qué hacer, dónde acudir, o qué plazos existen, estamos contigo para brindarte la mejor asesoría.",
      "buttons": [
        {
          "type": "postback",
          "title": "Preguntas Frecuentes",
          "payload": "faq"
        },
        {
          "type": "postback",
          "title": "Consulta gratuita",
          "payload": "consulta",
        },
        {
          "type": "postback",
          "title": "Quiero me llamen",
          "payload": "llamada",
        }
      ]
    }
  }
};

const faq = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Selecciona el tema de tu interés",
      "buttons": [
        {
          "type": "postback",
          "title": "Juicios de cobranza",
          "payload": "cobranza"
        },
        {
          "type": "postback",
          "title": "Embargos & tercerías",
          "payload": "embargo"
        },
        {
          "type": "postback",
          "title": "Ley de Quiebra",
          "payload": "quiebra"
        }
      ]
    }
  }
};

const consulta = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Para acceder al servicio de consulta gratuita ingresa tus datos y te responderemos",
      "buttons": [
        {
            "type":"web_url",
            "url":"http://www.defensadeudores.cl/contacto",
            "title":"Ingresar datos"
        }
      ]
    }
  }
};

const llamada = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Déjanos tus datos y te contactaremos",
      "buttons": [
        {
            "type":"web_url",
            "url":"http://www.defensadeudores.cl/contacto",
            "title":"Contacto"
        }
      ]
    }
  }
};

const cobranza = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "list",
	    "top_element_style": "compact",
	    "elements": [
	      {
	        "title": "¿Qué ocurre con los llamados o cartas enviadas a mi casa amenazando con embargos?",
	        "image_url": "http://www.insightintodiversity.com/wp-content/uploads/2016/07/law-578x275.jpg",
	        "buttons": [
	          {
	            "type": "postback",
	            "title": "Ver respuesta",
	            "payload": "cartaEmbargo"
	          }
	        ]
	      },
	      {
	        "title":"¿Qué debo hacer cuando llega una notificación judicial?",
	        "image_url": "http://www.insightintodiversity.com/wp-content/uploads/2016/07/law-578x275.jpg",
	        "buttons": [
	          {
	            "type":"postback",
	            "title":"Ver respuesta",
	            "payload":"notifJudicial"
	          }
	        ]
	      },
	      {
	        "title":"¿Qué pasa cuando un receptor judicial inventaría mis bienes?",
	        "image_url": "http://www.insightintodiversity.com/wp-content/uploads/2016/07/law-578x275.jpg",
	        "buttons": [
	          {
	            "type":"postback",
	            "title":"Ver respuesta",
	            "payload":"inventarioBienes"
	          }
	        ]
	      },
	      {
	        "title":"¿Qué hacer cuando el receptor judicial va a mi domicilio a retirar los bienes?",
	        "image_url": "http://www.insightintodiversity.com/wp-content/uploads/2016/07/law-578x275.jpg",
	        "buttons": [
	          {
	            "type":"postback",
	            "title":"Ver respuesta",
	            "payload":"retirarBienes"
	          }
	        ]
	      }
	    ],
        "buttons": [
          {
            "title": "Ver más",
            "type": "postback",
            "payload": "cobranza2"            
          }
        ]  
	  }
	}
};

const cobranza2 = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "list",
	    "top_element_style": "compact",
	    "elements": [
	      {
	        "title":"¿Cuánto dinero necesito para defender por medio de un abogado?",
	        "image_url": "http://www.insightintodiversity.com/wp-content/uploads/2016/07/law-578x275.jpg",
	        "buttons": [
	          {
	            "type":"postback",
	            "title":"Ver respuesta",
	            "payload":"costoAbogado"
	          }
	        ]
	      },
	      {
	        "title":"Más preguntas frecuentes",
	        "image_url": "http://www.insightintodiversity.com/wp-content/uploads/2016/07/law-578x275.jpg",
	        "buttons": [
	          {
	            "type":"postback",
	            "title":"Ver más",
	            "payload":"faq"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const cartaEmbargo = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "¿Qué ocurre con los llamados o cartas enviadas a mi casa amenazando con embargos?\n\nSi bien los llamados y las cartas de cobranza son un medio para ocasionar interés en pagar la deuda, es pertinente comunicarte con nosotros para evitar que luego llegue una notificación de algún tribunal.",
      "buttons": [
        {
          "type": "postback",
          "title": "Más preguntas de Cobranza",
          "payload": "cobranza"
        },
        {
          "type": "postback",
          "title": "Preguntas Frecuentes",
          "payload": "faq"
        }
      ]
    }
  }
};

const notifJudicial = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "¿Qué debo hacer cuando llega una notificación judicial?\n\nAl instante que llega la notificación, debes contactarte con nosotros para que puedas contestar la demanda antes de los cuatro siguientes días y así proteger tu patrimonio lo mejor posible.",
      "buttons": [
        {
          "type": "postback",
          "title": "Más preguntas de Cobranza",
          "payload": "cobranza"
        },
        {
          "type": "postback",
          "title": "Preguntas Frecuentes",
          "payload": "faq"
        }
      ]
    }
  }
};

const inventarioBienes = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "¿Qué pasa cuando un receptor judicial inventaría mis bienes?\n\nTambién denominado traba del embargo, en este momento no es posible hacer nada por lo bienes inventariados, debes interponer una tercería por medio de un abogado.",
      "buttons": [
        {
          "type": "postback",
          "title": "Más preguntas de Cobranza",
          "payload": "cobranza"
        },
        {
          "type": "postback",
          "title": "Preguntas Frecuentes",
          "payload": "faq"
        }
      ]
    }
  }
};

const retirarBienes = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "¿Qué hacer cuando el receptor judicial va a mi domicilio a retirar los bienes?\n\nÉsa es la situación más complicada, pero aún tienes tiempo de interponer una tercería por medio de uno de nuestros abogados.",
      "buttons": [
        {
          "type": "postback",
          "title": "Más preguntas de Cobranza",
          "payload": "cobranza"
        },
        {
          "type": "postback",
          "title": "Preguntas Frecuentes",
          "payload": "faq"
        }
      ]
    }
  }
};

const costoAbogado = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "¿Cuánto dinero necesito para defender por medio de un abogado?\n\nDepende de la causa, pero puedes solicitar una entrevista con nosotros que es gratuita para explicar bien tu problema y consultar tus dudas.",
      "buttons": [
        {
          "type": "postback",
          "title": "Más preguntas de Cobranza",
          "payload": "cobranza"
        },
        {
          "type": "postback",
          "title": "Preguntas Frecuentes",
          "payload": "faq"
        }
      ]
    }
  }
};

const sucursal = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Elige la comuna",
      "buttons": [
        {
          "type": "postback",
          "title": "Santiago",
          "payload": "sucursalSantiago",
        },
        {
          "type": "postback",
          "title": "Providencia",
          "payload": "sucursalProvidencia",
        },
        {
          "type": "postback",
          "title": "Regiones",
          "payload": "sucursalRegiones",
        }
      ]
    }
  }
};

const sucursalSantiago = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "generic",
      "elements": [
        {
          "title": "Casa Matriz",
          "subtitle": "Amunátegui 232, Piso 7, Edificio Hermanos Amunátegui",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Hermanos+Amunátegui+232,+Santiago,+Región+Metropolitana",
	        },
            {
              "type":"phone_number",
              "title":"Llamanos",
              "payload":"+56226593050"
            }
          ]
        }
      ]
    }
  }
};

const sucursalProvidencia = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "generic",
      "elements": [
        {
          "title": "Manuel Montt",
          "subtitle": "Av. Providencia 1208, oficina 707. Edificio Pamplona",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Av.+Providencia+1208,+Providencia,+Región+Metropolitana",
	        },
            {
              "type":"phone_number",
              "title":"Llamanos",
              "payload":"+56226593050"
            }
          ]
        }
      ]
    }
  }
};

const agent = {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Llamanos!",
        "buttons":[
          {
            "type":"phone_number",
            "title":"Defensa Deudores",
            "payload":"+56226593050"
          }
        ]
      }
    }
};

function greetings2(name) {
  return {
      "attachment": {
        "type": "image",
        "payload":{
          "template_type": "list",
          "text": "Hola " + name + ",\nEn Defensa Deudores hacemos valer tus derechos. Te orientamos y defendemos. Cuando no sabes qué hacer, dónde acudir, o qué plazos existen, estamos contigo para brindarte la mejor asesoría.",
          "buttons": [
            {
              "type": "postback",
              "title": "Preguntas Frecuentes",
              "payload": "faq"
            },
            {
              "type": "postback",
              "title": "Consulta gratuita",
              "payload": "consulta",
            },
            {
              "type": "postback",
              "title": "Quiero me llamen",
              "payload": "llamada",
            }
          ]
        }
      }
  };
};

module.exports = {
	greetings,
	menu,
  faq,
	consulta,
	llamada,
	cobranza,
	cobranza2,
	cartaEmbargo,
	notifJudicial,
	inventarioBienes,
	retirarBienes,
	costoAbogado,
	sucursal,
	sucursalSantiago,
	sucursalProvidencia,
	agent
};