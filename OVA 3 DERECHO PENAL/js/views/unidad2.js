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
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);

    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    actualizarprogress(stepIndex+1+27);
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
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","Introducción a la ética");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 16;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","Introducción a la ética");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","Ética, moral y derecho");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","Ética, moral y derecho");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","Ética, moral y derecho");
            
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
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
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }  
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;
        case 9:
            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
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
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }  
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob10');
            bar = document.querySelector('.custom-scrollbar__bar10');
            container = document.querySelector('.custom-scrollbar__inner10');
            scroll();

            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob11');
            bar = document.querySelector('.custom-scrollbar__bar11');
            container = document.querySelector('.custom-scrollbar__inner11');
            scroll();

            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob12');
            bar = document.querySelector('.custom-scrollbar__bar12');
            container = document.querySelector('.custom-scrollbar__inner12');
            scroll();
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;    
        case 12:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;    
        case 14:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
            break;    
        case 16:
            setMigaja("Unidades de aprendizaje","2. Nociones generales de la ética","La ética como fundamento del ciudadano");
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
function textoBorder(num){
    switch (parseInt(num)) {
        case 1:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-1').removeClass('btn-borderInactive');
            $('.btnB-1').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border1').removeClass('oculto');
            $('.texto-border1').addClass('mostrado');
            break;
        case 2:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-2').removeClass('btn-borderInactive');
            $('.btnB-2').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border2').removeClass('oculto');
            $('.texto-border2').addClass('mostrado');
            break;
        case 3:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-3').removeClass('btn-borderInactive');
            $('.btnB-3').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border3').removeClass('oculto');
            $('.texto-border3').addClass('mostrado');
            break;
        case 4:
            $('.btn-border').addClass('btn-borderInactive');
            $('.btn-border').removeClass('btn-borderActive');

            $('.btnB-4').removeClass('btn-borderInactive');
            $('.btnB-4').addClass('btn-borderActive');

            $('.texto-border').addClass('oculto');
            $('.texto-border').removeClass('mostrado');

            $('.texto-border4').removeClass('oculto');
            $('.texto-border4').addClass('mostrado');
            break;
        default:
            break;
    }
}
function pintura(num){
    switch (parseInt(num)) {
        case 1:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-1').removeClass('btn-pinturaInactive');
            $('.btnP-1').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP1').removeClass('inactive');
            $('.bannerP1').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social'+i);
            }
            $('#dimensiones').addClass('social1');
            break;
        case 2:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-2').removeClass('btn-pinturaInactive');
            $('.btnP-2').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP2').removeClass('inactive');
            $('.bannerP2').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social'+i);
            }
            $('#dimensiones').addClass('social2');
            break;
        case 3:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-3').removeClass('btn-pinturaInactive');
            $('.btnP-3').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP3').removeClass('inactive');
            $('.bannerP3').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social'+i);
            }
            $('#dimensiones').addClass('social3');
            break;
        case 4:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-4').removeClass('btn-pinturaInactive');
            $('.btnP-4').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP4').removeClass('inactive');
            $('.bannerP4').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social'+i);
            }
            $('#dimensiones').addClass('social4');
            break;
        case 5:
            $('.target-float').addClass('inactive');
            $('.target-float').removeClass('active');

            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-5').removeClass('btn-pinturaInactive');
            $('.btnP-5').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.bannerP5').removeClass('inactive');
            $('.bannerP5').addClass('active');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social'+i);
            }
            $('#dimensiones').addClass('social5');
            break;
        case 6:
            $('.btn-pintura').addClass('btn-pinturaInactive');
            $('.btn-pintura').removeClass('btn-pinturaActive');

            $('.btnP-6').removeClass('btn-pinturaInactive');
            $('.btnP-6').addClass('btn-pinturaActive');

            $('.bannerTextPintura').addClass('inactive');
            $('.bannerTextPintura').removeClass('active');

            $('.target-float').addClass('active');
            $('.target-float').removeClass('inactive');

            for (var i = 0; i <= 6; i++) {
                $('#dimensiones').removeClass('social'+i);
            }
            $('#dimensiones').addClass('social6');
            break;
        default:
            break;
    }
}

/*pantalla1*/
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

