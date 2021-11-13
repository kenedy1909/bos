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
    $(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);

    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});  

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
        /*actualizarprogress();*/

    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
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
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género", ">");
            // dragging = "";
            // diff = "";
            // newTop = "";
            // scrollOffset = "";
            // knob = document.querySelector('.custom-scrollbar__knob');
            // bar = document.querySelector('.custom-scrollbar__bar');
            // container = document.querySelector('.custom-scrollbar__inner');
            // /*scroll();*/
            var pdf = `<div class="col-md-12">
                            <p class="p_white size_20">
                                <a href="assets/PDF/pueblo,etniaonación.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i>¿Etnia, pueblo o nación?.pdf</a>
                            </p>
                            <p class="p_white size_20">
                                <a href="assets/PDF/De las dualidades a las ecologias.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i>De las dualidades a las ecologías” De Sousa.pdf</a>
                            </p>
                            <p class="p_white size_20">
                                <a href="assets/PDF/El buen vivir como paradigma societal alternativo.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> buen vivir como paradigma societal alernativo.pdf </a>
                            </p>
                            <p class="p_white size_20">
                                <a href="assets/PDF/.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Actividad complementaria. Pdf </a>
                            </p>
                        </div>`;
            scroll_set(8);
            $('.pdfs').html(pdf);
            break;
        case 2:
            $('.pasos').removeClass('efectos');
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","Ecología de saberes");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","Ecología de saberes");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","Ecología de saberes");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","Ecología de saberes");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","Ecología de saberes");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            $(".i1").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
            var i = new Input(5);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(5);
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
        case 8:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 9:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            /*var videointro = document.getElementById('video_intro1');
            videointro.pause(); */
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 11:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            /*var videointro = document.getElementById('video_intro1');
            videointro.pause();*/
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. La articulación compleja de contradicciones múltiples: nación, etnia, clase y género","El buen vivir");
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

// funcion primera pantalla para mostrar el contenido
function agregarContenido(num,estado) {
    

    // $('').addClass('d-none');
    $('.contenidoAgregar1,.contenidoAgregar2').addClass('hidden');

    $('.cambiarBGtargeta1, .cambiarBGtargeta2').addClass('bg-color-claro');
    $('.cambiarBGtargeta1, .cambiarBGtargeta2').removeClass('bg-color');

    if (estado=='agregar') {
        if (num==1) {
            $('.agregar1').addClass('ocultarAgregar1');
            $('.agregar1').removeClass('agregar1');
            
            $('.contenidoAgregar1').removeClass('hidden');
            $('.contenidoAgregar1').addClass('position-absolute');
            
            $('.cambiarBGtargeta1').removeClass('bg-color-claro');
            $('.cambiarBGtargeta1').addClass('bg-color');
            
            $('.ocultarAgregar1').attr('onclick',"agregarContenido(1,'ocultar')");


            $('.ocultarAgregar2').addClass('agregar2');
            $('.ocultarAgregar2').removeClass('ocultarAgregar2');
            $('.contenidoAgregar2').addClass('hidden');
            $('.agregar2').attr('onclick',"agregarContenido(2,'agregar')");

        }else if (num==2) {
            $('.agregar2').addClass('ocultarAgregar2');
            $('.agregar2').removeClass('agregar2');
            
            $('.contenidoAgregar2').removeClass('hidden');
            $('.contenidoAgregar2').addClass('position-absolute');
            
            $('.cambiarBGtargeta2').removeClass('bg-color-claro');
            $('.cambiarBGtargeta2').addClass('bg-color');
            
            $('.ocultarAgregar2').attr('onclick',"agregarContenido(2,'ocultar')");


            $('.ocultarAgregar1').addClass('agregar1');
            $('.ocultarAgregar1').removeClass('ocultarAgregar1');
            $('.contenidoAgregar1').addClass('hidden');
            $('.agregar1').attr('onclick',"agregarContenido(1,'agregar')");
        }

    }else if(estado=='ocultar'){

        if (num==1) {
            $('.ocultarAgregar1').addClass('agregar1');
            $('.ocultarAgregar1').removeClass('ocultarAgregar1');
            $('.contenidoAgregar1').addClass('hidden');
            $('.contenidoAgregar1').removeClass('position-absolute');
            $('.agregar1').attr('onclick',"agregarContenido(1,'agregar')");
        }else if (num==2) {            
            $('.ocultarAgregar2').addClass('agregar2');
            $('.ocultarAgregar2').removeClass('ocultarAgregar2');
            $('.contenidoAgregar2').addClass('hidden');
            $('.contenidoAgregar2').removeClass('position-absolute');
            $('.agregar2').attr('onclick',"agregarContenido(2,'agregar')");
        }
    }
}


