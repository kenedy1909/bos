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
                texto: "En la página 1 del texto, el autor plantea un problema en torno al concepto de necesidades. Este problema es:",
                respuestas: [{
                    texto: "No existe claridad acerca del concepto de necesidad. ",
                    correcta: false
                }, {
                    texto: "Existen diversas concepciones, alcances y formas de satisfacerlas.  ",
                    correcta: true
                }, {
                    texto: "No es posible satisfacer las necesidades de todas las personas.",
                    correcta: false
                }, {
                    texto: "El concepto está ligado a una sola concepción del desarrollo y de la vida humana.",
                    correcta: false
                }]
            }, {
                texto: "De la definición que el autor da sobre necesidad se puede afirmar que: ",
                respuestas: [{
                    texto: "Tiene una visión exclusivamente material e individualista de la necesidad.",
                    correcta: false
                }, {
                    texto: "Se orienta a la satisfacción personal de metas económicas e intelectuales del sujeto.",
                    correcta: false
                }, {
                    texto: "Obedece a una concepción estrictamente capitalista del concepto. ",
                    correcta: true
                }, {
                    texto: "Intenta superar la visión estrictamente capitalista del concepto.",
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
