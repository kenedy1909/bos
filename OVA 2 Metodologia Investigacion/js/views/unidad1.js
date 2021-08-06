$( document ).ready(function() {
    
    console.log(tema);
    
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
    /*setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Exploración de la literatura como sustento.");*/
    /*slide_predeterminado();*/
    slide_link(tema);

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
    /*$(".unidad1-1").on('click', slide_link2);
    $(".unidad1-5").on('click', slide_link2);
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
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Exploración de la literatura como sustento.");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob');
            bar = document.querySelector('.custom-scrollbar__bar');
            container = document.querySelector('.custom-scrollbar__inner');
            /*scroll();*/
            var pdf = `<div class="col-md-12">
                          <p class="p_white size_20">
                              <a href="assets/PDF/UNIDAD1/Lectura-y-escritura-en-la-investigación.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Lectura y escritura en la investigación</a>
                          </p>
                        </div>`;
            $('.pdfs').html(pdf);
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Exploración de la literatura como sustento.");            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Exploración de la literatura como sustento.");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Exploración de la literatura como sustento.");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Método de demostración por Inducción matemática");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob2');
            bar = document.querySelector('.custom-scrollbar__bar2');
            container = document.querySelector('.custom-scrollbar__inner2');
            scroll();
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Método de demostración por Inducción matemática");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Método de demostración por Inducción matemática");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Método de demostración por Inducción matemática");
            break;
        
        case 9:
            setMigaja("Unidades de aprendizaje","1. La pesquisa bibliográfica","Método de demostración por Inducción matemática");
            /*$("#content-ova").load("base/unidades/unidad2.html");*/
            tema = 1;
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
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'none',
        'z-index': '100'
    });
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
    }
}
function conjuntos(num){
    $(".card1").removeClass('borde_claro');
    $(".info_conjuntos").removeClass('bg-color-dark');
    $(".info_conjuntos"+num).addClass('bg-color-dark');
    $(".info_conjuntos").removeClass('shadow');
    $(".info_conjuntos"+num).addClass('shadow');
    if (num == 1) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 card1 borde_oscuro py-5 menos-margin-50">
                      <center><p class="text-black py-3">Teorías</p></center>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 2) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 card1 borde_oscuro py-5 menos-margin-50">
                      <center><p class="text-black py-3">Conceptualizaciones</p></center>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 3) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 card1 borde_oscuro py-5 menos-margin-50">
                      <center><p class="text-black py-3">Perspectivas</p></center>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 4) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 card1 borde_oscuro py-5 menos-margin-50">
                      <center><p class="text-black py-3">Investigaciones</p></center>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 5) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 card1 borde_oscuro py-5 menos-margin-50">
                      <center><p class="text-black py-3">Antecedentes en general</p></center>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }
}
function textAreaCard(num){
    $(".text-area-card-hijo").removeClass('bg-color');
    $(".text-area-card-hijo").removeClass('bg-color-1');
    $(".text-area-card-hijo").removeClass('bg-color-2');
    $(".text-area-card-hijo").removeClass('bg-color-3');
    $(".text-area-card-hijo").removeClass('bg-color-4');

    if (num == 1) {
        $(".text-area-card-hijo").addClass('bg-color')
        var conjunto = `
                        <div class="row px-5" id="contenido-hijo">
                            <div class="col-12 m-5 text-white">
                                <p>Previene errores o falencias que otros estudios pudiesen haber presentado.</p>
                            </div>
                        </div>
                    `;
        $("#contenido-card").html(conjunto)
    }if (num == 2) {
        $(".text-area-card-hijo").addClass('bg-color-1')
        var conjunto = `
                        <div class="row px-5" id="contenido-hijo">
                            <div class="col-12 ml-2 mt-5 text-white ">
                                <p>Instruye sobre cómo ha de desarrollarse el nuevo estudio, 
                                pues a través de este nos podemos dar cuenta de cómo se ha tratado 
                                un problema de investigación específico, por ejemplo: ¿qué clases de 
                                estudios se han realizado, los tipos de participantes, la recolección de datos,
                                los sitios de realización y los diseños utilizados, etc.</p>
                            </div>
                        </div>
                    `;
        $("#contenido-card").html(conjunto)
    }if (num == 3) {
        $(".text-area-card-hijo").addClass('bg-color-2')
        var conjunto = `
                        <div class="row px-5" id="contenido-hijo">
                            <div class="col-12 mt-5 text-white">
                                <p>Guía al investigador centrándolo en su problema de investigación.</p>
                            </div>
                        </div>
                    `;
        $("#contenido-card").html(conjunto)
    }if (num == 4) {
        $(".text-area-card-hijo").addClass('bg-color-3')
        var conjunto = `
                        <div class="row px-5" id="contenido-hijo">
                            <div class="col-12 ml-3 mt-5 text-white">
                                <p>Legitima la importancia y la necesidad de realizar dicha investigación, 
                                ya que a través de la bibliografía consultada esta le dará razones para el 
                                avance o cambio del tema de investigación.</p>
                            </div>
                        </div>
                    `;
        $("#contenido-card").html(conjunto)
    }if (num == 5) {
        $(".text-area-card-hijo").addClass('bg-color-4')
        var conjunto = `
                    <div class="row px-5" id="contenido-hijo">
                        <div class="col-12 ml-3 mt-5 text-white">
                            <p>Conlleva a la construcción de hipótesis o afirmaciones de lo que se cree 
                            se va a probar con la realización de dicha investigación y que serán comprobadas 
                            o no después de esta.</p>
                        </div>
                    </div>
                `;
        $("#contenido-card").html(conjunto)
    }if (num == 6) {
        $(".text-area-card-hijo").addClass('bg-color')
        var conjunto = `
                    <div class="row px-5" id="contenido-hijo">
                        <div class="col-12 ml-3 mt-5 text-white">
                            <p>Incentiva a la continuación de posteriores investigaciones similares, 
                            a la vez que puede establecer nuevas teorías o metodologías para su aplicabilidad, 
                            generando nuevos conocimientos.</p>
                        </div>
                    </div>
                `;
        $("#contenido-card").html(conjunto)
    }if (num == 7) {
        $(".text-area-card-hijo").addClass('bg-color-1')
        var conjunto = `
                    <div class="row px-5" id="contenido-hijo">
                        <div class="col-12 mt-5 text-white">
                            <p>Proporciona y crea marcos de referencia para la interpretación de resultados.</p>
                        </div>
                    </div>
                `;
        $("#contenido-card").html(conjunto)
    }
}
function cardImg(num,texto){
    // $("#img-1").addClass('visibility')
    // $("#img-2").addClass('visibility')
    
    if (texto == 1) {
        $(".text-2").addClass('hidden')
        var conjunto = `
                        <img src="assets/img/img_ova/busqueda-de-conocimiento.png" class="w-50 mt-3 mb-auto" id="img-2">
                        `;
        $("#card-img-big-2").html(conjunto)
    }else {
        $(".text-1").addClass('hidden')
        var conjunto = `
                        <img src="assets/img/img_ova/contrato.png" class="w-50 my-3" id="img-1">
                    `;
        $("#card-img-big-1").html(conjunto)
    }
    if (num == 1) {
        $("#img-1").addClass('hidden')
        var conjunto = `
                        <div class="row justify-content my-2 text-1" onclick="cardImg(1,1)">
                            <div class="col-12 text-white text-start">
                                <p class=""> Una revisión exhaustiva de la bibliografía sobre el estado del arte de su situación problema, 
                                    se debe revisar toda la bibliografía de la manera más completa sin dejar autores o teorías 
                                    referentes a su tema/problema de investigación, para que usted se ubique dentro del contexto 
                                    del mismo y se dé cuenta de lo que se ha hecho y de lo que usted podría hacer.
                                </p>
                            </div>
                        </div>
                    `;
        $("#card-img-big-1").html(conjunto)
    }if (num == 2) {
        $("#img-2").addClass('hidden')
        var conjunto = `
                        <div class="row justify-content my-2 text-2 m-auto" onclick="cardImg(1,2)">
                            <div class="col-12 text-white text-start">
                                <p class="p-small">La aplicación de una orientación teórica o de referencia, para que su investigación no pierda rigor científico.
                                </p>
                            </div>
                        </div>
                    `;
        $("#card-img-big-2").html(conjunto)
    }
}
function cardMedium(num){
    if (num == 1) {
        $("#img-card-medium-1").addClass('hidden')
        $(".card3-padre-1").removeClass('bg-celeste')
        $(".card3-padre-1").addClass('bg-white')
        var conjunto = `
                        <p class="p-4 p-small" id="text-car-1" style="color:black!important">Yo tengo mi propia idea de cómo guiar mi vida, mientras que otros pueden tener una idea diferente de cómo se debe guiar la vida.</p>
                        `;
        $("#card-img-medium-1").html(conjunto)

        $("#text-car-2").addClass('hidden')
        $(".card3-padre-2").removeClass('bg-white')
        $(".card3-padre-2").addClass('bg-celeste')
        var imagen = `
                    <img src="assets/img/img_ova/idea-1.png" class="w-75 p-1" id="img-card-medium-2">
                    `;
        $("#card-img-medium-2").html(imagen)
    }if (num == 2) {
        $("#img-card-medium-2").addClass('hidden')
        $(".card3-padre-2").removeClass('bg-celeste')
        $(".card3-padre-2").addClass('bg-white')
        var conjunto = `
                        <p class="p-4 p-small" id="text-car-2" style="color:black!important">Algunos creen que la vida es bien vivida si se trabaja y se consigue cada vez más dinero, mientras que otros creen que vivirla bien es viajar y trabajar más bien poco.</p>
                        `;
        $("#card-img-medium-2").html(conjunto)
        
        $(".card3-padre-1").removeClass('bg-white')
        $(".card3-padre-1").addClass('bg-celeste')
        $("#text-car-1").addClass('hidden')
        var imagen = `
                    <img src="assets/img/img_ova/idea.png" class="w-75 p-1" id="img-card-medium-1">
                    `;
        $("#card-img-medium-1").html(imagen)
    }
}
function simbolosShadow(num){
    if (num == 1) {
        // $("#img-card-medium-1").addClass('hidden')
        // $(".card3-padre-1").removeClass('bg-celeste')
        // $(".card3-padre-1").addClass('bg-white')
        var conjunto = `
                        <div class="col-8 card4 text-center bg-white border-default px-5 py-3">
                            <p>¿El para qué?</p>
                        </div>
                        `;
        $("#info-card-hijo").html(conjunto)
    }if (num == 2) {
        // $("#img-card-medium-2").addClass('hidden')
        // $(".card3-padre-2").removeClass('bg-celeste')
        // $(".card3-padre-2").addClass('bg-white')
        var conjunto = `
                        <div class="col-8 card4 text-center bg-white border-default px-5 py-3">
                            <p>¿El cómo?</p>
                        </div>
                        `;
        $("#info-card-hijo").html(conjunto)
    }if (num == 3) {
        // $("#img-card-medium-2").addClass('hidden')
        // $(".card3-padre-2").removeClass('bg-celeste')
        // $(".card3-padre-2").addClass('bg-white')
        var conjunto = `
                        <div class="col-8 card4 text-center bg-white border-default px-5 py-3">
                            <p>¿El cuándo ocurre un fenómeno?</p>
                        </div>
                        `;
        $("#info-card-hijo").html(conjunto)
    }
}
function cardActividad(num){
    if (num == 1) {
        $(".card-actividad").removeClass('col-12')
        $(".card-actividad").addClass('col-4')
        var conjunto = `
                        <h6>Sugerencia de lectura:</h6>
                        <p>Para una mayor comprensión del tema visto, amplíe la idea de exploración de la literatura con el siguiente texto: <i><b>Lectura y escritura en la investigación. </b></i></p>
                        <p><a href="assets/PDF/UNIDAD1/Lectura-y-escritura-en-la-investigación.pdf" target="_blank">Lectura-y-escritura-en-la-investigación.pdf</a>
            `;
        $("#card-actividad-text").html(conjunto)
    }if (num == 2) {
        $(".card-actividad-2").removeClass('col-12')
        $(".card-actividad-2").addClass('col-4')
        var conjunto = `
                        <h6>Sugerencia de lectura:</h6>
                        <p>Para una mayor comprensión del tema visto, amplíe la idea de exploración de la literatura; no es necesario que se limite a un referente bibliográfico en particular, la elección es personal.</p>
            `;
        $("#card-actividad-text-2").html(conjunto)
    }
}
function fuentesBiblio(num,ventana){
    if (ventana==0) {
        $("#contenido-fuentes2").addClass('hidden')
        var conjunto = `<div class="row" id="contenido-fuentes1">
                            <div class="col-4" onclick="fuentesBiblio(1,1)">
                                <div class="d-flex justify-content-center">
                                    <div class="imgUnidad6 bg-celeste rounded-circle p-3 text-center w-50">
                                        <img src="assets/img/img_ova/carpeta.png" class="w-50 p-2">
                                    </div>
                                </div>
                                <div class="textUnidad6 bg-celeste border-default text-center p-3 menos-margin-25">
                                    <h5>Fuentes primarias</h5>
                                </div>
                            </div>
                            <div class="col-4" onclick="fuentesBiblio(2,1)">
                                <div class="d-flex justify-content-center">
                                    <div class="imgUnidad6 bg-celeste rounded-circle p-3 text-center w-50">
                                        <img src="assets/img/img_ova/archivo.png" class="w-50 p-2">
                                    </div>
                                </div>
                                <div class="textUnidad6 bg-celeste border-default text-center p-3 menos-margin-25">
                                    <h5>Fuentes secundarias</h5>
                                </div>
                            </div>
                            <div class="col-4" onclick="fuentesBiblio(3,1)">
                                <div class="d-flex justify-content-center">
                                    <div class="imgUnidad6 bg-celeste rounded-circle p-3 text-center w-50">
                                        <img src="assets/img/img_ova/dosier.png" class="w-50 p-2">
                                    </div>
                                </div>
                                <div class="textUnidad6 bg-celeste border-default text-center p-3 menos-margin-25">
                                    <h5>Fuentes terciarias</h5>
                                </div>
                            </div>
                        </div>`;
        $("#contenido-fuentes-padre").html(conjunto)
    }
    if (ventana==1) {
        if (num == 1) {
            $("#contenido-fuentes2").addClass('hidden')
            var conjunto = `
                            <div class="row mt-5" id="contenido-fuentes2" style="min-height:300px;">
                                <div class="col-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-12 bg-celeste height16"></div>
                                        <div class="col-4 menos-margin-60" onclick="fuentesBiblio(1,0)">
                                            <div class="d-flex justify-content-center">
                                                <div class="imgUnidad6 bg-celeste rounded-circle p-3 text-center w-50 menos-margin-l-100">
                                                    <img src="assets/img/img_ova/carpeta.png" class="w-50 p-2">
                                                </div>
                                            </div>
                                            <div class="textUnidad6 bg-celeste border-default text-center p-3 menos-margin-70 menos-margin-r-100 ml-5">
                                                <h5>Fuentes primarias</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-8 bg-white border-default p-5">
                                            <img class="cursor cerrar16" src="assets/img/img_ova/btn_closed.png" onclick="fuentesBiblio(1,0)">
                                            <p>Proporcionan datos de primera mano, son documentos que contienen resultados de estudios. 
                                                Ejemplos: libros, artículos de revistas científicas y ponencias o trabajos presentados 
                                                en congresos, simposios y otros eventos similares.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;
            $("#contenido-fuentes-padre").html(conjunto)
        }if (num == 2) {
            $("#contenido-fuentes2").addClass('hidden')
            var conjunto = `
                            <div class="row mt-5" id="contenido-fuentes2" style="min-height:300px;">
                                <div class="col-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-12 bg-celeste height16"></div>
                                        <div class="col-4 menos-margin-60" onclick="fuentesBiblio(1,0)">
                                            <div class="d-flex justify-content-center">
                                                <div class="imgUnidad6 bg-celeste rounded-circle p-3 text-center w-50 menos-margin-l-100">
                                                    <img src="assets/img/img_ova/archivo.png" class="w-50 p-2">
                                                </div>
                                            </div>
                                            <div class="textUnidad6 bg-celeste border-default text-center p-3 menos-margin-70 menos-margin-r-100 ml-5">
                                                <h5>Fuentes secundarias</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-8 bg-white border-default p-5">
                                            <img class="cursor cerrar16" src="assets/img/img_ova/btn_closed.png" onclick="fuentesBiblio(1,0)">
                                            <p>Son listas, compilaciones y resúmenes de referencias o fuentes primarias, es decir, reprocesos
                                             de información de primera mano. Las referencias se presentan alfabéticamente según la clasificación 
                                             que se utilice para ordenarlas: por autor, por tema, por fecha o por área de conocimiento.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;
            $("#contenido-fuentes-padre").html(conjunto)
        }if (num == 3) {
            $("#contenido-fuentes2").addClass('hidden')
            var conjunto = `
                            <div class="row mt-5" id="contenido-fuentes2" style="min-height:300px;">
                                <div class="col-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-12 bg-celeste height16"></div>
                                        <div class="col-4 menos-margin-60" onclick="fuentesBiblio(1,0)">
                                            <div class="d-flex justify-content-center">
                                                <div class="imgUnidad6 bg-celeste rounded-circle p-3 text-center w-50 menos-margin-l-100">
                                                    <img src="assets/img/img_ova/dosier.png" class="w-50 p-2">
                                                </div>
                                            </div>
                                            <div class="textUnidad6 bg-celeste border-default text-center p-3 menos-margin-70 menos-margin-r-100 ml-5">
                                                <h5>Fuentes terciarias</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-8 bg-white border-default p-5">
                                            <img class="cursor cerrar16" src="assets/img/img_ova/btn_closed.png" onclick="fuentesBiblio(1,0)">
                                            <p>Son documentos donde se registran referencias a otros documentos de características diversas. 
                                            Son útiles para detectar fuentes no documentales como organizaciones que realizan o financian estudios, 
                                            asociaciones científicas, entre otras. (Danhke, 1989).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;
            $("#contenido-fuentes-padre").html(conjunto)
        }
    }
}