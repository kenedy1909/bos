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
    /*slide_predeterminado();*/

    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider2').css({ width: '100%', height: '500px' });
    
    $('#slider2 ul').css({ width: '90%'});
    
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft2() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev2').click(function (e) {
        moveLeft2();
        e.preventDefault();
    });

    $('a.control_next2').click(function (e) {
        moveRight2();
        e.preventDefault();
    });

    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    /*$(".modal_scroll1").on('click', modal_scroll1);
    $(".modal_scroll3").on('click', modal_scroll2);*/
    /*$(".ruanda-img").on('click', ruandas);*/


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
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/UNIDAD 1/tratado-de-versalles.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Tratado de versalles.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);
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
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");  
            /*$(".i1").html('')    
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
            }  */
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");  
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Segunda Guerra Mundial");
            
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            /*$(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];  
            var i = new Input(4);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(4);
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
            }  */
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            break;
        default:
            break;
    }
}

function scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}
function scroll_dos(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_dos');
    bar = document.querySelector('.custom-scrollbar__bar_dos');
    container = document.querySelector('.custom-scrollbar__inner_dos');
    scroll();
}
function scroll_tres(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_tres');
    bar = document.querySelector('.custom-scrollbar__bar_tres');
    container = document.querySelector('.custom-scrollbar__inner_tres');
    scroll();
}


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

