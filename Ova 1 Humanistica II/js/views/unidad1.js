$( document ).ready(function() {
    
    console.log(tema);
    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});  
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

    slide_predeterminado();
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

    $(".citar").on('click', citar);
    funcion_vanvas();
    
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
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Importancia de la formación humanística");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob');
            bar = document.querySelector('.custom-scrollbar__bar');
            container = document.querySelector('.custom-scrollbar__inner');
            /*scroll();*/
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Importancia de la formación humanística");            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Importancia de la formación humanística");
            
            break;
        case 4:
            $("#cont_imp").html('');
            $('.triangulo_indica').css({ "visibility": "hidden"
                            
                        });
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
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
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 7:
            
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 8:
            var contenido = `<p class="color-text">Clic en el ícono para visualizar información</p>`;
            $('.imprime_heare').html(contenido);
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 9:
            $('.p_9c').html('<p>Clic en cada círculo para visualizar la información</p>');
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 13:
            $('.wite_ban_13').css({ "background": "transparent"
                    
                });
            $('.pant13').html('');
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Función social de la universidad");
            break;
        case 16:
            $('.pantallas16').html('');
            $('.16_imprime').html('<p style="float: right;">Clic para ampliar la información</p>');
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            /*$("#content-ova").load("base/unidades/unidad2.html");
            tema = 1;*/
            break;
        case 17:
            var img = `
            <img src="assets/img/img_ova/imagen5.png">

            <div class="brazos cursor" onclick="img_17(1);" style=""></div>
            <div class="pantalla cursor" onclick="img_17(2);" style=""></div>
            <div class="taza cursor" onclick="img_17(3);" style=""></div>
            <div class="calculadora cursor" onclick="img_17(4);" style=""></div>
            <div class="cuaderno cursor" onclick="img_17(5);" style=""></div>
            <div class="regla cursor" onclick="img_17(6);" style=""></div>`;
            $('.armada').html(img);
            $('.banner_17').html('');
            $('.banner_17').css({'visibility': 'hidden'});
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 20:
            $('.pant20').html(text);
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 22:
            $('.imp_21delete').html('');
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 25:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 26:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística", "Formación humanística en el contador");
            break;
        default:
            break;
    }
}

function imprime16(){
    var text = `
            <div style="padding: 28px 25px 25px 25px;">
              <p class="justificado">No obstante, los perfiles de formación profesionales y ocupacionales de los contadores públicos, continúan estando orientados a responder con suficiencia a las demandas empresariales más que a las sociales, por tanto se considera fundamental revisar de manera reflexiva las intenciones formativas, los fines y usuarios de la formación contable y los propósitos y filosofías institucionales como aspectos que posibilitan la incorporación de las dimensiones no incluidas en la educación contable tradicional.</p>
              <button class="btn btnpant16" data-toggle="modal" data-target="#modaltable">ver</button>
            </div>
    `;
    $('.16_imprime').html(text);
}
function scroll_p10(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob10');
    bar = document.querySelector('.custom-scrollbar__bar10');
    container = document.querySelector('.custom-scrollbar__inner10');
    scroll();
}

function scroll_p11(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob11');
    bar = document.querySelector('.custom-scrollbar__bar11');
    container = document.querySelector('.custom-scrollbar__inner11');
    scroll();
}

function scroll_p12(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob12');
    bar = document.querySelector('.custom-scrollbar__bar12');
    container = document.querySelector('.custom-scrollbar__inner12');
    scroll();
}
function scroll_p13(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob13');
    bar = document.querySelector('.custom-scrollbar__bar13');
    container = document.querySelector('.custom-scrollbar__inner13');
    scroll();
}
function scroll_p14(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob14');
    bar = document.querySelector('.custom-scrollbar__bar14');
    container = document.querySelector('.custom-scrollbar__inner14');
    scroll();
}

