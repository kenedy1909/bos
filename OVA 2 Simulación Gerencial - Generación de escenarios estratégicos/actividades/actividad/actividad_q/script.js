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
                texto: "El objetivo del análisis externo es…",
                respuestas: [{
                    texto: "Identificar la cantidad de recursos con los cuales se cuenta una empresa.",
                    correcta: false
                }, {
                    texto: "Identificar las oportunidades y amenazas estratégicas en el ambiente operativo de la organización.",
                    correcta: true
                }, {
                    texto: "Desarrollo del plan estratégico para el mejoramiento de los procesos en una empresa.",
                    correcta: false
                }]
            }, {
                texto: "La función principal del análisis del entorno empresarial consiste en…",
                respuestas: [{
                    texto: "Determinar objetivos estratégicos claros.",
                    correcta: false
                }, {
                    texto: "Resumir la información que permita tener un panorama claro de lo que se busca ",
                    correcta: false
                }, {
                    texto: "Aprovechar al máximo las oportunidades y controlar o mitigar las amenazas.",
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
        // if (puntaje == 100) {
        //     exito = true;
        //     mensaje = "¡Felicitaciones!"
        // }
        if (puntaje == 100) {
            exito = true;
            mensaje = "¡Felicitaciones!"
            $("#img-circulo").attr("src","../../../assets/img/img_template/bien.png");  
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
