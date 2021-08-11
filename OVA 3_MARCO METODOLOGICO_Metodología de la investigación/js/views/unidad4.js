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

    $( ".zoomContainer" ).remove();
    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});


    slide_predeterminado4();
    console.log(tema);
    slide_link4(tema);
    
    $(".teoria").on('click' , teorias);
    
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
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
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
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            scroll_set(18);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            scroll_set(18);
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            scroll_set(18);
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","4. Recolección y alanisis de datos","La medición");
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

function slideU4_1(num) {
  $('.contenidoCentralU4-1').html(``);
  if (num == 1) {
    $('.flechaLU4-1').addClass('hidden');
    $('.flechaRU4-1').removeClass('hidden');
    
    var contenido = `
                    <p class="text-justify text-black">Como se puede ver, para la recolección de datos se dispone de una generosa gama de instrumentos, técnicas y métodos, tanto cualitativas como cuantitativas y las cuales se pueden utilizar sin ningún tipo de discriminación en un mismo estudio.</p>
                    `;
    $('.flechaRU4-1').attr('onclick',"slideU4_1(2)");

    $('.contenidoCentralU4-1').html(contenido);
  }else if (num == 2) {
    $('.flechaLU4-1').removeClass('hidden');
    $('.flechaRU4-1').removeClass('hidden');
    
    var contenido = `
                    <p class="text-justify text-black">En nuestra cotidianidad estamos en un constante medir, es así, como por ejemplo, al levantarnos medimos el tiempo desde que abrimos los ojos hasta prácticamente que nos volvemos a acostar en la noche, medimos la hora constantemente y en diferentes actividades.</p>
                    `;
    $('.flechaLU4-1').attr('onclick',"slideU4_1(1)");
    $('.flechaRU4-1').attr('onclick',"slideU4_1(3)");

    $('.contenidoCentralU4-1').html(contenido);
  }else if (num == 3) {
    $('.flechaLU4-1').removeClass('hidden');
    $('.flechaRU4-1').addClass('hidden');
    
    var contenido = `
                    <p class="text-justify text-black"><b class="color-title">Por ejemplo,</b> en el trabajo tienes cierto tiempo para tomar el descanso e ir a almorzar, entonces te ves en la obligación de medir el tiempo que esto te tomará, después a la hora de salida,  después a la hora de salida, mides el tiempo que te tomará desplazarte a la cita con un amigo o simplemente de regreso a casa, por lo que medir hace parte de nuestra cotidianidad y es este precisamente el tema que a continuación vamos a ver.</p>
                    `;
    $('.flechaLU4-1').attr('onclick',"slideU4_1(2)");

    $('.contenidoCentralU4-1').html(contenido);
  }
}
function slideMU4_1(num) {
  $('.contenidoCentralMU4-1').html(``);
  $('.circuloM1, .circuloM2, .circuloM3, .circuloM4').addClass('bg-color-3');
  $('.circuloM1, .circuloM2, .circuloM3, .circuloM4').removeClass('bg-color-1');
  
  if (num == 1) {
    $('.circuloM1').removeClass('bg-color-3');
    $('.circuloM1').addClass('bg-color-1');

    $('.flechaMLU4-1').addClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <div class="row">
                      <div class="col-7 p-3">
                        <p><b class="color-title">Escala para medir actitudes</b>
                        <br></br>
                        “Las escalas de medición de actitudes son un instrumento de medición que permite acercarse a la variabilidad afectiva de las personas respecto a cualquier sujeto, objeto o proceso.” (Iñiguez, 2010).
                        </p>
                      </div>
                      <div class="col-5 d-flex justify-content-center align-items-center p-3">
                        <div class="text-center">
                          <img src="assets/img/img_ova/describir.png" width="80%">
                          <a class="w-100 p-3 border-10 bg-color-dark text-white h5 shadow cursor mt-3" data-toggle="modal" data-target="#modalImagenM3"><b>VER IMAGEN</b></a>
                        </div>
                      </div>
                    </div>
                    `;
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(2)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 2) {
    $('.circuloM1').removeClass('bg-color-3');
    $('.circuloM1').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <h5 class="color-title">En relación a los cuestionarios, estos pueden aplicarse así:</h5>
                    <p class="text-black text-justify">
                      <b class="color-title">Autoadministrado: </b>los entrevistados contestan las preguntas, después de haber recibido el cuestionario. 
                      <br><b class="color-title">Entrevista cara a cara: </b>esta se realiza a través de un entrevistador, que ha sido preparado con anterioridad y quien va realizando pregunta por pregunta al entrevistado.
                      <br><b class="color-title">Entrevista telefónica:  </b>los entrevistados contestan las preguntas, después de haber recibido el cuestionario. 
                      <br><b class="color-title">Autoadministrado: </b>se realiza a través de una llamada telefónica, al tiempo que es una forma económica de recolectar información. 
                    </p>
                    `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(1)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(3)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 3) {
    $('.circuloM1').removeClass('bg-color-3');
    $('.circuloM1').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `<h5 class="color-title">En relación a los cuestionarios, estos pueden aplicarse así:</h5>
                      <p class="text-black text-justify mb-4">
                        <b class="color-title">La entrevista : </b>es ideal cuando el grupo focal o la muestra que se tiene, está integrado por personas analfabetas o con bajos niveles educativos o por ejemplo, si son niños que aún no saben leer, aunque también se puede contar con cuestionarios gráficos, en relación al tipo de población antes mencionado; siempre pensando en la comodidad de los entrevistados y en el resultado de los datos que se recolecten para nuestra investigación. Un ejemplo de cuestionario gráfico sería el siguiente:
                      </p>
                      <a class="w-50 p-3 border-10 bg-color-dark text-white h5 shadow cursor mt-3" data-toggle="modal" data-target="#modalImagenM"><b>VER IMAGEN</b></a>
                      `;
                    
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(2)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(4)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 4) {
    $('.circuloM2').removeClass('bg-color-3');
    $('.circuloM2').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <div class="row">
                      <div class="col-5 d-flex justify-content-center align-items-center p-3">
                        <img src="assets/img/img_ova/vision.png" width="80%">
                      </div>
                      <div class="col-7 p-3">
                        <p><b class="color-title">Escala para medir actitudes</b>
                        <br></br>
                        “Las escalas de medición de actitudes son un instrumento de medición que permite acercarse a la variabilidad afectiva de las personas respecto a cualquier sujeto, objeto o proceso.” (Iñiguez, 2010).
                        </p>
                      </div>
                    </div>
                      `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(3)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(5)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 5) {
    $('.circuloM2').removeClass('bg-color-3');
    $('.circuloM2').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <p class="text-black text-justify mb-4">
                      Es decir, la actitud representa una preferencia o propensión para sentir, percibir, apreciar y por ende comportarse frente a una situación u objeto. Por consiguiente, cuando se habla de escala de medición de actitudes es un elemento que no es cien por ciento verídico, ya que se estaría planteando o partiendo a través de hipótesis, las cuales nos indicarán la intensidad y dirección de lo que se opina frente a un suceso, objeto o situación.
                    </p>
                    `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(4)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(6)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 6) {
    $('.circuloM2').removeClass('bg-color-3');
    $('.circuloM2').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <p class="text-black text-justify mb-4">
                      La escala con la que se trabajan las actitudes, generalmente van: “muy de acuerdo” “muy desacuerdo”. Una escala de actitudes es algo hipotético, es decir, incierto, que señala la intensidad y dirección de la opinión. 
                      <br><br>
                      Los métodos más conocidos para medir por escalas las variables que constituyen actitudes son: <b class="color-title">el método de escalamiento Likert y el diferencial semántico</b>
                    </p>
                    `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(5)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(7)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 7) {
    $('.circuloM3').removeClass('bg-color-3');
    $('.circuloM3').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <div class="row">
                      <div class="col-5 d-flex justify-content-center align-items-center p-3">
                        <img src="assets/img/img_ova/vision.png" width="80%">
                      </div>
                      <div class="col-7 p-3">
                        <p><b class="color-title">Escalamiento de Likert</b>
                        <br></br>
                        Este método fue desarrollado por Rensis Likert en los años treinta y comprende un grupo de apartados, enunciados o ítems escritos de manera afirmativa, con el fin de medir la reacción de los sujetos por medio de categorías. 
                        </p>
                      </div>
                    </div>
                      `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(6)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(8)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 8) {
    $('.circuloM3').removeClass('bg-color-3');
    $('.circuloM3').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <div class="row">
                      <div class="col-5 d-flex justify-content-center align-items-center p-3">
                        <img src="assets/img/img_ova/vision.png" width="80%">
                      </div>
                      <div class="col-7 p-3">
                        <p>
                        Estas afirmaciones pueden tener una trayectoria: favorable o positiva y desfavorable o negativa. Esto es fundamental a la hora de codificar las diferentes alternativas de respuesta. 
                        </p>
                      </div>
                    </div>
                      `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(7)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(9)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 9) {
    $('.circuloM3').removeClass('bg-color-3');
    $('.circuloM3').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <p class="text-black text-justify">
                      <b class="color-title">Autoadministrada:  </b>se le hace entrega al participante de la escala y este a su vez va marcando de acuerdo a las categorías la que mejor describe su reacción, es decir, de esta manera responde. 
                      <br><b class="color-title">Entrevista:  </b>en este caso una persona encargada de realizar la entrevista, va leyendo las afirmaciones o las diferentes alternativas que corresponden a las diferentes respuestas que el entrevistado va dando y las va anotando y así sucesivamente.
                    </p>
                    `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(8)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(10)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 10) {
    $('.circuloM4').removeClass('bg-color-3');
    $('.circuloM4').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').removeClass('hidden');
    
    var contenido = `
                    <div class="row">
                      <div class="col-5 d-flex justify-content-center align-items-center p-4">
                        <img src="assets/img/img_ova/vision.png" width="80%">
                      </div>
                      <div class="col-7 p-3">
                        <p><b class="color-title">Método semántico</b> <br><br>
                        Este método fue desarrollado por Osgood, Suci y Tannenbaum en 1957 con el fin de examinar las diferentes dimensiones de los significados. Este método radica su operación en una sucesión o serie de adjetivos formulados de manera extrema, los cuales califican al objeto de actitud, preguntando sobre la reacción del entrevistado o persona que participa. 
                        </p>
                      </div>
                    </div>
                      `;
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(9)");
    $('.flechaMRU4-1').attr('onclick',"slideMU4_1(11)");

    $('.contenidoCentralMU4-1').html(contenido);
  }else if (num == 11) {
    $('.circuloM4').removeClass('bg-color-3');
    $('.circuloM4').addClass('bg-color-1');

    $('.flechaMLU4-1').removeClass('hidden');
    $('.flechaMRU4-1').addClass('hidden');
    
    var contenido = `
                      <p class="text-black text-justify mb-4">
                        En resumen, lo que el participante debe hacer es calificar al objeto de actitud partiendo de un conjunto de objetivos formulados en escala bipolar, es decir, de manera extrema, de los cuales la persona escogerá la que mejor refleje su actitud. 
                      </p>
                      <a class="w-50 p-3 border-10 bg-color-dark text-white h5 shadow cursor mt-3" data-toggle="modal" data-target="#modalImagenM2"><b>VER IMAGEN</b></a>
                      `;
                    
    $('.flechaMLU4-1').attr('onclick',"slideMU4_1(10)");

    $('.contenidoCentralMU4-1').html(contenido);
  }
}

