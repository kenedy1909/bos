$( document ).ready(function() {

    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu1").addClass('c-show');
    $(".menu2").removeClass('c-show');
    $(".menu3").removeClass('c-show');
    $(".menu4").removeClass('c-show');

    star_uni = 1;
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
    slide_predeterminado();
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

    $(".modal").on('hidden.bs.modal', function () {
        detenerMultimedia();
    });

    function detenerMultimedia() {
        $('body').addClass('p-0');
        // console.log('holaaa');
        
    }

    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        
        console.log(e);
        controlSlides(stepIndex+1);
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


    $(".btn1_u1").on("click", function (argument) {
        $(".p-u1").show(1000)
    })

    $(".btn1").on("click", function (argument) {
        $(".parrafo2").hide()
        $(".parrafo1").show(400)
    })

    $(".btn2").on("click", function (argument) {
        $(".parrafo1").hide()
        $(".parrafo2").show(400)
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


    slide_link(tema);
    /*$(".unidad1-1").on('click', slide_link);
    $(".unidad1-5").on('click', slide_link);
    $(".unidad1-6_paso1").on('mouseover', unidad1_pantalla6_accion1);
    $(".unidad1-6_paso3").on('mouseover', unidad1_pantalla6_accion3);
    $(".unidad1-6_paso1").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso2").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso3").on('mouseleave', unidad1_pantalla6_accion4);*/

    /*scroll();*/

    
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
    
    
}



function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico","");
            cambiarColorMenu(11);
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico","El marco teórico conceptual");            
            cambiarColorMenu(11);
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico","Comprensión del marco teórico");
            cambiarColorMenu(21);
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico","Inicio del marco teórico referencial");
            cambiarColorMenu(31);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico","Los conceptos y teorías propios del trabajo que usted realiza");
            cambiarColorMenu(41);
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Construcción del marco teórico","Los conceptos y teorías propios del trabajo que usted realiza");
            cambiarColorMenu(41);
            document.getElementById("actividad6").contentDocument.location.reload(true);
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","","");
            tema = 1;
            $( ".ov-personaje").show();
            $(".menu1").addClass('d-none');
            $(".menu2").addClass('d-none');
            $(".menu3").addClass('d-none');
            $(".menu4").addClass('d-none');
            break;
            
        
        default:
            break;
    }
}

function conjuntos(num){
    $(".info_conjuntos").removeClass('fondo_azul_claro');
    $(".info_conjuntos"+num).addClass('fondo_azul_claro');
    $(".info_conjuntos").removeClass('shadow');
    $(".info_conjuntos"+num).addClass('shadow');
    if (num == 1) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                        <div class="row caja-texto-b">
                          <img class="col-md-3 " src="assets/img/img_ova/escritura.png">
                          <p class="justificado font13  col-md-8 font-weight-bold">
                          Por lo regular, lo que primero que se hace en una hoja aparte, a partir de lo que dice nuestra pregunta y plantean los objetivos, una especie de índice de los distintos aspectos teórico-conceptuales que debemos explicitar en el trabajo. Se enuncian los temas y subtemas y al frente de cada uno se pone la posible bibliografía en la que nos basaremos para desarrollarlo. Y eso es lo que desarrollaremos en este apartado. Escribimos nuestro título, y enseguida empezaremos a escribir lo que es pertinente aquí, con todos los subtítulos que sean necesarios.

                          </p>
                        </div>
                        
                      </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 2) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                        <div class="row caja-texto-b">
                          <img class="col-md-3 " src="assets/img/img_ova/verificacion_antecedentes.png">
                          <p class="justificado font13  col-md-8 font-weight-bold">
                          Igual que en el elemento anterior, los antecedentes investigativos, debemos ser muy cuidadosos a la hora de desarrollar este escrito. Citaremos las fuentes desde alguna normatividad elegida (APA, Chicago, Vancouver, etc.), nos cuidaremos del fraude o copia, y elegiremos muy bien la información. Se recomiendan textos cuya edición no sobrepase los 7 años, que puedan brindarnos datos muy confiables. Aquí también se debe considerar que sean autores reconocidos, cuyas publicaciones reúnan las exigencias requeridas por el mundo de los investigadores.

                          </p>
                        </div>
                        
                      </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 3) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                        <div class="row caja-texto-b">
                          <img class="col-md-3 " src="assets/img/img_ova/editor.png">
                          <p class="justificado font13  col-md-8 font-weight-bold">
                          Es probable que muchos de los autores que utilicemos, sean también los mismos de los antecedentes, pues suele suceder que las investigaciones den como fruto la elaboración de conceptos y teorías. <br> Es una constante que los estudiantes se pregunten por el número de páginas que esto debe llevar, y al respecto solo podemos decir que sean mesurados, no se trata de traer a colación todo lo que se parezca a la investigación, pero hay que realizar una panorámica teórico-conceptual muy completa sobre el asunto.
                          </p>
                        </div>
                        
                      </div>
                    `;
        $("#info_unidad2").html(conjunto)
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
/*function scroll(){
    $(".scroll-scrollbar").css({
            'position':'relative',
            'height':'240px',
            'width':'fit-content',
            'overflow':'hidden'
    });
    $(".scroll-scrollbar__bar").css({
              'position':' absolute',
              'top':' 22px',
              'bottom':' 45px',
              'background':'#FFFFFF',
              'width':' 3px',
              'right':' 30px',
              'border-radius':' 4px'
    });
    $(".scroll-scrollbar__knob").css({
              'position': 'absolute',
              'top':' 0',
              'left':' 50%',
              'width':' 25px',
              'height':' 25px',
              'border-radius':' 50%',
              'background':' #FFFFFF',
              'transform':' translate(-50%, -50%)',
              'will-change':' top'
    });
    $(".scroll-linea_scroll_modal").css({
            'font-size':' 50px',
            'margin':' 0px',
            'position':' relative',
            'top':' -32px'
    });
}*/

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