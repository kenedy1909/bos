$( document ).ready(function() {
    // console.log(tema);
    $( ".zoomContainer" ).remove();
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

    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});

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
    var scrollOffset = "";
    $(".teoria").on('click' , teorias);
    /*
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
var sumaslide = 0;
var sumaslide1 = 0;
function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            sumaslide++;
            if (sumaslide < 2) {
                var slideCount = $('#slider2 ul li').length;
                var slideWidth = $('#slider2 ul li').width();
                var slideHeight = $('#slider2 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider2').css({ width: '100%', height: '250px' });
                
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
            }
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");   
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Magnitudes físicas y análisis dimensional");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 14:
            sumaslide1++;
            if (sumaslide1 < 2) {
                var slideCount = $('#slider3 ul li').length;
                var slideWidth = $('#slider3 ul li').width();
                var slideHeight = $('#slider3 ul li').height();
                var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider3').css({ width: '100%', height: '200px' });
                
                $('#slider3 ul').css({ width: '90%'});
                
                $('#slider3 ul li:last-child').prependTo('#slider3 ul');

                function moveLeft3() {
                    $('#slider3 ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider3 ul li:last-child').prependTo('#slider3 ul');
                        $('#slider3 ul').css('left', '');
                    });
                };

                function moveRight3() {
                    $('#slider3 ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider3 ul li:first-child').appendTo('#slider3 ul');
                        $('#slider3 ul').css('left', '');
                    });
                };

                $('a.control_prev3').click(function (e) {
                    moveLeft3();
                    e.preventDefault();
                });

                $('a.control_next3').click(function (e) {
                    moveRight3();
                    e.preventDefault();
                });
            }
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Conceptos fundamentales","Análisis vectorial");
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

function infoactivi(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('.info1').css({'visibility': 'visible'});
            
            break;
        case 2:
            $('.info2').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}

function ejemplos(num) {
    switch (parseInt(num)) {
        case 1:
            $('.ejemplos').addClass('invisible');
            $('.ejemplos').removeClass('visible');

            $('.ejemplo1').removeClass('invisible');
            $('.ejemplo1').addClass('visible');
            break;
        case 2:
            $('.ejemplos').addClass('invisible');
            $('.ejemplos').removeClass('visible');

            $('.ejemplo2').removeClass('invisible');
            $('.ejemplo2').addClass('visible');
            break2
        default:
            break;
    }
}

function targetas(num){
    switch (parseInt(num)) {
        case 1:
            $('.deplegar').addClass('recogido');
            $('.deplegar').removeClass('desplegado');

            $('.header1').removeClass('recogido');
            $('.header1').addClass('desplegado');

            $('.texto_targeta').addClass('invisible');
            $('.texto_targeta').removeClass('visible');

            $('.text_T1').removeClass('invisible');
            $('.text_T1').addClass('visible');

            $('.formula').addClass('invisible');
            $('.formula').removeClass('visible');

            $('.formula2').removeClass('invisible');
            $('.formula2').addClass('visible');

            $('.expresion2').removeClass('visible');
            $('.expresion2').addClass('invisible');
            break;
        case 2:
            $('.deplegar').addClass('recogido');
            $('.deplegar').removeClass('desplegado');

            $('.header2').removeClass('recogido');
            $('.header2').addClass('desplegado');

            $('.texto_targeta').addClass('invisible');
            $('.texto_targeta').removeClass('visible');

            $('.text_T2').removeClass('invisible');
            $('.text_T2').addClass('visible');

            $('.formula').addClass('invisible');
            $('.formula').removeClass('visible');

            $('.formula1').removeClass('invisible');
            $('.formula1').addClass('visible');

            $('.expresion1').removeClass('visible');
            $('.expresion1').addClass('invisible');
            break;
        case 3:
            $('.deplegar').addClass('recogido');
            $('.deplegar').removeClass('desplegado');

            $('.formula').addClass('invisible');
            $('.formula').removeClass('visible');

            $('.expresion').removeClass('invisible');
            $('.expresion').addClass('visible');

            $('.texto_targeta').addClass('invisible');
            $('.texto_targeta').removeClass('visible');
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



function funcionalidad_1(num) {
    $(".dimensional").removeClass('bg-azul-mc');
    $(".dimensional").addClass('bg-azul');
    $(".dimensional-"+num).removeClass('bg-azul');
    $(".dimensional-"+num).addClass('bg-azul-mc');
    switch(parseInt(num)){
        case 1:
            $("#dimensional").html(`
                                    <div class="p-3 d-flex">
                                      <img src="assets/img/img_ova/laboratoriotexto.png" class="img-100 m-auto zoom_img" data-zoom-image="assets/img/img_ova/laboratoriotexto.png">
                                    </div>
                                    `);
            $( ".zoomContainer" ).remove();
            $('.zoom_img').elevateZoom({zoomWindowPosition: 10});
            break;
        case 2:

            $("#dimensional").html(`
                                    <div class="p-3" style="background-image: url('assets/img/img_ova/dibujado.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
                                      <div class="bg-a-c radius-2 p-3">
                                        <div id="dimensional_info">
                                            <p class="p_black justificado" style="font-size: 13px;">Las unidades derivadas son aquellas unidades que pueden formarse combinando las unidades básicas según relaciones algebraicas escogidas que liguen las magnitudes correspondientes, como, por ejemplo: velocidad, aceleración, fuerza, potencia, volumen. (S., 2015)</p>
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
            $("#dimensional_info").html(`<p class="p_black justificado" style="font-size: 13px;">Las unidades derivadas son aquellas unidades que pueden formarse combinando las unidades básicas según relaciones algebraicas escogidas que liguen las magnitudes correspondientes, como, por ejemplo: velocidad, aceleración, fuerza, potencia, volumen. (S., 2015)</p>`);
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
            var texto = `
            <div class="bannerp-9" style="">
              <p class="justificado" style="font-size: 14px;">Se observa la tabla anterior, note por favor que en la fila del SI se han empleado las unidades de este sistema, ahora se establece que para referirse en general a cualquier unidad de longitud se usa L y para el tiempo T. Ahora se puede volver a la primera fila y se verá como las columnas son consistentes en la información que ofrecen. En el área, por ejemplo, se obtiene al multiplicar una longitud por otra de ahí que su dimensión sea L<sup>2</sup> y que eso en el sistema SI corresponda a m<sup>2</sup> y en el norteamericano a ft<sup>2</sup>.</p>
            </div>`;
            $('.orange_cont').html(texto);

            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo1').removeClass('inactivo');
            $('.circulo1').addClass('activo');
            break;
        case 2:
            var texto = `<p class="justificado" style="font-size: 14px;">Este enfoque va a permitir comprobar si una formula en particular es dimensionalmente correcta o no. Ahora, se observa cómo se puede proceder, por ejemplo, se sabe que el trabajo realizado por una fuerza constante se mide J (1 Joule equivale a 1 kg m<sup>2</sup>/s<sup>2</sup>) y que el valor de este trabajo se puede calcular con la formula W = F d cos(a), la fuerza F se mide en N (Newtons y equivale a 1 kg m /s<sup>2</sup>) y la distancia d se mide en metros (m) y cos(a) no tiene unidades, por tanto, si se multiplica kg m /s<sup>2</sup> por m se obtiene kg m<sup>2</sup>/s<sup>2</sup> por lo que se concluye que la fórmula es dimensionalmente correcta.</p>`;
            $('.bannerp-9').html(texto);
            $('.circulop_9').removeClass('activo');
            $('.circulop_9').addClass('inactivo');

            $('.circulo2').removeClass('inactivo');
            $('.circulo2').addClass('activo');
            break;
        case 3:
            var texto = `<p class="justificado" style="font-size: 14px;">Otro ejemplo, se sabe que la energía cinética también se mide en J y se calcula como 0,5 mv<sup>2</sup>, entonces 0,5 no tiene unidades porque es una constante y queda kg (m/s)<sup>2</sup> finalmente kg m<sup>2</sup>/s<sup>2</sup> que son las unidades equivalentes del J por tanto también es dimensionalmente correcta. Pero si dicen que la velocidad v = d t las unidades resultantes usan SI serian ms cuando se sabe que debería ser m/s por tanto no es dimensionalmente correcta y no se podría usar para calcular la velocidad.</p>`;
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
        case 5:
            $("#info-equivalencia").html(`
                                        <div class="col-md-12">
                                            <p class="justificado p_black">Dado la misma evolución de las diferentes estrategias de estandarización en diversas partes del mundo hasta los sistemas de unidades modernos, existe numerosas unidades para referirse a la misma cantidad física, para medir una longitud se puede usar metros, pulgadas, yardas o años luz. </p>
                                            <br>
                                            <p class="justificado p_black">Haga clic en las flechas para avanzar en la información:</p>
                                        </div>
                                        <div class="col-md-6" id="equivalencia-1">
                                          <div class="radius-2 bg-amarillo-o py-3 px-5 h-100 equivalencia-content-1">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-1">Es por eso por lo que se hace necesario contar con tablas que contengan tales equivalencias entre los diferentes sistemas de medidas y poder realizar los cálculos en unidades homogéneas. También ocurre con mucha frecuencia que la unidad misma en un sistema dado sea inadecuada ya sea por grande o por pequeña, es ahí donde entra los múltiplos y submúltiplos de la unidad, normalmente usando potencias de 10, como se muestra en las siguientes tablas.</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-1" style="left: 25px;"><img src="assets/img/img_ova/altura.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex img-equivalencia-flecha-1" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto" onclick="equivalencias(1)"></div>
                                              </div>
                                            </div>
                                            <div class="d-flex equivalencia-1">
                                              <button class="p_white bg-azul btn ml-auto" data-toggle="modal" data-target="#equivalencia-modal">Ver tabla</button>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-2">
                                          <div class="radius-2 bg-cafe-c py-3 px-5 h-100 equivalencia-content-2">
                                            <div class="d-flex">
                                              <p class="justificado p_white equivalencia-2">En el SI, por ejemplo, el metro en la unidad de longitud, pero resulta pequeño para medir el diámetro del Sol, pues seria 1.392.680.000 m, que sería lo mismo que 1.392.680 km o mejor 1,39268 Gm. En el otro sentido de la tabla de tamaños también es aplicable, por ejemplo, si algo mide 0,0000000015 m sería mejor expresarlo como 1,5 nm (que es lo mismos que 1,5x10<sup>-9</sup> m).</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-2" style="left: 25px;"><img src="assets/img/img_ova/cientifico.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-2" onclick="equivalencias(2)"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-3">
                                          <div class="radius-2 bg-otro-azul-mc py-3 px-5 h-100 equivalencia-content-3">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-3">Como se había comentado en muchas ocasiones se debe resolver problemas en los que interviene las mismas cantidades físicas pero expresadas en diferentes sistemas de unidades y para facilitar los cálculos se requiere homogenizarlos. Para conseguir esto se puede utilizar los denominados factores de conversión. Un factor de conversión es una fracción que es igual a 1, por lo que al multiplicarlo (por eso se llama factor) por la cantidad original está en realidad no cambia físicamente solo la forma de representarla.</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-3" style="left: 25px;"><img src="assets/img/img_ova/codigo-binario.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-3" onclick="equivalencias(3)"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-4">
                                          <div class="radius-2 bg-un-azul-mas py-3 px-5 h-100 equivalencia-content-4">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-4">De la siguiente tabla se puede ver que 1 m es igual a 3,281 pies, lo que quiere decir que (1 m / 3,281 pies) = 1. Entonces si se tiene 425,78 pies y se requiere en metros se podría simplemente multiplicar este valor por el factor adecuado en este caso (1 m / 3,281 pies) así las cosas 425,78 pies x (1 m / 3,281 pies) = 129,77 m (nótese que los pies se cancelan y solo queda en el denominador m).</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-4" style="left: 25px;"><img src="assets/img/img_ova/regla-y-lapiz.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-4" onclick="equivalencias(4)"></div>
                                              </div>
                                            </div>
                                            <div class="d-flex equivalencia-4">
                                              <button class="p_white bg-azul btn ml-auto" data-toggle="modal" data-target="#equivalencia-modal-2">Ver tabla</button>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-1 d-none" id="equivalencia-5">
                                          <div class="radius-2 bg-gris-c py-3 px-5 h-100 equivalencia-content-5">
                                            <div class="d-flex">
                                              <p class="justificado p_black equivalencia-5">Con la información de esta tabla se puede encontrar con facilidad a cuantos m/s equivale una velocidad de 225 millas/hora, se muestra:</p>
                                              <div class="position-relative my-auto">
                                                <div class="position-absolute radius-50 bg-blanco p-3 w-h-90px d-flex img-equivalencia-5" style="left: 25px;"><img src="assets/img/img_ova/deberes.png" class="img-100 m-auto"></div>
                                                <div class="position-absolute w-h-50px d-flex" style="left: 125px; top: 15px;"><img src="assets/img/img_ova/flecha-derecha.png" class="img-100 m-auto img-equivalencia-flecha-5" onclick="equivalencias(5)"></div>
                                              </div>
                                            </div>
                                            <div class="d-flex equivalencia-5">
                                              <button class="p_white bg-azul btn ml-auto" data-toggle="modal" data-target="#equivalencia-modal-3">Ver tabla</button>
                                            </div>
                                          </div>
                                        </div>
                                        `);
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
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-2');
            $("#avion").attr('onclick','aviones(2)');
            $("#avion").attr('style','width: 700px; height: 475px;');
            $(".avion-content").html(`<p class="p_black justificado">Algunas cantidades físicas, como el tiempo, la temperatura, la masa y la densidad se pueden describir completamente con un solo número y una unidad. No obstante, en física muchas otras cantidades importantes están asociadas con una dirección y no pueden describirse con un solo número.</p>`);
            break;
        case 2:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-3');
            $("#avion").attr('onclick','aviones(3)');
            $("#avion").attr('style','width: 700px; height: 475px;');
            $(".avion-content").html(`<p class="p_black justificado"><span class="p_white radius-2 bg-otro-azul-o"></b>Un ejemplo</b></span> sencillo es el desplazamiento de un avión: se debe indicar no solo qué tan rápidamente se desplaza, sino también en qué dirección. La rapidez del avión combinada con su dirección constituye una cantidad llamada velocidad.</p>`);
            break;
        case 3:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-4');
            $("#avion").attr('onclick','aviones(4)');
            $("#avion").attr('style','width: 700px; height: 475px;');
            $(".avion-content").html(`<p class="p_black justificado"><span class="p_white radius-2 bg-otro-azul-o"></b>Otro ejemplo</b></span>, es la fuerza, que en física es un empuje o un tirón aplicado a un cuerpo. Para describir plenamente una fuerza hay que indicar no solo su intensidad, sino también en qué dirección tira o empuja sobre un cuerpo.</p>`);
            break;
        case 4:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('m-auto');
            $(".avion-content").addClass('mx-auto mt-auto');
            $("#avion").addClass('fondo-5');
            $("#avion").attr('onclick','aviones(5)');
            $("#avion").attr('style','width: 700px; height: 475px;');
            $(".avion-content").html(`
                                        <p class="p_black justificado">Cuando una cantidad física se describe con un solo número, se dice que es una cantidad <span class="p_white radius-2 bg-otro-azul-o"></b>escalar.</b></span> En cambio, una cantidad <span class="p_white radius-2 bg-otro-azul-o"></b>vectorial</b></span> incluye tanto una magnitud (la cual indica “qué tanto” o “qué tan grande”) como una dirección en el espacio. </p>
                                        <br>
                                        <p class="p_black justificado">Los cálculos que combinan cantidades escalares usan las operaciones aritméticas ordinarias. Por ejemplo, 6 kg + 3 kg = 9 kg, o 4 * 2 s = 8 s. No obstante, la combinación de vectores requiere un conjunto diferente de operaciones.</p>
                                    `);
            break;
        case 5:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('m-auto');
            $(".avion-content").addClass('mx-auto mt-auto');
            $("#avion").addClass('fondo-6');
            $("#avion").attr('onclick','aviones(6)');
            $("#avion").attr('style','width: 780px; height: 475px;');
            $(".avion-content").html(`
                                        <div class="d-flex">
                                          <img src="assets/img/img_ova/profesor (3).png" class="img-45 m-auto">
                                        </div>
                                        <p class="p_black justificado">Para entender mejor los vectores y su combinación, se comienza con la cantidad vectorial más sencilla, el desplazamiento, que simplemente es un cambio en la posición de un objeto. El desplazamiento es una cantidad vectorial porque se debe establecer no solo qué tan lejos se mueve el objeto, sino también en qué dirección.</p>
                                        <br>
                                        <p class="p_black justificado">Caminar 3 km al norte desde una casa no lleva al mismo sitio que caminar 3 km al sureste; ambos desplazamientos tienen la misma magnitud, pero diferente dirección.</p>
                                    `);
            break;
        case 6:
            $("#avion").removeClass('fondo-1');
            $(".avion-content").removeClass('mx-auto mt-auto');
            $(".avion-content").addClass('m-auto');
            $("#avion").addClass('fondo-1');
            $("#avion").attr('onclick','aviones(1)');
            $("#avion").attr('style','width: 700px; height: 475px;');
            $(".avion-content").html(`
                                    <div class="d-flex">
                                      <img src="assets/img/img_ova/profesor (2).png" class="img-45 m-auto">
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

function ruta(num) {
    $("#ruta-info").addClass('d-none');
    switch(parseInt(num)){
        case 1:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Frecuentemente se representa la magnitud de una cantidad vectorial (su longitud, en el caso de un vector desplazamiento) con la misma letra que se usa para el vector, pero sin la flecha arriba. Una notación alternativa es el símbolo vectorial encerrado entre barras verticales en ambos lados:</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/magnitud.png" class="m-auto img-100">
                                      </div>
                                      <div>
                                        <p class="p_black justificado">La magnitud de una cantidad vectorial es una cantidad escalar (un número) y siempre es positiva.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 2:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Para definir las componentes de un vector se parte de un sistema rectangular de ejes de coordenadas (cartesiano) y luego se dibuja el vector con su cola en O, el origen del sistema coordenado. Se puede representar cualquier vector en el plano xy como la suma de un vector paralelo al eje x y un vector paralelo al eje y.</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/componentes.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 3:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Estos dos vectores se identifican como <b>A</b>x y <b>A</b>y; son los vectores componentes del vector y su suma vectorial es simbólicamente igual a:</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/A FLECHA.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 4:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Se puede calcular las componentes del vector si se conoce la magnitud <b>A</b> y su dirección. Se describirá la dirección de un vector por su ángulo en relación con una dirección de referencia, medido entre el eje x positivo y el vector.</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/cos y sen.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 5:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_white justificado p-3 bg-azul w-fit"><b><i>Ejemplo:</i></b></p>
                                      </div>
                                      <div>
                                        <p class="p_black justificado">¿Cuáles son las componentes x y y del vector en la figura? La magnitud del vector es D = 3.00 m y el ángulo es α = 45°.</p>
                                      </div>
                                      <div>
                                        <img src="assets/img/img_ova/grafica 4.png" class="m-auto img-100">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        case 6:
            $("#ruta-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c p-3">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-ruta" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-amarillo">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="img-100" style="opacity: initial;">
                                    <div>
                                      <div>
                                        <p class="p_black justificado">Primero note que el ángulo α no es el de referencia, sino que es 360° – α, es decir, 315°, con esto aclarado vemos que <b>D</b>x = D * cos 315° = 3 * (√2)⁄2 = 2,12 m, mientras que <b>D</b>y = D * sen 315° = 3 * (−√2)⁄2 = -2,12 m. </p>
                                        <br>
                                        <p class="p_black justificado">Note que la componente en x apunta a la derecha (sentido positivo) pero que la componente en y apunta hacia abajo (sentido negativo) porque el sen (315°) es negativo y eso concuerda con las direcciones del plano coordenado.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#ruta-info").removeClass('d-none');
            $("#ruta-info").attr('style', "left: 0px; bottom: -45px;");
            $(".cerrar-ruta").on('click', cerrar_ruta);
            break;
        default:
            break;
    }
}
function cerrar_ruta() {
    $('#ruta-info').addClass('d-none');

}

function teorias() {
    var teorias_num = $(this).data('teoria');
    $(".teoria-flecha").removeClass('d-block');
    $(".teoria-flecha").addClass('d-none');
    $(".teoria-flecha-"+teorias_num).removeClass('d-none');
    $(".teoria-flecha-"+teorias_num).addClass('d-block');

    if (teorias_num == 1) {
        var texto = `
                        <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                            <div class="bg-azul-o h-6px m-auto">
                                <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                    <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                        <p class="p_black justificado">En primer lugar, se tiene la <b>multiplicación por un escalar.</b> Este tipo de operación se da cuando se multiplica un vector por un número escalar, el resultado es un nuevo vector con la misma dirección del vector original, pero con una magnitud modificada y la cual dependerá del valor del escalar, si el escalar es menor de 1, el vector se acorta, si es mayor de 1 se alarga, si es negativo además de lo anterior cambia el sentido del vector y si es 1 pues no cambia.</p>
                                    </div>
                                    <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                        <img src="assets/img/img_ova/grafica 5.png" class="m-auto img-100" data-teoria="2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        $("#teoria").html(texto);
    }else if (teorias_num == 2) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                    <img src="assets/img/img_ova/imagen423.png" style="width:230px;">
                                </div>
                                <div class="bg-blanco radius-2 my-auto mx-3 p-3">
                                    <img src="assets/img/img_ova/imagen322.png" style="width:230px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
    }else if (teorias_num == 3) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco radius-2 my-auto mx-3 p-3 d-flex">
                                    <div class="img-40">
                                        <img src="assets/img/img_ova/opinion.png" class="m-auto img-100" data-teoria="3">
                                    </div>
                                    <p class="p_black justificado"><img src="assets/img/img_ova/imagen522.png" style="width:100%"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
    }else if (teorias_num == 4) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco img-35 radius-2 my-auto mx-3 p-3">
                                    <img src="assets/img/img_ova/calculadora.png" class="m-auto img-100" data-teoria="4">
                                </div>
                                <div class="bg-blanco img-30 radius-2 my-auto mx-3 p-3">
                                    <p class="p_black justificado" style="font-size: 14px;">La suma (o resta) de vectores es muy común en física.  Se supone que una partícula experimenta un desplazamiento seguido por un segundo desplazamiento. El resultado final es el mismo como si la partícula hubiera partido del mismo punto y experimentado un solo desplazamiento).</p>
                                </div>
                                <div class="bg-blanco img-35 radius-2 my-auto mx-3 p-3">
                                    <p class="p_black justificado">Se llama a suma vectorial, o resultante, de los desplazamientos. Si se efectúan los desplazamientos y en orden inverso, primero y luego el resultado será el mismo ya que se cumple la propiedad conmutativa.</p>
                                    <button class="btn bg-amarillo-c p-3 p_black" data-toggle="modal" data-target="#teoria-modal">Ver + información</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
    }else if (teorias_num == 5) {
        var texto = `
                    <div class="w-100 py-5 d-flex" style="min-height: 350px;">
                        <div class="bg-azul-o h-6px m-auto">
                            <div class="d-flex justify-content-evenly position-relative px-4" style="top: -120px;">
                                <div class="bg-blanco img-30 radius-2 my-auto mx-3 p-3">
                                    <div class="d-flex">
                                        <img src="assets/img/img_ova/pensar.png" class="m-auto img-70" data-teoria="4">
                                    </div>
                                    <p class="p_black justificado">En el caso de dos vectores 𝐴&#8407 y 𝐵&#8407 la suma o resultante seria 𝑅&#8407.</p>
                                    <p class="p_black justificado">Pasa el curso por la imagen para ampliarla:</p>
                                </div>
                                <div class="bg-blanco img-40 radius-2 my-auto mx-3 p-3 d-flex">
                                    <img src="assets/img/img_ova/grafica 7.png" class="m-auto img-80 zoom_img" data-teoria="5" data-zoom-image="assets/img/img_ova/grafica 7.png">
                                </div>
                                <div class="bg-blanco img-30 radius-2 my-auto mx-3 p-3">
                                    <p class="p_black justificado">Se puede ampliar este procedimiento para calcular la suma de cualquier cantidad de vectores. Si es la suma vectorial de entonces, las componentes son:</p>
                                    <img src="assets/img/img_ova/formula-r.png" class="m-auto img-100" data-teoria="5">
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teoria").html(texto);
        $( ".zoomContainer" ).remove();
        $('.zoom_img').elevateZoom({zoomWindowPosition: 10});
    }
}

function activi3(num){
    switch (parseInt(num)) {
        case 1:
            $('.contraer1').css({'height': '20%'});
            $('.imagenactivi1').css({'visibility':'hidden'});
            break;
        case 2:
            $('.contraer2').css({'height': '20%'});
            $('.imagenactivi2').css({'visibility':'hidden'});
            break;
        case 3:
            $('.contraer3').css({'height': '20%'});
            $('.imagenactivi3').css({'visibility':'hidden'});
            break;
        default:
            
            break;
    }
}

function pantallas18(num) {
    switch (parseInt(num)) {
        case 0:
            $('.text-manzana').addClass('invisible');
            $('.text-manzana').removeClass('visible');

            $('.manzana1').removeClass('invisible');
            $('.manzana1').addClass('visible');
            break;
        case 1:
            $('.text-manzana').addClass('invisible');
            $('.text-manzana').removeClass('visible');

            $('.manzana2').removeClass('invisible');
            $('.manzana2').addClass('visible');
            break;
        case 2:
            $('.text-manzana').addClass('invisible');
            $('.text-manzana').removeClass('visible');

            $('.manzana3').removeClass('invisible');
            $('.manzana3').addClass('visible');
            break;
        default:
            break;
    }
}

function btns_modal(num){
    switch (parseInt(num)) {
        case 1:
            $('.btnmodal').addClass('btn_inactive');
            $('.btnmodal').removeClass('btn_active');

            $('.btn1').removeClass('btn_inactive');
            $('.btn1').addClass('btn_active');
            break;
        case 2:
            $('.btnmodal').addClass('btn_inactive');
            $('.btnmodal').removeClass('btn_active');

            $('.btn2').removeClass('btn_inactive');
            $('.btn2').addClass('btn_active');
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
  this.att.min = 0;
  this.att.max = 2;
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
    pantallas18(this.input.value);
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