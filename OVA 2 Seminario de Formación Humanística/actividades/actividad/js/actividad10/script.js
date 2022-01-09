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
        $('.pregunta-cuestionario').height(highestBox + 3);
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
                texto: "Es la afirmación concreta que se pretende defender o refutar.",
                respuestas: [{
                    texto: "Párrafo ",
                    correcta: false
                }, {
                    texto: "Argumentar",
                    correcta: false
                }, {
                    texto: "Tesis",
                    correcta: true
                }, {
                    texto: "Objeto",
                    correcta: false
                }]
            }, {
                texto: "Los tipos de párrafo según su función",
                respuestas: [{
                    texto: "Deductivo, deductivo – inductivo e inductivo.",
                    correcta: false
                }, {
                    texto: "Introducción, argumentativo, desarrollo y conclusión.",
                    correcta: false
                }, {
                    texto: "Introducción, desarrollo, enlace y conclusión",
                    correcta: true
                }, {
                    texto: "Narrativo, contraste, argumentativo y descriptivo.",
                    correcta: false
                }]
            }, {
                texto: "Aquellos en los que la oración temática se encuentra ubicada al inicio",
                respuestas: [{
                    texto: "Deductivo",
                    correcta: true
                }, {
                    texto: "Inductivo",
                    correcta: false
                }, {
                    texto: "Según su función",
                    correcta: false
                }, {
                    texto: "Introductorio",
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
        if (puntaje >= 75) {
            $('.img_res').html('<img src="../img/img7/bien.png" style="max-width: 90%;">');
            $('.puntaje').text(Math.round(puntaje)+"%");
            $('.mensaje').text("¡Felicitaciones!");
            $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 22px;color: #8b6229;font-weight: bold;margin-top: -15px;width: 20%;">cerrar</button>');
            $('#exampleModal').modal('show');
        }else{
            $('.img_res').html('<img src="../img/img7/mal.png" style="max-width: 90%;">');
            $('.mensaje').text("¡Puedes hacerlo mejor!");
            $('.puntaje').text(Math.round(puntaje)+"%");
            $('.btns_modal').html('<button style="font-size: 20px;color: #8b6229;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
            $('#exampleModal').modal('show');
        }
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

function reiniciar() {
    location.reload();
}