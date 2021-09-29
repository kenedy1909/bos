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
    /*$(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);*/

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
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
    /*$(".modal_scroll1").on('click', modal_scroll1);
    $(".modal_scroll3").on('click', modal_scroll2);*/
    $(".ruanda-img").on('click', ruandas);


    /*$(".unidad1-1").on('click', slide_link);
    $(".unidad1-5").on('click', slide_link);
    $(".unidad1-6_paso1").on('mouseover', unidad1_pantalla6_accion1);
    $(".unidad1-6_paso3").on('mouseover', unidad1_pantalla6_accion3);
    $(".unidad1-6_paso1").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso2").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso3").on('mouseleave', unidad1_pantalla6_accion4);*/

    /*scroll();*/
    // console.log(tema);
    slide_link(tema);

  /* -------------------- hover unidad 1 -8-------------------- */
    $(".targetasHover1").hover(function(){
        $('.targetasHover1').removeClass('bg-color-secondary');
        $('.targetasHover1').removeClass('text-white');
        $('.targetasHover1').addClass('targetitas');
        $('.hoverTriangulo1').removeClass('hidden');
      }, function(){
        $('.targetasHover1').removeClass('targetitas');
        $('.targetasHover1').addClass('bg-color-secondary');
        $('.targetasHover1').addClass('text-white');
        $('.hoverTriangulo1').addClass('hidden');
    });
    $(".targetasHover2").hover(function(){
        $('.targetasHover2').removeClass('bg-color-secondary');
        $('.targetasHover2').removeClass('text-white');
        $('.targetasHover2').addClass('targetitas');
        $('.hoverTriangulo2').removeClass('hidden');
      }, function(){
        $('.targetasHover2').removeClass('targetitas');
        $('.targetasHover2').addClass('bg-color-secondary');
        $('.targetasHover2').addClass('text-white');
        $('.hoverTriangulo2').addClass('hidden');
    });
    $(".targetasHover3").hover(function(){
        $('.targetasHover3').removeClass('bg-color-secondary');
        $('.targetasHover3').removeClass('text-white');
        $('.targetasHover3').addClass('targetitas');
        $('.hoverTriangulo3').removeClass('hidden');
      }, function(){
        $('.targetasHover3').removeClass('targetitas');
        $('.targetasHover3').addClass('bg-color-secondary');
        $('.targetasHover3').addClass('text-white');
        $('.hoverTriangulo3').addClass('hidden');
    });
    $(".targetasHover4").hover(function(){
        $('.targetasHover4').removeClass('bg-color-secondary');
        $('.targetasHover4').removeClass('text-white');
        $('.targetasHover4').addClass('targetitas');
        $('.hoverTriangulo4').removeClass('hidden');
      }, function(){
        $('.targetasHover4').removeClass('targetitas');
        $('.targetasHover4').addClass('bg-color-secondary');
        $('.targetasHover4').addClass('text-white');
        $('.hoverTriangulo4').addClass('hidden');
    });
    $(".targetasHover5").hover(function(){
        $('.targetasHover5').removeClass('bg-color-secondary');
        $('.targetasHover5').removeClass('text-white');
        $('.targetasHover5').addClass('targetitas');
        $('.hoverTriangulo5').removeClass('hidden');
      }, function(){
        $('.targetasHover5').removeClass('targetitas');
        $('.targetasHover5').addClass('bg-color-secondary');
        $('.targetasHover5').addClass('text-white');
        $('.hoverTriangulo5').addClass('hidden');
    });
    $(".targetasHover6").hover(function(){
        $('.targetasHover6').removeClass('bg-color-secondary');
        $('.targetasHover6').removeClass('text-white');
        $('.targetasHover6').addClass('targetitas');
        $('.hoverTriangulo6').removeClass('hidden');
      }, function(){
        $('.targetasHover6').removeClass('targetitas');
        $('.targetasHover6').addClass('bg-color-secondary');
        $('.targetasHover6').addClass('text-white');
        $('.hoverTriangulo6').addClass('hidden');
    });
  /* ------------------- */
});
var pdf = `<div class="col-md-12">
                <p class="p_white">
                  <a class="p_white" href="assets/PDF/reglamento_administrativo_unaula.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> reglamento_administrativo_unaula.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                  <a class="p_white" href="assets/PDF/reforma_estatutos_unaula2020.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> reforma_estatutos_unaula2020.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                  <a class="p_white" href="assets/PDF/cuestionario_reforma_estatutos.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> cuestionario_reforma_estatutos.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                  <a class="p_white" href="assets/PDF/regimen_disciplinario.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> regimen_disciplinario.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                </p>
            </div>`;
$('.pdfs').html(pdf);
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
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Reglamento administrativo");
            // dragging = "";
            // diff = "";
            // newTop = "";
            // scrollOffset = "";
            // knob = document.querySelector('.custom-scrollbar__knob8');
            // bar = document.querySelector('.custom-scrollbar__bar8');
            // container = document.querySelector('.custom-scrollbar__inner8');
            // scroll();
            /*slideCount = $('#slider-5 ul li').length;
            slideWidth = $('#slider-5 ul li').width();
            slideHeight = $('#slider-5 ul li').height();
            slider_num = "#slider-5";
            slider_all();*/
            
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Reglamento administrativo");  
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Reglamento administrativo");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Reglamento administrativo");
            $(".i1").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
            var i = new Input(1);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(1);
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
            scroll_set(8);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Reglamento administrativo");
            
            break;
        case 6:
          setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");  
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
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
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }  
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
           
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];
            var i = new Input2(2);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input2(2);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
              (function(n) {
                inputsRy[n].input.addEventListener("input", function() {
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            $(".i5").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i5");
            var elementoPadre2 = document.querySelector(".inputDiv2.i6");
            var inputsRy = [];
            var i = new Input2(2);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input2(2);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
              (function(n) {
                inputsRy[n].input.addEventListener("input", function() {
                  inputsRy[n].actualizar3();
                }, false)
              }(n));
            }
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Estatutos de la universidad");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1. Régimen estatutario y reglamentario","Reglamento académico");
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

function modal_scroll1(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob1');
    bar = document.querySelector('.custom-scrollbar__bar1');
    container = document.querySelector('.custom-scrollbar__inner1');
    scroll();
}
function modal_scroll2(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob2');
    bar = document.querySelector('.custom-scrollbar__bar2');
    container = document.querySelector('.custom-scrollbar__inner2');
    scroll();
}
function modal_scroll3(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob3');
    bar = document.querySelector('.custom-scrollbar__bar3');
    container = document.querySelector('.custom-scrollbar__inner3');
    scroll();
}

/*function funcion_vanvas() {
    var canvas = new fabric.Canvas('id_canvas');
    var imgElement = 'assets/img/uno.png';
    var imgElement2 = 'assets/img/dos.png'; 
    var imgElement3 = 'assets/img/tres.png';
    var imgElement4 = 'assets/img/cuatro.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=40;
        oImg.top=10;
        oImg.scaleToHeight(40);
        oImg.scaleToWidth(40);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito1").modal("show");            
        });
        oImg.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=260;
        oImg2.top=50;
        oImg2.scaleToHeight(40);
        oImg2.scaleToWidth(40);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito2").modal("show");            
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=240;
        oImg3.top=230;
        oImg3.scaleToHeight(40);
        oImg3.scaleToWidth(40);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito3").modal("show");            
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=10;
        oImg4.top=230;
        oImg4.scaleToHeight(40);
        oImg4.scaleToWidth(40);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito4").modal("show");            
        });
        oImg4.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
}*/

/*function unidad1_pantalla6_accion1(){
    var info = '<p class="text-white">Se verifica que la proposición es cierta para el primer caso (si se desea se verifica para algunos casos siguientes al primero).</p>';
    $("#unidad1-6_paso1").html(info);
}

function unidad1_pantalla6_accion2(){
    var info = '<p class="text-white">Se <u>supone cierta</u> la proposición para un caso 𝑛=𝒌. Siendo 𝒌 cualquier natural.</p>';
    $("#unidad1-6_paso2").html(info);
}

function unidad1_pantalla6_accion3(){
    var info = `
                <p class="text-white">Se <u>demuestra que es cierta</u> para el caso siguiente; n=k+1) Se apoya en la premisa 2) que recibe el nombre de <u>hipótesis de inducción</u>.</p>
                <p class="text-white">El enunciado del paso 3) recibe el nombre de tesis de Inducción</p>
                <p class="text-white">Para probar que la afirmación (∀n) (n∈N) (Pn) es falsa se recurre al CONTRAEJEMPLO.</p>
                `;

    $("#unidad1-6_paso3").html(info);
    $(".custom-scrollbar__bar2").css('display','block');
    $(".custom-scrollbar2").css('height','240px');
}

function unidad1_pantalla6_accion4(){
    $(".limpiar_pasos").html('');
    $(".custom-scrollbar__bar2").css('display','none');
    $(".custom-scrollbar2").css('height','88px');
}*/

//scroll



//scroll2

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

// setup


function poner(num) {
    
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display','block');
        $(".custom-scrollbar2").css('height','250');
    }
}
function quitar(num) {
    // $(".texto_efecto"+num).css({
    //     position: 'relative',
    //     top: '2px',
    //     display: 'none',
    //     'z-index': '100'
    // });
    if (num == 1) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
    }
    if (num == 2) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
    }
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
    }
}

