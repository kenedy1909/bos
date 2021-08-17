/*js de la Lección*/
$(document).on('ready', inicioRecurso);
var num_aleatorio_1;
var num_aleatorio_2;
var num_aleatorio_3;
var num_aleatorio_4;
var num_aleatorio_5;
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
                num_aleatorio_1 = array[0]['texto'][0];
                num_aleatorio_2 = array[1]['texto'][0];
                num_aleatorio_3 = array[2]['texto'][0];
                num_aleatorio_4 = array[3]['texto'][0];
                num_aleatorio_5 = array[4]['texto'][0];
            }

            return array;
        },
        getPreguntas = function() {
            return shuffleArray([{
                texto: "1. En la figura, una vara graduada (𝑩 ̅ 𝑪) proyecta una sombra (𝑨 ̅ 𝑪) de 4 pies y la sombra (𝑨 ̅ 𝑻) del edificio mide 50 pies de largo. Encuentra la altura RT del edificio.",
                respuestas: [{
                    texto: "37 pies",
                    correcta: false
                }, {
                    texto: "35 pies",
                    correcta: false
                }, {
                    texto: "37,5 pies",
                    correcta: true
                }, {
                    texto: "32 pies",
                    correcta: false
                }]
            }, {
                texto: "2. De las siguientes figuras, responda verdadero o falso si los triángulos son semejantes",
                respuestas: [{
                    texto: "Falso",
                    correcta: false
                }, {
                    texto: "Verdadero",
                    correcta: true
                }]
            }, {
                texto: "3. De las siguientes figuras, responda verdadero o falso si los triángulos son semejantes",
                respuestas: [{
                    texto: "Falso",
                    correcta: false
                }, {
                    texto: "Verdadero",
                    correcta: true
                }]
            }, {
                texto: "4. De las siguientes figuras, responda verdadero o falso si los triángulos son semejantes",
                respuestas: [{
                    texto: "Falso",
                    correcta: true
                }, {
                    texto: "Verdadero",
                    correcta: false
                }]
            }, {
                texto: "5. De las siguientes figuras, responda verdadero o falso si los triángulos son semejantes",
                respuestas: [{
                    texto: "Falso",
                    correcta: true
                }, {
                    texto: "Verdadero",
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
        var mensaje = "Inténtalo nuevamente."
        if (puntaje == 100) {
            exito = true;
            mensaje = "¡Felicitaciones!"
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
