$( document ).ready(function() {
    // console.log(tema);
    $( ".zoomContainer" ).remove();
    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $('.carousel').carousel('pause');
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
    $(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);

    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
        actualizarprogress();

    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
        actualizarprogress();
    });
    slide_link(tema);
    
    /*setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");*/

    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".teoria").on('click' , teorias);
    /*
    $(".modal_scroll2").on('click', modal_scroll2);
    $(".modal_scroll3").on('click', modal_scroll3);
    $(".modal_scroll4").on('click', modal_scroll4);*/
    /*$(".unidad1-1").on('click', slide_link);
    $(".unidad1-5").on('click', slide_link);
    $(".unidad1-6_paso1").on('mouseover', unidad1_pantalla6_accion1);
    $(".unidad1-6_paso3").on('mouseover', unidad1_pantalla6_accion3);
    $(".unidad1-6_paso1").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso2").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso3").on('mouseleave', unidad1_pantalla6_accion4);*/

    /*scroll();*/
    


});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex+1);
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
    
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}
var sumaslide = 0;
var sumaslide1 = 0;
var sumaslide2 = 0;
var sumaslide3 = 0;
var sumaslide4 = 0;
var sumaslide5 = 0;
var sumaslide6 = 0;
var sumaslide7 = 0;
var sumaslide8 = 0;
function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            arco(4);
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 2:
            $(".i1").html('')   
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];
            var i = new Input(8);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(9);
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
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 3:
            sumaslide++;
            if (sumaslide < 2) {
                var slideCount = $('#slider2 ul li').length;
                var slideWidth = $('#slider2 ul li').width();
                var slideHeight = $('#slider2 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider2').css({ width: '100%', height: '430px' });
                
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

                $('a.control_prev2').click(function (e) {
                    moveLeft2();
                    e.preventDefault();
                });

                $('a.control_next2').click(function (e) {
                    moveRight2();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 7:
            sumaslide1++;
            if (sumaslide1 < 2) {
                var slideCount = $('#slider3 ul li').length;
                var slideWidth = $('#slider3 ul li').width();
                var slideHeight = $('#slider3 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider3').css({ width: '100%', height: '200px' });
                
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

                $('a.control_prev3').click(function (e) {
                    moveLeft3();
                    e.preventDefault();
                });

                $('a.control_next3').click(function (e) {
                    moveRight3();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 10:
            $(".i3").html('')   
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];
            var i = new Input(4);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(9);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
              (function(n) {
                inputsRy[n].input.addEventListener("input", function() {
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 12:
            sumaslide2++;
            if (sumaslide2 < 2) {
                var slideCount = $('#slider4 ul li').length;
                var slideWidth = $('#slider4 ul li').width();
                var slideHeight = $('#slider4 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider4').css({ width: '100%', height: '370px' });
                
                $('#slider4 ul').css({ width: '90%'});
                
                $('#slider4 ul li:last-child').prependTo('#slider4 ul');

                function moveLeft4() {
                    $('#slider4 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider4 ul li:last-child').prependTo('#slider4 ul');
                        $('#slider4 ul').css('left', '');
                    });
                };

                function moveRight4() {
                    $('#slider4 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider4 ul li:first-child').appendTo('#slider4 ul');
                        $('#slider4 ul').css('left', '');
                    });
                };

                $('a.control_prev4').click(function (e) {
                    moveLeft4();
                    e.preventDefault();
                });

                $('a.control_next4').click(function (e) {
                    moveRight4();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 13:
            
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 14:
            sumaslide3++;
            if (sumaslide3 < 2) {
                var slideCount = $('#slider5 ul li').length;
                var slideWidth = $('#slider5 ul li').width();
                var slideHeight = $('#slider5 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider5').css({ width: '100%', height: '300px' });
                
                $('#slider5 ul').css({ width: '90%'});
                
                $('#slider5 ul li:last-child').prependTo('#slider5 ul');

                function moveLeft5() {
                    $('#slider5 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider5 ul li:last-child').prependTo('#slider5 ul');
                        $('#slider5 ul').css('left', '');
                    });
                };

                function moveRight5() {
                    $('#slider5 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider5 ul li:first-child').appendTo('#slider5 ul');
                        $('#slider5 ul').css('left', '');
                    });
                };

                $('a.control_prev5').click(function (e) {
                    moveLeft5();
                    e.preventDefault();
                });

                $('a.control_next5').click(function (e) {
                    moveRight5();
                    e.preventDefault();
                });
            }
            scroll_(8);
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 18:
            sumaslide4++;
            if (sumaslide4 < 2) {
                var slideCount = $('#slider6 ul li').length;
                var slideWidth = $('#slider6 ul li').width();
                var slideHeight = $('#slider6 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider6').css({ width: '100%', height: '350px' });
                
                $('#slider6 ul').css({ width: '100%'});
                
                $('#slider6 ul li:last-child').prependTo('#slider6 ul');

                function moveLeft6() {
                    $('#slider6 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider6 ul li:last-child').prependTo('#slider6 ul');
                        $('#slider6 ul').css('left', '');
                    });
                };

                function moveRight6() {
                    $('#slider6 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider6 ul li:first-child').appendTo('#slider6 ul');
                        $('#slider6 ul').css('left', '');
                    });
                };

                $('a.control_prev6').click(function (e) {
                    moveLeft6();
                    e.preventDefault();
                });

                $('a.control_next6').click(function (e) {
                    moveRight6();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 20:
            
            alert('antes');
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","La fuerza y las leyes de Newton");
            break;
        case 21:
            
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en movimiento");
            break;
        case 22:
            paraIframe(0);
            /*pausevideo(1);*/ 
            carruseles(1);
            $( ".zoomContainer" ).remove();
            $('.zoom_img').elevateZoom({zoomWindowPosition: 15});
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en movimiento");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en movimiento");
            break;
        case 24:
            paraIframe(0);
            /*pausevideo(1);*/
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en movimiento");
            break;
        case 25:
            $( ".zoomContainer" ).remove();
            $('.zoom_img').elevateZoom({zoomWindowPosition: 11});
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 26:
            sumaslide8++;
            if (sumaslide8 < 2) {
                var slideCount = $('#slider10 ul li').length;
                var slideWidth = $('#slider10 ul li').width();
                var slideHeight = $('#slider10 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider10').css({ width: '100%', height: '390px' });
                
                $('#slider10 ul').css({ width: '100%'});
                
                $('#slider10 ul li:last-child').prependTo('#slider10 ul');

                function moveLeft10() {
                    $('#slider10 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider10 ul li:last-child').prependTo('#slider10 ul');
                        $('#slider10 ul').css('left', '');
                    });
                };

                function moveRight10() {
                    $('#slider10 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider10 ul li:first-child').appendTo('#slider10 ul');
                        $('#slider10 ul').css('left', '');
                    });
                };

                $('a.control_prev10').click(function (e) {
                    moveLeft10();
                    e.preventDefault();
                });

                $('a.control_next10').click(function (e) {
                    moveRight10();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 31:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje","1. Leyes de movimiento","Análisis de los cuerpos en equilibrio");
            break;
        default:
            break;
    }
}

