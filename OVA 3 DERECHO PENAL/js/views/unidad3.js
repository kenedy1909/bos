$( document ).ready(function() {
    $( ".ov-personaje").hide();
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

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    
    $(".modal").on('hidden.bs.modal', function() {
        detenerMultimedia();
    });

    function detenerMultimedia() {
        $('body').addClass('p-0');
        // console.log('holaaa');

    }
    
});
var pdf = `<div class="col-md-12">
                <p class="p_white">
                    <a class="p_white" href="assets/PDF/decreto_1268de1977.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> decreto_1268de1977.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                </p>
            </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    actualizarprogress(stepIndex+1+27+8);
}

function modal_scroll10(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob10');
    bar = document.querySelector('.custom-scrollbar__bar10');
    container = document.querySelector('.custom-scrollbar__inner10');
    scroll();
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            /*setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 7;*/
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        default:
            break;
    }
}

function clicks(num){
    switch (parseInt(num)) {
        case 1:

            $('.texto-clicks').addClass('no-visible');
            $('.texto-clicks').removeClass('si-visible');

            $('.textC1').removeClass('no-visible');
            $('.textC1').addClass('si-visible');
            break;
        case 2:
            $('.texto-clicks').addClass('no-visible');
            $('.texto-clicks').removeClass('si-visible');

            $('.textC2').removeClass('no-visible');
            $('.textC2').addClass('si-visible');
            break;
        case 3:
            $('.texto-clicks').addClass('no-visible');
            $('.texto-clicks').removeClass('si-visible');

            $('.textC3').removeClass('no-visible');
            $('.textC3').addClass('si-visible');
            break;
        case 4:
            $('.texto-clicks').addClass('no-visible');
            $('.texto-clicks').removeClass('si-visible');

            $('.textC4').removeClass('no-visible');
            $('.textC4').addClass('si-visible');
            break;
        case 5:
            $('.texto-clicks').addClass('no-visible');
            $('.texto-clicks').removeClass('si-visible');

            $('.textC5').removeClass('no-visible');
            $('.textC5').addClass('si-visible');
            break;
        case 6:
            $('.texto-clicks').addClass('no-visible');
            $('.texto-clicks').removeClass('si-visible');

            $('.textC6').removeClass('no-visible');
            $('.textC6').addClass('si-visible');
            break;
        default:
            break;
    }
}