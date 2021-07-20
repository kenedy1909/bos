$( document ).ready(function() {
    slide_predeterminado();
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


    $(".btn-unidad1-1").on("click", function () {
        $(".divcircle").hide();
        $(".div-circle-1").show(500);
    })
    $(".btn-unidad1-2").on("click", function () {
        $(".divcircle").hide();
        $(".div-circle-2").show(500);
    })
    $(".btn-unidad1-3").on("click", function () {
        $(".divcircle").hide();
        $(".div-circle-3").show(500);
    })
    $(".btn-unidad1-4").on("click", function () {
        $(".divcircle").hide();
        $(".div-circle-4").show(500);
    })
    $(".btn-unidad1-5").on("click", function () {
        $(".divcircle").hide();
        $(".div-circle-5").show(500);
    })


    $
    /*setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Cuantificadores, sus negaciones y el contraejemplo");*/

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
    window.location.href ="#unidad1-1";
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    window.location.href ="#unidad1-"+num;
    controlSlides(num);
}



function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación");
            var pdf = `<div class="col-md-12">
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD1/metodologia_para_hacer_prospectiva_quiro.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i>Metodología para hacer prospectiva quiro</a>
                              </p>
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD1/prospectiva_y_desarrollo.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i>Prospectiva y desarrollo</a>
                              </p>
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD1/CASO AVIANCA.xml" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i>Caso Avianca</a>
                              </p>
                            </div>`;
            $('.pdfs').html(pdf);
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Marco referencial de la prospectiva");            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Marco referencial de la prospectiva");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Marco referencial de la prospectiva");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Marco referencial de la prospectiva");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Prospectiva en las organizaciones");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Prospectiva en las organizaciones");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Prospectiva en las organizaciones");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Algunas herramientas para el diseño prospectivo");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Algunas herramientas para el diseño prospectivo");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Algunas herramientas para el diseño prospectivo");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob33');
            bar = document.querySelector('.custom-scrollbar__bar33');
            container = document.querySelector('.custom-scrollbar__inner33');
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Enfoque prospectivo de la simulación","Matriz de análisis estructural");
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