function scroll_horizontal(num){
  
    switch (parseInt(num)) {
        case 0:
            var pantalla = `<p class="text-black text-justify">De igual forma, en el caso Jean Pierre Bemba, se discutió si la exigencia que el autor sea consciente de las circunstancias de hecho es un elemento contextual material o jurisdiccional, dándose un importante cambio en la jurisprudencia, al considerarlo como material, es decir, nuevamente se traslada a ser un elemento necesario para que se configure el crimen y no para determinar la jurisdicción del tribunal internacional. 
            <br>
            <b>Deslice para continuar con la información:</b>
          </p>`;
            $('#scroll-img').html(pantalla);
            break;
        case 1:  
            var pantalla = `<p class="text-black text-justify">Así mismo, es importante reconocer en este punto que, cuando se habla de los elementos contextuales materiales, los mismos deben ser abarcados por el elemento subjetivo requerido para el crimen, mientras que en los elementos contextuales jurisdiccionales no.</p>`;
            $('#scroll-img').html(pantalla);

            break;
        default:
            break;
    }
}
// function scroll_horizontal2(num){
//     switch (parseInt(num)) {
//         case 0:
//             var img_scroll = `
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/bunker (1).png" class="img-90 m-auto">
//                              </div>
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/muerte.png" class="img-90 m-auto">
//                              </div>
//                              `;
//             var info_scroll = `El primero de estos conflictos que debe llamar la atención es el ocurrido en la <span class="text-cafe-activi"><b>República Federativa de Yugoslavia</b></span>, la cual, después de integrar durante décadas pueblos con profundas diferencias étnicas, religiosas y de identidad nacional, comienza a desintegrarse a partir de la muerte del general Josip Broz Tito en 1980, quien durante treinta y cinco años gobernó la hoy extinta Yugoslavia.`;
//             var activi_scroll = ``;
//             $('#img-scroll').html(img_scroll);
//             $('#info-scroll').html(info_scroll);
//             $('#activi-scroll').html(activi_scroll);
//             break;
//         case 1:
//             var img_scroll = `
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/punto.png" class="img-90 m-auto">
//                              </div>
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/balas.png" class="img-90 m-auto">
//                              </div>
//                              `;
//             var info_scroll = `A raíz de la muerte del general tito se retomó el ánimo de varios pueblos por lograr su independencia y constituirse como un Estado soberano, lo que <span class="text-cafe-activi"><b>dio inicio a la confrontación,</b></span> especialmente cuando Bosnia Herzegovina empezó su proceso de independencia, ante la negativa de los Bosnios Serbios de apoyar el proceso, con el respaldo de Serbia, en cabeza de Slodovan Milosevic que se hizo al poder en la década del 90.`;
//             var activi_scroll = `
//                                 <div class="row border-left-cafe">
//                                   <div class="col-md-12 row">
//                                     <div class="col-md-1 p-0 zindex" style="">
//                                       <img src="assets/img/img_template/actividad_general.png" class="imgactividad" style="">
//                                     </div>
//                                     <div class="col-md-11">
//                                       <div class="titulo_sub" style="">
//                                         <p style=""><b>ACTIVIDAD # 5</b></p>
//                                       </div>
//                                       <br>
//                                       <br>
//                                       <h2 class="text-cafe-activi"><b>Trabajo autónomo</b></h2>
//                                     </div>
//                                     <div class="col-md-12 banner_activi bg-amarillo-c">
//                                       <div class="pr-3">
//                                         <p class="p_black pl-3">Para un recorrido rápido al conflicto de Yugoslavia, visualice el siguiente video haciendo clic en el botón YouTube:</p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="col-md-12 row d-flex justify-content-center mt-2 mb-5">
//                                     <div class="col-md-6 d-flex">
//                                       <div class="m-auto bg-cafe-activi radius-2 p-3">
//                                         <a href="https://www.youtube.com/watch?v=Cr2GlX4DRHk" target="_blank"><img src="assets/img/img_ova/youtube-logo.png" style="max-width: 100%;"></a>
//                                       </div>
//                                     </div>
//                                     <div class="col-md-6 d-flex">
//                                       <div class="img-45 m-auto">
//                                         <img src="assets/img/img_ova/reloj.png" class="img-100">
//                                       </div>
//                                       <p class="p_black pl-3 m-auto">Tiempo sugerido: <b>6 minutos</b></p>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 `;
//             $('#img-scroll').html(img_scroll);
//             $('#info-scroll').html(info_scroll);
//             $('#activi-scroll').html(activi_scroll);
//             break;
//         case 2:
//             var img_scroll = `
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/explosion.png" class="img-90 m-auto">
//                              </div>
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/africa.png" class="img-90 m-auto">
//                              </div>
//                              `;
//             var info_scroll = `Por otra parte, en 1994 se tiene un conflicto interno que se desarrolla en el continente africano que llama la atención de la comunidad internacional por su <span class="text-cafe-activi"><b>grado tan elevado de violencia</b></span> entre dos grupos étnicos que habitan en la república de Ruanda.`;
//             var activi_scroll = ``;
//             $('#img-scroll').html(img_scroll);
//             $('#info-scroll').html(info_scroll);
//             $('#activi-scroll').html(activi_scroll);
//             break;
//         case 3:
//             var img_scroll = `
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/belgica.png" class="img-90 m-auto">
//                              </div>
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/granada.png" class="img-90 m-auto">
//                              </div>
//                              `;
//             var info_scroll = `Estamos haciendo referencia al conflicto surgido como consecuencia de un proceso histórico de <span class="text-cafe-activi"><b>discriminación fomentado por Bélgica</b></span> que colonizó Ruanda, en el cual, estableció diferencias entre los Tutsis y los Hutus; los primeros considerados como una etnia superior que controlaba las principales fuentes de producción, lo que sembró un resentimiento que por décadas se alimentó y que fue en últimas lo que desembocó en el genocidio presentado en el año de 1994.`;
//             var activi_scroll = `
//                                 <div class="row border-left-cafe">
//                                   <div class="col-md-12 row">
//                                     <div class="col-md-1 p-0 zindex" style="">
//                                       <img src="assets/img/img_template/actividad_general.png" class="imgactividad" style="">
//                                     </div>
//                                     <div class="col-md-11">
//                                       <div class="titulo_sub" style="">
//                                         <p style=""><b>ACTIVIDAD # 6</b></p>
//                                       </div>
//                                       <br>
//                                       <br>
//                                       <h2 class="text-cafe-activi"><b>Trabajo autónomo</b></h2>
//                                     </div>
//                                     <div class="col-md-12 banner_activi bg-amarillo-c">
//                                       <div class="pr-3">
//                                         <p class="p_black pl-3">Para comprender el tema visto es  indispensable ver el documental que nos muestra el antes y durante del conflicto étnico que se vivió. Haga clic en el botón YouTube:</p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="col-md-12 row d-flex justify-content-center mt-2 mb-5">
//                                     <div class="col-md-6 d-flex">
//                                       <div class="m-auto bg-cafe-activi radius-2 p-3">
//                                         <a href="https://www.youtube.com/watch?v=YRiJYQLh1vE" target="_blank"><img src="assets/img/img_ova/youtube-logo.png" style="max-width: 100%;"></a>
//                                       </div>
//                                     </div>
//                                     <div class="col-md-6">
//                                       <div class="d-flex">
//                                           <div class="img-45 m-auto">
//                                             <img src="assets/img/img_ova/reloj.png" class="img-100">
//                                           </div>
//                                           <p class="p_black pl-3 m-auto">Tiempo sugerido: <b>54 minutos</b></p>
//                                       </div>
//                                       <div class="d-flex">
//                                         <button class="p_white bg-cafe-activi btn p-2 m-auto" data-toggle="modal" data-target="#modal-foro"><b>CLIC AQUÍ</b></button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 `;
//             $('#img-scroll').html(img_scroll);
//             $('#info-scroll').html(info_scroll);
//             $('#activi-scroll').html(activi_scroll);
//             break;
//         case 4:
//             var img_scroll = `
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/casco.png" class="img-90 m-auto">
//                              </div>
//                              <div class="col-md-6 px-2 d-flex">
//                                <img src="assets/img/img_ova/bala2.png" class="img-90 m-auto">
//                              </div>
//                              `;
//             var info_scroll = `Es importante señalar que las cifras oficiales dan cuenta de más de <span class="text-cafe-activi"><b>800.000 victimas</b></span> del genocidio durante el año 1994, de las cuales, cerca de 600.000 ocurrieron en un lapso de tres meses, periodo de mayor crueldad de los ataques de los Hutus contra el pueblo Tutsi.`;
//             var activi_scroll = ``;
//             $('#img-scroll').html(img_scroll);
//             $('#info-scroll').html(info_scroll);
//             $('#activi-scroll').html(activi_scroll);
//             break;
//         default:
//             break;
//     }
// }

