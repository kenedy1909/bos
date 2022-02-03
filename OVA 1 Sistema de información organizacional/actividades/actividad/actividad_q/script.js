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
        $('.pregunta-cuestionario').height(highestBox + 2);
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
                texto: "Para Carmen de Pablos Heredero un sistema de información es:",
                respuestas: [{
                    texto: "“Es un conjunto de recursos técnicos, humanos, y económicos, interrelacionados dinámicamente, y organizados en torno al objetivo de satisfacer las necesidades de información de una organización para la gestión y correcta toma de decisiones”.",
                    correcta: true
                }, {
                    texto: "«El conjunto formal de procesos que operando sobre una colección de datos estructurada de acuerdo con las necesidades de una empresa, recopila, elabora y distribuye la información”",
                    correcta: false
                }, {
                    texto: "“para las actividades de dirección y control correspondientes, apoyando, al menos en parte, los procesos de toma de decisiones necesarios para desempeñar las funciones de negocio de la empresa de acuerdo con su estrategia»",
                    correcta: false
                }]
            }, {
                texto: "Para Andreu, Ricart y Valor un sistema de información es:",
                respuestas: [{
                    texto: "“Es un conjunto de recursos técnicos, humanos, y económicos, interrelacionados dinámicamente, y organizados en torno al objetivo de satisfacer las necesidades de información de una organización para la gestión y correcta toma de decisiones”.",
                    correcta: false
                }, {
                    texto: "«El conjunto formal de procesos que operando sobre una colección de datos estructurada de acuerdo con las necesidades de una empresa, recopila, elabora y distribuye la información…”",
                    correcta: true
                }, {
                    texto: "Los sistemas de información tienen múltiples propósitos dentro de las organizaciones, pero sin duda lo más importante es facilitar la toma de decisiones de una manera eficiente, confiable y oportuna, además aportan soluciones a corto, mediano y a largo plazo",
                    correcta: false
                }]
            }, {
                texto: "Los sistemas de información tienen múltiples propósitos dentro de las organizaciones, pero sin duda lo más importante es",
                respuestas: [{
                    texto: "Otorgar permisos a terceros para revisar si la información de la organización es válida y precisa",
                    correcta: false
                }, {
                    texto: "Facilitar la toma de decisiones de una manera eficiente, confiable y oportuna, además aportan soluciones a corto, mediano y a largo plazo.",
                    correcta: true
                }, {
                    texto: "Generar mayor oportunidad de empleo y oportuna respuestas en los canales de la organización",
                    correcta: false
                }]
            }]);
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
        var mensaje = "Inténtelo nuevamente."
        // if (puntaje == 100) {
        //     exito = true;
        //     mensaje = "¡Felicitaciones!"
        // }
        if (puntaje == 100) {
            exito = true;
            mensaje = "¡Felicitaciones!"
            $("#img-circulo").attr("src","../../../assets/img/img_ova/bien.png");
            
            $(".card .user img").css( "background-color", "transparent" );
        }
        if (puntaje < 100) {
            $("#img-circulo").attr("src","../../../assets/img/img_template/mal.png");  
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
