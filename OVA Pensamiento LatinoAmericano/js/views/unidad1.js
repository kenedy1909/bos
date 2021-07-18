$( document ).ready(function() {
    
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
    /*setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");*/
    
    slide_predeterminado();

    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".modal_scroll2").on('click', modal_scroll2);
    $(".modal_scroll3").on('click', modal_scroll3);
    $(".modal_scroll4").on('click', modal_scroll4);
    $(".modal_scroll7").on('click', modal_scroll7);
    $(".modal_scroll8").on('click', modal_scroll8);

    $(".citar").on('click', citar);
    funcion_vanvas();

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
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano", ">");
            // dragging = "";
            // diff = "";
            // newTop = "";
            // scrollOffset = "";
            // knob = document.querySelector('.custom-scrollbar__knob');
            // bar = document.querySelector('.custom-scrollbar__bar');
            // container = document.querySelector('.custom-scrollbar__inner');
            // /*scroll();*/
            break;
        case 2:
            $('.pasos').removeClass('efectos');
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La cuestión del origen del “ethnos” latinoamericano");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Fundamentación del pensamiento latinoamericano","La mirada europea: América como otro");
            $("#content-ova").load("base/unidades/unidad2.html");
            break;
            tema = 6;
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

function scroll_p10(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob10');
    bar = document.querySelector('.custom-scrollbar__bar10');
    container = document.querySelector('.custom-scrollbar__inner10');
    scroll();
}

function scroll_p11(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob11');
    bar = document.querySelector('.custom-scrollbar__bar11');
    container = document.querySelector('.custom-scrollbar__inner11');
    scroll();
}

function scroll_p12(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob12');
    bar = document.querySelector('.custom-scrollbar__bar12');
    container = document.querySelector('.custom-scrollbar__inner12');
    scroll();
}
function scroll_p13(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob13');
    bar = document.querySelector('.custom-scrollbar__bar13');
    container = document.querySelector('.custom-scrollbar__inner13');
    scroll();
}
function scroll_p14(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob14');
    bar = document.querySelector('.custom-scrollbar__bar14');
    container = document.querySelector('.custom-scrollbar__inner14');
    scroll();
}

function scroll_p21(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar15">
                    <div class="custom-scrollbar__inner15">
                      <p class="font_15 justificado" style="margin-left: 10px;">En este contexto, el Manual del Código de Ética para Profesionales de la Contabilidad contiene información que proporciona al contador elementos para responder ante las amenazas «del cumplimiento de los principios fundamentales,es decir, a los hechos que ponen en riesgo del incumplimiento de los principios fundamentales (integridad, objetividad, diligencia y competencia profesional, confidencialidad, y comportamiento profesional).</p>
                    </div>
                    <div class="custom-scrollbar__bar15">
                      <div class="custom-scrollbar__knob15 cursor">
                        <p class="text-center linea_scroll15">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-1').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob15');
    bar = document.querySelector('.custom-scrollbar__bar15');
    container = document.querySelector('.custom-scrollbar__inner15');
    scroll();
}
function scroll_p22(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar16">
                    <div class="custom-scrollbar__inner16">
                      <p class="font_16 justificado" style="margin-left: 10px;">
                        El Código asiste al contador para cumplir con responsabilidad y lo orienta hacia el interés público, establece diferentes escenarios para reconocer las amenazas, para evaluarlas (párrafo 120.7) y para eliminarlas, esto incluye el probable conflicto de interés (párrafo 120.10).
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar16">
                      <div class="custom-scrollbar__knob16 cursor">
                        <p class="text-center linea_scroll16">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-2').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob16');
    bar = document.querySelector('.custom-scrollbar__bar16');
    container = document.querySelector('.custom-scrollbar__inner16');
    scroll();
}
function scroll_p23(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar17">
                    <div class="custom-scrollbar__inner17">
                      <p class="font_16 justificado" style="margin-left: 10px;">
                        De acuerdo con Jiménez (2018), el interés público en esta corriente atribuye condiciones éticas, regida por los organismos internacionales de contabilidad y las normas emanadas por la regulación contable, de esta forma, la ética que se constituye para la actuación profesional en las organizaciones y el concepto de interés público que comparten los contadores y auditores y, que está ampliamente aceptado, es el de proteger los derechos de los inversionistas y acreedores.
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar17">
                      <div class="custom-scrollbar__knob17 cursor">
                        <p class="text-center linea_scroll17">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-3').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob17');
    bar = document.querySelector('.custom-scrollbar__bar17');
    container = document.querySelector('.custom-scrollbar__inner17');
    scroll();
}
function scroll_p24(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar18">
                    <div class="custom-scrollbar__inner18">
                      <p class="font_16 justificado" style="margin-left: 10px;">
                        Expresiones como ética, confianza, responsabilidad social empresarial y corporativa, seguimiento a estándares de información financiera, son acepciones que trabajan insistentemente los organismos internacionales (IFAC; IASB; FASB) en búsqueda de la legitimación del interés público, que podría constituirse en una ideología, en este sentido Baker (2009) manifiesta que “la ideología es entendida como un conjunto de ideas que reflejan los intereses de un grupo o clase particular y, no necesariamente de una clase dominante o gobernante”.
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar18">
                      <div class="custom-scrollbar__knob18 cursor">
                        <p class="text-center linea_scroll18">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-4').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob18');
    bar = document.querySelector('.custom-scrollbar__bar18');
    container = document.querySelector('.custom-scrollbar__inner18');
    scroll();
}

