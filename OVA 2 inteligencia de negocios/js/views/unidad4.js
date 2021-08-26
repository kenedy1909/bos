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
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";

    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/DOCUMENTOS/actividad_practica.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> Aproximación práctica.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex+1);
    actualizarprogress(stepIndex+1+19+8+5);
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num){
    tema=1;
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Las tablas y gráficos dinámicos");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Microsoft PowerBI");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Microsoft PowerBI");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Microsoft PowerBI");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Microsoft PowerBI");
            break;
        case 0:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Las tablas y gráficos dinámicos");
            break;
        default:
            setMigaja("Unidades de aprendizaje","4. Procesamiento de datos - perspectiva práctica","Las tablas y gráficos dinámicos");
            break;
    }
}

/*function scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}*/


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

function funcionalidad_20(num) {
    $(".fun_20_info_0, .fun_20_info_1, .fun_20_info_2").addClass('d-none');

    if (num == 0) {
        $(".fun_20_info_0").removeClass('d-none');
    }else if (num == 1) {
        $(".fun_20_info_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_20_info_2").removeClass('d-none');
    }
}

function funcionalidad_21(num) {
    $(".fun_21_text_1, .fun_21_text_2").addClass('d-none');

    if (num == 1) {
        $(".fun_21_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_21_text_2").removeClass('d-none');
    }
}

function funcionalidad_22(num) {

    $(".fun_22_text_1, .fun_22_text_2, .fun_22_text_3, .fun_22_text_4, .fun_22_text_5, .fun_22_text_6, .fun_22_text_7").addClass('d-none');
    $(".fun_22_btn_1, .fun_22_btn_2, .fun_22_btn_3, .fun_22_btn_4, .fun_22_btn_5, .fun_22_btn_6, .fun_22_btn_7").removeClass('bg-blanco');
    $(".fun_22_btn_1, .fun_22_btn_2, .fun_22_btn_3, .fun_22_btn_4, .fun_22_btn_5, .fun_22_btn_6, .fun_22_btn_7").addClass('bg-azul-2');

    if (num == 1) {
        $(".fun_22_text_1").removeClass('d-none');
        $(".fun_22_btn_1").removeClass('bg-azul-2');
        $(".fun_22_btn_1").addClass('bg-blanco');
    }else if (num == 2) {
        $(".fun_22_text_2").removeClass('d-none');
        $(".fun_22_btn_2").removeClass('bg-azul-2');
        $(".fun_22_btn_2").addClass('bg-blanco');
    }else if (num == 3) {
        $(".fun_22_text_3").removeClass('d-none');
        $(".fun_22_btn_3").removeClass('bg-azul-2');
        $(".fun_22_btn_3").addClass('bg-blanco');
    }else if (num == 4) {
        $(".fun_22_text_4").removeClass('d-none');
        $(".fun_22_btn_4").removeClass('bg-azul-2');
        $(".fun_22_btn_4").addClass('bg-blanco');
    }else if (num == 5) {
        $(".fun_22_text_5").removeClass('d-none');
        $(".fun_22_btn_5").removeClass('bg-azul-2');
        $(".fun_22_btn_5").addClass('bg-blanco');
    }else if (num == 6) {
        $(".fun_22_text_6").removeClass('d-none');
        $(".fun_22_btn_6").removeClass('bg-azul-2');
        $(".fun_22_btn_6").addClass('bg-blanco');
    }else if (num == 7) {
        $(".fun_22_text_7").removeClass('d-none');
        $(".fun_22_btn_7").removeClass('bg-azul-2');
        $(".fun_22_btn_7").addClass('bg-blanco');
    }
}

function funcionalidad_2(num) {
    $(".info_funcionalidad_2_1, .info_funcionalidad_2_2, .info_funcionalidad_2_3, .info_funcionalidad_2_4, .info_funcionalidad_2_5, .info_funcionalidad_2_6, .info_funcionalidad_2_7, .info_funcionalidad_2_8").addClass('d-none');
    $(".btn_funcionalidad_2_1, .btn_funcionalidad_2_2, .btn_funcionalidad_2_3, .btn_funcionalidad_2_4, .btn_funcionalidad_2_5, .btn_funcionalidad_2_6, .btn_funcionalidad_2_7, .btn_funcionalidad_2_8").removeClass('bg-verde-1');
    $(".btn_funcionalidad_2_1, .btn_funcionalidad_2_2, .btn_funcionalidad_2_3, .btn_funcionalidad_2_4, .btn_funcionalidad_2_5, .btn_funcionalidad_2_6, .btn_funcionalidad_2_7, .btn_funcionalidad_2_8").addClass('bg-color-activi-o');

    if (num == 1) {
        $(".info_funcionalidad_2_1").removeClass('d-none');
        $(".btn_funcionalidad_2_1").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_1").addClass('bg-verde-1');
    }else if (num == 2) {
        $(".info_funcionalidad_2_2").removeClass('d-none');
        $(".btn_funcionalidad_2_2").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_2").addClass('bg-verde-1');
    }else if (num == 3) {
        $(".info_funcionalidad_2_3").removeClass('d-none');
        $(".btn_funcionalidad_2_3").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_3").addClass('bg-verde-1');
    }else if (num == 4) {
        $(".info_funcionalidad_2_4").removeClass('d-none');
        $(".btn_funcionalidad_2_4").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_4").addClass('bg-verde-1');
    }else if (num == 5) {
        $(".info_funcionalidad_2_5").removeClass('d-none');
        $(".btn_funcionalidad_2_5").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_5").addClass('bg-verde-1');
    }else if (num == 6) {
        $(".info_funcionalidad_2_6").removeClass('d-none');
        $(".btn_funcionalidad_2_6").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_6").addClass('bg-verde-1');
    }else if (num == 7) {
        $(".info_funcionalidad_2_7").removeClass('d-none');
        $(".btn_funcionalidad_2_7").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_7").addClass('bg-verde-1');
    }else if (num == 8) {
        $(".info_funcionalidad_2_8").removeClass('d-none');
        $(".btn_funcionalidad_2_8").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_2_8").addClass('bg-verde-1');
    }
}