function modal_scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}

function arco(num){
    switch (parseInt(num)) {
        case 1:
            $('.btn-arco').addClass('btn-arc-inactive');
            $('.btn-arco').removeClass('btn-arc-active');

            $('.btn-arc-1').removeClass('btn-arc-inactive');
            $('.btn-arc-1').addClass('btn-arc-active');

            $('.text-arco').addClass('invisible');
            $('.text-arco').removeClass('visible');

            $('.text-arc-1').removeClass('invisible');
            $('.text-arc-1').addClass('visible');
            break;
        case 2:
            $('.btn-arco').addClass('btn-arc-inactive');
            $('.btn-arco').removeClass('btn-arc-active');

            $('.btn-arc-2').removeClass('btn-arc-inactive');
            $('.btn-arc-2').addClass('btn-arc-active');

            $('.text-arco').addClass('invisible');
            $('.text-arco').removeClass('visible');

            $('.text-arc-2').removeClass('invisible');
            $('.text-arc-2').addClass('visible');
            break;
        case 3:
            $('.btn-arco').addClass('btn-arc-inactive');
            $('.btn-arco').removeClass('btn-arc-active');

            $('.btn-arc-3').removeClass('btn-arc-inactive');
            $('.btn-arc-3').addClass('btn-arc-active');

            $('.text-arco').addClass('invisible');
            $('.text-arco').removeClass('visible');

            $('.text-arc-3').removeClass('invisible');
            $('.text-arc-3').addClass('visible');
            break;
        case 4:
            $('.btn-arco').addClass('btn-arc-inactive');
            $('.btn-arco').removeClass('btn-arc-active');

            $('.text-arco').addClass('invisible');
            $('.text-arco').removeClass('visible');

            $('.text-arc-0').removeClass('invisible');
            $('.text-arc-0').addClass('visible');
            break;
        default:
            break;
    }
}
function fuerzas(num){
    switch (parseInt(num)) {
        case 0:

            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas1').removeClass('invisible');
            $('.fuerzas1').addClass('visible');
            break;
        case 1:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas2').removeClass('invisible');
            $('.fuerzas2').addClass('visible');
            break;
        case 2:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas3').removeClass('invisible');
            $('.fuerzas3').addClass('visible');
            break;
        case 3:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas4').removeClass('invisible');
            $('.fuerzas4').addClass('visible');
            break;
        case 4:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas5').removeClass('invisible');
            $('.fuerzas5').addClass('visible');
            break;
        case 5:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas6').removeClass('invisible');
            $('.fuerzas6').addClass('visible');
            break;
        case 6:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas7').removeClass('invisible');
            $('.fuerzas7').addClass('visible');
            break;
        case 7:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas8').removeClass('invisible');
            $('.fuerzas8').addClass('visible');
            break;
        case 8:
            $('.fuerzas').addClass('invisible');
            $('.fuerzas').removeClass('visible');

            $('.fuerzas9').removeClass('invisible');
            $('.fuerzas9').addClass('visible');
            break;
        default:
            break;
    }
}