// funcion segunda pantalla para mostrar el contenido
function agregarTarjeta(num,estado) {

    $('.contenidoAgregar1_1, .contenidoAgregar2_1, .contenidoAgregar3, .contenidoAgregar4').addClass('hidden');
    $('.imgTarg3').addClass('d-none');

    if (estado=='agregar') {
        if (num==1) {
            $('.contenidoAgregar1_1').removeClass('hidden');
            
            $('.agregar1_1').attr('onclick',"agregarTarjeta(1,'ocultar')");
            
            $('.agregar2_1').attr('onclick',"agregarTarjeta(2,'agregar')");
            $('.agregar3').attr('onclick',"agregarTarjeta(3,'agregar')");
            $('.agregar4').attr('onclick',"agregarTarjeta(4,'agregar')");

        }else if (num==2) {            
            $('.contenidoAgregar2_1').removeClass('hidden');
            
            $('.agregar2_1').attr('onclick',"agregarTarjeta(2,'ocultar')");

            $('.agregar1_1').attr('onclick',"agregarTarjeta(1,'agregar')");
            $('.agregar3').attr('onclick',"agregarTarjeta(3,'agregar')");
            $('.agregar4').attr('onclick',"agregarTarjeta(4,'agregar')");

        }else if (num==3) {            
            $('.contenidoAgregar3').removeClass('hidden');
            $('.imgTarg3').removeClass('d-none');
            
            $('.agregar3').attr('onclick',"agregarTarjeta(3,'ocultar')");

            $('.agregar1_1').attr('onclick',"agregarTarjeta(1,'agregar')");
            $('.agregar2_1').attr('onclick',"agregarTarjeta(2,'agregar')");
            $('.agregar4').attr('onclick',"agregarTarjeta(4,'agregar')");

        }else if (num==4) {            
            $('.contenidoAgregar4').removeClass('hidden');
            
            $('.agregar4').attr('onclick',"agregarTarjeta(4,'ocultar')");

            $('.agregar1_1').attr('onclick',"agregarTarjeta(1,'agregar')");
            $('.agregar2_1').attr('onclick',"agregarTarjeta(2,'agregar')");
            $('.agregar3').attr('onclick',"agregarTarjeta(3,'agregar')");

        }

    }else if(estado=='ocultar'){

        if (num==1) {
            $('.contenidoAgregar1_1').addClass('hidden');

            $('.agregar1_1').attr('onclick',"agregarTarjeta(1,'agregar')");
        }else if (num==2) {
            $('.contenidoAgregar2_1').addClass('hidden');

            $('.agregar2_1').attr('onclick',"agregarTarjeta(2,'agregar')");
        }else if (num==3) {
            $('.contenidoAgregar3').addClass('hidden');

            $('.agregar3').attr('onclick',"agregarTarjeta(3,'agregar')");
        }else if (num==4) {
            $('.contenidoAgregar4').addClass('hidden');

            $('.agregar4').attr('onclick',"agregarTarjeta(4,'agregar')");
        }
    }
}