function cajas(num){
  switch (parseInt(num)) {
      case 1:
          var text = `<img src="assets/img/img_ova/Ruanda-1.png" class="m-auto img-100">`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na1').removeClass('inactivo');           
          $('.na1').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      case 2:
          var text = `<img src="assets/img/img_ova/Ruanda-2.png" class="m-auto img-100">`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2').removeClass('inactivo');           
          $('.na2').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      case 3:
          var text = `<img src="assets/img/img_ova/Ruanda-3.png" class="m-auto img-100">`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav3').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na3').removeClass('inactivo');           
          $('.na3').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      case 4:
          var text = `<img src="assets/img/img_ova/Ruanda-1.png" class="m-auto img-100">`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav4').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na4').removeClass('inactivo');           
          $('.na4').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      
      default:
          break;
  }
}

function ruandas() {
    var ruanda_num = $(this).data('ruanda');
    $(".ruanda-img").removeClass('bg-cafe-activi');
    $(".ruanda-img").addClass('bg-amarillo-c');
    $(".ruanda-img-"+ruanda_num).removeClass('bg-amarillo-c');
    $(".ruanda-img-"+ruanda_num).addClass('bg-cafe-activi');

    if (ruanda_num==1) {
        var texto = `
                    <img src="assets/img/img_ova/Derecho penal internacional-03.png" class="img-20 m-auto">
                    <p class="p_black justificado my-auto pl-4">Es importante destacar que existieron diversos comités creados para redactar un código penal internacional que posteriormente debía ser discutido por los estados, sin embargo, no se presentó interés real para dar vida a un tratado que creará una corte internacional de carácter permanente.</p>
                    `;
        $("#ruanda").html(texto);
    }else if (ruanda_num==2) {
        var texto = `
                    <img src="assets/img/img_ova/Derecho penal internacional-07.png" class="img-20 m-auto">
                    <p class="p_black justificado my-auto pl-4">Por lo anterior, las décadas pasaron sin que se volviera a recurrir al derecho penal internacional, aun cuando el contexto geopolítico ha evidenciado diversos conflictos armados, en los que hubiese sido importante contar con un tribunal que juzgará a los responsables de cometerlos y evitar la impunidad frente a graves crímenes internacionales.</p>
                    `;
        $("#ruanda").html(texto);
    }else if (ruanda_num==3) {
        var texto = `
                    <img src="assets/img/img_ova/Derecho penal internacional-06.png" class="img-20 m-auto">
                    <p class="p_black justificado my-auto pl-4">Debe finalmente destacarse que, a los dos tribunales en los que se centra el presente tema, fueron creados por el Consejo de Seguridad de Naciones Unidas, en virtud del mandato que le asigna la Carta de la ONU de adoptar las medidas para el mantenimiento y restablecimiento de la paz.</p>
                    `;
        $("#ruanda").html(texto);
    }
}

function yugoslavias(num) {
    $(".yugoslavia-info").removeClass('bg-amarillo-c');
    $(".yugoslavia-info").addClass('bg-cafe-mo');
    $(".yugoslavia-info-"+num).removeClass('bg-cafe-mo');
    $(".yugoslavia-info-"+num).addClass('bg-amarillo-c');
    if (num == 1) {
        var texto = `
                    <div class="p-3 radius-4 border-cafe-activi custom-scrollbar1">
                      <div class="custom-scrollbar__inner1">
                        <p class="justificado p_black">Mediante la Resolución 780 de 1992 el Consejo de Seguridad creó la Comisión de expertos para <span class="text-cafe-activi"><b>investigar y recoger pruebas de los graves incumplimientos</b></span> a los convenios de ginebra y otras infracciones al DIH, órgano que realizó un trabajo muy importante de recolección de información sobre todas las infracciones que se hubiesen presentado, lo que incluyó más de <span class="text-cafe-activi"><b>65.000 páginas de documentos, cerca de 300 horas de filmación en video y 3.300 páginas de análisis,</b></span> lo que contrasta en un trabajo juicioso, el hecho que el comité nunca recibió financiación de la ONU para el desarrollo de sus actividades.</p>
                        <br>
                        <br>
                        <p class="justificado p_black">El trabajo realizado por el Comité de expertos fue entregado al tribunal en 1994, para que adelantara los procesos que correspondieren frente a los responsables de los crímenes cometidos. Debe destacarse que el valioso trabajo del comité se vio menguado por la decisión política de reducir su mandato en el tiempo, en tanto prevalecieron intereses políticos sobre la búsqueda de justicia.</p>
                      </div>
                      <div class="custom-scrollbar__bar1">
                        <div class="custom-scrollbar__knob1 cursor">
                          <p class="text-center linea_scroll1">-</p>
                        </div>
                      </div>
                    </div>
                    `;
        $("#tribunal").html(texto);
        modal_scroll1();
    }else if (num == 2) {
        var texto = `
                    <div class="p-3 radius-4 border-cafe-activi custom-scrollbar2">
                      <div class="custom-scrollbar__inner2">
                      <p class="justificado p_black">En febrero de 1993 el consejo de seguridad mediante la resolución 808 decidió que debía <span class="text-cafe-activi"><b>crearse un tribunal Ad hoc para investigar los infracciones al DIH (Derecho Internacional Humanitario)</b></span> cometidas en Yugoslavia a partir de 1991, para lo cual el secretario de la ONU debía presentar un informe sobre la pertinencia de crear el tribunal.</p>
                        <br>
                        <p class="justificado p_black">Como resultado de lo anterior, se emite la resolución 827 del consejo de seguridad, que crea el Tribunal Penal Internacional para la Antigua Yugoslavia y define su estatuto, el cual queda oficialmente conformado desde mayo de 1993, aunque la elección de sus jueces se realiza en septiembre y el fiscal asumió su cargo en agosto de 1994.</p>
                      </div>
                      <div class="custom-scrollbar__bar2">
                        <div class="custom-scrollbar__knob2 cursor">
                          <p class="text-center linea_scroll2">-</p>
                        </div>
                      </div>
                    </div>
                    `;
        $("#tribunal").html(texto);
        modal_scroll2();
    }else if (num == 3) {
        var texto = `
                    <div class="p-3 radius-4 border-cafe-activi">
                      <div>
                        <p class="justificado p_black">Uno de los elementos que debe destacarse es que el estatuto no solamente establece la competencia del tribunal para juzgar crímenes de guerra, que son graves infracciones al Derecho Internacional Humanitario, sino que incluye la categoría de crímenes de <span class="text-cafe-activi"><b>lesa humanidad y el genocidio</b></span>, como parte de los crímenes internacionales competencia del tribunal.</p>
                      </div>
                    </div>
                    `;
        $("#tribunal").html(texto);
    }else if (num == 4) {
        var texto = `
                    <div class="p-3 radius-4 border-cafe-activi custom-scrollbar3">
                      <div class="custom-scrollbar__inner3">
                        <p class="justificado p_black">La competencia temporal del tribunal es a partir de 1991, también se debe destacar que la sede se estableció en la Haya, Países Bajos y el <span class="text-cafe-activi"><b>presupuesto para su funcionamiento</b></span> sale de los recursos del Consejo de Seguridad de la  ONU, aún así el tribunal durante sus primeros años tuvo dificultades para el desarrollo de sus actividades, derivado de la falta de cooperación de los estados que surgieron con el proceso de escisión de la Antigua Yugoslavia, sin embargo, fueron finalmente juzgados cerca de un centenar de personas por el tribunal, desarrollando una abundante jurisprudencia que fortaleció el derecho penal internacional.</p>
                      </div>
                      <div class="custom-scrollbar__bar3">
                        <div class="custom-scrollbar__knob3 cursor">
                          <p class="text-center linea_scroll3">-</p>
                        </div>
                      </div>
                    </div>
                    `;
        $("#tribunal").html(texto);
        modal_scroll3();
    }
}

function cardsPeq(num,estado) {

  $('.textoCards1,.textoCards2,.textoCards3,.textoCards4').removeClass('d-flex');
  $('.textoCards1,.textoCards2,.textoCards3,.textoCards4').addClass('d-none');

  $('.tarjCard1,.tarjCard2,.tarjCard3,.tarjCard4').removeClass('d-none');
  $('.tarjCard1,.tarjCard2,.tarjCard3,.tarjCard4').addClass('d-flex');


  if (estado=='abrir') {
      if (num==1) {
        $('.tarjCard1').removeClass('d-flex');
        $('.tarjCard1').addClass('d-none');

        $('.textoCards1').removeClass('d-none');
        $('.textoCards1').addClass('d-flex');
      }else if (num==2) {
        $('.tarjCard2').removeClass('d-flex');
        $('.tarjCard2').addClass('d-none');

        $('.textoCards2').removeClass('d-none');
        $('.textoCards2').addClass('d-flex');
          
      }else if (num==3) {
        $('.tarjCard3').removeClass('d-flex');
        $('.tarjCard3').addClass('d-none');

        $('.textoCards3').removeClass('d-none');
        $('.textoCards3').addClass('d-flex');
          
      }else if (num==4) {
        $('.tarjCard4').removeClass('d-flex');
        $('.tarjCard4').addClass('d-none');

        $('.textoCards4').removeClass('d-none');
        $('.textoCards4').addClass('d-flex');
          
      }

  }else if(estado=='ocultar'){

      if (num==1) {
        $('.tar1Card11').addClass('d-flex');
        $('.tar1Card11').removeClass('d-none');

        $('.text1Cards1').addClass('d-none');
        $('.text1Cards1').removeClass('d-flex');
          
      }else if (num==2) {
        $('.tarjCard2').addClass('d-flex');
        $('.tarjCard2').removeClass('d-none');

        $('.textoCards2').addClass('d-none');
        $('.textoCards2').removeClass('d-flex');
          
      }else if (num==3) {
        $('.tarjCard3').addClass('d-flex');
        $('.tarjCard3').removeClass('d-none');

        $('.textoCards3').addClass('d-none');
        $('.textoCards3').removeClass('d-flex');
          
      }else if (num==4) {
        $('.tarjCard4').addClass('d-flex');
        $('.tarjCard4').removeClass('d-none');

        $('.textoCards4').addClass('d-none');
        $('.textoCards4').removeClass('d-flex');
          
      }
  }
}

