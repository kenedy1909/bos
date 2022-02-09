/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {

    function tamanoCuadros() {
        var highestBox = 0;
        $('.pregunta-cuestionario').each(function() {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        console.log(highestBox)
        $('.pregunta-cuestionario').height(highestBox + 5);
    }
    // tamanoCuadros()
}

angular.module("leccion3App", []).controller("actividad1Ctrl", function($scope, $log) {
    "use strict";
    var shuffleArray = function(array) {
            var m = array.length,
                t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        },
        getPreguntas = function() {
            return shuffleArray([{
                texto: "Los tipos de tiendas por internet son",
                respuestas: [{
                    texto: "Tienda propia en Facebook, Aliexpress y las paginas de los shoppingcenter",
                    correcta: false
                }, {
                    texto: "Marketplace, Wordpress y Mercado libre",
                    correcta: false
                }, {
                    texto: "Tiendas en redes sociales, marketplaces y tienda propia",
                    correcta: true
                }, {
                    texto: "Tiendas de pago online, facebook  y tienda prop",
                    correcta: false
                }]
            }, {
                texto: "¿ A qué tipo de tienda corresponde la siguiente descripción: son como un centro comercial, pero en internet, donde a través de una sola plataforma, con nombre propio e incluso con dominio propio?",
                respuestas: [{
                    texto: "Tienda en redes sociales",
                    correcta: false
                }, {
                    texto: "Tienda propia.",
                    correcta: false
                }, {
                    texto: "Facebook",
                    correcta: false
                }, {
                    texto: "MarketPlaces",
                    correcta: true
                }]
            }, {
                texto: "¿ Cual de las siguientes opciones es una desventaja de los MarketPlaces ?",
                respuestas: [{
                    texto: "No son autogestionables por el dueño de la tienda",
                    correcta: false
                }, {
                    texto: "Genera costos al tener que pagar por un sitio web propio",
                    correcta: false
                }, {
                    texto: "El flujo de clientes depende del número de seguidores de la tienda",
                    correcta: true
                }, {
                    texto: "El costo de mantenimiento y soporte son altos",
                    correcta: false
                }]
            }, {
                texto: "¿Cuál de las siguientes opciones NO es una ventaja de las tiendas propias?",
                respuestas: [{
                    texto: "Facilita la integración con otros servicios como el recaudo y el deliver",
                    correcta: false
                }, {
                    texto: "No presenta riesgo de hackeo o robo de la cuenta",
                    correcta: true
                }, {
                    texto: "Cuenta con url propia",
                    correcta: false
                }, {
                    texto: "Permite ser personalizada y adaptada de acuerdo a las condiciones y estructura del negocio",
                    correcta: false
                }]
            }, {
                texto: "¿ Cual de las siguientes opciones es una desventaja de las tiendas por redes sociales?",
                respuestas: [{
                    texto: "No son autogestionables",
                    correcta: false
                }, {
                    texto: "Tienen costo de mantenimiento y soporte",
                    correcta: false
                }, {
                    texto: "Se debe invertir de manera permanente en posicionamiento",
                    correcta: true
                }, {
                    texto: "No son ideales para emprendedores o empresarios jóven",
                    correcta: false
                }]
            }
            ]);
        };
    $scope.preguntas = getPreguntas();

    $scope.validado = false;
    $scope.seleccionar = function(index, respuesta) {
        $scope.preguntas[index].respuesta = respuesta;
    };
    $scope.calificar = function() {
        var puntaje = 0,
            pregunta = null,
            i = 0;
        for (i = 0; i < $scope.preguntas.length; i++) {
            pregunta = $scope.preguntas[i];
            puntaje += pregunta.respuesta && pregunta.respuesta.correcta ? 1 : 0;
        }
        $scope.validado = true;

        var modalID = "#calificacionModal";
        puntaje = (puntaje / $scope.preguntas.length) * 100;
        puntaje = puntaje.toFixed(0);
        var exito = false;
        var mensaje = "Inténtalo nuevamente."
        $("#img-circulo").attr("src","../../../assets/img/img_ova/mal-mal.png"); 
        if (puntaje == 100) {
            exito = true;
            mensaje = "¡Felicitaciones!"
            $("#img-circulo").attr("src","../../../assets/img/img_ova/bien-bien.png"); 
        }
        registrarActividad(puntaje);
        mostrarCalificacion(modalID, puntaje + '%', mensaje, exito, $scope.reset);
    };
    $scope.reset = function() {
        $scope.$apply(function() {
            var i = 0,
                pregunta = null;
            for (i = 0; i < $scope.preguntas.length; i++) {
                pregunta = $scope.preguntas[i];
                if (pregunta.respuesta) {
                    pregunta.respuesta.input = !pregunta.respuesta.correcta ? undefined : pregunta.respuesta.input;
                }
            }

        });
    };
});