function scroll_p21(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar15">
                    <div class="custom-scrollbar__inner15">
                      <p class="font_15 justificado" style="margin-left: 10px;">En este contexto, el Manual del Código de Ética para Profesionales de la Contabilidad contiene información que proporciona al contador elementos para responder ante las amenazas «del cumplimiento de los principios fundamentales,es decir, a los hechos que ponen en riesgo del incumplimiento de los principios fundamentales (integridad, objetividad, diligencia y competencia profesional, confidencialidad, y comportamiento profesional).</p>
                    </div>
                    <div class="custom-scrollbar__bar15">
                      <div class="custom-scrollbar__knob15 cursor">
                        <p class="text-center linea_scroll15">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-1').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob15');
    bar = document.querySelector('.custom-scrollbar__bar15');
    container = document.querySelector('.custom-scrollbar__inner15');
    scroll();
}
function scroll_p22(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar16">
                    <div class="custom-scrollbar__inner16">
                      <p class="font_16 justificado" style="margin-left: 10px;">
                        El Código asiste al contador para cumplir con responsabilidad y lo orienta hacia el interés público, establece diferentes escenarios para reconocer las amenazas, para evaluarlas (párrafo 120.7) y para eliminarlas, esto incluye el probable conflicto de interés (párrafo 120.10).
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar16">
                      <div class="custom-scrollbar__knob16 cursor">
                        <p class="text-center linea_scroll16">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-2').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob16');
    bar = document.querySelector('.custom-scrollbar__bar16');
    container = document.querySelector('.custom-scrollbar__inner16');
    scroll();
}
function scroll_p23(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar17">
                    <div class="custom-scrollbar__inner17">
                      <p class="font_16 justificado" style="margin-left: 10px;">
                        De acuerdo con Jiménez (2018), el interés público en esta corriente atribuye condiciones éticas, regida por los organismos internacionales de contabilidad y las normas emanadas por la regulación contable, de esta forma, la ética que se constituye para la actuación profesional en las organizaciones y el concepto de interés público que comparten los contadores y auditores y, que está ampliamente aceptado, es el de proteger los derechos de los inversionistas y acreedores.
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar17">
                      <div class="custom-scrollbar__knob17 cursor">
                        <p class="text-center linea_scroll17">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-3').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob17');
    bar = document.querySelector('.custom-scrollbar__bar17');
    container = document.querySelector('.custom-scrollbar__inner17');
    scroll();
}
function scroll_p24(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    $('.imp_21delete').html('');
    var cont = `<div class="content custom-scrollbar18">
                    <div class="custom-scrollbar__inner18">
                      <p class="font_16 justificado" style="margin-left: 10px;">
                        Expresiones como ética, confianza, responsabilidad social empresarial y corporativa, seguimiento a estándares de información financiera, son acepciones que trabajan insistentemente los organismos internacionales (IFAC; IASB; FASB) en búsqueda de la legitimación del interés público, que podría constituirse en una ideología, en este sentido Baker (2009) manifiesta que “la ideología es entendida como un conjunto de ideas que reflejan los intereses de un grupo o clase particular y, no necesariamente de una clase dominante o gobernante”.
                      </p>
                    </div>
                    <div class="custom-scrollbar__bar18">
                      <div class="custom-scrollbar__knob18 cursor">
                        <p class="text-center linea_scroll18">-</p>
                      </div>
                    </div>
                  </div>`;
    $('.imp21-4').html(cont);
    knob = document.querySelector('.custom-scrollbar__knob18');
    bar = document.querySelector('.custom-scrollbar__bar18');
    container = document.querySelector('.custom-scrollbar__inner18');
    scroll();
}

