$( document ).ready(function() {

    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');

    star_uni = 1;
    paso = false;
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

figura = document.getElementById("ctrflecha");

document.addEventListener("keydown",
    function(event) {
        switch (event.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                slide();
                actualizarprogress();
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                slide();
                actualizarprogress();
                break;
        }
    }
);

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
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
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");  
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
        case 3:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            break;
        case 5:
            
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Primera Guerra Mundial");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
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
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Historia del Derecho Penal Internacional","Tribunales de Yugoslavia y Ruanda");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            $(".i3").html('')    
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
            }  
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
            $('#img-scroll2').html(img_scroll);
            $('#info-scroll2').html(info_scroll);
            $('#activi-scroll2').html(activi_scroll);
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
            $('#img-scroll2').html(img_scroll);
            $('#info-scroll2').html(info_scroll);
            $('#activi-scroll2').html(activi_scroll);
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
            $('#img-scroll2').html(img_scroll);
            $('#info-scroll2').html(info_scroll);
            $('#activi-scroll2').html(activi_scroll);
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
            $('#img-scroll2').html(img_scroll);
            $('#info-scroll2').html(info_scroll);
            $('#activi-scroll2').html(activi_scroll);
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
            $('#img-scroll2').html(img_scroll);
            $('#info-scroll2').html(info_scroll);
            $('#activi-scroll2').html(activi_scroll);
            break;
        default:
            break;
    }
}

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
                    <div class="p-3 radius-4 border-cafe-activi custom-scrollbar1 shadow">
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
                    <div class="p-3 radius-4 border-cafe-activi custom-scrollbar2 shadow">
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
                    <div class="p-3 radius-4 border-cafe-activi shadow">
                      <div>
                        <p class="justificado p_black">Uno de los elementos que debe destacarse es que el estatuto no solamente establece la competencia del tribunal para juzgar crímenes de guerra, que son graves infracciones al Derecho Internacional Humanitario, sino que incluye la categoría de crímenes de <span class="text-cafe-activi"><b>lesa humanidad y el genocidio</b></span>, como parte de los crímenes internacionales competencia del tribunal.</p>
                      </div>
                    </div>
                    `;
        $("#tribunal").html(texto);
    }else if (num == 4) {
        var texto = `
                    <div class="p-3 radius-4 border-cafe-activi custom-scrollbar3 shadow">
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