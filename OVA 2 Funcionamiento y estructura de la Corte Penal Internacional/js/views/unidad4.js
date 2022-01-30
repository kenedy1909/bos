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
    $(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);

    
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
    $(".modal").on('hidden.bs.modal', function () {
      detenerMultimedia();
     });
    function detenerMultimedia() {
      $('body').addClass('p-0');
      
     }
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
            break;
        
        default:
            break;
    }
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

