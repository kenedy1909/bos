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
    slide_predeterminado3();
    slide_link3(tema);
    
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides3(stepIndex);
}

function slide_predeterminado3(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides3(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link3(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides3(num);
}
function controlSlides3(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. La justificación de un proyecto de investigación ",">");
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 3;
            break;
        case 1:
            var pdf = `<div class="col-md-12">
                              <p class="p_white size_20">
                                  <a href="assets/PDF/Problematización.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Problematización.pdf</a>
                              </p>
                            </div>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","3. La justificación de un proyecto de investigación ",">");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. La justificación de un proyecto de investigación ",">");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. La justificación de un proyecto de investigación ",">");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. La justificación de un proyecto de investigación ",">");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. La justificación de un proyecto de investigación ",">");
            $("#content-ova").load("base/unidades/unidad4.html");
            tema = 1;
            break;    
        default:
            break;
    }
}

function pant3_1() {
  var contenido = `<div class="row">
                          <div class="col-md-4 p-3 cursor">
                            <div class="flip-card" style="">
                              <div class="flip-card-inner" style="border-radius: 50px;">
                               <div class="flip-card-front">
                                  <div class="d-flex justify-content-center">
                                    <div class="cont_cardwhite" style="">
                                      <img src="assets/img/img_ova/red.png" style="max-width: 115px;">
                                    </div>
                                  </div>
                                  
                                  <div class="d-flex justify-content-center">
                                    <div class="textocadrds1" style="">
                                      <div>Argumento<br>social</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="flip-card-back">
                                  <p class="font_15 justificado">Usted debe traer a colación argumentos que lleven a mostrar la importancia social de esa investigación. Debe convencer al posible lector que esta investigación es fundamental para el mundo social en que se desenvuelve, que si ello se realiza son muchas las ganancias sociales, al punto que es posible que la sociedad sea otra y que cambie de manera positiva</p>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 p-3 cursor">
                            <div class="flip-card" style="">
                              <div class="flip-card-inner" style="border-radius: 50px;">
                               <div class="flip-card-front2">
                                  <div class="d-flex justify-content-center">
                                    <div class="cont_cardwhite" style="">
                                      <img src="assets/img/img_ova/jurado.png" style="max-width: 115px;">
                                    </div>
                                  </div>
                                  
                                  <div class="d-flex justify-content-center">
                                    <div class="textocadrds2" style="">
                                      <div>Argumento<br>jurídico</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="flip-card-back2">
                                  <p class="font_15 justificado">Argumentos que muestren la importancia para la disciplina jurídica, es decir, se debe mostrar, que para una ciencia como el derecho esa investigación ofrece múltiples posibilidades, que puede solucionar muchos problemas jurídicos y que la disciplina se enriquecería teórica o prácticamente si se lleva a cabo.</p>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 p-3 cursor">
                            <div class="flip-card" style="">
                              <div class="flip-card-inner" style="border-radius: 50px;">
                               <div class="flip-card-front3">
                                  <div class="d-flex justify-content-center">
                                    <div class="cont_cardwhite" style="">
                                      <img src="assets/img/img_ova/personal.png" style="max-width: 115px;">
                                    </div>
                                  </div>
                                  
                                  <div class="d-flex justify-content-center">
                                    <div class="textocadrds3" style="">
                                      <div>Argumento<br>jurídico</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="flip-card-back3">
                                  <p class="font_15 justificado">Argumentos que muestren qué le ofrecería esta investigación al equipo investigador: es decir, en qué los enriquecería a ellos, cómo el equipo puede crecer y en qué sentidos, si se lleva a cabo. Es arriesgarse a involucrarse, a sentir que lo hecho transforma la propia vida y que la investigación es una forma de vida. </p>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                   </div>`;
  $('.pantalla3-1').html(contenido);
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

function pantallas3_1(num){
    switch (parseInt(num)) {
        case 1:
            var img = `<img src="assets/img/img_ova/paso1.png" style="max-width: 40%;">`;
            $('.imp_img').html(img);
            $('.texto').text('1. Objetivos');
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/paso2.png" style="max-width: 40%;">`;
            $('.imp_img').html(img);
            $('.texto').text('2. Preguntas para iniciar su investigación.');
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/paso3.png" style="max-width: 40%;">`;
            $('.imp_img').html(img);
            $('.texto').text('3. Justificación.');
            break;
        case 4:
            var img = `<img src="assets/img/img_ova/paso4.png" style="max-width: 40%;">`;
            $('.imp_img').html(img);
            $('.texto').text('4. Viabilidad.');
            break;
        case 5:
            var img = `<img src="assets/img/img_ova/paso5.png" style="max-width: 40%;">`;
            $('.imp_img').html(img);
            $('.texto').text('5. Evaluación.');
            break;
        default:
            break;
    }
}

function pantalla3_2(num){
    switch (parseInt(num)) {
        case 1:
            var text = `
            <div class="col-md-6">
              <p class="justificado">Si tomamos la pregunta sobre “¿Cómo se relacionan los medios de comunicación colectiva con el voto?” </p><br>
              <p>Analizando cada parte encontramos:</p>
            </div>
            <div class="col-md-6 row">
              <div class="col-md-6">
                <div class="arriba">
                  <p class="color-text"><b>Medios de comunicación</b></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="arriba">
                  <p class="color-text"><b>Votos</b></p>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img src="assets/img/img_ova/medio.png" class="img-fluid">
                <ul>
                  <li>Radio</li> 
                  <li>Televisión</li> 
                  <li>Periódicos</li> 
                  <li>Revistas</li>
                  <li>Internet</li>
                </ul>
              </div>
              <div class="col-md-6 text-center">
                <img src="assets/img/img_ova/votos.png" class="img-fluid">
                <ul>
                  <li>Nivel nacional</li> 
                  <li>Local</li>
                  <li>Sindical</li> 
                  <li>Para alcalde</li> 
                  <li>Para congreso</li>
                </ul>
              </div>
            </div>`;

            $('.avance_blanco').removeClass('activa');            
            $('.nav1').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na1').removeClass('inactivo');           
            $('.na1').addClass('encendido');
            
            $('.cont3_2').html(text);
            break;
        case 2:
            var text = `
            <div class="col-md-6">
              <p class="justificado">¿Por qué hay más personas satisfechas en su trabajo que otras?</p><br>
              <p class="justificado">
                ¿Cómo se relacionan los medios de comunicación colectiva con el voto?
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="assets/img/img_ova/conversation.png" class="" style="width: 34%;">
            </div>`;
            $('.avance_blanco').removeClass('activa');            
            $('.nav2').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na2').removeClass('inactivo');           
            $('.na2').addClass('encendido');
            
            $('.cont3_2').html(text);
            break;
        case 3:
            var text = `
              <div class="col-md-8">
                <p class="justificado sub_2">¿Se investigarán los efectos que la difusión de propaganda política a través de estos medios, tienen en la conducta de los votantes?</p><br>
                <p class="justificado sub_2">
                  ¿Se analizará el papel de los medios como agentes de socialización política de los votantes?
                </p><br>
                <p>Es decir, no queda claro que se va a investigar.</p>
              </div>
              <div class="col-md-4 text-center">
                <img src="assets/img/img_ova/question.png" class="" style="width: 50%;">
              </div>
            </div>`;
            $('.avance_blanco').removeClass('activa');            
            $('.nav3').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na3').removeClass('inactivo');           
            $('.na3').addClass('encendido');
            
            $('.cont3_2').html(text);
            break;
        case 4:
            var text = `
              <div class="col-md-8">
                <p>Por lo tanto, se deben plantear preguntas mucho más específicas como</p><br>

                <p class="justificado sub_2">La exposición por parte de los votantes a los debates televisivos de los candidatos a la presidencia de Brasil, ¿Está correlacionada con la decisión de votar o abstenerse?.</p>
              </div>
              <div class="col-md-4 text-center">
                <img src="assets/img/img_ova/preguntas.png" class="" style="width: 50%;">
              </div>
            </div>`;
            $('.avance_blanco').removeClass('activa');            
            $('.nav4').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na4').removeClass('inactivo');           
            $('.na4').addClass('encendido');
            
            $('.cont3_2').html(text);
            break;
        
        default:
            break;
    }
}

function efect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').addClass('crece');
            $('.div_texto').addClass('visibilidad');
            break;
        case 2:
            $('.creciente2').addClass('crece');
            $('.div_texto2').addClass('visibilidad');
            break;
        case 3:
            $('.creciente3').addClass('crece');
            $('.div_texto3').addClass('visibilidad');
            break;
        case 4:
            $('.creciente4').addClass('crece');
            $('.div_texto4').addClass('visibilidad');
            break;
        case 5:
            $('.creciente5').addClass('crece');
            $('.div_texto5').addClass('visibilidad');
            break;
        case 6:
            $('.creciente6').addClass('crece');
            $('.div_texto6').addClass('visibilidad');
            $('.btn_modal').html('<button data-toggle="modal" data-target="#modal3-4" class="btn" style="background: #7a3d74;color: white;font-size: 18px;">Ver aquí ejemplo de preguntas de investigación</button>');
            break;
        default:
            break;
    }           
    
}

function removeefect(num){
    switch (parseInt(num)) {
        case 1:
            $('.creciente').removeClass('crece');
            $('.div_texto').removeClass('visibilidad');
            break;
        case 2:
            $('.creciente2').removeClass('crece');
            $('.div_texto2').removeClass('visibilidad');
            break;
        case 3:
            $('.creciente3').removeClass('crece');
            $('.div_texto3').removeClass('visibilidad');
            break;
        case 4:
            $('.creciente4').removeClass('crece');
            $('.div_texto4').removeClass('visibilidad');
            break;
        case 5:
            $('.creciente5').removeClass('crece');
            $('.div_texto5').removeClass('visibilidad');
            break;
        case 6:
            $('.creciente6').removeClass('crece');
            $('.div_texto6').removeClass('visibilidad');
            break;
        default:
            break;
    } 
    
}