function mostrarTarjeta(num,estado) {

    $('.contenidoMostrar1, .contenidoMostrar3, .contenidoMostrar4').addClass('d-none');
    $('.contenidoMostrar2').addClass('hidden');
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
            
            $('.contenidoMostrar2').removeClass('hidden');
            $('.mostrar2').addClass('d-none');
            
            $('.ocultarMostrar2').attr('onclick',"mostrarTarjeta(2,'ocultar')");
        }else if (num==3) {            
            $('.padreMostrar3').addClass('ocultarMostrar3');
            $('.padreMostrar3').removeClass('padreMostrar3');
            
            $('.contenidoMostrar3').removeClass('d-none');
            $('.mostrar3').addClass('d-none');
            
            $('.ocultarMostrar3').attr('onclick',"mostrarTarjeta(3,'ocultar')");
        }else if (num==4) {  
            scroll_set(12);          
            $('.padreMostrar4').addClass('ocultarMostrar4');
            $('.padreMostrar4').removeClass('padreMostrar4');
            
            $('.contenidoMostrar4').removeClass('d-none');
            $('.mostrar4').addClass('d-none');
            
            $('.ocultarMostrar4').attr('onclick',"mostrarTarjeta(4,'ocultar')");
        }else if (num==5) { 
            scroll_set(13);           
            $('.padreMostrar5').addClass('ocultarMostrar5');
            $('.padreMostrar5').removeClass('padreMostrar5');
            
            $('.contenidoMostrar5').removeClass('d-none');
            $('.mostrar5').addClass('d-none');
            
            $('.ocultarMostrar5').attr('onclick',"mostrarTarjeta(5,'ocultar')");
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
            
            $('.contenidoMostrar2').addClass('hidden');
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
        }else if (num==5) {            
            $('.ocultarMostrar5').addClass('padreMostrar5');
            $('.ocultarMostrar5').removeClass('ocultarMostrar5');
            
            $('.contenidoMostrar5').addClass('d-none');
            $('.mostrar5').removeClass('d-none');

            
            $('.padreMostrar5').attr('onclick',"mostrarTarjeta(5,'mostrar')");
        }
    }
}
function pasarTarjetas(num) {

    if (num==1) {
        $('#diapositiva1U5').addClass('d-none');
        $('#diapositiva2U5').removeClass('d-none');
        $('.fa-caret-right').addClass('d-none');
        $('.fa-caret-left').removeClass('d-none');
    }else if (num==2) {
        $('#diapositiva2U5').addClass('d-none');
        $('#diapositiva1U5').removeClass('d-none');
        $('.fa-caret-left').addClass('d-none');
        $('.fa-caret-right').removeClass('d-none');
    }
    
}

