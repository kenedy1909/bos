$( document ).ready(function() {
    $('.menu1').removeClass('d-none');
    $('.menu1').addClass('c-show');
    $( ".ov-personaje").hide();
    $('.sub1').removeClass('tema_activo');
    $('.sub1_1').addClass('tema_activo');
    paso = false;
    star_uni = 1;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');
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
        /*actualizarprogress();*/

    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        slide();
        switch(stepIndex) {
            default:
            // code block
        }
    });
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";

    $(".ruanda-img").on('click', ruandas);
    
    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/UNIDAD 1/base.pdf" target="_blank"> <img class="menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> Base de datos y minería de datos en contornos empresariales.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/UNIDAD 1/seguridad.pdf" target="_blank"> <img class="menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> La seguridad informática y la seguridad de la información.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/UNIDAD 1/parte2.pdf" target="_blank"> <img class="menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> Parte II bases de datos deductivas.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);
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
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num){
    tema=1;
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function pag_1(){
    $('#smartwizard').smartWizard("goToStep", 1);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
        case 5:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_1').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
        case 6:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_6').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Tipología de las bases de datos");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Tipología de las bases de datos");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Tipología de las bases de datos");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Tipología de las bases de datos");
            break;
        case 10:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_6').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Tipología de las bases de datos");
            break;
        case 11:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_11').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Estructuración de bases de datos");
            break;
        case 12:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_11').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Estructuración de bases de datos");
            break;
        case 13:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_13').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Gobernanza de los datos");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Gobernanza de los datos");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Gobernanza de los datos");
            break;
        case 16:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_13').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Gobernanza de los datos");
            break;
        case 17:
            $('.sub1').removeClass('tema_activo');
            $('.sub1_17').addClass('tema_activo');
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Seguridad de la información");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Seguridad de la información");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Seguridad de la información");
            break;
        case 0:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
        default:
            setMigaja("Unidades de aprendizaje","1. Las bases de datos","Fundamentos de las bases de datos");
            break;
    }
}

function scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}


//scroll2

/*var knob = document.querySelector('.custom-scrollbar__knob2');
var bar = document.querySelector('.custom-scrollbar__bar2');
var container = document.querySelector('.custom-scrollbar__inner2');*/
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


function ruandas() {
    var ruanda_num = $(this).data('ruanda');
    $(".ruanda-1, .ruanda-2, .ruanda-3").addClass('d-none');
    $(".ruanda-1, .ruanda-2, .ruanda-3").removeClass('d-flex');
    $(".ruanda-img-1, .ruanda-img-2, .ruanda-img-3").removeClass('h-120px w-120px');
    $(".ruanda-img-1, .ruanda-img-2, .ruanda-img-3").addClass('h-80px w-80px');
    $(".ruanda_content").addClass('top-n15px');

    if (ruanda_num==1) {
        $(".ruanda-1").removeClass('d-none');
        $(".ruanda-1").addClass('d-flex');
        $(".ruanda-img-1").addClass('h-120px w-120px');
        $(".ruanda-img-1").removeClass('h-80px w-80px');
        $(".ruanda_content").addClass('top-n35px');
    }else if (ruanda_num==2) {
        $(".ruanda-2").removeClass('d-none');
        $(".ruanda-2").addClass('d-flex');
        $(".ruanda-img-2").addClass('h-120px w-120px');
        $(".ruanda-img-2").removeClass('h-80px w-80px');
        $(".ruanda_content").addClass('top-n35px');
    }else if (ruanda_num==3) {
        $(".ruanda-3").removeClass('d-none');
        $(".ruanda-3").addClass('d-flex');
        $(".ruanda-img-3").addClass('h-120px w-120px');
        $(".ruanda-img-3").removeClass('h-80px w-80px');
        $(".ruanda_content").addClass('top-n35px');
    }
}

function funcionalidad_1(num) {

    if (num == 1) {
        $(".fun_1_info_1").addClass('bg-azul-1');
        $(".fun_1_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_1_info_2").addClass('bg-azul-1');
        $(".fun_1_text_2").removeClass('d-none');
    }else if (num == 3) {
        $(".fun_1_info_3").addClass('bg-azul-1');
        $(".fun_1_text_3").removeClass('d-none');
    }
}