function acordeon(num,estado) {

  $('#conjuntoText1,#conjuntoText2,#conjuntoText3,#conjuntoText4,#conjuntoText5').addClass('d-none');

  if (estado=='abrir') {
      if (num==1) {
        $('#conjuntoText1').removeClass('d-none');

        $('#padreAcordeon').addClass('menos-marginT-100');
        $('#padreAcordeon').removeClass('menos-margin-100');
      }else if (num==2) {
        $('#conjuntoText2').removeClass('d-none');

        $('#padreAcordeon').addClass('menos-marginT-100');
        $('#padreAcordeon').removeClass('menos-margin-100');
          
      }else if (num==3) {
        $('#conjuntoText3').removeClass('d-none');

        $('#padreAcordeon').addClass('menos-marginT-100');
        $('#padreAcordeon').removeClass('menos-margin-100');
          
      }else if (num==4) {
        $('#conjuntoText4').removeClass('d-none');

        $('#padreAcordeon').addClass('menos-marginT-100');
        $('#padreAcordeon').removeClass('menos-margin-100');
      }else if (num==5) {
        $('#conjuntoText5').removeClass('d-none');
        
        $('#padreAcordeon').addClass('menos-marginT-100');
        $('#padreAcordeon').removeClass('menos-margin-100');
      }

  }else if(estado=='ocultar'){

      if (num==1) {
        $('#conjuntoText1').addClass('d-none');

        $('#padreAcordeon').removeClass('menos-marginT-100');
        $('#padreAcordeon').addClass('menos-margin-100');
          
      }else if (num==2) {
        $('#conjuntoText2').addClass('d-none');

        $('#padreAcordeon').removeClass('menos-marginT-100');
        $('#padreAcordeon').addClass('menos-margin-100');
          
      }else if (num==3) {
        $('#conjuntoText3').addClass('d-none');

        $('#padreAcordeon').removeClass('menos-marginT-100');
        $('#padreAcordeon').addClass('menos-margin-100');
          
      }else if (num==4) {
        $('#conjuntoText4').addClass('d-none');

        $('#padreAcordeon').removeClass('menos-marginT-100');
        $('#padreAcordeon').addClass('menos-margin-100');
        
      }else if (num==5) {
        $('#conjuntoText5').addClass('d-none');

        $('#padreAcordeon').removeClass('menos-marginT-100');
        $('#padreAcordeon').addClass('menos-margin-100');
          
      }
  }
}

function lineaDir(num) {
  $('.lineaDir').removeClass('pl-3');
  $('.textContentP').html(``);
  if (num == 1) {
    var contenido =`
                  <p class="text-justify">Órganos de gobierno, los cuales toman las decisiones fundamentales para la dirección de la Universidad, el presidente del consejo superior también se considera como un órgano de gobierno (literal g, art. 22.4 – estatutos UNAULA). </p>
                  `;
    $('.lineaDir1').addClass('pl-3');
    $('.textContentP').html(contenido);

  }else if (num == 2) {
    var contenido =`
                  <p class="text-justify">Órganos que no son de gobierno: Revisor Fiscal, de vigilancia y control ( art 18), Consejo de Planeación, órgano asesor, (artículo 31), órgano Electoral.</p>
                  `;
    $('.lineaDir2').addClass('pl-3');
    $('.textContentP').html(contenido);
    
  }else if (num == 3) {
    var contenido =`
                  <p class="text-justify">Órganos Unipersonales: una persona ejerce las funciones. </p>
                  `;
    $('.lineaDir3').addClass('pl-3');
    $('.textContentP').html(contenido);
    
  }else if (num == 4) {
    var contenido =`
                  <p class="text-justify">Órganos Colegiados: están integrados por varias personas que pertenecen a los órganos y/o asociados, (artículo 10, estatutos UNAULA). </p>
                  `;
    $('.lineaDir4').addClass('pl-3');
    $('.textContentP').html(contenido);
    
  }else if (num == 5) {
    var contenido =`
                  <p class="text-justify">Órganos de Cogobierno, el cual se encuentra conformado por profesores, estudiantes y egresados exclusivamente. </p>
                  `;
    $('.lineaDir5').addClass('pl-3');
    $('.textContentP').html(contenido);
    
  }else if (num == 6) {
    var contenido =`
                  <p class="text-justify">Órganos de Elección, los cuales en su conformación tienen representantes de estudiantes y de profesores o de profesores, estudiantes y egresados, están conformados exclusivamente por estos, así como son los del cogobierno. </p>
                  `;
    $('.lineaDir6').addClass('pl-3');
    $('.textContentP').html(contenido);
    
  }
}

function lineaDir2(num) {
  $('.listContentPest').removeClass('bg-color-secondary-dark');
  $('#textoContPes1,#textoContPes2,#textoContPes3').addClass('d-none');
  $('#pestanita1,#pestanita2,#pestanita3').addClass('d-none');

  if (num == 1) {
    $('.listContentPest1').addClass('bg-color-secondary-dark');
    $('#textoContPes1').removeClass('d-none');
    $('#pestanita1').removeClass('d-none');

  }else if (num == 2) {
    $('.listContentPest2').addClass('bg-color-secondary-dark');
    $('#textoContPes2').removeClass('d-none');
    $('#pestanita2').removeClass('d-none');

  }else if (num == 3) {
    $('.listContentPest3').addClass('bg-color-secondary-dark');
    $('#textoContPes3').removeClass('d-none');
    $('#pestanita3').removeClass('d-none');

  }
}

function cambiarFondoLibro(num) {
  
  if (num == 1) {
    var contenido = `
                <p class="text-white">Si varios órganos pretenden ejercer unas mismas competencias.</p>
                `;
    $('.contedorLibro').html(contenido);
    $('#fondoLibro').removeClass('fondoLibro1');
    $('#fondoLibro').removeClass('fondoLibro3');
    $('#fondoLibro').addClass('fondoLibro2');
  }else if (num == 2) {
    var contenido = `
                <p class="text-white">Si ninguno de varios órganos, aparentemente competentes, aceptan ejercer la competencia de una función determinada.</p>
                `;
    $('.contedorLibro').html(contenido);
    $('#fondoLibro').removeClass('fondoLibro1');
    $('#fondoLibro').removeClass('fondoLibro3');
    $('#fondoLibro').addClass('fondoLibro3');
  }
}

