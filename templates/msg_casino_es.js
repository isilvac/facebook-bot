/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
  return { "text": "Hola " + name + "! Ven a disfrutar del increible mundo de la entretención en SUN MONTICELLO!" };
};

const menu = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "¿En qué te podemos ayudar?",
      "buttons": [
        {
          "type": "postback",
          "title": "Panoramas",
          "payload": "panorama"
        },
        {
          "type": "postback",
          "title": "Casino",
          "payload": "casino"
        },
        {
          "type": "postback",
          "title": "Hotel",
          "payload": "hotel"
        }
      ]
    }
  }
};

const panorama = {
	"attachment":{
	  "type":"template",
	  "payload":{
	    "template_type":"generic",
	    "elements":[
            {
              "title": "Gran Arena Monticello",
              "image_url": "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/19429810_10155588950878338_1105297250528093067_n.jpg?oh=757c145122955524bcb171f67f1df447&oe=5AD9C9FB",
              "buttons": [
	            {
	              "type": "postback",
	              "title": "Ver Panoramas",
	              "payload": "panorama_gam",
	            }
              ]
            },
            {
              "title": "Suka Club",
              "image_url": "https://pbs.twimg.com/profile_images/903333539021824000/UMjsdAwb_400x400.jpg",
              "buttons": [
	            {
	              "type": "postback",
	              "title": "Ver Panoramas",
	              "payload": "panorama_sc",
	            }
              ]
            }
	    ]
	  }
	}
};

const casino = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"SORTEOS & PROMOCIONES",
	        "image_url":"https://acs2.blob.core.windows.net/imgcatalogo/l/VA_1ae1517199b84b7c8dacf76147a388ec.jpg",
	        "subtitle":"Todos los días Sun Monticello tiene espectaculares sorteos y promociones para que la experiencia de visitarnos sea siempre diferente y te sorprenda.",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ir a S&P",
		        "payload": "promocion",
	          }
	        ]
	      },
	      {
	        "title":"VENTA DE ENTRADAS",
	        "image_url":"http://adm.1.cl/galeriasitios/Och/Och_13590_Lugar-5067-Fg36.jpg",
	        "subtitle":"Reserva tu lugar desde ya!",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Comprar entradas",
		        "payload": "entrada",
	          }
	        ]
	      },
	      {
	        "title":"JACKPOT",
	        "image_url":"https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/25508011_10156156343248338_98338924634700805_n.jpg?oh=07b2760b52243f37c5ddb4048eb4fd9d&oe=5AD9DDEA",
	        "subtitle":"Revisa el pozo que te está esperando",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ver Jackpot",
		        "payload": "jackpot",
	          }
	        ]
	      }
	    ]
	  }
	}
};

const hotel = {
	"attachment": {
	  "type": "template",
	  "payload":{
	      "template_type": "button",
	      "text": "Un momento de relajo para disfrutar. Revisa nuestros servicios de hoteleria:",
	      "buttons": [
	        {
	          "type": "postback",
	          "title": "Habitaciones",
	          "payload": "habitaciones"
	        },
	        {
	          "type": "postback",
	          "title": "Servicios",
	          "payload": "servicio"
	        }
	      ]
	  }
	}
};

const panorama_gam = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "list",
	    "top_element_style": "compact",
	    "elements": [
	      {
	        "title": "CREEDENCE CLEARWATER REVISITED",
	        "image_url": "https://i1.wp.com/www.parlante.cl/wp-content/uploads/2017/12/creedence.jpg?fit=660%2C400",
	        "subtitle":"Jueves 8 de febrero, a las 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/creedence-clearwater-revisited/",
	            "title":"Ir a evento"
	          }
	        ]
	      },
	      {
	        "title":"LA MANSION ROSSA",
	        "image_url": "https://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2018/01/10/MansionRossa-820x500.jpg",
	        "subtitle":"Viernes 9 de febrero, a las 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/la-mansion-rossa/",
	            "title":"Ir a evento"
	          }
	        ]
	      },
	      {
	        "title":"VILMA PALMA Y VAMPIROS",
	        "image_url": "http://www.estoy.cl/assets/uploads/files/07be3-musica_vilma_interior.jpg",
	        "subtitle":"Sabado 10 de febrero, a las 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/vilma-palma/",
	            "title":"Ir a evento"
	          }
	        ]
	      },
	      {
	        "title":"NOCHE DE BOXEO",
	        "image_url": "http://granarenamonticello.cl/wp-content/uploads/2017/07/banner_boxeo720x720.png",
	        "subtitle":"Sabado 17 de febrero, a las 20:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/noche-de-boxeo/",
	            "title":"Ir a evento"
	          }
	        ]
	      }
	    ],
        "buttons": [
          {
            "title": "Ver próximos eventos",
            "type": "postback",
            "payload": "panorama_gam2"
          }
        ]  
	  }
	}
};

