$( document ).ready(function() {
    $( ".ov-personaje").hide();
    $( ".menu1").removeClass('d-none');
    console.log(tema);

    //aparece en los otros ovas
    // $('.js_uni').html('<script src="js/views/unidades.js"></script>');

    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });

    //aparece en los otros ovas
    // $(".linkactividades").attr('href', urlsite + '/course/view.php?id=' + courseid);

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
    });

    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
    });

    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        slide();
        // console.log(e);
        switch(stepIndex) {
            default:
            // code block
        }
    });
    
    setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
    slide_predeterminado();

    slide_link(tema);
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".modal_scroll2").on('click', modal_scroll2);
    $(".modal_scroll3").on('click', modal_scroll3);
    $(".modal_scroll4").on('click', modal_scroll4);

    $(".citar").on('click', citar);
    funcion_vanvas();




});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex+1);
    actualizarprogress(stepIndex+1);
}
function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}
var sumaslide = 0;
var sumaslide2 = 0;
function controlSlides(num){
    switch (parseInt(num)) {

        case 1:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob');
            bar = document.querySelector('.custom-scrollbar__bar');
            container = document.querySelector('.custom-scrollbar__inner');
            /*scroll();*/
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo 2", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);

            break;
        case 4:
            $("#cont_imp").html('');
            $('.triangulo_indica').css({ "visibility": "hidden"

                        });
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            inicio();
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 7:
            /*dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob19');
            bar = document.querySelector('.custom-scrollbar__bar19');
            container = document.querySelector('.custom-scrollbar__inner19');
            scroll();*/
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 8:
            var contenido = `<p class="color-text">Clic en el ícono para visualizar información</p>`;
            $('.imprime_heare').html(contenido);
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 9:
            $('.p_9c').html('<p>Clic en cada círculo para visualizar la información</p>');
            $('.indicap9').css({ "visibility": "hidden"

                });
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 11:
            sumaslide++;
            if (sumaslide < 2) {
                var slideCount = $('#slider2 ul li').length;
                var slideWidth = $('#slider2 ul li').width();
                console.log(slideWidth, slideCount);
                var slideHeight = $('#slider2 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider2').css({ width: '100%', height: '480px' });

                $('#slider2 ul').css({ width: '90%'});

                $('#slider2 ul li:last-child').prependTo('#slider2 ul');

                function moveLeft2() {
                    $('#slider2 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider2 ul li:last-child').prependTo('#slider2 ul');
                        $('#slider2 ul').css('left', '');
                    });


                };

                function moveRight2() {
                    $('#slider2 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider2 ul li:first-child').appendTo('#slider2 ul');
                        $('#slider2 ul').css('left', '');
                    });
                };

                $('a.control_prev2').click(function () {
                    moveLeft2();
                    if (sumaslide != 0) {
                        sumaslide--;
                    } else {
                        sumaslide=7;
                    }

                    console.log(sumaslide);
                    $('a.control_next2').removeClass('d-none');
                });

                $('a.control_next2').click(function () {
                    $('a.control_prev2').removeClass('d-none');
                    moveRight2();
                    sumaslide++;
                    console.log(sumaslide);
                    if (sumaslide==8) {
                        sumaslide= sumaslide-8;
                        $('a.control_next2').addClass('d-none');
                    } else {
                        $('a.control_next2').removeClass('d-none');
                    }
                });

                if ("#slider2 ul li:last-child") {
                    console.log("work");
                    $('a.control_prev2').addClass('d-none');

                }
            }



            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 12:
            sumaslide2++;
            if (sumaslide2 < 2) {
                var slideCount = $('#slider3 ul li').length;
                var slideWidth = $('#slider3 ul li').width();
                var slideHeight = $('#slider3 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider3').css({ width: '100%', height: '400px' });

                $('#slider3 ul').css({ width: '90%'});

                $('#slider3 ul li:last-child').prependTo('#slider3 ul');

                function moveLeft3() {
                    $('#slider3 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider3 ul li:last-child').prependTo('#slider3 ul');
                        $('#slider3 ul').css('left', '');

                    });
                };

                function moveRight3() {
                    $('#slider3 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider3 ul li:first-child').appendTo('#slider3 ul');
                        $('#slider3 ul').css('left', '');
                    });
                };

                $('a.control_prev3').click(function () {
                    moveLeft3();
                });

                $('a.control_next3').click(function () {
                    moveRight3();
                });
            }
            var num = 1;

            $(".control_previmg").click(function () {
                $(".img1").addClass('d-none'); $(".img2").addClass('d-none'); $(".img3").addClass('d-none');
                $(".img4").addClass('d-none'); $(".img5").addClass('d-none'); $(".img6").addClass('d-none');
                if (num == 1) {
                    num= 6;
                } else {
                    num--;
                }

                switch (num) {
                    case 1: $(".img1").removeClass('d-none'); break;
                    case 2: $(".img2").removeClass('d-none'); break;
                    case 3: $(".img3").removeClass('d-none'); break;
                    case 4: $(".img4").removeClass('d-none'); break;
                    case 5: $(".img5").removeClass('d-none'); break;
                    case 6: $(".img6").removeClass('d-none'); break;
                }

            });

            $(".control_nextimg").click(function () {
                console.log("contador " +num)
                $(".img1").addClass('d-none'); $(".img2").addClass('d-none'); $(".img3").addClass('d-none');
                $(".img4").addClass('d-none'); $(".img5").addClass('d-none'); $(".img6").addClass('d-none');
                if (num == 6) {
                    num= 1;
                } else {
                    num++;
                }

                switch (num) {
                    case 1: $(".img1").removeClass('d-none'); break;
                    case 2: $(".img2").removeClass('d-none'); break;
                    case 3: $(".img3").removeClass('d-none'); break;
                    case 4: $(".img4").removeClass('d-none'); break;
                    case 5: $(".img5").removeClass('d-none'); break;
                    case 6: $(".img6").removeClass('d-none'); break;
                }

            });

            console.log("contador " +num)
            // carruselimagenes();
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            cambiarColorMenu(11);
            break;
        case 13:
            $('.wite_ban_13').css({ "background": "transparent"

                });
            $('.pant13').html('');

            $(".out1").click(function(){
                $(".p1").addClass('d-none');
                $(".front13").removeClass('d-none');
                $(".p2").addClass('d-none'); $(".p3").addClass('d-none');
            });

            $(".click1").click(function(){
                $(".p1").removeClass('d-none');
                $(".front13").addClass('d-none');
                $(".p2").addClass('d-none'); $(".p3").addClass('d-none');
            });

            $(".click2").click(function(){
                $(".p2").removeClass('d-none');
                $(".front13").addClass('d-none');
                $(".p1").addClass('d-none'); $(".p3").addClass('d-none');
            });

            $(".click3").click(function(){
                $(".p3").removeClass('d-none');
                $(".front13").addClass('d-none');
                $(".p2").addClass('d-none'); $(".p1").addClass('d-none');
            });
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            break;
        case 14:

            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            break;
        case 15:
            cambiatargeta(3);
            cambiatargeta2(3);
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            var slideCount2 = $('#slider4 ul li').length;
            var slideWidth2 = $('#slider4 ul li').width();
            var slideHeight2 = $('#slider4 ul li').height();
            var sliderUlWidth2 = slideCount2 * slideWidth2;

            $('#slider4').css({ width: '100%', height: '360px' });

            $('#slider4 ul').css({ width: '88%'});

            $('#slider4 ul li:last-child').prependTo('#slider4 ul');

            function moveLeft4() {
                $('#slider4 ul').animate({
                    left: - slideWidth2
                }, 200, function () {
                    $('#slider4 ul li:last-child').prependTo('#slider4 ul');
                    $('#slider4 ul').css('left', '');
                });
            };

            function moveRight4() {
                $('#slider4 ul').animate({
                    left: - slideWidth2
                }, 200, function () {
                    $('#slider4 ul li:first-child').appendTo('#slider4 ul');
                    $('#slider4 ul').css('left', '');
                });
            };

            $('a.control_prev4').click(function () {
                moveLeft4();
                $('a.control_prev4').addClass('d-none');
                $('a.control_next4').removeClass('d-none');
            });

            $('a.control_next4').click(function () {
                moveRight4();
                $('a.control_prev4').removeClass('d-none');
                $('a.control_next4').addClass('d-none');
            });
            break;
        case 16:
            $('.pantallas16').html('');
            $('.16_imprime').html('<p style="float: right;">Clic para ampliar la información</p>');
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            /*$("#content-ova").load("base/unidades/unidad2.html");
            tema = 1;*/
            break;
        case 17:

            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            cambiarColorMenu(21);
            tema = 1;
            break;

        default:
            break;
    }
}



function slidep11(num){
    if (num <= 1) {

    }
}

function imprime16(){
    var text = `
            <div style="padding: 28px 25px 25px 25px;">
              <p class="justificado">No obstante, los perfiles de formación profesionales y ocupacionales de los contadores públicos, continúan estando orientados a responder con suficiencia a las demandas empresariales más que a las sociales, por tanto se considera fundamental revisar de manera reflexiva las intenciones formativas, los fines y usuarios de la formación contable y los propósitos y filosofías institucionales como aspectos que posibilitan la incorporación de las dimensiones no incluidas en la educación contable tradicional.</p>
              <button class="btn btnpant16" data-toggle="modal" data-target="#modaltable">ver</button>
            </div>
    `;
    $('.16_imprime').html(text);
}


function pantalla9(num){
    switch (parseInt(num)) {
        case 1:
            var text = `<div class="p9_cont">
                      <p class="justificado">Reflexionar contemplando y analizando aspectos de la política que influyen en el país</p>
                    </div>`;
            $('.indicap9').css({ "visibility": "hidden"

                });
            $('.indi_1').css({ "visibility": "visible"

                });
            $('.p_9c').html(text);
            break;
        case 2:
            var text = `<div class="p9_cont">
                          <p class="justificado">Reconocer al otro como semejante a sí mismo, extendiendo respeto y dejando de lado distintivos de raza, religión, género u otros y entendiendo que el otro no es un medio para llegar a un fin.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"

                });
            $('.indi_2').css({ "visibility": "visible"

                });
            $('.p_9c').html(text);
            break;
        case 3:
            var text = `<div class="p9_cont">
                          <p class="justificado">Imaginar la cantidad de características que contemplan el desarrollo de una vida, donde existen diferentes momentos como la infancia y adolescencia y aspectos como la enfermedad y la muerte</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"

                });
            $('.indi_3').css({ "visibility": "visible"

                });
            $('.p_9c').html(text);
            break;
        case 4:
            var text = `<div class="p9_cont">
                          <p class="justificado">Emitir un juicio crítico sobre quienes gobiernan un país, manteniendo una idea realista de los recursos y posibilidades que tiene a su alcance.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"

                });
            $('.indi_4').css({ "visibility": "visible"

                });
            $('.p_9c').html(text);
            break;
        case 5:
            var text = `<div class="p9_cont">
                          <p class="justificado">Concebir su Estado como algo complejo que en determinadas situaciones debe acudir a soluciones provenientes de lo externo o internacional.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"

                });
            $('.indi_5').css({ "visibility": "visible"

                });
            $('.p_9c').html(text);
            break;
        default:
            break;
    }
}

