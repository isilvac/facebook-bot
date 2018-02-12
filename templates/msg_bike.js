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
          "text": "Hola " + name + "! Bienvenid@ a Bicicletas SCOTT!\nQue quisieras ver?",
          "buttons": [
            {
              "type": "postback",
              "title": "Catálogo",
              "payload": "catalogo",
            },
            {
              "type": "postback",
              "title": "Tiendas",
              "payload": "sucursal",
            },
            {
              "type": "postback",
              "title": "Redes sociales",
              "payload": "redesSociales",
            }
          ]
        }
      }
  };
};

const contacto = {
	"attachment":{
	  "type":"template",
	  "payload":{
	    "template_type":"button",
	    "text":"Prefieres hablar con nuestra mesa central?",
	    "buttons":[
	      {
	        "type":"phone_number",
	        "title":"Mesa Central",
	        "payload":"+56227259317"
	      }
	    ]
	  }
	}
};

const catalogo = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"MONTAÑA",
	        "image_url":"http://www.scottchile.com/imagenes/bannermontana.jpg",
	        "subtitle":"Escapa a la montaña!",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ver Modelos",
		        "payload": "modelosMontana",
	          }
	        ]
	      },
	      {
	        "title":"CARRETERA",
	        "image_url":"http://www.scottchile.com/imagenes/bannercarretera.jpg",
	        "subtitle":"Vuela sobre el asfalto...",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ver Modelos",
		        "payload": "modelosCarretera",
	          }
	        ]
	      },
	      {
	        "title":"URBANAS",
	        "image_url":"http://www.scottchile.com/imagenes/bannercityurban.jpg",
	        "subtitle":"Muevete en la ciudad",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ver Modelos",
		        "payload": "modelosUrbano",
	          }
	        ]
	      },
	      {
	        "title":"MUJER",
	        "image_url":"http://www.scottchile.com/imagenes/bannermujer.jpg",
	        "subtitle":"Para ellas",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ver Modelos",
		        "payload": "modelosMujer",
	          }
	        ]
	      },
	      {
	        "title":"JUNIOR",
	        "image_url":"http://www.scottchile.com/imagenes/bannerjunior.jpg",
	        "subtitle":"Para nuestros niños",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Ver Modelos",
		        "payload": "modelosNinos",
	          }
	        ]
	      }
	    ]
	  }
	}
};

const modelosMontana = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"SCALE RC 900 SL",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265201_210191_png_overview_4.png",
	        "subtitle":"Cross Country",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-scale-rc-900-sl-m-null?article=265201007",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SCALE RC 900 WORLD CUP",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265202_210184_png_overview_8.png",
	        "subtitle":"Cross Country",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-scale-rc-900-world-cup-xl-null?article=265202009",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SCALE 915",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265205_209107_png_overview_4.png",
	        "subtitle":"Cross Country",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-scale-915-s-null?article=265205006",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SCALE 920",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265210_217313_png_overview_8.png",
	        "subtitle":"Cross Country",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-scale-920-eu-s-null?article=265210006",
	            "title":"Ver en la Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const modelosCarretera = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"PLASMA PREMIUM",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265326_210247_png_overview_4.png",
	        "subtitle":"Aero",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-plasma-premium-l57-null?article=265326027",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"PLASMA RC",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265327_210242_png_overview_4.png",
	        "subtitle":"Aero",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-plasma-rc-m54-null?article=265327022",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"FOIL PREMIUM DISC",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265330_210246_png_overview_4.png",
	        "subtitle":"Aero",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-foil-premium-disc-l56-null?article=265330023",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"FOIL RC",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265331_210245_png_overview_4.png",
	        "subtitle":"Aero",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-foil-rc-s52-null?article=265331021",
	            "title":"Ver en la Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const modelosUrbano = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"SILENCE EVO",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265451_208819_png_overview_4.png",
	        "subtitle":"City & Urban",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-silence-evo-l-null?article=265451008",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SILENCE 20 LADY",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265455_208823_png_overview_4.png",
	        "subtitle":"City & Urban",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-silence-20-lady-l-null?article=265455008",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"SILENCE 30 MEN",
	        "image_url":"https://dfp2hfrf3mn0u.cloudfront.net/265/265456_208825_png_overview_4.png",
	        "subtitle":"City & Urban",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.scott-sports.com/es/es/product/sco-bike-silence-30-men-l-null?article=265456008",
	            "title":"Ver en la Web"
	          }
	        ]
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
          "title": "Vitacura",
          "payload": "sucursalVitacura",
        }
      ]
    }
  }
};

const sucursalVitacura = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "generic",
      "elements": [
        {
          "title": "Scott Concept Shop",
          "subtitle": "Padre Hurtado 1090, Vitacura",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Av.+Padre+Hurtado+Norte+1090,+Vitacura,+Región+Metropolitana",
	        }
          ]
        },
        {
          "title": "Scott Padre Hurtado",
          "subtitle": "Padre Hurtado Norte 1121, Vitacura",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Av.+Padre+Hurtado+Norte+1121,+Vitacura,+Región+Metropolitana",
	        }
          ]
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
          "title": "MAQBike",
          "subtitle": "San Diego 852, Santiago",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/San+Diego+852,+Santiago,+Región+Metropolitana",
	        }
          ]
        }
      ]
    }
  }
};

const redesSociales = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Estamos en tus redes sociales más usadas. Síguenos, comenta!",
      "buttons": [
        {
          "type": "web_url",
          "title": "Facebook",
          "url": "https://www.facebook.com/scottchilecom/",
        },
        {
          "type": "web_url",
          "title": "Instagram",
          "url": "https://www.instagram.com/scottchileteam/",
        },
        {
          "type": "web_url",
          "title": "Twitter",
          "url": "https://twitter.com/scottsports?lang=es",
        }
      ],
    }
  }
};


module.exports = {
	greetings,
	contacto,
	catalogo,
	modelosMontana,
	modelosCarretera,
	modelosUrbano,
	sucursal,
	sucursalSantiago,
	sucursalVitacura,
	redesSociales
};