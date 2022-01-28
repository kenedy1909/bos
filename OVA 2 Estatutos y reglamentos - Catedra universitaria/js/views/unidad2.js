$(document).ready(function() {
    $(".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    star_uni = 2;
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
    /*$(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);*/

    $('#next').on('click', function() {
        $('#smartwizard').smartWizard("next");
        slide();
    });

    $('#prev').on('click', function() {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/

});

function slide() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    actualizarprogress(stepIndex + 1 + 27);
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
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}

function controlSlides(num) {
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "Introducción a la ética");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 16;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "Introducción a la ética");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "Ética, moral y derecho");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "Ética, moral y derecho");

            break;
        case 4:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "Ética, moral y derecho");

            break;
        case 5:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "La ética como fundamento del ciudadano");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "La ética como fundamento del ciudadano");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "La ética como fundamento del ciudadano");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "La ética como fundamento del ciudadano");
            break;
        case 9:
            $(".i3").html('')
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];
            var i = new Input2(2);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input2(2);
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
            setMigaja("Unidades de aprendizaje", "2. Nociones generales de la ética", "La ética como fundamento del ciudadano");
            break;
        default:
            break;
    }
}

function textoBorder(num) {
    switch (parseInt(num)) {
        case 1:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-1').removeClass('btn-borderInactive');
            $('.btnB-1').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border1').removeClass('oculto');
            $('.texto-border1').addClass('mostrado');
            break;
        case 2:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-2').removeClass('btn-borderInactive');
            $('.btnB-2').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border2').removeClass('oculto');
            $('.texto-border2').addClass('mostrado');
            break;
        case 3:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-3').removeClass('btn-borderInactive');
            $('.btnB-3').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border3').removeClass('oculto');
            $('.texto-border3').addClass('mostrado');
            break;
        case 4:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-4').removeClass('btn-borderInactive');
            $('.btnB-4').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border4').removeClass('oculto');
            $('.texto-border4').addClass('mostrado');
            break;
        default:
            break;
    }
}

function pintura(num) {
    switch (parseInt(num)) {
        case 1:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-1').removeClass('btn-pinturaInactive');
            $('.btnP-1').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP1').removeClass('inactive');
            $('.bannerP1').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social' + i);
            }
            $('#dimensiones').addClass('social1');
            break;
        case 2:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-2').removeClass('btn-pinturaInactive');
            $('.btnP-2').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP2').removeClass('inactive');
            $('.bannerP2').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social' + i);
            }
            $('#dimensiones').addClass('social2');
            break;
        case 3:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-3').removeClass('btn-pinturaInactive');
            $('.btnP-3').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP3').removeClass('inactive');
            $('.bannerP3').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social' + i);
            }
            $('#dimensiones').addClass('social3');
            break;
        case 4:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-4').removeClass('btn-pinturaInactive');
            $('.btnP-4').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP4').removeClass('inactive');
            $('.bannerP4').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social' + i);
            }
            $('#dimensiones').addClass('social4');
            break;
        case 5:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-5').removeClass('btn-pinturaInactive');
            $('.btnP-5').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP5').removeClass('inactive');
            $('.bannerP5').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social' + i);
            }
            $('#dimensiones').addClass('social5');
            break;
        case 6:
            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-6').removeClass('btn-pinturaInactive');
            $('.btnP-6').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.target-float').addClass('active');
            $('.target-float').removeClass('inactive');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social' + i);
            }
            $('#dimensiones').addClass('social6');
            break;
        default:
            break;
    }
}

/*pantalla1*/


function scroll_horizontal2(num) {
    switch (parseInt(num)) {
        case 0:
            $('.cont-slideH').addClass('oculto-on');
            $('.cont-slideH').removeClass('oculto-off');

            $('.ordinaria').removeClass('oculto-on');
            $('.ordinaria').addClass('oculto-off');

            $('.comodines').addClass('comodinInactive');
            $('.comodines').removeClass('comodinActive');

            $('.comodin').removeClass('comodinInactive');
            $('.comodin').addClass('comodinActive');
            break;
        case 1:
            $('.cont-slideH').addClass('oculto-on');
            $('.cont-slideH').removeClass('oculto-off');

            $('.comodines').addClass('comodinInactive');
            $('.comodines').removeClass('comodinActive');
            break;
        case 2:
            $('.cont-slideH').addClass('oculto-on');
            $('.cont-slideH').removeClass('oculto-off');

            $('.extraordinaria').removeClass('oculto-on');
            $('.extraordinaria').addClass('oculto-off');

            $('.comodines').addClass('comodinInactive');
            $('.comodines').removeClass('comodinActive');

            $('.comodin2').removeClass('comodinInactive');
            $('.comodin2').addClass('comodinActive');
            break;
        default:
            break;
    }
}

function Input2(num) {
    /*<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">*/
    this.att = {};
    this.att.type = "range";
    this.att.value = 1;
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