function mostrarTarjeta(num,estado) {

  $('.contenidoMostrar1, .contenidoMostrar2, .contenidoMostrar3, .contenidoMostrar4').addClass('d-none');
  $('.mostrar1, .mostrar2, .mostrar3, .mostrar4').removeClass('d-none');


  if (estado=='mostrar') {
      if (num==1) {
          scroll_set(11);
          $('.padreMostrar1').addClass('ocultarMostrar1');
          $('.padreMostrar1').removeClass('padreMostrar1');
          
          $('.contenidoMostrar1').removeClass('d-none');
          $('.mostrar1').addClass('d-none');
          
          $('.ocultarMostrar1').attr('onclick',"mostrarTarjeta(1,'ocultar')");
      }else if (num==2) {            
          $('.padreMostrar2').addClass('ocultarMostrar2');
          $('.padreMostrar2').removeClass('padreMostrar2');
          
          $('.contenidoMostrar2').removeClass('d-none');
          $('.mostrar2').addClass('d-none');
          
          $('.ocultarMostrar2').attr('onclick',"mostrarTarjeta(2,'ocultar')");
      }else if (num==3) { 
          scroll_set(15);           
          $('.padreMostrar3').addClass('ocultarMostrar3');
          $('.padreMostrar3').removeClass('padreMostrar3');
          
          $('.contenidoMostrar3').removeClass('d-none');
          $('.mostrar3').addClass('d-none');
          
          $('.ocultarMostrar3').attr('onclick',"mostrarTarjeta(3,'ocultar')");
      }else if (num==4) {  
          scroll_set(17);          
          $('.padreMostrar4').addClass('ocultarMostrar4');
          $('.padreMostrar4').removeClass('padreMostrar4');
          
          $('.contenidoMostrar4').removeClass('d-none');
          $('.mostrar4').addClass('d-none');
          
          $('.ocultarMostrar4').attr('onclick',"mostrarTarjeta(4,'ocultar')");
      }

  }else if(estado=='ocultar'){

      if (num==1) {
          $('.ocultarMostrar1').addClass('padreMostrar1');
          $('.ocultarMostrar1').removeClass('ocultarMostrar1');
          
          $('.contenidoMostrar1').addClass('d-none');
          $('.mostrar1').removeClass('d-none');

          
          $('.padreMostrar1').attr('onclick',"mostrarTarjeta(1,'mostrar')");
      }else if (num==2) {            
          $('.ocultarMostrar2').addClass('padreMostrar2');
          $('.ocultarMostrar2').removeClass('ocultarMostrar2');
          
          $('.contenidoMostrar2').addClass('d-none');
          $('.mostrar2').removeClass('d-none');

          
          $('.padreMostrar2').attr('onclick',"mostrarTarjeta(2,'mostrar')");
      }else if (num==3) {            
          $('.ocultarMostrar3').addClass('padreMostrar3');
          $('.ocultarMostrar3').removeClass('ocultarMostrar3');
          
          $('.contenidoMostrar3').addClass('d-none');
          $('.mostrar3').removeClass('d-none');

          
          $('.padreMostrar3').attr('onclick',"mostrarTarjeta(3,'mostrar')");
      }else if (num==4) {            
          $('.ocultarMostrar4').addClass('padreMostrar4');
          $('.ocultarMostrar4').removeClass('ocultarMostrar4');
          
          $('.contenidoMostrar4').addClass('d-none');
          $('.mostrar4').removeClass('d-none');

          
          $('.padreMostrar4').attr('onclick',"mostrarTarjeta(4,'mostrar')");
      }
  }
}