function textP6(num){
    switch (parseInt(num)) {
        case 1:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe1').removeClass('btn_cafeInactive');
            $('.btn_cafe1').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-1').removeClass('invisible');
            $('.textP6-1').addClass('visible');
            break;
        case 2:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe2').removeClass('btn_cafeInactive');
            $('.btn_cafe2').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-2').removeClass('invisible');
            $('.textP6-2').addClass('visible');
            break;
        case 3:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe3').removeClass('btn_cafeInactive');
            $('.btn_cafe3').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-3').removeClass('invisible');
            $('.textP6-3').addClass('visible');
            break;
        case 4:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe4').removeClass('btn_cafeInactive');
            $('.btn_cafe4').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-4').removeClass('invisible');
            $('.textP6-4').addClass('visible');
            break;
        case 5:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe5').removeClass('btn_cafeInactive');
            $('.btn_cafe5').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-5').removeClass('invisible');
            $('.textP6-5').addClass('visible');
            break;
        case 6:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe6').removeClass('btn_cafeInactive');
            $('.btn_cafe6').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-6').removeClass('invisible');
            $('.textP6-6').addClass('visible');
            break;
        case 7:
            $('.btn_cafe').addClass('btn_cafeInactive');
            $('.btn_cafe').removeClass('btn_cafeActive');

            $('.btn_cafe7').removeClass('btn_cafeInactive');
            $('.btn_cafe7').addClass('btn_cafeActive');

            $('.textP6').addClass('invisible');
            $('.textP6').removeClass('visible');

            $('.textP6-7').removeClass('invisible');
            $('.textP6-7').addClass('visible');
            break;
        default:
            break;
    }
}