/*
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
*/
function scroll_horizontal(num){
    $('.scroll-img').removeClass('bg-piel');
    $('.scroll-img').addClass('bg-amarillo');
    $('.scroll-flecha').removeClass('d-block');
    $('.scroll-flecha').addClass('d-none');
    switch (parseInt(num)) {
        case 0:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/francisco_fernando_austria.jpg">`;
            $('#scroll-img').html(pantalla);
            $('#pdf-anios').html(`<a href="assets/PDF/1914.pdf" target="_blank" class="mx-auto mt-auto cursor"><img class="img-100" src="assets/img/img_ova/btn-pdf.png"></a>`);
            $('#scroll-text').html('<b>Es asesinado por los Serbios, el Archiduque Francisco Fernando, quien para ese momento era el heredero al trono de Austria Hungría.</b>');
            $('.scroll-img-0').removeClass('bg-amarillo');
            $('.scroll-img-0').addClass('bg-piel');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            break;
        case 1:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/tratado_londres.jpg">`;
            $('#scroll-img').html(pantalla);
            $('#pdf-anios').html(`<a href="assets/PDF/1915.pdf" target="_blank" class="mx-auto mt-auto cursor"><img class="img-100" src="assets/img/img_ova/btn-pdf.png"></a>`);
            $('#scroll-text').html('<b>Italia abandona el bloque de la TRIPLE ALIANZA y entra a la guerra junto a la TRIPLE ENTENTE al firmar el tratado de Londres.</b>');
            $('.scroll-img-1').removeClass('bg-amarillo');
            $('.scroll-img-1').addClass('bg-piel');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            break;
        case 2:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/trincheras.jpg">`;
            $('#scroll-img').html(pantalla);
            $('#pdf-anios').html(`<a href="assets/PDF/1916.pdf" target="_blank" class="mx-auto mt-auto cursor"><img class="img-100" src="assets/img/img_ova/btn-pdf.png"></a>`);
            $('#scroll-text').html('<b>Enfrentamientos entre los ejércitos de Francia y Alemania, representaron las batallas más sangrientas de la Guerra.</b>');
            $('.scroll-img-2').removeClass('bg-amarillo');
            $('.scroll-img-2').addClass('bg-piel');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            $('.scroll-flecha-1').removeClass('d-none');
            $('.scroll-flecha-1').addClass('d-block');
            $('.scroll-flecha-2').removeClass('d-none');
            $('.scroll-flecha-2').addClass('d-block');
            break;
        case 3:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/nicolas.jpg">`;
            $('#scroll-img').html(pantalla);
            $('#pdf-anios').html(`<a href="assets/PDF/1917.pdf" target="_blank" class="mx-auto mt-auto cursor"><img class="img-100" src="assets/img/img_ova/btn-pdf.png"></a>`);
            $('#scroll-text').html('<b>El inicio en Rusia de la revolución de febrero que generó la abdicación del Zar Nicolás.</b>');
            $('.scroll-img-3').removeClass('bg-amarillo');
            $('.scroll-img-3').addClass('bg-piel');
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
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/union.jpg">`;
            $('#scroll-img').html(pantalla);
            $('#pdf-anios').html(`<a href="assets/PDF/1918.pdf" target="_blank" class="mx-auto mt-auto cursor"><img class="img-100" src="assets/img/img_ova/btn-pdf.png"></a>`);
            $('#scroll-text').html('<b>Se firma el Tratado de Brest-Litovsk, donde el nuevo gobierno socialista de Rusia firma la renuncia a algunos territorios.</b>');
            $('.scroll-img-4').removeClass('bg-amarillo');
            $('.scroll-img-4').addClass('bg-piel');
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
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/versalles.png">`;
            $('#scroll-img').html(pantalla);
            $('#pdf-anios').html(`<a href="assets/PDF/1919.pdf" target="_blank" class="mx-auto mt-auto cursor"><img class="img-100" src="assets/img/img_ova/btn-pdf.png"></a>`);
            $('#scroll-text').html('<b>Se da la firma del tratado de Versalles, contempla por primera vez la creación de un tribunal especial en su artículo 227.</b>');
            $('.scroll-img-5').removeClass('bg-amarillo');
            $('.scroll-img-5').addClass('bg-piel');
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
function scroll_horizontal2(num){
    switch (parseInt(num)) {
        case 0:
            var img_scroll = `
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/bunker (1).png" class="img-90 m-auto">
                             </div>
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/muerte.png" class="img-90 m-auto">
                             </div>
                             `;
            var info_scroll = `El primero de estos conflictos que debe llamar la atención es el ocurrido en la <span class="text-cafe-activi"><b>República Federativa de Yugoslavia</b></span>, la cual, después de integrar durante décadas pueblos con profundas diferencias étnicas, religiosas y de identidad nacional, comienza a desintegrarse a partir de la muerte del general Josip Broz Tito en 1980, quien durante treinta y cinco años gobernó la hoy extinta Yugoslavia.`;
            var activi_scroll = ``;
            $('#img-scroll').html(img_scroll);
            $('#info-scroll').html(info_scroll);
            $('#activi-scroll').html(activi_scroll);
            break;
        case 1:
            var img_scroll = `
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/punto.png" class="img-90 m-auto">
                             </div>
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/balas.png" class="img-90 m-auto">
                             </div>
                             `;
            var info_scroll = `A raíz de la muerte del general tito se retomó el ánimo de varios pueblos por lograr su independencia y constituirse como un Estado soberano, lo que <span class="text-cafe-activi"><b>dio inicio a la confrontación,</b></span> especialmente cuando Bosnia Herzegovina empezó su proceso de independencia, ante la negativa de los Bosnios Serbios de apoyar el proceso, con el respaldo de Serbia, en cabeza de Slodovan Milosevic que se hizo al poder en la década del 90.`;
            var activi_scroll = `
                                <div class="row border-left-cafe">
                                  <div class="col-md-12 row">
                                    <div class="col-md-1 p-0 zindex" style="">
                                      <img src="assets/img/img_template/actividad_general.png" class="imgactividad" style="">
                                    </div>
                                    <div class="col-md-11">
                                      <div class="titulo_sub" style="">
                                        <p style=""><b>ACTIVIDAD # 5</b></p>
                                      </div>
                                      <br>
                                      <br>
                                      <h2 class="text-cafe-activi"><b>Trabajo autónomo</b></h2>
                                    </div>
                                    <div class="col-md-12 banner_activi bg-amarillo-c">
                                      <div class="pr-3">
                                        <p class="p_black pl-3">Para un recorrido rápido al conflicto de Yugoslavia, visualice el siguiente video haciendo clic en el botón YouTube:</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 row d-flex justify-content-center mt-2 mb-5">
                                    <div class="col-md-6 d-flex">
                                      <div class="m-auto bg-cafe-activi radius-2 p-3">
                                        <a href="https://www.youtube.com/watch?v=Cr2GlX4DRHk" target="_blank"><img src="assets/img/img_ova/youtube-logo.png" style="max-width: 100%;"></a>
                                      </div>
                                    </div>
                                    <div class="col-md-6 d-flex">
                                      <div class="img-45 m-auto">
                                        <img src="assets/img/img_ova/reloj.png" class="img-100">
                                      </div>
                                      <p class="p_black pl-3 m-auto">Tiempo sugerido: <b>6 minutos</b></p>
                                    </div>
                                  </div>
                                </div>
                                `;
            $('#img-scroll').html(img_scroll);
            $('#info-scroll').html(info_scroll);
            $('#activi-scroll').html(activi_scroll);
            break;
        case 2:
            var img_scroll = `
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/explosion.png" class="img-90 m-auto">
                             </div>
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/africa.png" class="img-90 m-auto">
                             </div>
                             `;
            var info_scroll = `Por otra parte, en 1994 se tiene un conflicto interno que se desarrolla en el continente africano que llama la atención de la comunidad internacional por su <span class="text-cafe-activi"><b>grado tan elevado de violencia</b></span> entre dos grupos étnicos que habitan en la república de Ruanda.`;
            var activi_scroll = ``;
            $('#img-scroll').html(img_scroll);
            $('#info-scroll').html(info_scroll);
            $('#activi-scroll').html(activi_scroll);
            break;
        case 3:
            var img_scroll = `
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/belgica.png" class="img-90 m-auto">
                             </div>
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/granada.png" class="img-90 m-auto">
                             </div>
                             `;
            var info_scroll = `Estamos haciendo referencia al conflicto surgido como consecuencia de un proceso histórico de <span class="text-cafe-activi"><b>discriminación fomentado por Bélgica</b></span> que colonizó Ruanda, en el cual, estableció diferencias entre los Tutsis y los Hutus; los primeros considerados como una etnia superior que controlaba las principales fuentes de producción, lo que sembró un resentimiento que por décadas se alimentó y que fue en últimas lo que desembocó en el genocidio presentado en el año de 1994.`;
            var activi_scroll = `
                                <div class="row border-left-cafe">
                                  <div class="col-md-12 row">
                                    <div class="col-md-1 p-0 zindex" style="">
                                      <img src="assets/img/img_template/actividad_general.png" class="imgactividad" style="">
                                    </div>
                                    <div class="col-md-11">
                                      <div class="titulo_sub" style="">
                                        <p style=""><b>ACTIVIDAD # 6</b></p>
                                      </div>
                                      <br>
                                      <br>
                                      <h2 class="text-cafe-activi"><b>Trabajo autónomo</b></h2>
                                    </div>
                                    <div class="col-md-12 banner_activi bg-amarillo-c">
                                      <div class="pr-3">
                                        <p class="p_black pl-3">Para comprender el tema visto es  indispensable ver el documental que nos muestra el antes y durante del conflicto étnico que se vivió. Haga clic en el botón YouTube:</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 row d-flex justify-content-center mt-2 mb-5">
                                    <div class="col-md-6 d-flex">
                                      <div class="m-auto bg-cafe-activi radius-2 p-3">
                                        <a href="https://www.youtube.com/watch?v=YRiJYQLh1vE" target="_blank"><img src="assets/img/img_ova/youtube-logo.png" style="max-width: 100%;"></a>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="d-flex">
                                          <div class="img-45 m-auto">
                                            <img src="assets/img/img_ova/reloj.png" class="img-100">
                                          </div>
                                          <p class="p_black pl-3 m-auto">Tiempo sugerido: <b>54 minutos</b></p>
                                      </div>
                                      <div class="d-flex">
                                        <button class="p_white bg-cafe-activi btn p-2 m-auto" data-toggle="modal" data-target="#modal-foro"><b>CLIC AQUÍ</b></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `;
            $('#img-scroll').html(img_scroll);
            $('#info-scroll').html(info_scroll);
            $('#activi-scroll').html(activi_scroll);
            break;
        case 4:
            var img_scroll = `
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/casco.png" class="img-90 m-auto">
                             </div>
                             <div class="col-md-6 px-2 d-flex">
                               <img src="assets/img/img_ova/bala2.png" class="img-90 m-auto">
                             </div>
                             `;
            var info_scroll = `Es importante señalar que las cifras oficiales dan cuenta de más de <span class="text-cafe-activi"><b>800.000 victimas</b></span> del genocidio durante el año 1994, de las cuales, cerca de 600.000 ocurrieron en un lapso de tres meses, periodo de mayor crueldad de los ataques de los Hutus contra el pueblo Tutsi.`;
            var activi_scroll = ``;
            $('#img-scroll').html(img_scroll);
            $('#info-scroll').html(info_scroll);
            $('#activi-scroll').html(activi_scroll);
            break;
        default:
            break;
    }
}

function cajas(num){
  switch (parseInt(num)) {
      case 1:
          var text = `<img src="assets/img/img_ova/infografia.png" class="m-auto img-100">`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na1').removeClass('inactivo');           
          $('.na1').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      case 2:
          var text = `<img src="assets/img/img_ova/infografia2.png" class="m-auto img-100">`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2').removeClass('inactivo');           
          $('.na2').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      
      default:
          break;
  }
}
function cajas2(num){
  switch (parseInt(num)) {
      case 1:
          var text = `
                        <div class="row pl-3">
                          <div class="col-md-6">
                            <div class="radius-2 bg-verde-1 p-3">
                              <p class="p_white justificado">También denominado equiángulo.</p>
                              <br>
                              <p class="p_white justificado">Tiene sus tres lados iguales y sus tres ángulos.</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img src="assets/img/img_ova/triagulo_2.png" class="m-auto img-70">
                          </div>
                        </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2_1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2_1').removeClass('inactivo');           
          $('.na2_1').addClass('encendido');
          
          $('#infografia2').html(text);
          break;
      case 2:
          var text = `
                        <div class="row pl-3">
                          <div class="col-md-6">
                            <div class="radius-2 bg-verde-1 p-3">
                              <p class="p_white justificado">Tiene dos lados iguales (los ángulos a los que se oponen son también iguales).  Se llama vértice al compartido por los lados iguales, base al lado opuesto al vértice.</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img src="assets/img/img_ova/triagulo_3.png" class="m-auto img-70">
                          </div>
                        </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2_2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2_2').removeClass('inactivo');           
          $('.na2_2').addClass('encendido');
          
          $('#infografia2').html(text);
          break;
      case 3:
          var text = `
                        <div class="row pl-3">
                          <div class="col-md-6">
                            <div class="radius-2 bg-verde-1 p-3">
                              <p class="p_white justificado">Tiene sus tres lados desiguales</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img src="assets/img/img_ova/triagulo_4.png" class="m-auto img-70">
                          </div>
                        </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2_3').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2_3').removeClass('inactivo');           
          $('.na2_3').addClass('encendido');
          
          $('#infografia2').html(text);
          break;
      case 4:
          var text = `
                        <div class="row pl-3">
                          <div class="col-md-6">
                            <div class="radius-2 bg-verde-1 p-3">
                              <p class="p_white justificado">Tiene sus tres ángulos agudos.</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img src="assets/img/img_ova/triagulo_5.png" class="m-auto img-70">
                          </div>
                        </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2_4').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2_4').removeClass('inactivo');           
          $('.na2_4').addClass('encendido');
          
          $('#infografia2').html(text);
          break;
      case 5:
          var text = `
                        <div class="row pl-3">
                          <div class="col-md-6">
                            <div class="radius-2 bg-verde-1 p-3">
                              <p class="p_white justificado">Tiene un ángulo obtuso.</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img src="assets/img/img_ova/triagulo_6.png" class="m-auto img-70">
                          </div>
                        </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2_5').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2_5').removeClass('inactivo');           
          $('.na2_5').addClass('encendido');
          
          $('#infografia2').html(text);
          break;
      case 6:
          var text = `
                        <div class="row pl-3">
                          <div class="col-md-6">
                            <div class="radius-2 bg-verde-1 p-3">
                              <p class="p_white justificado">Tiene un ángulo recto.</p>
                              <br>
                              <p class="p_white justificado">Se llama hipotenusa al lado que se opone al ángulo recto (es el mayor) y a los otros dos, catetos..</p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <img src="assets/img/img_ova/triagulo_7.png" class="m-auto img-70">
                          </div>
                        </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2_6').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2_6').removeClass('inactivo');           
          $('.na2_6').addClass('encendido');
          
          $('#infografia2').html(text);
          break;
      
      default:
          break;
  }
}
/*
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
}*/

