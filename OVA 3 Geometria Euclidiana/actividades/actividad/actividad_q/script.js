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
                texto: "El punto en que se cortan las tres bisectrices se llama:",
                respuestas: [{
                    texto: "Incentro",
                    correcta: false
                }, {
                    texto: "Circuncentro",
                    correcta: false
                }, {
                    texto: "Ortocentro",
                    correcta: false
                }, {
                    texto: "Baricentro",
                    correcta: true
                }]
            }, {
                texto: "Las bisectrices interiores son:",
                respuestas: [{
                    texto: "Las que unen el punto medio de cada lado con el vértice opuesto.",
                    correcta: false
                }, {
                    texto: "Las que corresponden a los ángulos interiores.",
                    correcta: true
                }, {
                    texto: "Las perpendiculares a cada lado en su punto medio.",
                    correcta: false
                }, {
                    texto: "Las que corresponden a los ángulos exteriores.",
                    correcta: false
                }]
            }, {
                texto: "Circuncentro se refiere a: “Punto de corte de las mediatrices”.",
                respuestas: [{
                    texto: "Falso",
                    correcta: false
                }, {
                    texto: "Verdadero",
                    correcta: true
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
