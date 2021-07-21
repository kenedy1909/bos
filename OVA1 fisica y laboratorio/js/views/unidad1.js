$( document ).ready(function() {
    // console.log(tema);
    $('.carousel').carousel('pause');
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
    slide_predeterminado();
    /*setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");*/

    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";/*
    $(".modal_scroll2").on('click', modal_scroll2);
    $(".modal_scroll3").on('click', modal_scroll3);
    $(".modal_scroll4").on('click', modal_scroll4);*/
    /*$(".unidad1-1").on('click', slide_link);
    $(".unidad1-5").on('click', slide_link);
    $(".unidad1-6_paso1").on('mouseover', unidad1_pantalla6_accion1);
    $(".unidad1-6_paso3").on('mouseover', unidad1_pantalla6_accion3);
    $(".unidad1-6_paso1").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso2").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso3").on('mouseleave', unidad1_pantalla6_accion4);*/

    /*scroll();*/
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
    $('#smartwizard').smartWizard("goToStep", 1);
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
            setMigaja("Unidades de aprendizaje","1. La importancia de la formación humanística");
            // dragging = "";
            // diff = "";
            // newTop = "";
            // scrollOffset = "";
            // knob = document.querySelector('.custom-scrollbar__knob8');
            // bar = document.querySelector('.custom-scrollbar__bar8');
            // container = document.querySelector('.custom-scrollbar__inner8');
            // scroll();
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");       
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
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
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");
            break;
        case 5:
            
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Método de demostración por Inducción matemática");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");
            break;
        case 9:
            
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Método de demostración por Inducción matemática");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Método de demostración por Inducción matemática");
            // $("#content-ova").load("base/unidades/unidad2.html");
            // tema = 1;
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];  
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
            break;
        default:
            break;
    }
}

function modal_scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
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


