/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
    return { "text": "Hola " + name + ", bienvenido!" };
};

const menu = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "Estas son las opciones de informacion que tenemos para ti.",
            "buttons": [
                {
                    "type": "postback",
                    "title": "Tronaduras del día",
                    "payload": "tronadura"
                },
                {
                    "type": "postback",
                    "title": "Procedimientos de Emergencia",
                    "payload": "procedimiento",
                },
                {
                    "type": "postback",
                    "title": "Teléfonos",
                    "payload": "agent",
                }
            ]
        }
    }
};

const tronadura = {
    "text": "Hoy tenemos las siguientes tronaduras\n\n14:30 horas.Tronadura INF05-3685/162 (396 k ton)\n17:30 horas.Tronaduras INF7A 3400/269 (191 kton)\n\n¿Deseas ver el mapa?",
    "quick_replies": [
        {
            "content_type": "text",
            "title": "Si",
            "payload": "mapa",
        },
        {
            "content_type": "text",
            "title": "No",
            "payload": "back2menu",
        }
    ]
};

const procedimiento = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "El detalle de los procedimientos está en los siguientes archivos",
            "buttons": [
                {
                    "type": "web_url",
                    "url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/procedimientoEmergencia.pdf",
                    "title": "Emergencia"
                },
                {
                    "type": "web_url",
                    "url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/procedimientoTormenta.pdf",
                    "title": "Tormenta eléctrica"
                },
                {
                    "type": "web_url",
                    "url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/procedimientoConduccion.pdf",
                    "title": "Conduccion"
                }
            ]
        }
    }
};

const agent = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "Que tipo de teléfono buscas",
            "buttons": [
                {
                    "type": "postback",
                    "title": "Jefe Operacion",
                    "payload": "jefeOperacion"
                },
                {
                    "type": "postback",
                    "title": "Delegado Seguridad",
                    "payload": "delegadoSeguridad"
                },
                {
                    "type": "postback",
                    "title": "Superintendente",
                    "payload": "superintendente"
                },
                {
                    "type": "postback",
                    "title": "Equipo DW",
                    "payload": "dw"
                }
            ]
        }
    }
};

const superintendente = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "Superintendente",
            "buttons": [
                {
                    "type": "phone_number",
                    "title": "Danilo Catalan",
                    "payload": "+56985951842"
                }
            ]
        }
    }
};

const mapa = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "generic",
            "elements": [
                {
                    "title": "Tronadura 14:30",
                    "image_url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/PLANO%20DE%20EVACUACION%2002-05-2018%20INF05.png",
                    "subtitle": "INF05-3685/162 (396 k ton)",
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/PLANO%20DE%20EVACUACION%2002-05-2018%20INF05.png",
                            "title": "Ver mapa"
                        }
                    ]
                },
                {
                    "title": "Tronadura 17:30",
                    "image_url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/PLANO%20DE%20EVACUACION%2002-05-2018%20INF05.png",
                    "subtitle": "INF7A 3400/269 (191 kton)",
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://dewatering:De@Wet@4Set@appl.anglochile.cl/dewatering/App/01_seguridad/PLANO%20DE%20EVACUACION%2002-05-2018%20INF05.png",
                            "title": "Ver mapa"
                        }
                    ]
                }
            ]
        }
    }
};

const back2menu = { "text": "Para volver al menu, envia \"menu\"" };

function greetings2(name) {
    return {
        "attachment": {
            "type": "image",
            "payload": {
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
    tronadura,
    procedimiento,
    agent,
    superintendente,
    mapa,
    back2menu
};