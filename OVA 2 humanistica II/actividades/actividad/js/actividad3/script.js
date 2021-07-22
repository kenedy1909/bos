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
                texto: "El texto corresponde a un caso que expresa un dilema moral por:",
                respuestas: [{
                    texto: "Tener diferencias políticas",
                    correcta: false
                }, {
                    texto: "Tener diferencias culturales",
                    correcta: false
                }, {
                    texto: "Ser víctima de violencia",
                    correcta: true
                }, {
                    texto: "Ser violento",
                    correcta: false
                }]
            }, {
                texto: "La intención del barbero al no atentar contra la vida del capitán fue:",
                respuestas: [{
                    texto: "Impartir justicia",
                    correcta: true
                }, {
                    texto: "Sentir paz",
                    correcta: false
                }, {
                    texto: "No ir a la cárcel",
                    correcta: false
                }, {
                    texto: "No ser juzgado",
                    correcta: false
                }]
            }, {
                texto: "Este tipo de textos traídos al contexto nacional es de:",
                respuestas: [{
                    texto: "Baja probabilidad de ocurrencia",
                    correcta: false
                }, {
                    texto: "Alta probabilidad de ocurrencia",
                    correcta: true
                }, {
                    texto: "Media probabilidad de ocurrencia",
                    correcta: false
                }]
            }, {
                texto: "En su criterio, la confrontación entre el capitán y el barbero era:",
                respuestas: [{
                    texto: "Necesaria",
                    correcta: true
                }, {
                    texto: "Innecesaria",
                    correcta: false
                }]
            }, {
                texto: "Este caso está en el marco de:",
                respuestas: [{
                    texto: "La ética aplicada",
                    correcta: true
                }, {
                    texto: "La ética dialéctica",
                    correcta: false
                }, {
                    texto: "La ética normativa",
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
