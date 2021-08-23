$( document ).ready(function() {
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
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","> La empresa como Sistema");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","> La empresa como Sistema");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","> La empresa como Sistema");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","> La empresa como Sistema");
             
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Teoría general de los sistemas (TGS)","> La empresa como Sistema");
            tema=1;
            break;
        default:
            break;
    }
}

function pantalla2(num){
    switch (parseInt(num)) {
        case 1:

            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');

            $('.banewhite1').removeClass('invisible');
            $('.banewhite1').addClass('visible');
            break;
        case 2:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');

            $('.banewhite2').removeClass('invisible');
            $('.banewhite2').addClass('visible');
            break;
        case 3:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');

            $('.banewhite3').removeClass('invisible');
            $('.banewhite3').addClass('visible');
            break;
        case 4:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');

            $('.banewhite4').removeClass('invisible');
            $('.banewhite4').addClass('visible');
            break;
        case 5:
            $('.banewhite').addClass('invisible');
            $('.banewhite').removeClass('visible');

            $('.banewhite5').removeClass('invisible');
            $('.banewhite5').addClass('visible');
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

