$( document ).ready(function() {
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

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
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

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 16;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        default:
            break;
    }
}

function textoBorder(num){
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