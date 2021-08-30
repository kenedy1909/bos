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
                texto: "¿Cuáles relaciones de contención ⊂  (“ser subconjunto de”) se cumplen entre ellos?",
                respuestas: [{
                    texto: "𝑬⊂𝑭",
                    correcta: false
                }, {
                    texto: "𝑭⊂𝑪",
                    correcta: false
                }, {
                    texto: "𝑮⊂𝑫",
                    correcta: false
                }, {
                    texto: "𝑭⊂𝑮",
                    correcta: false
                }, {
                    texto: "𝑩⊂𝑨",
                    correcta: true
                }, {
                    texto: "𝑪⊂𝑨",
                    correcta: true
                }, {
                    texto: "𝑬⊂𝑨",
                    correcta: true
                }, {
                    texto: "𝑭⊂𝑨",
                    correcta: true
                }, {
                    texto: "𝑮⊂𝑨",
                    correcta: true
                }, {
                    texto: "𝑭⊂𝑫",
                    correcta: true
                }, {
                    texto: "𝑫⊂𝑨",
                    correcta: true
                }, {
                    texto: "𝑩⊂𝑪",
                    correcta: false
                }]
            }, {
                texto: "¿Cuáles conjuntos No tienen elementos en común?",
                respuestas: [{
                    texto: "El 𝑪 y el F",
                    correcta: false
                }, {
                    texto: "El 𝑨 y el D",
                    correcta: false
                }, {
                    texto: "El 𝑫 y el 𝑬",
                    correcta: true
                }, {
                    texto: "el 𝑬 y el 𝑭",
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
        /*var puntaje = 9;*/
        $scope.validado = true;

        var modalID = "#calificacionModal";
        /*alert(i);*/
        puntaje = (puntaje / $scope.preguntas.length) * 100;

        puntaje = puntaje.toFixed(0);
        var exito = false;
        var mensaje = "Inténtalo nuevamente."
        if (puntaje == 100) {
            exito = true;
            mensaje = "¡Felicitaciones!"
        }

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
