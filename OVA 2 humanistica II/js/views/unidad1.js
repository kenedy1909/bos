$( document ).ready(function() {
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

    /*slide_predeterminado();*/
    $(".opcion-circular").on('click', opciones_circulares);
    $(".btn-parque").on('click', opciones_parques);
    $(".hoja").on('click', hojas_arbol);
    $(".opcion_nube").on('click', nubes);
    $(".element").on('click', elementos);
    console.log(tema);
    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria1.pdf" target="_blank"> <img class="img-circle mr-3 menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria1.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria2.pdf" target="_blank"> <img class="img-circle mr-3 menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria2.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria3.pdf" target="_blank"> <img class="img-circle mr-3 menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria3.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria4.pdf" target="_blank"> <img class="img-circle mr-3 menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria4.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria5.pdf" target="_blank"> <img class="img-circle mr-3 menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria5.pdf    <b class="text-cafe"><u>Ver</u></b></a>
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
    $('#smartwizard').smartWizard("goToStep", 1);
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
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            limpiar_pantalla(4);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos éticos en la formación del sujeto moral");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            $('#video_2').attr('src', $('#video_2').attr('src'));
            break;
        case 25:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 26:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            $('#video_2').attr('src', $('#video_2').attr('src'));
            break;
        case 27:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 31:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formación Humanística","El cuidado de sí");
            /*$("#content-ova").load("base/unidades/unidad2.html");*/
            tema = 1;
            break;
        default:
            break;
    }
}