function mapaU6(num,estado) {

    
    
    if (estado==1) {
        if (num==1) {
            $('#contenedorMapa1U6').html(``);

            var data = `
                        <div class="border-25 bg-color-claro p-2 shadow ">
                            <div class="w-25 py-2">
                            <h5 class="w-50 pr-4 pl-3 py-2 bg-color-rojo1 rounded-circle text-white inicial1 cursor" onclick="mapaU6(1,2)">1</h5>
                            </div>
                            <div class="w-100 text-center">
                            <p class="px-2 text-justify w-100">Lea el libro “De las dualidades a las ecologías” De Sousa</p>
                            <a href="assets/PDF/De las dualidades a las ecologias.pdf" target="_blank"><img src="assets/img/img_template/Botonera-106.png" width="20%"></a>
                            </div>
                        </div>
                        `;

            $('#contenedorMapa1U6').html(data);
        }else if (num==2) {
            $('#contenedorMapa2U6').html(``);

            var data = `
                        <div class="border-25 bg-color-claro px-2 pt-2 pb-4 shadow">
                            <div class="w-25 py-2">
                            <h5 class="w-50 pr-4 pl-3 py-2 bg-color-rojo1 rounded-circle text-white inicial2 cursor" onclick="mapaU6(2,2)">2</h5>
                            </div>
                            <div class="w-100 text-center pt-2">
                            <p class="px-2 text-justify w-100">Realice un cuadro sinóptico del libro.</p>
                            </div>
                        </div>
                        `;
            
            $('#contenedorMapa2U6').html(data);
        }else if (num==3) {            
            $('#contenedorMapa3U6').html(``);

            var data = `
                        <div class="border-25 bg-color-claro px-2 pt-2 pb-4 shadow">
                            <div class="w-25 py-2">
                            <h5 class="w-50 pr-4 pl-3 py-2 bg-color-rojo1 rounded-circle text-white inicial3 cursor" onclick="mapaU6(3,2)">3</h5>
                            </div>
                            <div class="w-100 text-center">
                            <p class="px-2 text-justify w-100 mb-4 "><b>Ayuda pedagógica </b></p>
                            <div class="d-flex justify-content-center">
                                <a data-toggle="modal" data-target="#modal-verU6" class="btn btn-block w-75 text-white bg-color-rojo1">Ver</a>
                            </div>
                            </div>
                        </div>
                        `;
            
            $('#contenedorMapa3U6').html(data);
        }
    }else if (estado == 2) {
        if (num==1) {
            $('#contenedorMapa1U6').html(``);

            var data = `
                        <div class="border-25 bg-color-verde5 d-flex justify-content-center align-items-center py-4 shadow inicialP1">
                            <h1 class="py-2 px-4 bg-color-rojo1 rounded-circle text-white inicial1 cursor" onclick="mapaU6(1,1)">1</h1>
                        </div>
                        `;

            $('#contenedorMapa1U6').html(data);
        }else if (num==2) {
            $('#contenedorMapa2U6').html(``);

            var data = `
                        <div class="border-25 bg-color-verde5 d-flex justify-content-center align-items-center py-4 shadow inicialP3">
                            <h1 class="py-2 px-4 bg-color-rojo1 rounded-circle text-white inicial2 cursor" onclick="mapaU6(2,1)">2</h1>
                        </div>
                        `;
            
            $('#contenedorMapa2U6').html(data);
        }else if (num==3) {            
            $('#contenedorMapa3U6').html(``);

            var data = `
                        <div class="border-25 bg-color-verde5 d-flex justify-content-center align-items-center mt-5 py-4 shadow inicialP2">
                            <h1 class="py-2 px-4 bg-color-rojo1 rounded-circle text-white inicial3 cursor" onclick="mapaU6(3,1)">3</h1>
                        </div>
                        `;
            
            $('#contenedorMapa3U6').html(data);
        }
    }
}


// deslizador