function funcionalidad_2(num) {
    $(".fun_2_content, .fun_2_text_1, .fun_2_text_2, .fun_2_text_3, .fun_2_text_4, .fun_2_text_5, .fun_2_text_6, .fun_2_text_7, .fun_2_text_8, .fun_2_text_9").addClass('d-none');
    $(".fun_2_btn_1, .fun_2_btn_2, .fun_2_btn_3, .fun_2_btn_4, .fun_2_btn_5, .fun_2_btn_6, .fun_2_btn_7, .fun_2_btn_8, .fun_2_btn_9").removeClass('bg-azul-1');
    $(".fun_2_btn_1, .fun_2_btn_2, .fun_2_btn_3, .fun_2_btn_4, .fun_2_btn_5, .fun_2_btn_6, .fun_2_btn_7, .fun_2_btn_8, .fun_2_btn_9").addClass('bg-azul-2');
    if (num == 1) {
        $(".fun_2_text_1").removeClass('d-none');
        $(".fun_2_btn_1").removeClass('bg-azul-2');
        $(".fun_2_btn_1").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_2_text_2").removeClass('d-none');
        $(".fun_2_btn_2").removeClass('bg-azul-2');
        $(".fun_2_btn_2").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 3) {
        $(".fun_2_text_3").removeClass('d-none');
        $(".fun_2_btn_3").removeClass('bg-azul-2');
        $(".fun_2_btn_3").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 4) {
        $(".fun_2_text_4").removeClass('d-none');
        $(".fun_2_btn_4").removeClass('bg-azul-2');
        $(".fun_2_btn_4").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 5) {
        $(".fun_2_text_5").removeClass('d-none');
        $(".fun_2_btn_5").removeClass('bg-azul-2');
        $(".fun_2_btn_5").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 6) {
        $(".fun_2_text_6").removeClass('d-none');
        $(".fun_2_btn_6").removeClass('bg-azul-2');
        $(".fun_2_btn_6").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 7) {
        $(".fun_2_text_7").removeClass('d-none');
        $(".fun_2_btn_7").removeClass('bg-azul-2');
        $(".fun_2_btn_7").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 8) {
        $(".fun_2_text_8").removeClass('d-none');
        $(".fun_2_btn_8").removeClass('bg-azul-2');
        $(".fun_2_btn_8").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }else if (num == 9) {
        $(".fun_2_text_9").removeClass('d-none');
        $(".fun_2_btn_9").removeClass('bg-azul-2');
        $(".fun_2_btn_9").addClass('bg-azul-1');
        $(".fun_2_content").removeClass('d-none');
    }
}

function funcionalidad_3() {
        $(".fun_3_card").removeClass('img-100');
        $(".fun_3_card").addClass('img-30');
        $(".fun_3_card_img").removeClass('img-40');
        $(".fun_3_card_img").addClass('img-90');
        $(".fun_3_card_text").removeClass('d-none');
}

function funcionalidad_4(num) {
    $(".fun_4_content, .fun_4_text_1, .fun_4_text_2, .fun_4_text_3, .fun_4_text_4").addClass('d-none');

    if (num == 1) {
        $(".fun_4_text_1").removeClass('d-none');
        $(".fun_4_content").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_4_text_2").removeClass('d-none');
        $(".fun_4_content").removeClass('d-none');
    }else if (num == 3) {
        $(".fun_4_text_3").removeClass('d-none');
        $(".fun_4_content").removeClass('d-none');
    }else if (num == 4) {
        $(".fun_4_text_4").removeClass('d-none');
        $(".fun_4_content").removeClass('d-none');
    }
}

function funcionalidad_5() {
        $(".fun_5_card").removeClass('d-flex');
        $(".fun_5_card").addClass('d-none');
        $(".fun_5_card_text").removeClass('d-none');
}

function funcionalidad_6(num) {
    $(".fun_6_content_1, .fun_6_content_2").removeClass('d-none');
    $(".fun_6_text_1, .fun_6_text_2").addClass('d-none');

    if (num == 1) {
        $(".fun_6_content_1").addClass('d-none');
        $(".fun_6_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_6_content_2").addClass('d-none');
        $(".fun_6_text_2").removeClass('d-none');
    }
}

function funcionalidad_7(num) {
    $(".fun_7_btn_1, .fun_7_btn_2, .fun_7_btn_3, .fun_7_btn_4").removeClass('bg-piel-1');
    $(".fun_7_btn_1, .fun_7_btn_2, .fun_7_btn_3, .fun_7_btn_4").addClass('bg-color-activi-o');
    $(".fun_7_text_1, .fun_7_text_2, .fun_7_text_3, .fun_7_text_4").addClass('d-none');

    if (num == 1) {
        $(".fun_7_btn_1").removeClass('bg-color-activi-o');
        $(".fun_7_btn_1").addClass('bg-piel-1');
        $(".fun_7_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_7_btn_2").removeClass('bg-color-activi-o');
        $(".fun_7_btn_2").addClass('bg-piel-1');
        $(".fun_7_text_2").removeClass('d-none');
    }else if (num == 3) {
        $(".fun_7_btn_3").removeClass('bg-color-activi-o');
        $(".fun_7_btn_3").addClass('bg-piel-1');
        $(".fun_7_text_3").removeClass('d-none');
    }else if (num == 4) {
        $(".fun_7_btn_4").removeClass('bg-color-activi-o');
        $(".fun_7_btn_4").addClass('bg-piel-1');
        $(".fun_7_text_4").removeClass('d-none');
    }
}