function teorias(num) {
  $("#teorico").html(``);

  if (num == 1) {
      var texto = `
                    <div class="content custom-scrollbar18 mr-3">
                      <div class="custom-scrollbar__inner18">
                        <p class="text-justify text-black">
                          <b class="color-title">Seleccionar un programa de análisis</b><br>
                          Estos son algunos de los más conocidos:<br>
                        </p>
                        <ul class="text-black">
                          <li>Statistical Package for the Social Sciences o Paquete Estadístico para las Ciencias Sociales (SPSS®). </li>
                        </ul>
                        <p class="text-justify text-black">
                          Este programa, desarrollado en la Universidad de Chicago, es uno de los más difundidos.
                        </p>
                        <ul class="text-black">
                          <li>Minitab®, es un paquete que goza de popularidad por su relativamente bajo costo. Incluye un considerable número de pruebas estadísticas, y cuenta con un tutorial para aprender a utilizarlo y practicar; además, es muy sencillo de manejar. El sitio web para acceder es http://www.minitab.com. (Tiempo aproximado horas directas: 20 minutos)</li>
                          <li>STATA</li>
                          <li>Eviews</li>
                          <li>R</li>
                          <li>SAS</li>
                        </ul>
                        <p class="text-justify text-black">
                          (Estos programas se verían en los cursos de Estadística y Econometría.)
                        </p>
                      </div>
                      <div class="custom-scrollbar__bar18">
                        <div class="custom-scrollbar__knob18 cursor">
                          <p class="text-center linea_scroll18">-</p>
                        </div>
                      </div>
                    </div>
                  `;
      $("#teorico").html(texto);
  }else if (num == 2) {

      var texto = `
                  <div class="d-flex align-items-center">
                    <p class="text-justify text-black">
                      <b class="color-title">Poner en marcha el programa</b><br>
                      SPSS y Minitab, estos dos paquetes son fáciles de usar, ya que, lo único que se debe hacer es solicitar los análisis requeridos, seleccionando las opciones adecuadas. 
                    </p>
                  </div>
                  `;
      $("#teorico").html(texto);
      scroll_set(16);
  }else if (num == 3) {
      var texto = `
                  <div class="row">
                    <div class="col-md-12">
                        <p class="color-title"><b>Marco legal</b></p>
                    </div>
                    <div class="col-md-12 p-3" id="info-circle">
                        <p class="text-black pb-4 border-b-mm-o">Como su nombre lo indica, el marco legal hace referencia al conjunto de leyes, normas y reglamentos que le dan validez a tu investigación. Por lo que, llegados a este punto, lo que se debe hacer es una selección juiciosa y rigurosa de aquellos artículos que tengan de una u otra forma relación con nuestro tema de investigación, posterior a esto, se deben referenciar de manera correcta en nuestro marco legal.</p>
                    </div>
                    <div class="col-md-12 d-flex">
                        <div class="m-auto w-80px d-flex justify-content-evenly text-black">
                            <div class="w-h-15px radius-50 bg-morado-c cursor circle-morado circle-morado-1" data-circle="1"></div>
                            <div class="w-h-15px radius-50 cursor circle-morado circle-morado-2" data-circle="2"></div>
                            <div class="w-h-15px radius-50 cursor circle-morado circle-morado-3" data-circle="3"></div>
                        </div>
                    </div>
                  </div>
                  `;
      $("#teorico").html(texto);
  }else if (num == 4) {
      var texto = `
                  <div class="content custom-scrollbar20 mr-3">
                    <div class="custom-scrollbar__inner20">
                      <p class="text-justify text-black">
                        <b class="color-title">Valorar la seguridad y eficacia alcanzada por la herramienta de medición</b>
                        <br> Determinamos las puntuaciones o valores obtenidos por los casos (participantes. 
                        <br> objetos. etc.) en cada ítem tomado individualmente. Otros ítems. Agrupados, miden una misma variable y deben constituir una escala para poder juntarse o sumarse (tener las mismas categorías o alternativas de respuesta). Ahora se debe demostrar que tales escalas fueron confiables y válidas en la investigación.
                        <br></br>
                        <b class="color-title">Confiables:</b> se calcula mediante diferentes métodos:
                        <ul class="text-black">
                          <li>Medida de estabilidad: confiabilidad por test-retest: se calcula aplicando a los participantes la misma prueba dos veces, para obtener un coeficiente de reciprocidad entre las puntuaciones de ambas aplicaciones.</li>
                          <li>Método de formas alternativas o paralelas: se computa o calcula a través de un coeficiente de reciprocidad o correlación entre los resultados de dos pruebas tácitamente equivalentes.</li>
                          <li>Medidas de relación interna, coeficientes de seguridad alfa de Cronbach (a) y los coeficientes KR-20 y KR-21: hace referencia a coeficientes que fluctúan entre 0 y 1, donde un coeficiente de 0 significa nula confiabilidad y 1 representa un máximo de confiabilidad (confiabilidad total o integral).</li>
                        </ul>
                        <b class="color-title">Válidas:</b> la evidencia de la validez de criterio se produce al correlacionar las puntuaciones de los participantes, obtenidas por medio del instrumento, con sus valores logrados en el criterio. Recordemos que una correlación implica asociar puntuaciones obtenidas por la muestra en dos o más variables.
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar20">
                      <div class="custom-scrollbar__knob20 cursor">
                        <p class="text-center linea_scroll20">-</p>
                      </div>
                    </div>
                  </div>
                  `;
      $("#teorico").html(texto);
  }else if (num == 5) {
      var texto = `
                  <div>
                    <p class="text-justify text-black">
                      <b class="color-title">Visualice la imagen y conozca sobre el estudio mediante pruebas estadísticas en relación a las hipótesis o presunciones formuladas o estadística inferencial</b>
                    </p><br>
                    <div class="w-100 d-flex justify-content-center">
                      <a class="w-50 p-2 border-10 bg-color-dark text-white h5 text-center shadow cursor" data-toggle="modal" data-target="#modalAcordeonImg"><b>VER IMAGEN</b></a>
                    </div>
                  </div>
                  `;
      $("#teorico").html(texto);
  }else if (num == 6) {
      var texto = `
                  <p class="text-justify text-black">
                    <b class="color-title">Realizar análisis adicionales</b><br>
                    Una vez ejecutados nuestros análisis, es posible que decidamos realizar otros análisis extras o pruebas para confirmar tendencias o preferencias y así poder evaluar los datos desde diferentes ángulos y puntos de vista. 
                  </p>
                  `;
      $("#teorico").html(texto);
  }else if (num == 7) {
      var texto = `
                <div class="d-flex align-items-center h-100">
                  <p class="text-justify text-black pr-1 w-75">
                    <b class="color-title">Preparar los resultados para presentarlos</b><br>
                    Visualiza la imagen y conoce los elementos que conlleva preparar los resultados.
                  </p>
                  <a class="p-2 border-10 bg-color-dark text-white h6 shadow cursor text-center" style=" width: 110px;" data-toggle="modal" data-target="#modalAcordeonImg2"><b>VER IMAGEN</b></a>  
                </div>
                  `;
      $("#teorico").html(texto);
  }
}