function scroll_horizontal(num){
    
    $('.scroll-flecha').removeClass('d-block');
    $('.scroll-flecha').addClass('d-none');
    switch (parseInt(num)) {
        case 0:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/comunidad1.png" width="100%" height="100%">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<p class="text-justify pl-5 pr-3 pt-0">Es un concepto que reafirma la importancia de la razón en la vida en tanto comunidad y cosmos y busca llevar a los hombres a un bienestar superior a los alcances del desarrollo capitalista (Gómez, 2018, 6).</p>');
            
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            break;
        case 1:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/comunidad2.png" width="100%" height="100%">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<p class="text-justify pl-5 pr-3 pt-0">Desde los estudios más recientes en el ámbito latinoamericano el buen vivir refiere a una descolonización con mirada indigenista como proyecto de progreso diferente al capitalismo.</p>');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            break;
        case 2:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/comunidad3.png" width="100%" height="100%">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<p class="text-justify pl-5 pr-3 pt-0">Buen vivir y con ello, el vivir bien, es una alternativa nueva a la lógica del cuidado que se desarrolla al margen de la lógica del patriarcado; esta concepción sobre la vida desea superar el contrato social capitalista para dar sustento a la producción y a la vida social. </p>');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            $('.scroll-flecha-2').removeClass('d-none');
            $('.scroll-flecha-2').addClass('d-block');
            break;
        case 3:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/capitalismo1.png" width="80%" height="80%">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<p class="text-justify pl-5 pr-3 pt-0">No existe una igualdad en el marco del capitalismo, porque se ve al hombre como sujeto incorpóreo donde lo único que importa es la lógica de la acumulación que solo propone una solución individual a las contradicciones sistémicas. </p>');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            $('.scroll-flecha-2').removeClass('d-none');
            $('.scroll-flecha-2').addClass('d-block');
            $('.scroll-flecha-3').removeClass('d-none');
            $('.scroll-flecha-3').addClass('d-block');
            break;
        case 4:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/capitalismo2.png"  width="100%" height="100%">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<p class="text-justify pl-5 pr-3 pt-0">Es por ello que, el buen vivir es un paradigma alternativo del siglo XXI, el cual hace frente a la proliferación del ‘post’ que ha sido el inicio más contundente de la crisis y agotamiento de la economía y la sociedad actual; </p>');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            $('.scroll-flecha-2').removeClass('d-none');
            $('.scroll-flecha-2').addClass('d-block');
            $('.scroll-flecha-3').removeClass('d-none');
            $('.scroll-flecha-3').addClass('d-block');
            $('.scroll-flecha-4').removeClass('d-none');
            $('.scroll-flecha-4').addClass('d-block');
            break;
        case 5:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/capitalismo3.png" width="100%" height="100%">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<p class="text-justify pl-5 pr-3 pt-0">los problemas han suscitado la importancia de nuevos planteamientos sobre otros modos de producir, consumir y organizar la vida y es allí donde se hace necesaria la intervención de la reflexión filosófica.</p>');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            $('.scroll-flecha-2').removeClass('d-none');
            $('.scroll-flecha-2').addClass('d-block');
            $('.scroll-flecha-3').removeClass('d-none');
            $('.scroll-flecha-3').addClass('d-block');
            $('.scroll-flecha-4').removeClass('d-none');
            $('.scroll-flecha-4').addClass('d-block');
            $('.scroll-flecha-5').removeClass('d-none');
            $('.scroll-flecha-5').addClass('d-block');
            break;
        default:
            break;
    }
}