function citar(){
    var contenido = `<div style="height: 248px;background: white;border-radius: 50px;padding: 25px 35px 35px 35px;">
                    <p class="justificado">Como lo menciona López (2010), la importancia de la democracia trasciende el solo hecho de contar con un sistema político que permita el voto para  elección de representantes, pues la forma en que ese sistema se desarrolle genera influencia en las condiciones y estilo de vida de los ciudadanos; es por esto que no debería considerarse democracia únicamente la opción de voto, sino el hecho de facilitar espacios de participación  donde las personas logren ejercer un rol activo y que incluso sean los ciudadanos quienes formulen los modos de participación.</p>
                  </div>`;
    $('.imprime_heare').html(contenido);
}

function imprime(num) {
    var text = '';
    var cont = 0;
    switch (parseInt(num)) {
        case 1:
            text = `<p class="justificado p_black m-auto">El humanismo es comprendido como una expresión de la cultura que entiende al ser humano como el eje central del desarrollo histórico y social, poseedor de características específicas que lo elevan sobre las demás criaturas existentes, dándole así un lugar privilegiado.
                    <br>De tal modo, el humanismo propende por un desarrollo humano en todos sus niveles y dimensiones, logrando que sean los mismos individuos quienes por medio de una participación activa en la esfera social puedan generar un auto desarrollo acorde a sus gustos, intereses, pasiones y formas de entender la vida misma.</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"

                });
            cont = 1;
            break;
        case 2:
            text= `<p class="justificado p_black m-auto">Como concepto, abarca diferentes características e ideas que implican preguntas de término existencial que el hombre mismo se realiza, como ¿Quién soy?, ¿por qué estoy aquí?, ¿quiénes son los que están a mi alrededor?, integrando esferas entre las que se ubicarían lo teológico, sociológico, antropológico, teleológico y demás; es por esto, que autores como Palacio (2016) señalan que, desde la existencia del hombre, al humanismo se le ha otorgado un matiz cambiante transitando por diferentes momentos de la historia y recibiendo su interpretación como un movimiento filosófico que ha presentado variaciones de acuerdo a las épocas que van ejerciendo influencia y realizan sus propios aportes.</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"

                });
            cont = 2;
            break;
        case 3:
            text = `<div style="width: 70%">
                        <p class="justificado p_black">Es así, como en el propósito de conocer la influencia que dichas épocas han ejercido sobre el humanismo, se hace necesario recorrer algunos aspectos y periodos relevantes como son:</p>
                          <ul class="justificado p_black">
                              <li>Condición humana en la prehistoria.</li>
                              <li>Los antecedentes grecorromanos.</li>
                              <li>La época medieval.</li>
                              <li>El renacimiento.</li>
                              <li>La época contemporánea.</li>
                          </ul>
                    </div>
                    <div class="p-3" style="width: 30%">
                        <p class="text-center p_black"><i>clic al ícono</i></p>
                        <a href="assets/PDF/que_es.pdf" target="_blank"><img src="assets/img/img_ova/humanistica1_1.png" class="m-auto" style="width: 100%;"></a>
                    </div>`;
            $('.triangulo_indica').css({ "visibility": "hidden"

                });
            cont = 3;
            break;
        case 4:
            text = `<p class="justificado p_black">Son fundamentales para la democracia (en la que los estudiantes deben participar con conocimiento y de manera activa, y esta participación, dada por la formación de una educación superior que los hace competentes); sin embargo, señala la autora que, en la actualidad, aunque libertad, amor y creatividad son fundamentales para el desarrollo del pensamiento crítico, se han olvidado relegando su importancia en el proceso de educación.</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"

                });
            cont = 4;
            break;
        case 5:
            text =  `<p class="justificado p_black">A lo anterior, Nussbaum (2010) lo ha denominado “crisis silenciosa” por considerar que sucede de manera desapercibida para la sociedad, siendo así el hombre despojado de su capacidad de participación y reduciéndolo a una simple utilidad.</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"

                });
            cont = 5;
            break;
        case 6:
            text = `<p class="justificado p_black">Todo lo anterior, para fundamentar la importancia de la educación en el vivir del individuo, pues a la vez que una universidad tiene como compromiso el educar, también debe desempeñar el rol de formar, entendiendo que la educación repercute directamente en el estilo de vida; en palabras de Esquivel (2004) “se educa para ser y se vive de acuerdo con cómo se es” (p. 310).</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"

                });
            cont = 6;
            break;
        default:
            break;
    }
    $("#cont_imp").html(text);
    $('.triangulo_indica'+cont+'').css({ "visibility": "visible"

                });
}

function modal_scroll2(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob3');
    bar = document.querySelector('.custom-scrollbar__bar3');
    container = document.querySelector('.custom-scrollbar__inner3');
    scroll();
}
function modal_scroll3(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob4');
    bar = document.querySelector('.custom-scrollbar__bar4');
    container = document.querySelector('.custom-scrollbar__inner4');
    scroll();
}
function modal_scroll4(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob5');
    bar = document.querySelector('.custom-scrollbar__bar5');
    container = document.querySelector('.custom-scrollbar__inner5');
    scroll();
}

function pantalla13(num){
    switch (parseInt(num)) {
        case 1:
            var text = `<p class="justificado">En lo anterior se diferencia entonces la visión tradicional que menciona únicamente los aspectos económicos como factores que condicionan el desarrollo y la percepción de ser países con un mejor nivel de calidad de vida</p>`;
            $('.wite_ban_13').css({ "background": "white"

                });
            $('.pant13').html(text);
            break;
        case 2:
            var text = `<p class="justificado">Las posturas menos tradicionales proporcionan una mayor participación a los Gobiernos en la posibilidad de garantizar confianza y mejora en las condiciones de vida de la población; es así como Piketty, Stiglitz, entre otros autores institucionalistas otorgan un rol protagónico no sólo a la existencia sino también a la participación ciudadana en las decisiones que la política pública genera sobre las posibilidades de desarrollo de los países.</p>`;
            $('.wite_ban_13').css({ "background": "white"

                });
            $('.pant13').html(text);
            break;
        case 3:
            var text = `<p class="justificado">Sin embargo, la representación de la realidad como la complejidad de la vida social, arroja a la paradoja sobre tener mayor volumen de datos, tener mejores herramientas, instituciones o modelos y una decadente humanidad.</p>`;
            $('.wite_ban_13').css({ "background": "white"

                });
            $('.pant13').html(text);
            break;
        case 4:
            var text = `<p class="justificado">La falta de comprensión de ser parte del todo social y de manera cómo somos influenciados, a la vez que lo hacemos con nuestras actuaciones, requiere un mayor grado de acercamiento a la práctica de generar desarrollo desde las personas para las personas.</p>`;
            $('.wite_ban_13').css({ "background": "white"

                });
            $('.pant13').html(text);
            break;
        case 5:
            var text = `<p class="justificado">Autores como Amartya Sen, Manfred Max Neef, Martha Nussbaum así lo han propuesto desde las teorías de las capacidades, las necesidades, la economía descalza y/o a escala humana.</p>`;
            $('.wite_ban_13').css({ "background": "white"

                });
            $('.pant13').html(text);
            break;
        case 6:
            var text = `<p class="justificado">Para comprender el rol de la educación que modifica el modo de entender el desarrollo al servicio de las personas y no a la inversa, invitamos al Maestro Max Neef (Q.E.P.D) para que nos ilustre su pensamiento en la siguiente entrevista: Manfred Max Neef: Economía a escala humana. Rumbo 360 TV.</p>
                              <iframe id="ytplayer" type="text/html" width="220" height="200" style="min-height: fit-content;" src="https://www.youtube.com/embed/Ye3XqX09IUo" frameborder="0" allowfullscreen>`;
            $('.wite_ban_13').css({ "background": "white"

                });
            $('.pant13').html(text);
            var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player', {
                height: '90',
                width: '300',
                videoId: 'Ye3XqX09IUo',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
            }
            break;
        default:
            break;
    }
}

function scroll(){
    // When the container is scrolled
    container.addEventListener('scroll', () => {
      // If we are dragging the knob, do nothing
      if (dragging) return;

      // Otherwise, set the knob position based on the scroll position
      knob.style.top = container.scrollTop / (container.scrollHeight - container.offsetHeight) * 100 + '%';
    });

    dragging = false;

    knob.addEventListener('mousedown', event => {

    console.log(knob+" "+bar+" "+container);
      dragging = {
        x: event.clientX,
        y: event.clientY };

    });
    window.addEventListener('mousemove', event => {
      if (dragging) {
        // When dragging
        event.preventDefault();
        diff = {
          x: event.clientX - dragging.x,
          y: event.clientY - dragging.y };


        // Clamp the position of the knob to be a maximum of
        // the knobs container, and a minimum of 0
        newTop = Math.max(0, Math.min(knob.offsetTop + diff.y, bar.offsetHeight));
        knob.style.top = newTop + 'px';

        // Base the scroll offset on the knobs position
        // in relation to the knobs container
        scrollOffset = newTop / bar.offsetHeight * (container.scrollHeight - container.offsetHeight);
        container.scrollTop = scrollOffset;

        dragging = {
          x: event.clientX,
          y: event.clientY };

      }
    });
    window.addEventListener('mouseup', () => {
      dragging = false;
    });
}


function poner(num) {

    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '15px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 4) {
        dragging = "";
        diff = "";
        newTop = "";
        scrollOffset = "";
        knob = document.querySelector('.custom-scrollbar__knob21');
        bar = document.querySelector('.custom-scrollbar__bar21');
        container = document.querySelector('.custom-scrollbar__inner21');
        scroll();
    }
    if (num == 3) {
        dragging = "";
        diff = "";
        newTop = "";
        scrollOffset = "";
        knob = document.querySelector('.custom-scrollbar__knob20');
        bar = document.querySelector('.custom-scrollbar__bar20');
        container = document.querySelector('.custom-scrollbar__inner20');
        scroll();
    }
}
function quitar(num) {
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'none',
        'z-index': '100'
    });
    if (num == 4) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
    }
}

//dezlizador
var elementoPadre1 = document.querySelector(".inputDiv.i1");
var elementoPadre2 = document.querySelector(".inputDiv.i2");
var inputsRy = [];

function Input() {
  //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
  this.att = {};
  this.att.type = "range";
  this.att.value = 0;
  this.att.min = 0;
  this.att.max = 6;
  this.att.autocomplete = "off";
  this.att.step = "1";
  this.input;
  this.output;

  this.crear = function(elementoPadre) {
    // crea un nuevo elemento input
    this.input = document.createElement("input");
    //para cada propiedad del objeto att establece un nuevo atributo del elemento input
    for (var name in this.att) {
      if (this.att.hasOwnProperty(name)) {
        this.input.setAttribute(name, this.att[name]);
      }
    }
    // crea un nuevo elemento div
    this.output = document.createElement("div");
    // establece el valor del atributo class del nuevo div
    this.output.setAttribute("class", "output");
    // y el contenido (innerHTML) de este
    this.output.innerHTML = this.att.value;

    // inserta los dos elementos creados al final  del elemento Padre
    elementoPadre.appendChild(this.input);
    elementoPadre.appendChild(this.output);
  }

  this.actualizar = function() {
    pantallas16(this.input.value);
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
}

// setup
var i = new Input();
i.crear(elementoPadre1);
inputsRy.push(i);

var i2 = new Input();
i2.att.value = 70;
i2.att.min = 20;
i2.att.max = 120;
i2.crear(elementoPadre2);
inputsRy.push(i2);

for (var n = 0; n < inputsRy.length; n++) {
  (function(n) {
    inputsRy[n].input.addEventListener("input", function() {
      inputsRy[n].actualizar();
    }, false)
  }(n));
}

/* Draw
function Draw(){
 requestId = window.requestAnimationFrame(Draw);
  for( var n = 0; n< inputsRy.length; n++){
    inputsRy[n].update();
  }
}

requestId = window.requestAnimationFrame(Draw);
*/
// JavaScript Document




function img_17(num){
    switch (parseInt(num)) {

        case 1:
            var text = `<p class="justificado">
                          Producto de las corrientes dominantes, la educación contable concentra sus esfuerzos en dotar al estudiante de competencias y conocimientos que le permitan insertarse al mundo laboral, por desgracia, el excesivo enfoque en esta visión pragmática y poco humanizadora del contable, desemboca precisamente en la crisis de confianza frente a la formación de un sujeto ético y moral, que visione el efecto de sus actuaciones en protección del interés público y de la fe pública que le ha sido encomendada.
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/imagen5-1.png">`;
            $('.armada').append(img);
            break;
        case 2:
            var text = `<p class="justificado">
                          Conviene entonces comprender que producto de las crisis y las demandas sociales, hay una preocupación creciente por la manera como están siendo formados y transformados a través de la educación los sujetos contables. Si bien en principio se requería de un profesional cuya experticia radicara más en el saber hacer (contabilidad), con el tiempo, se migra hacia la necesidad de aportar a través de la teorización y el enfoque disciplinar hacia la perspectiva crítica e interpretativa de la contabilidad como disciplina científica (contaduría pública).
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/imagen5-2.png">`;
            $('.armada').append(img);
            break;
        case 3:
            var text = `<p class="justificado">
                          En desarrollos más recientes, aumenta la preocupación en la educación contable por el sujeto (contador público), en un esfuerzo por humanizar las prácticas, reconociendo el alto valor y riesgo social que implica el ejercicio irresponsable y contrario a los cánones establecidos tanto por la normativa propia de la profesión como por la posibilidad de seguir construyendo el proyecto de vida personal de quien la ejerce.
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/imagen5-3.png">`;
            $('.armada').append(img);
            break;
        case 4:
            var text = `<p class="justificado">
                          De acuerdo con Gracia (2019) en términos profesionales y académicos, la ética puede observarse a través de la Accountability (en su sentido de rendición de cuentas), pero más allá en su manera del held accountable (es decir «responsabilizado» por sus acciones).
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/imagen5-4.png">`;
            $('.armada').append(img);
            break;
        case 5:
            var text = `<p class="justificado">
                          Reflexionar la ética en relación con lo significado como «rendición de cuentas» y la «responsabilidad» (individual y social), es tal vez, el paso necesario e indispensable para contar con juicios que enclaven en el corazón de las prácticas contables la responsabilidad por la consecuencia de las acciones. Precisamente, se consideraría esta una manera acertada de comprender la ética, dispuesta en permanente relación de convivencia con los hechos y la práctica.
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/imagen5-5.png">`;
            $('.armada').append(img);
            break;
        case 6:
            var text = `<p class="justificado">
                          Dussel (2016) reafirma este contenido al decir «la ética, esa dimensión humana esencial en primer lugar es ‘una práctica’. Lo ético es inherente a la existencia humana en su actuación cotidiana. Tanto singular como comunitariamente toda acción es Ética y lo Ético del acto indica justamente que es práctico» (p. 17).
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/imagen5-6.png">`;
            $('.armada').append(img);
            break;
        default:
            break;
    }
}

