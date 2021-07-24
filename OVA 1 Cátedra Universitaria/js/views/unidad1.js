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
    knob = "";
    bar = "";
    container = "";
    scroll();

    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/1. La Teoría General de Sistemas - TGS.pdf" target="_blank"> <img class="img-circle menu_superior w-40px img-5" src="assets/img/img_template/pdf.png"> La Teoría General de Sistemas - TGS.pdf  <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/2. Introducción a los Conceptos Básicos de la TGS.pdf" target="_blank"> <img class="img-circle menu_superior w-40px img-5" src="assets/img/img_template/pdf.png"> 2. Introducción a los Conceptos Básicos de la TGS.pdf.pdf  <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/3-Componentes-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior w-40px img-5" src="assets/img/img_template/pdf.png"> 3. Componentes de la TGS.pdf  <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);
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


function scroll_uno() {
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
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

function funcionalidad_1(num) {
    switch(parseInt(num)){
        case 1:
            /*$("#funcionalidad-1").html();*/
            scroll_uno();
            break;
        case 2:
            /*$("#funcionalidad-1").html();*/
            $(".i1").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
            var i = new Input(12);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(12);
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
            break;
        default:
            break;
    }
}

function scroll_horizontal(num){
    switch (parseInt(num)) {
        case 0:
            $('#funcionalidad_1_2').html('');
            break;
        case 1:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-70 my-auto px-3">
                                        <p class="justificado p_black">En 1965, surge la huelga en la Universidad de Antioquia, para destituir al Rector Ignacio Vélez Escobar.</p>
                                        <br>
                                        <p class="text-right p_black">Universidad de Antioquia</p>
                                    </div>
                                    <div class="img-30">
                                        <img src="assets/img/img_ova/Imagen9.jpg" class="img-100 m-auto">
                                    </div>
                                </div>
                                `);
            break;
        case 2:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">Simultáneamente se dan las protestas de las universidades a nivel nacional, por la invasión de los “marines” americanos a Santo Domingo, ambas causas apoyadas por la FUN, creada en 1962.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">El 21 de mayo de 1965 asesinan al estudiante Jorge Enrique Useche, dentro de esas confrontaciones callejeras.</p>
                                    </div>
                                </div>
                                `);
            break;
        case 3:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 m-auto px-3">
                                        <p class="justificado p_black">En 1965 se decreta el estado de sitio por el presidente Guillermo León Valencia y prolongado durante los años siguientes por el presidente Carlos Lleras Restrepo./p>
                                    </div>
                                    <div class="img-50 my-auto px-3 border-left-color-c">
                                        <div class="col-md-12 d-flex">
                                            <div class="img-50 p-3">
                                                <img src="assets/img/img_ova/Imagen10.jpg" class="img-100 m-auto">
                                            </div>
                                            <div class="img-50 p-3">
                                                <p class="justificado p_black">Guillermo León Valencia.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12 d-flex">
                                            <div class="img-50 p-3">
                                                <img src="assets/img/img_ova/Imagen11.jpg" class="img-100 m-auto">
                                            </div>
                                            <div class="img-50 p-3">
                                                <p class="justificado p_black">Carlos Lleras Restrepo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `);
            break;
        case 4:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">En el año 1966 aparece el Decreto 2128  y otras drásticas medidas como el juzgamiento de los delitos de secuestro, asonada y asociación para delinquir, por la Justicia Penal Militar, aunque fueran cometidos por civiles.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">26 de julio de 1966, Asamblea General de la Universidad de Antioquia, para protestar por la ordenanza 036 de ese año, expedida por la Asamblea Departamental de Antioquia.</p>
                                    </div>
                                </div>
                                `);
            break;
        case 5:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">El 12 de agosto de 1966, se dá la manifestación de FEDETA y sus filiales por mejores salarios y por cátedra libre, bajo la consigna “unidad obrero estudiantil”.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">El 22 de mayo de 1966, comunicado del consejo estudiantil Universidad de Medellín a la consiliatura, denunciando abusos y malos manejos de las directivas</p>
                                    </div>
                                </div>
                                `);
            break;
        default:
            break;
    }
}