function pestanias(num) {
    
    $('.pesta1, .pesta2, .pesta3, .pesta4, .pesta5, .pesta6').addClass('bg-color-claro');
    $('.pesta1, .pesta2, .pesta3, .pesta4, .pesta5, .pesta6').removeClass('bg-color-rojo1');
    
    if (num == 1) {
        $('.pesta1').removeClass('bg-color-claro');
        $('.pesta1').addClass('bg-color-rojo1');

        $('#contenidoCaractU9').html(``);

        var data = `
                    <p class="text-justify pb-3 transition-on"><b>Así por ejemplo,</b> se hace necesario revisar cómo “El lenguaje empleado por las comunidades indígenas que destaquen hoy el buen vivir debe ser objeto de observación, análisis y atención” (Rojas Quiceno, 2013, p.33), especialmente en el contexto de las comunidades indígenas latinoamericanas.</p>
                    <img src="assets/img/img_ova/americano1.png" width="60%" class="transition-on">
                    `;
        $('#contenidoCaractU9').html(data);
    }else if (num == 2) {
        $('.pesta2').removeClass('bg-color-claro');
        $('.pesta2').addClass('bg-color-rojo1');

        $('#contenidoCaractU9').html(``);

        var data = `
                    <p class="text-justify pb-3 transition-on">El buen vivir se ha elaborado a partir del encuentro de prácticas ancestrales y que, por tanto, se encuentra asociado a una comprensión de vida dentro de cada comunidad indígena, por lo que no existe una definición exacta del concepto de buen vivir en el idioma español.
                        <br><br>
                        “Cada cultura le ha dado sus propios significados de acuerdo a su cosmovisión, sin embargo, es posible identificar elementos comunes entre las distintas acepciones” (Alimonda 2012, 34), y esa es precisamente la tarea de la presente investigación, a saber, dar cuenta de esos puntos comunes desde el marco conceptual de la filosofía orteguiana. 
                    </p>
                    `;
        $('#contenidoCaractU9').html(data);
    }else if (num == 3) {
        $('.pesta3').removeClass('bg-color-claro');
        $('.pesta3').addClass('bg-color-rojo1');

        $('#contenidoCaractU9').html(``);

        var data = `
                    <p class="text-justify pb-3 transition-on">“Cuando el Buen Vivir es tomado como objetivo, representante del interés general y punto de partida del Estado, como sucede en Ecuador y Bolivia, las diferentes concepciones deben articularse y devolverse a las comunidades a través de políticas públicas generales, con matices particulares según el imaginario de cada pueblo del que fue tomado”   (Alimonda 2012, 35). </p>
                    <img src="assets/img/img_ova/orgullo1.png" width="60%" class="transition-on">
                    `;
        $('#contenidoCaractU9').html(data);
    }else if (num == 4) {
        $('.pesta4').removeClass('bg-color-claro');
        $('.pesta4').addClass('bg-color-rojo1');

        $('#contenidoCaractU9').html(``);

        var data = `
                    <p class="text-justify pb-3 transition-on">Desde este punto de vista, el buen vivir no solo debe articularse por vía del Estado, sino como necesidad teórica, en tanto permite llevar con mayor facilidad el buen vivir a su relevancia desde distintas cosmovisiones.</p>
                    <img src="assets/img/img_ova/ansiedad.png" width="60%" class="transition-on">                            
                    <p class="text-justify pb-3 transition-on">El bien es algo subjetivo. “En lo que respecta a la conceptualización de las áreas morales, el bien se halla incorporado en realidades concretas y lo bueno es lo conveniente, lo honesto, lo correcto o útil para la vida” (Rojas Quiceno 2013, 35). </p>
                    `;
        $('#contenidoCaractU9').html(data);
    }else if (num == 5) {
        $('.pesta5').removeClass('bg-color-claro');
        $('.pesta5').addClass('bg-color-rojo1');

        $('#contenidoCaractU9').html(``);

        var data = `
                    <p class="text-justify pb-3 transition-on">>El bien también puede entenderse como algo convencional. En la ontología moderna, la concepción semántica del bien, da a entender que se trata de “un término que fácilmente puede sustituir el término bueno, en es muy bueno” (Ferrater Mora 1979,10). Lo bueno es la ejecución de un valor positivo. </p>
                    <img src="assets/img/img_ova/pensamiento-positivo.png" width="60%" class="transition-on">
                    `;
        $('#contenidoCaractU9').html(data);
    }else if (num == 6) {
        $('.pesta6').removeClass('bg-color-claro');
        $('.pesta6').addClass('bg-color-rojo1');

        $('#contenidoCaractU9').html(``);

        var data = `
                    <p class="text-justify pb-3 transition-on">Desde la fundamentación Kantiana, lo bueno refiere a “la buena voluntad, pero no es buena por lo que efectúe o realice, sino por el querer, es decir, es buena en sí misma, como un valor absoluto” (citado por Urdanoz 1991, 86), pero el bien y el mal no son principios de orden moral sino objetos de la voluntad.</p>
                    <img src="assets/img/img_ova/conciencia-de-si-mismo.png" width="60%" class="transition-on">
                    `;
        $('#contenidoCaractU9').html(data);
    }
}