function pantalla9(num){
    switch (parseInt(num)) {
        case 1:
            var text = `<div class="p9_cont">
                      <p class="justificado">Reflexionar contemplando y analizando aspectos de la política que influyen en el país</p>
                    </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_1').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 2:
            var text = `<div class="p9_cont">
                          <p class="justificado">Reconocer al otro como semejante a sí mismo, extendiendo respeto y dejando de lado distintivos de raza, religión, género u otros y entendiendo que el otro no es un medio para llegar a un fin.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_2').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 3:
            var text = `<div class="p9_cont">
                          <p class="justificado">Imaginar la cantidad de características que contemplan el desarrollo de una vida, donde existen diferentes momentos como la infancia y adolescencia y aspectos como la enfermedad y la muerte</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_3').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 4:
            var text = `<div class="p9_cont">
                          <p class="justificado">Emitir un juicio crítico sobre quienes gobiernan un país, manteniendo una idea realista de los recursos y posibilidades que tiene a su alcance.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_4').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 5:
            var text = `<div class="p9_cont">
                          <p class="justificado">Concebir su Estado como algo complejo que en determinadas situaciones debe acudir a soluciones provenientes de lo externo o internacional.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_5').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        default:
            break;
    }
}

function citar(){
    var contenido = `<div style="height: 248px;background: white;border-radius: 50px;padding: 25px 35px 35px 35px;">
                    <p class="justificado">Como lo menciona López (2010), la importancia de la democracia trasciende el solo hecho de contar con un sistema político que permita el voto para  elección de representantes, pues la forma en que ese sistema se desarrolle genera influencia en las condiciones y estilo de vida de los ciudadanos; es por esto que no debería considerarse democracia únicamente la opción de voto, sino el hecho de facilitar espacios de participación  donde las personas logren ejercer un rol activo y que incluso sean los ciudadanos quienes formulen los modos de participación.</p>
                  </div>`;
    $('.imprime_heare').html(contenido);
}

function imprime(num) {
    var text = '';
    var cont = 0;
    switch (parseInt(num)) {
        case 1:
            text = `<p class="justificado">La universidad, según Houssay (1941) desempeña un papel principal en la formación del ser humano, aunque indica el mismo autor, que ha faltado a su rol en el sentido de reducirse a la transmisión de conocimientos y no avanzar a la instrucción y formación de hombres y mujeres capaces de dar respuesta a las exigencias de un mundo que se encuentra en constante cambio, y capaces al tiempo de generar transformaciones en dirección al progreso de la sociedad.</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"
                    
                });
            cont = 1;
            break;
        case 2:
            text= `<p class="justificado">Comprendiendo lo anterior, es necesario como señala Esquivel (2004) esclarecer la connotación de educar, en este sentido, menciona que educar y ser se encuentran vinculados, pues ambos abarcan aspectos de cultura, vida, pensamiento y demás; de esta manera, en sus palabras “se educa para ser y se es en tanto se es educado” (p. 310).</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"
                    
                });
            cont = 2;
            break;
        case 3:
            text = `<p class="justificado">Así, la educación y principalmente la superior (universitaria), debe contribuir a una formación integral que desarrolle y fortalezca en el ser humano la capacidad de observar y criticar desde su propio juicio, considerando principios como la libertad, la creatividad y el amor, los cuales según Nussbaum (2010).</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"
                    
                });
            cont = 3;
            break;
        case 4:
            text = `<p class="justificado">Son fundamentales para la democracia (en la que los estudiantes deben participar con conocimiento y de manera activa, y esta participación, dada por la formación de una educación superior que los hace competentes); sin embargo, señala la autora que, en la actualidad, aunque libertad, amor y creatividad son fundamentales para el desarrollo del pensamiento crítico, se han olvidado relegando su importancia en el proceso de educación.</p>`; 
            $('.triangulo_indica').css({ "visibility": "hidden"
                    
                });
            cont = 4;
            break;
        case 5:
            text =  `<p class="justificado">A lo anterior, Nussbaum (2010) lo ha denominado “crisis silenciosa” por considerar que sucede de manera desapercibida para la sociedad, siendo así el hombre despojado de su capacidad de participación y reduciéndolo a una simple utilidad.</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"
                    
                });
            cont = 5;
            break;
        case 6:
            text = `<p class="justificado">Todo lo anterior, para fundamentar la importancia de la educación en el vivir del individuo, pues a la vez que una universidad tiene como compromiso el educar, también debe desempeñar el rol de formar, entendiendo que la educación repercute directamente en el estilo de vida; en palabras de Esquivel (2004) “se educa para ser y se vive de acuerdo con cómo se es” (p. 310).</p>`;
            $('.triangulo_indica').css({ "visibility": "hidden"
                    
                });
            cont = 6;
            break;
        default:
            break;
    }
    $("#cont_imp").html(text);
    $('.triangulo_indica'+cont+'').css({ "visibility": "visible"
                    
                });
}

function pantalla6(num){
    switch (parseInt(num)){
        case 1:
            var texto = `<p style="font-size: 13px;" class="justificado">El origen de la palabra democracia viene del griego y su significado es “gobierno del pueblo” o “gobierno popular” (Rodríguez, 2010.), comprendiendo que la palabra hace referencia a un sistema político</p>`;
            $('.banne_white').html(texto);
            $('.triangulo_yellow').css({ "visibility": "visible"});
            $('.tria_blue1').css({ "visibility": "hidden"});
            $('.tria_blue2').css({ "visibility": "hidden"});
            break;
        case 2:
            var texto = `<p style="font-size: 13px;" class="justificado">Era la figura de función política permanente, los pertenecientes a este grupo se elegían cada año por los ciudadanos que contaran con edad mayor a treinta. Entre sus funciones se encontraba preparar las sesiones de la asamblea y el correspondiente orden del día; en aquel tiempo, todo caso debía ser evaluado inicialmente por este consejo para luego ser atendido por la asamblea, así mismo, eran encargados de validar el cumplimiento de los requisitos por parte de quienes integrarían los grupos del gobierno.</p>`;
            $('.boder_white_baner').html(texto);
            $('.triangulo_yellow').css({ "visibility": "hidden"});
            $('.tria_blue1').css({ "visibility": "visible"});
            $('.tria_blue2').css({ "visibility": "hidden"});
            break;
        case 3:
            var texto = `<p style="font-size: 13px;" class="justificado">Este grupo era la concentración real del poder político y a su vez el más reconocido, ya que, en él todas las personas con pleno derecho para ejercer participación, tenían potestad de votar en los diversos temas expuestos que previamente habían sido validados por el consejo. Aunque el número de personas que podían asistir y dar su voto era alto, la asistencia real no lo era, lo cual no se distancia mucho de la situación en la actualidad.</p>`;
            $('.boder_white_baner').html(texto);
            $('.triangulo_yellow').css({ "visibility": "hidden"});
            $('.tria_blue1').css({ "visibility": "hidden"});
            $('.tria_blue2').css({ "visibility": "visible"});
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
    var canvas = new fabric.Canvas('canvas_unid1');
    var imgElement = 'assets/img/img_ova/1.png';
    var imgElement2 = 'assets/img/img_ova/2.png'; 
    var imgElement3 = 'assets/img/img_ova/3.png';
    var imgElement4 = 'assets/img/img_ova/4.png';
    var imgElement5 = 'assets/img/img_ova/5.png';
    var imgElement6 = 'assets/img/img_ova/6.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=110;
        oImg.top=-10;
        oImg.scaleToHeight(50);
        oImg.scaleToWidth(50);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            pantalla13(1);            
        });
        oImg.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=210;
        oImg2.top=20;
        oImg2.scaleToHeight(50);
        oImg2.scaleToWidth(50);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            pantalla13(2);            
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=245;
        oImg3.top=80;
        oImg3.scaleToHeight(50);
        oImg3.scaleToWidth(50);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            pantalla13(3);           
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=260;
        oImg4.top=150;
        oImg4.scaleToHeight(50);
        oImg4.scaleToWidth(50);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() { 
            pantalla13(4);           
        });
        oImg4.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=230;
        oImg5.top=220;
        oImg5.scaleToHeight(50);
        oImg5.scaleToWidth(50);
        oImg5.selectable = false;
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito4").modal("show"); 
            pantalla13(5);           
        });
        oImg5.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=120;
        oImg6.top=260;
        oImg6.scaleToHeight(50);
        oImg6.scaleToWidth(50);
        oImg6.selectable = false;
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            pantalla13(6);           
        });
        oImg6.on('mousemove', function() {
          console.log('hover a circle');
          
        });
    });
}

function pantalla13(num){
    switch (parseInt(num)) {
        case 1:
            var text = `<p class="justificado">En lo anterior se diferencia entonces la visión tradicional que menciona únicamente los aspectos económicos como factores que condicionan el desarrollo y la percepción de ser países con un mejor nivel de calidad de vida</p>`;
            $('.wite_ban_13').css({ "background": "white"
                    
                });
            $('.pant13').html(text);
            break;
        case 2:
            var text = `<p class="justificado">Las posturas menos tradicionales proporcionan una mayor participación a los Gobiernos en la posibilidad de garantizar confianza y mejora en las condiciones de vida de la población; es así como Piketty, Stiglitz, entre otros autores institucionalistas otorgan un rol protagónico no sólo a la existencia sino también a la participación ciudadana en las decisiones que la política pública genera sobre las posibilidades de desarrollo de los países.</p>`;
            $('.wite_ban_13').css({ "background": "white"
                    
                });
            $('.pant13').html(text);
            break;
        case 3:
            var text = `<p class="justificado">Sin embargo, la representación de la realidad como la complejidad de la vida social, arroja a la paradoja sobre tener mayor volumen de datos, tener mejores herramientas, instituciones o modelos y una decadente humanidad.</p>`;
            $('.wite_ban_13').css({ "background": "white"
                    
                });
            $('.pant13').html(text);
            break;
        case 4:
            var text = `<p class="justificado">La falta de comprensión de ser parte del todo social y de manera cómo somos influenciados, a la vez que lo hacemos con nuestras actuaciones, requiere un mayor grado de acercamiento a la práctica de generar desarrollo desde las personas para las personas.</p>`;
            $('.wite_ban_13').css({ "background": "white"
                    
                });
            $('.pant13').html(text);
            break;
        case 5:
            var text = `<p class="justificado">Autores como Amartya Sen, Manfred Max Neef, Martha Nussbaum así lo han propuesto desde las teorías de las capacidades, las necesidades, la economía descalza y/o a escala humana.</p>`;
            $('.wite_ban_13').css({ "background": "white"
                    
                });
            $('.pant13').html(text);
            break;
        case 6:
            var text = `<p class="justificado">Para comprender el rol de la educación que modifica el modo de entender el desarrollo al servicio de las personas y no a la inversa, invitamos al Maestro Max Neef (Q.E.P.D) para que nos ilustre su pensamiento en la siguiente entrevista: Manfred Max Neef: Economía a escala humana. Rumbo 360 TV.</p>
                              <iframe id="ytplayer" type="text/html" width="220" height="200" style="min-height: fit-content;" src="https://www.youtube.com/embed/Ye3XqX09IUo" frameborder="0" allowfullscreen>`;
            $('.wite_ban_13').css({ "background": "white"
                    
                });
            $('.pant13').html(text);
            var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player', {
                height: '90',
                width: '300',
                videoId: 'Ye3XqX09IUo',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
            }
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


function poner(num) {
    
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '15px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 4) {
        dragging = "";
        diff = "";
        newTop = "";
        scrollOffset = "";
        knob = document.querySelector('.custom-scrollbar__knob21');
        bar = document.querySelector('.custom-scrollbar__bar21');
        container = document.querySelector('.custom-scrollbar__inner21');
        scroll();
    }
    if (num == 3) {
        dragging = "";
        diff = "";
        newTop = "";
        scrollOffset = "";
        knob = document.querySelector('.custom-scrollbar__knob20');
        bar = document.querySelector('.custom-scrollbar__bar20');
        container = document.querySelector('.custom-scrollbar__inner20');
        scroll();
    }
    if(num == 2){
        dragging = "";
        diff = "";
        newTop = "";
        scrollOffset = "";
        knob = document.querySelector('.custom-scrollbar__knob19');
        bar = document.querySelector('.custom-scrollbar__bar19');
        container = document.querySelector('.custom-scrollbar__inner19');
        scroll();
    }
}
function quitar(num) {
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'none',
        'z-index': '100'
    });
    if (num == 4) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
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
  this.att.max = 6;
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
    pantallas16(this.input.value);
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


function pantallas16(num){
    switch (parseInt(num)) {
        case 0:
            $('.pantallas16').html('');
            break;
        case 1:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">El pedagogo brasileño Paulo Freire, quien ha sido uno de los principales exponentes de la pedagogía crítica latinoamericana, considera que “(...) la función principal de la educación es hacer personas libres y autónomas, capaces de analizar la realidad que les rodea, participando en ella y transformándola” (Ayuste, 2006, p. 42).</p>
            </div>`;
            
            $('.pantallas16').html(pantalla);
            break;
        case 2:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Y que a partir de esa educación, el concepto de liberación cobra toda significancia posible tanto  desde  el  punto de vista de las ciencias sociales como en las aplicadas, especialmente para el particular de este trabajo, la contabilidad.</p>
            </div>`;
            
            $('.pantallas16').html(pantalla);
            break;
        case 3:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Siguiendo con Gómez (2012) Las disciplinas científicas, incluso aquellas que se especializan en problemas de conocimientos tecnológicos y técnicos, requieren una comprensión del medio en el cual se desata la transmisión de saberes, de tal forma que pueda desarrollarse favorablemente el proceso.</p>
            </div>`;
            
            $('.pantallas16').html(pantalla);
            break;
        case 4:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Lo anterior implica un estudio juicioso y comprometido de quienes aprenden, enseñan y educan de forma coherente con las necesidades de la sociedad y no únicamente con aquellas derivadas del mercado de capitales.</p>
            </div>`;
            
            $('.pantallas16').html(pantalla);
            break;
        case 5:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">Según lo expresado por Sánchez (2015) la necesidad de profesionalización contable es producto de esfuerzos gremiales y gubernamentales por otorgar el estatus de saber disciplinar a la contabilidad; su marcado uso en el mundo de los negocios y el tecnicismo asociado a su práctica, ha  legado la percepción social de la contabilidad como saber hacer en contraposición a la concepción social del saber contable.</p>
            </div>`;
            
            $('.pantallas16').html(pantalla);
            break;
        case 6:
            var pantalla = `
            <div class="banner_16">
              <p class="justificado">En tanto resultado de las dinámicas y modificaciones en las relaciones sociales y económicas, la contabilidad se encuentra convocada a mejorar sus conceptualizaciones, formas de representación, medición y presentación, que complementen más que sustituyan las financieras tradicionales.</p>
            </div>`;
            
            $('.pantallas16').html(pantalla);
            break;
        default:
            break;
    }
}


