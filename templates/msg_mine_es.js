/**
 * Returns a generic greetings to the user
 *
 * @param   {String}          name - First name of the user
 * @returns {String}
 */
function greetings(name) {
    return { "text": "Hola " + name + ", bienvenido al Bot de Mina Los Bronces!" };
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
    "text": "Hoy tenemos las siguientes tronaduras\n\n14:30 horas. Tronadura INF05-3685/162 (396 k ton)\n17:30 horas. Tronaduras INF7A 3400/269 (191 kton)\n\n¿Deseas ver el mapa?",
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
                    "url": "https://drive.google.com/open?id=11nOIQ-yC21kRkFsndfmQshYZKQpIuyQh",
                    "title": "Emergencia"
                },
                {
                    "type": "web_url",
                    "url": "https://drive.google.com/open?id=1u9ecWBLwztkfR8RIThMjkHjfoJNYoFVm",
                    "title": "Tormenta eléctrica"
                },
                {
                    "type": "web_url",
                    "url": "https://drive.google.com/open?id=1bUCke0yhdl1dT6PE9v2V0u_QDkMmTF3m",
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
                    "image_url": "https://drive.google.com/file/d/1iahW63DtquQGrNSw58nPzvoB7E-6PNNh/view?usp=sharing",
                    "subtitle": "INF05-3685/162 (396 k ton)",
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://drive.google.com/file/d/1iahW63DtquQGrNSw58nPzvoB7E-6PNNh/view?usp=sharing",
                            "title": "Ver mapa"
                        }
                    ]
                },
                {
                    "title": "Tronadura 17:30",
                    "image_url": "https://drive.google.com/file/d/1iahW63DtquQGrNSw58nPzvoB7E-6PNNh/view?usp=sharing",
                    "subtitle": "INF7A 3400/269 (191 kton)",
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://drive.google.com/file/d/1iahW63DtquQGrNSw58nPzvoB7E-6PNNh/view?usp=sharing",
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