function tarjetasU14(num,posicion) {
    if (posicion == 'p') {
        if (num == 1) {
            $('#tarjeta1U14').html(``);
            var data = `
                    <div class="fondo1U14 w-100">
                        <div class="row px-5 py-3 h-200 w-100 bg-trasparente cursor"  onclick="tarjetasU14(1,'s')">
                        <div class="col-12 mb-5 pb-3">
                            <div class="w-75 p-4">
                            <p class="color-title text-justify text-black"> Más adelante, en los inicios del siglo XX, la Alianza Popular Revolucionaria Americana (APRA) marcará el pensamiento "populista" de esta generación y el tema de las negritudes reaparecerá, se trata de una generación      “  anti positivista” y espiritualista influida por Ortega y Gasset, vive un fenómeno parecido al de algún antiimperialismo anglosajón como el sucedido en la España de la generación del año 1998 haciendo uso de categorías   "ambiguas" (Dussel 1994: 43,44).</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    `;
            $('#tarjeta1U14').html(data);
        }else if (num == 2) {
            $('#tarjeta2U14').html(``);
            var data = `
                    <div class="row bg-white px-5 py-3 h-200 w-100 cursor">
                        <div class="col-12 mb-5 pb-3">
                        <div class="w-100"  onclick="tarjetasU14(2,'s')">
                            <p class="text-justify text-black">La “Filosofía de la liberación” fue una ruptura de la praxis y del pueblo. La filosofía de la liberación se adelantó a su época impostando geopolíticamente la posibilidad de un pensar filosófico crítico desde la periferia del capitalismo…El movimiento se ocupa en el presente en la impostación intercultural de la filosofía y en la cuestión de la “descolonización”, y es por eso que, la filosofía de la liberación es sin duda la raíz crítica de una filosofía del buen vivir en Latinoamérica; en esa medida, el buen vivir no corresponde en principio, a un concepto político sino a un asunto ético y filosófico que ha alcanzado protagonismo social, económico y jurídico y no es más que un desarrollo de la filosofía de la liberación. </p>
                            <p class="color-title ">Haga clic en la flecha para continuar con la información</p>
                        </div>
                        <div class="w-100 d-flex justify-content-end menos-marginT-25">
                            <i class="fas fa-caret-right color-text h1 cursor" onclick="tarjetasU14(2,'t')"></i>
                        </div>
                        </div>
                    </div>
                        `;
            $('#tarjeta2U14').html(data);
        }
    }else if (posicion == 's') {
        if (num == 1) {
            $('#tarjeta1U14').html(``);
            var data = `
                <div class="row bg-color-verde2 px-5 py-3 h-200 w-100 cursor" onclick="tarjetasU14(1,'p')">
                    <div class="col-7 d-flex align-items-end mb-5 pb-3">
                    <div class="w-100">
                        <p class="color-title h5"> Alianza Popular Revolucionaria Americana </p>
                        <a class="btn btn-lg px-4 h4 text-white bg-color-verde4">APRA</a>
                    </div>
                    </div>
                    <div class="col-4">
                    <img src="assets/img/img_ova/apra.jpg" width="90%" height="80%" class="py-2">
                    </div>
                </div>
                    `;
            $('#tarjeta1U14').html(data);
        }else if (num == 2) {
            $('#tarjeta2U14').html(``);
            var data = `
                    <div class="row bg-color-verde3 px-5 py-3 h-200 w-100 cursor" onclick="tarjetasU14(2,'p')">
                        <div class="col-7 d-flex align-items-end mb-5 pb-3">
                        <div class="w-100">
                            <p class="color-title h5"> Filosofia de la liberación </p>
                            <a class="btn btn-lg px-4 h4 text-white bg-color-verde4">"Buen vivir"</a>
                        </div>
                        </div>
                        <div class="col-4">
                        <img src="assets/img/img_ova/tarjeta2.png" width="90%" height="80%" class="py-2">
                        </div>
                    </div>
                        `;
            $('#tarjeta2U14').html(data);
        }
    }else if (posicion == 't') {
        if (num == 2) {
            $('#tarjeta2U14').html(``);
            var data = `
                    <div class="row bg-white px-5 py-3 h-200 w-100">
                        <div class="col-7 mb-5 pb-3">
                        <div class="w-100">
                            <p class="text-justify text-black">“El Buen Vivir” se ha elaborado a partir del encuentro de prácticas ancestrales y que, por tanto, se encuentra asociado a una comprensión de vida dentro de cada comunidad indígena, por lo que no existe una definición exacta del concepto de “Buen Vivir”, en el idioma español. “Cada cultura le ha dado sus propios significados de acuerdo a su cosmovisión. Sin embargo, es posible identificar elementos comunes entre las distintas acepciones” (Alimonda 2012, 34).</p>
                        </div>
                        </div>
                        <div class="col-5 mb-5 pb-3">
                        <img src="assets/img/img_ova/ancestro.png" width="70%" height="70%" class="py-2 px-3">
                        <div class="col-12 d-flex justify-content-end menos-marginT-50">
                            <i class="fas fa-caret-left color-text h1 cursor"  onclick="tarjetasU14(2,'p')"></i>
                        </div>
                        </div>
                    </div>
                    `;
            $('#tarjeta2U14').html(data);
        }
    }
}