function scroll_horizontal2(num){
  $('.scroll-img').removeClass('bg-piel');
  $('.scroll-img').addClass('bg-amarillo');
  $('.scroll-flecha').removeClass('d-block');
  $('.scroll-flecha').addClass('d-none');
  switch (parseInt(num)) {
      case 0:
          var pantalla = `<img src="assets/img/img_ova/icono22.png" width="150px" class="menos-marginT-100">`;
          $('#scroll-img2').html(pantalla);
          $('#scroll-text').html('<b>“b) Ordene, proponga o induzca la comisión de ese crimen, ya sea consumado o en grado de tentativa;</b>');
          $('.scroll-flecha-0').removeClass('d-none');
          $('.scroll-flecha-0').addClass('d-block');
          break;
      case 1:
          var pantalla = `<img src="assets/img/img_ova/escritura.png" width="150px" class="menos-marginT-100">`;
          $('#scroll-img2').html(pantalla);
          $('#scroll-text').html('<b>c) Con el propósito de facilitar la comisión de ese crimen, sea cómplice o encubridor o colabore de algún modo en la comisión o la tentativa de comisión del crimen, incluso suministrando los medios para su comisión;</b>');
          $('.scroll-flecha-0').removeClass('d-none');
          $('.scroll-flecha-0').addClass('d-block');
          $('.scroll-flecha-1').removeClass('d-none');
          $('.scroll-flecha-1').addClass('d-block');
          break;
      case 2:
          var pantalla = `<img src="assets/img/img_ova/equipo.png" width="150px" class="menos-marginT-100">`;
          $('#scroll-img2').html(pantalla);
          $('#scroll-text').html('<b>d) Contribuya de algún otro modo en la comisión o tentativa de comisión del crimen por un grupo de personas que tengan una finalidad común. La contribución deberá ser intencional y se hará;</b>');
          $('.scroll-flecha-0').removeClass('d-none');
          $('.scroll-flecha-0').addClass('d-block');
          $('.scroll-flecha-1').removeClass('d-none');
          $('.scroll-flecha-1').addClass('d-block');
          $('.scroll-flecha-2').removeClass('d-none');
          $('.scroll-flecha-2').addClass('d-block');
          break;
      case 3:
          var pantalla = `<img src="assets/img/img_ova/history.png" width="150px" class="menos-marginT-100">`;
          $('#scroll-img2').html(pantalla);
          $('#scroll-text').html('<b>i) con el propósito de llevar a cabo la actividad o propósito delictivo del grupo, cuando una u otro entrañe la comisión de un crimen de la competencia de la Corte; o</b>');
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
          var pantalla = `<img src="assets/img/img_ova/crimenesDeGuerra.png" width="150px" class="menos-marginT-100">`;
          $('#scroll-img2').html(pantalla);
          $('#scroll-text').html('<b>ii) a sabiendas de que el grupo tiene la intención de cometer el crimen;</b>');
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
          var pantalla = `<img src="assets/img/img_ova/genocidio.png" width="250px" class="menos-marginT-100">`;
          $('#scroll-img2').html(pantalla);
          $('#scroll-text').html('<b>e) respecto del crimen de genocidio, haga una instigación directa y pública a que se cometa” (Estatuto de Roma, 1998).</b>');
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

function Input2(num) {
  /* <input type="range" value="35" min="0" max="100" autocomplete="off" step="1"> */
  this.att = {};
  this.att.type = "range";
  this.att.value = 1;
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
    // alert();
});
this.actualizar2 = function() {
  scroll_horizontal2(this.input.value);
  this.output.innerHTML = this.input.value;
  this.att.value = this.input.value;
}
this.actualizar3 = function() {
  scroll_horizontal3(this.input.value);
  this.output.innerHTML = this.input.value;
  this.att.value = this.input.value;
}
$("input[type=range]").on('change', function () {
    // alert();
});
}

function scroll_horizontal3(num) {
  switch (parseInt(num)) {
      case 0:
          $('.tablas').addClass('oculto-on');
          $('.tablas').removeClass('oculto-off');

          $('.tabla1').removeClass('oculto-on');
          $('.tabla1').addClass('oculto-off');

          $('.comodines').addClass('comodinInactive');
          $('.comodines').removeClass('comodinActive');

          $('.comodin').removeClass('comodinInactive');
          $('.comodin').addClass('comodinActive');
          break;
      case 1:
          $('.tablas').addClass('oculto-on');
          $('.tablas').removeClass('oculto-off');

          $('.comodines').addClass('comodinInactive');
          $('.comodines').removeClass('comodinActive');
          break;
      case 2:
          $('.tablas').addClass('oculto-on');
          $('.tablas').removeClass('oculto-off');

          $('.tabla2').removeClass('oculto-on');
          $('.tabla2').addClass('oculto-off');

          $('.comodines').addClass('comodinInactive');
          $('.comodines').removeClass('comodinActive');

          $('.comodin').removeClass('comodinInactive');
          $('.comodin').addClass('comodinActive');
          break;
      default:
          break;
  }
}


/*pantallas 1*/
function carpeta(num){
  switch (parseInt(num)) {
      case 1:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target1').removeClass('is-hidden');
          $('.target1').addClass('not-hidden');
          break;
      case 2:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target2').removeClass('is-hidden');
          $('.target2').addClass('not-hidden');
          break;
      case 3:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target3').removeClass('is-hidden');
          $('.target3').addClass('not-hidden');
          break;
      case 4:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target4').removeClass('is-hidden');
          $('.target4').addClass('not-hidden');
          break;
      case 5:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target5').removeClass('is-hidden');
          $('.target5').addClass('not-hidden');
          break;
      case 6:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target6').removeClass('is-hidden');
          $('.target6').addClass('not-hidden');
          break;
      case 7:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target7').removeClass('is-hidden');
          $('.target7').addClass('not-hidden');
          break;
      case 8:
          $('.baneTarget').addClass('is-hidden');
          $('.baneTarget').removeClass('not-hidden');

          $('.target8').removeClass('is-hidden');
          $('.target8').addClass('not-hidden');
          break;
      default:
          break;
  }
}


function funcionalidad_1(num) {
  $(".fun_img_0, .fun_img_1, .fun_img_2, .fun_img_3, .fun_img_4, .fun_img_5, .fun_img_6, .content_1_text_1, .content_1_text_2, .content_1_text_3, .content_1_text_4, .content_1_text_5, .content_1_text_6, .content_2_text_1, .content_2_text_2, .content_2_text_3, .content_2_text_4, .content_2_text_5, .content_2_text_6").addClass("d-none");
  if (num == 1) {
      $(".fun_img_1, .content_1_text_1, .content_2_text_1").removeClass("d-none");
      $(".content_1").css({
          "top" : "235px",
          "left" : "-200px"
      });
  }else if (num == 2) {
      $(".fun_img_2, .content_1_text_2, .content_2_text_2").removeClass("d-none");
      $(".content_1").css({
          "top" : "115px",
          "left" : "-200px"
      });
  }else if (num == 3) {
      $(".fun_img_3, .content_1_text_3, .content_2_text_3").removeClass("d-none");
      $(".content_1").css({
          "top" : "0px",
          "left" : "-200px"
      });
  }else if (num == 4) {
      $(".fun_img_4, .content_1_text_4, .content_2_text_4").removeClass("d-none");
      $(".content_1").css({
          "top" : "0px",
          "left" : "520px"
      });
  }else if (num == 5) {
      $(".fun_img_5, .content_1_text_5, .content_2_text_5").removeClass("d-none");
      $(".content_1").css({
          "top" : "115px",
          "left" : "520px"
      });
  }else if (num == 6) {
      $(".fun_img_6, .content_1_text_6, .content_2_text_6").removeClass("d-none");
      $(".content_1").css({
          "top" : "235px",
          "left" : "520px"
      });
  }
}

function pestaniasBig(num) {
  $('.cTPBig').addClass('d-none');
  $('.pestaniaNuev').removeClass('bg-white text-black border-color');
  $('.pestaniaNuev').addClass('bg-color-secondary-dark text-white');
  
  if (num==1) {
    $('.pestaniaNuev1').removeClass('bg-color-secondary-dark text-white');
    $('.pestaniaNuev1').addClass('bg-white text-black border-color');
    $('.contenedorPest1').removeClass('d-none');
  }else if (num==2) {
    $('.pestaniaNuev2').removeClass('bg-color-secondary-dark text-white');
    $('.pestaniaNuev2').addClass('bg-white text-black border-color');
    $('.contenedorPest2').removeClass('d-none');
  }else if (num==3) {
    $('.pestaniaNuev3').removeClass('bg-color-secondary-dark text-white');
    $('.pestaniaNuev3').addClass('bg-white text-black border-color');
    $('.contenedorPest3').removeClass('d-none');
  }
}

function activi1_2(num) {
  if (num == 1) {

    $('#activiInicial').removeClass('d-flex');
    $('#activiInicial').addClass('d-none');
    $('#activiPosterior').removeClass('d-none');
    $('#activiPosterior').addClass('d-flex');

    $('#padreActivi').attr('onclick','activi1_2(2)');

  }else if (num == 2) {

    $('#activiInicial').removeClass('d-none');
    $('#activiInicial').addClass('d-flex');
    $('#activiPosterior').addClass('d-none');
    $('#activiPosterior').removeClass('d-flex');
    
    $('#padreActivi').attr('onclick','activi1_2(1)');

  }


}

function tarjetaModal(num) {
  $('.selectorModal1, .selectorModal2').addClass('d-flex');
  $('.selectorModal1, .selectorModal2').removeClass('d-none');
  $('.divcerrarMt').addClass('d-none');
  $('.modalTarjeta1, .modalTarjeta2').removeClass('d-flex');
  $('.modalTarjeta1, .modalTarjeta2').addClass('d-none');
  if (num == 0) {

    $('.selectorModal1, .selectorModal2').removeClass('d-none');
    $('.selectorModal1, .selectorModal2').addClass('d-flex');

    $('.modalTarjeta1, .modalTarjeta2').removeClass('d-flex');
    $('.modalTarjeta1, .modalTarjeta2').addClass('d-none');
    
    $('.divcerrarMt').addClass('d-none');

  }else if (num == 1) {
    $('.selectorModal1, .selectorModal2').removeClass('d-flex');
    $('.selectorModal1, .selectorModal2').addClass('d-none');
    $('.divcerrarMt').removeClass('d-none');

    $('.modalTarjeta1').addClass('d-flex');
    $('.modalTarjeta1').removeClass('d-none');

  }else if (num == 2) {
    $('.selectorModal1, .selectorModal2').removeClass('d-flex');
    $('.selectorModal1, .selectorModal2').addClass('d-none');
    $('.divcerrarMt').removeClass('d-none');

    $('.modalTarjeta2').addClass('d-flex');
    $('.modalTarjeta2').removeClass('d-none');

  }


}