const panorama_gam2 = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "list",
	    "top_element_style": "compact",
	    "elements": [
	      {
	        "title": "JESSE & JOY",
	        "image_url": "https://labutaca.cl/wp-content/uploads/2017/12/0jessy.jpg",
	        "subtitle":"Sabado 24 de febrero, a las 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/jesse-joy/",
	            "title":"Ir a evento"
	          }
	        ]
	      },
	      {
	        "title":"JAMES BLUNT",
	        "image_url": "http://static.t13.cl/images/sizes/1200x675/1511387901-james-blunt-1.jpg",
	        "subtitle":"Jueves 1 de marzo, a las 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/james-blunt/",
	            "title":"Ir a evento"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const promocion = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"LUNES PLATINUM",
	        "image_url":"http://sunmonticello.cl/wp-content/uploads/2017/03/banner_platinum_720x720_CF.png",
	        "subtitle":"Desde el lunes 11 de diciembre hasta el 05 de marzo vive en Sun Monticello los Lunes Platinum y participa en los sorteos que tienen $3.000.000 a repartir en créditos promocionales y $2.000.000 en efectivo.",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/casinos/lunes-platinum/",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"MONEY FOR TABLES",
	        "image_url":"http://sunmonticello.cl/wp-content/uploads/2017/10/banner_web_720x720_CF-min.png",
	        "subtitle":"Sun Monticello premia a los asistentes al casino, Gran Arena Monticello, Hotel, Paseo y Restaurantes con \"Money For Tables\"",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/casinos/money-for-tables/",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SUMMER SUNDAY",
	        "image_url":"http://sunmonticello.cl/wp-content/uploads/2017/12/banner_summersunday_720x720_CF-min.png",
	        "subtitle":"Durante este verano los socios MVG de todas las categorías podrán participar por los sorteos de $2.000.000 que tenemos para repartir en créditos promocionales.",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/casinos/summer-sunday/",
	            "title":"Ver en la Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const servicio = {
  "text": "Un momento de relajo para disfrutar. Revisa nuestros servicios:",
  "quick_replies": [
    {
      "content_type": "text",
      "title": "Bar Lounge",
      "payload": "bar"
    },
    {
      "content_type": "text",
      "title": "Piscina terraza",
      "payload": "piscina"
    },
    {
      "content_type": "text",
      "title": "Gastronomia",
      "payload": "gastronomia"
    }
  ]
};

const gastronomia = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "list",
	    "top_element_style": "compact",
	    "elements": [
	      {
	        "title": "JOHNNY ROCKETS",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/10/JRLANDING.jpg",
	        "subtitle": "Comida americana, Hamburguesas",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/restaurante/johnny-rockets/",
	            "title":"Ir a"
	          }
	        ]
	      },
	      {
	        "title":"LUCKY 7",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/10/LUCKYLANDING.jpg",
	        "subtitle": "Bar, Hamburguesas & Sandwiches",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/restaurante/lucky-7/",
	            "title":"Ir a"
	          }
	        ]
	      },
	      {
	        "title":"EL PESCADOR",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/02/Monticello_Home_Banner243x252_Gastronomia_08-min.jpg",
	        "subtitle": "Comida peruana",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/restaurante/el-pescador/",
	            "title":"Ir a"
	          }
	        ]
	      },
	      {
	        "title":"RES DE ANGOSTURA",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/02/Monticello_Home_Banner243x252_Gastronomia_07-min.jpg",
	        "subtitle": "Carnes",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/sunmonticello.cl/restaurante/res-de-angostura/",
	            "title":"Ir a"
	          }
	        ]
	      }
	    ],
        "buttons": [
          {
            "title": "Ver más",
            "type": "postback",
            "payload": "gastronomia2"
          }
        ]  
	  }
	}
};

module.exports = {
	greetings,
	menu,
	panorama,
	casino,
	hotel,
	panorama_gam,
	panorama_gam2,
	promocion,
	servicio,
	gastronomia
};