function pantalla20(num){
    switch (parseInt(num)) {

        case 1:
            var text = `<div class="banner20">
                        <p class="justificado text-white">Desde la óptica positivo-instrumental, las teorías contables terminan propiciando solo descripciones, cuyas enunciaciones adscriben los juicios a decir simplemente una verdad instrumental, desplazando la rectitud o la verdad moral.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        case 2:
            var text = `<div class="banner20">
                        <p class="justificado text-white">La ética práctica, es decir, aquella que se contextualiza en casos específicos y advierte los dilemas morales a que se enfrenta el profesional, facilita una comprensión de los efectos ampliados en las acciones personales; siguiendo a Gracia (2019), el interés público en esta corriente es la mediación entre la disciplina y la profesión para la sustentabilidad de las organizaciones sociales, en cuyo seno se tipifican las categorías de confianza, ética, responsabilidad profesional y el bien común.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        case 3:
            var text = `<div class="banner20">
                        <p class="justificado text-white">En desarrollo del ejercicio de control que compete al profesional contable,  la corriente crítica se centra en la emancipación del individuo y en su propia realización, se ejerce la doble acción de controlador y controlado, dando lugar a tensiones más que a la sostenibilidad de las organizaciones empresariales promueve la sustentabilidad de la sociedad en sentido de justicia y equidad, es decir la vida. Allí pueden generarse dilemas éticos frente a la capacidad de mantener la independencia de juicio o criterio profesional más allá de los efectos únicamente económico financieros.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        case 4:
            var text = `<div class="banner20">
                        <p class="justificado text-white">De otra parte, Castaño (2019) indica que, en el marco de relaciones sociales, lo contable tiene el poder de mantener la confianza, este es un elemento fundamental para la cohesión social; sin ella el desarrollo de capacidades, comprensión de las realidades contextuales y su necesaria vinculación con los lenguajes de comunicación para la toma de decisiones informadas no es posible.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        default:
            break;
    }
}


