$( document ).ready(function() {
    
    console.log(tema);
    /**/
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
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link4(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides4(num+1);
}
function controlSlides4(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","4. Diseño de los objetivos de una investigación ",">");
            $("#content-ova").load("base/unidades/unidad3.html");
            tema = 4;
            break;
        case 1:
            $('.pdfs').html('');
            setMigaja("Unidades de aprendizaje","4. Diseño de los objetivos de una investigación ",">");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","4. Diseño de los objetivos de una investigación ",">");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","4. Diseño de los objetivos de una investigación ",">");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","4. Diseño de los objetivos de una investigación ",">");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","4. Diseño de los objetivos de una investigación ",">");
            break;
        default:
            break;
    }
}


function pantallas4_1(num){
  switch(parseInt(num)){
    case 1:
      var pantalla = `<div class="text-center">
                        <img src="assets/img/img_ova/reproductor-de-video(1).png" style="max-width: 25%;">
                      </div>
                      <div class="col-md-12 row mt-3">
                        <div class="col-md-2">
                          <div>
                            <div class="ejemplos" style="">Ejemplos</div>
                            <div class="row mt-2">
                              <div class="eje1 cursor" style="" data-toggle="modal" data-target="#ejemplo1"></div>
                              <div class="eje2 cursor" style="" data-toggle="modal" data-target="#ejemplo2"></div>
                              <div class="eje3 cursor" style="" data-toggle="modal" data-target="#ejemplo3"></div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-10">
                          <div class="row">
                            <div class="fijadoimg" style=""><img src="assets/img/img_ova/notas-adhesivas.png" style="max-width: 100%;"></div>
                            <div class="bannernota" style=""><p style="font-size: 13px;">En términos evaluativos, quien lea los resultados de la investigación podrá decir si se alcanzaron o no esos objetivos y, además, si se abordó adecuadamente la pregunta que se formuló.  Haga clic en cada círculo para ver los ejemplos:</p></div>
                          </div>
                        </div>
                      </div>`;
      $('.pantalla4-1').html(pantalla);
      $('.op').removeClass('activado');
      $('.op').removeClass('opcion');
      $('.obje1').addClass('activado');
      $('.obje2').addClass('opcion');
      $('.obje3').addClass('opcion');
      $('.obje4').addClass('opcion');
      $('.textopcion').removeClass('text_active');
      $('.text1').addClass('text_active');
      $('.trianguloactivo').css({"visibility": "hidden"});
      $('#triauno').css({"visibility": "visible"});
      break;
    case 2:
        var pantalla = `<div class="d-flex justify-content-center">
                          <div class="targetap4-1" style="">
                            <div class="row headertarget" style="">
                              <div style="width: 33%;"></div>
                              <div style="width: 33%;"></div>
                              <div style="width: 33%;">
                                <div class="iconotarget" style="" class="shadow">
                                  <img src="assets/img/img_ova/objetivo_general.png" style="max-width: 86%;">
                                </div>
                              </div>
                            </div>
                            <div>
                              <ul>
                                <li style="font-size: 13px;">El objetivo general va conectado directamente con todos los puntos anteriores, pero sobre todo con la pregunta problema. </li>
                                <li style="font-size: 13px;">se suele afirmar que de la pregunta sale directamente este objetivo.</li>
                                <li style="font-size: 13px;">Se formula iniciando con un verbo en infinitivo y se debe cuidar de no incluir más verbos de ese tipo, lo que indica que solo lleva un solo verbo de este tipo.</li>
                              </ul>
                            </div>
                            <div class="row">
                              <div style="width: 9%;">
                                <img src="assets/img/img_ova/notas-adhesivas.png" style="max-width: 100%;">
                              </div>
                              <div style="width: 70%;background: #FBD9EA;"><p style="font-size: 13px;">Recuérdese: los verbos en infinitivos son aquellos que expresan acciones, no están conjugados y terminan en ar, er, ir.</p></div>
                            </div>
                          </div>
                        </div>`;
        $('.pantalla4-1').html(pantalla);
        $('.op').removeClass('activado');
        $('.op').removeClass('opcion');
        $('.obje2').addClass('activado');
        $('.obje1').addClass('opcion');
        $('.obje4').addClass('opcion');
        $('.obje3').addClass('opcion');
        $('.textopcion').removeClass('text_active');
        $('.text2').addClass('text_active');
        $('.trianguloactivo').css({"visibility": "hidden"});
        $('#triados').css({"visibility": "visible"});
        break;
    case 3:
        var pantalla = `<div class="row">
                          <div class="col-md-9 text-center">
                            <img data-toggle="modal" data-target="#modalimg_1" src="assets/img/img_ova/Obj-específicos-uinidad4.png" class="img-fluid cursor" style="max-width: 100%">
                            <p>click en la imagen para visualizar la informacion</p>
                          </div>
                          <div class="col-md-3">
                            <img src="assets/img/img_ova/blonde.png" class="img-fluid" style="max-width: 90%;">
                          </div>
                        </div>`;
        $('.pantalla4-1').html(pantalla);
        $('.op').removeClass('activado');
        $('.op').removeClass('opcion');
        $('.obje3').addClass('activado');
        $('.obje1').addClass('opcion');
        $('.obje2').addClass('opcion');
        $('.obje4').addClass('opcion');
        $('.textopcion').removeClass('text_active');
        $('.text3').addClass('text_active');
        $('.trianguloactivo').css({"visibility": "hidden"});
        $('#triatres').css({"visibility": "visible"});
        break;
    case 4:
        var pantalla = `<div class="row">
                          <div class="col-md-9 text-center">
                            <img data-toggle="modal" data-target="#modalimg_2" src="assets/img/img_ova/Ejemplos.png" class="img-fluid cursor" style="max-width: 100%">
                            <p>click en la imagen para visualizar la informacion</p>
                          </div>
                          <div class="col-md-3">
                            <img src="assets/img/img_ova/pregunta2.png" class="img-fluid" style="max-width: 90%;">
                          </div>
                        </div>`;
        $('.pantalla4-1').html(pantalla);
        $('.op').removeClass('activado');
        $('.op').removeClass('opcion');
        $('.op').removeClass('opcion');
        $('.obje4').addClass('activado');
        $('.obje3').addClass('opcion');
        $('.obje2').addClass('opcion');
        $('.obje1').addClass('opcion');
        $('.textopcion').removeClass('text_active');
        $('.text4').addClass('text_active');
        $('.trianguloactivo').css({"visibility": "hidden"});
        $('#triacuatro').css({"visibility": "visible"});
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