function funcionalidad_8() {
        $(".fun_8_card").removeClass('img-100');
        $(".fun_8_card").addClass('img-30');
        $(".fun_8_card_img").removeClass('img-40');
        $(".fun_8_card_img").addClass('img-90');
        $(".fun_8_card_text").removeClass('d-none');
}

function funcionalidad_9() {
        $(".fun_9_text").removeClass('d-none');
}

function funcionalidad_10(num) {

    $(".fun_10_card_1, .fun_10_card_2").removeClass('d-none');
    $(".fun_10_card_1, .fun_10_card_2").addClass('d-flex');
    $(".fun_10_card_text_1, .fun_10_card_text_2").addClass('d-none');

    if (num == 1) {
        $(".fun_10_card_1").removeClass('d-flex');
        $(".fun_10_card_1").addClass('d-none');
        $(".fun_10_card_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_10_card_2").removeClass('d-flex');
        $(".fun_10_card_2").addClass('d-none');
        $(".fun_10_card_text_2").removeClass('d-none');
    }
}

function funcionalidad_11() {
        $(".fun_11_card").removeClass('img-100');
        $(".fun_11_card").addClass('img-30');
        $(".fun_11_card_img").removeClass('img-40');
        $(".fun_11_card_img").addClass('img-90');
        $(".fun_11_card_text").removeClass('d-none');
}

function funcionalidad_12(num) {

    $(".fun_12_text_1, .fun_12_text_2, .fun_12_text_3, .fun_12_text_4, .fun_12_text_5, .fun_12_text_6, .fun_12_text_7, .fun_12_text_8").addClass('d-none');
    $(".fun_12_btn_1, .fun_12_btn_2, .fun_12_btn_3, .fun_12_btn_4, .fun_12_btn_5, .fun_12_btn_6, .fun_12_btn_7, .fun_12_btn_8").removeClass('bg-blanco');
    $(".fun_12_btn_1, .fun_12_btn_2, .fun_12_btn_3, .fun_12_btn_4, .fun_12_btn_5, .fun_12_btn_6, .fun_12_btn_7, .fun_12_btn_8").addClass('bg-color-activi-c');

    if (num == 1) {
        $(".fun_12_text_1").removeClass('d-none');
        $(".fun_12_btn_1").removeClass('bg-color-activi-c');
        $(".fun_12_btn_1").addClass('bg-blanco');
    }else if (num == 2) {
        $(".fun_12_text_2").removeClass('d-none');
        $(".fun_12_btn_2").removeClass('bg-color-activi-c');
        $(".fun_12_btn_2").addClass('bg-blanco');
    }else if (num == 3) {
        $(".fun_12_text_3").removeClass('d-none');
        $(".fun_12_btn_3").removeClass('bg-color-activi-c');
        $(".fun_12_btn_3").addClass('bg-blanco');
    }else if (num == 4) {
        $(".fun_12_text_4").removeClass('d-none');
        $(".fun_12_btn_4").removeClass('bg-color-activi-c');
        $(".fun_12_btn_4").addClass('bg-blanco');
    }else if (num == 5) {
        $(".fun_12_text_5").removeClass('d-none');
        $(".fun_12_btn_5").removeClass('bg-color-activi-c');
        $(".fun_12_btn_5").addClass('bg-blanco');
    }else if (num == 6) {
        $(".fun_12_text_6").removeClass('d-none');
        $(".fun_12_btn_6").removeClass('bg-color-activi-c');
        $(".fun_12_btn_6").addClass('bg-blanco');
    }else if (num == 7) {
        $(".fun_12_text_7").removeClass('d-none');
        $(".fun_12_btn_7").removeClass('bg-color-activi-c');
        $(".fun_12_btn_7").addClass('bg-blanco');
    }else if (num == 8) {
        $(".fun_12_text_8").removeClass('d-none');
        $(".fun_12_btn_8").removeClass('bg-color-activi-c');
        $(".fun_12_btn_8").addClass('bg-blanco');
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

$(".modal").on('hidden.bs.modal', function() {
    $(".c-app").css("padding", "0px");
});