function pastillas(num){
    switch (parseInt(num)) {
        case 1:
            $('.tria-pastilla').addClass('invisible');
            $('.tria-pastilla').removeClass('visible');

            $('.triapast1').removeClass('invisible');
            $('.triapast1').addClass('visible');

            $('.cont-pastillas').addClass('invisible');
            $('.cont-pastillas').removeClass('visible');

            $('.cont-pas-1').removeClass('invisible');
            $('.cont-pas-1').addClass('visible');

            
            break;
        case 2:
            $('.tria-pastilla').addClass('invisible');
            $('.tria-pastilla').removeClass('visible');

            $('.triapast2').removeClass('invisible');
            $('.triapast2').addClass('visible');

            $('.cont-pastillas').addClass('invisible');
            $('.cont-pastillas').removeClass('visible');

            $('.cont-pas-2').removeClass('invisible');
            $('.cont-pas-2').addClass('visible');
            break;
        case 3:
            $('.tria-pastilla').addClass('invisible');
            $('.tria-pastilla').removeClass('visible');

            $('.triapast3').removeClass('invisible');
            $('.triapast3').addClass('visible');

            $('.cont-pastillas').addClass('invisible');
            $('.cont-pastillas').removeClass('visible');

            $('.cont-pas-3').removeClass('invisible');
            $('.cont-pas-3').addClass('visible');
            break;
        case 4:
            $('.tria-pastilla').addClass('invisible');
            $('.tria-pastilla').removeClass('visible');

            $('.triapast4').removeClass('invisible');
            $('.triapast4').addClass('visible');

            $('.cont-pastillas').addClass('invisible');
            $('.cont-pastillas').removeClass('visible');

            $('.cont-pas-4').removeClass('invisible');
            $('.cont-pas-4').addClass('visible');
            break;
        case 5:
            $('.tria-pastilla').addClass('invisible');
            $('.tria-pastilla').removeClass('visible');

            $('.triapast5').removeClass('invisible');
            $('.triapast5').addClass('visible');

            $('.cont-pastillas').addClass('invisible');
            $('.cont-pastillas').removeClass('visible');

            $('.cont-pas-5').removeClass('invisible');
            $('.cont-pas-5').addClass('visible');
            break;
        default:
            break;
    }
}
function scroll_(num) {
    switch (parseInt(num)) {
        case 1:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_uno');
            bar = document.querySelector('.custom-scrollbar__bar_uno');
            container = document.querySelector('.custom-scrollbar__inner_uno');
            scroll();
            break;
        case 2:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_dos');
            bar = document.querySelector('.custom-scrollbar__bar_dos');
            container = document.querySelector('.custom-scrollbar__inner_dos');
            scroll();
            break;
        case 3:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_tres');
            bar = document.querySelector('.custom-scrollbar__bar_tres');
            container = document.querySelector('.custom-scrollbar__inner_tres');
            scroll();
            break;
        case 4:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_cuatro');
            bar = document.querySelector('.custom-scrollbar__bar_cuatro');
            container = document.querySelector('.custom-scrollbar__inner_cuatro');
            scroll();
            break;
        case 5:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_cinco');
            bar = document.querySelector('.custom-scrollbar__bar_cinco');
            container = document.querySelector('.custom-scrollbar__inner_cinco');
            scroll();
            break;
        case 6:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_seis');
            bar = document.querySelector('.custom-scrollbar__bar_seis');
            container = document.querySelector('.custom-scrollbar__inner_seis');
            scroll();
            break;
        case 7:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_siete');
            bar = document.querySelector('.custom-scrollbar__bar_siete');
            container = document.querySelector('.custom-scrollbar__inner_siete');
            scroll();
            break;
        case 8:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_ocho');
            bar = document.querySelector('.custom-scrollbar__bar_ocho');
            container = document.querySelector('.custom-scrollbar__inner_ocho');
            scroll();
            break;
        case 9:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_nueve');
            bar = document.querySelector('.custom-scrollbar__bar_nueve');
            container = document.querySelector('.custom-scrollbar__inner_nueve');
            scroll();
            break;
        case 10:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_diez');
            bar = document.querySelector('.custom-scrollbar__bar_diez');
            container = document.querySelector('.custom-scrollbar__inner_diez');
            scroll();
            break;
        case 11:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_once');
            bar = document.querySelector('.custom-scrollbar__bar_once');
            container = document.querySelector('.custom-scrollbar__inner_once');
            scroll();
            break;
        case 12:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_doce');
            bar = document.querySelector('.custom-scrollbar__bar_doce');
            container = document.querySelector('.custom-scrollbar__inner_doce');
            scroll();
            break;
        case 13:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_trece');
            bar = document.querySelector('.custom-scrollbar__bar_trece');
            container = document.querySelector('.custom-scrollbar__inner_trece');
            scroll();
            break;
        case 14:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_catorce');
            bar = document.querySelector('.custom-scrollbar__bar_catorce');
            container = document.querySelector('.custom-scrollbar__inner_catorce');
            scroll();
            break;
        case 15:
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob_quince');
            bar = document.querySelector('.custom-scrollbar__bar_quince');
            container = document.querySelector('.custom-scrollbar__inner_quince');
            scroll();
            break;
        default:
            break;
    }
}
function textBane_10(num){
    switch (parseInt(num)) {
        case 0:
            $('.blue_aquaBane').addClass('invisible');
            $('.blue_aquaBane').removeClass('visible');
            break;
        case 1:
            $('.blue_aquaBane').addClass('visible');
            $('.blue_aquaBane').removeClass('invisible');

            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-1').addClass('visible');
            $('.bane10-1').removeClass('invisible');
            break;
        case 2:
            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-2').addClass('visible');
            $('.bane10-2').removeClass('invisible');
            scroll_(6);
            break;
        case 3:
            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-3').addClass('visible');
            $('.bane10-3').removeClass('invisible');
            scroll_(7);
            break;
        case 4:
            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-4').addClass('visible');
            $('.bane10-4').removeClass('invisible');
            break;
        default:
            break;
    }
}
function textoRocas(num){
    switch (parseInt(num)) {
        case 1:
            $('.btn_rocas').addClass('btn_rocasInactive');
            $('.btn_rocas').removeClass('btn_rocasActive');

            $('.btn_roc1').removeClass('btn_rocasInactive');
            $('.btn_roc1').addClass('btn_rocasActive');

            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc1').removeClass('invisible');
            $('.textoroc1').addClass('visible');

            $('.lineas').addClass('escondido');
            $('.lineas').removeClass('mostrado');

            $('.lineas1').removeClass('escondido');
            $('.lineas1').addClass('mostrado');
            break;
        case 2:
            $('.btn_rocas').addClass('btn_rocasInactive');
            $('.btn_rocas').removeClass('btn_rocasActive');

            $('.btn_roc2').removeClass('btn_rocasInactive');
            $('.btn_roc2').addClass('btn_rocasActive');

            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc2').removeClass('invisible');
            $('.textoroc2').addClass('visible');

            $('.lineas').addClass('escondido');
            $('.lineas').removeClass('mostrado');

            $('.lineas2').removeClass('escondido');
            $('.lineas2').addClass('mostrado');
            break;
        case 3:
            $('.btn_rocas').addClass('btn_rocasInactive');
            $('.btn_rocas').removeClass('btn_rocasActive');

            $('.btn_roc3').removeClass('btn_rocasInactive');
            $('.btn_roc3').addClass('btn_rocasActive');

            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc3').removeClass('invisible');
            $('.textoroc3').addClass('visible');

            $('.lineas').addClass('escondido');
            $('.lineas').removeClass('mostrado');

            $('.lineas3').removeClass('escondido');
            $('.lineas3').addClass('mostrado');
            break;
        default:
            break;
    }
}
function punteros19(num){
    switch (parseInt(num)) {
        case 1:
            $('.punteroHead19').addClass('puntero2_headInactive');
            $('.punteroHead19').removeClass('puntero2_headActive');

            $('.punteroHead19-1').removeClass('puntero2_headInactive');
            $('.punteroHead19-1').addClass('puntero2_headActive');

            $('.punteroBody19').addClass('puntero2_bodyInactive');
            $('.punteroBody19').removeClass('puntero2_bodyActive');

            $('.punteroBody19-1').removeClass('puntero2_bodyInactive');
            $('.punteroBody19-1').addClass('puntero2_bodyActive');

            $('.flecha19').addClass('invisible');
            $('.flecha19').removeClass('visible');

            $('.flecha19-1').removeClass('invisible');
            $('.flecha19-1').addClass('visible');

            $('.bane19blue').addClass('invisible');
            $('.bane19blue').removeClass('visible');

            $('.bane19-1').removeClass('invisible');
            $('.bane19-1').addClass('visible');
            break;
        case 2:
            $('.punteroHead19').addClass('puntero2_headInactive');
            $('.punteroHead19').removeClass('puntero2_headActive');

            $('.punteroHead19-2').removeClass('puntero2_headInactive');
            $('.punteroHead19-2').addClass('puntero2_headActive');

            $('.punteroBody19').addClass('puntero2_bodyInactive');
            $('.punteroBody19').removeClass('puntero2_bodyActive');

            $('.punteroBody19-2').removeClass('puntero2_bodyInactive');
            $('.punteroBody19-2').addClass('puntero2_bodyActive');

            $('.flecha19').addClass('invisible');
            $('.flecha19').removeClass('visible');

            $('.flecha19-2').removeClass('invisible');
            $('.flecha19-2').addClass('visible');

            $('.bane19blue').addClass('invisible');
            $('.bane19blue').removeClass('visible');

            $('.bane19-2').removeClass('invisible');
            $('.bane19-2').addClass('visible');
            break;
        default:
            break;
    }
}
function textblue(num){
    switch (parseInt(num)) {
        case 1:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue1').removeClass('btnCircleInactive');
            $('.btnblue1').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue1').removeClass('invisible');
            $('.textoblue1').addClass('visible');

            
            break;
        case 2:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue2').removeClass('btnCircleInactive');
            $('.btnblue2').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue2').removeClass('invisible');
            $('.textoblue2').addClass('visible');
            break;
        case 3:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue3').removeClass('btnCircleInactive');
            $('.btnblue3').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue3').removeClass('invisible');
            $('.textoblue3').addClass('visible');
            break;
        case 4:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue4').removeClass('btnCircleInactive');
            $('.btnblue4').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue4').removeClass('invisible');
            $('.textoblue4').addClass('visible');
            break;
        case 5:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue5').removeClass('btnCircleInactive');
            $('.btnblue5').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue5').removeClass('invisible');
            $('.textoblue5').addClass('visible');
            break;
        case 6:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue6').removeClass('btnCircleInactive');
            $('.btnblue6').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue6').removeClass('invisible');
            $('.textoblue6').addClass('visible');
            break;
        case 7:
            $('.btnCircle').addClass('btnCircleInactive');
            $('.btnCircle').removeClass('btnCircleActive');

            $('.btnblue7').removeClass('btnCircleInactive');
            $('.btnblue7').addClass('btnCircleActive');

            $('.textoblue').addClass('invisible');
            $('.textoblue').removeClass('visible');

            $('.textoblue7').removeClass('invisible');
            $('.textoblue7').addClass('visible');
            break;
        default:
            break;
    }
}
function carruseles(num){
    switch (parseInt(num)) {
        case 1:
            sumaslide5++;
            if (sumaslide5 < 2) {
                var slideCount = $('#slider7 ul li').length;
                var slideWidth = $('#slider7 ul li').width();
                var slideHeight = $('#slider7 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider7').css({ width: '100%', height: '290px' });
                
                $('#slider7 ul').css({ width: '100%'});
                
                $('#slider7 ul li:last-child').prependTo('#slider7 ul');

                function moveLeft7() {
                    $('#slider7 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider7 ul li:last-child').prependTo('#slider7 ul');
                        $('#slider7 ul').css('left', '');
                    });
                };

                function moveRight7() {
                    $('#slider7 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider7 ul li:first-child').appendTo('#slider7 ul');
                        $('#slider7 ul').css('left', '');
                    });
                };

                $('a.control_prev7').click(function (e) {
                    moveLeft7();
                    e.preventDefault();
                });

                $('a.control_next7').click(function (e) {
                    moveRight7();
                    e.preventDefault();
                });
            }
            break;
        case 2:
            sumaslide6++;
            if (sumaslide6 < 2) {
                var slideCount = $('#slider8 ul li').length;
                var slideWidth = $('#slider8 ul li').width();
                var slideHeight = $('#slider8 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider8').css({ width: '100%', height: '290px' });
                
                $('#slider8 ul').css({ width: '100%'});
                
                $('#slider8 ul li:last-child').prependTo('#slider8 ul');

                function moveLeft8() {
                    $('#slider8 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider8 ul li:last-child').prependTo('#slider8 ul');
                        $('#slider8 ul').css('left', '');
                    });
                };

                function moveRight8() {
                    $('#slider8 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider8 ul li:first-child').appendTo('#slider8 ul');
                        $('#slider8 ul').css('left', '');
                    });
                };

                $('a.control_prev8').click(function (e) {
                    moveLeft8();
                    e.preventDefault();
                });

                $('a.control_next8').click(function (e) {
                    moveRight8();
                    e.preventDefault();
                });
            }
            break;
        case 3:
            sumaslide7++;
            if (sumaslide7 < 2) {
                var slideCount = $('#slider9 ul li').length;
                var slideWidth = $('#slider9 ul li').width();
                var slideHeight = $('#slider9 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider9').css({ width: '100%', height: '300px' });
                
                $('#slider9 ul').css({ width: '100%'});
                
                $('#slider9 ul li:last-child').prependTo('#slider9 ul');

                function moveLeft9() {
                    $('#slider9 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider9 ul li:last-child').prependTo('#slider9 ul');
                        $('#slider9 ul').css('left', '');
                    });
                };

                function moveRight9() {
                    $('#slider9 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider9 ul li:first-child').appendTo('#slider9 ul');
                        $('#slider9 ul').css('left', '');
                    });
                };

                $('a.control_prev9').click(function (e) {
                    moveLeft9();
                    e.preventDefault();
                });

                $('a.control_next9').click(function (e) {
                    moveRight9();
                    e.preventDefault();
                });
            }
            break;
        default:
            break;
    }
}
function targetNewton(num){
    switch (parseInt(num)) {
        case 1:
            $('.btn-newton').addClass('btn-newtonInactive');
            $('.btn-newton').removeClass('btn-newtonActive');

            $('.btnNew1').removeClass('btn-newtonInactive');
            $('.btnNew1').addClass('btn-newtonActive');

            $('.targetaNewton').addClass('invisible');
            $('.targetaNewton').removeClass('visible');

            $('.targetN1').removeClass('invisible');
            $('.targetN1').addClass('visible');
            carruseles(1);
            break;
        case 2:
            $('.btn-newton').addClass('btn-newtonInactive');
            $('.btn-newton').removeClass('btn-newtonActive');

            $('.btnNew2').removeClass('btn-newtonInactive');
            $('.btnNew2').addClass('btn-newtonActive');

            $('.targetaNewton').addClass('invisible');
            $('.targetaNewton').removeClass('visible');

            $('.targetN2').removeClass('invisible');
            $('.targetN2').addClass('visible');
            carruseles(2);
            scroll_(15);
            break;
        case 3:
            $('.btn-newton').addClass('btn-newtonInactive');
            $('.btn-newton').removeClass('btn-newtonActive');

            $('.btnNew3').removeClass('btn-newtonInactive');
            $('.btnNew3').addClass('btn-newtonActive');

            $('.targetaNewton').addClass('invisible');
            $('.targetaNewton').removeClass('visible');

            $('.targetN3').removeClass('invisible');
            $('.targetN3').addClass('visible');
            carruseles(3);
            break;
        default:
            break;
    }
}
function cohetes(num){
    switch (parseInt(num)) {
        case 1:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete1').removeClass('escondido');
            $('.cohete1').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe1').removeClass('invisible');
            $('.contCohe1').addClass('visible');
            break;
        case 2:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete2').removeClass('escondido');
            $('.cohete2').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe2').removeClass('invisible');
            $('.contCohe2').addClass('visible');
            break;
        case 3:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete3').removeClass('escondido');
            $('.cohete3').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe3').removeClass('invisible');
            $('.contCohe3').addClass('visible');
            break;
        case 4:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete4').removeClass('escondido');
            $('.cohete4').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe4').removeClass('invisible');
            $('.contCohe4').addClass('visible');
            break;
        case 5:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete5').removeClass('escondido');
            $('.cohete5').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe5').removeClass('invisible');
            $('.contCohe5').addClass('visible');
            break;
        case 6:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete6').removeClass('escondido');
            $('.cohete6').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe6').removeClass('invisible');
            $('.contCohe6').addClass('visible');
            break;
        case 7:
            $('.cohetes').addClass('escondido');
            $('.cohetes').removeClass('mostrado');

            $('.cohete7').removeClass('escondido');
            $('.cohete7').addClass('mostrado');

            $('.contenidoCohete').addClass('invisible');
            $('.contenidoCohete').removeClass('visible');

            $('.contCohe7').removeClass('invisible');
            $('.contCohe7').addClass('visible');
            break;
        default:
            break;
    }
}

