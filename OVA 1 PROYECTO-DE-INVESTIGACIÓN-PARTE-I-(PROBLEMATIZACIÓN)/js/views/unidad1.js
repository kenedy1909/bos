$( document ).ready(function() {
    
    console.log(tema);
    $('.ov-personaje').addClass('d-none');
    $(".menu1").removeClass('d-none');
    
    $(".menu1").addClass('c-show');
    $(".menu2").removeClass('c-show');
    $(".menu3").removeClass('c-show');
    $(".menu4").removeClass('c-show');
    star_uni = 1;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');

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
    /*slide_predeterminado();*/
    $(".linkactividades").attr('href',urlsite+'course/view.php?id='+courseid);
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
      // console.log('holaaa');
      
  }
  setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico", ">");

    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        
      console.log(e);
      controlSlides(stepIndex+0);
      // quitarflecha(stepIndex+1);
      actualizarprogress(stepIndex+1);
      switch(stepIndex) {
          case 1:
              break;
          default:
              break;
          // code block
      }
      slideNum = stepIndex;
  });
    
    

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

    $(".citar").on('click', citar);
    funcion_vanvas();
    slide_link(tema);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    console.log(stepIndex);
    controlSlides(stepIndex+0);
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
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico", ">");
            esconderPersonaje();
            cambiarColorMenu(11);
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            // knob = document.querySelector('.custom-scrollbar__knob');
            // bar = document.querySelector('.custom-scrollbar__bar');
            // container = document.querySelector('.custom-scrollbar__inner');
            /*scroll();*/
            var pdf = `<div class="col-md-12">
                          <p class="p_white size_20" style= "margin-left: -20%;>
                              <a href="assets/PDF/El_proceso_escolar_o_la_muerte_a_la_propensióna_investigar.pdf" target="_blank"> <img class="img-circle menu_superior w-50px" src="assets/img/img_template/pdf-gris.png"> <b> El proceso escolar o la muerte a la propensión a investigar.pdf </b>  <em>ver</em> </a>
                              
                          </p>
                        </div>`;
            $('.pdfs').html(pdf);
            break;
        case 2:
            esconderPersonaje();
            scroll_p11();
            $('.pasos').removeClass('efectos');
            setMigaja("Unidades de aprendizaje","Contextualización", ">");      
            cambiarColorMenu(21);    
            break;
        case 3:
            esconderPersonaje();
            scroll_p11();
            setMigaja("Unidades de aprendizaje","1. Problematizar el contexto social jurídicamente ", "El problema de investigación");
            cambiarColorMenu(31);
            var pdf = `<div class="col-md-12">
                          <p class="p_white size_20" style= "margin-left: -20%;>
                          <a href="assets/PDF/El_proceso_escolar_o_la_muerte_a_la_propensióna_investigar.pdf" target="_blank"> <img class="img-circle menu_superior w-50px" src="assets/img/img_template/pdf-gris.png"> <b> El proceso escolar o la muerte a la propensión a investigar.pdf </b>  <em>ver</em> </a>
                          </p>
                        </div>`;
            $('.pdfs').html(pdf);
            break;
        case 4:
            esconderPersonaje();
            scroll_p11();
            setMigaja("Unidades de aprendizaje","1. Problematizar el contexto social jurídicamente ", "El problema de investigación");
            cambiarColorMenu(31);
            break;
        case 5:
            esconderPersonaje();
            setMigaja("Unidades de aprendizaje","1. Problematizar el contexto social jurídicamente ", "El problema de investigación");
            cambiarColorMenu(31);
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob2');
            bar = document.querySelector('.custom-scrollbar__bar2');
            container = document.querySelector('.custom-scrollbar__inner2');
            scroll();
            break;
        case 6:
           mostrarPersonaje();
            setMigaja("Unidades de aprendizaje","1. Problematizar el contexto social jurídicamente ", "El problema de investigación");
            cambiarColorMenu(31);
            tema = 1;
            $('.ov-personaje').removeClass('d-none');
            
            
            break;

        default:
            break;
    }
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

function funcion_vanvas() {
    var canvas = new fabric.Canvas('canvas_unid1');
    var imgElement = 'assets/img/img_ova/1.png';
    var imgElement2 = 'assets/img/img_ova/2.png'; 
    var imgElement3 = 'assets/img/img_ova/3.png';
    var imgElement4 = 'assets/img/img_ova/4.png';
    var imgElement5 = 'assets/img/img_ova/5.png';
    var imgElement6 = 'assets/img/img_ova/6.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=110;
        oImg.top=-10;
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
        oImg2.left=210;
        oImg2.top=20;
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
        oImg3.left=245;
        oImg3.top=80;
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
        oImg4.left=260;
        oImg4.top=150;
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
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=230;
        oImg5.top=220;
        oImg5.scaleToHeight(50);
        oImg5.scaleToWidth(50);
        oImg5.selectable = false;
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito4").modal("show"); 
            pantalla13(5);           
        });
        oImg5.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=120;
        oImg6.top=260;
        oImg6.scaleToHeight(50);
        oImg6.scaleToWidth(50);
        oImg6.selectable = false;
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            pantalla13(6);           
        });
        oImg6.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
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

function toggleBanner(num) {
  let contador=1;
  contador= contador++;
  console.log('clik'+ contador);
  switch (parseInt(num)) {
    case 1:
      
        $('.bannerU1-3').addClass('esc');
        $('.banner2U1-3').removeClass('esc');     
      
      break;
      case 2:
    
        $('.bannerU1-3').addClass('esc');
        $('.banner1U1-3').removeClass('esc'); 
        $('.banner3U1-3').removeClass('esc'); 
      
      break;
      case 3:
      
        $('.bannerU1-3').addClass('esc');
        $('.banner4U1-3').removeClass('esc');     
      
      break;
      case 4:
    
        $('.bannerU1-3').addClass('esc');
        $('.banner1U1-3').removeClass('esc'); 
        $('.banner3U1-3').removeClass('esc'); 
      
      break;
  
    default:
      break;
  }
  
}

function mostrarPersonaje() {
  $('.ov-personaje').removeClass('esc');
  
}

function esconderPersonaje() {
  $('.ov-personaje').addClass('esc');
  
}