function opciones_circulares(){
    var opcion_num = $(this).data('opcion');
    $(".opcion-circular").removeClass('opcion-circular-select');
    $(".opcion-circular"+opcion_num).addClass('opcion-circular-select');
    var informacion = "La filosofía moral es también conocida como ética moral, esto debido a que comparte uno de sus fundamentos qué es la reflexión, ya que la filosofía o ética moral busca reflexionar desde diversos ángulos aquello que se considera moral. Haga clic en cada botón debajo de la imagen para conocer más información:";
    $("#info-1").html(informacion);
    $(".btn-opcion-info").addClass('d-none');
    $(".content-opcion-info").removeClass('d-none');
    $(".content-opcion-info").removeClass('content-opcion-info1');
    $(".content-opcion-info").removeClass('content-opcion-info2');
    $(".content-opcion-info").removeClass('content-opcion-info3');
    $(".content-opcion-info").removeClass('content-opcion-info4');
    $(".content-opcion-info").removeClass('content-opcion-info5');
    if (opcion_num == 1) {
        var texto = `
                        <p class="p_black justificado">En este sentido, es propio resaltar que, ética y moral distan en su concepto, aunque suelan utilizarse indistintamente; en palabras de Molina citando a Cortina:</p>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info1');
    }else if (opcion_num == 2) {
        var texto = `
                        <p class="p_black justificado">La Ética, como dimensión de la filosofía, dice Cortina reflexiona y aclara qué es lo moral y sus rasgos, la fundamenta, indaga las razones para que los hombres se comporten moralmente y da reglas para la acción que se aplican a la vida social. (2013)</p>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info2');
    }else if (opcion_num == 3) {
        var texto = `
                        <div class="row">
                            <div class="col-md-9">
                                <p class="p_black justificado">Siendo así, se estima necesario delimitar lo que es la ética, de lo que es la moral, esto con el fin de evitar un uso inadecuado de las palabras. Por lo tanto, cabe citar a Zan (s.f.) quien señala que lo moral desde una perspectiva filosófica, se compone por valores actitudes, normas y costumbres que dan orientación y/o regulación a las acciones de un sujeto; mientras que, la ética hace referencia al análisis o estudio de lo moral, y que, a partir de este estudio, genera teorías que argumentan o fundamentan lo moral.</p>
                            </div>
                            <div class="col-md-3 d-flex">
                                <p class="p_black justificado m-auto"><b>“Valores actitudes, normas y costumbre”</b></p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info3');
    }else if (opcion_num == 4) {
        var texto = `
                        <div class="row">
                            <div class="col-md-6 d-flex align-items-end flex-column">
                                <p class="p_black justificado">Entonces, la moral estaría más vinculada a la cultura y es algo que la persona vive en su cotidianidad, por eso también es conocida como <b>moral vivida.</b></p>
                                <div class="d-flex  mt-auto">
                                    <img src="assets/img/img_ova/corazon.png" alt="" class="m-auto img-25">
                                </div>
                            </div>
                            <div class="col-md-6 borde-left-verde d-flex align-items-end flex-column">
                                <p class="p_black justificado">Mientras la ética va más vinculada a la cognición y por esto se le conoce también como <b>moral pensada.</b></p>
                                <div class="d-flex  mt-auto">
                                    <img src="assets/img/img_ova/cerebro.png" alt="" class="m-auto img-25">
                                </div>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info4');
    }else if (opcion_num == 5) {
        var texto = `
                        <div class="row">
                            <div class="col-md-12">
                                <p class="p_black justificado">Sin caer en el reduccionismo, hay quienes dirían que:</p>
                            </div>
                            <div class="col-md-12">
                                <div class="d-flex">
                                    <img src="assets/img/img_ova/nota4_21.png" alt="" class="m-auto img-90">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <p class="p_black justificado">Sin embargo, aquí se podría mencionar que la moral tiene existencia por sí misma, mientras que la ética sólo concibe su existencia desde la moral que es su enfoque de estudio y reflexión, por esto último es que llega a conocerse como filosofía moral.</p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info5');
        $(".btn-opcion-info").removeClass('d-none');
    }
}

function opciones_parques(){
    var opcion_num = $(this).data('parque');
    /*alert(opcion_num);*/
    if (opcion_num <= 6) {
        $(".fondo-parque").removeClass('fondo-parque-1');
        $(".fondo-parque").removeClass('fondo-parque-2');
        $(".fondo-parque").removeClass('fondo-parque-3');
        $(".fondo-parque").removeClass('fondo-parque-4');
        $(".fondo-parque").removeClass('fondo-parque-5');
        $(".fondo-parque").removeClass('fondo-parque-6');
        $(".fondo-parque").addClass('fondo-parque-'+(opcion_num+1));
        if(opcion_num == 6){
            $(".btn-parque").addClass('d-none');
        }
    } 
    $(".btn-parque").removeClass('d-block');
    $(".btn-parque").addClass('d-none');
    if (opcion_num == 1) {
        $(".btn-parque-2").removeClass('d-none');
        $(".btn-parque-2").addClass('d-block');
    }else if (opcion_num == 2) {
        $(".btn-parque-3").removeClass('d-none');
        $(".btn-parque-3").addClass('d-block');
    }else if (opcion_num == 3) {
        $(".btn-parque-4").removeClass('d-none');
        $(".btn-parque-4").addClass('d-block');
    }else if (opcion_num == 4) {
        $(".btn-parque-5").removeClass('d-none');
        $(".btn-parque-5").addClass('d-block');
    }else if (opcion_num == 5) {
        $(".btn-parque-6").removeClass('d-none');
        $(".btn-parque-6").addClass('d-block');
    }
}

function hojas_arbol(){
    var hoja_num = $(this).data('hoja');
    $(".fondo-arbol").removeClass('fondo-arbol-1');
    $(".fondo-arbol").removeClass('fondo-arbol-2');
    $(".fondo-arbol").removeClass('fondo-arbol-3');
    $(".fondo-arbol").removeClass('fondo-arbol-4');
    $(".fondo-arbol").removeClass('fondo-arbol-5');
    $(".fondo-arbol").removeClass('fondo-arbol-6');
    $(".fondo-arbol").addClass('fondo-arbol-'+hoja_num);

    if (hoja_num == 1) {
        var hoja_titulo = `La introspección`;
        var hoja_texto = `Proceso de análisis hacia la persona misma, este debe ser un proceso consciente e intencional, buscando la exploración de un aspecto particular que inquiete a la persona y permitiéndole obtener una conclusión del proceso de exploración interna.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 2) {
        var hoja_titulo = `Reflexión`;
        var hoja_texto = `Abordar un tema que no es interno, pero en el que igualmente debe ser consciente y donde se busca obtener respuestas o conclusiones.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 3) {
        var hoja_titulo = `Concentración`;
        var hoja_texto = `Semejante a las anteriores debe ser consciente, pero hay un objeto específico sobre el cual se dispone a enfocar la atención.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 4) {
        var hoja_titulo = `Visualización`;
        var hoja_texto = `Esta puede realizarse de manera individual o la conocida como guiada, y puede ser utilizada con diversos objetivos, desde traer sentimientos de paz, tranquilidad y satisfacción, hasta generar ánimo para la obtención de una meta.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 5) {
        var hoja_titulo = `Meditación`;
        var hoja_texto = `Aunque su concepto puede ser fácilmente confundido; tomando bases desde la psicología cognitivo-conductual, la meditación se trataría de una autoobservación en diferentes dimensiones (en los pensamientos, emociones, fisiológicamente, etc.) pero no se hace intervención en ellos, simplemente se observa, y se diferenciaría de los anteriores en que sería más de término pasivo, además que no busca obtener respuestas ni llegar a conclusiones.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 6) {
        var hoja_titulo = `Relajación muscular`;
        var hoja_texto = `
                         Existen diversos ejercicios que permiten que una persona lleve cada músculo de su cuerpo a la relajación cuando este se encuentra tensionado, incluyendo las conocidas técnicas de respiración que no aplicarían sólo a lo físico, sino también a lo emocional y cognitivo.
                         <div class="d-flex">
                             <div class="btn-leer-bombillo pl-2 width-fit m-auto p_white" data-toggle="modal" data-target="#modal-bombillo3">
                                 <p>Ventajas   <img src="assets/img/img_ova/bombilla.gif" alt="" class="w-40px"></p>
                             </div>
                         </div>
                         `;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }
}