function funcionalidad_3(num) {
    $(".info_funcionalidad_3_1, .info_funcionalidad_3_2, .info_funcionalidad_3_3, .info_funcionalidad_3_4, .info_funcionalidad_3_5, .info_funcionalidad_3_6").addClass('d-none');
    $(".btn_funcionalidad_3_1, .btn_funcionalidad_3_2, .btn_funcionalidad_3_3, .btn_funcionalidad_3_4, .btn_funcionalidad_3_5, .btn_funcionalidad_3_6").removeClass('bg-amarrillo-1');
    $(".btn_funcionalidad_3_1, .btn_funcionalidad_3_2, .btn_funcionalidad_3_3, .btn_funcionalidad_3_4, .btn_funcionalidad_3_5, .btn_funcionalidad_3_6").addClass('bg-naranja-1');

    if (num == 1) {
        $(".info_funcionalidad_3_1").removeClass('d-none');
        $(".btn_funcionalidad_3_1").removeClass('bg-naranja-1');
        $(".btn_funcionalidad_3_1").addClass('bg-amarrillo-1');
    }else if (num == 2) {
        $(".info_funcionalidad_3_2").removeClass('d-none');
        $(".btn_funcionalidad_3_2").removeClass('bg-naranja-1');
        $(".btn_funcionalidad_3_2").addClass('bg-amarrillo-1');
    }else if (num == 3) {
        $(".info_funcionalidad_3_3").removeClass('d-none');
        $(".btn_funcionalidad_3_3").removeClass('bg-naranja-1');
        $(".btn_funcionalidad_3_3").addClass('bg-amarrillo-1');
    }else if (num == 4) {
        $(".info_funcionalidad_3_4").removeClass('d-none');
        $(".btn_funcionalidad_3_4").removeClass('bg-naranja-1');
        $(".btn_funcionalidad_3_4").addClass('bg-amarrillo-1');
    }else if (num == 5) {
        $(".info_funcionalidad_3_5").removeClass('d-none');
        $(".btn_funcionalidad_3_5").removeClass('bg-naranja-1');
        $(".btn_funcionalidad_3_5").addClass('bg-amarrillo-1');
    }else if (num == 6) {
        $(".info_funcionalidad_3_6").removeClass('d-none');
        $(".btn_funcionalidad_3_6").removeClass('bg-naranja-1');
        $(".btn_funcionalidad_3_6").addClass('bg-amarrillo-1');
    }
}

/*function funcionalidad_4(num) {
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
}*/

function instrucciones(num) {
    $(".instrucciones-1, .instrucciones-2, .instrucciones-3").addClass('d-none');
    if (num == 1) {
        $(".instrucciones-1").removeClass('d-none');
    }else if (num == 2) {
        $(".instrucciones-2").removeClass('d-none');
    }else if (num == 3) {
        $(".instrucciones-3").removeClass('d-none');
    }
}

function enter_hover_1(num) {
    $(".enter_hover_1_1, .enter_hover_1_2, .enter_hover_1_3, .enter_hover_1_4, .enter_hover_1_5").removeClass('bg-color-activi-o');
    $(".enter_hover_1_1, .enter_hover_1_2, .enter_hover_1_3, .enter_hover_1_4, .enter_hover_1_5").addClass('bg-color-activi-c');
    if (num == 1) {
        $(".enter_hover_1_1").addClass('bg-color-activi-o');
        $(".enter_hover_1_1").removeClass('bg-color-activi-c');
    }else if (num == 2) {
        $(".enter_hover_1_2").addClass('bg-color-activi-o');
        $(".enter_hover_1_2").removeClass('bg-color-activi-c');
    }else if (num == 3) {
        $(".enter_hover_1_3").addClass('bg-color-activi-o');
        $(".enter_hover_1_3").removeClass('bg-color-activi-c');
    }else if (num == 4) {
        $(".enter_hover_1_4").addClass('bg-color-activi-o');
        $(".enter_hover_1_4").removeClass('bg-color-activi-c');
    }else if (num == 5) {
        $(".enter_hover_1_5").addClass('bg-color-activi-o');
        $(".enter_hover_1_5").removeClass('bg-color-activi-c');
    }
}

/*function funcionalidad_9(num) {
    $(".info_funcionalidad_9_1, .info_funcionalidad_9_2, .info_funcionalidad_9_3, .info_funcionalidad_9_4").addClass('d-none');

    if (num == 1) {
        $(".info_funcionalidad_9_1").removeClass('d-none');
    }else if (num == 2) {
        $(".info_funcionalidad_9_2").removeClass('d-none');
    }else if (num == 3) {
        $(".info_funcionalidad_9_3").removeClass('d-none');
    }else if (num == 4) {
        $(".info_funcionalidad_9_4").removeClass('d-none');
    }
}*/