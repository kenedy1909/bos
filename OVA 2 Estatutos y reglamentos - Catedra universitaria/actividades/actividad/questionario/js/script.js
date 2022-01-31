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
                texto: "¿Qué es la ética?",
                respuestas: [{
                    texto: "Nociones del bien o del mal.",
                    correcta: false
                }, {
                    texto: "Estudia el comportamiento humano.",
                    correcta: true
                }, {
                    texto: "Costumbres y convicciones.",
                    correcta: false
                }, {
                    texto: "Las creencias que tiene el ser humano.",
                    correcta: false
                }]
            }, {
                texto: "¿Qué es la moral?",
                respuestas: [{
                    texto: "Nociones del bien o del mal.",
                    correcta: true
                }, {
                    texto: "Estudia el comportamiento humano.",
                    correcta: false
                }, {
                    texto: "Normas de acciones dentro de la humanidad.",
                    correcta: false
                }, {
                    texto: "Las creencias que tiene el ser humano.",
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
        if (puntaje >= 90) {
            $('.img_res').html('<img src="img/bien.png" style="max-width: 90%;margin-top: 5%;">');
            $('.puntaje').text("100%");
            $('.mensaje').text("¡Felicitaciones!");
            $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -25px;" onclick="otraves()">cerrar</button>');
        } else {
            $('.img_res').html('<img src="img/mal.png" style="max-width: 80%;margin-top: 5%;">');
            $('.mensaje').text("¡Puedes hacerlo mejor!");
            $('.puntaje').text(Math.round(puntaje) + "%");
            $('.btns_modal').html('<button style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -25px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="otraves()">Volver a intentar</button>');
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