function nubes(){
    $("#nube").removeClass('d-none');
    var nube_num = $(this).data('nube');
    if (nube_num == 1) {
        var text = `
                        <p class="justificado">El autoconcepto <b><u>físico</u></b> contemplaría la habilidad y apariencia física.</p>
                   `;
        $("#nube").html(text);
    }else if (nube_num == 2) {
        var text = `
                        <p>El <b><u>personal</u></b> abarcaría lo afectivo-emocional y ético-moral, además de la autorrealización.</p>
                   `;
        $("#nube").html(text);
    }else if (nube_num == 3) {
        var text = `
                        <p>El auto concepto <b><u>social</u></b> sería la aceptación social percibida por la persona misma.</p>
                   `;
        $("#nube").html(text);
    }else if (nube_num == 4) {
        var text = `
                        <p>Y por último el auto concepto <b><u>académico</u></b> sería la percepción propia del sujeto frente a sus competencias académicas.</p>
                   `;
        $("#nube").html(text);
    }
}

function elementos(){
    var element_num = $(this).data('element');
    var elements = `
                    <div class="row p-0 m-0">
                        <div class="col-md-6 m-0 p-0 content_element_1">
                            <img src="assets/img/img_ova/elemento_aire.png" class="img-100 h-100 cursor element element_1" data-element="1">
                        </div>
                        <div class="col-md-6 m-0 p-0 content_element_2">
                            <img src="assets/img/img_ova/elemento_fuego.png" class="img-100 h-100 cursor element element_2" data-element="2">
                        </div>
                        <div class="col-md-6 m-0 p-0 content_element_3">
                            <img src="assets/img/img_ova/elemento_agua.png" class="img-100 h-100 cursor element element_3" data-element="3">
                        </div>
                        <div class="col-md-6 m-0 p-0 content_element_4">
                            <img src="assets/img/img_ova/elemento_tierra.png" class="img-100 h-100 cursor element element_4" data-element="4">
                        </div>
                    </div>
                    `;
    $(".img-element").html(elements);
    $(".element").on('click', elementos);
    if (element_num == 1) {
        var gif = `
                    <img src="assets/img/img_ova/elemento_aire.gif" class="img-100 h-100 cursor element element_1" data-element="1">
                  `;
        var text = `
                        <div class="card-amarillo-c col-md-12">
                            <p class="p_black">El sanguíneo es alegre, enérgico, vigoroso, con potencia. Son personas de buen humor, apasionados y que brindan confianza.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Voluble</p>
                            <p class="p_black pl-4">Impulsivo</p>
                            <p class="p_black pl-4">Egocéntrico</p>
                            <p class="p_black pl-4">Violento</p>
                            <p class="p_black pl-4">Indisciplicado</p>
                            <p class="p_black pl-4">Exagerado</p>
                            <p class="p_black pl-4">Improductivo</p>
                            <p class="p_black pl-4">Pusilánime</p>
                            <p class="p_black pl-4">Inestable</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">Atento</p>
                            <p class="p_black pl-4">Cálido</p>
                            <p class="p_black pl-4">Amistoso</p>
                            <p class="p_black pl-4">Estusiasta</p>
                            <p class="p_black pl-4">Compasivo</p>
                            <p class="p_black pl-4">Confiado</p>
                            <p class="p_black pl-4">Compañero</p>
                            <p class="p_black pl-4">Simpático</p>
                            <p class="p_black pl-4">Comprensivo</p>
                        </div>
                   `;
        $(".content_element_1").html(gif);
        $("#element-info").html(text);
    }else if (element_num == 2) {
        var gif = `
                    <img src="assets/img/img_ova/elemento_fuego.gif" class="img-100 h-100 cursor element element_2" data-element="2">
                  `;
        var text = `
                        <div class="card-amarillo-c col-md-12">
                            <p class="p_black">El colérico es perseverante, rápido en sus decisiones, que aspira a lo grande, activo y extrovertido. Son personas ambiciosas, individualistas y exigentes consigo mismas.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Impaciente</p>
                            <p class="p_black pl-4">Prepotente</p>
                            <p class="p_black pl-4">Intolerante</p>
                            <p class="p_black pl-4">Vanidoso</p>
                            <p class="p_black pl-4">Insensible</p>
                            <p class="p_black pl-4">Dominante</p>
                            <p class="p_black pl-4">Rencoroso</p>
                            <p class="p_black pl-4">Sarcástico</p>
                            <p class="p_black pl-4">Astuto</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">Enérgico</p>
                            <p class="p_black pl-4">Resolutivo</p>
                            <p class="p_black pl-4">Optimista</p>
                            <p class="p_black pl-4">Independiente</p>
                            <p class="p_black pl-4">Práctico</p>
                            <p class="p_black pl-4">Líder</p>
                            <p class="p_black pl-4">Audaz</p>
                            <p class="p_black pl-4">Productivo</p>
                            <p class="p_black pl-4">Voluntarioso</p>
                        </div>
                   `;
        $(".content_element_2").html(gif);
        $("#element-info").html(text);
    }else if (element_num == 3) {
        var gif = `
                    <img src="assets/img/img_ova/elemento_agua.gif" class="img-100 h-100 cursor element element_3" data-element="3">
                  `;
        var text = `
                        <div class="card-amarillo-c col-md-12">
                            <p class="p_black">El melancólico es inquieto, muy reflexivo, inestable y ansioso. Adoran el silencio y la soledad, se olvidan de su entorno y se distraen fácilmente.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Susceptible</p>
                            <p class="p_black pl-4">Variable</p>
                            <p class="p_black pl-4">Crítico</p>
                            <p class="p_black pl-4">Negativo</p>
                            <p class="p_black pl-4">Antisocial</p>
                            <p class="p_black pl-4">Confuso</p>
                            <p class="p_black pl-4">Vengativo</p>
                            <p class="p_black pl-4">Inflexible</p>
                            <p class="p_black pl-4">Egoísta</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">Sensible</p>
                            <p class="p_black pl-4">Creativo</p>
                            <p class="p_black pl-4">Idealista</p>
                            <p class="p_black pl-4">Leal</p>
                            <p class="p_black pl-4">Habilidoso</p>
                            <p class="p_black pl-4">Minucioso</p>
                            <p class="p_black pl-4">Delicado</p>
                            <p class="p_black pl-4">Analítico</p>
                        </div>
                   `;
        $(".content_element_3").html(gif);
        $("#element-info").html(text);
    }else if (element_num == 4) {
        var gif = `
                    <img src="assets/img/img_ova/elemento_tierra.gif" class="img-100 h-100 cursor element element_4" data-element="4">
                  `;
        var text = `
                        <div class="card-amarillo-c col-md-12">
                            <p class="p_black">El hombre flemático es reflexivo, tranquilo, muy justo e incorruptible, poco comprometido, simpáticos. Adoran la buena vida y les gusta poco el trabajo.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Indeciso</p>
                            <p class="p_black pl-4">Desconfiado</p>
                            <p class="p_black pl-4">Pretencioso</p>
                            <p class="p_black pl-4">Calculador</p>
                            <p class="p_black pl-4">Desmotivado</p>
                            <p class="p_black pl-4">Egoísta</p>
                            <p class="p_black pl-4">Ancioso</p>
                            <p class="p_black pl-4">Cobarde</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">Tranquilo</p>
                            <p class="p_black pl-4">Cumplidor</p>
                            <p class="p_black pl-4">Eficiente</p>
                            <p class="p_black pl-4">Diplomático</p>
                            <p class="p_black pl-4">Objetivo</p>
                            <p class="p_black pl-4">Confiable</p>
                            <p class="p_black pl-4">Organizado</p>
                            <p class="p_black pl-4">Práctico</p>
                            <p class="p_black pl-4">Sentido del humor</p>
                        </div>
                        <div class="col-md-12 mt-3 d-flex">
                            <div class="btn-leer-bombillo pl-2 width-fit m-auto p_white" data-toggle="modal" data-target="#modal-bombillo4">
                                <p>Leer más…   <img src="assets/img/img_ova/bombilla.gif" alt="" class="w-40px"></p>
                            </div>
                        </div>
                   `;
        $(".content_element_4").html(gif);
        $("#element-info").html(text);
    }
}

