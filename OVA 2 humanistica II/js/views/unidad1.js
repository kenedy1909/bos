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
                        <a href="assets/PDF/Unidad 1/actividad_complementaria1.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria1.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria2.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria2.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria3.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria3.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria4.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria4.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/actividad_complementaria5.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria5.pdf    <b class="text-cafe"><u>Ver</u></b></a>
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
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            limpiar_pantalla(4);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1. Desarrollo del juicio y criterio profesional","Aspectos ??ticos en la formaci??n del sujeto moral");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 25:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 26:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 31:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje","1. Necesidad de la formaci??n Human??stica","El cuidado de s??");
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
    var informacion = "La filosof??a moral es tambi??n conocida como ??tica moral, esto debido a que comparte uno de sus fundamentos qu?? es la reflexi??n, ya que la filosof??a o ??tica moral busca reflexionar desde diversos ??ngulos aquello que se considera moral. Haga clic en cada bot??n debajo de la imagen para conocer m??s informaci??n:";
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
                        <p class="p_black justificado">En este sentido, es propio resaltar que, ??tica y moral distan en su concepto, aunque suelan utilizarse indistintamente; en palabras de Molina citando a Cortina:</p>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info1');
    }else if (opcion_num == 2) {
        var texto = `
                        <p class="p_black justificado">La ??tica, como dimensi??n de la filosof??a, dice Cortina reflexiona y aclara qu?? es lo moral y sus rasgos, la fundamenta, indaga las razones para que los hombres se comporten moralmente y da reglas para la acci??n que se aplican a la vida social. (2013)</p>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info2');
    }else if (opcion_num == 3) {
        var texto = `
                        <div class="row">
                            <div class="col-md-9">
                                <p class="p_black justificado">Siendo as??, se estima necesario delimitar lo que es la ??tica, de lo que es la moral, esto con el fin de evitar un uso inadecuado de las palabras. Por lo tanto, cabe citar a Zan (s.f.) quien se??ala que lo moral desde una perspectiva filos??fica, se compone por valores actitudes, normas y costumbres que dan orientaci??n y/o regulaci??n a las acciones de un sujeto; mientras que, la ??tica hace referencia al an??lisis o estudio de lo moral, y que, a partir de este estudio, genera teor??as que argumentan o fundamentan lo moral.</p>
                            </div>
                            <div class="col-md-3 d-flex">
                                <p class="p_black justificado m-auto"><b>???Valores actitudes, normas y costumbre???</b></p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info").html(texto);
        $(".content-opcion-info").addClass('content-opcion-info3');
    }else if (opcion_num == 4) {
        var texto = `
                        <div class="row">
                            <div class="col-md-6 d-flex align-items-end flex-column">
                                <p class="p_black justificado">Entonces, la moral estar??a m??s vinculada a la cultura y es algo que la persona vive en su cotidianidad, por eso tambi??n es conocida como <b>moral vivida.</b></p>
                                <div class="d-flex  mt-auto">
                                    <img src="assets/img/img_ova/corazon.png" alt="" class="m-auto img-25">
                                </div>
                            </div>
                            <div class="col-md-6 borde-left-verde d-flex align-items-end flex-column">
                                <p class="p_black justificado">Mientras la ??tica va m??s vinculada a la cognici??n y por esto se le conoce tambi??n como <b>moral pensada.</b></p>
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
                                <p class="p_black justificado">Sin caer en el reduccionismo, hay quienes dir??an que:</p>
                            </div>
                            <div class="col-md-12">
                                <div class="d-flex">
                                    <img src="assets/img/img_ova/nota4_21.png" alt="" class="m-auto img-90">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <p class="p_black justificado">Sin embargo, aqu?? se podr??a mencionar que la moral tiene existencia por s?? misma, mientras que la ??tica s??lo concibe su existencia desde la moral que es su enfoque de estudio y reflexi??n, por esto ??ltimo es que llega a conocerse como filosof??a moral.</p>
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
        var hoja_titulo = `La introspecci??n`;
        var hoja_texto = `Proceso de an??lisis hacia la persona misma, este debe ser un proceso consciente e intencional, buscando la exploraci??n de un aspecto particular que inquiete a la persona y permiti??ndole obtener una conclusi??n del proceso de exploraci??n interna.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 2) {
        var hoja_titulo = `Reflexi??n`;
        var hoja_texto = `Abordar un tema que no es interno, pero en el que igualmente debe ser consciente y donde se busca obtener respuestas o conclusiones.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 3) {
        var hoja_titulo = `Concentraci??n`;
        var hoja_texto = `Semejante a las anteriores debe ser consciente, pero hay un objeto espec??fico sobre el cual se dispone a enfocar la atenci??n.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 4) {
        var hoja_titulo = `Visualizaci??n`;
        var hoja_texto = `Esta puede realizarse de manera individual o la conocida como guiada, y puede ser utilizada con diversos objetivos, desde traer sentimientos de paz, tranquilidad y satisfacci??n, hasta generar ??nimo para la obtenci??n de una meta.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 5) {
        var hoja_titulo = `Meditaci??n`;
        var hoja_texto = `Aunque su concepto puede ser f??cilmente confundido; tomando bases desde la psicolog??a cognitivo-conductual, la meditaci??n se tratar??a de una autoobservaci??n en diferentes dimensiones (en los pensamientos, emociones, fisiol??gicamente, etc.) pero no se hace intervenci??n en ellos, simplemente se observa, y se diferenciar??a de los anteriores en que ser??a m??s de t??rmino pasivo, adem??s que no busca obtener respuestas ni llegar a conclusiones.`;
        $("#arbol_titulo").html(hoja_titulo);
        $("#arbol_texto").html(hoja_texto);
    }else if (hoja_num == 6) {
        var hoja_titulo = `Relajaci??n muscular`;
        var hoja_texto = `
                         Existen diversos ejercicios que permiten que una persona lleve cada m??sculo de su cuerpo a la relajaci??n cuando este se encuentra tensionado, incluyendo las conocidas t??cnicas de respiraci??n que no aplicar??an s??lo a lo f??sico, sino tambi??n a lo emocional y cognitivo.
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
                        <p class="justificado">El autoconcepto <b><u>f??sico</u></b> contemplar??a la habilidad y apariencia f??sica.</p>
                   `;
        $("#nube").html(text);
    }else if (nube_num == 2) {
        var text = `
                        <p>El <b><u>personal</u></b> abarcar??a lo afectivo-emocional y ??tico-moral, adem??s de la autorrealizaci??n.</p>
                   `;
        $("#nube").html(text);
    }else if (nube_num == 3) {
        var text = `
                        <p>El auto concepto <b><u>social</u></b> ser??a la aceptaci??n social percibida por la persona misma.</p>
                   `;
        $("#nube").html(text);
    }else if (nube_num == 4) {
        var text = `
                        <p>Y por ??ltimo el auto concepto <b><u>acad??mico</u></b> ser??a la percepci??n propia del sujeto frente a sus competencias acad??micas.</p>
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
                            <p class="p_black">El sangu??neo es alegre, en??rgico, vigoroso, con potencia. Son personas de buen humor, apasionados y que brindan confianza.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Voluble</p>
                            <p class="p_black pl-4">Impulsivo</p>
                            <p class="p_black pl-4">Egoc??ntrico</p>
                            <p class="p_black pl-4">Violento</p>
                            <p class="p_black pl-4">Indisciplicado</p>
                            <p class="p_black pl-4">Exagerado</p>
                            <p class="p_black pl-4">Improductivo</p>
                            <p class="p_black pl-4">Pusil??nime</p>
                            <p class="p_black pl-4">Inestable</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">Atento</p>
                            <p class="p_black pl-4">C??lido</p>
                            <p class="p_black pl-4">Amistoso</p>
                            <p class="p_black pl-4">Estusiasta</p>
                            <p class="p_black pl-4">Compasivo</p>
                            <p class="p_black pl-4">Confiado</p>
                            <p class="p_black pl-4">Compa??ero</p>
                            <p class="p_black pl-4">Simp??tico</p>
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
                            <p class="p_black">El col??rico es perseverante, r??pido en sus decisiones, que aspira a lo grande, activo y extrovertido. Son personas ambiciosas, individualistas y exigentes consigo mismas.</p>
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
                            <p class="p_black pl-4">Sarc??stico</p>
                            <p class="p_black pl-4">Astuto</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">En??rgico</p>
                            <p class="p_black pl-4">Resolutivo</p>
                            <p class="p_black pl-4">Optimista</p>
                            <p class="p_black pl-4">Independiente</p>
                            <p class="p_black pl-4">Pr??ctico</p>
                            <p class="p_black pl-4">L??der</p>
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
                            <p class="p_black">El melanc??lico es inquieto, muy reflexivo, inestable y ansioso. Adoran el silencio y la soledad, se olvidan de su entorno y se distraen f??cilmente.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Susceptible</p>
                            <p class="p_black pl-4">Variable</p>
                            <p class="p_black pl-4">Cr??tico</p>
                            <p class="p_black pl-4">Negativo</p>
                            <p class="p_black pl-4">Antisocial</p>
                            <p class="p_black pl-4">Confuso</p>
                            <p class="p_black pl-4">Vengativo</p>
                            <p class="p_black pl-4">Inflexible</p>
                            <p class="p_black pl-4">Ego??sta</p>
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
                            <p class="p_black pl-4">Anal??tico</p>
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
                            <p class="p_black">El hombre flem??tico es reflexivo, tranquilo, muy justo e incorruptible, poco comprometido, simp??ticos. Adoran la buena vida y les gusta poco el trabajo.</p>
                        </div>
                        <div class="col-md-6 mt-3">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Debilidades</b></button></p>
                            <p class="p_black pl-4">Indeciso</p>
                            <p class="p_black pl-4">Desconfiado</p>
                            <p class="p_black pl-4">Pretencioso</p>
                            <p class="p_black pl-4">Calculador</p>
                            <p class="p_black pl-4">Desmotivado</p>
                            <p class="p_black pl-4">Ego??sta</p>
                            <p class="p_black pl-4">Ancioso</p>
                            <p class="p_black pl-4">Cobarde</p>
                        </div>
                        <div class="col-md-6 mt-3 borde-left-azul">
                            <p class="text-center"><button class="btn btn-verde p_white"><b>Fortalezas</b></button></p>
                            <p class="p_black pl-4">Tranquilo</p>
                            <p class="p_black pl-4">Cumplidor</p>
                            <p class="p_black pl-4">Eficiente</p>
                            <p class="p_black pl-4">Diplom??tico</p>
                            <p class="p_black pl-4">Objetivo</p>
                            <p class="p_black pl-4">Confiable</p>
                            <p class="p_black pl-4">Organizado</p>
                            <p class="p_black pl-4">Pr??ctico</p>
                            <p class="p_black pl-4">Sentido del humor</p>
                        </div>
                        <div class="col-md-12 mt-3 d-flex">
                            <div class="btn-leer-bombillo pl-2 width-fit m-auto p_white" data-toggle="modal" data-target="#modal-bombillo4">
                                <p>Leer m??s???   <img src="assets/img/img_ova/bombilla.gif" alt="" class="w-40px"></p>
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
                        <h3 class="text-amarillo-o">Vertientes de la filosof??a moral</h3>
                    </div>
                    <div class="col-md-12 col-sm-12 d-flex justify-content-center">
                        <div class="fondo-2 d-flex align-items-end flex-column px-3 pt-3">
                            <p id="info-1" class="p_black justificado"></p>
                            <div class="content-opcion-info img-50 d-none"></div>
                            <div class="btn-opcion-info pl-2 width-fit d-none" data-toggle="modal" data-target="#modal-bombillo">
                                <p>En s??ntesis   <img src="assets/img/img_ova/bombilla.gif" alt="" class="w-40px"></p>
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
                        <p class="p_black text-center p-3"><i>Por favor dar clic en los botones de la parte inferior para ver la informaci??n</i></p>
                    </div>
                    `;
        $("#pantalla_vertientes").html(texto);
        $(".opcion-circular").on('click', opciones_circulares);
    }
}