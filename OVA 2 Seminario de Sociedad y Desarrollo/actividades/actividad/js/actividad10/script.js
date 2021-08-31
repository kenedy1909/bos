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
        $('.pregunta-cuestionario').height(highestBox + 7);
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
            }, {
                texto: "De los dos primeros párrafos de esa sección, es posible deducir que el autor del texto piensa que:  ",
                respuestas: [{
                    texto: "El modelo neoliberal garantiza las oportunidades para que el individuo gracias a su esfuerzo y emprendimiento pueda satisfacer sus necesidades. ",
                    correcta: false
                }, {
                    texto: "Es necesario un estado regulador que permita un acceso justo para que todos sus ciudadanos puedan satisfacer sus necesidades. ",
                    correcta: true
                }, {
                    texto: "Es normal que, en la sociedad, cada persona tenga diferentes posibilidades de satisfacer sus necesidades, por lo que el progreso individual se convierte en una virtud. ",
                    correcta: false
                }, {
                    texto: "Las personas no deben esperar un estado benefactor, sino que con su propio mérito deben lograr todos los medios que contribuyan a satisfacer sus necesidades. ",
                    correcta: false
                }]
            }, {
                texto: "De los dos últimos párrafos de esta sesión, es posible inferir que el autor cree:",
                respuestas: [{
                    texto: "El individualismo genera un vacío existencial que intentamos llenar con consumo.",
                    correcta: true
                }, {
                    texto: "El consumo le ofrece alternativas al individuo para que se realice en diversos ámbitos.",
                    correcta: false
                }, {
                    texto: "Las necesidades se crean como producto del relacionamiento social.",
                    correcta: false
                }, {
                    texto: "El bienestar de los individuos es el resultado de diversas necesidades las cuales el mercado está en capacidad de satisfacer.",
                    correcta: false
                }]
            }, {
                texto: "Al analizar el carácter relativo de las necesidades, es posible concluir que: ",
                respuestas: [{
                    texto: "El modelo de felicidad y progreso que propone el capitalismo permite incorporar las diferencias culturales. ",
                    correcta: false
                }, {
                    texto: "La publicidad y el consumo han impuesto un modelo de felicidad que violenta la diversidad cultural e impone estándares ajenos a la propia realidad de los sujetos. ",
                    correcta: true
                }, {
                    texto: "Cada cultura tiene sus propias necesidades y concepciones de felicidad, por lo cual no es viable imponer un modelo de acumulación y éxito como único parámetro de la felicidad. ",
                    correcta: false
                }, {
                    texto: "Gracias al desarrollo y al avance del capitalismo, es posible satisfacer cualquier tipo de necesidades. ",
                    correcta: false
                }]
            }, {
                texto: "La diferencia entre las necesidades alienadas y las radicales es que: ",
                respuestas: [{
                    texto: "Las primeras apuntan a la libertad, las segundas al consumo ",
                    correcta: false
                }, {
                    texto: "Las primeras se ubican en una esfera individual, las segundas en una esfera colectiva. ",
                    correcta: false
                }, {
                    texto: "Las primeras se orientan al consumo, las segundas a la libertad y la autorrealización.",
                    correcta: true
                }, {
                    texto: "Las primeras se orientan a la libertad capitalista, las segundas a la represión socialista.",
                    correcta: false
                }]
            }, {
                texto: "De la página 14 a la 16, se hace un análisis del enfoque de las necesidades básicas. En este análisis el autor: ",
                respuestas: [{
                    texto: "Cuestiona el enfoque, por no remediar los problemas del desarrollo y conformarse con evitar el descontento mediante acciones curativas que muestran al estado como un benefactor y contribuyen a generar una competencia por las ayudas",
                    correcta: false
                }, {
                    texto: "Lo critica, porque afirma que no remedia la pobreza, sino que ayuda a los pobres para que dependan de los políticos de turno. ",
                    correcta: false
                }, {
                    texto: "Demuestra poca eficacia en el gasto público, pues desvía fondos esenciales para el desarrollo en ayudas sociales innecesarias.",
                    correcta: true
                }, {
                    texto: "Defiende su implementación porque contribuyen al mejoramiento social, y por ende a garantizar mayor desarrollo económico y a fomentar la productividad. ",
                    correcta: false
                }]
            }


            ]);
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