function pantalla6(num){
    switch (parseInt(num)){
        case 1:
            var texto = `<p class="justificado">El origen de la palabra democracia viene del griego y su significado es “gobierno del pueblo” o “gobierno popular” (Rodríguez, 2010.), comprendiendo que la palabra hace referencia a un sistema político</p>`;
            $('.banne_white').html(texto);
            $('.triangulo_yellow').css({ "visibility": "visible"});
            $('.tria_blue1').css({ "visibility": "hidden"});
            $('.tria_blue2').css({ "visibility": "hidden"});
            break;
        case 2:
            var texto = `<p class="justificado">Era la figura de función política permanente, los pertenecientes a este grupo se elegían cada año por los ciudadanos que contaran con edad mayor a treinta. Entre sus funciones se encontraba preparar las sesiones de la asamblea y el correspondiente orden del día; en aquel tiempo, todo caso debía ser evaluado inicialmente por este consejo para luego ser atendido por la asamblea, así mismo, eran encargados de validar el cumplimiento de los requisitos por parte de quienes integrarían los grupos del gobierno.</p>`;
            $('.boder_white_baner').html(texto);
            $('.triangulo_yellow').css({ "visibility": "hidden"});
            $('.tria_blue1').css({ "visibility": "visible"});
            $('.tria_blue2').css({ "visibility": "hidden"});
            break;
        case 3:
            var texto = `<p class="justificado">Este grupo era la concentración real del poder político y a su vez el más reconocido, ya que, en él todas las personas con pleno derecho para ejercer participación, tenían potestad de votar en los diversos temas expuestos que previamente habían sido validados por el consejo. Aunque el número de personas que podían asistir y dar su voto era alto, la asistencia real no lo era, lo cual no se distancia mucho de la situación en la actualidad.</p>`;
            $('.boder_white_baner').html(texto);
            $('.triangulo_yellow').css({ "visibility": "hidden"});
            $('.tria_blue1').css({ "visibility": "hidden"});
            $('.tria_blue2').css({ "visibility": "visible"});
            break;
        default:
            break;
    }
}
function funcion_vanvas() {
    var canvas = new fabric.Canvas('canvas_unid2');
    var imgElement = 'assets/img/img_ova/uno.png';
    /*var imgElement2 = 'assets/img/img_ova/dos.png'; */
    var imgElement3 = 'assets/img/img_ova/dos.png';
    var imgElement4 = 'assets/img/img_ova/tres.png';
    /*var imgElement5 = 'assets/img/img_ova/tres.png';*/
    var imgElement6 = 'assets/img/img_ova/cuatro.png';
    /*var imgElement7 = 'assets/img/img_ova/cuatro.png';*/
    var imgElement8 = 'assets/img/img_ova/cinco.png';
    var imgElement9 = 'assets/img/img_ova/seis.png';
    /*var imgElement10 = 'assets/img/img_ova/seis.png';*/
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=190;
        oImg.top=0;
        oImg.scaleToHeight(30);
        oImg.scaleToWidth(30);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            //console.log('selected a circle');
            contenido2_3(1);
        });
    });
    /*fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=300;
        oImg2.top=35;
        oImg2.scaleToHeight(30);
        oImg2.scaleToWidth(30);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(2);
        });

    });*/
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=360;
        oImg3.top=120;
        oImg3.scaleToHeight(30);
        oImg3.scaleToWidth(30);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(2);
        });

    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=370;
        oImg4.top=220;
        oImg4.scaleToHeight(30);
        oImg4.scaleToWidth(30);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(3);
        });
    });
    /*fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=320;
        oImg5.top=310;
        oImg5.scaleToHeight(30);
        oImg5.scaleToWidth(30);
        oImg5.selectable = false;
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(5);
        });
    });*/
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=190;
        oImg6.top=370;
        oImg6.scaleToHeight(30);
        oImg6.scaleToWidth(30);
        oImg6.selectable = false;
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(4);
        });
    });
    /*fabric.Image.fromURL(imgElement7, function(oImg7) {
        oImg7.left=50;
        oImg7.top=310;
        oImg7.scaleToHeight(30);
        oImg7.scaleToWidth(30);
        oImg7.selectable = false;
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(7);
        });
    });*/
    fabric.Image.fromURL(imgElement8, function(oImg8) {
        oImg8.left=5;
        oImg8.top=220;
        oImg8.scaleToHeight(30);
        oImg8.scaleToWidth(30);
        oImg8.selectable = false;
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(5);
        });
    });
    fabric.Image.fromURL(imgElement9, function(oImg9) {
        oImg9.left=10;
        oImg9.top=120;
        oImg9.scaleToHeight(30);
        oImg9.scaleToWidth(30);
        oImg9.selectable = false;
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(6);
        });
    });
    /*fabric.Image.fromURL(imgElement10, function(oImg10) {
        oImg10.left=75;
        oImg10.top=35;
        oImg10.scaleToHeight(30);
        oImg10.scaleToWidth(30);
        oImg10.selectable = false;
        canvas.add(oImg10);

        oImg10.on('mouseup', function() {
            //console.log('selected a circle');
             contenido2_3(10);
        });
    });*/
}
function contenido2_3(num) {
    $(".btns_1, .btns_2, .btns_3, .btns_4, .btns_5, .btns_6").removeClass('bg-azu');
    switch(parseInt(num)){
        case 1:
            var cont = `<div class="p-2">
                            <div class="text-center"><img src="assets/img/img_ova/hablar.png" style="max-width: 30%;" class="mt-2"></div>
                            <div class="pt-2 px-4">
                                <p class="justificado px-2" style="font-size: 12px;">
                                    <b>Tradición oral:</b> Son expresiones culturales que sirven para transmitir contenidos fundamentales que debían ser conservados. Estos contenidos determinaban las formas de comportamiento, las normas de vinculación social, referentes religiosos y demás elementos importantes que generan cohesión cultural.

                                </p>
                            </div>
                        </div>`;
            $('#circle_can').html(cont); 
            $(".btns_1").addClass('bg-azu');

            break;
        case 2:
            var cont = `<div>
                            <div class="text-center"><img src="assets/img/img_ova/mitos.png" style="max-width: 20%;" class="mt-2"></div>
                            <div class="pt-2 px-4">
                                <p class="justificado px-2" style="font-size: 12px;">
                                    <b>Mitos cosmogónicos:</b> Son discursos explicativos de corte mágico-religioso que dan cuenta del origen del mundo. Es importante señalar que las culturas primitivas tenían creencias en diferentes deidades, las cuales eran animistas, es decir, tenían el poder de controlar o encarnar las fuerzas naturales, éstas mismas creencias determinaban la relación de los seres humanos con su entorno. Lo anterior indica que las creencias religiosas intervienen de manera directa en los procesos de socialización.

                                </p>
                            </div>
                        </div>`;
            $('#circle_can').html(cont);
            $(".btns_2").addClass('bg-azu');

            break;
        case 3:
            var cont = `<div class="p-2 mt-3">
                            <div class="text-center"><img src="assets/img/img_ova/religion.png" style="max-width: 30%;" class="mt-2"></div>
                            <div class="pt-2 px-4">
                                <p class="justificado px-2" style="font-size: 12px;">
                                    <b>Rituales religiosos:</b> Son un conjunto de prácticas que tienen en principio intervenir en la voluntad del dios. Esto, con la finalidad de cambiar el curso de la naturaleza, en beneficio de la misma comunidad.
                                </p>
                            </div>
                        </div>`;
            $('#circle_can').html(cont);
            $(".btns_3").addClass('bg-azu');

            break;
        case 4:
            var cont = `<div class="p-2 mt-3">
                            <div class="text-center"><img src="assets/img/img_ova/red.png" style="max-width: 30%;" class="mt-2"></div>
                            <div class="pt-2 px-4">
                                <p class="justificado px-2" style="font-size: 12px;">
                                    <b>Organización social tribal:</b> Implica las diferentes jerarquías que existieron en las comunidades primitivas, en las cuales, los cazadores, sacerdotes o recolectores cumplían una función específica.
                                </p>
                            </div>
                        </div>`;
            $('#circle_can').html(cont);
            $(".btns_4").addClass('bg-azu');
            break;
        case 5:
            var cont = `<div>
                            <div class="text-center"><img src="assets/img/img_ova/ecosistema.png" style="max-width: 20%;" class="mt-2"></div>
                            <div class="pt-2 px-4">
                                <p class="justificado px-2" style="font-size: 12px;">
                                    <b>Manipulación del medio:</b> A medida que los pueblos se van adaptado a las circunstancias naturales, van creando herramientas que les permiten manipular las condiciones de vida, por ejemplo, ya no se ven en la necesidad de cazar y recolectar alimento para un momento concreto, sino que ven la posibilidad de generar un asiento que les permite cosecharlo, facilitando así un lugar estable de vida, el cual será el inicio de las ciudades que permiten el florecimiento de la cultura.

                                </p>
                            </div>
                        </div>`;
            $('#circle_can').html(cont);
            $(".btns_5").addClass('bg-azu');
            break;
        case 6:
            var cont = `<div class="p-2">
                            <div class="text-center"><img src="assets/img/img_ova/Seminario-Humanistico-I-02.png" style="max-width: 68%;" class="mt-3"></div>
                            <div class="pt-2 px-4 mt-2">
                                <p class="justificado px-2" style="font-size: 12px;">
                                    <b>Identidad colectiva:</b> Es el conjunto de representaciones simbólicas compartidas por una comunidad que determinan la imagen que tienen de sí mismos. Dichas representaciones se manifiestan por medio de acciones, rituales, tradiciones o imaginarios sociales.
                                </p>
                                <div class="mt-4">
                                    <button data-toggle="modal" data-target="#modaltable" class="btn" style="background: #714F21;width: 40%;color: white;font-weight: bold;"><img src="assets/img/img_ova/buscar.png" style="max-width: 10%;position: absolute;margin-left: -45px;" >ver</button>
                                </div>
                            </div>
                        </div>`;
            $('#circle_can').html(cont);
            $(".btns_6").addClass('bg-azu');
            break;
        default:
            break;
    }
}
function generalidades(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <div style="padding: 25px 1px 1px 1px;">
                <p class="justificado" style="font-size: 12px;">Las polis griegas eran consideradas ciudades estados, esto es, ciudades que pertenecen a una misma nación, pero que tienen un gobierno independiente, leyes propias y libertad de adoración a un dios particular. </p>
                <p class="justificado" style="font-size: 12px;">
                    De tal modo, cada ciudad-estado podría configurar sus relaciones sociales por medio de las decisiones políticas y religiosas. En este punto es <b style="background: #833c0b;color: white;border-radius: 5px;">importante señalar la importancia de la religión</b>
                    pues en tanto cada ciudad-estado adoraba a un dios en particular, podía asimilar como propias las características del dios de la ciudad.
                </p>
                <p class="justificado" style="font-size: 12px;">Es así como por ejemplo Atenas, ciudad que brindaba culto a la diosa Palas Atenea, diosa de la sabiduría, la estrategia militar y la civilización, apropiaba características de esta diosa como elementos de la identidad de la Polis. También es conocido el caso de Esparta, ciudad reconocida por sus valientes guerreros, la cual estaba consagrada al culto de Ares, el dios de la guerra</p>
            </div>`;

            $('.generalidades').html(pantalla);
            /*$('.btnredondo').css();*/
            $('.btnredondo').css({'background': '#833C0B'});
            $('.gene1').css({'background': '#B3C6E7'});
            break;
        case 2:
            var pantalla = `
            <div class="col-md-12 row">
                <div style="height: 4px;background: #dd9d37;width: 80%;position: relative;top: 60px;"></div>
                <div><img src="assets/img/img_ova/escritura(2).png" style="max-width: 15%;float: right;"></div>
            </div>
            <div style="padding: 5px 1px 1px 1px; margin-top: 10px;">
                <p class="justificado" style="font-size: 12px;">El campo de la literatura igualmente fue de suma importancia, ya que, por medio de las odas, epopeyas, o diferentes tipos de composiciones poéticas, transmitía de generación en generación las características de sus antepasados, las cuales eran entendidas como modelos de virtud dignos de imitar.</p><br>
                <p class="justificado" style="font-size: 12px;">En este sentido, resalta entre todas las obras la Ilíada y la Odisea, que son atribuidas a Homero. Dichas obras gozaron de un valor importante en la configuración del ideal del comportamiento humano, pues sus personajes considerados héroes como Aquiles, Agamenón, Héctor, Paris, entre otros, por medio de sus acciones o palabras, fueron considerados ejemplos para toda la Hélade (región).</p>
                <p></p>
            </div>`;

            $('.generalidades').html(pantalla);
            $('.btnredondo').css({'background': '#833C0B'});
            $('.gene2').css({'background': '#B3C6E7'});
            break;
        case 3:
            var pantalla = `
            <div class="col-md-12 row">
                <div style="height: 4px;background: #dd9d37;width: 100%;position: relative;top: 30px;"></div>
                <div class="d-flex"><img src="assets/img/img_ova/poesia.png" style="max-width: 20%;float: right;position: relative;" class="mx-auto"></div>
            </div>
            <div style="padding: 5px 1px 1px 1px;">
                <p class="justificado" style="font-size: 12px;">Además, es importante resaltar el valor de los poetas líricos, quienes en sus composiciones exaltaban la esencia del valor en la batalla, la condición fugaz de la existencia humana, la vida exenta de lujos como vía para alcanzar la libertad, ideas de patriotismo o exaltación a los dioses.</p><br>
                <p class="justificado" style="font-size: 12px;">Todo ello hacía de la cultura griega un conjunto de elementos fundamentales que proponían diferentes formas de entender lo humano, siendo así importantes para el desarrollo del humanismo. Gran parte del componente pedagógico y social fue dado por la literatura.</p>
            </div>`;

            $('.generalidades').html(pantalla);
            $('.btnredondo').css({'background': '#833C0B'});
            $('.gene3').css({'background': '#B3C6E7'});
            break;
        case 4:
            var pantalla = `
            <div class="col-md-12 row">
                <div style="height: 4px;background: #dd9d37;width: 100%;position: relative;top: 30px;"></div>
                <div class="d-flex"><img src="assets/img/img_ova/democracia.png" style="max-width: 20%;float: right;position: relative;" class="mx-auto"></div>
            </div>
            <div style="padding: 5px 1px 1px 1px;">
                <p class="justificado" style="font-size: 12px;">Entre los aportes fundamentales de la cultura griega al desarrollo posterior del concepto del humanismo, se encuentra la <b style="background: #833c0b;color: white;border-radius: 5px;">idea de democracia</b> la cual era entendida en un sentido participativo, esto implicaba que los ciudadanos, (hombres libres, en igualdad derechos y del uso de la palabra) decidían de manera directa el curso que tomarían las decisiones públicas.s</p><br>

                <p class="justificado" style="font-size: 12px;">El impacto que supuso tal forma de gobierno se vio manifiesta en la posibilidad que tenían los seres humanos de tomar las propias decisiones que regían sus vidas, además, la educación, en términos de <b style="background: #833c0b;color: white;border-radius: 5px;">Paideia</b> también fue importante para el desarrollo de la idea de ciudadano griego, pues este término hace referencia a la <b style="background: #833c0b;color: white;border-radius: 5px;">transmisión de saberes y valores</b> que los ciudadanos debían poseer. </p>
            </div>`;

            $('.generalidades').html(pantalla);
            $('.btnredondo').css({'background': '#833C0B'});
            $('.gene4').css({'background': '#B3C6E7'});
            break;
        case 5:
            var pantalla = `
            <div class="col-md-12 row">
                <div style="height: 4px;background: #dd9d37;width: 100%;position: relative;top: 30px;"></div>
                <div class="d-flex"><img src="assets/img/img_ova/griego(1).png" style="max-width: 20%;float: right;position: relative;" class="mx-auto"></div>
            </div>
            <div style="padding: 5px 1px 1px 1px;">
                <p class="justificado" style="font-size: 12px;">En ese sentido, el arte, en relación con la filosofía y la escultura fueron un componente elemental para el desarrollo y transmisión de los contenidos considerados esenciales para la cultura griega, delimitando las dimensiones comportamentales del ser humano.</p><br>
                <p class="justificado" style="font-size: 12px;">A su vez, la religión cumplía la misma función, pues los diferentes dioses, los cuales tenían su función simbólica, servían también a los seres humanos para delimitar la base de identidad de una ciudad o estado concreta.</p>
            </div>`;

            $('.generalidades').html(pantalla);
            $('.btnredondo').css({'background': '#833C0B'});
            $('.gene5').css({'background': '#B3C6E7'});
            break;
        case 6:
            var pantalla = `
            <div class="col-md-12 row">
                <div style="height: 4px;background: #dd9d37;width: 90%;position: relative;top: 30px;"></div>
                <div class="d-flex">
                    <div style="width: 90%;" class="d-flex"><img src="assets/img/img_ova/platon.png" style="max-width: 20%;float: right;position: relative;" class="mx-auto"></div>
                    <div class="cursor" style="height: 30px;width: 30px;background: #dd9d37;text-align: center;border-radius: 50%;color: white;font-weight: bold;position: relative;top: 13px;padding: 3px;" onclick="inicio();">X</div>
                </div>
            </div>
            <div style="padding: 5px 1px 1px 1px;">
                <p class="justificado" style="font-size: 12px;">En ese sentido, el arte, en relación con la filosofía y la escultura fueron un componente elemental para el desarrollo y transmisión de los contenidos considerados esenciales para la cultura griega, delimitando las dimensiones comportamentales del ser humano.</p><br>
                <p class="justificado" style="font-size: 12px;">A su vez, la religión cumplía la misma función, pues los diferentes dioses, los cuales tenían su función simbólica, servían también a los seres humanos para delimitar la base de identidad de una ciudad o estado concreta.</p>
            </div>`;

            $('.generalidades').html(pantalla);
            $('.btnredondo').css({'background': '#833C0B'});
            $('.gene6').css({'background': '#B3C6E7'});
            break;
        default:
            break;
    }
}
function p15(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <div class="col-md-4" style="position: relative;top: 40px;left: 50px;z-index: 100;">
                <div class="text-center img1-5" style=""><img src="assets/img/img_ova/griego.png" style="max-width: 35%;"></div>
                <div class="text-center divtextgriego" style="background: #B3C6E7;"><p class="p_black"><b>La cultura griega</b></p></div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-6 pergamino">
                <div class="" style="padding: 50px 44px 24px 29px;">
                    <div style="border: coral;background: #ffffff5c;border-radius: 20px;padding: 10px 10px 10px 10px;">
                        <p class="justificado" style="font-size: 12px;">Al hablar de cultura griega, se hace referencia al conjunto de actividades sociales que abarcan elementos de orden arquitectónico, filosófico, religioso, literario, entre otros. Es importante resaltar la función de la literatura y la religión en el desarrollo del sentido de lo humano, ambos aspectos aportaron herramientas de suma valía en la configuración de la identidad local y general. </p>
                        <i><p>Clic en cada botón para visualizar las generalidades de la cultura griega:</p></i>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="btnredondo cursor gene1" style="background: #B3C6E7;" onclick="generalidades(1);"></div>
                        <div class="btnredondo cursor gene2" onclick="generalidades(2);"></div>
                        <div class="btnredondo cursor gene3" onclick="generalidades(3);"></div>
                        <div class="btnredondo cursor gene4" onclick="generalidades(4);"></div>
                        <div class="btnredondo cursor gene5" onclick="generalidades(5);"></div>
                        <div class="btnredondo cursor gene6" onclick="generalidades(6);"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 generalidades">
                <div style="padding: 25px 1px 1px 1px;">
                    <p class="justificado" style="font-size: 12px;">Las polis griegas eran consideradas ciudades estados, esto es, ciudades que pertenecen a una misma nación, pero que tienen un gobierno independiente, leyes propias y libertad de adoración a un dios particular. </p>
                    <p class="justificado" style="font-size: 12px;">
                        De tal modo, cada ciudad-estado podría configurar sus relaciones sociales por medio de las decisiones políticas y religiosas. En este punto es <b style="background: #833c0b;color: white;border-radius: 5px;">importante señalar la importancia de la religión</b>
                        pues en tanto cada ciudad-estado adoraba a un dios en particular, podía asimilar como propias las características del dios de la ciudad.
                    </p>
                    <p class="justificado" style="font-size: 12px;">Es así como por ejemplo Atenas, ciudad que brindaba culto a la diosa Palas Atenea, diosa de la sabiduría, la estrategia militar y la civilización, apropiaba características de esta diosa como elementos de la identidad de la Polis. También es conocido el caso de Esparta, ciudad reconocida por sus valientes guerreros, la cual estaba consagrada al culto de Ares, el dios de la guerra</p>
                </div>
            </div>`;

            $('.p1-5').html(pantalla);
            break;
        case 2:
            var pantalla = `
            <div class="col-md-12 row">
                <div class="col-md-4 cursor" onclick="p15(1);" >
                    <div class="text-center img1-5" style=""><img src="assets/img/img_ova/griego.png" style="max-width: 35%;"></div>
                    <div class="text-center divtextgriego" style="background: #B3C6E7;"><p class="p_black"><b>La cultura griega</b></p></div>
                </div>
                <div class="col-md-4 cursor" onclick="p15(2);">
                    <div class="text-center img1-5" style=""><img src="assets/img/img_ova/actividad_general.png" style="max-width: 35%;"></div>
                    <div class="text-center divtextgriego" style="background: #F4B081;"><p class="p_black"><b>Actividad sugerida #2 </b></p></div>
                </div>
                <div class="col-md-4 cursor" onclick="p15(3);">
                    <div class="text-center img1-5" style=""><img src="assets/img/img_ova/casco-romano.png" style="max-width: 35%;"></div>
                    <div class="text-center divtextgriego" style="background: #833C0B;"><p class="p_black"><b>La cultura romana </b></p></div>
                </div>
            </div>

            <div class="col-md-12 row" style="height: fit-content;">
                <div class="col-md-2 d-flex">
                    <img src="assets/img/img_ova/multimedia.png" style="width: 100%;position: relative;right: -30px;z-index: 100;" class="my-auto">
                </div>
                <div class="contenedor_activi_1 d-flex p-4 col-md-10" style="min-height: auto; border-radius: 20px; background: #FFE8D1;">
                    <div class="m-auto">
                        <p>Diríjase al ícono de PDF que se encuentra en la parte superior de la pantalla, descargue y realice la lectura correspondiente al texto Humanismo en la antigua Grecia.</p>
                        <div class="d-flex justify-content-end">
                            <div class="row mt-4" style="width: 60%;">
                                <div style="width: 10%;">
                                    <img src="assets/img/img_ova/reloj.png" style="max-width: 100%;">
                                </div>
                                <div style="width: 80%;"><p>Tiempo sugerido: 30 minutos</p></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            `;
            $('.p1-5').html(pantalla);
            break;
        case 3:
            $("#textoclic").addClass('d-none');
            var pantalla = `
            <div class="col-md-4 roma mt-5">

            </div>
            <div class="col-md-8">
                <div class="img-100">
                    <div class="row img-100">
                        <div class="col-md-4 offset-md-4" style="position: relative;top: -30px;z-index: 100;">
                            <div class="text-center img1-5" style=""><img src="assets/img/img_ova/casco-romano.png" style="max-width: 35%;"></div>
                            <div class="text-center divtextgriego" style="background: #833C0B;"><p class="p_black"><b>La cultura romana </b></p></div>
                        </div>
                    </div>
                </div>
                <div class="d-flex" style="margin-top:-65px">
                    <div style="background: #833c0b;height: 4px; width: 90%;"></div>
                    <div class="cursor" style="background: #833c0b;height: 30px;width: 30px;color: #ffffff;text-align: center;padding: 3px;font-weight: bold;border-radius: 50%;position: relative;top: -15px;" onclick="inicio();">x</div>
                </div>
                <div style="z-index: 1000;">
                  <a class="control_next" style="float: right;position: relative;top: 100px;z-index: 1000;"><div style="" class="triag_cambiaslide"></div></a>
                </div>
                <div id="slider" style="" class="d-flex justify-content-center">
                  <ul>
                    <li>
                        <div>
                            <p class="justificado" style="font-size: 12px;">Cabe resaltar que numerosos elementos culturales del contexto romano guardan una estrecha relación con la cultura griega, lo cual se da debido al constante contacto de orden bélico que generaba un vínculo por medio de la esclavitud, pues en dichas contiendas muchos griegos eran llevados a Roma como esclavos, y eran encargados de servir de preceptores a los ciudadanos romanos, y con esto, paulatinamente se va dando un sincretismo de orden cultural.</p>
                            <p class="justificado" style="font-size: 12px;">Un ejemplo concreto de lo anterior es el caso de <b style="background: #833c0b;color: white;border-radius: 5px;">Livio Andrónico</b>, quien fue un esclavo romano de origen griego, a quien se le encargó realizar una traducción de las obras de Homero, y con ello, permitir que los ciudadanos que hacían uso del latín como lengua materna pudieran conocer las hazañas de los grandes héroes griegos, generando un empalme de dioses y aportes culturales.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="justificado" style="font-size: 12px;">Otro punto importante de sincretismo cultural lo ofrece el campo de la filosofía, ya que al gozar de tanta fama y prestigio las escuelas de filosofía de Grecia, era importante para los ciudadanos romanos viajar hasta ese territorio para instruirse en las teorías y saberes que los griegos poseían. Ello generó que gran parte de los filósofos romanos conocieran a profundidad las teorías de Platón y Aristóteles, entre otros importantes filósofos del contexto griego.  </p><br>
                            <div class="row">
                                <div style="width: 60%;">
                                    <i><p class="justificado" style="font-size: 12px;">Clic en el botón para ver resumen de la cultura griega y romana</p></i>
                                </div>
                                <div style="width: 40%;">
                                    <button data-toggle="modal" data-target="#modaltable2" class="btn" style="background: #963900;color: white;font-weight: bold;"><img src="assets/img/img_ova/buscar.png" style="max-width: 10%;position: absolute;margin-left: -45px;" >En síntesis</button>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="justificado" style="font-size: 12px;">En el contexto romano, los aportes también fueron significativos, nuevas formas de gobierno basadas en la república, el uso de la epístola como medio de expresión pedagógica, la profundización y continuación de elementos griegos por medio del sincretismo cultural y nuevas formas de reflexión filosófica ayudaron a dar continuidad a un pensamiento centrado en la condición racional humana. </p><br>
                            <p class="justificado" style="font-size: 12px;"><b style="background: #833c0b;color: white;border-radius: 5px;">Autores como Séneca</b>, quien, por medio de reflexiones sobre la brevedad de la vida, las características del sabio, la condición moral del ser humano y el uso del tiempo libre, delimitaban cada vez más un ambiente que sirve en épocas posteriores a la consolidación de una visión de lo humano. No se pueden dejar de lado los aportes realizados por Cicerón, Quinto Horacio Flaco, e incluso el mismo Marco Aurelio, quienes, desde diferentes campos de conocimiento y expresión artística, hicieron contribuciones relevantes sobre ideas como el orden, la razón, el libre albedrío, las virtudes del ciudadano, el cultivo del intelecto y el disfrute de la vida.</p>

                        </div>
                    </li>
                  </ul>
                </div>
            </div>`;

            $('.p1-5').html(pantalla);
            carrusel();
            break;
        default:
            break;
    }
}

