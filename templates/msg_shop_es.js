/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
  return { "text": "Hola " + name + ", Bienvenid@ a ANDESGEAR!" };
};

const menu = {
  "text": "¿en qué podemos ayudarte?",
  "quick_replies": [
  	{
  	  "content_type": "text",
  	  "title": "Ver Productos",
  	  "payload": "disponibilidad",
  	},
  	{
  	  "content_type": "text",
  	  "title": "Promociones",
  	  "payload": "promociones",
  	},
  	{
  	  "content_type": "text",
  	  "title": "Ver Tiendas",
  	  "payload": "sucursal"
  	},
  	{
  	  "content_type": "text",
  	  "title": "Eventos",
  	  "payload": "eventos"
  	},
  	{
  	  "content_type": "text",
  	  "title": "Suscribete",
  	  "payload": "contact"
  	}
  ]
};

const compra = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "Lo que buscas en nuestro sitio Web!",
      "buttons": [
        {
          "type": "web_url",
          "title": "Ir a Sitio",
          "url": "https://www.andesgear.cl/"
        }
      ]
    }
  }
};

const disponibilidad = {
  "text": "¿Para quien quieres ver productos?",
  "quick_replies": [
    {
      "content_type": "text",
      "title": "Hombre",
      "payload": "cathombre"
    },
    {
      "content_type": "text",
      "title": "Mujer",
      "payload": "catmujer"
    },
    {
      "content_type": "text",
      "title": "Niño",
      "payload": "catniño"
    }
  ]
};

const cathombre = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"Calzado",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/3/0/3010-00800_m3047_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=12078",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Chaquetas",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/n/f/nf0a2ve7_nyc_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=11942",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Vestuario",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/w/bw80950_a1440_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=11937",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Accesorios",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/a/8/a8600_31blk_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=12903",
	            "title":"Ver en la Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const catmujer = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "generic",
	    "elements": [
	      {
	        "title":"Calzado",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/3/0/3020-04320_m0799_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=12436",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Chaquetas",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/w/bw35090_a6818_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=11929",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Vestuario",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/1/0/1020-11240_m4531_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=11939",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Accesorios",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/y/by244071_b0844_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=12888",
	            "title":"Ver en la Web"
	          }
	        ]
	      },
	      {
	        "title":"Equipamiento",
	        "image_url":"https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/n/f/nf00cf7f_erf_1.jpg",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.andesgear.cl/hombre?cat=12896",
	            "title":"Ver en la Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const promociones = {
  "text": "¿Para quien quieres ver promociones?",
  "quick_replies": [
    {
      "content_type": "text",
      "title": "Hombre",
      "payload": "promohombre"
    },
    {
      "content_type": "text",
      "title": "Mujer",
      "payload": "promomujer"
    },
    {
      "content_type": "text",
      "title": "Niño",
      "payload": "promoniño"
    }
  ]
};

const promohombre = {
  "text": "Elige la categoría de productos a ver",
  "quick_replies": [
    {
      "content_type": "text",
      "title": "Vestuario",
      "payload": "promohombrevest"
    },
    {
      "content_type": "text",
      "title": "Chaquetas",
      "payload": "promohombrechaq"
    },
    {
      "content_type": "text",
      "title": "Calzado",
      "payload": "promohombrecalz"
    },
    {
      "content_type": "text",
      "title": "Accesorios",
      "payload": "promohombrecalz"
    },
    {
      "content_type": "text",
      "title": "Niños",
      "payload": "promoniño"
    }
  ]
};

const promohombrechaq = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "generic",
      "elements": [
        {
          "title": "MAMMUT",
          "subtitle":"Primera capa Hombre Runbold pro",
          "image_url": "https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/1/0/1041-07321_m0397_1.jpg",
		  "buttons": [
	      	{
	          "type": "web_url",
	          "title": "Ver producto",
	          "url": "https://www.andesgear.cl/primera-capa-hombre-runbold-pro-half-zip-1041-07321-m0397?color=2774"
	        }
	      ]
        },
        {
          "title": "OUTDOOR RESEARCH",
          "subtitle":"Camisa hombre Astroman",
          "image_url": "https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/y/by242850_b0045_1.jpg",
		  "buttons": [
	      {
	          "type": "web_url",
	          "title": "Ver producto",
	          "url": "https://www.andesgear.cl/camisa-hombre-astroman-by242850-b0045?color=14599"
	        }
	      ]
        },
        {
          "title": "OUTDOOR RESEARCH",
          "subtitle":"Poleron hombre Whirlwind hoody",
          "image_url": "https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/y/by244056_b0639_1.jpg",
		  "buttons": [
	      {
	          "type": "web_url",
	          "title": "Ver producto",
	          "url": "https://www.andesgear.cl/poleron-hombre-whirlwind-hoody-by244056-b0639?color=15088"
	        }
	      ]
        },
        {
          "title": "MAMMUT",
          "subtitle":"Polera hombre Indio 1/2 ZIP",
          "image_url": "https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/w/bw73480_a3870_1.jpg",
		  "buttons": [
	      {
	          "type": "web_url",
	          "title": "Ver producto",
	          "url": "https://www.andesgear.cl/polera-hombre-indio-1-2-zip-bw73480-a3870?color=14000"
	        }
	      ]
        },
        {
          "title": "MARMOT",
          "subtitle": "Polera hombre Windridge ML",
          "image_url": "https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/w/bw60410_a8606_1.jpg",
		  "buttons": [
	      {
	          "type": "web_url",
	          "title": "Ver producto",
	          "url": "https://www.andesgear.cl/polera-hombre-windridge-ml-bw60410-a8606?color=14373"
	        }
	      ]
        },
        {
          "title": "THE NORTH FACE",
          "subtitle": "Polera hombre Half Dome",
          "image_url": "https://static.andesgear.cl/pub/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/n/f/nf00ch2t_s5g_1.jpg",
		  "buttons": [
	      {
	          "type": "web_url",
	          "title": "Ver producto",
	          "url": "https://www.andesgear.cl/polera-hombre-half-dome-manga-corta-nf00ch2t-s5g?color=18201"
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
          "title": "Las Condes",
          "payload": "sucursalLasCondes",
        },
        {
          "type": "postback",
          "title": "La Reina",
          "payload": "sucursalLaReina",
        }
      ]
    }
  }
};