function Input() {
  //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
  this.att = {};
  this.att.type = "range";
  this.att.value = 0;
  this.att.min = 0;
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
    scroll_horizontal(this.input.value);
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

/*function scroll_horizontal(num){
    $('.scroll-img').removeClass('bg-piel');
    $('.scroll-img').addClass('bg-amarillo');
    $('.scroll-flecha').removeClass('d-block');
    $('.scroll-flecha').addClass('d-none');
    switch (parseInt(num)) {
        case 0:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/francisco_fernando_austria.jpg">`;
            $('#scroll-img').html(pantalla);
            $('#scroll-text').html('<b>Es asesinado por los Serbios, el Archiduque Francisco Fernando, quien para ese momento era el heredero al trono de Austria Hungría.</b>');
            $('.scroll-img-0').removeClass('bg-amarillo');
            $('.scroll-img-0').addClass('bg-piel');
            $('.scroll-flecha-0').removeClass('d-none');
            $('.scroll-flecha-0').addClass('d-block');
            break;
        case 1:
            var pantalla = `<img class="img-60 m-auto" src="assets/img/img_ova/tratado_londres.jpg">`;
            $('#scroll-img').html(pantalla);
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

function cajas(num){
  switch (parseInt(num)) {
      case 1:
          var text = ``;
          $('.avance_blanco').removeClass('activa');            
          $('.nav1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na1').removeClass('inactivo');           
          $('.na1').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      case 2:
          var text = ``;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2').removeClass('inactivo');           
          $('.na2').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      case 3:
          var text = ``;
          $('.avance_blanco').removeClass('activa');            
          $('.nav3').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na3').removeClass('inactivo');           
          $('.na3').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      case 4:
          var text = ``;
          $('.avance_blanco').removeClass('activa');            
          $('.nav4').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na4').removeClass('inactivo');           
          $('.na4').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      
      default:
          break;
  }
}*/

function funcionalidad_1(num) {
    $(".dimensional").removeClass('bg-azul-mc');
    $(".dimensional").addClass('bg-azul');
    $(".dimensional-"+num).removeClass('bg-azul');
    $(".dimensional-"+num).addClass('bg-azul-mc');
    switch(parseInt(num)){
        case 1:
            $("#dimensional").html(`
                                    <div class="pt-3 px-5 pb-5" style="background-image: url('assets/img/img_ova/sala-de-laboratorio.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
                                      <div class="bg-azul-mc radius-2 p-3">
                                        <p class="p_black justificado">Las unidades fundamentales o básicas son aquellas que se convienen cómo independientes desde el punto de vista dimensional (por ejemplo, metro, kilo, segundo). (Estela, 2021)</p>
                                      </div>
                                    </div>
                                    `);
            break;
        case 2:

            $("#dimensional").html(`
                                    <div class="p-3" style="background-image: url('assets/img/img_ova/dibujando.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
                                      <div class="bg-a-c radius-2 p-3">
                                        <div id="dimensional_info">
                                            <p class="p_black justificado">Las unidades derivadas son aquellas unidades que pueden formarse combinando las unidades básicas según</p>
                                        </div>
                                        <div class="img-100 mt-4 d-flex">
                                          <div class="justify-content-evenly img-50 d-flex m-auto">
                                            <div class="radius-50 bg-amarillo cursor dimensional_opcion dimensional_opcion-1" onclick="dimensional_opcion(1)" style="width: 15px; height: 15px;"></div>
                                            <div class="radius-50 bg-cafe-c cursor dimensional_opcion dimensional_opcion-2" onclick="dimensional_opcion(2)" style="width: 15px; height: 15px;"></div>
                                            <div class="radius-50 bg-cafe-c cursor dimensional_opcion dimensional_opcion-3" onclick="dimensional_opcion(3)" style="width: 15px; height: 15px;"></div>
                                            <div class="radius-50 bg-cafe-c cursor dimensional_opcion dimensional_opcion-4" onclick="dimensional_opcion(4)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    `);
            break;
        default:
            break;
    }
}

function dimensional_opcion(num) {
    $(".dimensional_opcion").removeClass('bg-amarillo');
    $(".dimensional_opcion").addClass('bg-cafe-c');
    $(".dimensional_opcion-"+num).removeClass('bg-cafe-c');
    $(".dimensional_opcion-"+num).addClass('bg-amarillo');
    switch(parseInt(num)){
        case 1:
            $("#dimensional_info").html(`<p class="p_black justificado">Las unidades derivadas son aquellas unidades que pueden formarse combinando las unidades básicas según</p>`);
            break;
        case 2:
            $("#dimensional_info").html(`<p class="p_black justificado">Como se menciona anteriormente, existen magnitudes fundamentales las cuales se establecieron por medio de un estándar (Sistema Internacional) de los cuales surgieron diferentes sistemas a nivel mundial.</p>`);
            break;
        case 3:
            $("#dimensional_info").html(`<p class="p_black justificado">En total hay unidades fundamentales: el kilogramo, el segundo, el metro y los grados Kelvin, que corresponden a la masa, el tiempo, la longitud y la temperatura respectivamente y que no depende de ninguna otra y la Mol, la Candela y el Ampere para la cantidad de sustancia, la intensidad luminosa y la cantidad de corriente eléctrica; las cuales dependen de las anteriores.</p>`);
            break;
        case 4:
            $("#dimensional_info").html(`<p class="p_black justificado"><b>Por ejemplo</b>, un Ampere o Amperio equivale a la intensidad de una corriente constante que, manteniéndose en dos conductores paralelos, rectilíneos, de longitud infinita, de sección circular despreciable y situados a una distancia de un metro uno de otro en el vacío, produciría una fuerza igual a 2×10–7 Newton por metro de longitud</p>`);
            break;
        default:
            break;
    }
}

function svg_img(num) {
            $("#svg-info").addClass('d-none');
    switch(parseInt(num)){
        case 1:
            $("#svg-info").html(`
                                <div class="radius-2 img-100 border-verde-o bg-verde-c opacity-7">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-verde">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="custom-scrollbar_uno pr-3">
                                      <div class="custom-scrollbar__inner_uno">
                                        <p class="p_black justificado"><b><i>Longitud.</i></b></p>
                                        <br>
                                        <p class="p_black justificado">Su unidad es el metro (m). En 1960, la longitud del metro se definió como la distancia entre dos líneas en una específica barra de platino–iridio que se almacena bajo condiciones controladas en Francia.</p>
                                        <br>
                                        <p class="p_black justificado">Sin embargo, los requerimientos actuales de la ciencia y la tecnología necesitaban más precisión que la dada por la separación entre las líneas en la barra. En las décadas de los sesenta y setenta del milenio pasado, el metro se definió como 1.650.763,73 longitudes de onda de la luz naranja–rojo, emitida de una lámpara de criptón 86.</p>
                                        <br>
                                        <p class="p_black justificado">No obstante, en octubre de 1983, el metro se redefinió como la distancia recorrida por la luz en el vacío durante un tiempo de 1/299.792.458 segundos. En efecto, esta última definición establece que la rapidez de la luz en el vacío es precisamente 299.792.458 metros por segundo. Esta definición del metro es válida a través del Universo respecto a la suposición de que la luz es la misma en todas partes. (J., 2008)</p>
                                      </div>
                                      <div class="custom-scrollbar__bar_uno">
                                        <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "left: 0px; bottom: 0px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        case 2:
            $("#svg-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c opacity-7">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-azul">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="custom-scrollbar_uno pr-3">
                                      <div class="custom-scrollbar__inner_uno">
                                        <p class="p_black justificado"><b>Masa.</b> Su unidad es el kilogramo (kg)</p>
                                        <br>
                                        <p class="p_black justificado">La unidad fundamental del SI de masa, el kilogramo (kg), estaba definido como la masa de un cilindro de aleación platino–iridio específico que se conserva en la Oficina Internacional de Pesos y Medidas en Sèvres, Francia. (J., 2008) Esta masa estándar fue establecida en 1887 y no había cambiado hasta el 20 de mayo de 2019 cuando su definición pasó a estar ligada con la constante de Planck, una constante natural que describe los paquetes de energía emitidos en forma de radiación</p>
                                        <br>
                                        <p class="p_black justificado">Esto permite que un laboratorio de metrología debidamente equipado calibre un instrumento de medición de masa como una balanza de potencia. El kilogramo se define al fijar el valor numérico de la constante de Planck, un kilogramo seria h / 6,62607015 x 10-34 expresado en J·s (Julios por segundo), por·m²·s-1, donde el metro y el segundo se definen en función de c (velocidad de la luz en el vacío).</p>
                                        <br>
                                      </div>
                                      <div class="custom-scrollbar__bar_uno">
                                        <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "right: 40px; bottom: 0px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        case 3:
            $("#svg-info").html(`
                                <div class="radius-2 img-100 border-verde-mo bg-verde-mc opacity-7">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-verde-o">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="custom-scrollbar_uno pr-3">
                                      <div class="custom-scrollbar__inner_uno">
                                        <p class="p_black justificado"><b><i>Tiempo.</i></b> Su unidad es el segundo (s)</p>
                                        <br>
                                        <p class="p_black justificado">Antes de 1960 el estándar de tiempo fue definido en términos del día solar medio hacia el año 1900. (Un día solar es el intervalo de tiempo entre apariciones sucesivas del Sol en el punto más alto que alcanza en el cielo cada día.) La unidad fundamental de un segundo(s) fue definida como (1/60) (1/60) (1/24) de un día solar medio. Ahora se sabe que la rotación de la Tierra varía ligeramente con el tiempo.</p>
                                      </div>
                                      <div class="custom-scrollbar__bar_uno">
                                        <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "left: 0px; bottom: 0px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        default:
            break;
    }
}

function cerrar_svg() {
    $('#svg-info').addClass('d-none');
}

function pant9(num){
    switch (parseInt(num)) {
        case 1:
            var texto = `<p class="justificado" style="font-size: 14px;">Se observa la tabla anterior, note por favor que en la fila del SI se han empleado las unidades de este sistema, ahora se establece que para referirse en general a cualquier unidad de longitud se usa L y para el tiempo T. Ahora se puede volver a la primera fila y se verá como las columnas son consistentes en la información que ofrecen. En el área, por ejemplo, se obtiene al multiplicar una longitud por otra de ahí que su dimensión sea L2 y que eso en el sistema SI corresponda a m2 y en el norteamericano a ft2.</p>`;
            $('.bannerp-9').html(texto);

            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo1').removeClass('inactivo');
            $('.circulo1').addClass('activo');
            break;
        case 2:
            var texto = `<p class="justificado" style="font-size: 14px;">Este enfoque va a permitir comprobar si una formula en particular es dimensionalmente correcta o no. Ahora, se observa cómo se puede proceder, por ejemplo, se sabe que el trabajo realizado por una fuerza constante se mide J (1 Joule equivale a 1 kg m2/s2) y que el valor de este trabajo se puede calcular con la formula W = F d cos(a), la fuerza F se mide en N (Newtons y equivale a 1 kg m /s2) y la distancia d se mide en metros (m) y cos(a) no tiene unidades, por tanto, si se multiplica kg m /s2 por m se obtiene kg m2/s2 por lo que se concluye que la fórmula es dimensionalmente correcta.</p>`;
            $('.bannerp-9').html(texto);
            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo2').removeClass('inactivo');
            $('.circulo2').addClass('activo');
            break;
        case 3:
            var texto = `<p class="justificado" style="font-size: 14px;">Otro ejemplo, se sabe que la energía cinética también se mide en J y se calcula como 0,5 mv2, entonces 0,5 no tiene unidades porque es una constante y queda kg (m/s)2 finalmente kg m2/s2 que son las unidades equivalentes del J por tanto también es dimensionalmente correcta. Pero si dicen que la velocidad v = d t las unidades resultantes usan SI serian ms cuando se sabe que debería ser m/s por tanto no es dimensionalmente correcta y no se podría usar para calcular la velocidad.</p>`;
            $('.bannerp-9').html(texto);
            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo3').removeClass('inactivo');
            $('.circulo3').addClass('activo');
            break;
        default:
            
            break;
    }
}

function equivalencias(num) {
    switch(parseInt(num)){
        case 1:
            $("#equivalencia-1").removeClass('col-md-6');
            $("#equivalencia-1").addClass('col-md-1');
            $(".equivalencia-1").addClass('d-none');
            $(".equivalencia-1").removeClass('d-flex');
            $(".equivalencia-content-1").removeClass('px-5');
            $(".img-equivalencia-flecha-1").removeClass('d-flex');
            $(".img-equivalencia-flecha-1").addClass('d-none');
            $(".img-equivalencia-1").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-2").removeClass('col-md-1');
            $("#equivalencia-2").addClass('col-md-6');
            $("#equivalencia-2").removeClass('d-none');
            $(".equivalencia-2").removeClass('d-none');
            $(".img-equivalencia-2").removeClass('d-none');
            $("#equivalencia-3, #equivalencia-4, #equivalencia-5").addClass('d-none');
            $(".equivalencia-3, .equivalencia-4, .equivalencia-5").addClass('d-none');
            $(".img-equivalencia-1, .img-equivalencia-3, .img-equivalencia-4, .img-equivalencia-5").addClass('d-none');
            break;
        case 2:
            $("#equivalencia-2").removeClass('col-md-6');
            $("#equivalencia-2").addClass('col-md-1');
            $(".equivalencia-2").addClass('d-none');
            $(".equivalencia-2").removeClass('d-flex');
            $(".equivalencia-content-2").removeClass('px-5');
            $(".img-equivalencia-flecha-2").removeClass('d-flex');
            $(".img-equivalencia-flecha-2").addClass('d-none');
            $(".img-equivalencia-2").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-3").removeClass('col-md-1');
            $("#equivalencia-3").addClass('col-md-6');
            $("#equivalencia-3").removeClass('d-none');
            $(".equivalencia-3").removeClass('d-none');
            $(".img-equivalencia-3").removeClass('d-none');
            $("#equivalencia-4, #equivalencia-5").addClass('d-none');
            $(".equivalencia-4, .equivalencia-5").addClass('d-none');
            $(".img-equivalencia-1").attr('style', 'top: 75px;');
            $(".img-equivalencia-1").removeClass('d-flex');
            $(".img-equivalencia-1").addClass('d-none');
            break;
        case 3:
            $("#equivalencia-3").removeClass('col-md-6');
            $("#equivalencia-3").addClass('col-md-1');
            $(".equivalencia-3").addClass('d-none');
            $(".equivalencia-3").removeClass('d-flex');
            $(".equivalencia-content-3").removeClass('px-5');
            $(".img-equivalencia-flecha-3").removeClass('d-flex');
            $(".img-equivalencia-flecha-3").addClass('d-none');
            $(".img-equivalencia-3").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-4").removeClass('col-md-1');
            $("#equivalencia-4").addClass('col-md-6');
            $("#equivalencia-4").removeClass('d-none');
            $(".equivalencia-4").removeClass('d-none');
            $(".img-equivalencia-4").removeClass('d-none');
            $("#equivalencia-5").addClass('d-none');
            $(".equivalencia-5").addClass('d-none');
            $(".img-equivalencia-2").attr('style', 'top: 75px;');
            $(".img-equivalencia-2").removeClass('d-flex');
            $(".img-equivalencia-2").addClass('d-none');
            break;
        case 4:
            $("#equivalencia-4").removeClass('col-md-6');
            $("#equivalencia-4").addClass('col-md-1');
            $(".equivalencia-4").addClass('d-none');
            $(".equivalencia-4").removeClass('d-flex');
            $(".equivalencia-content-4").removeClass('px-5');
            $(".img-equivalencia-flecha-4").removeClass('d-flex');
            $(".img-equivalencia-flecha-4").addClass('d-none');
            $(".img-equivalencia-4").attr('style', 'z-index: 1;left: 25px;');
            $("#equivalencia-5").removeClass('col-md-1');
            $("#equivalencia-5").addClass('col-md-6');
            $("#equivalencia-5").removeClass('d-none');
            $(".equivalencia-5").removeClass('d-none');
            $(".img-equivalencia-5").removeClass('d-none');
            $(".img-equivalencia-3").attr('style', 'top: 75px;');
            $(".img-equivalencia-3").removeClass('d-flex');
            $(".img-equivalencia-3").addClass('d-none');
            break;
        default:
            break;
    }
}

function aviones(num) {
    $("#avion").removeClass('fondo-1');
    $("#avion").removeClass('fondo-2');
    $("#avion").removeClass('fondo-3');
    $("#avion").removeClass('fondo-4');
    $("#avion").removeClass('fondo-5');
    $("#avion").removeClass('fondo-6');
    $("#avion").addClass('fondo-1');
    switch(parseInt(num)){
        case 1:
            $("#avion").removeClass('fondo-1');
            $("#avion").addClass('fondo-2');
            $("#avion").attr('onclick','aviones(2)');
            $(".avion-content").html(`<p class="p_black justificado">Algunas cantidades físicas, como el tiempo, la temperatura, la masa y la densidad se pueden describir completamente con un solo número y una unidad. No obstante, en física muchas otras cantidades importantes están asociadas con una dirección y no pueden describirse con un solo número.</p>`);
            break;
        case 2:
            $("#avion").removeClass('fondo-1');
            $("#avion").addClass('fondo-3');
            $("#avion").attr('onclick','aviones(3)');
            $(".avion-content").html(`<p class="p_black justificado"><span class="p_white radius-2 bg-otro-azul-o"></b>Un ejemplo</b></span> sencillo es el desplazamiento de un avión: se debe indicar no solo qué tan rápidamente se desplaza, sino también en qué dirección. La rapidez del avión combinada con su dirección constituye una cantidad llamada velocidad.</p>`);
            break;
        case 3:
            $("#avion").removeClass('fondo-1');
            $("#avion").addClass('fondo-4');
            $("#avion").attr('onclick','aviones(4)');
            $(".avion-content").html(`<p class="p_black justificado"><span class="p_white radius-2 bg-otro-azul-o"></b>Otro ejemplo</b></span>, es la fuerza, que en física es un empuje o un tirón aplicado a un cuerpo. Para describir plenamente una fuerza hay que indicar no solo su intensidad, sino también en qué dirección tira o empuja sobre un cuerpo.</p>`);
            break;
        case 4:
            $("#avion").removeClass('fondo-1');
            $("#avion").addClass('fondo-5');
            $("#avion").attr('onclick','aviones(5)');
            $(".avion-content").html(`
                                        <p class="p_black justificado">Cuando una cantidad física se describe con un solo número, se dice que es una cantidad <span class="p_white radius-2 bg-otro-azul-o"></b>escalar.</b></span> En cambio, una cantidad <span class="p_white radius-2 bg-otro-azul-o"></b>vectorial</b></span> incluye tanto una magnitud (la cual indica “qué tanto” o “qué tan grande”) como una dirección en el espacio. </p>
                                        <br>
                                        <p class="p_black justificado">Los cálculos que combinan cantidades escalares usan las operaciones aritméticas ordinarias. Por ejemplo, 6 kg + 3 kg = 9 kg, o 4 * 2 s = 8 s. No obstante, la combinación de vectores requiere un conjunto diferente de operaciones.</p>
                                    `);
            break;
        case 5:
            $("#avion").removeClass('fondo-1');
            $("#avion").addClass('fondo-6');
            $("#avion").attr('onclick','aviones(6)');
            $(".avion-content").html(`
                                        <div class="d-flex">
                                          <img src="assets/img/img_ova/profesor (3).png" class="img-80 m-auto">
                                        </div>
                                        <p class="p_black justificado">Para entender mejor los vectores y su combinación, se comienza con la cantidad vectorial más sencilla, el desplazamiento, que simplemente es un cambio en la posición de un objeto. El desplazamiento es una cantidad vectorial porque se debe establecer no solo qué tan lejos se mueve el objeto, sino también en qué dirección.</p>
                                        <br>
                                        <p class="p_black justificado">Caminar 3 km al norte desde una casa no lleva al mismo sitio que caminar 3 km al sureste; ambos desplazamientos tienen la misma magnitud, pero diferente dirección.</p>
                                    `);
            break;
        case 6:
            $("#avion").removeClass('fondo-1');
            $("#avion").addClass('fondo-1');
            $("#avion").attr('onclick','aviones(1)');
            $(".avion-content").html(`
                                    <div class="d-flex">
                                      <img src="assets/img/img_ova/profesor (2).png" class="img-80 m-auto">
                                    </div>
                                    <p class="border-top-azul text-azul-c text-center my-3"><b>Cantidad escalares y vectoriales </b></p>
                                    `);
            break;
        default:
            break;
    }
}

function actividadrecogible(num) {
    switch (parseInt(num)) {
        case 1:
            $('.bg-recogible').css({'width': '12%'});
            $('.img_recogible1').css({'max-width': '125%'})
            break;
        default:
            
            break;
    }
}