$(document).ready(function() {
    // console.log(tema);
    $(".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu1").addClass('c-show');
    $(".zoomContainer").remove();
    $(".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".zoomContainer").remove();
    $('.carousel').carousel('pause');
    $('#smartwizard').smartWizard({
        loader: "show",
        theme: 'arrows',
        toolbarSettings: {
            showNextButton: false, // show/hide a Next button
            showPreviousButton: false, // show/hide a Previous button
            toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing: '' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $(".linkactividades").attr('href', urlsite + '/course/view.php?id=' + courseid);

    $('.zoom_img').elevateZoom({ zoomWindowPosition: 20 });
    $('.zoom_img2').elevateZoom({ zoomWindowPosition: 15 });
    $('#next').on('click', function() {
        $('#smartwizard').smartWizard("next");
        slide();
    });

    $('#prev').on('click', function() {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    slide_predeterminado();
    /*setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");*/

    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".teoria").on('click', teorias);
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
    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        slide();
        switch(stepIndex) {
            default:
            // code block
        }
    });
    slide_link(tema);


});
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function slide() {
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex + 1);
    actualizarprogress(stepIndex + 1);
}

function slide_predeterminado() {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link(num) {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num - 1);
    controlSlides(num);
}
var sumaslide = 0;
var sumaslide1 = 0;
var sumaslide2 = 0;
var sumaslide3 = 0;

function controlSlides(num) {
    switch (parseInt(num)) {
        case 1:
            sumaslide++;
            if (sumaslide < 2) {
                var slideCount = $('#slider2 ul li').length;
                var slideWidth = $('#slider2 ul li').width();
                var slideHeight = $('#slider2 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider2').css({ width: '100%', height: '250px' });

                $('#slider2 ul').css({ width: '90%' });

                $('#slider2 ul li:last-child').prependTo('#slider2 ul');

                function moveLeft2() {
                    $('#slider2 ul').animate({
                        left: +slideWidth
                    }, 200, function() {
                        $('#slider2 ul li:last-child').prependTo('#slider2 ul');
                        $('#slider2 ul').css('left', '');
                    });
                };

                function moveRight2() {
                    $('#slider2 ul').animate({
                        left: -slideWidth
                    }, 200, function() {
                        $('#slider2 ul li:first-child').appendTo('#slider2 ul');
                        $('#slider2 ul').css('left', '');
                    });
                };

                $('a.control_prev2').click(function(e) {
                    moveLeft2();
                    e.preventDefault();
                });

                $('a.control_next2').click(function(e) {
                    moveRight2();
                    e.preventDefault();
                });
            }
            $(".sub1").removeClass('tema_activo');
            $(".sub1_1").addClass('tema_activo');
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 14:
            /*sumaslide1++;
            if (sumaslide1 < 2) {
                var slideCount = $('#slider3 ul li').length;
                var slideWidth = $('#slider3 ul li').width();
                var slideHeight = $('#slider3 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider3').css({ width: '100%', height: '200px' });

                $('#slider3 ul').css({ width: '90%' });

                $('#slider3 ul li:last-child').prependTo('#slider3 ul');

                function moveLeft3() {
                    $('#slider3 ul').animate({
                        left: +slideWidth
                    }, 200, function() {
                        $('#slider3 ul li:last-child').prependTo('#slider3 ul');
                        $('#slider3 ul').css('left', '');
                    });
                };

                function moveRight3() {
                    $('#slider3 ul').animate({
                        left: -slideWidth
                    }, 200, function() {
                        $('#slider3 ul li:first-child').appendTo('#slider3 ul');
                        $('#slider3 ul').css('left', '');
                    });
                };

                $('a.control_prev3').click(function(e) {
                    moveLeft3();
                    e.preventDefault();
                });

                $('a.control_next3').click(function(e) {
                    moveRight3();
                    e.preventDefault();
                });
            }*/
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 16:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 18:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 25:
            $(".sub1").removeClass('tema_activo');
            $(".sub1_1").addClass('tema_activo');
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Unidimensional");
            break;
        case 26:
            $(".sub1").removeClass('tema_activo');
            $(".sub1_26").addClass('tema_activo');
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 28:
            sumaslide2++;
            if (sumaslide2 < 2) {
                var slideCount = $('#slider4 ul li').length;
                var slideWidth = $('#slider4 ul li').width();
                var slideHeight = $('#slider4 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                var numslide = 0;

                $('#slider4').css({ width: '100%', height: '150px' });

                $('#slider4 ul').css({ width: '90%' });

                $('#slider4 ul li:last-child').prependTo('#slider4 ul');

                function moveLeft4() {
                    numslide = numslide - 1;
                    console.log(slideCount);
                    $('#slider4 ul').animate({
                        left: +slideWidth
                    }, 200, function() {
                        $('#slider4 ul li:last-child').prependTo('#slider4 ul');
                        $('#slider4 ul').css('left', '');
                    });
                    if (numslide == 0) {
                        $('.control_prev4').addClass('d-none');
                    }
                };

                function moveRight4() {
                    numslide = numslide + 1;
                    $('#slider4 ul').animate({
                        left: -slideWidth
                    }, 200, function() {

                        $('#slider4 ul li:first-child').appendTo('#slider4 ul');
                        $('#slider4 ul').css('left', '');
                    });
                    if (numslide == slideCount-1) {
                        $('.control_next4').addClass('d-none');
                    }
                };

                $('a.control_prev4').click(function(e) {
                    $('.control_next4').removeClass('d-none');
                    moveLeft4();
                    e.preventDefault();
                });

                $('a.control_next4').click(function(e) {
                    $('.control_prev4').removeClass('d-none');
                    moveRight4();
                    e.preventDefault();
                });
            }

            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 31:
            sumaslide3++;
            if (sumaslide3 < 2) {
                var slideCount = $('#slider5 ul li').length;
                var slideWidth = $('#slider5 ul li').width();
                var slideHeight = $('#slider5 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider5').css({ width: '100%', height: '400px' });

                $('#slider5 ul').css({ width: '100%' });

                $('#slider5 ul li:last-child').prependTo('#slider5 ul');

                function moveLeft5() {
                    $('#slider5 ul').animate({
                        left: +slideWidth
                    }, 200, function() {
                        $('#slider5 ul li:last-child').prependTo('#slider5 ul');
                        $('#slider5 ul').css('left', '');
                    });
                };

                function moveRight5() {
                    $('#slider5 ul').animate({
                        left: -slideWidth
                    }, 200, function() {
                        $('#slider5 ul li:first-child').appendTo('#slider5 ul');
                        $('#slider5 ul').css('left', '');
                    });
                };

                $('a.control_prev5').click(function(e) {
                    moveLeft5();
                    e.preventDefault();
                });

                $('a.control_next5').click(function(e) {
                    moveRight5();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 34:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 35:
            $(".sub1").removeClass('tema_activo');
            $(".sub1_26").addClass('tema_activo');
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento Bidimensional");
            break;
        case 36:
            $(".sub1").removeClass('tema_activo');
            $(".sub1_36").addClass('tema_activo');
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 37:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 38:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 39:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 40:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 41:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 42:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 43:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        case 44:
            setMigaja("Unidades de aprendizaje", "1. Movimiento de una  partícula", "Movimiento  Circular");
            break;
        default:
            break;
    }
}

function modal_scroll_uno() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}

function infoactivi(num) {
    switch (parseInt(num)) {

        case 1:
            $('.info1').css({ 'visibility': 'visible' });

            break;
        case 2:
            $('.info2').css({ 'visibility': 'visible' });
            break;
        default:
            break;
    }
}

function ejemplos(num) {
    switch (parseInt(num)) {
        case 1:
            $('.ejemplos').addClass('invisible');
            $('.ejemplos').removeClass('visible');

            $('.ejemplo1').removeClass('invisible');
            $('.ejemplo1').addClass('visible');
            break;
        case 2:
            $('.ejemplos').addClass('invisible');
            $('.ejemplos').removeClass('visible');

            $('.ejemplo2').removeClass('invisible');
            $('.ejemplo2').addClass('visible');
            break2
        default:
            break;
    }
}

function targetas(num) {
    switch (parseInt(num)) {
        case 1:
            $('.deplegar').addClass('recogido');
            $('.deplegar').removeClass('desplegado');

            $('.header1').removeClass('recogido');
            $('.header1').addClass('desplegado');

            $('.texto_targeta').addClass('invisible');
            $('.texto_targeta').removeClass('visible');

            $('.text_T1').removeClass('invisible');
            $('.text_T1').addClass('visible');

            $('.formula').addClass('invisible');
            $('.formula').removeClass('visible');

            $('.formula2').removeClass('invisible');
            $('.formula2').addClass('visible');

            $('.expresion2').removeClass('visible');
            $('.expresion2').addClass('invisible');
            break;
        case 2:
            $('.deplegar').addClass('recogido');
            $('.deplegar').removeClass('desplegado');

            $('.header2').removeClass('recogido');
            $('.header2').addClass('desplegado');

            $('.texto_targeta').addClass('invisible');
            $('.texto_targeta').removeClass('visible');

            $('.text_T2').removeClass('invisible');
            $('.text_T2').addClass('visible');

            $('.formula').addClass('invisible');
            $('.formula').removeClass('visible');

            $('.formula1').removeClass('invisible');
            $('.formula1').addClass('visible');

            $('.expresion1').removeClass('visible');
            $('.expresion1').addClass('invisible');
            break;
        case 3:
            $('.deplegar').addClass('recogido');
            $('.deplegar').removeClass('desplegado');

            $('.formula').addClass('invisible');
            $('.formula').removeClass('visible');

            $('.expresion').removeClass('invisible');
            $('.expresion').addClass('visible');

            $('.texto_targeta').addClass('invisible');
            $('.texto_targeta').removeClass('visible');
            break;
        default:
            break;
    }
}

function pantalla27() {
    $('.aparece_target').addClass('visible');
    $('.aparece_target').removeClass('invisible');
}

function flotantes(num) {
    $('.flotante').addClass('d-none');
    $('.flotante').removeClass('visible');
    switch (parseInt(num)) {
        case 1:

            $('.flotante1').removeClass('d-none');
            break;
        case 2:

            $('.flotante2').removeClass('d-none');
            break;
        case 3:

            $('.flotante3').removeClass('d-none');
            break;
        case 4:
            $('.flotante').addClass('d-none');
            $('.flotante').removeClass('visible');
            break;
        default:
            break;
    }
}

function p39(num) {
    switch (parseInt(num)) {
        case 1:
            $('.text-p39').addClass('invisible');
            $('.text-p39').removeClass('d-flex');

            $('.p39-1').removeClass('invisible');
            $('.p39-1').addClass('d-flex');

            $('.btn_shadowAmarillo').addClass('shadow_inactive');
            $('.btn_shadowAmarillo').removeClass('shadow_active');

            $('.sha1').removeClass('shadow_inactive');
            $('.sha1').addClass('shadow_active');

            $('.banner39').removeClass('invisible');
            $('.banner39').addClass('d-flex');
            break;
        case 2:
            $('.text-p39').addClass('invisible');
            $('.text-p39').removeClass('d-flex');

            $('.p39-2').removeClass('invisible');
            $('.p39-2').addClass('d-flex');

            $('.btn_shadowAmarillo').addClass('shadow_inactive');
            $('.btn_shadowAmarillo').removeClass('shadow_active');

            $('.sha2').removeClass('shadow_inactive');
            $('.sha2').addClass('shadow_active');

            $('.banner39').removeClass('invisible');
            $('.banner39').addClass('d-flex');
            break;
        case 3:
            $('.text-p39').addClass('invisible');
            $('.text-p39').removeClass('d-flex');

            $('.p39-3').removeClass('invisible');
            $('.p39-3').addClass('d-flex');

            $('.btn_shadowAmarillo').addClass('shadow_inactive');
            $('.btn_shadowAmarillo').removeClass('shadow_active');

            $('.sha3').removeClass('shadow_inactive');
            $('.sha3').addClass('shadow_active');

            $('.banner39').removeClass('invisible');
            $('.banner39').addClass('d-flex');
            break;
        case 4:
            $('.text-p39').addClass('invisible');
            $('.text-p39').removeClass('d-flex');

            $('.p39-4').removeClass('invisible');
            $('.p39-4').addClass('d-flex');

            $('.btn_shadowAmarillo').addClass('shadow_inactive');
            $('.btn_shadowAmarillo').removeClass('shadow_active');

            $('.sha4').removeClass('shadow_inactive');
            $('.sha4').addClass('shadow_active');

            $('.banner39').removeClass('invisible');
            $('.banner39').addClass('d-flex');
            break;
        case 5:
            $('.text-p39').addClass('invisible');
            $('.text-p39').removeClass('d-flex');

            $('.p39-5').removeClass('invisible');
            $('.p39-5').addClass('d-flex');

            $('.btn_shadowAmarillo').addClass('shadow_inactive');
            $('.btn_shadowAmarillo').removeClass('shadow_active');

            $('.sha5').removeClass('shadow_inactive');
            $('.sha5').addClass('shadow_active');

            $('.banner39').removeClass('invisible');
            $('.banner39').addClass('d-flex');
            break;
        default:
            break;
    }
}

function mesas(num) {
    switch (parseInt(num)) {
        case 1:
            $('.mesas').addClass('invisible');
            $('.mesas').removeClass('visible');

            $('.cordenadamesa1').removeClass('invisible');
            $('.cordenadamesa1').addClass('visible');
            break;
        case 2:
            $('.mesas').addClass('invisible');
            $('.mesas').removeClass('visible');

            $('.cordenadamesa2').removeClass('invisible');
            $('.cordenadamesa2').addClass('visible');
            break;
        case 3:
            $('.mesas').addClass('invisible');
            $('.mesas').removeClass('visible');

            $('.cordenadamesa3').removeClass('invisible');
            $('.cordenadamesa3').addClass('visible');
            break;
        case 4:
            $('.mesas').addClass('invisible');
            $('.mesas').removeClass('visible');
            break;
        default:
            break;
    }
}

function banners(num) {
    switch (parseInt(num)) {
        case 1:
            $('.formulas_flecha').addClass('invisible');
            $('.formulas_flecha').removeClass('visible');

            $('.siguiente').addClass('triangulo_inactive');
            $('.siguiente').removeClass('triangulo_active');

            $('.siguiente1').addClass('triangulo_active');
            $('.siguiente1').removeClass('triangulo_inactive');

            $('.banflechascafe').addClass('invisible');
            $('.banflechascafe').removeClass('visible');

            $('.banflecha1').removeClass('invisible');
            $('.banflecha1').addClass('visible');

            $('.tria_desplega').addClass('invisible');
            $('.tria_desplega').removeClass('visible');

            $('.tria_desplega1').removeClass('invisible');
            $('.tria_desplega1').addClass('visible');
            break;
        case 2:
            $('.formulas_flecha').addClass('invisible');
            $('.formulas_flecha').removeClass('visible');

            $('.siguiente').addClass('triangulo_inactive');
            $('.siguiente').removeClass('triangulo_active');

            $('.siguiente2').addClass('triangulo_active');
            $('.siguiente2').removeClass('triangulo_inactive');


            $('.banflechascafe').addClass('invisible');
            $('.banflechascafe').removeClass('visible');

            $('.banflecha2').removeClass('invisible');
            $('.banflecha2').addClass('visible');

            $('.tria_desplega').addClass('invisible');
            $('.tria_desplega').removeClass('visible');

            $('.tria_desplega2').removeClass('invisible');
            $('.tria_desplega2').addClass('visible');
            break;
        default:
            break;
    }
}

function desplega(num) {
    switch (parseInt(num)) {
        case 1:
            $('.siguiente').addClass('visible');
            $('.siguiente').removeClass('invisible');

            $('.siguiente1').addClass('invisible');
            $('.siguiente1').removeClass('visible');

            $('.anterior').addClass('invisible');
            $('.anterior').removeClass('visible');

            $('.anterior1').removeClass('invisible');
            $('.anterior1').addClass('visible');

            $('.banflecha1').removeClass('invisible');
            $('.banflecha1').addClass('visible');

            $('.tria_desplega').addClass('triangulo_inactive');
            $('.tria_desplega').removeClass('triangulo_active');

            $('.tria_desplega1').removeClass('triangulo_inactive');
            $('.tria_desplega1').addClass('triangulo_active');

            $('.formulas_flecha').addClass('invisible');
            $('.formulas_flecha').removeClass('visible');

            $('.form_f1').removeClass('invisible');
            $('.form_f1').addClass('visible');
            break;
        case 2:
            $('.siguiente').addClass('visible');
            $('.siguiente').removeClass('invisible');

            $('.siguiente2').addClass('invisible');
            $('.siguiente2').removeClass('visible');

            $('.anterior').addClass('invisible');
            $('.anterior').removeClass('visible');

            $('.anterior2').removeClass('invisible');
            $('.anterior2').addClass('visible');

            $('.banflecha2').removeClass('invisible');
            $('.banflecha2').addClass('visible');

            $('.tria_desplega').addClass('triangulo_inactive');
            $('.tria_desplega').removeClass('triangulo_active');

            $('.tria_desplega2').removeClass('triangulo_inactive');
            $('.tria_desplega2').addClass('triangulo_active');

            $('.formulas_flecha').addClass('invisible');
            $('.formulas_flecha').removeClass('visible');

            $('.form_f2').removeClass('invisible');
            $('.form_f2').addClass('visible');
            break;
        default:
            break;
    }
}

function retroceder(num) {
    switch (parseInt(num)) {
        case 1:
            $('.siguiente').addClass('visible');
            $('.siguiente').removeClass('invisible');

            $('.anterior').addClass('invisible');
            $('.anterior').removeClass('visible');

            $('.banflechascafe').removeClass('visible');
            $('.banflechascafe').addClass('invisible');

            $('.tria_desplega').addClass('triangulo_inactive');
            $('.tria_desplega').removeClass('triangulo_active');

            $('.formulas_flecha').addClass('invisible');
            $('.formulas_flecha').removeClass('visible');

            $('.siguiente').addClass('triangulo_inactive');
            $('.siguiente').removeClass('triangulo_active');

            $('.tria_desplega').addClass('invisible');
            $('.tria_desplega').removeClass('visible');
            break;
        case 2:
            $('.siguiente').addClass('visible');
            $('.siguiente').removeClass('invisible');

            $('.anterior').addClass('invisible');
            $('.anterior').removeClass('visible');

            $('.banflechascafe').removeClass('visible');
            $('.banflechascafe').addClass('invisible');

            $('.tria_desplega').addClass('triangulo_inactive');
            $('.tria_desplega').removeClass('triangulo_active');

            $('.formulas_flecha').addClass('invisible');
            $('.formulas_flecha').removeClass('visible');

            $('.siguiente').addClass('triangulo_inactive');
            $('.siguiente').removeClass('triangulo_active');

            $('.tria_desplega').addClass('invisible');
            $('.tria_desplega').removeClass('visible');
            break;
        default:
            break;
    }
}

function espacial(num) {
    switch (parseInt(num)) {
        case 1:
            $('.btn_espacial').addClass('btn_espacialinactive');
            $('.btn_espacial').removeClass('btn_espacialactive');

            $('.cordenada_nave1').addClass('btn_espacialactive');
            $('.cordenada_nave1').removeClass('btn_espacialinactive');

            $('.espacial1').removeClass('visible');
            $('.espacial1').addClass('invisible');

            $('.imagen_espacial').addClass('invisible');
            $('.imagen_espacial').removeClass('visible');

            $('.espacial2').addClass('visible');
            $('.espacial2').removeClass('invisible');

            $('.baneformnav').addClass('d-flex');
            $('.baneformnav').removeClass('invisible');

            $('.formula_nave').addClass('invisible');
            $('.formula_nave').removeClass('visible');

            $('.formula_nave1').addClass('visible');
            $('.formula_nave1').removeClass('invisible');
            break;
        case 2:
            $('.btn_espacial').addClass('btn_espacialinactive');
            $('.btn_espacial').removeClass('btn_espacialactive');

            $('.cordenada_nave2').addClass('btn_espacialactive');
            $('.cordenada_nave2').removeClass('btn_espacialinactive');

            $('.espacial2').removeClass('visible');
            $('.espacial2').addClass('invisible');

            $('.imagen_espacial').addClass('invisible');
            $('.imagen_espacial').removeClass('visible');

            $('.espacial3').addClass('visible');
            $('.espacial3').removeClass('invisible');

            $('.baneformnav').addClass('d-flex');
            $('.baneformnav').removeClass('invisible');

            $('.formula_nave').addClass('invisible');
            $('.formula_nave').removeClass('visible');

            $('.formula_nave2').addClass('visible');
            $('.formula_nave2').removeClass('invisible');
            break;
        case 3:
            $('.btn_espacial').addClass('btn_espacialinactive');
            $('.btn_espacial').removeClass('btn_espacialactive');

            $('.cordenada_nave3').addClass('btn_espacialactive');
            $('.cordenada_nave3').removeClass('btn_espacialinactive');

            $('.espacial3').removeClass('visible');
            $('.espacial3').addClass('invisible');

            $('.imagen_espacial').addClass('invisible');
            $('.imagen_espacial').removeClass('visible');

            $('.espacial4').addClass('visible');
            $('.espacial4').removeClass('invisible');

            $('.baneformnav').addClass('d-flex');
            $('.baneformnav').removeClass('invisible');

            $('.formula_nave').addClass('invisible');
            $('.formula_nave').removeClass('visible');

            $('.formula_nave3').addClass('visible');
            $('.formula_nave3').removeClass('invisible');
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

function scroll() {
    // When the container is scrolled
    container.addEventListener('scroll', () => {
        // If we are dragging the knob, do nothing
        if (dragging) return;

        // Otherwise, set the knob position based on the scroll position
        knob.style.top = container.scrollTop / (container.scrollHeight - container.offsetHeight) * 100 + '%';
    });

    dragging = false;

    knob.addEventListener('mousedown', event => {

        console.log(knob + " " + bar + " " + container);
        dragging = {
            x: event.clientX,
            y: event.clientY
        };

    });
    window.addEventListener('mousemove', event => {
        if (dragging) {
            // When dragging
            event.preventDefault();
            diff = {
                x: event.clientX - dragging.x,
                y: event.clientY - dragging.y
            };


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
                y: event.clientY
            };

        }
    });
    window.addEventListener('mouseup', () => {
        dragging = false;
    });
}


//dezlizador


function Input() {
    //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
    this.att = {};
    this.att.type = "range";
    this.att.value = 0;
    this.att.min = 0;
    this.att.max = 5;
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
        scroll_horizontal(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
}

// setup


function poner(num) {

    $(".texto_efecto" + num).css({
        position: 'relative',
        top: '2px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display', 'block');
        $(".custom-scrollbar2").css('height', '250');
    }
}

function quitar(num) {
    // $(".texto_efecto"+num).css({
    //     position: 'relative',
    //     top: '2px',
    //     display: 'none',
    //     'z-index': '100'
    // });
    if (num == 1) {
        $(".custom-scrollbar__bar2").css('display', 'none');
        $(".custom-scrollbar2").css('height', '180px');
    }
    if (num == 2) {
        $(".custom-scrollbar__bar2").css('display', 'none');
        $(".custom-scrollbar2").css('height', '180px');
    }
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display', 'none');
        $(".custom-scrollbar2").css('height', '180px');
    }
}



function funcionalidad_1(num) {
    $(".dimensional").removeClass('bg-azul-mc');
    $(".dimensional").addClass('bg-azul');
    $(".dimensional-" + num).removeClass('bg-azul');
    $(".dimensional-" + num).addClass('bg-azul-mc');
    switch (parseInt(num)) {
        case 1:
            $("#dimensional").html(`
                                    <div class="p-3 d-flex">
                                      <img src="assets/img/img_ova/laboratoriotexto.png" class="img-100 m-auto zoom_img" data-zoom-image="assets/img/img_ova/laboratoriotexto.png">
                                    </div>
                                    `);
            $(".zoomContainer").remove();
            $('.zoom_img').elevateZoom({ zoomWindowPosition: 50 });
            break;
        case 2:

            $("#dimensional").html(`
                                    <div class="p-3" style="background-image: url('assets/img/img_ova/dibujado.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
                                      <div class="bg-a-c radius-2 p-3">
                                        <div id="dimensional_info">
                                            <p class="p_black justificado" style="font-size: 13px;">Las unidades derivadas son aquellas unidades que pueden formarse combinando las unidades básicas según relaciones algebraicas escogidas que liguen las magnitudes correspondientes, como, por ejemplo: velocidad, aceleración, fuerza, potencia, volumen. (S., 2015)</p>
                                        </div>
                                        <div class="img-100 mt-4 d-flex">
                                          <div class="justify-content-evenly img-50 d-flex m-auto">
                                            <div class="radius-50 bg-amarillo cursor dimensional_opcion dimensional_opcion-1" onclick="dimensional_opcion(1)" style="width: 15px; height: 15px;"></div>
                                            <div class="radius-50 bg-cafe-c cursor dimensional_opcion dimensional_opcion-2" onclick="dimensional_opcion(2)" style="width: 15px; height: 15px;"></div>
                                            <div class="radius-50 bg-cafe-c cursor dimensional_opcion dimensional_opcion-3" onclick="dimensional_opcion(3)" style="width: 15px; height: 15px;"></div>
                                            <div class="radius-50 bg-cafe-c cursor dimensional_opcion dimensional_opcion-4" onclick="dimensional_opcion(4)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    `);
            break;
        default:
            break;
    }
}

function dimensional_opcion(num) {
    $(".dimensional_opcion").removeClass('bg-amarillo');
    $(".dimensional_opcion").addClass('bg-cafe-c');
    $(".dimensional_opcion-" + num).removeClass('bg-cafe-c');
    $(".dimensional_opcion-" + num).addClass('bg-amarillo');
    switch (parseInt(num)) {
        case 1:
            $("#dimensional_info").html(`<p class="p_black justificado" style="font-size: 13px;">Las unidades derivadas son aquellas unidades que pueden formarse combinando las unidades básicas según relaciones algebraicas escogidas que liguen las magnitudes correspondientes, como, por ejemplo: velocidad, aceleración, fuerza, potencia, volumen. (S., 2015)</p>`);
            break;
        case 2:
            $("#dimensional_info").html(`<p class="p_black justificado">Como se menciona anteriormente, existen magnitudes fundamentales las cuales se establecieron por medio de un estándar (Sistema Internacional) de los cuales surgieron diferentes sistemas a nivel mundial.</p>`);
            break;
        case 3:
            $("#dimensional_info").html(`<p class="p_black justificado">En total hay unidades fundamentales: el kilogramo, el segundo, el metro y los grados Kelvin, que corresponden a la masa, el tiempo, la longitud y la temperatura respectivamente y que no depende de ninguna otra y la Mol, la Candela y el Ampere para la cantidad de sustancia, la intensidad luminosa y la cantidad de corriente eléctrica; las cuales dependen de las anteriores.</p>`);
            break;
        case 4:
            $("#dimensional_info").html(`<p class="p_black justificado"><b>Por ejemplo</b>, un Ampere o Amperio equivale a la intensidad de una corriente constante que, manteniéndose en dos conductores paralelos, rectilíneos, de longitud infinita, de sección circular despreciable y situados a una distancia de un metro uno de otro en el vacío, produciría una fuerza igual a 2×10–7 Newton por metro de longitud</p>`);
            break;
        default:
            break;
    }
}

function svg_img(num) {
    $("#svg-info").addClass('d-none');
    switch (parseInt(num)) {
        case 1:
            $("#svg-info").html(`
                                <div class="radius-2 img-100" style="background-color: #ffe699;padding: 5px;">
                                  <div class="img-100 d-flex" style="opacity: initial;height: 20px;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -30px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-verde" style="background: #1f4e79; width: 30px; height: 30px;">
                                        <h3 class="text-white text-center x-modal-text"><b>X</b></h3>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="" style="height: 300px;padding: 0px 30px 1px 0px;">
                                      <div class="">
                                        <p class="p_black justificado">Cuando una partícula se mueve en un círculo con rapidez constante, el movimiento se conoce como movimiento circular uniforme. Un automóvil que da vuelta en una curva de radio constante con rapidez constante, un satélite en órbita circular y un patinador que describe un círculo con rapidez constante son ejemplos de este movimiento</p>
                                        <br>
                                        <div class="text-center">
                                           <img src="assets/img/img_ova/neutrones.png" class="img-25">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "left: 0px; bottom: 50px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            break;
        case 2:
            $("#svg-info").html(`
                                <div class="radius-2 img-100" style="background-color: #ffe699;padding: 5px;">
                                  <div class="img-100 d-flex" style="opacity: initial;height: 20px;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -30px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-azul" style="background: #1f4e79; width: 30px; height: 30px;">
                                        <h3 class="text-white text-center x-modal-text"><b>X</b></h3>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="" style="height: 270px;">
                                      <div class="">
                                        <p class="p_black text-center">clic a la imagen</p>
                                        <div class="text-center" style='padding-right: 15px;'>
                                           <img src="assets/img/img_ova/imagenejemploparticula_imagenejemploparticula.svg" class="img-100" data-toggle="modal" data-target="#agran1">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "right: 40px; bottom: 30px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        case 3:
            $("#svg-info").html(`
                                <div class="radius-2 img-100" style="background-color: #ffe699;padding: 5px;">
                                  <div class="img-100 d-flex" style="opacity: initial;height: 20px;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -30px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-verde-o" style="background: #1f4e79; width: 30px; height: 30px;">
                                        <h3 class="text-white text-center x-modal-text"><b>X</b></h3>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="" style='height: 220px;'>
                                      <div class="" style='padding-right: 30px;'>
                                        <p class="p_black justificado">No hay componente de aceleración paralela (tangente) a la trayectoria; si la hubiera, la rapidez cambiaría. El vector aceleración es perpendicular (normal) a la trayectoria y, por lo tanto, se dirige hacia adentro (¡nunca hacia afuera!), al centro de la trayectoria circular. Esto causa el cambio en la dirección de la velocidad, sin que cambie la rapidez.</p>
                                        <div>
                                            <button class="btn boton_claro" style="" data-toggle="modal" data-target="#Verinformación2-modal">Ver + información</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "left: 0px; bottom: 50px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        default:
            break;
    }
}

function cerrar_svg() {
    $('#svg-info').addClass('d-none');
}

function pant9(num) {
    switch (parseInt(num)) {
        case 1:
            var texto = `
            <div class="bannerp-9" style="">
              <p class="justificado" style="font-size: 14px;">Se observa la tabla anterior, note por favor que en la fila del SI se han empleado las unidades de este sistema, ahora se establece que para referirse en general a cualquier unidad de longitud se usa L y para el tiempo T. Ahora se puede volver a la primera fila y se verá como las columnas son consistentes en la información que ofrecen. En el área, por ejemplo, se obtiene al multiplicar una longitud por otra de ahí que su dimensión sea L<sup>2</sup> y que eso en el sistema SI corresponda a m<sup>2</sup> y en el norteamericano a ft<sup>2</sup>.</p>
            </div>`;
            $('.orange_cont').html(texto);

            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo1').removeClass('inactivo');
            $('.circulo1').addClass('activo');
            break;
        case 2:
            var texto = `<p class="justificado" style="font-size: 14px;">Este enfoque va a permitir comprobar si una formula en particular es dimensionalmente correcta o no. Ahora, se observa cómo se puede proceder, por ejemplo, se sabe que el trabajo realizado por una fuerza constante se mide J (1 Joule equivale a 1 kg m<sup>2</sup>/s<sup>2</sup>) y que el valor de este trabajo se puede calcular con la formula W = F d cos(a), la fuerza F se mide en N (Newtons y equivale a 1 kg m /s<sup>2</sup>) y la distancia d se mide en metros (m) y cos(a) no tiene unidades, por tanto, si se multiplica kg m /s<sup>2</sup> por m se obtiene kg m<sup>2</sup>/s<sup>2</sup> por lo que se concluye que la fórmula es dimensionalmente correcta.</p>`;
            $('.bannerp-9').html(texto);
            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo2').removeClass('inactivo');
            $('.circulo2').addClass('activo');
            break;
        case 3:
            var texto = `<p class="justificado" style="font-size: 14px;">Otro ejemplo, se sabe que la energía cinética también se mide en J y se calcula como 0,5 mv<sup>2</sup>, entonces 0,5 no tiene unidades porque es una constante y queda kg (m/s)<sup>2</sup> finalmente kg m<sup>2</sup>/s<sup>2</sup> que son las unidades equivalentes del J por tanto también es dimensionalmente correcta. Pero si dicen que la velocidad v = d t las unidades resultantes usan SI serian ms cuando se sabe que debería ser m/s por tanto no es dimensionalmente correcta y no se podría usar para calcular la velocidad.</p>`;
            $('.bannerp-9').html(texto);
            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo3').removeClass('inactivo');
            $('.circulo3').addClass('activo');
            break;
        default:

            break;
    }
}

function equivalencias(num) {
    switch (parseInt(num)) {
        case 1:
            $("#equivalencia-1").removeClass('col-md-6');
            $("#equivalencia-1").addClass('col-md-1');
            $(".equivalencia-1").addClass('d-none');
            $(".equivalencia-1").removeClass('d-flex');
            $(".equivalencia-content-1").removeClass('px-5');
            $(".img-equivalencia-flecha-1").removeClass('d-flex');
            $(".img-equivalencia-flecha-1").addClass('d-none');
            $(".img-equivalencia-1").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-2").removeClass('col-md-1');
            $("#equivalencia-2").addClass('col-md-6');
            $("#equivalencia-2").removeClass('d-none');
            $(".equivalencia-2").removeClass('d-none');
            $(".img-equivalencia-2").removeClass('d-none');
            $("#equivalencia-3, #equivalencia-4, #equivalencia-5").addClass('d-none');
            $(".equivalencia-3, .equivalencia-4, .equivalencia-5").addClass('d-none');
            $(".img-equivalencia-1, .img-equivalencia-3, .img-equivalencia-4, .img-equivalencia-5").addClass('d-none');
            break;
        case 2:
            $("#equivalencia-2").removeClass('col-md-6');
            $("#equivalencia-2").addClass('col-md-1');
            $(".equivalencia-2").addClass('d-none');
            $(".equivalencia-2").removeClass('d-flex');
            $(".equivalencia-content-2").removeClass('px-5');
            $(".img-equivalencia-flecha-2").removeClass('d-flex');
            $(".img-equivalencia-flecha-2").addClass('d-none');
            $(".img-equivalencia-2").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-3").removeClass('col-md-1');
            $("#equivalencia-3").addClass('col-md-6');
            $("#equivalencia-3").removeClass('d-none');
            $(".equivalencia-3").removeClass('d-none');
            $(".img-equivalencia-3").removeClass('d-none');
            $("#equivalencia-4, #equivalencia-5").addClass('d-none');
            $(".equivalencia-4, .equivalencia-5").addClass('d-none');
            $(".img-equivalencia-1").attr('style', 'top: 75px;');
            $(".img-equivalencia-1").removeClass('d-flex');
            $(".img-equivalencia-1").addClass('d-none');
            break;
        case 3:
            $("#equivalencia-3").removeClass('col-md-6');
            $("#equivalencia-3").addClass('col-md-1');
            $(".equivalencia-3").addClass('d-none');
            $(".equivalencia-3").removeClass('d-flex');
            $(".equivalencia-content-3").removeClass('px-5');
            $(".img-equivalencia-flecha-3").removeClass('d-flex');
            $(".img-equivalencia-flecha-3").addClass('d-none');
            $(".img-equivalencia-3").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-4").removeClass('col-md-1');
            $("#equivalencia-4").addClass('col-md-6');
            $("#equivalencia-4").removeClass('d-none');
            $(".equivalencia-4").removeClass('d-none');
            $(".img-equivalencia-4").removeClass('d-none');
            $("#equivalencia-5").addClass('d-none');
            $(".equivalencia-5").addClass('d-none');
            $(".img-equivalencia-2").attr('style', 'top: 75px;');
            $(".img-equivalencia-2").removeClass('d-flex');
            $(".img-equivalencia-2").addClass('d-none');
            break;
        case 4:
            $("#equivalencia-4").removeClass('col-md-6');
            $("#equivalencia-4").addClass('col-md-1');
            $(".equivalencia-4").addClass('d-none');
            $(".equivalencia-4").removeClass('d-flex');
            $(".equivalencia-content-4").removeClass('px-5');
            $(".img-equivalencia-flecha-4").removeClass('d-flex');
            $(".img-equivalencia-flecha-4").addClass('d-none');
            $(".img-equivalencia-4").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-5").removeClass('col-md-1');
            $("#equivalencia-5").addClass('col-md-6');
            $("#equivalencia-5").removeClass('d-none');
            $(".equivalencia-5").removeClass('d-none');
            $(".img-equivalencia-5").removeClass('d-none');
            $(".img-equivalencia-3").attr('style', 'top: 75px;');
            $(".img-equivalencia-3").removeClass('d-flex');
            $(".img-equivalencia-3").addClass('d-none');
            break;
        case 5:
            $("#info-equivalencia").html(`
                                        <div class="col-md-12">
                                            <p class="justificado p_black">Dado la misma evolución de las diferentes estrategias de estandarización en diversas partes del mundo hasta los sistemas de unidades modernos, existe numerosas unidades para referirse a la misma cantidad física, para medir una longitud se puede usar metros, pulgadas, yardas o años luz. </p>
                                            <br>
                                            <p class="justificado p_black">Haga clic en las flechas para avanzar en la información:</p>
                                        </div>
                                        <div class="col-md-6" id="equivalencia-1">
                                          <div class="radius-2 bg-amarillo-o py-3 px-5 h-100 equivalencia-content-1">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-1">Es por eso por lo que se hace necesario contar con tablas que contengan tales equivalencias entre los diferentes sistemas de medidas y poder realizar los cálculos en unidades homogéneas. También ocurre con mucha frecuencia que la unidad misma en un sistema dado sea inadecuada ya sea por grande o por pequeña, es ahí donde entra los múltiplos y submúltiplos de la unidad, normalmente usando potencias de 10, como se muestra en las siguientes tablas.</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-1" style="left: 25px;"><img src="assets/img/img_ova/altura.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex img-equivalencia-flecha-1" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto" onclick="equivalencias(1)"></div>
                                              </div>
                                            </div>
                                            <div class="d-flex equivalencia-1">
                                              <button class="p_white bg-azul btn ml-auto" data-toggle="modal" data-target="#equivalencia-modal">Ver tabla</button>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-2">
                                          <div class="radius-2 bg-cafe-c py-3 px-5 h-100 equivalencia-content-2">
                                            <div class="d-flex">
                                              <p class="justificado p_white equivalencia-2">En el SI, por ejemplo, el metro en la unidad de longitud, pero resulta pequeño para medir el diámetro del Sol, pues seria 1.392.680.000 m, que sería lo mismo que 1.392.680 km o mejor 1,39268 Gm. En el otro sentido de la tabla de tamaños también es aplicable, por ejemplo, si algo mide 0,0000000015 m sería mejor expresarlo como 1,5 nm (que es lo mismos que 1,5x10<sup>-9</sup> m).</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-2" style="left: 25px;"><img src="assets/img/img_ova/cientifico.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-2" onclick="equivalencias(2)"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-3">
                                          <div class="radius-2 bg-otro-azul-mc py-3 px-5 h-100 equivalencia-content-3">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-3">Como se había comentado en muchas ocasiones se debe resolver problemas en los que interviene las mismas cantidades físicas pero expresadas en diferentes sistemas de unidades y para facilitar los cálculos se requiere homogenizarlos. Para conseguir esto se puede utilizar los denominados factores de conversión. Un factor de conversión es una fracción que es igual a 1, por lo que al multiplicarlo (por eso se llama factor) por la cantidad original está en realidad no cambia físicamente solo la forma de representarla.</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-3" style="left: 25px;"><img src="assets/img/img_ova/codigo-binario.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-3" onclick="equivalencias(3)"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-4">
                                          <div class="radius-2 bg-un-azul-mas py-3 px-5 h-100 equivalencia-content-4">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-4">De la siguiente tabla se puede ver que 1 m es igual a 3,281 pies, lo que quiere decir que (1 m / 3,281 pies) = 1. Entonces si se tiene 425,78 pies y se requiere en metros se podría simplemente multiplicar este valor por el factor adecuado en este caso (1 m / 3,281 pies) así las cosas 425,78 pies x (1 m / 3,281 pies) = 129,77 m (nótese que los pies se cancelan y solo queda en el denominador m).</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-4" style="left: 25px;"><img src="assets/img/img_ova/regla-y-lapiz.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-4" onclick="equivalencias(4)"></div>
                                              </div>
                                            </div>
                                            <div class="d-flex equivalencia-4">
                                              <button class="p_white bg-azul btn ml-auto" data-toggle="modal" data-target="#equivalencia-modal-2">Ver tabla</button>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-5">
                                          <div class="radius-2 bg-gris-c py-3 px-5 h-100 equivalencia-content-5">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-5">Con la información de esta tabla se puede encontrar con facilidad a cuantos m/s equivale una velocidad de 225 millas/hora, se muestra:</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-5" style="left: 25px;"><img src="assets/img/img_ova/deberes.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-5" onclick="equivalencias(5)"></div>
                                              </div>
                                            </div>
                                            <div class="d-flex equivalencia-5">
                                              <button class="p_white bg-azul btn ml-auto" data-toggle="modal" data-target="#equivalencia-modal-3">Ver tabla</button>
                                            </div>
                                          </div>
                                        </div>
                                        `);
            break;
        default:
            break;
    }
}

function aviones(num) {
    $("#avion").removeClass('fondo-1');
    $("#avion").removeClass('fondo-2');
    $("#avion").removeClass('fondo-3');
    $("#avion").removeClass('fondo-4');
    $("#avion").removeClass('fondo-5');
    $("#avion").removeClass('fondo-6');
    $("#avion").addClass('fondo-1');
    switch (parseInt(num)) {
        case 1:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-2');
            $("#avion").attr('onclick', 'aviones(2)');
            $("#avion").attr('style', 'width: 700px; height: 475px;');
            $(".avion-content").html(`<p class="p_black justificado">Algunas cantidades físicas, como el tiempo, la temperatura, la masa y la densidad se pueden describir completamente con un solo número y una unidad. No obstante, en física muchas otras cantidades importantes están asociadas con una dirección y no pueden describirse con un solo número.</p>`);
            break;
        case 2:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-3');
            $("#avion").attr('onclick', 'aviones(3)');
            $("#avion").attr('style', 'width: 700px; height: 475px;');
            $(".avion-content").html(`<p class="p_black justificado"><span class="p_white radius-2 bg-otro-azul-o"></b>Un ejemplo</b></span> sencillo es el desplazamiento de un avión: se debe indicar no solo qué tan rápidamente se desplaza, sino también en qué dirección. La rapidez del avión combinada con su dirección constituye una cantidad llamada velocidad.</p>`);
            break;
        case 3:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-4');
            $("#avion").attr('onclick', 'aviones(4)');
            $("#avion").attr('style', 'width: 700px; height: 475px;');
            $(".avion-content").html(`<p class="p_black justificado"><span class="p_white radius-2 bg-otro-azul-o"></b>Otro ejemplo</b></span>, es la fuerza, que en física es un empuje o un tirón aplicado a un cuerpo. Para describir plenamente una fuerza hay que indicar no solo su intensidad, sino también en qué dirección tira o empuja sobre un cuerpo.</p>`);
            break;
        case 4:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('m-auto');
            $(".avion-content").addClass('mx-auto mt-auto');
            $("#avion").addClass('fondo-5');
            $("#avion").attr('onclick', 'aviones(5)');
            $("#avion").attr('style', 'width: 700px; height: 475px;');
            $(".avion-content").html(`
                                        <p class="p_black justificado">Cuando una cantidad física se describe con un solo número, se dice que es una cantidad <span class="p_white radius-2 bg-otro-azul-o"></b>escalar.</b></span> En cambio, una cantidad <span class="p_white radius-2 bg-otro-azul-o"></b>vectorial</b></span> incluye tanto una magnitud (la cual indica “qué tanto” o “qué tan grande”) como una dirección en el espacio. </p>
                                        <br>
                                        <p class="p_black justificado">Los cálculos que combinan cantidades escalares usan las operaciones aritméticas ordinarias. Por ejemplo, 6 kg + 3 kg = 9 kg, o 4 * 2 s = 8 s. No obstante, la combinación de vectores requiere un conjunto diferente de operaciones.</p>
                                    `);
            break;
        case 5:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('m-auto');
            $(".avion-content").addClass('mx-auto mt-auto');
            $("#avion").addClass('fondo-6');
            $("#avion").attr('onclick', 'aviones(6)');
            $("#avion").attr('style', 'width: 780px; height: 475px;');
            $(".avion-content").html(`
                                        <div class="d-flex">
                                          <img src="assets/img/img_ova/profesor (3).png" class="img-45 m-auto">
                                        </div>
                                        <p class="p_black justificado">Para entender mejor los vectores y su combinación, se comienza con la cantidad vectorial más sencilla, el desplazamiento, que simplemente es un cambio en la posición de un objeto. El desplazamiento es una cantidad vectorial porque se debe establecer no solo qué tan lejos se mueve el objeto, sino también en qué dirección.</p>
                                        <br>
                                        <p class="p_black justificado">Caminar 3 km al norte desde una casa no lleva al mismo sitio que caminar 3 km al sureste; ambos desplazamientos tienen la misma magnitud, pero diferente dirección.</p>
                                    `);
            break;
        case 6:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-1');
            $("#avion").attr('onclick', 'aviones(1)');
            $("#avion").attr('style', 'width: 700px; height: 475px;');
            $(".avion-content").html(`
                                    <div class="d-flex">
                                      <img src="assets/img/img_ova/profesor (2).png" class="img-45 m-auto">
                                    </div>
                                    <p class="border-top-azul text-azul-c text-center my-3"><b>Cantidad escalares y vectoriales </b></p>
                                    `);
            break;
        default:
            break;
    }
}

function actividadrecogible(num) {
    switch (parseInt(num)) {
        case 1:
            $('.bg-recogible').css({ 'width': '12%' });
            $('.img_recogible1').css({ 'max-width': '125%' })
            break;
        default:

            break;
    }
}


function efect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').addClass('crece');
            $('.div_texto').addClass('visibilidad');
            break;
        case 2:
            $('.creciente2').addClass('crece');
            $('.div_texto2').addClass('visibilidad');
            break;
        case 3:
            $('.creciente3').addClass('crece');
            $('.div_texto3').addClass('visibilidad');
            break;
        case 4:
            $('.creciente4').addClass('crece');
            $('.div_texto4').addClass('visibilidad');
            break;
        case 5:
            $('.creciente5').addClass('crece');
            $('.div_texto5').addClass('visibilidad');
            break;
        case 6:
            $('.creciente6').addClass('crece');
            $('.div_texto6').addClass('visibilidad');
            $('.btn_modal').html('<button data-toggle="modal" data-target="#modal3-4" class="btn" style="background: #7a3d74;color: white;font-size: 18px;">Ver aquí ejemplo de preguntas de investigación</button>');
            break;
        default:
            break;
    }

}

function removeefect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').removeClass('crece');
            $('.div_texto').removeClass('visibilidad');
            break;
        case 2:
            $('.creciente2').removeClass('crece');
            $('.div_texto2').removeClass('visibilidad');
            break;
        case 3:
            $('.creciente3').removeClass('crece');
            $('.div_texto3').removeClass('visibilidad');
            break;
        case 4:
            $('.creciente4').removeClass('crece');
            $('.div_texto4').removeClass('visibilidad');
            break;
        case 5:
            $('.creciente5').removeClass('crece');
            $('.div_texto5').removeClass('visibilidad');
            break;
        case 6:
            $('.creciente6').removeClass('crece');
            $('.div_texto6').removeClass('visibilidad');
            break;
        default:
            break;
    }

}

function removeefect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').removeClass('crece');
            $('.div_texto').removeClass('visibilidad');
            break;
        case 2:
            $('.creciente2').removeClass('crece');
            $('.div_texto2').removeClass('visibilidad');
            break;
        case 3:
            $('.creciente3').removeClass('crece');
            $('.div_texto3').removeClass('visibilidad');
            break;
        case 4:
            $('.creciente4').removeClass('crece');
            $('.div_texto4').removeClass('visibilidad');
            break;
        case 5:
            $('.creciente5').removeClass('crece');
            $('.div_texto5').removeClass('visibilidad');
            break;
        case 6:
            $('.creciente6').removeClass('crece');
            $('.div_texto6').removeClass('visibilidad');
            break;
        default:
            break;
    }
}

function ruta(num) {
    $("#ruta-info").addClass('d-none');
    switch (parseInt(num)) {
        case 1:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Frecuentemente se representa la magnitud de una cantidad vectorial (su longitud, en el caso de un vector desplazamiento) con la misma letra que se usa para el vector, pero sin la flecha arriba. Una notación alternativa es el símbolo vectorial encerrado entre barras verticales en ambos lados:</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/magnitud.png" class="m-auto img-100">
                                      </div>
                                      <div>
                                        <p class="p_black justificado">La magnitud de una cantidad vectorial es una cantidad escalar (un número) y siempre es positiva.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 2:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Para definir las componentes de un vector se parte de un sistema rectangular de ejes de coordenadas (cartesiano) y luego se dibuja el vector con su cola en O, el origen del sistema coordenado. Se puede representar cualquier vector en el plano xy como la suma de un vector paralelo al eje x y un vector paralelo al eje y.</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/componentes.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 3:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Estos dos vectores se identifican como <b>A</b>x y <b>A</b>y; son los vectores componentes del vector y su suma vectorial es simbólicamente igual a:</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/A FLECHA.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 4:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Se puede calcular las componentes del vector si se conoce la magnitud <b>A</b> y su dirección. Se describirá la dirección de un vector por su ángulo en relación con una dirección de referencia, medido entre el eje x positivo y el vector.</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/cos y sen.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 5:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_white justificado p-3 bg-azul w-fit"><b><i>Ejemplo:</i></b></p>
                                      </div>
                                      <div>
                                        <p class="p_black justificado">¿Cuáles son las componentes x y y del vector en la figura? La magnitud del vector es D = 3.00 m y el ángulo es α = 45°.</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/grafica 4.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 6:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Primero note que el ángulo α no es el de referencia, sino que es 360° – α, es decir, 315°, con esto aclarado vemos que <b>D</b>x = D * cos 315° = 3 * (√2)⁄2 = 2,12 m, mientras que <b>D</b>y = D * sen 315° = 3 * (−√2)⁄2 = -2,12 m. </p>
                                        <br>
                                        <p class="p_black justificado">Note que la componente en x apunta a la derecha (sentido positivo) pero que la componente en y apunta hacia abajo (sentido negativo) porque el sen (315°) es negativo y eso concuerda con las direcciones del plano coordenado.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        default:
            break;
    }
}

function cerrar_ruta() {
    $('#ruta-info').addClass('d-none');

}

function teorias() {
    var teorias_num = $(this).data('teoria');
    $(".teoria-flecha").removeClass('d-block');
    $(".teoria-flecha").addClass('d-none');
    $(".teoria-flecha-" + teorias_num).removeClass('d-none');
    $(".teoria-flecha-" + teorias_num).addClass('d-block');

    if (teorias_num == 1) {
        var texto = `
                        <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                            <div class="bg-azul-o h-6px m-auto">
                                <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                    <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                        <p class="p_black justificado">En primer lugar, se tiene la <b>multiplicación por un escalar.</b> Este tipo de operación se da cuando se multiplica un vector por un número escalar, el resultado es un nuevo vector con la misma dirección del vector original, pero con una magnitud modificada y la cual dependerá del valor del escalar, si el escalar es menor de 1, el vector se acorta, si es mayor de 1 se alarga, si es negativo además de lo anterior cambia el sentido del vector y si es 1 pues no cambia.</p>
                                    </div>
                                    <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                        <img src="assets/img/img_ova/grafica 5.png" class="m-auto img-100" data-teoria="2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        $("#teoria").html(texto);
    } else if (teorias_num == 2) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                    <img src="assets/img/img_ova/imagen423.png" style="width:230px;">
                                </div>
                                <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                    <img src="assets/img/img_ova/imagen322.png" style="width:230px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
    } else if (teorias_num == 3) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco radius-2 my-auto mx-3 p-3 d-flex">
                                    <div class="img-40">
                                        <img src="assets/img/img_ova/opinion.png" class="m-auto img-100" data-teoria="3">
                                    </div>
                                    <p class="p_black justificado"><img src="assets/img/img_ova/imagen522.png" style="width:100%"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
    } else if (teorias_num == 4) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco img-35 radius-2 my-auto mx-3 p-3">
                                    <img src="assets/img/img_ova/calculadora.png" class="m-auto img-100" data-teoria="4">
                                </div>
                                <div class="bg-blanco img-30 radius-2 my-auto mx-3 p-3">
                                    <p class="p_black justificado" style="font-size: 14px;">La suma (o resta) de vectores es muy común en física.  Se supone que una partícula experimenta un desplazamiento seguido por un segundo desplazamiento. El resultado final es el mismo como si la partícula hubiera partido del mismo punto y experimentado un solo desplazamiento).</p>
                                </div>
                                <div class="bg-blanco img-35 radius-2 my-auto mx-3 p-3">
                                    <p class="p_black justificado">Se llama a suma vectorial, o resultante, de los desplazamientos. Si se efectúan los desplazamientos y en orden inverso, primero y luego el resultado será el mismo ya que se cumple la propiedad conmutativa.</p>
                                    <button class="btn bg-amarillo-c p-3 p_black" data-toggle="modal" data-target="#teoria-modal">Ver + información</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
    } else if (teorias_num == 5) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco img-30 radius-2 my-auto mx-3 p-3">
                                    <div class="d-flex">
                                        <img src="assets/img/img_ova/pensar.png" class="m-auto img-70" data-teoria="4">
                                    </div>
                                    <p class="p_black justificado">En el caso de dos vectores 𝐴&#8407 y 𝐵&#8407 la suma o resultante seria 𝑅&#8407.</p>
                                    <p class="p_black justificado">Pasa el curso por la imagen para ampliarla:</p>
                                </div>
                                <div class="bg-blanco img-40 radius-2 my-auto mx-3 p-3 d-flex">
                                    <img src="assets/img/img_ova/grafica 7.png" class="m-auto img-80 zoom_img" data-teoria="5" data-zoom-image="assets/img/img_ova/grafica 7.png">
                                </div>
                                <div class="bg-blanco img-30 radius-2 my-auto mx-3 p-3">
                                    <p class="p_black justificado">Se puede ampliar este procedimiento para calcular la suma de cualquier cantidad de vectores. Si es la suma vectorial de entonces, las componentes son:</p>
                                    <img src="assets/img/img_ova/formula-r.png" class="m-auto img-100" data-teoria="5">
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
        $(".zoomContainer").remove();
        $('.zoom_img').elevateZoom({ zoomWindowPosition: 50 });
    }
}

function activi3(num) {
    switch (parseInt(num)) {
        case 1:
            $('.contraer1').css({ 'height': '20%' });
            $('.imagenactivi1').css({ 'visibility': 'hidden' });
            break;
        case 2:
            $('.contraer2').css({ 'height': '20%' });
            $('.imagenactivi2').css({ 'visibility': 'hidden' });
            break;
        case 3:
            $('.contraer3').css({ 'height': '20%' });
            $('.imagenactivi3').css({ 'visibility': 'hidden' });
            break;
        default:

            break;
    }
}

function pantallas18(num) {
    switch (parseInt(num)) {
        case 0:
            $('.text-manzana').addClass('invisible');
            $('.text-manzana').removeClass('visible');

            $('.manzana1').removeClass('invisible');
            $('.manzana1').addClass('visible');
            break;
        case 1:
            $('.text-manzana').addClass('invisible');
            $('.text-manzana').removeClass('visible');

            $('.manzana2').removeClass('invisible');
            $('.manzana2').addClass('visible');
            break;
        case 2:
            $('.text-manzana').addClass('invisible');
            $('.text-manzana').removeClass('visible');

            $('.manzana3').removeClass('invisible');
            $('.manzana3').addClass('visible');
            break;
        default:
            break;
    }
}

function btns_modal(num) {
    switch (parseInt(num)) {
        case 1:
            $('.btnmodal').addClass('btn_inactive');
            $('.btnmodal').removeClass('btn_active');

            $('.btn1').removeClass('btn_inactive');
            $('.btn1').addClass('btn_active');
            break;
        case 2:
            $('.btnmodal').addClass('btn_inactive');
            $('.btnmodal').removeClass('btn_active');

            $('.btn2').removeClass('btn_inactive');
            $('.btn2').addClass('btn_active');
            break;
        default:
            break;
    }
}

function formulas_unidimencionales(num) {
    switch (parseInt(num)) {
        case 1:
            $('.form_uni').addClass('invisible');
            $('.form_uni').removeClass('visible');

            $('.formula_unidimencional1').removeClass('invisible');
            $('.formula_unidimencional1').addClass('visible');

            $('.btn_numeros').addClass('btn_numerosInactive');
            $('.btn_numeros').removeClass('btn_numerosActive');

            $('.btn_numeros1').removeClass('btn_numerosInactive');
            $('.btn_numeros1').addClass('btn_numerosActive');
            break;
        case 2:
            $('.form_uni').addClass('invisible');
            $('.form_uni').removeClass('visible');

            $('.formula_unidimencional2').removeClass('invisible');
            $('.formula_unidimencional2').addClass('visible');

            $('.btn_numeros').addClass('btn_numerosInactive');
            $('.btn_numeros').removeClass('btn_numerosActive');

            $('.btn_numeros2').removeClass('btn_numerosInactive');
            $('.btn_numeros2').addClass('btn_numerosActive');
            break;
        case 3:
            $('.form_uni').addClass('invisible');
            $('.form_uni').removeClass('visible');

            $('.formula_unidimencional3').removeClass('invisible');
            $('.formula_unidimencional3').addClass('visible');

            $('.btn_numeros').addClass('btn_numerosInactive');
            $('.btn_numeros').removeClass('btn_numerosActive');

            $('.btn_numeros3').removeClass('btn_numerosInactive');
            $('.btn_numeros3').addClass('btn_numerosActive');
            break;
        case 4:
            $('.form_uni').addClass('invisible');
            $('.form_uni').removeClass('visible');

            $('.formula_unidimencional4').removeClass('invisible');
            $('.formula_unidimencional4').addClass('visible');

            $('.btn_numeros').addClass('btn_numerosInactive');
            $('.btn_numeros').removeClass('btn_numerosActive');

            $('.btn_numeros4').removeClass('btn_numerosInactive');
            $('.btn_numeros4').addClass('btn_numerosActive');
            break;
        case 5:
            $('.form_uni').addClass('invisible');
            $('.form_uni').removeClass('visible');

            $('.formula_unidimencional5').removeClass('invisible');
            $('.formula_unidimencional5').addClass('visible');

            $('.btn_numeros').addClass('btn_numerosInactive');
            $('.btn_numeros').removeClass('btn_numerosActive');

            $('.btn_numeros5').removeClass('btn_numerosInactive');
            $('.btn_numeros5').addClass('btn_numerosActive');
            break;
        default:
            break;
    }
}

function pantalla21(num) {
    switch (parseInt(num)) {
        case 1:
            $('.pantalla21').addClass('targeta_blanca');

            $('.opciones').addClass('invisible');
            $('.opciones').removeClass('visible');

            $('.opcion2').removeClass('invisible');
            $('.opcion2').addClass('visible');
            break;
        case 2:
            $('.pantalla21').addClass('targeta_blanca');

            $('.opciones').addClass('invisible');
            $('.opciones').removeClass('visible');

            $('.opcion3').removeClass('invisible');
            $('.opcion3').addClass('visible');
            break;
        case 3:
            $('.pantalla21').addClass('targeta_blanca');

            $('.opciones').addClass('invisible');
            $('.opciones').removeClass('visible');

            $('.opcion4').removeClass('invisible');
            $('.opcion4').addClass('visible');
            break;
        case 4:
            $('.pantalla21').removeClass('targeta_blanca');

            $('.opciones').addClass('invisible');
            $('.opciones').removeClass('visible');

            $('.opcion1').removeClass('invisible');
            $('.opcion1').addClass('visible');
            break;
        default:
            break;
    }
}

function color(num) {
    $(".notas_1, .notas_2").removeClass('color_nota');
    if (num == 1) {
        $(".notas_1").addClass('color_nota');
    } else if (num == 2) {
        $(".notas_2").addClass('color_nota');
    }
}

function pantalla22(num) {
    switch (parseInt(num)) {
        case 1:
            $('.pantalla22').addClass('targeta_blanca');

            $('.opciones_1').addClass('invisible');
            $('.opciones_1').removeClass('visible');

            $('.opcion2-2').removeClass('invisible');
            $('.opcion2-2').addClass('visible');
            break;
        case 2:
            $('.pantalla22').addClass('targeta_blanca');

            $('.opciones_1').addClass('invisible');
            $('.opciones_1').removeClass('visible');

            $('.opcion3-3').removeClass('invisible');
            $('.opcion3-3').addClass('visible');
            break;
        case 3:
            $('.pantalla22').removeClass('targeta_blanca');

            $('.opciones_1').addClass('invisible');
            $('.opciones_1').removeClass('visible');

            $('.opcion1-1').removeClass('invisible');
            $('.opcion1-1').addClass('visible');
            break;
        default:
            break;
    }
}

function aparecer(num) {
    switch (parseInt(num)) {
        case 1:
            $('.control_prev2').removeClass('d-none');
            break;
        case 2:
            $('.control_prev2').addClass('d-none');
            break;
        default:
            break;
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
    this.att.max = 2;
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
        pantallas18(this.input.value);
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

function paraIframe(num) {
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

function acordeon(num){
    switch (parseInt(num)) {
        case 1:
            $('.items').addClass('d-none');
            $('.item_acordeon1').removeClass('d-none');
            break;
        case 2:
            $('.items').addClass('d-none');
            $('.item_acordeon2').removeClass('d-none');
            break;
        case 3:
            $('.items').addClass('d-none');
            $('.item_acordeon3').removeClass('d-none');
            break;
        case 4:
            $('.items').addClass('d-none');
            $('.item_acordeon4').removeClass('d-none');
            break;
        default:
            break;
    }
}

function vehiculos(num){
    switch (parseInt(num)) {
        case 1:
            $('.vehiculos').addClass('d-none');
            $('.vehiulo1').removeClass('d-none');
            break;
        case 2:
            $('.vehiculos').addClass('d-none');
            $('.vehiulo2').removeClass('d-none');
            break;
        case 3:
            $('.vehiculos').addClass('d-none');
            $('.vehiulo3').removeClass('d-none');
            break;
        default:
            break;
    }
}