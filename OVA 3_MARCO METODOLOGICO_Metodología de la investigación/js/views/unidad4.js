$( document ).ready(function() {
    tema = 1;
    /*slide_link4(tema);*/
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
    slide_predeterminado4();
    console.log(tema);
    slide_link4(tema);
    
    
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides4(stepIndex);
}

function slide_predeterminado4(){
    
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides4(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link4(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);

    
    controlSlides4(num);
    
    
}
function controlSlides4(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            $("#content-ova").load("base/unidades/unidad3.html");
            tema = 7;
            var pdf = `<div class="col-md-12">
                        <p class="p_white size_20">
                          <a href="assets/PDF/UNIDAD4/Instrumento 1.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Instrumento 1.pdf</a>
                        </p>
                        <p class="p_white size_20">
                          <a href="assets/PDF/UNIDAD4/Instrumento 2.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Instrumento 2.pdf</a>
                        </p>
                      </div>`;
            $('.pdfs').html(pdf);
            break;
        case 1:
            $('.pdfs').html('');
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob16');
            bar = document.querySelector('.custom-scrollbar__bar16');
            container = document.querySelector('.custom-scrollbar__inner16');
            scroll();
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","3. Definición del problema ","El problema en la investigación");
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
var elementoPadre1 = document.querySelector(".inputDiv.i1");
var elementoPadre2 = document.querySelector(".inputDiv.i2");
var inputsRy = [];

function Input() {
  //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
  this.att = {};
  this.att.type = "range";
  this.att.value = 0;
  this.att.min = 1;
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
    pantallas3_1(this.input.value);
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