function selectorDe3(num) {

  $('.mostrarContenido1, .mostrarContenido2, .mostrarContenido3').removeClass('bg-color');
  $('.mostrarContenido1, .mostrarContenido2, .mostrarContenido3').addClass('bg-white');
  
  $('.selector1, .selector2, .selector3').removeClass('d-flex');
  $('.selector1, .selector2, .selector3').addClass('d-none');

  if (num==1) {
    $('.selector1').removeClass('d-none');
    $('.selector1').addClass('d-flex');

    $('.mostrarContenido1').removeClass('bg-white');
    $('.mostrarContenido1').addClass('bg-color');
  }else if (num==2) {
    $('.selector2').removeClass('d-none');
    $('.selector2').addClass('d-flex');

    $('.mostrarContenido2').removeClass('bg-white');
    $('.mostrarContenido2').addClass('bg-color');
  }else if (num==3) {
    $('.selector3').removeClass('d-none');
    $('.selector3').addClass('d-flex');

    $('.mostrarContenido3').removeClass('bg-white');
    $('.mostrarContenido3').addClass('bg-color');
  }
}

function selectorDe3_2(num) {

  
  $('.over1, .over2, .over3').addClass('d-none');

  if (num==1) {
    $('.over1').removeClass('d-none');
  }else if (num==2) {
    $('.over2').removeClass('d-none');
  }else if (num==3) {
    $('.over3').removeClass('d-none');
  }
}

function ModalContenidoPant(num) {

  if (num == 0) {
    $('.modalPrinContenido').removeClass('d-none');
    $('.modalSecContenido').addClass('d-none');
    $('.modalTerContenido').addClass('d-none');
  }else if (num == 'm1') {
    $('.modalPrinContenido').addClass('d-none');
    $('.modalSecContenido').removeClass('d-none');
  }else if (num == 'm2') {
    $('.modalPrinContenido').addClass('d-none');
    $('.modalTerContenido').removeClass('d-none');
  }else if (num == 1) {
    $('.cardSelect1').removeClass('d-none');
    $('.cardSelect2, .cardSelect3').addClass('d-none');
  }else if (num == 2) {
    $('.cardSelect2').removeClass('d-none');
    $('.cardSelect1, .cardSelect3').addClass('d-none');
  }else if (num == 3) {
    $('.cardSelect3').removeClass('d-none');
    $('.cardSelect1, .cardSelect2').addClass('d-none');
  
  }else if (num == 4) {
    $('.abrirCollapse1').removeClass('d-flex');
    $('.abrirCollapse1').addClass('d-none');

    $('.abrirCollapse1_1').removeClass('d-none');
    $('.abrirCollapse1_1').addClass('d-flex');

    $('.abrirCollapse2_1').removeClass('d-flex');
    $('.abrirCollapse2_1').addClass('d-none');

    $('.abrirCollapse3_1').removeClass('d-flex');
    $('.abrirCollapse3_1').addClass('d-none');

    $('.abrirCollapse2').addClass('hidden');
    $('.abrirCollapse3').addClass('top-100');
    $('.abrirCollapse1').removeClass('top-menos110');
    $('.abrirCollapse2').removeClass('top-menos190');
    
    $('.abrirCollapsePadre3').removeClass('my-5 pt-5');
    
    $('.contenidoCollapse1').removeClass('d-none');
    $('.contenidoCollapse2, .contenidoCollapse3').addClass('d-none');

  }else if (num == '4_1') {
    $('.abrirCollapse1').removeClass('d-none');
    $('.abrirCollapse1').addClass('d-flex');

    $('.abrirCollapse1_1').removeClass('d-flex');
    $('.abrirCollapse1_1').addClass('d-none');
    
    $('.abrirCollapse2_1').removeClass('d-flex');
    $('.abrirCollapse2_1').addClass('d-none');

    $('.abrirCollapse2').removeClass('d-none');
    $('.abrirCollapse2').addClass('d-flex');

    $('.abrirCollapse2').removeClass('hidden');
    $('.abrirCollapse3').removeClass('top-100');
    $('.abrirCollapse1').removeClass('top-menos80');
    
    $('.contenidoCollapse1, .contenidoCollapse2, .contenidoCollapse3').addClass('d-none');
    $('.abrirCollapsePadre1').addClass('mb-5');
    $('.abrirCollapsePadre3').addClass('my-5 pt-5');
    $('.abrirCollapse3').addClass('my-5');


  }else if (num == 5) {
    $('.abrirCollapse2').removeClass('d-flex');
    $('.abrirCollapse2').addClass('d-none');

    $('.abrirCollapse1').removeClass('d-none');
    $('.abrirCollapse1').addClass('d-flex');

    $('.abrirCollapse3').removeClass('d-none');
    $('.abrirCollapse3').addClass('d-flex');
    
    $('.abrirCollapse2_1').removeClass('d-none');
    $('.abrirCollapse2_1').addClass('d-flex');

    $('.abrirCollapse1_1').removeClass('d-flex');
    $('.abrirCollapse1_1').addClass('d-none');

    $('.abrirCollapse3_1').removeClass('d-flex');
    $('.abrirCollapse3_1').addClass('d-none');
    
    $('.abrirCollapse3').addClass('top-100');   
    $('.abrirCollapse1').removeClass('top-menos110');
    $('.abrirCollapse2').removeClass('top-menos190');

    $('.abrirCollapsePadre1').removeClass('mb-5');
    $('.abrirCollapsePadre3').removeClass('my-5 pt-5');
    
    $('.contenidoCollapse2').removeClass('d-none');
    $('.contenidoCollapse1, .contenidoCollapse3').addClass('d-none');

  }else if (num == '5_1') {
    $('.abrirCollapse2').removeClass('d-none');
    $('.abrirCollapse2').addClass('d-flex');
    
    $('.abrirCollapse1_1').removeClass('d-flex');
    $('.abrirCollapse1_1').addClass('d-none');
    
    $('.abrirCollapse2_1').removeClass('d-flex');
    $('.abrirCollapse2_1').addClass('d-none');

    $('.abrirCollapse2').removeClass('d-none');
    $('.abrirCollapse2').addClass('d-flex');
    
    $('.abrirCollapse3').removeClass('top-100');
    $('.abrirCollapse1').removeClass('top-menos80');
    $('.abrirCollapse2').removeClass('hidden');

    $('.contenidoCollapse1, .contenidoCollapse2, .contenidoCollapse3').addClass('d-none');
    $('.abrirCollapsePadre1').addClass('mb-5');
    $('.abrirCollapsePadre3').addClass('my-5 pt-5');
    $('.abrirCollapse3').addClass('my-5');

  }else if (num == 6) {
    $('.abrirCollapse3').removeClass('d-flex');
    $('.abrirCollapse3').addClass('d-none');
    
    $('.abrirCollapse2').removeClass('d-none');
    $('.abrirCollapse2').addClass('d-flex');
    $('.abrirCollapse2').removeClass('hidden');
    
    $('.abrirCollapse1').removeClass('d-none');
    $('.abrirCollapse1').addClass('d-flex');
    
    $('.abrirCollapse3_1').removeClass('d-none');
    $('.abrirCollapse3_1').addClass('d-flex');

    $('.abrirCollapse2_1').removeClass('d-flex');
    $('.abrirCollapse2_1').addClass('d-none');

    $('.abrirCollapse1_1').removeClass('d-flex');
    $('.abrirCollapse1_1').addClass('d-none');
    
    $('.abrirCollapse1').addClass('top-menos110');
    $('.abrirCollapse2').addClass('top-menos190');
    
    $('.contenidoCollapse3').removeClass('d-none');
    $('.contenidoCollapse1, .contenidoCollapse2').addClass('d-none');


  }else if (num == '6_1') {
    $('.abrirCollapse3').removeClass('d-none');
    $('.abrirCollapse3').addClass('d-flex');
    
    $('.abrirCollapse2').removeClass('d-none');
    $('.abrirCollapse2').addClass('d-flex');
    $('.abrirCollapse2').removeClass('hidden');
    
    $('.abrirCollapse1').removeClass('d-none');
    $('.abrirCollapse1').addClass('d-flex');

    $('.abrirCollapse3_1').removeClass('d-flex');
    $('.abrirCollapse3_1').addClass('d-none');
    
    $('.abrirCollapse2_1').removeClass('d-flex');
    $('.abrirCollapse2_1').addClass('d-none');
    
    $('.abrirCollapse1_1').removeClass('d-flex');
    $('.abrirCollapse1_1').addClass('d-none');;
    
    $('.abrirCollapse1').removeClass('top-menos110');
    $('.abrirCollapse2').removeClass('top-menos190');
    
    $('.contenidoCollapse3').removeClass('d-none');
    $('.contenidoCollapse1, .contenidoCollapse2').addClass('d-none');

    $('.abrirCollapse2').removeClass('d-none');
    $('.abrirCollapse2').addClass('d-flex');
    
    $('.abrirCollapse2_1').removeClass('d-flex');
    $('.abrirCollapse2_1').addClass('d-none');
    
    $('.abrirCollapse3').removeClass('top-100');
    $('.abrirCollapse1').removeClass('top-menos80');

    $('.contenidoCollapse1, .contenidoCollapse2, .contenidoCollapse3').addClass('d-none');

  }
}

