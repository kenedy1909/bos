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
                texto: "¿Cuales son las unidades físicas fundamentales? ",
                respuestas: [{
                    texto: "Velocidad, tiempo y masa.",
                    correcta: false
                }, {
                    texto: "Longitud, masa y tiempo",
                    correcta: true
                }, {
                    texto: "“Longitud, fuerza y tiempo",
                    correcta: false
                },{
                    texto: "Todas las anteriores",
                    correcta: false
                }]
            }, {
                texto: "¿Cómo se representa la masa en el Sistema Internacional?",
                respuestas: [{
                    texto: "KG",
                    correcta: false
                }, {
                    texto: "Kg",
                    correcta: true
                }, {
                    texto: "k",
                    correcta: false
                },{
                    texto: "kgm",
                    correcta: false
                }]
            }, {
                texto: "De las siguientes magnitudes, ¿Cuál es una magnitud derivada?",
                respuestas: [{
                    texto: "Área.",
                    correcta: true
                }, {
                    texto: "Tiempo.",
                    correcta: false
                }, {
                    texto: "Masa",
                    correcta: false
                },{
                    texto: "Ninguna de las anteriores",
                    correcta: false
                }]
            }, {
                texto: "¿Cuál es la unidad de longitud en el sistema Cegesimal?",
                respuestas: [{
                    texto: "Metro.",
                    correcta: false
                }, {
                    texto: "Kilometro.",
                    correcta: false
                }, {
                    texto: "Centímetro",
                    correcta: true
                },{
                    texto: "Milímetro",
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
        location.reload();
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