function pantalla9(num){
    switch (parseInt(num)) {
        case 1:
            var text = `<div class="p9_cont">
                      <p class="justificado">Reflexionar contemplando y analizando aspectos de la política que influyen en el país</p>
                    </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_1').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 2:
            var text = `<div class="p9_cont">
                          <p class="justificado">Reconocer al otro como semejante a sí mismo, extendiendo respeto y dejando de lado distintivos de raza, religión, género u otros y entendiendo que el otro no es un medio para llegar a un fin.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_2').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 3:
            var text = `<div class="p9_cont">
                          <p class="justificado">Imaginar la cantidad de características que contemplan el desarrollo de una vida, donde existen diferentes momentos como la infancia y adolescencia y aspectos como la enfermedad y la muerte</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_3').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 4:
            var text = `<div class="p9_cont">
                          <p class="justificado">Emitir un juicio crítico sobre quienes gobiernan un país, manteniendo una idea realista de los recursos y posibilidades que tiene a su alcance.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_4').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 5:
            var text = `<div class="p9_cont">
                          <p class="justificado">Concebir su Estado como algo complejo que en determinadas situaciones debe acudir a soluciones provenientes de lo externo o internacional.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_5').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        default:
            break;
    }
}

function citar(){
    var contenido = `<div style="height: 248px;background: white;border-radius: 50px;padding: 25px 35px 35px 35px;">
                    <p class="justificado">Como lo menciona López (2010), la importancia de la democracia trasciende el solo hecho de contar con un sistema político que permita el voto para  elección de representantes, pues la forma en que ese sistema se desarrolle genera influencia en las condiciones y estilo de vida de los ciudadanos; es por esto que no debería considerarse democracia únicamente la opción de voto, sino el hecho de facilitar espacios de participación  donde las personas logren ejercer un rol activo y que incluso sean los ciudadanos quienes formulen los modos de participación.</p>
                  </div>`;
    $('.imprime_heare').html(contenido);
}

function modal_scroll2(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob3');
    bar = document.querySelector('.custom-scrollbar__bar3');
    container = document.querySelector('.custom-scrollbar__inner3');
    scroll();
}
function modal_scroll3(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob4');
    bar = document.querySelector('.custom-scrollbar__bar4');
    container = document.querySelector('.custom-scrollbar__inner4');
    scroll();
}
function modal_scroll4(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob5');
    bar = document.querySelector('.custom-scrollbar__bar5');
    container = document.querySelector('.custom-scrollbar__inner5');
    scroll();
}

function modal_scroll7(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob7');
    bar = document.querySelector('.custom-scrollbar__bar7');
    container = document.querySelector('.custom-scrollbar__inner7');
    scroll();
}

function modal_scroll8(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob8');
    bar = document.querySelector('.custom-scrollbar__bar8');
    container = document.querySelector('.custom-scrollbar__inner8');
    scroll();
}

function funcion_vanvas() {
    var canvas = new fabric.Canvas('canvas_unid1');
    var imgElement = 'assets/img/img_ova/uno.png';
    var imgElement2 = 'assets/img/img_ova/dos.png'; 
    var imgElement3 = 'assets/img/img_ova/tres.png';
    var imgElement4 = 'assets/img/img_ova/cuatro.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=50;
        oImg.top=70;
        oImg.scaleToHeight(50);
        oImg.scaleToWidth(50);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            pantalla13(1);            
        });
        oImg.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=125;
        oImg2.top=35;
        oImg2.scaleToHeight(50);
        oImg2.scaleToWidth(50);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            pantalla13(2);            
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=200;
        oImg3.top=35;
        oImg3.scaleToHeight(50);
        oImg3.scaleToWidth(50);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            pantalla13(3);           
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=280;
        oImg4.top=70;
        oImg4.scaleToHeight(50);
        oImg4.scaleToWidth(50);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() { 
            pantalla13(4);           
        });
        oImg4.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    
}

function pantalla13(num){
    switch (parseInt(num)) {
        case 1:
            var text = `
                          <h3 class="text-center py-1 font-weight-bold">SITUACIÓN</h3>
                          <p class="font-weight-bold">La situación étnica actual de los pueblos indígenas es el resultado de un proceso histórico que inició con la llegada de los europeos hace más de cinco siglos, despojandolos de sus territorios y cultura, tal irrupción significó la pérdida de la “territorialidad política” de los pueblos indígenas del continente, de la soberanía sobre sus territorios y fue el inicio de un ciclo de extensa duración histórica, con ellos no solo la guerra resultó determinante en la ocupación europea de América Latina, también la transmisión de enfermedades afectaron gravemente a las poblaciones originarias y el sometimiento laboral centrado en trabajos forzados y castigos inhumanos.</p>
                       `;
            
            $('.wite_ban_13').css({ "background": "white"});

            $('.contenedor').css({ 
                                    "background": "white",
                                    "border": "5px solid #385723",
                                    "border-style": "dashed",
                                    "border-radius": "58px"
                                });
                

            $('.contenedor').html(text);
            break;
        case 2:
            var text = `
                          <h3 class="text-center py-1 font-weight-bold">“TERRA NULLIUS”</h3>
                          <p class="font-weight-bold">El argumento de “Terra Nullius” (“Tierra de Nadie”) se sumó al proceso de ocupación y despojo (CEPAL, 2014), a ello se le incorporó la creación constante de instituciones destinadas a explotar el trabajo indígena, un hecho constante que no cesó durante todo este tiempo, con el paso del tiempo la desposesión indígena se profundizó con los procesos independentistas y posteriormente, con la consolidación de los Estados Nación, el despojo siguió aumentando cada vez más y con ello uno de los instrumentos utilizados fue la adopción de marcos jurídicos que favorecieron la propiedad privada y no la colectiva, siendo ésta última un emblema tradicional en los pueblos indígenas.</p>
                       `;
            
            $('.wite_ban_13').css({ "background": "white"});

            $('.contenedor').css({ 
                                    "background": "white",
                                    "border": "5px solid #385723",
                                    "border-style": "dashed",
                                    "border-radius": "58px"
                                });
                

            $('.contenedor').html(text);
            break;
        case 3:
            var text = `
                          <h3 class="text-center py-1 font-weight-bold">“TRANSFORMACIÓN”</h3>
                          <p class="font-weight-bold">La mitad del Siglo XX significó para las etnias latinoamericanas una nueva transformación, esta vez, se centró en la desterritorialización de los pueblos indígenas a través de la presión extractivista de los recursos naturales, estas prácticas generaron impactos negativos en los ecosistemas y en el buen vivir de los pueblos indígenas, afectó su sistema de vida a nivel biológico y así mismo en sus cosmovisiones asociadas a la relación con la tierra. </p>
                       `;
            
            $('.wite_ban_13').css({ "background": "white"});

            $('.contenedor').css({ 

                                    "background": "white",
                                    "border": "5px solid #385723",
                                    "border-style": "dashed",
                                    "border-radius": "58px"
                                });
                

            $('.contenedor').html(text);
            break;
        case 4:
            var text = `
                          <h3 class="text-center py-1 font-weight-bold">PROBLEMAS</h3>
                           <p class="font-weight-bold">América Latina es un escenario donde se ha normalizado el discurso hegemónico, entre los cuales los conflictos étnicos y la inclusión étnica son un “asunto resuelto” entre los siglos XIX y XX; la dificultad de las luchas étnicas parecía haber desaparecido con el desarrollo occidental y con la asimilación de la idea de la presencia indígena minoritaria dentro de los Estados, sin embargo, el gran problema en América Latina lo plantean GUTIÉRREZ CHONG y su equipo al demostrar que no se trata de problemas de identidades ni de subjetividades étnicas preexistentes, el problema radica en que, el continente americano es un campo contencioso donde intervienen factores estructurales que causan grave desigualdad.</p>
                       `;
            
            $('.wite_ban_13').css({ "background": "white"});

            $('.contenedor').css({ 
                                    "background": "white",
                                    "border": "5px solid #385723",
                                    "border-style": "dashed",
                                    "border-radius": "58px"
                                });
                

            $('.contenedor').html(text);
            break;
        default:
            break;
    }
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


function poner(num) {
    
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 4) {
        $(".custom-scrollbar__bar2").css('display','block');
        $(".custom-scrollbar2").css('height','250');
    }
}
function quitar(num) {
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'none',
        'z-index': '100'
    });
    if (num == 4) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
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
  this.att.min = 0;
  this.att.max = 6;
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
    pantallas16(this.input.value);
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

/* Draw
function Draw(){
 requestId = window.requestAnimationFrame(Draw); 
  for( var n = 0; n< inputsRy.length; n++){
    inputsRy[n].update();
  }
}

requestId = window.requestAnimationFrame(Draw);
*/
// JavaScript Document


function pasos(num){
    switch (parseInt(num)) {
        case 1:
            $('.paso1').addClass('efectos');
            break;
        case 2:
            $('.paso2').addClass('efectos');
            break;
        case 3:
            $('.paso3').addClass('efectos');
            break;
        case 4:
            $('.paso4').addClass('efectos');
            break;
        
        default:
            break;
    }
}

function pant13(num){
    switch (parseInt(num)) {
        case 1:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es impreciso</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento1.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance1').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 2:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es inconsistente</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento2.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance2').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 3:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es subjetivo</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento3.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance3').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 4:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es acrítico</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento4.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance4').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 5:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Tiene un lenguaje ambiguo</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento5.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance5').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 6:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es racional en cierto grado</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento6.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance6').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 7:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es superficial y falible</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento7.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance7').addClass('activa');

            $('.impimg').removeClass('imagenimp2');
            $('.impimg').addClass('imagenimp');
            break;
        case 8:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Es intrascendente: no van más allá de lo particular y contingente, es decir, no van más allá del hecho.</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento8.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance8').addClass('activa');

            $('.impimg').removeClass('imagenimp');
            $('.impimg').addClass('imagenimp2');
            break;
        case 9:
            var contenido = `<div class="col-md-9 banner3 text-center">
                                <p style="font-size: 25px;">Igualmente carece de un método: es decir, no se basa en una disciplina o método que procure la comprobación o desmentir lo que plantea.</p>
                              </div>`;
            var img = `<div class="col-md-9">
                          <img src="assets/img/img_ova/elemento9.png" style="max-width: 25%;">
                        </div>`;
            $('.impbanner').html(contenido);
            $('.impimg').html(img);
            $('.avance_blanco').removeClass('activa');
            $('.avance9').addClass('activa');

            $('.impimg').removeClass('imagenimp');
            $('.impimg').addClass('imagenimp2');
            break;
        default:
            break;
    }
}


function acordeon(num,estado) {

    $('.contenidoAcordeon1, .contenidoAcordeon2, .contenidoAcordeon3').removeClass('d-block');
    $('.contenidoAcordeon1, .contenidoAcordeon2, .contenidoAcordeon3').addClass('d-none');


    if (estado=='acordeon') {
        if (num==1) {
            $('.acordeon2').addClass('d-none');
            $('.acordeon3').addClass('d-none');
            $('.acordeon2').removeClass('d-flex');
            $('.acordeon3').removeClass('d-flex');
            
            $('.acordeon1').addClass('ocultarAcordeon1');
            $('.acordeon1').removeClass('acordeon1');
            
            $('.contenidoAcordeon1').removeClass('d-none');
            $('.contenidoAcordeon1').addClass('d-block');
            
            $('.ocultarAcordeon1').attr('onclick',"acordeon(1,'ocultar')");
        }else if (num==2) {
            $('.acordeon1').addClass('d-none');
            $('.acordeon3').addClass('d-none');
            $('.acordeon1').removeClass('d-flex');
            $('.acordeon3').removeClass('d-flex');
            
            $('.acordeon2').addClass('ocultarAcordeon2');
            $('.acordeon2').removeClass('acordeon2');
            
            $('.contenidoAcordeon2').removeClass('d-none');
            $('.contenidoAcordeon2').addClass('d-block');
            
            $('.ocultarAcordeon2').attr('onclick',"acordeon(2,'ocultar')");
        }else if (num==3) {
            $('.acordeon2').addClass('d-none');
            $('.acordeon1').addClass('d-none');
            $('.acordeon2').removeClass('d-flex');
            $('.acordeon1').removeClass('d-flex');
            
            $('.acordeon3').addClass('ocultarAcordeon3');
            $('.acordeon3').removeClass('acordeon3');
            
            $('.contenidoAcordeon3').removeClass('d-none');
            $('.contenidoAcordeon3').addClass('d-block');
            
            $('.ocultarAcordeon3').attr('onclick',"acordeon(3,'ocultar')");
        }

    }else if(estado=='ocultar'){

        if (num==1) {
            $('.acordeon2').addClass('d-flex');
            $('.acordeon3').addClass('d-flex');
            $('.acordeon2').removeClass('d-none');
            $('.acordeon3').removeClass('d-none');
            
            $('.ocultarAcordeon1').addClass('acordeon1');
            $('.ocultarAcordeon1').removeClass('ocultarAcordeon1');
            
            $('.contenidoAcordeon1').removeClass('d-block');
            $('.contenidoAcordeon1').addClass('d-none');
            
            $('.acordeon1').attr('onclick',"acordeon(1,'acordeon')");
        }else if (num==2) {
            $('.acordeon1').addClass('d-flex');
            $('.acordeon3').addClass('d-flex');
            $('.acordeon1').removeClass('d-none');
            $('.acordeon3').removeClass('d-none');
            
            $('.ocultarAcordeon2').addClass('acordeon2');
            $('.ocultarAcordeon2').removeClass('ocultarAcordeon2');
            
            $('.contenidoAcordeon2').removeClass('d-block');
            $('.contenidoAcordeon2').addClass('d-none');
            
            $('.acordeon2').attr('onclick',"acordeon(2,'acordeon')");
        }else if (num==3) {
            $('.acordeon2').addClass('d-flex');
            $('.acordeon1').addClass('d-flex');
            $('.acordeon2').removeClass('d-none');
            $('.acordeon1').removeClass('d-none');
            
            $('.ocultarAcordeon3').addClass('acordeon3');
            $('.ocultarAcordeon3').removeClass('ocultarAcordeon3');
            
            $('.contenidoAcordeon3').removeClass('d-block');
            $('.contenidoAcordeon3').addClass('d-none');
            
            $('.acordeon3').attr('onclick',"acordeon(3,'acordeon')");
        }
    }
}