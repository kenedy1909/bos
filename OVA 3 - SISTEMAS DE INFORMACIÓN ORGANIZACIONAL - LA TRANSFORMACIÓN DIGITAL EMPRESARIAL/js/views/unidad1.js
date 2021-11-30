$(document).ready(function() {
    $(".zoomContainer").remove();
    $(".menu1").removeClass('d-none');
    $(".menu1").addClass('c-show');

    $(".ov-personaje").hide();

    paso = false;
    star_uni = 1;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');

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
    $('.zoom_img').elevateZoom({ zoomWindowPosition: 10 });
    $('#next').on('click', function() {
        $('#smartwizard').smartWizard("next");
        slide(0);
        actualizarprogress();

    });

    $('#prev').on('click', function() {
        $('#smartwizard').smartWizard("prev");
        slide(0);
        actualizarprogress();
    });
    slide_predeterminado();

    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob4');
    bar = document.querySelector('.custom-scrollbar__bar4');
    container = document.querySelector('.custom-scrollbar__inner4');
    scroll();

    slide_link(tema);


});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function slide(num) {
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    if (num = 1) {
        controlSlides(stepIndex+2);
    }else{
        controlSlides(stepIndex+1);
    }
}

function slide_predeterminado() {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num) {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num - 1);
    controlSlides(num);
}
var sumaslide = 0;

function controlSlides(num) {
    switch (parseInt(num)) {
        case 1:
            var pdf = `<p class="p_white">
                            <a href="assets/PDF/UNIDAD1/guia1PrincipiosDelMarketingDigital.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdfgris.png"> GuÍa1_Principios del marketing digital.pdf    <b class="text-cafe" style="float: right;"><u>Ver</u></b></a>
                        </p>
                        <p class="p_white">
                            <a href="assets/PDF/UNIDAD1/guia2RedesSociales.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdfgris.png"> Guía2_Redes Sociales.pdf    <b class="text-cafe" style="float: right;"><u>Ver</u></b></a>
                        </p>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");

            break;
        case 2:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 6:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");

            break;
        case 8:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");

            break;
        case 10:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");

            break;
        case 11:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");

            break;
        case 12:
            sumaslide++;
            if (sumaslide < 2) {
                var slideCount = $('#slider2 ul li').length;
                var slideWidth = $('#slider2 ul li').width();
                var slideHeight = $('#slider2 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;

                $('#slider2').css({ width: '100%', height: '700' });

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
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");

            break;
        case 13:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        case 18:
            $(".menu1").addClass('d-none');
            setMigaja("Unidades de aprendizaje", "1. Tendencias tecnológicas en las organizaciones", "> Megatendencias");
            break;
        default:
            break;
    }
}

function pantalla2(num) {
    switch (parseInt(num)) {
        case 1:

            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');
            $('.banewhite').removeClass('animacion');

            $('.banewhite1').removeClass('invisible');
            $('.banewhite1').addClass('visible');

            $('.banewhite1').addClass('animacion');

            break;
        case 2:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');
            $('.banewhite').removeClass('animacion');

            $('.banewhite2').removeClass('invisible');
            $('.banewhite2').addClass('visible');

            $('.banewhite2').addClass('animacion');
            break;
        case 3:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');
            $('.banewhite').removeClass('animacion');

            $('.banewhite3').removeClass('invisible');
            $('.banewhite3').addClass('visible');

            $('.banewhite3').addClass('animacion');
            break;
        case 4:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');
            $('.banewhite').removeClass('animacion');

            $('.banewhite4').removeClass('invisible');
            $('.banewhite4').addClass('visible');

            $('.banewhite4').addClass('animacion');
            break;
        case 5:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');
            $('.banewhite').removeClass('animacion');

            $('.banewhite5').removeClass('invisible');
            $('.banewhite5').addClass('visible');

            $('.banewhite5').addClass('animacion');
            break;
        default:
            break;
    }
}

function textoRocas(num) {
    switch (parseInt(num)) {
        case 1:
            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc1').removeClass('invisible');
            $('.textoroc1').addClass('visible');

            $('.lineasRocas').addClass('escondido');
            $('.lineasRocas').removeClass('mostrado');

            $('.lineasR1').removeClass('escondido');
            $('.lineasR1').addClass('mostrado');
            break;
        case 2:
            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc2').removeClass('invisible');
            $('.textoroc2').addClass('visible');

            $('.lineasRocas').addClass('escondido');
            $('.lineasRocas').removeClass('mostrado');

            $('.lineasR2').removeClass('escondido');
            $('.lineasR2').addClass('mostrado');
            break;
        case 3:

            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc3').removeClass('invisible');
            $('.textoroc3').addClass('visible');

            $('.lineasRocas').addClass('escondido');
            $('.lineasRocas').removeClass('mostrado');

            $('.lineasR3').removeClass('escondido');
            $('.lineasR3').addClass('mostrado');
            break;
        case 4:

            $('.texto_rocas').addClass('invisible');
            $('.texto_rocas').removeClass('visible');

            $('.textoroc4').removeClass('invisible');
            $('.textoroc4').addClass('visible');

            $('.lineasRocas').addClass('escondido');
            $('.lineasRocas').removeClass('mostrado');

            $('.lineasR4').removeClass('escondido');
            $('.lineasR4').addClass('mostrado');
            break;
        default:
            break;
    }
}

function targetsreds(num) {
    switch (parseInt(num)) {
        case 1:
            $('.triaTargetRed').addClass('invisible');
            $('.triaTargetRed').removeClass('visible');

            $('.tria1').removeClass('invisible');
            $('.tria1').addClass('visible');

            $('.banepwhite').addClass('invisible');
            $('.banepwhite').removeClass('visible');

            $('.banep1').removeClass('invisible');
            $('.banep1').addClass('visible');
            break;
        case 2:
            $('.triaTargetRed').addClass('invisible');
            $('.triaTargetRed').removeClass('visible');

            $('.tria2').removeClass('invisible');
            $('.tria2').addClass('visible');

            $('.banepwhite').addClass('invisible');
            $('.banepwhite').removeClass('visible');

            $('.banep2').removeClass('invisible');
            $('.banep2').addClass('visible');
            break;
        default:
            break;
    }
}

function verman(num) {
    switch (parseInt(num)) {
        case 1:

            $('.verman1').removeClass('escondido');
            $('.verman1').addClass('mostrado');

            $('.verman1').addClass('animacion');
            break;
        case 2:

            $('.verman2').removeClass('escondido');
            $('.verman2').addClass('mostrado');

            $('.verman2').addClass('animacion');
            break;
        default:
            break;
    }
}
/*var knob = document.querySelector('.custom-scrollbar__knob2');
var bar = document.querySelector('.custom-scrollbar__bar2');
var container = document.querySelector('.custom-scrollbar__inner2');*/
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
        scroll_horizontal(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
    this.actualizar2 = function() {
        scroll_horizontal2(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
}


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

figura = document.getElementById("ctrflecha");

document.addEventListener("keydown",
    function(event) {
        switch (event.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                slide(1);
                actualizarprogress();
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                slide(1);
                actualizarprogress();
                break;
        }
    }
);