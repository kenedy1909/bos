$( document ).ready(function() {
    $( ".zoomContainer" ).remove();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $(".menu1").removeClass('c-show');
    $(".menu2").addClass('c-show');

    $(".activacion2").addClass('resalte');

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
    $('#zoom_img1').elevateZoom({zoomWindowPosition: 10});
    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide(0);
        actualizarprogress(0);
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide(0);
        actualizarprogress(0);
    });
    /*slide_predeterminado();*/
    slide_link(tema);
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    var scroll_control = 0;

    $(".transacciones-superior-1").on('mouseenter', transaccion_1);
    $(".transacciones-superior-2").on('mouseenter', transaccion_2);
    $(".transacciones-superior-3").on('mouseenter', transaccion_3);
    $(".transacciones-superior-4").on('mouseenter', transaccion_4);
    $(".transacciones-superior-5").on('mouseenter', transaccion_5);
    $(".transacciones-superior-6").on('mouseenter', transaccion_6);
    $(".transacciones-superior-1").on('mouseleave', transaccion_n1);
    $(".transacciones-superior-2").on('mouseleave', transaccion_n2);
    $(".transacciones-superior-3").on('mouseleave', transaccion_n3);
    $(".transacciones-superior-4").on('mouseleave', transaccion_n4);
    $(".transacciones-superior-5").on('mouseleave', transaccion_n5);
    $(".transacciones-superior-6").on('mouseleave', transaccion_n6);
    $(".primer_scroll").on('mouseover', scroll_uno);
    
    console.log(tema);
    slide_link(tema);


});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    if (num = 1) {
        controlSlides(stepIndex+3);
    }else{
        controlSlides(stepIndex);
    }
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
    $('#smartwizard').smartWizard("goToStep", num -1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            break;
        case 1:
            var pdf = ` <p class="p_white">
                            <a href="assets/PDF/UNIDAD2/DECRETO-1377-DEL-27-DE-JUNIO-DE-2013.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdfgris.png"> DECRETO-1377-DEL-27-DE-JUNIO-DE-2013.pdf    <b class="text-cafe" style="float: right;"><u>Ver</u></b></a>
                        </p>
                        <p class="p_white">
                            <a href="assets/PDF/UNIDAD2/Ley_1581_de_2012.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdfgris.png"> Ley_1581_de_2012.pdf    <b class="text-cafe" style="float: right;"><u>Ver</u></b></a>
                        </p>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","2. La ley de habeas data","Contexto general");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. La ley de habeas data","Contexto general");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. La ley de habeas data","Contexto general");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. La ley de habeas data","Contexto general");
            break;
        case 7:
            $(".activacion2").removeClass('resalte');
            setMigaja("Unidades de aprendizaje","2. La ley de habeas data","Contexto general");
            break;
        default:
            break;
    }
}
function carpeta(num){
    switch (parseInt(num)) {
        case 1:
            $('.baneTarget').addClass('is-hidden');
            $('.baneTarget').removeClass('not-hidden');

            $('.target1').removeClass('is-hidden');
            $('.target1').addClass('not-hidden');
            break;
        case 2:
            $('.baneTarget').addClass('is-hidden');
            $('.baneTarget').removeClass('not-hidden');

            $('.target2').removeClass('is-hidden');
            $('.target2').addClass('not-hidden');
            break;
        case 3:
            $('.baneTarget').addClass('is-hidden');
            $('.baneTarget').removeClass('not-hidden');

            $('.target3').removeClass('is-hidden');
            $('.target3').addClass('not-hidden');
            break;
        default:
            break;
    }
}
function actividad(num){
    switch (parseInt(num)) {
        case 1:
            $('.end1').addClass('mostrado');
            $('.end1').removeClass('escondido');
            break;
        case 2:
            $('.end2').addClass('mostrado');
            $('.end2').removeClass('escondido');
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


figura = document.getElementById("ctrflecha");

document.addEventListener("keydown",
    function(event) {
        switch (event.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                slide(1);
                actualizarprogress(1);
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                slide(1);
                actualizarprogress(1);
                break;
        }
    }
);