function abrirActivi4() {
  $('#contenidoActivi4').removeClass('p-5');
  $('#contenidoActivi4').addClass('p-3 pl-5');

  var contenido = `
                  <div class="ml-5">
                    <p class="text-black text-justify">Capítulo 6 “el documento de formas de participación en el Derecho Penal Internacional” del profesor Héctor Olasolo Alonso.</p>
                    <br></br>
                    <p class="text-black text-justify"><b> Haga clic en el icono para descargar.</b></p>
                  </div>
                  <div class="w-100 text-center mt-2 px-5">
                    <a href="assets/PDF/UNIDAD1/capituloVIFormasDeParticipacion.pdf" target="_blank"><img src="assets/img/img_ova/botonera-43.png" width="25%" class="cursor"></a>
                  </div>`;

  $('#contenidoActivi4').html(contenido);
}

function activi5(num) {
  if (num == 1) {

    $('#activiInicial5').removeClass('d-flex');
    $('#activiInicial5').addClass('d-none');
    $('#activiPosterior5').removeClass('d-none');
    $('#activiPosterior5').addClass('d-flex');

    $('#padreActivi5').removeClass('bg-color');
    $('#padreActivi5').addClass('bg-color-claro');
    $('#padreActivi5').attr('onclick','activi5(2)');

  }else if (num == 2) {

    $('#activiInicial5').removeClass('d-none');
    $('#activiInicial5').addClass('d-flex');
    $('#activiPosterior5').addClass('d-none');
    $('#activiPosterior5').removeClass('d-flex');
    
    $('#padreActivi5').removeClass('bg-color-claro');
    $('#padreActivi5').addClass('bg-color');
    $('#padreActivi5').attr('onclick','activi5(1)');

  }else if (num == 3) {

    $('#activiInicial5_2').removeClass('d-flex');
    $('#activiInicial5_2').addClass('d-none');
    $('#activiPosterior5_2').removeClass('d-none');
    $('#activiPosterior5_2').addClass('d-flex');

    $('#padreActivi5_2').removeClass('bg-color');
    $('#padreActivi5_2').addClass('bg-color-claro');
    $('#padreActivi5_2').attr('onclick','activi5(4)');

  }else if (num == 4) {

    $('#activiInicial5_2').removeClass('d-none');
    $('#activiInicial5_2').addClass('d-flex');
    $('#activiPosterior5_2').addClass('d-none');
    $('#activiPosterior5_2').removeClass('d-flex');
    
    $('#padreActivi5_2').removeClass('bg-color-claro');
    $('#padreActivi5_2').addClass('bg-color');
    $('#padreActivi5_2').attr('onclick','activi5(3)');

  }


}

function ModalContenidoPant13(num) {

  if (num == 0) {
    $('#pantallaPrin13').removeClass('d-none');
    $('#pantallaSec13').addClass('d-none');

  }else if (num == 'm1') {

    $('#pantallaPrin13').addClass('d-none');
    $('#pantallaSec13').removeClass('d-none');
    var headCont13 = `
                    <img src="assets/img/img_ova/tribunal.png" width="120px" class="position-absolute" style="left: -30px;">
                    <p class="text-white pl-5 h4 mx-4"><b>1</b></p>
                    `;
    var bodyCont13 = `
                    <p class="text-black text-justify">En la instigación, al igual que en ordenar, el partícipe no realiza ninguno de los elementos objetivos del crimen, pues de ser así, se pasaría de un escenario de partícipe por instigar a responsabilidad principal como coautor.</p>
                    `;
    $('.headCont13').html(headCont13);
    $('.bodyCont13').html(bodyCont13);

  }else if (num == 'm2') {

    $('#pantallaPrin13').addClass('d-none');
    $('#pantallaSec13').removeClass('d-none');
    var headCont13 = `
                    <img src="assets/img/img_ova/habla.png" width="120px" class="position-absolute" style="left: -30px;">
                    <p class="text-white pl-5 h4 mx-4"><b>2</b></p>
                    `;
    var bodyCont13 = `
                    <p class="text-black text-justify">La instigación se da principalmente en aquellos supuestos en los que una persona tiene un cargo que le permite influir sobre otros para realizar una conducta, como los asesores políticos, los ideólogos e incluso el superior que, aprovechando su cargo, influye sobre el subalterno para que realice determinado acto.</p>
                    `;
    $('.headCont13').html(headCont13);
    $('.bodyCont13').html(bodyCont13);

  }else if (num == 'm3') {

    $('#pantallaPrin13').addClass('d-none');
    $('#pantallaSec13').removeClass('d-none');
    var headCont13 = `
                    <img src="assets/img/img_ova/icono_tribunal.png" width="120px" class="position-absolute" style="left: -30px;">
                    <p class="text-white pl-5 h4 mx-4"><b>3</b></p>
                    `;
    var bodyCont13 = `
                    <p class="text-black text-justify">Se destaca que la instigación puede ser expresa o tácita, lo cual, plantea escenarios de discusión, especialmente cuando se analiza frente a superiores, por la delgada línea que implica diferenciar la responsabilidad accesoria por ordenar de la por instigar. Al respecto es prudente recurrir a que en ordenar se debe contar con una acción positiva, como es la orden de llevar a cabo la conducta, mientras que en instigar, puede ser también por omisión y al ser expresa puede recurrirse a una forma de motivación para realizar la conducta y no a la orden directa de cometerla.</p>
                    `;
    $('.headCont13').html(headCont13);
    $('.bodyCont13').html(bodyCont13);

  }else if (num == 'm4') {

    $('#pantallaPrin13').addClass('d-none');
    $('#pantallaSec13').removeClass('d-none');
    var headCont13 = `
                    <img src="assets/img/img_ova/buscar.png" width="120px" class="position-absolute" style="left: -30px;">
                    <p class="text-white pl-5 h4 mx-4"><b>4</b></p>
                    `;
    var bodyCont13 = `
                    <p class="text-black text-justify">Una de las precisiones más importantes que ha realizado la jurisprudencia, es que en la instigación no se debe demostrar que  esta fue el factor determinante para la comisión de la conducta, basta con demostrar que hay un factor de contribución sustancial, es decir, no se exige que sin la instigación la conducta no se hubiese cometido, puede ser responsable con el solo hecho de reforzar la idea de cometer la conducta.</p>
                    `;
    $('.headCont13').html(headCont13);
    $('.bodyCont13').html(bodyCont13);
  }
}

function textoCambiante14(num) {
  
  $('.circuloText1,.circuloText2,.circuloText3,.circuloText4,.circuloText5').addClass('bg-color');
  $('.circuloText1,.circuloText2,.circuloText3,.circuloText4,.circuloText5').removeClass('bg-color-amarillo');
  if (num == 1) {
    $('.circuloText1').removeClass('bg-color');
    $('.circuloText1').addClass('bg-color-amarillo');
    var contenido = `
                    Es importante destacar que en la responsabilidad por cooperar se exige una contribución sustancial para la realización de la conducta, pero sin que sea necesario que se demuestre algún tipo de vínculo entre el partícipe y el autor material, lo anterior quiere decir que lo importante es el efecto de la contribución sobre la realización de la conducta y no la relación que pueda existir entre ambos.
                    `;
    $('.textoCambiante14').html(contenido);
  }else if (num == 2) {
    $('.circuloText2').removeClass('bg-color');
    $('.circuloText2').addClass('bg-color-amarillo');
    var contenido = `
                    La responsabilidad por cooperar se puede dar por acción y por omisión, por ejemplo, cuando un comandante o autoridad pública deliberadamente no realiza controles a sus tropas o cuando se omite adoptar medidas de protección que finalmente facilitan que el autor material realice la conducta.
                    `;
    $('.textoCambiante14').html(contenido);
  }else if (num == 3) {
    $('.circuloText3').removeClass('bg-color');
    $('.circuloText3').addClass('bg-color-amarillo');
    var contenido = `
                    También se presenta responsabilidad por cooperar cuando se entregan medios materiales para que el autor material pueda realizar la conducta, como por ejemplo proporcionando armas, vehículos, medios de comunicación o información que le facilite llevar a cabo su cometido.
                    `;
    $('.textoCambiante14').html(contenido);
  }else if (num == 4) {
    $('.circuloText4').removeClass('bg-color');
    $('.circuloText4').addClass('bg-color-amarillo');
    var contenido = `
                    Debe destacarse que la cooperación puede ser directa o indirecta, aun en el supuesto que la contribución sea por intermedio de otra persona, basta con que el efecto de la contribución sea sustancial para la realización de la conducta.
                    `;
    $('.textoCambiante14').html(contenido);
  }else if (num == 5) {
    $('.circuloText5').removeClass('bg-color');
    $('.circuloText5').addClass('bg-color-amarillo');
    var contenido = `
                    Finalmente, es importante resaltar que, en la responsabilidad accesoria por cooperar, de la lectura del artículo 25.3.c se desprende que hay una exigencia -no presente en las otras formas de responsabilidad accesoria- de que el responsable accesorio actúe con un dolo directo de primer grado, es decir, que frente a él debe estar no solamente la contribución sustancial, sino el nivel de certeza de que su conducta se desarrolla con la intención de facilitar la realización de la conducta criminal.
                    `;
    $('.textoCambiante14').html(contenido);
  }
}

