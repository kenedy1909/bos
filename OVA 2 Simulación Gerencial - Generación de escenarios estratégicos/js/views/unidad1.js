$( document ).ready(function() {
    paso = false;
    $('.menu1').removeClass('d-none');
    $('.menu1').addClass('c-show');
    $( ".zoomContainer" ).remove();
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

    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        
        console.log(e);
        controlSlides(stepIndex+0);
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
    slide_predeterminado();
    $(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
        // actualizarprogress();

    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
        // actualizarprogress();
    });
    
   knob = document.querySelector('.custom-scrollbar__knob_U2_1');
    bar = document.querySelector('.custom-scrollbar__bar_U2_1');
    container = document.querySelector('.custom-scrollbar__inner_U2_1');
    scroll();

    slide_link(tema);
    
document.addEventListener("keydown",
function(event) {
    switch (event.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            slide(1);

            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            slide(1);

            break;
    }
}
);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex+1);
    actualizarprogress(stepIndex+1);
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
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Introducción a la Planeación estratégica");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Introducción a la Planeación estratégica");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Introducción a la Planeación estratégica");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Introducción a la Planeación estratégica");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Desarrollo de las etapas de la Planeación Estratégica");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Desarrollo de las etapas de la Planeación Estratégica");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Desarrollo de las etapas de la Planeación Estratégica");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Planeación estratégica");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Planeación estratégica");
             
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Planeación estratégica");
            
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Planeación estratégica");
            
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos","Planeación estratégica");
            
            break;

        case 13:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Generación de escenarios estratégicos", "Métodos y Herramientas de la Planeación estratégica");
            
            break;
        default:
            break;
    }
}

function vinetas(num){
    switch (parseInt(num)) {
        case 1:
            $('.vineta').addClass('inactive');
            $('.vineta').removeClass('active');

            $('.vineta1').removeClass('inactive');
            $('.vineta1').addclass('active');
            break;
        case 2:
            $('.vineta').addClass('inactive');
            $('.vineta').removeClass('active');

            $('.vineta2').removeClass('inactive');
            $('.vineta2').addclass('active');
            break;
        default:
            break;
    }
}

function infoactivi(num){
    switch (parseInt(num)) {
        case 1:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue1').removeClass('inactive');
            $('.infoblue1').addclass('active');
            break;
        case 2:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue2').removeClass('inactive');
            $('.infoblue2').addclass('active');
            break;
        case 3:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue3').removeClass('inactive');
            $('.infoblue3').addclass('active');
            break;
        default:
            break;
    }
}

function objetivos(num){
    switch (parseInt(num)) {
        
        case 1:
            $('.visible1').css({'visibility': 'visible'});
            break;
        case 2:
            $('.visible2').css({'visibility': 'visible'});
            break;
        case 3:
            $('.visible3').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}
function infoactivi2(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue1').removeClass('inactive');
            $('.infoblue1').addclass('active');
            break;
        case 2:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue2').removeClass('inactive');
            $('.infoblue2').addclass('active');
            break;
        case 3:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue3').removeClass('inactive');
            $('.infoblue3').addclass('active');
            break;
        default:
            break;
    }
}

function planeasion(num){
    switch (parseInt(num)) {
        
        case 1:
            $('.targetasFondo').addClass('escondido');
            $('.targetasFondo').removeClass('mostrado');

            $('.targetaF1').removeClass('escondido');
            $('.targetaF1').addclass('mostrado');
            break;
        case 2:
            $('.targetasFondo').addClass('escondido');
            $('.targetasFondo').removeClass('mostrado');

            $('.targetaF2').removeClass('escondido');
            $('.targetaF2').addclass('mostrado');
            break;
        case 3:
            $('.targetasFondo').addClass('escondido');
            $('.targetasFondo').removeClass('mostrado');

            $('.targetaF3').removeClass('escondido');
            $('.targetaF3').addclass('mostrado');
            break;
        default:
            break;
    }
}

function recoger(num){
    switch (parseInt(num)) {
        
        case 1:
            $('.reco1').addClass('recogido');
            $('.reco1').removeClass('abierto');

            var text = `<div class="row">
                            <div style="width: 20%;">
                                <img src="assets/img/img_ova/ACTIVIDAD4.png" style="max-width: 90%;">
                            </div>
                            <div style="padding: 12px 0px 3px 30px;"><b style="color: white;">ACTIVIDAD 1</b></div>
                        </div> `;

            $('.reco1').html(text);
            break;
        case 2:
            $('.reco2').addClass('recogido');
            $('.reco2').removeClass('abierto');

            var text = `<div class="row">
                            <div style="width: 20%;">
                                <img src="assets/img/img_ova/ACTIVIDAD2.png" style="max-width: 90%;">
                            </div>
                            <div style="padding: 12px 0px 3px 30px;"><b style="color: white;">ACTIVIDAD 2</b></div>
                        </div> `;

            $('.reco2').html(text);
            break;
        case 3:
            $('.reco3').addClass('recogido');
            $('.reco3').removeClass('abierto');

            var text = `<div class="row">
                            <div style="width: 20%;">
                                <img src="assets/img/img_ova/ACTIVIDAD3.png" style="max-width: 90%;">
                            </div>
                            <div style="padding: 12px 0px 3px 30px;"><b style="color: white;">ACTIVIDAD 3</b></div>
                        </div>`;

            $('.reco3').html(text);
            break;
        default:
            break;
    }
}

