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
            }

            return array;
        },
        getPreguntas = function() {
            return shuffleArray([{
                texto: "1. De la siguiente figura, encuentra el resultado de  𝑚 𝐶𝐷 ̂  y selecciona la respuesta correcta",
                respuestas: [{
                    texto: "88°",
                    correcta: false
                }, {
                    texto: "61°",
                    correcta: true
                }, {
                    texto: "44°",
                    correcta: false
                }, {
                    texto: "27°",
                    correcta: false
                }]
            }, {
                texto: "2. En la siguiente figura, determine 𝑚∠𝐶",
                respuestas: [{
                    texto: "15°",
                    correcta: false
                }, {
                    texto: "15,3°",
                    correcta: false
                }, {
                    texto: "13,5°",
                    correcta: true
                }, {
                    texto: "12°",
                    correcta: false
                }]
            }, {
                texto: "3. Subconjunto (o tramo) de la circunferencia limitado por dos puntos de ella.",
                respuestas: [{
                    texto: "Cuerda",
                    correcta: false
                }, {
                    texto: "Arco",
                    correcta: true
                }, {
                    texto: "Diámetro",
                    correcta: false
                }, {
                    texto: "Corolario",
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