function selectorOficina(num) {
  
  $('.flechas').removeClass('color-text');
  $('.flechas').addClass('filterScaleFlecha');

  $('.imgOficina').addClass('filterScale');
  
  if (num == 1) {
    $('.flecha1').removeClass('filterScaleFlecha');
    $('.flecha1').addClass('color-text');
    $('.imgOficina1').removeClass('filterScale');

    var contenido = `
                    <p class="text-black text-justify">En la responsabilidad por planear se requiere que exista un nivel de diseño en la realización de la conducta que constituye crimen internacional, aun cuando la misma no se haya consumado, es decir, la responsabilidad se configura independientemente de la comisión o no de la conducta, aceptando en consecuencia la tentativa</p>
                    `;
    $('.contenedorOficina').html(contenido);
  }else if (num == 2) {
    $('.flecha2').removeClass('filterScaleFlecha');
    $('.flecha2').addClass('color-text');
    $('.imgOficina2').removeClass('filterScale');

    var contenido = `
                    <div class="content p_white custom-scrollbar7">
                      <div class="custom-scrollbar__inner7">
                        <p class="text-black text-justify">Debe destacarse que conforme lo ha recogido la jurisprudencia internacional, pueden existir diferentes niveles de participación por planear dentro de un grupo criminal, el ejemplo más común es el de los mandos medios que transmiten la orden del mando superior, por lo que en cada escala de la línea de mando.
                          <br>
                          existe un diferente nivel de planeación que genera responsabilidad en el Derecho Penal Internaciona.
                        </p>
                      </div>
                      <div class="custom-scrollbar__bar7">
                        <div class="custom-scrollbar__knob7 cursor">
                          <p class="text-center linea_scroll7">-</p>
                        </div>
                      </div>
                    </div>                
                    `;
    $('.contenedorOficina').html(contenido);
    scroll_set(7);
  }else if (num == 3) {
    $('.flecha3').removeClass('filterScaleFlecha');
    $('.flecha3').addClass('color-text');
    $('.imgOficina3').removeClass('filterScale');

    var contenido = `
                   <p class="text-black text-justify"> Al igual que en las otras formas de responsabilidad accesoria analizadas, en la que da por planear es necesario que el diseño del plan sea un factor que contribuya sustancialmente en la ejecución del crimen, por lo cual no hay una exigencia de esencialidad, que lo convertiría en una forma de responsabilidad principal.</p>
                    `;
    $('.contenedorOficina').html(contenido);
  }else if (num == 4) {
    $('.flecha4').removeClass('filterScaleFlecha');
    $('.flecha4').addClass('color-text');
    $('.imgOficina4').removeClass('filterScale');

    var contenido = `
                    <div class="content p_white custom-scrollbar7">
                      <div class="custom-scrollbar__inner7">
                        <p class="text-black text-justify">Debe destacarse que conforme lo ha recogido la jurisprudencia internacional, pueden existir diferentes niveles de participación por planear dentro de un grupo criminal, el ejemplo más común es el de los mandos medios que transmiten la orden del mando superior, por lo que en cada escala de la línea de mando.
                          <br>
                          olvidando que el papel de quienes diseñaron el plan inicial, es una contribución que también requiere reproche jurídico penal.
                        </p>
                      </div>
                      <div class="custom-scrollbar__bar7">
                        <div class="custom-scrollbar__knob7 cursor">
                          <p class="text-center linea_scroll7">-</p>
                        </div>
                      </div>
                    </div>
                    `;
    $('.contenedorOficina').html(contenido);
    scroll_set(7);
  }else if (num == 5) {
    $('.flecha5').removeClass('filterScaleFlecha');
    $('.flecha5').addClass('color-text');
    $('.imgOficina5').removeClass('filterScale');

    var contenido = `
                    <p class="text-black text-justify"> En lo que corresponde con los elementos subjetivos, persiste lo establecido en la jurisprudencia frente a las demás formas de responsabilidad accesoria, en el sentido que quien planea debe ser al menos consciente de la probabilidad sustancial, sin que se exija con respecto a él, todos los elementos subjetivos propios del crimen en concreto.</p>
                    `;
    $('.contenedorOficina').html(contenido);
  }else if (num == 6) {
    $('.flecha6').removeClass('filterScaleFlecha');
    $('.flecha6').addClass('color-text');
    $('.imgOficina6').removeClass('filterScale');

    var contenido = `
                  <p class="text-black text-justify"> Lo que sí resulta relevante recordar, es que si en desarrollo de la conducta planeada, se presentan otras en las cuales el dirigente tenía ese conocimiento de la probabilidad sustancial de que esas otras conductas ocurrieran, será igualmente responsable de las mismas.</p>
                    `;
    $('.contenedorOficina').html(contenido);
  }
}

function activi6(num) {
  if (num == 1) {

    $('#activiInicial6').removeClass('d-flex');
    $('#activiInicial6').addClass('d-none');
    $('#activiPosterior6').removeClass('d-none');
    $('#activiPosterior6').addClass('d-flex');
    $('#padreActivi6').removeClass('bg-color');
    $('#padreActivi6').addClass('bg-color-claro');

    $('#padreActivi6').attr('onclick','activi6(2)');

  }else if (num == 2) {

    $('#activiInicial6').removeClass('d-none');
    $('#activiInicial6').addClass('d-flex');
    $('#activiPosterior6').addClass('d-none');
    $('#activiPosterior6').removeClass('d-flex');
    $('#padreActivi6').removeClass('bg-color-claro');
    $('#padreActivi6').addClass('bg-color');
    
    $('#padreActivi6').attr('onclick','activi6(1)');

  }


}

function slideSoldados(num) {
  $('.slid1Soldado,.slid2Soldado,.slid3Soldado').removeClass('bg-color-amarillo');
  $('.slid1Soldado,.slid2Soldado,.slid3Soldado').addClass('bg-white');

  if (num == 1) {

    $('.slid1Soldado').removeClass('bg-white');
    $('.slid1Soldado').addClass('bg-color-amarillo');
    var contenido = `
                    La responsabilidad del superior está contenida en el artículo 28 del Estatuto de Roma y corresponde con una forma de responsabilidad penal individual en la cual los comandantes, tanto de iure como de facto, pueden ser responsables de las conductas de sus subalternos por diversas causales descritas en la norma.
                    <br><br>
                    <b> Haga clic en los círculos para continuar con la información</b>
                    `;
    $('#textoCambiar').html(contenido);

  }else if (num == 2) {

    $('.slid2Soldado').removeClass('bg-white');
    $('.slid2Soldado').addClass('bg-color-amarillo');
    var contenido = `
                    Esta forma de responsabilidad es especialmente importante en los países en los que, como Colombia, se ha presentado un conflicto armado por décadas, en el marco del cual se acusa a las diferentes partes del conflicto de cometer crímenes internacionales y se cuestiona el papel que debieron tener los superiores para evitar la ocurrencia de los mismos.
                    `;
    $('#textoCambiar').html(contenido);

  }else if (num == 3) {

    $('.slid3Soldado').removeClass('bg-white');
    $('.slid3Soldado').addClass('bg-color-amarillo');
    var contenido = `
                    Se trata en consecuencia de analizar cuáles son las obligaciones que recaen en cabeza de los superiores frente a las conductas de sus subalternos, de tal suerte que generan responsabilidad en el Derecho Penal Internacional.
                    `;
    $('#textoCambiar').html(contenido);

  }
}
function cardTarjetas(num) {

  if (num == 0) {
    $('#tarjetasCards').removeClass('d-none');
    $('#contenidoCards').addClass('d-none');
    
  }else if (num == 1) {
    $('#contenidoCards').removeClass('d-none');
    $('#tarjetasCards').addClass('d-none');

    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').removeClass('d-flex');
    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').addClass('d-none');

    $('.card1Contenido').removeClass('d-none');
    $('.card1Contenido').addClass('d-flex');

  }else if (num == 2) {
    $('#contenidoCards').removeClass('d-none');
    $('#tarjetasCards').addClass('d-none');

    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').removeClass('d-flex');
    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').addClass('d-none');

    $('.card2Contenido').removeClass('d-none');
    $('.card2Contenido').addClass('d-flex');
  }else if (num == 3) {
    $('#contenidoCards').removeClass('d-none');
    $('#tarjetasCards').addClass('d-none');

    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').removeClass('d-flex');
    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').addClass('d-none');

    $('.card3Contenido').removeClass('d-none');
    $('.card3Contenido').addClass('d-flex');
  }else if (num == 4) {
    $('#contenidoCards').removeClass('d-none');
    $('#tarjetasCards').addClass('d-none');

    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').removeClass('d-flex');
    $('.card1Contenido,.card2Contenido,.card3Contenido,.card4Contenido').addClass('d-none');

    $('.card4Contenido').removeClass('d-none');
    $('.card4Contenido').addClass('d-flex');
  }
}