function funcionalidad_1(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/DIAGNOSTICO1.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <p class="p_black justificado">Cuando se define la intencionalidad es necesario empezar por definir los intereses que se tienen; como el análisis de problemáticas que no son aisladas de las dificultades que no fueron identificadas con anterioridad denominadas “pandillas” al referirnos a esas  problemáticas. Para atenderlas será mucho más fácil y efectivo si se han identificado plenamente la confluencia de problemas que las integran y para esto es necesario:</p>
                                                `);
            break;
        case 2:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/INVENTARIO.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <ul class="p_black">
                                                    <li>Realizar un inventario ordenado de problemas o situaciones desfavorables identificadas.</li>
                                                    <li>Agrupar o separar las problemáticas identificadas para lograr la clasificación de las situaciones, teniendo en cuenta la disponibilidad y la calidad de la información relacionada con sus intereses. (Valdez.2010).</li>
                                                </ul>
                                                `);
            break;
        case 3:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/problema.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <ul class="p_black">
                                                    <li>Priorizar los problemas encontrados que implica ordenar jerárquicamente las diferentes categorías de los problemas según la importancia que se les asigne.</li>
                                                    <li>Integrar los análisis al identificar cada una de las causas del problema seleccionado de tal forma que se tenga una comprensión integral del problema.</li>
                                                </ul>
                                                `);
            break;
        case 4:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/DIAGRAMA(1).png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <p class="p_black justificado">Para la elaboración de un diagnóstico estratégico, se tienen en cuenta una serie de estrategias que se refieren a cómo lograr los objetivos. Se debe realizar un estudio y un análisis, tanto interno como externo de la organización que permita conocer a fondo, tanto las debilidades como las fortalezas, las oportunidades y las amenazas (Valdez.2010), por medio de una Matriz DOFA donde por la asociación de estas variables se obtendrán una serie de resultados aplicables a la empresa.</p>
                                                `);
            break;
        case 5:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/VALORES.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <p class="p_black justificado">El diagnóstico empresarial debe de ser el análisis integral de todas las variables que influyen en el posicionamiento de la empresa y las variables que le generan afectación también.</p>
                                                <br>
                                                <p class="p_black justificado">Los diagnósticos deben contener la integración funcional de todas las áreas, que permita obtener una visión del sistema para poder tener un acercamiento a la posible solución. Con la inclusión de un  análisis financiero hasta el estudio del entorno interno y externo de la organización, haciendo uso de las múltiples herramientas existentes.</p>
                                                `);
            break;
        default:
            break;
    }
}

function funcionalidad_2(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('#info_funcionalidad_2_1').html(`
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/ACTIVIDAD 4.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10">
                                                  <ul class="p_black">
                                                      <li>Hacer una lista de las fortalezas internas claves.</li>
                                                      <li>Hacer una lista de las debilidades internas decisivas.</li>
                                                      <li>Hacer una lista de las oportunidades externas importantes.</li>
                                                      <li>Hacer una lista de las amenazas externas claves.</li>
                                                      <li>Las fortalezas internas con las oportunidades externas conforman las estrategias FO resultantes en la casilla apropiada.</li>
                                                  </ul>
                                                </div>
                                                `);
            break;
        case 2:
            $('#info_funcionalidad_2_1').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado"">Básicamente, este instrumento se utiliza con el fin de formular estrategias, resumir y evaluar las fortalezas y debilidades más importantes dentro de las áreas más funcionales de la organización. Además, ofrece una base para identificar y evaluar las relaciones entre dichas áreas (Gomez.2009).</p>
                                                  <br>
                                                  <p class="p_black justificado"">Este es el proceso que se le puede llamar desarrollo de auditoría interna y representa una oportunidad para todos los agentes y empleados de participar en la determinación del futuro de la empresa.</p>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/ESTRATEGIA2.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 3:
            $('#info_funcionalidad_2_2').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado">Las cifras no son mágicas y el objetivo no es obtener una sola cifra, sino más bien asimilar y evaluar la información de manera significativa con la finalidad de apoyar la toma de decisiones. Debemos tener en cuenta la incertidumbre, mediante la identificación de las oportunidades y amenazas en el entorno, y se puede anticipar lo que otros actores pueden hacer y que puedan afectar la empresa.</p>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/LISTA.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 4:
            $('#info_funcionalidad_2_2').html(`
                                                <div class="col-md-12">
                                                    <img src="assets/img/img_ova/Imagen3.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 5:
            $('#info_funcionalidad_2_3').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado">La Matriz DOFA puede emplear tipología de estrategias las cuales se describen a continuación, así:</p>
                                                  <ul class="p_black">
                                                      <li>Las oportunidades que se aprovechan con las fortalezas originan estrategias ofensivas.</li>
                                                      <li>Las que se deben de enfrentar teniendo debilidades generan estrategias adaptativas.</li>
                                                      <li>Las amenazas que se enfrentan con fortalezas originan estrategias reactivas.</li>
                                                  </ul>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/matriz 1.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 6:
            $('#info_funcionalidad_2_3').html(`
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/matriz2.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10">
                                                  <ul class="p_black">
                                                      <li>Mientras que las enfrentadas con debilidades generan estrategias defensivas.</li>
                                                      <li>Al momento de cotejar las debilidades internas con las oportunidades externas y registrar las estrategias DO resultantes.</li>
                                                      <li>Comparar las fortalezas internas con las amenazas externas y registrar las estrategias FA resultantes.</li>
                                                  </ul>
                                                </div>
                                                `);
            break;
        case 7:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado">Ahora para formular estrategias a raíz de la Matriz DOFA se describirán cada una de las posibilidades, lo que define cada una de ellas y cuál es el campo de aplicación. enfocándose solo en los factores claves de éxito para la organización, así:</p>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/matriz3.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 8:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/FO.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">En ellas se usan las fuerzas o fortalezas internas de la empresa para aprovechar la ventaja de las oportunidades externas. Por regla general, las organizaciones siguen a las estrategias de DO, FA o DA para colocarse en una situación donde puedan aplicar estrategias FO. (Porter.2009).</p>
                                                </div>
                                                `);
            break;
        case 9:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">Pretenden superar las debilidades internas aprovechando las oportunidades externas. (Porter.2009).</p>
                                                </div>
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/DO.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 10:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/FA.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">Aprovechan las fortalezas de la empresa para evitar o disminuir las repercusiones de las amenazas externas. (Porter.2009).</p>
                                                </div>
                                                `);
            break;
        case 11:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">Son tácticas defensivas que pretenden disminuir las debilidades internas y evitar las amenazas del entorno. (Porter.2009).</p>
                                                </div>
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/DA.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        default:
            break;
    }
}
function scroll_uno() {
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}
function scroll_dos() {
    knob = document.querySelector('.custom-scrollbar__knob_dos');
    bar = document.querySelector('.custom-scrollbar__bar_dos');
    container = document.querySelector('.custom-scrollbar__inner_dos');
    scroll();
}
function scroll_tres() {
    knob = document.querySelector('.custom-scrollbar__knob_tres');
    bar = document.querySelector('.custom-scrollbar__bar_tres');
    container = document.querySelector('.custom-scrollbar__inner_tres');
    scroll();
}