const sucursalLasCondes = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "generic",
      "elements": [
        {
          "title": "MALL SPORT",
          "subtitle": "Lunes a Domingo 10:00 a 21:00 hrs",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Av.+Las+Condes+13451,+Las+Condes,+Región+Metropolitana",
	        },
		    {
		      "type":"phone_number",
		      "title":"Llamar",
		      "payload":"+56224371505"
		    }
          ]
        },
        {
          "title": "EL BOSQUE",
          "subtitle": "Lunes a Viernes 10:00 a 20:00 hrs\nSabado 10:00 a 14:00 hrs",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Av.+Padre+Hurtado+Norte+1121,+Vitacura,+Región+Metropolitana",
	        },
		    {
		      "type":"phone_number",
		      "title":"Llamar",
		      "payload":"+56222457076"
	        }
          ]
        }
      ]
    }
  }
};

const sucursalLaReina = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "generic",
      "elements": [
        {
          "title": "PLAZA EGAÑA",
          "subtitle": "Lunes a Domingo 10:00 a 21:00 hrs",
          "buttons": [
	        {
	          "type": "web_url",
	          "title": "Dirección",
	          "url": "https://www.google.cl/maps/place/Av.+Larrain+5862,+La+Reina,+Región+Metropolitana",
	        },
		    {
		      "type":"phone_number",
		      "title":"Llamar",
		      "payload":"+56228306167"
	        }
          ]
        }
      ]
    }
  }
};

const eventos = {
	"attachment": {
	  "type": "template",
	  "payload":{
	    "template_type": "list",
	    "top_element_style": "compact",
	    "elements": [
	      {
	        "title": "VII Gearlabs: \"Expediciones y su preparación\"",
	        "image_url": "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-0/s370x247/23319462_10155376752426137_1369768983380109984_n.jpg?oh=a6f210345cf003a3d689cb9179c31791&oe=5B16660F",
	        "subtitle": "Martes 20 de Febrero, a las 20:00",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.facebook.com/events/730012860531260/",
	            "title":"Ver evento"
	          }
	        ]
	      },
	      {
	        "title":"Equipo de Randonée; Todo lo que necesitas saber sobre tu equipo.",
	        "image_url": "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-0/s370x247/21032443_10155182492131137_7983589553939550695_n.jpg?oh=f62ab2f6d58f02eda8ea9e93686f332f&oe=5B102B96",
	        "subtitle": "Martes 13 de Marzo, a las 20:00",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.facebook.com/events/2000188363548095/",
	            "title":"Ver evento"
	          }
	        ]
	      },
	      {
	        "title":"Escala Clásica en Grandes Paredes",
	        "image_url": "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-0/s370x247/21032443_10155182492131137_7983589553939550695_n.jpg?oh=f62ab2f6d58f02eda8ea9e93686f332f&oe=5B102B96",
	        "subtitle": "Sábado 7 de Abril, a las 20:00",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.facebook.com/events/1866396940301294/",
	            "title":"Ver evento"
	          }
	        ]
	      },
	      {
	        "title":"Mammut Roc'Fest Cerro Castillo",
	        "image_url": "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-0/s370x247/17190656_10154644063776137_3832493233171469279_n.jpg?oh=3922bda0782275e84086bedfd2af30ed&oe=5B2497FF",
	        "subtitle": "Jueves 31 de Mayo, a las 20:00",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"https://www.facebook.com/events/276367989461255/",
	            "title":"Ver evento"
	          }
	        ]
	      },
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
	compra,
	disponibilidad,
	cathombre,
	catmujer,
	promociones,
	promohombre,
	promohombrechaq,
	sucursal,
	sucursalLaReina,
	sucursalLasCondes,
	eventos
};