function infoactivi(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('.info1').css({'visibility': 'visible'});
            
            break;
        case 2:
            $('.info2').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}


function agrandar(num) {
    switch (parseInt(num)) {
        case 1:
            $('.agrandador').addClass('cortico');
            $('.agrandador').removeClass('agrandado');

            $('.A1').addClass('agrandado');
            $('.A1').removeClass('cortico');

            $('.texto-target').removeClass('visible');
            $('.texto-target').addClass('invisible');

            $('.text1').addClass('visible');
            $('.text1').removeClass('invisible');

            var iframe = `<iframe src="actividades/actividad/actividad_ahorcado1/index.html" frameborder="0"></iframe>`;
            $('.iframe').html(iframe);
            break;
        case 2:
            $('.agrandador').addClass('cortico');
            $('.agrandador').removeClass('agrandado');

            $('.A2').addClass('agrandado');
            $('.A2').removeClass('cortico');

            $('.texto-target').removeClass('visible');
            $('.texto-target').addClass('invisible');

            $('.text2').addClass('visible');
            $('.text2').removeClass('invisible');
            var iframe = `<iframe src="actividades/actividad/actividad_ahorcado2/index.html" frameborder="0"></iframe>`;
            $('.iframe').html(iframe);
            break;
        default:
            break;
    }
}



//dezlizador
function Input(num) {
  //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
  this.att = {};
  this.att.type = "range";
  this.att.value = 0;
  this.att.min = 0;
  this.att.max = num;
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
    fuerzas(this.input.value);
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
  $("input[type=range]").on('change', function () {
      /*alert();*/
  });
  this.actualizar2 = function() {
    textBane_10(this.input.value);
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
  $("input[type=range]").on('change', function () {
      /*alert();*/
  });
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
/*function pausevideo(num){
  switch(parseInt(num))
  {
    case 1:
      var videointro = document.getElementById('video_intro1');
      videointro.pause(); 
    break;
    default:
    break;
  }
}*/

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