function inicio(){
    var pantalla = `<div class="col-md-12 row">
                        <div class="col-md-4 cursor" onclick="p15(1);" >
                            <div class="text-center img1-5" style=""><img src="assets/img/img_ova/griego.png" style="max-width: 35%;"></div>
                            <div class="text-center divtextgriego" style="background: #B3C6E7;"><p class="p_black"><b>La cultura griega</b></p></div>
                        </div>
                        <div class="col-md-4 cursor" onclick="p15(2);">
                            <div class="text-center img1-5" style=""><img src="assets/img/img_ova/actividad_general.png" style="max-width: 35%;"></div>
                            <div class="text-center divtextgriego" style="background: #F4B081;"><p class="p_black"><b>Actividad sugerida #2 </b></p></div>
                        </div>
                        <div class="col-md-4 cursor" onclick="p15(3);">
                            <div class="text-center img1-5" style=""><img src="assets/img/img_ova/casco-romano.png" style="max-width: 35%;"></div>
                            <div class="text-center divtextgriego" style="background: #833C0B;"><p class="p_black"><b>La cultura romana </b></p></div>
                        </div>
                    </div>`;
    $('.p1-5').html(pantalla);
}
function pantallas16(num){
    switch (parseInt(num)) {
        case 0:
            $('.pantallas16').html('');
            break;
        case 1:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">El pedagogo brasileño Paulo Freire, quien ha sido uno de los principales exponentes de la pedagogía crítica latinoamericana, considera que “(...) la función principal de la educación es hacer personas libres y autónomas, capaces de analizar la realidad que les rodea, participando en ella y transformándola” (Ayuste, 2006, p. 42).</p>
            </div>`;

            $('.pantallas16').html(pantalla);
            break;
        case 2:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Y que a partir de esa educación, el concepto de liberación cobra toda significancia posible tanto  desde  el  punto de vista de las ciencias sociales como en las aplicadas, especialmente para el particular de este trabajo, la contabilidad.</p>
            </div>`;

            $('.pantallas16').html(pantalla);
            break;
        case 3:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Siguiendo con Gómez (2012) Las disciplinas científicas, incluso aquellas que se especializan en problemas de conocimientos tecnológicos y técnicos, requieren una comprensión del medio en el cual se desata la transmisión de saberes, de tal forma que pueda desarrollarse favorablemente el proceso.</p>
            </div>`;

            $('.pantallas16').html(pantalla);
            break;
        case 4:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Lo anterior implica un estudio juicioso y comprometido de quienes aprenden, enseñan y educan de forma coherente con las necesidades de la sociedad y no únicamente con aquellas derivadas del mercado de capitales.</p>
            </div>`;

            $('.pantallas16').html(pantalla);
            break;
        case 5:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Según lo expresado por Sánchez (2015) la necesidad de profesionalización contable es producto de esfuerzos gremiales y gubernamentales por otorgar el estatus de saber disciplinar a la contabilidad; su marcado uso en el mundo de los negocios y el tecnicismo asociado a su práctica, ha  legado la percepción social de la contabilidad como saber hacer en contraposición a la concepción social del saber contable.</p>
            </div>`;

            $('.pantallas16').html(pantalla);
            break;
        case 6:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">En tanto resultado de las dinámicas y modificaciones en las relaciones sociales y económicas, la contabilidad se encuentra convocada a mejorar sus conceptualizaciones, formas de representación, medición y presentación, que complementen más que sustituyan las financieras tradicionales.</p>
            </div>`;

            $('.pantallas16').html(pantalla);
            break;
        default:
            break;
    }
}
// slide
function carrusel(){


    $('#checkbox').change(function(){
        setInterval(function () {
            moveRight(s);
        }, 3000);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: '100%', height: '300px' });

    $('#slider ul').css({ width: '70%'});

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
}


