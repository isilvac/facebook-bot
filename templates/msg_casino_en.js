/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
  return { "text": "Welcome " + name + "! Come and enjoy the amazing world of entertainment in SUN MONTICELLO!" };
};

const menu = {
  "attachment": {
    "type": "template",
    "payload":{
      "template_type": "button",
      "text": "How can we help you?",
      "buttons": [
        {
          "type": "postback",
          "title": "Events",
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
              "title": "Grand Arena Monticello",
              "image_url": "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/19429810_10155588950878338_1105297250528093067_n.jpg?oh=757c145122955524bcb171f67f1df447&oe=5AD9C9FB",
              "buttons": [
	            {
	              "type": "postback",
	              "title": "See Events",
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
	              "title": "See Events",
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
	        "title":"RAFFLES & CAMPAIGNS",
	        "image_url":"https://acs2.blob.core.windows.net/imgcatalogo/l/VA_1ae1517199b84b7c8dacf76147a388ec.jpg",
	        "subtitle":"Every day, Sun Monticello has spectacular raffles and promotions so that the experience of visiting us is always different and surprising.",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Go to L&P",
		        "payload": "promocion",
	          }
	        ]
	      },
	      {
	        "title":"TICKETS",
	        "image_url":"http://adm.1.cl/galeriasitios/Och/Och_13590_Lugar-5067-Fg36.jpg",
	        "subtitle":"Reserve your place now!",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "Buy tickets",
		        "payload": "entrada",
	          }
	        ]
	      },
	      {
	        "title":"JACKPOT",
	        "image_url":"https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/25508011_10156156343248338_98338924634700805_n.jpg?oh=07b2760b52243f37c5ddb4048eb4fd9d&oe=5AD9DDEA",
	        "subtitle":"Check out the Jackpot that is waiting for you",
	        "buttons": [
	          {
		        "type": "postback",
		        "title": "See Jackpot",
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
	      "text": "A moment of relaxation. CHeck our hotel services:",
	      "buttons": [
	        {
	          "type": "postback",
	          "title": "Rooms",
	          "payload": "habitaciones"
	        },
	        {
	          "type": "postback",
	          "title": "Services",
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
	        "subtitle":"Thursday, February 8th, at 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/creedence-clearwater-revisited/",
	            "title":"Go to event"
	          }
	        ]
	      },
	      {
	        "title":"ROSSA MANSION",
	        "image_url": "https://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2018/01/10/MansionRossa-820x500.jpg",
	        "subtitle":"Friday, February 9th, at 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/la-mansion-rossa/",
	            "title":"Go to event"
	          }
	        ]
	      },
	      {
	        "title":"VILMA PALMA & VAMPIROS",
	        "image_url": "http://www.estoy.cl/assets/uploads/files/07be3-musica_vilma_interior.jpg",
	        "subtitle":"Saturday, February 10th, at 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/vilma-palma/",
	            "title":"Go to event"
	          }
	        ]
	      },
	      {
	        "title":"BOXING NIGHT",
	        "image_url": "http://granarenamonticello.cl/wp-content/uploads/2017/07/banner_boxeo720x720.png",
	        "subtitle":"Saturday, February 17th, at 20:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/noche-de-boxeo/",
	            "title":"Go to event"
	          }
	        ]
	      }
	    ],
        "buttons": [
          {
            "title": "Next Events",
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
	        "subtitle":"Saturday, February 24th, at 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/jesse-joy/",
	            "title":"Go to event"
	          }
	        ]
	      },
	      {
	        "title":"JAMES BLUNT",
	        "image_url": "http://static.t13.cl/images/sizes/1200x675/1511387901-james-blunt-1.jpg",
	        "subtitle":"Thursday, March 1st, at 21:30",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/panorama/james-blunt/",
	            "title":"Go to event"
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
	        "title":"PLATINUM MONDAYS",
	        "image_url":"http://sunmonticello.cl/wp-content/uploads/2017/03/banner_platinum_720x720_CF.png",
	        "subtitle":"From Monday, December 11 through March 5, live at Sun Monticello the Platinum Mondays and participates in raffles of $ 3,000,000 in credits and $ 2,000,000 in cash.",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/casinos/lunes-platinum/",
	            "title":"Go to Web"
	          }
	        ]
	      },
	      {
	        "title":"MONEY FOR TABLES",
	        "image_url":"http://sunmonticello.cl/wp-content/uploads/2017/10/banner_web_720x720_CF-min.png",
	        "subtitle":"Sun Monticello awards the casino attendants, Grand Arena Monticello, Hotel, and Restaurants with \"Money For Tables\"",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/casinos/money-for-tables/",
	            "title":"Go to Web"
	          }
	        ]
	      },
	      {
	        "title":"SUMMER SUNDAY",
	        "image_url":"http://sunmonticello.cl/wp-content/uploads/2017/12/banner_summersunday_720x720_CF-min.png",
	        "subtitle":"During this summer, MVG members of all categories will be able to participate in the raffles of $ 2,000,000 we have to distribute in promotional credits.",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/casinos/summer-sunday/",
	            "title":"Go to Web"
	          }
	        ]
	      }
	    ]
	  }
	}
};

const servicio = {
  "text": "A moment of relaxation to enjoy. Check our services:",
  "quick_replies": [
    {
      "content_type": "text",
      "title": "Bar Lounge",
      "payload": "bar"
    },
    {
      "content_type": "text",
      "title": "Terrace Pool",
      "payload": "piscina"
    },
    {
      "content_type": "text",
      "title": "Gastronomy",
      "payload": "gastronomia"
    },
    {
      "content_type": "text",
      "title": "Room services",
      "payload": "roomServices"
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
	        "subtitle": "American, Burgers",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/restaurante/johnny-rockets/",
	            "title":"Go to Web"
	          }
	        ]
	      },
	      {
	        "title":"LUCKY 7",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/10/LUCKYLANDING.jpg",
	        "subtitle": "Bar, Burgers & Sandwichs",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/restaurante/lucky-7/",
	            "title":"Go to Web"
	          }
	        ]
	      },
	      {
	        "title":"EL PESCADOR",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/02/Monticello_Home_Banner243x252_Gastronomia_08-min.jpg",
	        "subtitle": "Peruvian cuisine",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/restaurante/el-pescador/",
	            "title":"Go to Web"
	          }
	        ]
	      },
	      {
	        "title":"RES DE ANGOSTURA",
	        "image_url": "http://sunmonticello.cl/wp-content/uploads/2017/02/Monticello_Home_Banner243x252_Gastronomia_07-min.jpg",
	        "subtitle": "Meat",
	        "buttons": [
	          {
	            "type":"web_url",
	            "url":"http://sunmonticello.cl/sunmonticello.cl/restaurante/res-de-angostura/",
	            "title":"Go to Web"
	          }
	        ]
	      }
	    ],
        "buttons": [
          {
            "title": "VIEW MORE",
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