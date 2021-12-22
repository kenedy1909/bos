$( document ).ready(function() {
    $(".menu1").removeClass('d-none');

    star_uni = 1;
    paso = false;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');

    $( ".zoomContainer" ).remove();
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
var pdf = `<div class="col-md-12">
                <p class="p_white">
                    <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/1.LaTeoriaGeneraldeSistemas-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> 1.LaTeoriaGeneraldeSistemas-TGS.pdf   <b class="text-cafe ml-2"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                    <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/2-Introducción-a-los-Conceptos-Básicos-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> 2-Introducción-a-los-Conceptos-Básicos-de-la-TGS.pdf   <b class="text-cafe ml-2"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                    <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/3-Componentes-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> 3-Componentes-de-la-TGS.pdf   <b class="text-cafe ml-2"><u>Ver</u></b></a>
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
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","Conceptos Generales de la TGS");
            
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","Conceptos Generales de la TGS");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","Conceptos Generales de la TGS");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","Conceptos Generales de la TGS");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","Conceptos Generales de la TGS");
            break;
        case 6:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","La empresa como Sistema");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","La empresa como Sistema");
            
            break;
        case 8:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","La empresa como Sistema");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","La empresa como Sistema");
            scroll_set(5);
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","","");
            tema=1;
            break;
        default:
            break;
    }
}

function scroll_set(num) {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob'+num);
    bar = document.querySelector('.custom-scrollbar__bar'+num);
    container = document.querySelector('.custom-scrollbar__inner'+num);
    scroll();
}

function objetivos(num){
    switch (parseInt(num)) {
        
        case 1:
            $('.visible1').css({'visibility': 'visible'});
            break;
        case 2:
            $('.visible2').css({'visibility': 'visible'});
            break;
        case 3:
            $('.visible3').css({'visibility': 'visible'});
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
function infoactivi2(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('.info1_1').css({'visibility': 'visible'});
            scroll_set(5);
            break;
        case 2:
            $('.info2_1').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}



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
  $("input[type=range]").on('change', function () {
      /*alert();*/
  });
  this.actualizar2 = function() {
    scroll_horizontal2(this.input.value);
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
  $("input[type=range]").on('change', function () {
      /*alert();*/
  });
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