function renasentismo(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <div class="text-center m-auto px-5">
                <p class="justificado p_black">El humanismo florece en el renacimiento. El ser humano, después de estar sometido a las determinaciones de la iglesia, fija la vista en sí mismo y en la historia para comenzar a rescatar algunos pensamientos que sirvan para dar nueva forma a una época, y con ello a su ser en el mundo. </p>
            </div>`;

            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif2').css({'visibility': 'visible'});
            break;
        case 2:
            var pantalla = `
            <div class="text-center m-auto px-5">
                <p class="justificado p_black" style="font-size: 12px;">La relectura de los filósofos clásicos griegos ayuda a restaurar la visión del ser humano como un ser racional, y es allí donde se enfocan los esfuerzos de la cultura en instaurar el reinado de la razón. Lentamente se van dejando de lado muchas de las visiones medievales sobre la naturaleza concedida del ser humano, para dar nuevamente respuesta a la pregunta por la naturaleza del ser del hombre. A medida que la racionalidad se instaura como referencia de humanidad, comienzan a darse una serie de cambios socioculturales que elevarán la posición del ser humano en sus diferentes dimensiones.</p>
            </div>`;

            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif3').css({'visibility': 'visible'});
            break;
        case 3:
            var pantalla = `
            <div class="text-center m-auto px-5">
                <p class="justificado p_black" style="font-size: 12px;">Se comienza a buscar una serie de nuevos saberes en los campos de la filosofía, las ciencias físicas, las ciencias naturales y la astronomía, lo cual sirvió para comprender la vida y el mundo desde una nueva posición. El ser humano se desligó de los imperativos éticos religiosos, para dar paso a una ética de carácter intelectualista, basados también en la función de la razón como elemento rector de la vida. Paulatinamente fue surgiendo un optimismo existencial, pues se pensaba que el ser humano podía ser el dueño de su destino, y que la razón sería la llave que abriría la puerta de la verdad universal, se piensa que la naturaleza humana puede ser concebida en términos de cultura. </p>
            </div>`;

            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif4').css({'visibility': 'visible'});
            break;
        case 4:
            var pantalla = `
            <div class="text-center m-auto px-5">
                <p class="justificado p_black" style="font-size: 12px;">Surgen pensadores como Immanuel Kant, quien veía al hombre como un ser dotado de razón, capaz de conocer la realidad por medio de ella, este pensador señaló también que la razón llevaría al hombre a la emancipación, una vez secularizado, libre de las ataduras de la ignorancia, podría alcanzar la ilustración. A su vez, indicó que no conocemos las cosas en sí mismas, sino que las conocemos mediatizadas por nuestro sistema de conocimiento experiencial, no vemos el mundo, vemos nuestro mundo.</p>
            </div>`;

            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif5').css({'visibility': 'visible'});
            break;
        case 5:
            var pantalla = `
            <div class="text-center m-auto px-5">
                <p class="justificado p_black" style="font-size: 12px;">En un texto llamado, respuesta a la pregunta ¿Qué es la ilustración?, Kant (1989) nos cuenta que el hombre es libre y tiene la capacidad de razonar, de pensar por sí mismo; pero prefiere no hacerlo ya que tal vez no lo encuentra necesario, no tiene que cuestionarse la idea de dios o preguntarse de donde viene y cuál es su destino, pues su religión se lo dice, lo determina. Lo que implica que el ser humano debe hacer uso de la razón, pensar por sí mismo, para alcanzar su verdadera potencia y nivel de desarrollo. </p>
            </div>`;

            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif6').css({'visibility': 'visible'});
            break;
        case 6:
            var pantalla = `
            <div class="text-center m-auto px-5">
                <p class="justificado p_black" style="">Es así como una gran cantidad de teorías sobre la formación humana proponen que el sujeto debe generar un tránsito en sí, para sí y en relación con el mejoramiento de la cultura en la cual se desenvuelve, con lo que puede adquirir su verdadero valor. </p>
            </div>`;

            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif7').css({'visibility': 'visible'});
            break;
        case 7:
            var pantalla = `
            <div class="text-center m-auto px-5">
            <img src="assets/img/img_ova/humanismo-renacentista.png" style="max-width: 90%; border-radius: 150px;">
            </div>`;
            $('.circulop-19').html(pantalla);
            $('.escondido1').css({'visibility': 'hidden'});
            $('.gif1').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}


function revolucion(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <div class="col-md-12 row">
                <div class="col-md-5" style="height: 50px;">
                    <div class="row dna1" style="">
                        <div style="width: 25%;"><img src="assets/img/img_ova/dinamica.png" style="max-width: 70%;"></div>
                        <div style="width: 75%;padding: 0px 0px 10px 2px;"><p class="color-text"><b>Dinámica laboral y social</b></p></div>
                    </div>
                </div>
                <div class="col-md-7 row d-flex" style="height: 50px;">
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto" onclick="dinacircles(1);"></div>
                    </div>
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto" onclick="dinacircles(2);"></div>
                    </div>
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto" onclick="dinacircles(3);"></div>
                    </div>
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto d-flex" onclick="dinacircles(4);"><b class="m-auto p_white">X</b></div>
                    </div>
                    <div class="col-md-12 my-auto row lineadina" style="z-index: 2;">
                        <div style=""></div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 dinacircles">
                <p class="justificado" style="font-size: 14px;">
                    De la misma manera La Revolución Industrial implicó cambios en la dinámica laboral y social, pues para  para generar acción en las fábricas se requería que las personas permanecieran allí gran parte de su jornada.
                </p>
            </div>`;

            $('.revolucion').html(pantalla);
            break;
        case 2:
            var pantalla = `
            <div class="col-md-12 row">
                <div class="col-md-5" style="height: 50px;">
                    <div class="row dna1" style="">
                        <div style="width: 25%;"><img src="assets/img/img_ova/burguesia.png" style="max-width: 70%;"></div>
                        <div style="width: 75%;padding: 10px 0px 10px 2px;"><p class="color-text"><b>La Burguesía</b></p></div>
                    </div>
                </div>
                <div class="col-md-7 row d-flex" style="height: 50px;">
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto" onclick="burgecircles(1);"></div>
                    </div>
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto" onclick="burgecircles(2);"></div>
                    </div>
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto" onclick="burgecircles(3);"></div>
                    </div>
                    <div class="col-md-3 my-auto p-0" style="z-index: 5;">
                        <div class="btnsdina cursor ml-auto d-flex" onclick="burgecircles(4);"><b class="m-auto p_white">X</b></div>
                    </div>
                    <div class="col-md-12 my-auto row lineadina" style="z-index: 2;">
                        <div style=""></div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 burgecircles">
                <p class="justificado" style="font-size: 14px;">
                    La burguesía tomó tanta fuerza, que, como comenta Galbiatti (s.f) logró desalojar a la nobleza, y dándose también otros casos donde la industrialización se globalizó y no se desalojó la clase noble ni el clero, sino que se llegó a compartir el poder.
                </p>
            </div>`;

            $('.revolucion').html(pantalla);
            break;
        default:
            break;
    }
}