function img_17(num){
    switch (parseInt(num)) {
        
        case 1:
            var text = `<p class="justificado">
                          Producto de las corrientes dominantes, la educación contable concentra sus esfuerzos en dotar al estudiante de competencias y conocimientos que le permitan insertarse al mundo laboral, por desgracia, el excesivo enfoque en esta visión pragmática y poco humanizadora del contable, desemboca precisamente en la crisis de confianza frente a la formación de un sujeto ético y moral, que visione el efecto de sus actuaciones en protección del interés público y de la fe pública que le ha sido encomendada.
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/Imagen5-1.png">`;
            $('.armada').append(img);
            break;
        case 2:
            var text = `<p class="justificado">
                          Conviene entonces comprender que producto de las crisis y las demandas sociales, hay una preocupación creciente por la manera como están siendo formados y transformados a través de la educación los sujetos contables. Si bien en principio se requería de un profesional cuya experticia radicara más en el saber hacer (contabilidad), con el tiempo, se migra hacia la necesidad de aportar a través de la teorización y el enfoque disciplinar hacia la perspectiva crítica e interpretativa de la contabilidad como disciplina científica (contaduría pública).
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/Imagen5-2.png">`;
            $('.armada').append(img);
            break;
        case 3:
            var text = `<p class="justificado">
                          En desarrollos más recientes, aumenta la preocupación en la educación contable por el sujeto (contador público), en un esfuerzo por humanizar las prácticas, reconociendo el alto valor y riesgo social que implica el ejercicio irresponsable y contrario a los cánones establecidos tanto por la normativa propia de la profesión como por la posibilidad de seguir construyendo el proyecto de vida personal de quien la ejerce.
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/Imagen5-3.png">`;
            $('.armada').append(img);
            break;
        case 4:
            var text = `<p class="justificado">
                          De acuerdo con Gracia (2019) en términos profesionales y académicos, la ética puede observarse a través de la Accountability (en su sentido de rendición de cuentas), pero más allá en su manera del held accountable (es decir «responsabilizado» por sus acciones).
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/Imagen5-4.png">`;
            $('.armada').append(img);
            break;
        case 5:
            var text = `<p class="justificado">
                          Reflexionar la ética en relación con lo significado como «rendición de cuentas» y la «responsabilidad» (individual y social), es tal vez, el paso necesario e indispensable para contar con juicios que enclaven en el corazón de las prácticas contables la responsabilidad por la consecuencia de las acciones. Precisamente, se consideraría esta una manera acertada de comprender la ética, dispuesta en permanente relación de convivencia con los hechos y la práctica.
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/Imagen5-5.png">`;
            $('.armada').append(img);
            break;
        case 6:
            var text = `<p class="justificado">
                          Dussel (2016) reafirma este contenido al decir «la ética, esa dimensión humana esencial en primer lugar es ‘una práctica’. Lo ético es inherente a la existencia humana en su actuación cotidiana. Tanto singular como comunitariamente toda acción es Ética y lo Ético del acto indica justamente que es práctico» (p. 17).
                        </p>`;
            $('.banner_17').html(text);
            $('.banner_17').css({'visibility': 'visible'});
            var img = `<img class="position_abs" src="assets/img/img_ova/Imagen5-6.png">`;
            $('.armada').append(img);
            break;
        default:
            break;
    }
}