function globos(num){
    switch (parseInt(num)) {
        
        case 1:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo1').removeClass('inactive');
            $('.globo1').addclass('active');
            break;
        case 2:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo2').removeClass('inactive');
            $('.globo2').addclass('active');
            break;
        case 3:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo3').removeClass('inactive');
            $('.globo3').addclass('active');
            break;
        case 4:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo4').removeClass('inactive');
            $('.globo4').addclass('active');
            break;
        default:
            break;
    }
}

function flecha_abajo(num) {
    switch (parseInt(num)) {
        case 1:
            $('.triangulocordeon').removeClass('abajo');
            $('.triangulo1').addClass('abajo');
            break;
        case 2:
            $('.triangulocordeon').removeClass('abajo');
            $('.triangulo2').addClass('abajo');
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

function paraIframe(num){
    switch (parseInt(num)) {
        case 0:
            $('.vid').attr('src', $('.vid').attr('src'));
            break;
        case 1:
            $('.vid1').attr('src', $('.vid1').attr('src'));
            break;
        case 2:
            $('.vid2').attr('src', $('.vid2').attr('src'));
            break;
        case 3:
            $('.vid3').attr('src', $('.vid3').attr('src'));
            break;
        case 4:
            $('.vid4').attr('src', $('.vid4').attr('src'));
            break;
        case 5:
            $('.vid5').attr('src', $('.vid5').attr('src'));
            break;
        case 6:
            $('.vid6').attr('src', $('.vid6').attr('src'));
            break;
        default:
            break;
    }
    
}
