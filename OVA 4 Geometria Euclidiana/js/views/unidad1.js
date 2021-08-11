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
    $(".ruanda-img").on('click', ruandas);
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
/*var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/UNIDAD 1/tratado-de-versalles.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Tratado de versalles.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);*/
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
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");  
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");  
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Conceptos y definiciones básicas");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 25:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 26:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 31:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            $(".i1").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
            var i = new Input(2);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(2);
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
        case 34:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 35:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 36:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 37:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 38:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 39:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 40:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 41:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
            break;
        case 42:
            setMigaja("Unidades de aprendizaje","1.Geometría plana","Triángulos y cuadriláteros");
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
function scroll_horizontal(num){
    $('.scroll_horizontal_1, .scroll_horizontal_2, .scroll_horizontal_3').removeClass('d-flex');
    $('.scroll_horizontal_1, .scroll_horizontal_2, .scroll_horizontal_3').addClass('d-none');
    switch (parseInt(num)) {
        case 0:
            $('.scroll_horizontal_1').addClass('d-flex');
            $('.scroll_horizontal_1').removeClass('d-none');
            break;
        case 1:
            $('.scroll_horizontal_2').addClass('d-flex');
            $('.scroll_horizontal_2').removeClass('d-none');
            break;
        case 2:
            $('.scroll_horizontal_3').addClass('d-flex');
            $('.scroll_horizontal_3').removeClass('d-none');
            break;
        default:
            break;
    }
}
function cajas(num){
  switch (parseInt(num)) {
      case 1:
          var text = `<img src="assets/img/img_ova/infografia1.png" class="m-auto img-100">`;
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
                            <img src="assets/img/img_ova/triangulo_2.png" class="m-auto img-70">
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
                            <img src="assets/img/img_ova/triangulo_3.png" class="m-auto img-70">
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
                            <img src="assets/img/img_ova/triangulo_4.png" class="m-auto img-70">
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
                            <img src="assets/img/img_ova/triangulo_5.png" class="m-auto img-70">
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
                            <img src="assets/img/img_ova/triangulo_6.png" class="m-auto img-70">
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
                            <img src="assets/img/img_ova/triangulo_7.png" class="m-auto img-70">
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

function ruandas() {
    var ruanda_num = $(this).data('ruanda');
    $(".ruanda-1, .ruanda-2, .ruanda-3, .ruanda-4, .ruanda-5, .ruanda-6, .ruanda-7").addClass('d-none');
    $(".ruanda-1, .ruanda-2, .ruanda-3, .ruanda-4, .ruanda-5, .ruanda-6, .ruanda-7").removeClass('d-flex');
    $(".ruanda-img-5, .ruanda-img-6, .ruanda-img-7").removeClass('bg-naranja-1');
    $(".ruanda-img-5, .ruanda-img-6, .ruanda-img-7").addClass('bg-color-activi-c');

    if (ruanda_num==1) {
        $(".ruanda-1").removeClass('d-none');
        $(".ruanda-1").addClass('d-flex');
    }else if (ruanda_num==2) {
        $(".ruanda-2").removeClass('d-none');
        $(".ruanda-2").addClass('d-flex');
    }else if (ruanda_num==3) {
        $(".ruanda-3").removeClass('d-none');
        $(".ruanda-3").addClass('d-flex');
    }else if (ruanda_num==4) {
        $(".ruanda-4").removeClass('d-none');
        $(".ruanda-4").addClass('d-flex');
    }else if (ruanda_num==5) {
        $(".ruanda-5").removeClass('d-none');
        $(".ruanda-5").addClass('d-flex');
        $(".ruanda-img-5").removeClass('bg-color-activi-c');
        $(".ruanda-img-5").addClass('bg-naranja-1');
    }else if (ruanda_num==6) {
        $(".ruanda-6").removeClass('d-none');
        $(".ruanda-6").addClass('d-flex');
        $(".ruanda-img-6").removeClass('bg-color-activi-c');
        $(".ruanda-img-6").addClass('bg-naranja-1');
    }else if (ruanda_num==7) {
        $(".ruanda-7").removeClass('d-none');
        $(".ruanda-7").addClass('d-flex');
        $(".ruanda-img-7").removeClass('bg-color-activi-c');
        $(".ruanda-img-7").addClass('bg-naranja-1');
    }
}

function funcionalidad_1(num) {
    $(".funcionalidad_1_1, .funcionalidad_1_2").removeClass('col-md-6');
    $(".funcionalidad_1_1, .funcionalidad_1_2").addClass('col-md-12');
    $(".funcionalidad_oculta_1_1, .funcionalidad_oculta_1_2").addClass('d-none');
    $(".funcionalidad_col_1_1_1, .funcionalidad_col_1_2_1").removeClass('col-md-12');
    $(".funcionalidad_col_1_1_1, .funcionalidad_col_1_2_1").addClass('col-md-7');
    $(".funcionalidad_col_1_1_2, .funcionalidad_col_1_2_2").removeClass('col-md-12');
    $(".funcionalidad_col_1_1_2, .funcionalidad_col_1_2_2").addClass('col-md-5');

    if (num == 1) {
        $(".funcionalidad_1_1").removeClass('col-md-12');
        $(".funcionalidad_1_1").addClass('col-md-6');
        $(".funcionalidad_oculta_1_1").removeClass('d-none');
        $(".funcionalidad_col_1_1_1").removeClass('col-md-7');
        $(".funcionalidad_col_1_1_1").addClass('col-md-12');
        $(".funcionalidad_col_1_1_2").removeClass('col-md-5');
        $(".funcionalidad_col_1_1_2").addClass('col-md-12');
    }else if (num == 2) {
        $(".funcionalidad_1_2").removeClass('col-md-12');
        $(".funcionalidad_1_2").addClass('col-md-6');
        $(".funcionalidad_oculta_1_2").removeClass('d-none');
        $(".funcionalidad_col_1_2_1").removeClass('col-md-7');
        $(".funcionalidad_col_1_2_1").addClass('col-md-12');
        $(".funcionalidad_col_1_2_2").removeClass('col-md-5');
        $(".funcionalidad_col_1_2_2").addClass('col-md-12');
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
    $(".btn_funcionalidad_5_1, .btn_funcionalidad_5_2, .btn_funcionalidad_5_3, .btn_funcionalidad_5_4, .btn_funcionalidad_5_5, .btn_funcionalidad_5_6").removeClass('bg-verde-1');
    $(".btn_funcionalidad_5_1, .btn_funcionalidad_5_2, .btn_funcionalidad_5_3, .btn_funcionalidad_5_4, .btn_funcionalidad_5_5, .btn_funcionalidad_5_6").addClass('bg-color-activi-o');

    if (num == 1) {
        $(".info_funcionalidad_5_1").removeClass('d-none');
        $(".btn_funcionalidad_5_1").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_1").addClass('bg-verde-1');
    }else if (num == 2) {
        $(".info_funcionalidad_5_2").removeClass('d-none');
        $(".btn_funcionalidad_5_2").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_2").addClass('bg-verde-1');
    }else if (num == 3) {
        $(".info_funcionalidad_5_3").removeClass('d-none');
        $(".btn_funcionalidad_5_3").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_3").addClass('bg-verde-1');
    }else if (num == 4) {
        $(".info_funcionalidad_5_4").removeClass('d-none');
        $(".btn_funcionalidad_5_4").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_4").addClass('bg-verde-1');
    }else if (num == 5) {
        $(".info_funcionalidad_5_5").removeClass('d-none');
        $(".btn_funcionalidad_5_5").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_5").addClass('bg-verde-1');
    }else if (num == 6) {
        $(".info_funcionalidad_5_6").removeClass('d-none');
        $(".btn_funcionalidad_5_6").removeClass('bg-color-activi-o');
        $(".btn_funcionalidad_5_6").addClass('bg-verde-1');
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

function instrucciones(num) {
    $(".instrucciones-1, .instrucciones-2, .instrucciones-3, .instrucciones-4").addClass('d-none');
    if (num == 1) {
        $(".instrucciones-1").removeClass('d-none');
    }else if (num == 2) {
        $(".instrucciones-2").removeClass('d-none');
    }else if (num == 3) {
        $(".instrucciones-3").removeClass('d-none');
    }else if (num == 4) {
        $(".instrucciones-4").removeClass('d-none');
    }
}

function enter_hover_2(num) {
    $(".enter_hover_2_1, .enter_hover_2_2, .enter_hover_2_3, .enter_hover_2_4").removeClass('bg-color-activi-o');
    $(".enter_hover_2_1, .enter_hover_2_2, .enter_hover_2_3, .enter_hover_2_4").addClass('bg-azul-1');
    if (num == 1) {
        $(".enter_hover_2_1").addClass('bg-color-activi-o');
        $(".enter_hover_2_1").removeClass('bg-azul-1');
    }else if (num == 2) {
        $(".enter_hover_2_2").addClass('bg-color-activi-o');
        $(".enter_hover_2_2").removeClass('bg-azul-1');
    }else if (num == 3) {
        $(".enter_hover_2_3").addClass('bg-color-activi-o');
        $(".enter_hover_2_3").removeClass('bg-azul-1');
    }else if (num == 4) {
        $(".enter_hover_2_4").addClass('bg-color-activi-o');
        $(".enter_hover_2_4").removeClass('bg-azul-1');
    }
}

function funcionalidad_9(num) {
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
}