function funcionalidad_1(num) {
    $(".info_funcionalidad_1_1, .info_funcionalidad_1_2").addClass('d-none');

    if (num == 1) {
        $(".info_funcionalidad_1_1").removeClass('d-none');
    }else if (num == 2) {
        $(".info_funcionalidad_1_2").removeClass('d-none');
    }
}

function funcionalidad_2(num) {
    $(".info_funcionalidad_2_1, .info_funcionalidad_2_2, .info_funcionalidad_2_3, .info_funcionalidad_2_4, .info_funcionalidad_2_5").addClass('d-none');

    if (num == 1) {
        $(".info_funcionalidad_2_1").removeClass('d-none');
    }else if (num == 2) {
        $(".info_funcionalidad_2_2").removeClass('d-none');
    }else if (num == 3) {
        $(".info_funcionalidad_2_3").removeClass('d-none');
    }else if (num == 4) {
        $(".info_funcionalidad_2_4").removeClass('d-none');
    }else if (num == 5) {
        $(".info_funcionalidad_2_5").removeClass('d-none');
    }
}

function funcionalidad_3(num) {
    $(".hover_1, .hover_2, .hover_3, .info_funcionalidad_3_1, .info_funcionalidad_3_2, .info_funcionalidad_3_3").addClass('d-none');
    if (num == 1) {
        $(".hover_1").removeClass('d-none');
        $(".info_funcionalidad_3_1").removeClass('d-none');
    }else if (num == 2) {
        $(".hover_2").removeClass('d-none');
        $(".info_funcionalidad_3_2").removeClass('d-none');
    }else if (num == 3) {
        $(".hover_3").removeClass('d-none');
        $(".info_funcionalidad_3_3").removeClass('d-none');
    }
}