function cambiarImgU16(num) {
    if (num==1) {
        $('#img1U16').removeClass('bg-color');
        $('#img1U16').html(``);
        var data = `
                    <img src="assets/img/img_ova/nota3.png" width="100%" height="100%">
                    `;
        $('#img1U16').html(data);
        $('#img1U16').attr('onclick',"cambiarImgU16(2)");
    }else if (num==2) {
        $('#img1U16').addClass('bg-color');
        $('#img1U16').html(``);
        var data = `
                    <img src="assets/img/img_ova/medioAmbiente.png" width="100%">
                    `;
        $('#img1U16').html(data);
        $('#img1U16').attr('onclick',"cambiarImgU16(1)");
    }
}

function abrirMapa(num) {
    $('.mapaConc').addClass('d-none');
    if (num == 1) {
        $('#contentMapaBG').removeClass('mapaBG3') ;
        $('#contentMapaBG').addClass('mapaBG1') ;
        $('.mapaConc-1, .mapaConc-2').removeClass('d-none');
    }else if (num == 2) {
        $('.mapaConc-1, .mapaConc-2, .mapaConc-3').removeClass('d-none'); 
    }else if (num == 3) {
        $('.mapaConc-1, .mapaConc-2, .mapaConc-3, .mapaConc-4').removeClass('d-none'); 
    }else if (num == 4) {
        $('.mapaConc-1, .mapaConc-2, .mapaConc-3, .mapaConc-4, .mapaConc-5').removeClass('d-none'); 
    }else if (num == 5) {
        $('#contentMapaBG').removeClass('mapaBG1') ;
        $('#contentMapaBG').addClass('mapaBG2') ;
        $('.mapaConc-6').removeClass('d-none');
    }else if (num == 6) {
        $('.mapaConc-6, .mapaConc-7').removeClass('d-none'); 
    }else if (num == 7) {
        $('.mapaConc-6, .mapaConc-7, .mapaConc-8').removeClass('d-none'); 
    }else if (num == 8) {
        $('.mapaConc-6, .mapaConc-7, .mapaConc-8, .mapaConc-9').removeClass('d-none'); 
    }else if (num == 9) {
        $('#contentMapaBG').removeClass('mapaBG2') ;
        $('#contentMapaBG').addClass('mapaBG3') ;
        $('.mapaConc-10').removeClass('d-none');
    }else if (num == 10) {
        $('.mapaConc-10, .mapaConc-11').removeClass('d-none'); 
    }else if (num == 11) {
        $('.mapaConc-10, .mapaConc-11, .mapaConc-12').removeClass('d-none'); 
    }else if (num == 12) {
        $('.mapaConc-10, .mapaConc-11, .mapaConc-12, .mapaConc-13').removeClass('d-none'); 
    }else if (num == 13) {
        $('.mapaConc-10, .mapaConc-11, .mapaConc-12, .mapaConc-13, .mapaConc-14').removeClass('d-none'); 
    }
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