$( document ).ready(function() {
    $( ".zoomContainer" ).remove();

    tema = 1;
    /*slide_link3(tema);*/
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

    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});
    
    slide_predeterminado3();
    console.log(tema);
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
    $('#smartwizard').smartWizard("goToStep", num-1);

   
    controlSlides3(num);
    
    
}
function controlSlides3(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","Parármetros muestrales","La muestra");
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 3;
            break;
        case 1:
            var pdf = `<div class="col-md-12">
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD3/Elementos_fundamentales_para_plantear_un_problema.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Elementos fundamentales para plantear un problema.pdf</a>
                              </p>
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD3/La_idea_en_la_investigación.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> La idea en la investigación.pdf</a>
                              </p>
                            </div>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","Parármetros muestrales","La muestra");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","Parármetros muestrales","La muestra");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","Parármetros muestrales","La muestra");
            tema = 1;
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
                
              </div>
              <div class="col-md-6 text-center">
                <img src="assets/img/img_ova/votos.png" class="img-fluid">
                
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

function tarjertaGU3(num) {
  $('.imgCentral').addClass('d-none');
  
  if (num == 1) {
    $('.imgCentral1').removeClass('d-none');
    $('.flechaLU3-1').addClass('hidden');
    $('.flechaRU3-1').removeClass('hidden');


    $('.btnDescarga1').removeClass('d-none');
    $('.btnDescarga1').addClass('d-flex');
    $('.btnDescarga2').removeClass('d-flex');
    $('.btnDescarga2').addClass('d-none');
    
    $('.flechaRU3-1').attr('onclick',"tarjertaGU3(2)");
    
  }else if (num == 2) {
    $('.imgCentral2').removeClass('d-none');
    $('.imgCentral3').removeClass('d-none');


    $('.btnDescarga2').removeClass('d-none');
    $('.btnDescarga2').addClass('d-flex');
    $('.btnDescarga1').removeClass('d-flex');
    $('.btnDescarga1').addClass('d-none');

    
    $('.flechaLU3-1').removeClass('hidden');
    $('.flechaRU3-1').removeClass('hidden');
    
    $('.flechaLU3-1').attr('onclick',"tarjertaGU3(1)");
    $('.flechaRU3-1').attr('onclick',"tarjertaGU3(3)");
    
  }else if (num ==3) {
    $('.imgCentral4').removeClass('d-none');

    
    $('.btnDescarga2').removeClass('d-none');
    $('.btnDescarga2').addClass('d-flex');
    $('.btnDescarga1').removeClass('d-flex');
    $('.btnDescarga1').addClass('d-none');

    
    $('.flechaLU3-1').removeClass('hidden');
    $('.flechaRU3-1').removeClass('hidden');
    $('.flechaLU3-1').attr('onclick',"tarjertaGU3(2)");
    $('.flechaRU3-1').attr('onclick',"tarjertaGU3(4)");
    
  }else if (num ==4) {
    $('.imgCentral5').removeClass('d-none');
    $('.imgCentral6').removeClass('d-none');


    $('.btnDescarga2').removeClass('d-none');
    $('.btnDescarga2').addClass('d-flex');
    $('.btnDescarga1').removeClass('d-flex');
    $('.btnDescarga1').addClass('d-none');

    
    $('.flechaLU3-1').removeClass('hidden');
    $('.flechaLU3-1').attr('onclick',"tarjertaGU3(3)");
    $('.flechaRU3-1').addClass('hidden');
    
  }
}

function slideModalU3_3(num) {
  if (num == 1) {
    var img1 = `<img src="assets/img/img_ova/10.png" width="100%" class="my-3">`;
    var img2 = `<img src="assets/img/img_ova/1.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/2.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/3.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/4.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<p class="text-justify text-black"><b class="h3 color-title"> No probabilísticas o dirigidas: </b> subgrupo de la población en el que la elección de los elementos no depende de la probabilidad sino de las características de la investigación.  
                      <br><br>
                      <b class="h3 color-title">Probabilísticas: </b>subgrupo de la población en el que todos los elementos de esta tienen la misma posibilidad de ser elegidos. 
                    </p>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(10)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(2)");
  }else if (num == 2) {
    var img1 = `<img src="assets/img/img_ova/1.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/2.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/3.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/4.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/5.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<p class="text-justify text-black">
                      De igual forma, este tipo de muestras son fundamentales en los procesos de investigación transeccionales, tanto en los descriptivos como en los correlacionales – causales estos son, por ejemplo: las encuestas de opinión, en las cuales lo que se busca es hacer apreciaciones de diferentes variables en la población objeto de estudio, las cuales se miden y examinan a través de estadísticas, donde todos los factores analizado se supone, tienen la misma probabilidad, por tal razón son llamados o denominadas muestras probabilísticas. Las estimaciones y la precisión de los resultados dependen en gran medida del muestreo.  
                    </p>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(1)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(3)");
  }else if (num == 3) {
    var img1 = `<img src="assets/img/img_ova/2.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/3.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/4.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/5.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/6.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<p class="text-justify text-black">Para lo anterior es necesario entender los siguientes términos:</p>
                      <div class="row d-flex justify-content-end mt-3">
                        <div class="col-5 mr-3 border-10 p-3 bg-color-1">
                          <p class="text-white text-justify">Que la población a la que generalmente se le denomina  <b> N.</b>, significa un conjunto de elementos</p>
                        </div>
                        <div class="col-5 ml-3 border-10 p-3 bg-color-1">
                          <p class="text-white text-justify">Que la muestra a la que generalmente se le denomina n, es un subconjunto de la población <b> N.</b> </p>
                        </div>
                      </div>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(2)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(4)");
  }else if (num == 4) {
    var img1 = `<img src="assets/img/img_ova/3.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/4.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/5.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/6.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/7.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<div class="d-flex">
                      <p class="text-justify text-black pr-3">Por tal razón, se debe tener en cuenta que en una población N de la cual la delimitación o demarcación responderá a los objetivos planteados desde el inicio de la investigación, se deberán establecer y delimitar valores y características de los elementos constitutivos de dicha población N. Ya que, lo que se busca es determinar, conocer o saber, los valores de porcentaje o promedio en dicha población, por lo que lo anterior, se expresaría de la siguiente forma (ver imagen): </p>
                      <div class="w-100 text-center">
                        <img src="assets/img/img_ova/imagen.png" width="60%">
                        <p class="border-10 bg-color-1 py-3 w-100 cursor text-white" data-toggle="modal" data-target="#modalimg_U3-1_1"><b>VER IMAGEN</b></p>
                      </div>
                    </div>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(3)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(5)");
  }else if (num == 5) {
    var img1 = `<img src="assets/img/img_ova/4.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/5.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/6.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/7.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/8.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<div class="d-flex">
                      <div class="w-100 text-center">
                        <img src="assets/img/img_ova/pregunta.png" width="85%">
                      </div>
                      <p class="text-justify text-black pr-3">Por lo tanto, cuando se utiliza una muestra probabilística, es fundamental que se pregunte lo siguiente: se cuenta con una población que pertenece a N, si es así, <span class="color-text"><b> ¿cuál es el menor número de compuestos o elementos muestrales? ¿Qué se busca o pretende indagar?</b></span> Para que haga parte de esa muestra n, lo cual aseguraría un resultado adquirido como promedio bajo o leve de error estándar dentro de la investigación. Es el tamaño del error en las predicciones en una muestra probabilística.</p>
                    </div>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(4)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(6)");
  }else if (num == 6) {
    var img1 = `<img src="assets/img/img_ova/5.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/6.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/7.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/8.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/9.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<p class="text-justify text-black">La respuesta a esta pregunta busca encontrar la probabilidad de ocurrencia de <i>𝑌 ̅,</i> así como que mi estado <i> 𝑦 ̅ </i>se acerque a <i>𝑌 ̅,</i> el valor real de la población. Si establecemos el error estándar y lo fijamos en 0.01, sugerimos que esta fluctuación promedio de nuestro estimado <i> 𝑦 ̅ </i> con respecto a los valores reales de la población <i> 𝑌 ̅ </i> no sea > 0.01, es decir, que de 100 casos, 99 veces mi predicción sea correcta y que el valor <i> 𝑦 ̅ </i>se sitúe en un intervalo de confianza que comprenda el valor de <i> 𝑌 ̅.</i></p>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(5)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(7)");
  }else if (num == 7) {
    var img1 = `<img src="assets/img/img_ova/6.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/7.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/8.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/9.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/10.png" width="100%" class="my-3">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<div class="d-flex">
                        <p class="text-justify text-black pr-3">En conclusión, para una variación establecida (V) de Y. La pregunta sería: ¿De qué tamaño debe ser la muestra? Por lo que el resultado estaría dado a través de (haga clic para visualizar la imagen):</p>
                        <div class="w-50 text-center">
                          <img src="assets/img/img_ova/imagen.png" width="60%">
                          <p class="border-10 bg-color-1 py-3 w-100 cursor text-white" data-toggle="modal" data-target="#modalimg_U3-1_2"><b>VER IMAGEN</b></p>
                        </div>
                      </div>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(6)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(8)");
  }else if (num == 8) {
    var img1 = `<img src="assets/img/img_ova/7.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/8.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/9.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/10.png" width="100%" class="my-3">`;
    var img5 = `<img src="assets/img/img_ova/1.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<div class="text-center">
                      <p class="text-justify text-black pr-3 w-100">Ahora, analicemos un caso. Haga clic en “ver imagen” para profundizar sobre este tema.</p>
                      <div class="w-100 text-center mt-3 d-flex justify-content-center align-items-center">
                        <img src="assets/img/img_ova/imagen.png" width="20%">
                        <p class="border-10 bg-color-1 py-3 w-25 cursor text-white ml-4" data-toggle="modal" data-target="#modalimg_U3-1_3"><b>VER IMAGEN</b></p>
                      </div>
                    </div>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(7)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(9)");
  }else if (num == 9) {
    var img1 = `<img src="assets/img/img_ova/8.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/9.png" width="70%" class="my-2">`;
    var img3 = `<img src="assets/img/img_ova/10.png" width="100%" class="my-3">`;
    var img4 = `<img src="assets/img/img_ova/1.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/2.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<p class="text-justify text-black">Cuando se requiere hacer análisis de minorías, es necesario utilizar muestras probabilísticas estratificadas, que son un subgrupo en el que la población se divide en segmentos y se selecciona una muestra para cada segmento. Por ejemplo, en el caso de niveles de escolaridad: transición, primaria, secundaria, universitario y posgrados.</p>`;
    
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(8)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(10)");
  }else if (num == 10) {
    var img1 = `<img src="assets/img/img_ova/9.png" width="70%" class="my-2">`;
    var img2 = `<img src="assets/img/img_ova/10.png" width="100%" class="my-3">`;
    var img3 = `<img src="assets/img/img_ova/1.png" width="70%" class="my-2">`;
    var img4 = `<img src="assets/img/img_ova/2.png" width="70%" class="my-2">`;
    var img5 = `<img src="assets/img/img_ova/3.png" width="70%" class="my-2">`;
    $('.numerosSlide1').html(img1);
    $('.numerosSlide2').html(img2);
    $('.numerosSlide3').html(img3);
    $('.numerosSlide4').html(img4);
    $('.numerosSlide5').html(img5);
    
    var contenido = `<p class="text-justify text-black">La estratificación aumenta la precisión de la muestra e implica el uso deliberado de diferentes tamaños de muestra para cada estrato, a fin de lograr reducir la varianza de cada unidad de la media muestral (Kish, 1995).
                      <br></br>
                      Por ejemplo: el empleo del muestreo por racimos, esto se hace cuando no se cuenta con recursos suficientes para abarcar una porción o proporción muy grande o extensa, entonces se opta por la muestra por racimos o por clústeres.
                      <br></br>
                      Este tipo de muestreo además de reducir costos, reduce tiempo y energía, ya que la muestra se puede extraer de determinados lugares ya sean físicos o geográficos, a los que denominan racimos. Esto nos obliga, además, a diferenciar entre unidad de análisis y la muestral, la primera se refiere a quienes van a ser medidos y la segunda, en este caso, se referirá al racimo a través del cual se realiza la unidad de análisis.
                    </p>`;
    $('.contenidoNumeros').html(contenido);

    $('.flechaNumModalL').attr('onclick',"slideModalU3_3(9)");
    $('.flechaNumModalR').attr('onclick',"slideModalU3_3(1)");
  }
}