function funcionalidad_4(num) {
    $(".funcionalidad_4_1, .funcionalidad_4_2").removeClass('bg-verde-2');
    $(".funcionalidad_4_1, .funcionalidad_4_2").addClass('bg-color-activi-c');
    $(".info_funcionalidad_3_2_1, .info_funcionalidad_3_2_2").addClass('d-none');
    if (num == 1) {
        $(".funcionalidad_4_1").removeClass('bg-color-activi-c');
        $(".funcionalidad_4_1").addClass('bg-verde-2');
        $(".info_funcionalidad_3_2_1").removeClass('d-none');
    }else if (num == 2) {
        $(".funcionalidad_4_2").removeClass('bg-color-activi-c');
        $(".funcionalidad_4_2").addClass('bg-verde-2');
        $(".info_funcionalidad_3_2_2").removeClass('d-none');
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

function funcionalidad_5(num) {
    $(".info_funcionalidad_5_1, .info_funcionalidad_5_2, .info_funcionalidad_5_3, .info_funcionalidad_5_4, .info_funcionalidad_5_5, .info_funcionalidad_5_6").addClass('d-none');
    $(".btn_funcionalidad_5_1, .btn_funcionalidad_5_2, .btn_funcionalidad_5_3, .btn_funcionalidad_5_4, .btn_funcionalidad_5_5, .btn_funcionalidad_5_6").removeClass('bg-verde-2');
    $(".btn_funcionalidad_5_1, .btn_funcionalidad_5_2, .btn_funcionalidad_5_3, .btn_funcionalidad_5_4, .btn_funcionalidad_5_5, .btn_funcionalidad_5_6").addClass('bg-color-activi-o');

    if (num == 1) {
        $(".info_funcionalidad_5_1").removeClass('d-none');
        $(".btn_funcionalidad_5_1").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_1").addClass('bg-verde-2');
    }else if (num == 2) {
        $(".info_funcionalidad_5_2").removeClass('d-none');
        $(".btn_funcionalidad_5_2").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_2").addClass('bg-verde-2');
    }else if (num == 3) {
        $(".info_funcionalidad_5_3").removeClass('d-none');
        $(".btn_funcionalidad_5_3").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_3").addClass('bg-verde-2');
    }else if (num == 4) {
        $(".info_funcionalidad_5_4").removeClass('d-none');
        $(".btn_funcionalidad_5_4").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_4").addClass('bg-verde-2');
    }else if (num == 5) {
        $(".info_funcionalidad_5_5").removeClass('d-none');
        $(".btn_funcionalidad_5_5").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_5").addClass('bg-verde-2');
    }else if (num == 6) {
        $(".info_funcionalidad_5_6").removeClass('d-none');
        $(".btn_funcionalidad_5_6").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_6").addClass('bg-verde-2');
    }
}

function funcionalidad_6(num) {
    $(".funcionalidad_6_1, .funcionalidad_6_2").removeClass('bg-verde-2');
    $(".funcionalidad_6_1, .funcionalidad_6_2").addClass('bg-color-activi-c');
    $(".info_funcionalidad_6_1, .info_funcionalidad_6_2").addClass('d-none');
    $(".p_funcionalidad_6").removeClass('bg-verde-2');
    if (num == 1) {
        $(".funcionalidad_6_1").removeClass('bg-color-activi-c');
        $(".funcionalidad_6_1").addClass('bg-verde-2');
        $(".info_funcionalidad_6_1").removeClass('d-none');
    }else if (num == 2) {
        $(".funcionalidad_6_2").removeClass('bg-color-activi-c');
        $(".funcionalidad_6_2").addClass('bg-verde-2');
        $(".info_funcionalidad_6_2").removeClass('d-none');
        $(".p_funcionalidad_6").addClass('bg-verde-2');
    }
}

function enter_hover_1(num) {
    $(".text_hover_1_1, .text_hover_1_2").removeClass('img-100');
    $(".content_hover_1_1, .content_hover_1_2").removeClass('img-100');
    $(".text_hover_1_1, .text_hover_1_2").addClass('img-50');
    $(".content_hover_1_1, .content_hover_1_2").addClass('img-25');
    $(".info_hover_1_1, .info_hover_1_2").removeClass('d-flex');
    $(".info_hover_1_1, .info_hover_1_2").addClass('d-none');
    $(".ocultar_hover_1_1, .ocultar_hover_1_2").removeClass('d-none');
    $(".ocultar_hover_1_1, .ocultar_hover_1_2").addClass('d-flex');
    if (num == 1) {
        $(".info_hover_1_1").removeClass('d-none');
        $(".info_hover_1_1").addClass('d-flex');
        $(".text_hover_1_1").removeClass('img-50');
        $(".text_hover_1_1").addClass('img-100');
        $(".content_hover_1_1").removeClass('img-25');
        $(".content_hover_1_1").addClass('img-100');
        $(".ocultar_hover_1_1").removeClass('d-flex');
        $(".ocultar_hover_1_1").addClass('d-none');
    }else if (num == 2) {
        $(".info_hover_1_2").removeClass('d-none');
        $(".info_hover_1_2").addClass('d-flex');
        $(".text_hover_1_2").removeClass('img-50');
        $(".text_hover_1_2").addClass('img-100');
        $(".content_hover_1_2").removeClass('img-25');
        $(".content_hover_1_2").addClass('img-100');
        $(".ocultar_hover_1_2").removeClass('d-flex');
        $(".ocultar_hover_1_2").addClass('d-none');
    }
}
function funcionalidad_7(num) {
    $(".funcionalidad_7_1, .funcionalidad_7_2").removeClass('bg-verde-2');
    $(".funcionalidad_7_1, .funcionalidad_7_2").addClass('bg-color-activi-c');
    $(".info_funcionalidad_7_1, .info_funcionalidad_7_2").addClass('d-none');
    if (num == 1) {
        $(".funcionalidad_7_1").removeClass('bg-color-activi-c');
        $(".funcionalidad_7_1").addClass('bg-verde-2');
        $(".info_funcionalidad_7_1").removeClass('d-none');
    }else if (num == 2) {
        $(".funcionalidad_7_2").removeClass('bg-color-activi-c');
        $(".funcionalidad_7_2").addClass('bg-verde-2');
        $(".info_funcionalidad_7_2").removeClass('d-none');
    }
}
function funcionalidad_8(num) {
    $(".funcionalidad_8_1, .funcionalidad_8_2").removeClass('bg-verde-2');
    $(".funcionalidad_8_1, .funcionalidad_8_2").addClass('bg-color-activi-c');
    $(".info_funcionalidad_8_1, .info_funcionalidad_8_2").addClass('d-none');
    if (num == 1) {
        $(".funcionalidad_8_1").removeClass('bg-color-activi-c');
        $(".funcionalidad_8_1").addClass('bg-verde-2');
        $(".info_funcionalidad_8_1").removeClass('d-none');
    }else if (num == 2) {
        $(".funcionalidad_8_2").removeClass('bg-color-activi-c');
        $(".funcionalidad_8_2").addClass('bg-verde-2');
        $(".info_funcionalidad_8_2").removeClass('d-none');
    }
}

function cardPara4(num) {
    $("#card4-1, #card4-2, #card4-3, #card4-4").removeClass('bg-blanco');
    $("#card4-1").addClass('bg-color-activi-o');
    $("#card4-2").addClass('bg-azul-1');
    $("#card4-3").addClass('bg-verde-2');
    $("#card4-4").addClass('bg-verde-1');
    $("#card4-1").html(`
                            <div class="d-flex p-3">
                              <div class="img-65">
                                <p class="p_white justificado"><b>Bisectrices interiores:</b></p>
                                <br>
                                <p class="p_white justificado">Son las que corresponden a los ángulos interiores.</p>
                              </div>
                              <div class="img-35">
                                <img src="assets/img/img_ova/triangulo (3).png" class="img-100 p-3">
                              </div>
                            </div>
                        
                        `);
    $("#card4-2").html(`
                            <div class="d-flex p-3">
                              <div class="img-35">
                                <img src="assets/img/img_ova/triangulo (2).png" class="img-100 p-3">
                              </div>
                              <div class="img-65">
                                <p class="p_white justificado"><b>Mediatrices</b></p>
                                <br>
                                <p class="p_white justificado">Las perpendiculares a cada lado en su punto medio.</p>
                              </div>
                            </div>
                        `);
    $("#card4-3").html(`
                            <div class="d-flex p-3">
                              <div class="img-65">
                                <p class="p_white justificado"><b>Medianas:</b></p>
                                <br>
                                <p class="p_white justificado">Unen el punto medio de cada lado con el vértice opuesto.</p>
                              </div>
                              <div class="img-35">
                                <img src="assets/img/img_ova/triangulo (1).png" class="img-100 p-3">
                              </div>
                            </div>
                        
                        `);
    $("#card4-4").html(`
                            <div class="d-flex p-3">
                              <div class="img-35">
                                <img src="assets/img/img_ova/triangular.png" class="img-100 p-3">
                              </div>
                              <div class="img-65">
                                <p class="p_white justificado"><b>Alturas:</b></p>
                                <br>
                                <p class="p_white justificado">Perpendicular a cada lado (o a su prolongación) desde el vértice opuesto.</p>
                              </div>
                            </div>
                        `);
    if (num == 1) {
        var texto = `
                    <div class="d-flex p-3">
                      <img src="assets/img/img_ova/triangulo_8.png" class="img-50 m-auto">
                    </div>
                    `;
        $("#card4-1").removeClass('bg-color-activi-o');
        $("#card4-1").addClass('bg-blanco');
        $("#card4-1").html(texto);
    }if (num == 2) {
        var texto = `
                    <div class="d-flex p-3">
                      <img src="assets/img/img_ova/triangulo_9.png" class="img-50 m-auto">
                    </div>
                    `;
        $("#card4-2").removeClass('bg-azul-1');
        $("#card4-2").addClass('bg-blanco');
        $("#card4-2").html(texto);
    }if (num == 3) {
        var texto = `
                    <div class="d-flex p-3">
                      <img src="assets/img/img_ova/triangulo_10.png" class="img-50 m-auto">
                    </div>
                    `;
        $("#card4-3").removeClass('bg-verde-2');
        $("#card4-3").addClass('bg-blanco');
        $("#card4-3").html(texto);
    }if (num == 4) {
        var texto = `
                    <div class="d-flex p-3">
                      <img src="assets/img/img_ova/triangulo_11.png" class="img-50 m-auto">
                    </div>
                    `;
        $("#card4-4").removeClass('bg-verde-1');
        $("#card4-4").addClass('bg-blanco');
        $("#card4-4").html(texto);
    }
}