function scroll_horizontal2(num){
  
    switch (parseInt(num)) {
        case 0:
            var pantalla = `<p class="p_black text-justify size_13">La sala de cuestiones preliminares tiene definido en las
                                reglas de procedimiento y prueba tanto el procedimiento previo a la audiencia (regla 121), así
                                como el desarrollo de la audiencia, diferenciando entre la audiencia de confirmación con
                                presencia del acusado (regla 122), de la audiencia de confirmación en ausencia del acusado
                                (regla 126), en este caso la ausencia se deriva de la renuncia del acusado en participar en la
                                audiencia, conforme lo permite la regla 124. <b>Deslice para continuar:</b>
                            </p>
                            <p class="p_black text-justify size_13 d-none">La Sala de cuestiones preliminares puede decidir
                                confirmar los cargos, pero también puede no confirmar cuando considere que las pruebas
                                presentadas son insuficientes, en cuyo caso la fiscalía podrá volver a presentar la solicitud,
                                con la exigencia de presentar nuevas pruebas. Una vez se confirman los cargos, la presidencia de
                                la Corte decide conformar una sala de primera instancia para adelantar el enjuiciamiento.</b>
                            </p>`;
            $('#scroll-img2').html(pantalla);
            break;
        case 1:  
            var pantalla = `<p class="text-black text-justify">La Sala de cuestiones preliminares puede decidir confirmar los cargos, pero también puede no confirmar cuando considere que las pruebas presentadas son insuficientes, en cuyo caso la fiscalía podrá volver a presentar la solicitud, con la exigencia de presentar nuevas pruebas. Una vez se confirman los cargos, la presidencia de la Corte decide conformar una sala de primera instancia para adelantar el enjuiciamiento.</p>`;
            $('#scroll-img2').html(pantalla);

            break;
        default:
            break;
    }
}
function Input2(num) {
  /*<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">*/
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

//unidad2-2
$("#btn-carousel").click(function() {
    $('.carousel').carousel('next')
});

//unidad2-4
// inicio modal carcel
// inicio btn1
 $("#btn1Carcel").click(function() {
    $("#contentBtn1").removeClass('d-none');
    $("#contentBtn2").addClass('d-none'); 
    $("#contentBtn3").addClass('d-none'); 
    $("#contentBtn4").addClass('d-none');
    $("#contentBtn5").addClass('d-none');
    $("#contentBtn6").addClass('d-none');
 });

 $("#btn1-a").click(function() {
    $("#content1-a").removeClass('d-none');
    $("#content1-b").addClass('d-none');
 });

 $("#btn1-b").click(function() {
    $("#content1-b").removeClass('d-none');
    $("#content1-a").addClass('d-none');
 });
// fin btn1

// inicio btn2
 $("#btn2Carcel").click(function() {
    $("#contentBtn2").removeClass('d-none'); 
    $("#contentBtn1").addClass('d-none'); 
    $("#contentBtn3").addClass('d-none'); 
    $("#contentBtn4").addClass('d-none');
    $("#contentBtn5").addClass('d-none');
    $("#contentBtn6").addClass('d-none');
 });

 $("#btn2-a").click(function() {
    $("#content2-a").removeClass('d-none');
    $("#content2-b").addClass('d-none');
    $("#content2-c").addClass('d-none');
    $("#content2-d").addClass('d-none');
    $("#content2-e").addClass('d-none');
 });

 $("#btn2-b").click(function() {
    $("#content2-b").removeClass('d-none');
    $("#content2-a").addClass('d-none');
    $("#content2-c").addClass('d-none');
    $("#content2-d").addClass('d-none');
    $("#content2-e").addClass('d-none');
 });

 $("#btn2-c").click(function() {
    $("#content2-c").removeClass('d-none');
    $("#content2-a").addClass('d-none');
    $("#content2-b").addClass('d-none');
    $("#content2-d").addClass('d-none');
    $("#content2-e").addClass('d-none');
 });

 $("#btn2-d").click(function() {
    $("#content2-d").removeClass('d-none');
    $("#content2-a").addClass('d-none');
    $("#content2-b").addClass('d-none');
    $("#content2-c").addClass('d-none');
    $("#content2-e").addClass('d-none');
 });

 $("#btn2-e").click(function() {
    $("#content2-e").removeClass('d-none');
    $("#content2-a").addClass('d-none');
    $("#content2-b").addClass('d-none');
    $("#content2-c").addClass('d-none');
    $("#content2-d").addClass('d-none');
 });
//  fin btn2

// inicio btn3
$("#btn3Carcel").click(function() {
    $("#contentBtn3").removeClass('d-none'); 
    $("#contentBtn1").addClass('d-none'); 
    $("#contentBtn2").addClass('d-none');
    $("#contentBtn4").addClass('d-none');
    $("#contentBtn5").addClass('d-none');
    $("#contentBtn6").addClass('d-none');
 });

 $("#btn3-a").click(function() {
    $("#content3-a").removeClass('d-none');
    $("#content3-b").addClass('d-none');
    $("#content3-c").addClass('d-none');
 });

 $("#btn3-b").click(function() {
    $("#content3-b").removeClass('d-none');
    $("#content3-a").addClass('d-none');
    $("#content3-c").addClass('d-none');
 });

 $("#btn3-c").click(function() {
    $("#content3-c").removeClass('d-none');
    $("#content3-a").addClass('d-none');
    $("#content3-b").addClass('d-none');
 });
// fin btn3

// inicio btn4
$("#btn4Carcel").click(function() {
    $("#contentBtn4").removeClass('d-none'); 
    $("#contentBtn1").addClass('d-none'); 
    $("#contentBtn2").addClass('d-none');
    $("#contentBtn3").addClass('d-none');
    $("#contentBtn5").addClass('d-none');
    $("#contentBtn6").addClass('d-none');
 });
// fin btn4

// inicio btn5
$("#btn5Carcel").click(function() {
    $("#contentBtn5").removeClass('d-none'); 
    $("#contentBtn1").addClass('d-none'); 
    $("#contentBtn2").addClass('d-none');
    $("#contentBtn3").addClass('d-none');
    $("#contentBtn4").addClass('d-none');
    $("#contentBtn6").addClass('d-none');
 });
// fin btn5

// inicio btn6
$("#btn6Carcel").click(function() {
    $("#contentBtn6").removeClass('d-none'); 
    $("#contentBtn1").addClass('d-none'); 
    $("#contentBtn2").addClass('d-none');
    $("#contentBtn3").addClass('d-none');
    $("#contentBtn4").addClass('d-none');
    $("#contentBtn5").addClass('d-none');
 });
// fin btn6

// inicio btn7
$("#btn7Carcel").click(function() {
    $("#contentBtn7").removeClass('d-none'); 
    $("#contentBtn1").addClass('d-none'); 
    $("#contentBtn2").addClass('d-none');
    $("#contentBtn3").addClass('d-none');
    $("#contentBtn4").addClass('d-none');
    $("#contentBtn5").addClass('d-none');
    $("#contentBtn6").addClass('d-none');
 });

 $("#btn7-a").click(function() {
    $("#content7-a").removeClass('d-none');
    $("#content7-b").addClass('d-none');
    $("#content7-c").addClass('d-none');
    $("#content7-d").addClass('d-none');
 });

 $("#btn7-b").click(function() {
    $("#content7-b").removeClass('d-none');
    $("#content7-a").addClass('d-none');
    $("#content7-c").addClass('d-none');
    $("#content7-d").addClass('d-none');
 });

 $("#btn7-c").click(function() {
    $("#content7-c").removeClass('d-none');
    $("#content7-a").addClass('d-none');
    $("#content7-b").addClass('d-none');
    $("#content7-d").addClass('d-none');
 });

 $("#btn7-d").click(function() {
    $("#content7-d").removeClass('d-none');
    $("#content7-a").addClass('d-none');
    $("#content7-b").addClass('d-none');
    $("#content7-c").addClass('d-none');
 });
// fin btn7
// fin modal calcer

// inicio modal prision
// inicio btn1
$("#btnPris1").click(function() {
   $("#contentBtnPris1").removeClass('d-none');
   $(".arrowRight").removeClass('w60px');
   $(".arrowRight").removeClass('w990px');
   $(".arrowRight").addClass('w60px');
   $("#arrow1").addClass('w990px');
   $("#contentBtnPris2").addClass('d-none');
   $("#contentBtnPris3").addClass('d-none');
   $("#contentBtnPris4").addClass('d-none');
   $("#contentBtnPris5").addClass('d-none');
   
});
// fin btn1

// inicio btn2
$("#btnPris2").click(function() {
    $("#contentBtnPris2").removeClass('d-none');
    $(".arrowRight").removeClass('w60px');
    $(".arrowRight").removeClass('w990px');
    $(".arrowRight").addClass('w60px');
    $("#arrow2").addClass('w990px');
    $("#contentBtnPris1").addClass('d-none');
    $("#contentBtnPris3").addClass('d-none');
    $("#contentBtnPris4").addClass('d-none');
    $("#contentBtnPris5").addClass('d-none');
 });
 // fin btn2

 // inicio btn3
$("#btnPris3").click(function() {
    $("#contentBtnPris3").removeClass('d-none');
    $(".arrowRight").removeClass('w60px');
    $(".arrowRight").removeClass('w990px');
    $(".arrowRight").addClass('w60px');
    $("#arrow3").addClass('w990px');
    $("#contentBtnPris1").addClass('d-none');
    $("#contentBtnPris2").addClass('d-none');
    $("#contentBtnPris4").addClass('d-none');
    $("#contentBtnPris5").addClass('d-none');
 });
 // fin btn3

 // inicio btn4
$("#btnPris4").click(function() {
    $("#contentBtnPris4").removeClass('d-none');
    $(".arrowRight").removeClass('w60px');
    $(".arrowRight").removeClass('w990px');
    $(".arrowRight").addClass('w60px');
    $("#arrow4").addClass('w990px');
    $("#contentBtnPris1").addClass('d-none');
    $("#contentBtnPris2").addClass('d-none');
    $("#contentBtnPris3").addClass('d-none');
    $("#contentBtnPris5").addClass('d-none');
 });
 // fin btn4

 // inicio btn5
$("#btnPris5").click(function() {
    $("#contentBtnPris5").removeClass('d-none');
    $(".arrowRight").removeClass('w60px');
    $(".arrowRight").removeClass('w990px');
    $(".arrowRight").addClass('w60px');
    $("#arrow5").addClass('w990px');;
    $("#contentBtnPris1").addClass('d-none');
    $("#contentBtnPris2").addClass('d-none');
    $("#contentBtnPris3").addClass('d-none');
    $("#contentBtnPris4").addClass('d-none');
 });
 // fin btn5
// fin modal prision

// unidad2-7
// inicio box1
$("#box1Img").click(function () {
    $("#box1Img").addClass('d-none');
    $("#box1ImgP").removeClass('d-none');
});

$("#box1ImgP").click(function () {
    $("#box1ImgP").addClass('d-none');
    $("#box1Img").removeClass('d-none');
}); 
// fin box1

// inicio box2
$("#box2Img").click(function () {
    $("#box2Img").addClass('d-none');
    $("#box2ImgP").removeClass('d-none');
});

$("#box2ImgP").click(function () {
    $("#box2ImgP").addClass('d-none');
    $("#box2Img").removeClass('d-none');
}); 
// fin box2

// inicio box3
$("#box3Img").click(function () {
    $("#box3Img").addClass('d-none');
    $("#box3ImgP").removeClass('d-none');
});

$("#box3ImgP").click(function () {
    $("#box3ImgP").addClass('d-none');
    $("#box3Img").removeClass('d-none');
}); 
// fin box3   

// unidad1-12
$(function () {
    $('[data-toggle="popover"]').popover()
});

// btn1
$("#btn1ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn1").removeClass('d-none');
});

// btn2
$("#btn2ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn2").removeClass('d-none');
});

// btn3
$("#btn3ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn3").removeClass('d-none');
});

// btn4
$("#btn4ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn4").removeClass('d-none');
});

// btn5
$("#btn5ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn5").removeClass('d-none');
});

// btn6
$("#btn6ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn6").removeClass('d-none');
});

// btn7
$("#btn7ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn7").removeClass('d-none');
});

// btn8
$("#btn8ImgJuicio").click(function() {
    $(".contentJuicio").addClass('d-none');
    $("#contentJBtn8").removeClass('d-none');
});
 