function acordeon(num,estado) {

    $('.contenidoAcordeon1, .contenidoAcordeon2').removeClass('d-block');
    $('.contenidoAcordeon1, .contenidoAcordeon2').addClass('hidden');


    if (estado=='acordeon') {
        if (num==1) {
            
            $('.acordeon1').addClass('ocultarAcordeon1');
            $('.acordeon1').removeClass('acordeon1');
            
            $('.contenidoAcordeon1').removeClass('hidden');
            $('.contenidoAcordeon1').addClass('d-block');
            
            $('.ocultarAcordeon1').attr('onclick',"acordeon(1,'ocultar')");
        }else if (num==2) {
            
            $('.acordeon2').addClass('ocultarAcordeon2');
            $('.acordeon2').removeClass('acordeon2');
            
            $('.contenidoAcordeon2').removeClass('hidden');
            $('.contenidoAcordeon2').addClass('d-block');
            
            $('.ocultarAcordeon2').attr('onclick',"acordeon(2,'ocultar')");
        }

    }else if(estado=='ocultar'){

        if (num==1) {
            
            $('.ocultarAcordeon1').addClass('acordeon1');
            $('.ocultarAcordeon1').removeClass('ocultarAcordeon1');
            
            $('.contenidoAcordeon1').removeClass('d-block');
            $('.contenidoAcordeon1').addClass('hidden');
            
            $('.acordeon1').attr('onclick',"acordeon(1,'acordeon')");
        }else if (num==2) {
            
            $('.ocultarAcordeon2').addClass('acordeon2');
            $('.ocultarAcordeon2').removeClass('ocultarAcordeon2');
            
            $('.contenidoAcordeon2').removeClass('d-block');
            $('.contenidoAcordeon2').addClass('hidden');
            
            $('.acordeon2').attr('onclick',"acordeon(2,'acordeon')");
        }
    }
}
function textCard19(num,estado) {

    $('.contenidoTextCard1, .contenidoTextCard2').removeClass('d-block');
    $('.contenidoTextCard1, .contenidoTextCard2').addClass('d-none');


    if (estado=='abrir') {
        if (num==1) {
            $('.textCardPadre1').removeClass('d-block');
            $('.textCardPadre1').addClass('d-none');
            
            $('.btnTextCard1').addClass('ocultarTextCardPadre1');
            $('.btnTextCard1').removeClass('btnTextCard1');
            
            $('.contenidoTextCard1').removeClass('d-none');
            $('.contenidoTextCard1').addClass('d-block');
            
            $('.ocultarTextCardPadre1').attr('onclick',"textCard19(1,'ocultar')");
        }else if (num==2) {
            $('.textCardPadre2').removeClass('d-block');
            $('.textCardPadre2').addClass('d-none');
            

            $('.btnTextCard2').addClass('ocultarTextCardPadre2');
            $('.btnTextCard2').removeClass('btnTextCard2');
            
            $('.contenidoTextCard2').removeClass('d-none');
            $('.contenidoTextCard2').addClass('d-block');
            
            $('.ocultarTextCardPadre2').attr('onclick',"textCard19(2,'ocultar')");
        }

    }else if(estado=='ocultar'){

        if (num==1) {
            $('.textCardPadre1').removeClass('d-none');
            $('.textCardPadre1').addClass('d-block');
            
            $('.ocultarTextCardPadre1').addClass('btnTextCard1');
            $('.ocultarTextCardPadre1').removeClass('ocultarTextCardPadre1');
            
            $('.contenidoTextCard1').removeClass('d-block');
            $('.contenidoTextCard1').addClass('d-none');
            
            $('.btnTextCard1').attr('onclick',"textCard19(1,'abrir')");
        }else if (num==2) {
            $('.textCardPadre2').removeClass('d-none');
            $('.textCardPadre2').addClass('d-block');

            $('.ocultarTextCardPadre2').addClass('btnTextCard2');
            $('.ocultarTextCardPadre2').removeClass('ocultarTextCardPadre2');
            
            $('.contenidoTextCard2').removeClass('d-block');
            $('.contenidoTextCard2').addClass('d-none');
            
            $('.btnTextCard2').attr('onclick',"textCard19(2,'abrir')");
        }
    }
}
function cambiarContenido(num){
    $('#ContenedorTexto14').html(``);
    if (num == 1) {
        var conjunto = `
                        <p class="text-justify">Podremos evidenciar que en el Aplicativo permite el <span class="text-danger"> intercambio de influencias</span> de 70 y 80 variables, lo que facilita el análisis y lo hace muy confiable en el momento de diagnosticar y planear hacia el futuro de corto, mediano y largo plazo.</p>
                        <div class="w-100 p-3 text-center"><img src="assets/img/img_ova/analisis1.gif" width="50%"></div>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 2) {
        var conjunto = `
                        <p class="text-justify">En la Matriz interactúan los factores internos de la organización (los cuales se denominan variables), el fundamento de esta matriz depende de la forma como influyen las diferentes variables entre sí, otorgando una calificación de influencia sobre las otras. La matriz permite visualizar de una forma objetiva la forma como cada una de las variables ejercen una presión sobre las demás.</p>
                        <div class="w-100 p-3 text-center"><img src="assets/img/img_ova/estadisticas_circulo.gif" width="50%"></div>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 3) {
        var conjunto = `
                        <p class="text-justify">El resultado muestra  las variables o factores en un cuadrante que nos permite tener una <span class="text-danger"> visión objetiva de la influencia y/o dependencia. </span></p>
                        <div class="w-100 p-3 text-center"><img src="assets/img/img_ova/pregunta_analisisdependencia.png" width="55%"></div>
                        <p class="text-justify">Es la pregunta fundamental para empezar con el análisis de dependencia - influencia y a partir de aquí, sucesivamente con todas las variables que componen el escenario. </p>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 4) {
        var conjunto = `
                        <p class="text-justify">La calificación de cada variable tiene una escala que va desde  cero (0)  a tres (3), con una calificación P, si la influencia es potencial a presentarse en el futuro  y <span class="text-danger"> determina el grado de intensidad de la conexión o relación. </span> La respuesta se califica: </p>
                        <div class="w-100 p-3 text-center"><img src="assets/img/img_ova/calificacion_rango.png" width="100%" height="100%"></div>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 5) {
        var conjunto = `
                        <p class="text-justify ">La calificación ubica las variables en los diferentes cuadrantes del plano cartesiano.</p> <br><br>
                        <p class="text-justify w-50 boder-bottom p-2">La <span class="text-danger"> zona de autónoma </span> corresponde a las variables que tienen poca o  nula  dependencia e influencia.</p>
                        <p class="text-justify w-50 boder-bottom boder-left p-2">La <span class="text-danger"> zona de poder </span> corresponde a las variables que tienen mucha influencia y muy poca dependencia.</p>
                        <p class="text-justify w-50 p-2">La <span class="text-danger"> zona de conflicto </span> corresponde a las variables que poseen mucha dependencia y tienen influencia sobre las demás</p>
                        <p class="text-justify w-50 p-2 boder-left">Y la <span class="text-danger"> zona de salida </span> corresponde a las variables que son netamente dependientes y se conocen como variables de resultado.</p>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 6) {
        var conjunto = `
                        <p class="text-justify ">Clasificación indirecta, muestra cómo puede variar el comportamiento en el largo plazo.</p>
                        <div class="w-100 p-3 text-center d-flex align-items-center mt-3">
                            <img src="assets/img/img_ova/multiplicacion.png" width="25%">
                            <p class="w-57 pl-3 text-justify">Se obtiene mediante la multiplicación de la matriz obtenida en la clasificación directa por ella misma tantas veces como los porcentajes de motricidad y dependencia se mantengan constantes. </p>
                        </div>
                        <div class="w-100 p-3 text-center d-flex align-items-center">
                            <img src="assets/img/img_ova/igual.png" width="25%">
                            <p class="w-57 pl-3 text-justify">Se obtiene mediante la multiplicación de la matriz obtenida en la clasificación directa por ella misma tantas veces como los porcentajes de motricidad y dependencia se mantengan constantes. </p></p>
                        </div>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 7) {
        var conjunto = `
                        <p class="text-justify ">Determinación de los problemas claves. La identificación de los problemas claves constituye un paso importante del método. El programa automatizado brinda en un plano cartesiano (mapa) con cada uno de los problemas, de acuerdo con la valoración del grupo de experto que permite obtener los índices de motricidad y dependencia.</p>
                        <div class="w-100 p-3 text-center "><img src="assets/img/img_ova/plano_cartesiano.jpg" width="60%"></div>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }else if (num == 8) {
        var conjunto = `
                        <p class="text-justify ">Cualquier acción que se realice sobre ello repercutirá en gran parte del sistema. La prioridad en las acciones a realizar en la solución de los problemas se concentran en:</p>
                        <div class="w-100 p-3 d-flex align-items-center">
                            <div class="w-75 mr-3">
                                <ol>
                                    <li>En primer lugar en la <span class="text-danger">zona de poder</span>, porque su efecto se hará sentir de inmediato sobre el resto; </li>
                                    <li>Y en segundo lugar, los de la <span class="text-danger">zona de conflicto</span>, porque cumplen una función de enlace entre la zona de poder y los restantes </li>
                                    <li>Y, además, porque sus consecuencias se sentirán en los problemas ubicados en la <span class="text-danger">zona de salida.</span> </li>
                                </ol>
                            </div>
                            <img src="assets/img/img_ova/tonalidad.png" width="18%" height="100%">
                        </div>
                        `;
        $("#ContenedorTexto14").html(conjunto)
    }
}