function dinacircles(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <p class="justificado"bstyle="font-size: 14px;">
                De la misma manera La Revolución Industrial implicó cambios en la dinámica laboral y social, pues para  para generar acción en las fábricas se requería que las personas permanecieran allí gran parte de su jornada.
            </p>`;

            $('.dinacircles').html(pantalla);
            break;
        case 2:
            var pantalla = `
            <p class="justificado" style="font-size: 14px;">
                Se inicia entonces el surgimiento de nuevos grupos sociales como por ejemplo la clase <b>obrera </b>que recibía el sustento del salario pagado por su trabajo en la fábrica.
            </p>`;

            $('.dinacircles').html(pantalla);
            break;
        case 3:
            var pantalla = `
            <p class="justificado" style="font-size: 14px;">
                Otro grupo sería una modificación del ya existente burguesía, aquí se conocerían como la <b>burguesía industrial</b>, que se constituía por los dueños de las fábricas y máquinas y eran quienes determinaban las formas de trabajo para sus empleados, los pagos, el costo de sus productos y demás, sin necesidad de consultarlo con otros.
            </p>`;

            $('.dinacircles').html(pantalla);
            break;
        case 4:
            var pantalla = `
            <div class="col-md-6 d-flex justify-content-center">
                <div>
                    <div class="text-center"><img src="assets/img/img_ova/dinamica.png" style="max-width: 40%;"></div>
                    <div class="dinamica cursor" onclick="revolucion(1);" style="">
                        <p class="color-text" style="font-weight: bold;">Dinámica laboral y social</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
                <div>
                    <div class="text-center"><img src="assets/img/img_ova/burguesia.png" style="max-width: 50%;"></div>
                    <div class="dinamica2 cursor" onclick="revolucion(2);" style="">
                        <p class="color-text" style="font-weight: bold;">La Burguesía</p>
                    </div>
                </div>
            </div>`;

            $('.revolucion').html(pantalla);
            break;
        default:
            break;
    }
}
function burgecircles(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <p class="justificado">
                La burguesía tomó tanta fuerza, que, como comenta Galbiatti (s.f) logró desalojar a la nobleza, y dándose también otros casos donde la industrialización se globalizó y no se desalojó la clase noble ni el clero, sino que se llegó a compartir el poder.
            </p>`;

            $('.burgecircles').html(pantalla);
            break;
        case 2:
            var pantalla = `
            <p class="justificado">
                Esta población burguesa industrial, sería la que le daría vigor al capitalismo como forma de economía.
            </p>`;

            $('.burgecircles').html(pantalla);
            break;
        case 3:
            var pantalla = `
            <p class="justificado">
                No obstante, era un aspecto que mostraba grandes desventajas, principalmente en la clase obrera que se sometía al trabajo por jornadas realmente extensas.
            </p>`;

            $('.burgecircles').html(pantalla);
            break;
        case 4:
            var pantalla = `
            <div class="col-md-6 d-flex justify-content-center">
                <div>
                    <div class="text-center"><img src="assets/img/img_ova/dinamica.png" style="max-width: 40%;"></div>
                    <div class="dinamica cursor" onclick="revolucion(1);" style="">
                        <p class="color-text" style="font-weight: bold;">Dinámica laboral y social</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
                <div>
                    <div class="text-center"><img src="assets/img/img_ova/burguesia.png" style="max-width: 50%;"></div>
                    <div class="dinamica2 cursor" onclick="revolucion(2);" style="">
                        <p class="color-text" style="font-weight: bold;">La Burguesía</p>
                    </div>
                </div>
            </div>`;

            $('.revolucion').html(pantalla);
            break;
        default:
            break;
    }
}

function francesa(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <p class="justificado p_black" style="font-size: 12px; margin-top: -45%">Cansados de las limitaciones para acceder a determinados privilegios y bajo un mandato que, en un periodo cambiante, se mostraba inflexible por no responder a las necesidades del pueblo y por ende generar estancamiento en la sociedad (Valenzuela, 2008), la clase burgués de Francia decide alzarse en contra de la nobleza y el clero, pero reconocía su condición de desventaja, lo que le lleva a unir fuerzas con las clases populares que también tenían el anhelo de luchar por la igualdad. Esta revolución, según Valenzuela (2008) dio lugar al surgimiento de nuevos grupos como los gremios, las corporaciones, las ligas y otros.</p>`;

            $('.francesa').html(pantalla);

            $('.cuerpoflecha').removeClass('cuerpoactive');
            $('.triaflecha').removeClass('triactive');
            $('.cuerpoflecha').addClass('fondocuerpo');
            $('.triaflecha').addClass('fondotria');

            $('.cuerpo1').removeClass('fondocuerpo');
            $('.triafle1').removeClass('fondotria');
            $('.cuerpo1').addClass('cuerpoactive');
            $('.triafle1').addClass('triactive');
            break;
        case 2:
            var pantalla = `
            <p class="justificado p_black" style="font-size: 12px; margin-top: -40%">De la misma manera dio lugar a un nuevo funcionamiento económico que incluía la concepción de préstamos, letras de cambio y créditos, lo que, se alineaba a ese nuevo movimiento capitalista que ya había surgido en Inglaterra. Así mismo, señala Valenzuela (2008) que La Revolución Francesa propició la constitución de universidades como respuesta de la necesidad de educación.</p>`;

            $('.francesa').html(pantalla);
            $('.cuerpoflecha').removeClass('cuerpoactive');
            $('.triaflecha').removeClass('triactive');
            $('.cuerpoflecha').addClass('fondocuerpo');
            $('.triaflecha').addClass('fondotria');

            $('.cuerpo2').removeClass('fondocuerpo');
            $('.triafle2').removeClass('fondotria');
            $('.cuerpo2').addClass('cuerpoactive');
            $('.triafle2').addClass('triactive');
            break;
        case 3:
            var pantalla = `
            <p class="justificado p_black" style="font-size: 12px; margin-top: -45%;">Aunque esta revolución generó impacto en lo económico y político, se muestra como eje principal el afectar el pensamiento del individuo, de allí que se conozca el enunciado de <b>“todos los hombres nacen libres e iguales ante la ley”</b> (Argentina. Ministerio de Educación de la Nación, 2015). Por este modo de pensar, el clero tuvo que ceder el poder al Estado, pasando a quedar subordinado y dando inicio al proceso de <b>separación entre iglesia y Estado</b>, lo cual permitiría el surgimiento de lo conocido como <b>libertad de culto y de expresión.</b></p>`;

            $('.francesa').html(pantalla);
            $('.cuerpoflecha').removeClass('cuerpoactive');
            $('.triaflecha').removeClass('triactive');
            $('.cuerpoflecha').addClass('fondocuerpo');
            $('.triaflecha').addClass('fondotria');

            $('.cuerpo3').removeClass('fondocuerpo');
            $('.triafle3').removeClass('fondotria');
            $('.cuerpo3').addClass('cuerpoactive');
            $('.triafle3').addClass('triactive');
            break;

        default:
            break;
    }
}


function cambiatargeta(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <div class="d-flex justify-content-center">
                <div class="targetaverde" style="">Abarcar el tema de educación a profundidad no sería posible, pues compromete diversos escenarios que desviarían el propósito; sin embargo, se buscará realizar un acercamiento desde el punto de vista que implica la educación superior o universitaria; en este sentido, como lo menciona el autor Esquivel (2004), educar contempla elementos como la vida misma, el pensamiento del ser humano y la cultura que le rodea, todo orientado hacía un fin superior, que es aportar al desarrollo del ser.</div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="senal" style=""></div>
            </div>`;
            var libro = `<div class="text-center">
                            <img src="assets/img/img_ova/cerebro.png" style="max-width: 50%;">
                        </div>`;
            $('.estudio').html(pantalla);
            $('.libro').html(libro);
            break;
        case 2:
            var pantalla = `
            <div class="d-flex justify-content-center">
                <div class="targetaverde" style="">Cabe enfatizar, que educar tiene sentido en tanto involucra el desarrollo del ser de un individuo, Esquivel (2004) señala que, se es en la medida en que se educa, ya que el proceso de educar se dirige a contribuir en una consciencia voluntaria de la persona que le permite adquirir entendimiento sobre él mismo, lo que se orienta a desarrollar su capacidad de pensamiento, gestar su esfera emocional y por ende ser consciente y responsable en su actuar; sintetizado todo esto en su capacidad de ser y en posibilitar el relacionamiento con él, con el otro y con su entorno.</div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="senal" style=""></div>
            </div>`;

            var estudio = `<div class="text-center">
                                <img src="assets/img/img_ova/estudio.png" style="max-width: 50%;">
                            </div>`;
            $('.libro').html(pantalla);
            // $('.estudio').html(estudio);
            break;
        case 3:
            var estudio = `<div class="text-center">
                                <img src="assets/img/img_ova/estudio.png" style="max-width: 50%;">
                            </div>`;
            var libro = `<div class="text-center">
                            <img src="assets/img/img_ova/cerebro.png" style="max-width: 50%;">
                        </div>`;
            $('.estudio').html(estudio);
            $('.libro').html(libro);
            break;
        default:
            break;
    }
}