function pantalla20(num){
    switch (parseInt(num)) {
        
        case 1:
            var text = `<div class="banner20">
                        <p class="justificado text-white">Desde la óptica positivo-instrumental, las teorías contables terminan propiciando solo descripciones, cuyas enunciaciones adscriben los juicios a decir simplemente una verdad instrumental, desplazando la rectitud o la verdad moral.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        case 2:
            var text = `<div class="banner20">
                        <p class="justificado text-white">La ética práctica, es decir, aquella que se contextualiza en casos específicos y advierte los dilemas morales a que se enfrenta el profesional, facilita una comprensión de los efectos ampliados en las acciones personales; siguiendo a Gracia (2019), el interés público en esta corriente es la mediación entre la disciplina y la profesión para la sustentabilidad de las organizaciones sociales, en cuyo seno se tipifican las categorías de confianza, ética, responsabilidad profesional y el bien común.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        case 3:
            var text = `<div class="banner20">
                        <p class="justificado text-white">En desarrollo del ejercicio de control que compete al profesional contable,  la corriente crítica se centra en la emancipación del individuo y en su propia realización, se ejerce la doble acción de controlador y controlado, dando lugar a tensiones más que a la sostenibilidad de las organizaciones empresariales promueve la sustentabilidad de la sociedad en sentido de justicia y equidad, es decir la vida. Allí pueden generarse dilemas éticos frente a la capacidad de mantener la independencia de juicio o criterio profesional más allá de los efectos únicamente económico financieros.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        case 4:
            var text = `<div class="banner20">
                        <p class="justificado text-white">De otra parte, Castaño (2019) indica que, en el marco de relaciones sociales, lo contable tiene el poder de mantener la confianza, este es un elemento fundamental para la cohesión social; sin ella el desarrollo de capacidades, comprensión de las realidades contextuales y su necesaria vinculación con los lenguajes de comunicación para la toma de decisiones informadas no es posible.</p>
                      </div>`;
            $('.pant20').html(text);
            break;
        default:
            break;
    }
}

