$( document ).ready(function() {
    /*slide_predeterminado();*/
    // console.log(tema);
    
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

    $(".mano0").on("click", function() {
        $(".manos").hide();
        $(".pmanos").hide();
        $(".mano1").show(100)
        $(".p-mano1").show(100)
    })

    $(".mano1").on("click", function() {
        $(".manos").hide();
        $(".pmanos").hide();
        $(".mano2").show(100)
        $(".p-mano2").show(100)
    })

    $(".mano2").on("click", function() {
        $(".manos").hide();
        $(".pmanos").hide();
        $(".mano3").show(100)
        $(".p-mano3").show(100)
    })
    $(".mano3").on("click", function() {
        $(".manos").hide();
        $(".pmanos").hide();
        $(".mano4").show(100)
        $(".p-mano4").show(100)
    })

    $(".btn13-1").on("click", function() {
        $(".parrafo13").hide();
        $(".p13-1").show();
    })

    $(".btn13-5").on("click", function() {
        $(".parrafo13").hide();
        $(".p13-5").show();
    })

    /*setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");*/

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

    $(".circle-verde").on('click' , circles);
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
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/Unidad 1/sin fines de lucro   martha-nussbaum.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> Sin fines de lucro  Martha Nussbaum. pdf    <b class="text-cafe"><u>Ver</u></b></a>
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
    /*window.location.href ="#unidad1-1";*/
    /*$url =$('.enlaces_ova')
    $url.attr('href',"#unidad1-1");
    $url[0].click()*/
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    /*window.location.href ="#unidad1-"+num;*/
    /*location.assign("#unidad1-4");*/
    /*$url =$('.enlaces_ova')
    $url.attr('href',"#unidad1-3");
    $url[0].click()*/
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}





function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","1. La importancia de la formación humanística","");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob8');
            bar = document.querySelector('.custom-scrollbar__bar8');
            container = document.querySelector('.custom-scrollbar__inner8');
            scroll();
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","1. La importancia de la formación humanística","");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob8');
            bar = document.querySelector('.custom-scrollbar__bar8');
            container = document.querySelector('.custom-scrollbar__inner8');
            scroll();
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Introducción al curso","La importancia de la formación humanística");            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Introducción al curso","La importancia de la formación humanística");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Introducción al curso","La importancia de la formación humanística");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Introducción al curso","La importancia de la formación humanística");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Introducción al curso","La importancia de la formación humanística");
            break;

        case 11:
            setMigaja("Unidades de aprendizaje","1. Introducción al curso","La importancia de la formación humanística");
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
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }  
            break;

            
        
        default:
            break;
    }
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
}

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
    $(".zoomContainer" ).remove();
    switch (parseInt(num)) {
        case 0:
            var info_scroll = `
                            <img class="col-md-10 offset-md-6" src="assets/img/img_ova/img34.png">
                            `;
            $('#info-scroll').html(info_scroll);
            break;
        case 1:
            var info_scroll = `
                            <img class="col-md-8 offset-md-6" src="assets/img/img_ova/antesdespues.jpeg">
                            `;
            $('#info-scroll').html(info_scroll);
            break;
        case 2:
            var info_scroll = `
                            <img class="col-md-10 offset-md-6" src="assets/img/img_ova/img35.png">
                            `;
            $('#info-scroll').html(info_scroll);
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

function circles() {
    var circle_num = $(this).data('circle');
    $(".circle-verde").removeClass('bg-circle-v-o');
    $(".circle-verde").addClass('bg-circle-v-c');
    $(".circle-verde-"+circle_num).removeClass('bg-circle-v-c');
    $(".circle-verde-"+circle_num).addClass('bg-circle-v-o');
    if (circle_num == 1) {
        $("#info-circle").html('<p style="padding: 20px; background-color: #f6ba0a; margin-top: 50px;" class="justificado p_black">El pensamiento grecolatino reviste un interés filosófico para áreas de lo más diverso. Aristóteles, por ejemplo, ofrece a los especialistas en las sociedades modernas una serie de recursos muy ricos para reflexionar acerca de la vulnerabilidad y la prosperidad humanas, asuntos a los que los poetas trágicos prestaron mucha atención. Gracias a él aprendemos que los bienes humanos son plurales y no individuales, al tiempo que nos dota de argumentos para criticar el actual pensamiento utilitario.</p>');
    }else if (circle_num == 2) {
        $("#info-circle").html('<p style="padding: 20px; background-color: #f6ba0a; margin-top: 50px;" class="justificado p_black">Algunos distinguidos textos clásicos plantean desafíos a nuestros modelos actuales de pensamiento y suelen ser mejores y más ricos que los últimos artículos periodísticos, que, en su mayoría serán olvidados en menos de un año, por no hablar de en los próximos dos mil años (Citada por Lozano, 2013).</p>');
    }else if (circle_num == 3) {
        var texto = `
                    0
                    `;
        $("#info-circle").html(texto);
    }
}

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = $('#slider-uni-1 ul li').length;
    var slideWidth = $('#slider-uni-1 ul li').width();
    var slideHeight = $('#slider-uni-1 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider-uni-1').css({ width: '100%', height: slideHeight });
    
    $('#slider-uni-1 ul').css({ width: '70%', marginLeft: - slideWidth });
    
    $('#slider-uni-1 ul li:last-child').prependTo('#slider-uni-1 ul');

    function moveLeft() {
        $('#slider-uni-1 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider-uni-1 ul li:last-child').prependTo('#slider-uni-1 ul');
            $('#slider-uni-1 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-uni-1 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider-uni-1 ul li:first-child').appendTo('#slider-uni-1 ul');
            $('#slider-uni-1 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});


function cardPara4(num,ventana){
  if (ventana==0) {
      $("#card4-1").addClass('hidden')
      $("#card4-2").addClass('hidden')
      $("#card4-3").addClass('hidden')
      $("#card4-4").addClass('hidden')
      var conjunto = `<div style="background-color: #68a3d9;" class="col-6 bg-color-1 text-center border-1" id="card4-1" onclick="cardPara4(1,1)"> <img src="assets/img/img_ova/DC1.png" class="w-50 p-3" id="img-card4-1"></div>
                      <div style="background-color: #68a3d9;" class="col-6 bg-color-2 text-center border-2" id="card4-2" onclick="cardPara4(2,1)"> <img src="assets/img/img_ova/DC2.png" class="w-50 p-4" id="img-card4-2"></div>
                      <div style="background-color: #68a3d9;" class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,1)"> <img src="assets/img/img_ova/DC3.png" class="w-50 p-4" id="img-card4-3"></div>
                      <div style="background-color: #68a3d9;" class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,1)"> <img src="assets/img/img_ova/DC4.png" class="w-50 p-4" id="img-card4-4"></div>`;
      $("#card4-padre").html(conjunto)
  }
  if (ventana==1) {
      $("#card4-1").addClass('hidden')
      $("#card4-2").addClass('hidden')
      $("#card4-3").addClass('hidden')
      $("#card4-4").addClass('hidden')
      if (num==1) {
          var conjunto = `
          <div class="col-6 bg-white border-1 justify-content pt-2 text-black" id="card4-1" onclick="cardPara4(1,0)> 
            <p class="text-justify text-reducido">No obstante, es importante abarcar lo planteado por Ausubel, quien manifiesta desacuerdo en visualizar el proceso cognitivo de manera progresiva y sistemática, por lo tanto, su aporte se dirige hacia un aprendizaje significativo, donde la persona para obtener este aprendizaje necesita asimilar e interiorizar plenamente aquello que se requiere que aprenda y entonces, en ese momento sería posible llamársele aprendizaje</p>
          </div>
          <div style="background-color: #68a3d9;" class="col-6 bg-color-2 text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/DC2.png" class="w-50 p-4" id="img-card4-2"></div>
          <div style="background-color: #68a3d9;" class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/DC3.png" class="w-50 p-4" id="img-card4-3"></div>
          <div style="background-color: #68a3d9;" class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/DC4.png" class="w-50 p-4" id="img-card4-4"></div>
          `;
          $("#card4-padre").html(conjunto)
      }
      if (num==2) {
          var conjunto = `
          <div style="background-color: #68a3d9;" class="col-6 bg-color-1 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/DC1.png" class="w-50 p-3" id="img-card4-1"></div>
          <div class="col-6 bg-white border-2 justify-content p-4 text-black" id="card4-2"  onclick="cardPara4(2,0)> 
            <p class="text-reducido text-justify">Así mismo, desde la teoría de Ausubel se considera que, para lograr un aprendizaje significativo es necesario integrar el conocimiento previo de la persona y encontrar un enlace que pueda ser utilizado para conectar la información o enseñanza nueva (Esquivel, s.f.); así como también sería fundamental, favorecer la participación activa de la persona, donde a través de reflexiones propias, toma de decisiones y argumentaciones críticas, interiorice aspectos esenciales de su proceso de aprendizaje y se contribuya al desarrollo cognitivo. </p>
          </div>
          <div style="background-color: #68a3d9;" class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/DC3.png" class="w-50 p-4" id="img-card4-3"></div>
          <div style="background-color: #68a3d9;" class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/DC4.png" class="w-50 p-4" id="img-card4-4"></div>
          `;
          $("#card4-padre").html(conjunto)
      }
      if (num==3) {
          var conjunto = `
              <div style="background-color: #68a3d9;" class="col-6 bg-color-1 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/DC1.png" class="w-50 p-3" id="img-card4-1"></div>
              <div style="background-color: #68a3d9;" class="col-6 bg-color-2 text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/DC2.png" class="w-50 p-4" id="img-card4-2"></div>
              <div style="background-color: #68a3d9;" class="col-6 bg-white border-3 justify-content pt-2 text-black" id="card4-3"  onclick="cardPara4(3,0)> 
                  <p class="text-reducido text-justify">Ahora bien, menciona Martínez (2009) que los procesos cognitivos son parte de la personalidad del ser humano, y en ellos es posible identificar como elemento esencial el pensamiento original creativo y productivo, así que, para dar lugar a este tipo de pensamiento, es necesario que exista una libertad de reflexión, de razonamiento y de imaginación, generando espacios que contribuyan a la autenticidad, donde naturalmente se daría un juicio crítico, una postura con sustento. </p>
              </div>
              <div style="background-color: #68a3d9;" class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/DC4.png" class="w-50 p-4" id="img-card4-4"></div>
          `;
          $("#card4-padre").html(conjunto)
      }
      if (num==4) {
          var conjunto = `
              <div style="background-color: #68a3d9;" class="col-6 bg-color-1 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/DC1.png" class="w-50 p-3" id="img-card4-1"></div>
              <div style="background-color: #68a3d9;" class="col-6 bg-color-2 text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/DC2.png" class="w-50 p-4" id="img-card4-2"></div>
              <div style="background-color: #68a3d9;" class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/DC3.png" class="w-50 p-4" id="img-card4-3"></div>
              <div class="col-6 bg-white border-4  pt-4 text-black" id="card4-4" onclick="cardPara4(4,0)> 
                  <p class="text-reducido">Lo anterior debería tener lugar en los espacios educativos, sin censurar el pensamiento del estudiante, comprendiendo que, a partir de este pensamiento se generan transformaciones relevantes para dicho estudiante y para la sociedad. “Es plenamente natural al ser humano el comportarse en forma creadora”. (Martínez, 2009).</p>
              </div>
          `;
          $("#card4-padre").html(conjunto)
      }
  }
}