function limpiar_pantalla(pantallita) {
    if (pantallita == 4) {
        var texto = `
                    <div class="col-md-12 col-sm-12">
                        <h3 class="text-amarillo-o">Vertientes de la filosofía moral</h3>
                    </div>
                    <div class="col-md-12 col-sm-12 d-flex justify-content-center">
                        <div class="fondo-2 d-flex align-items-end flex-column px-3 pt-3">
                            <p id="info-1" class="p_black justificado"></p>
                            <div class="content-opcion-info img-50 d-none"></div>
                            <div class="btn-opcion-info pl-2 width-fit d-none" data-toggle="modal" data-target="#modal-bombillo">
                                <p>En síntesis   <img src="assets/img/img_ova/bombilla.gif" alt="" class="w-40px"></p>
                            </div>
                            <div class="d-flex justify-content-center w-100 mt-auto">
                                <div class="w-200px content-opcion-circular">
                                    <div class="opcion-circular opcion-circular1" data-opcion="1"></div>
                                    <div class="opcion-circular opcion-circular2" data-opcion="2"></div>
                                    <div class="opcion-circular opcion-circular3" data-opcion="3"></div>
                                    <div class="opcion-circular opcion-circular4" data-opcion="4"></div>
                                    <div class="opcion-circular opcion-circular5" data-opcion="5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <p class="p_black text-center p-3"><i>Por favor dar clic en los botones de la parte inferior para ver la información</i></p>
                    </div>
                    `;
        $("#pantalla_vertientes").html(texto);
        $(".opcion-circular").on('click', opciones_circulares);
    }
}



function cerrar_vide_1(){
    var videointro = document.getElementById('video_1');
            videointro.pause();
}