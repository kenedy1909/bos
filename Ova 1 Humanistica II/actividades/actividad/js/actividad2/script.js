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
                texto: "La expresión “(∃𝑥) (𝑥∈𝑈) (𝑃𝑥)”\n"+"Quiere decir que:",
                respuestas: [{
                    texto: "Que existe por lo menos un 𝑥 de 𝑈 que satisface 𝑃𝑥 ",
                    correcta: true
                }, {
                    texto: "Todos los 𝑥 de 𝑈 satisfacen 𝑃𝑥",
                    correcta: false
                }, {
                    texto: "Todo número natural es par",
                    correcta: false
                }]
            }, {
                texto: "Para (∀𝑛) (𝑛∈ℕ) (𝑛 𝑒𝑠 𝑖𝑚𝑝𝑎𝑟), “todo número natural es impar”\n"+"La negación será:",
                respuestas: [{
                    texto: "a. (∀𝑛) (𝑛∈ℕ) (𝑛 𝑒𝑠 𝑝𝑎𝑟).  “todo número natural es par”.",
                    correcta: false
                }, {
                    texto: "𝑏. (∃𝑛) (𝑛∈ℕ) (𝑛 𝑒𝑠 𝑖𝑚𝑝𝑎𝑟).  “existe algún número natural impar”.",
                    correcta: false
                }, {
                    texto: "𝑐. (∃𝑛) (𝑛∈ℕ) (𝑛 𝑒𝑠 𝑝𝑎𝑟),   “existe algún número natural par”.",
                    correcta: true
                }, {
                    texto: "d. (∀𝑛) (𝑛∉ℕ) (𝑛 𝑒𝑠 𝑖𝑚𝑝𝑎𝑟), “todo número no natural es impar”.",
                    correcta: false
                }]
            }, {
                texto: "Para (∀𝑥) (𝑥∈ℕ) [(𝑥^2=4) ⋀ (𝑥+8=9)]\n"+"La negación será:",
                respuestas: [{
                    texto: "a. (∀𝑥) (𝑥∈ℕ) [(𝑥^2≠4) ⋀ (𝑥+8≠9)]",
                    correcta: false
                }, {
                    texto: "𝑏. (∃𝑥) (𝑥∈ℕ) [(𝑥^2=4) ⋀ (𝑥+8=9)].",
                    correcta: false
                }, {
                    texto: "𝑐.(∀𝑥) (𝑥∈ℕ) [(𝑥^2=4) ⋁  (𝑥+8=9)]",
                    correcta: false
                }, {
                    texto: "d. (∃𝑥) (𝑥∈ℕ) [(𝑥^2≠4) ⋁(𝑥+8≠9)]",
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