function cambiatargeta2(num){
    switch (parseInt(num)) {
        case 1:
            var pantalla = `
            <div class="d-flex justify-content-center">
                <div class="targetaverde" style="">
                    <div class="content custom-scrollbar10">
                        <div class="custom-scrollbar__inner10">
                            <p class="justificado">Al entender lo anterior, es explícito que la esfera social y cultural se ven afectadas desde el campo de la educación, ya que en la manera en que el ser humano se defina (su ser) terminará resolviendo los parámetros de su modo de existir, habitar y convivir, lo que afectará sustancialmente la cultura y sociedad; sin embargo, funciona igual en lo contrario, pues también la cultura y sociedad van señalando el ciudadano que se pretende formar; como se vio en diferentes momentos de la historia, pasa desde la formación de un individuo que logre sujetarse a los mandatos de otros sin hacer uso de su razón y limitándose a obedecer, hasta el desarrollo de un individuo capaz de pensar y decidir por sí mismo para contribuir al avance de su sociedad y cultura; por ende, el ciudadano que se desee formar diferirá tanto del momento histórico, como de la cultura, que en cada región puede presentar variaciones. Por lo anterior, educación y cultura estarían interrelacionados, influyendo una en la otra</p>
                        </div>
                        <div class="custom-scrollbar__bar10">
                            <div class="custom-scrollbar__knob10 cursor">
                              <p class="text-center linea_scroll10">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="senal" style=""></div>
            </div>`;

            var hablar = `<div class="text-center">
                            <img src="assets/img/img_ova/hablar.png" style="max-width: 50%;">
                        </div>`;

            $('.diversidad').html(pantalla);

            $('.hablar').html(hablar);
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob10');
            bar = document.querySelector('.custom-scrollbar__bar10');
            container = document.querySelector('.custom-scrollbar__inner10');
            scroll();
            break;
        case 2:
            var pantalla = `
            <div class="d-flex justify-content-center">
                <div class="targetaverde" style="">
                    <div class="content custom-scrollbar11">
                        <div class="custom-scrollbar__inner11">
                            <p class="justificado">En síntesis, el valor de la educación es otorgado desde su función de contribuir al desarrollo del ser, lo cual va ligado a lo cultural, que define el tipo de individuo procurado, lo cual en la actualidad es pretender la formación de un individuo que, a través de comprender su ser logra generar transformaciones relevantes en el momento histórico que se encuentra; es así, como el declive de la humanidad, podría señalar una necesidad de ajuste desde el proceso educativo, lo que haría necesario replantear si se están involucrando valores supremos como el amor, la libertad, la igualdad, el desarrollo de la voluntad, la capacidad de decisión; pues todo esto afecta incluso en los derechos humanos que rigen la sociedad. Así, aunque la educación señala un proceso individual, inevitablemente repercutirá en la esfera social y cultural.</p>
                        </div>
                        <div class="custom-scrollbar__bar11">
                            <div class="custom-scrollbar__knob11 cursor">
                              <p class="text-center linea_scroll11">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="senal" style=""></div>
            </div>`;

            var diversidad = `
            <div class="d-flex justify-content-center">
                <div class="targetaverde" style="">
                    <div class="content custom-scrollbar10">
                        <div class="custom-scrollbar__inner10">
                            <p class="justificado">Al entender lo anterior, es explícito que la esfera social y cultural se ven afectadas desde el campo de la educación, ya que en la manera en que el ser humano se defina (su ser) terminará resolviendo los parámetros de su modo de existir, habitar y convivir, lo que afectará sustancialmente la cultura y sociedad; sin embargo, funciona igual en lo contrario, pues también la cultura y sociedad van señalando el ciudadano que se pretende formar; como se vio en diferentes momentos de la historia, pasa desde la formación de un individuo que logre sujetarse a los mandatos de otros sin hacer uso de su razón y limitándose a obedecer, hasta el desarrollo de un individuo capaz de pensar y decidir por sí mismo para contribuir al avance de su sociedad y cultura; por ende, el ciudadano que se desee formar diferirá tanto del momento histórico, como de la cultura, que en cada región puede presentar variaciones. Por lo anterior, educación y cultura estarían interrelacionados, influyendo una en la otra</p>
                        </div>
                        <div class="custom-scrollbar__bar10">
                            <div class="custom-scrollbar__knob10 cursor">
                              <p class="text-center linea_scroll10">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="senal" style=""></div>
            </div>`;
            $('.hablar').html(pantalla);
            // $('.diversidad').html(diversidad);
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob11');
            bar = document.querySelector('.custom-scrollbar__bar11');
            container = document.querySelector('.custom-scrollbar__inner11');
            scroll();
            break;
        case 3:
            var estudio = `<div class="text-center">
                                <img src="assets/img/img_ova/diversidad.png" style="max-width: 50%;">
                            </div>`;
            var libro = `<div class="text-center">
                            <img src="assets/img/img_ova/hablar.png" style="max-width: 50%;">
                        </div>`;
            $('.diversidad').html(estudio);
            $('.hablar').html(libro);
            break;
        default:
            break;
    }
}

function pantalla2_1(num){
  switch (parseInt(num)) {
      case 1:
          var text = ` <div class="col-md-3 d-flex" style= "margin-top: 5rem;">
          <img src="assets/img/img_ova/unido.png" style="max-width: 100%;" class="mx-auto mb-auto">
      </div>
      <div class="col-md-9">
          <p class="justificado" style="margin-top: 15%;">
              Rodríguez (2018) cita a Vygotsky para señalar que la educación es un proceso mediador entre lo histórico-cultural y el desarrollo del ser humano, ejerciendo como función principal la transferencia de conocimientos y experiencias que la historia y la cultura han generado a lo largo del tiempo, facilitando que un estudiante pueda revivir y reconstruir sucesos de tiempos pasados al desempeñar un papel activo.
          </p>
      </div>`;
          $('.avance_blanco').removeClass('activa');
          $('.nav1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na1').removeClass('inactivo');
          $('.na1').addClass('encendido');

          $('.cont2_1').html(text);
          break;
      case 2:
          var text = `<div class="col-md-3 d-flex" style= "margin-top: 5rem;">
                            <img src="assets/img/img_ova/educacion-en-linea.png" style="max-width: 100%;" class="mx-auto mb-auto">
                        </div>
                        <div class="col-md-9" style="margin-top: 10%;">
                            <div class="content custom-scrollbar19">
                                <div class="custom-scrollbar__inner19">
                                    <p class="justificado">Con la definición anterior, pareciera que la educación se detiene en proporcionar conocimiento e información en campos específicos, como es el caso de la educación superior, instruyendo para aprobar evaluaciones, avanzar en los niveles establecidos y finalmente obtener un título que les haga aptos para iniciar su vida laboral; no obstante, autores como Esquivel (2004) señalan que educar debe adjudicar la formación a su proceso, pues esta no se limita a instruir para el sistema económico o político, sino que considera las diferentes esferas mencionadas (amor, libertad, consciencia, afectividad, capacidad de decisión, juicio crítico, desarrollo del ser, etc.) que incumben al ser humano y lo contempla como un ser integral, por ende propone una formación igualmente integral donde además el estudiante posea la capacidad de poner en práctica el conocimiento obtenido.</p>
                                    <p class="justificado">Esquivel (2004) reconoce que educar contempla lo pragmático y utilitario requerido por los países; sin embargo, señala que no debería ser lo fundamental, sino que se integre al proceso de educación-formación, apuntando que, cuando la educación se centra en lo utilitario, repercute en una postura egoísta que deja de lado los valores fundamentales para el desarrollo de la persona.
                                    Es así, como la universidad aparece en un rol de agente facilitador del proceso educativo que contribuye a la realización del ser humano y que propende por incluir en su proceso, aspectos como lo cognitivo, lo moral, lo emocional, lo social e incluso lo físico; desarrollando en cada estudiante un juicio crítico que le permita analizar las coyunturas de un escenario, para tomar posición; de esta manera el estudiante logra saber, pensar, razonar, observar, valorar y exponer su posición con argumentos que le sustentan. Igualmente, al formarle de manera íntegra, se le suscitan anhelos de cambio y transformación que contribuyen al avance y progreso de sí mismo y de la sociedad.
                                    </p>
                                </div>
                                <div class="custom-scrollbar__bar19">
                                    <div class="custom-scrollbar__knob19 cursor">
                                      <p class="text-center linea_scroll19">-</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
          $('.avance_blanco').removeClass('activa');
          $('.nav2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2').removeClass('inactivo');
          $('.na2').addClass('encendido');

          $('.cont2_1').html(text);
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob19');
            bar = document.querySelector('.custom-scrollbar__bar19');
            container = document.querySelector('.custom-scrollbar__inner19');
            scroll();
          break;
      case 3:
          var text = `<div class="col-md-3 d-flex" style= "margin-top: 5rem;">
                        <img src="assets/img/img_ova/derecho-a-la-educacion.png" style="max-width: 100%;" class="mx-auto mb-auto">
                    </div>
                    <div class="col-md-9">
                        <p class="justificado" style="margin-top: 20%;">Como lo plantean Ramos y López (s.f.), la educación se enfrenta al reto de formar personas capacitadas para la vida y la convivencia en armonía, que sean poseedoras de iniciativas transformadoras, empleando su imaginación y generando cambios innovadores.</p>
                    </div>`;
          $('.avance_blanco').removeClass('activa');
          $('.nav3').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na3').removeClass('inactivo');
          $('.na3').addClass('encendido');

          $('.cont2_1').html(text);
          break;

      default:
          break;
  }
}

function paraIframe(num){
    switch (parseInt(num)) {
        case 0:
            $('.vid').attr('src', $('.vid').attr('src'));
            break;
        case 1:
            $('.vid1').attr('src', $('.vid1').attr('src'));
            break;
        case 2:
            $('.vid2').attr('src', $('.vid2').attr('src'));
            break;
        case 3:
            $('.vid3').attr('src', $('.vid3').attr('src'));
            break;
        case 4:
            $('.vid4').attr('src', $('.vid4').attr('src'));
            break;
        case 5:
            $('.vid5').attr('src', $('.vid5').attr('src'));
            break;
        case 6:
            $('.vid6').attr('src', $('.vid6').attr('src'));
            break;
        default:
            break;
    }

}