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
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);
    /*var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";*/
    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider2').css({ width: '100%', height: '250px' });
    
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

    $('a.control_prev2').click(function () {
        moveLeft2();
    });

    $('a.control_next2').click(function () {
        moveRight2();
    });

    var slideCount = $('#slider3 ul li').length;
    var slideWidth = $('#slider3 ul li').width();
    var slideHeight = $('#slider3 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider3').css({ width: '100%', height: '190px' });
    
    $('#slider3 ul').css({ width: '75%'});
    
    $('#slider3 ul li:last-child').prependTo('#slider3 ul');

    function moveLeft3() {
        $('#slider3 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider3 ul li:last-child').prependTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    function moveRight3() {
        $('#slider3 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider3 ul li:first-child').appendTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    $('a.control_prev3').click(function () {
        moveLeft3();
    });

    $('a.control_next3').click(function () {
        moveRight3();
    });

    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = "";
    bar = "";
    container = "";
    
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a href="assets/PDF/UNIDAD 3/jurisdicción universal la perspectiva.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Jurisdicción universal.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
}

function scroll5() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob5');
    bar = document.querySelector('.custom-scrollbar__bar5');
    container = document.querySelector('.custom-scrollbar__inner5');
    scroll();
}
function scroll6() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob20');
    bar = document.querySelector('.custom-scrollbar__bar20');
    container = document.querySelector('.custom-scrollbar__inner20');
    scroll();
}

function modal_scroll10(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob10');
    bar = document.querySelector('.custom-scrollbar__bar10');
    container = document.querySelector('.custom-scrollbar__inner10');
    scroll();
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
    $('#smartwizard').smartWizard("goToStep", num -1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            $("#content-ova").load("base/unidades/unidad3.html");
            tema = 10;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
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
        top: '2px',
        display: 'block',
        height: '100%',
        'z-index': '100'
    });
    // if (num == 3) {
    //     $(".custom-scrollbar__bar2").css('display','block');
    //     $(".custom-scrollbar2").css('height','250');
    // }
}
function quitar(num) {
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        height: '100%',
        display: 'none',
        'z-index': '100'
    });
    // if (num == 3) {
    //     $(".custom-scrollbar__bar2").css('display','none');
    //     $(".custom-scrollbar2").css('height','180px');
    // }
}

function instrucciones(num) {
    if (num == 1) {
        $(".instrucciones-1").removeClass('d-none');
    }else if (num == 2) {
        $(".instrucciones-2").removeClass('d-none');
    }
}

function scroll_slide(num) {
    if (num == 1) {
        $(".scroll_slide-1").html('<p class="text-azul">Planeación del Proyecto o Sistema</p>');
        $(".scroll_slide-1").removeClass('bg-azul');
        $(".scroll_slide-1").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="pt-3">
                                  <h3 class="color-text">Fase 1: Planeación del Proyecto o Sistema</h3>
                                  <div class="pt-3 custom-scrollbar5">
                                    <div class="row custom-scrollbar__inner5 padding_scroll" style="padding: 0px 70px 1px 25px;">
                                      
                                      <p class="justificado">Es la etapa más determinante desde la perspectiva gerencial en el diseño de un sistema de información puesto que en ella se identifica la problemática que tiene la organización y cuya solución es claramente un sistema de información como tal. En esta fase se identifican las necesidades de los usuarios con respecto al sistema a fin de definir sus objetivos, alcances y justificación. La planeación del proyecto debe ser consistente con el plan estratégico de la empresa, por lo que es recomendable que involucre una muy buena parte del equipo directivo, así como representantes de diferentes áreas de la empresa, entre mayor sea el alcance.</p>
                                      <p class="justificado">Una vez definidos los objetivos, alcances y la justificación del sistema, se procede a hacer un diagrama funcional del sistema, que consiste en una gráfica que debe mostrar de manera clara cómo operará el sistema y cuáles son sus funciones.  <br>
                                      El cronograma define las actividades o etapas que se deben seguir para la elaboración del proyecto, así como las fechas de inicio y terminación de cada una de las actividades, identificando quiénes son sus responsables (de gerencia, de sistemas y por parte de los usuarios) y los indicadores que se usarán para medir el cumplimiento de los resultados. <br>
                                      Finalmente, en el presupuesto se debe especificar la asignación de recursos en donde se cuantifican y valoran monetariamente los recursos</p>
                                      
                                    </div>
                                    <div class="custom-scrollbar__bar5">
                                      <div class="custom-scrollbar__knob5 cursor"><p class="text-white text-center linea_scroll5">-</p></div>
                                    </div>
                                  </div>
                                  <div class="col-md-12"><b>haga clic en cada botón azul para desplegar la información.</b></div>

                                  <div class="row mt-2">
                                    <div class="col-md-4">
                                      <button class="btn btn_fases" data-toggle="modal" data-target="#modal-objetivos">Objetivos</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button class="btn btn_fases" data-toggle="modal" data-target="#modal-alcance">Alcance</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button class="btn btn_fases" data-toggle="modal" data-target="#modal-justificacion">Justificación</button>
                                    </div>
                                  </div>
                                </div>
                                `);
        scroll5();
    }else if (num == 2) {
        $(".scroll_slide-2").html('<p class="text-azul">Análisis del Sistema</p>');
        $(".scroll_slide-2").removeClass('bg-azul');
        $(".scroll_slide-2").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="pt-3">
                                  <div>
                                    <h3 class="color-text">Fase 2: Análisis del Sistema</h3><br>
                                    <p class="justificado">Una vez desarrollada la planeación del sistema (proyecto) en donde se definió qué es lo que se quiere hacer, la programación y el presupuesto, se puede proceder con la etapa de análisis del sistema. En esta fase se <b>analiza la viabilidad o factibilidad</b> del sistema, además, se <b>definen los requerimientos técnicos</b> para el desarrollo de este, <b>se estructura el flujo de los datos</b> y se determina <b>el método de almacenamiento</b> de los datos y la información generada.</p><br>
                                    <b>haga clic en cada botón azul para desplegar la información.</b>
                                  </div>
                                  
                                  <div class="row mt-2">
                                    <div class="col-md-4">
                                      <button class="btn btn_fases" data-toggle="modal" data-target="#modal-analisis">Análisis de viabilidad o factibilidad.</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button class="btn btn_fases" data-toggle="modal" data-target="#modal-Definición">Definición de requerimientos técnicos.</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button class="btn btn_fases" data-toggle="modal" data-target="#modal-Determinación">Determinación del método de almacenamiento</button>
                                    </div>
                                  </div>
                                </div>
                                `);
    }else if (num == 3) {
        $(".scroll_slide-3").html('<p class="text-azul">Diseño del Sistema</p>');
        $(".scroll_slide-3").removeClass('bg-azul');
        $(".scroll_slide-3").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="p-3">
                                  <h5 class="text-color-activi-o"><b>Fase 3: Diseño del Sistema</b></h5>
                                  <div class="content p_white custom-scrollbar_siete pr-5">
                                    <div class="custom-scrollbar__inner_siete">
                                      <p class="justificado p_black">El diseño de un sistema de información consiste en construir o esbozar el plan o modelo general de ese sistema. Al igual que los planos que usa el arquitecto para diagramar una edificación, el diseño contiene todas las especificaciones que dan al sistema su forma y estructura.</p>
                                      <br>
                                      <p class="justificado p_black">El diseñador del sistema (también conocido como analista o ingeniero informático), es el encargado de elaborar el diagrama o esquema funcional con el flujo de los datos. Este esquema permitirá ilustrar la interacción del sistema con los distintos ambientes internos y externos, los roles y niveles de los usuarios, la jerarquía de la estructura. En otras palabras, se debe elaborar un diagrama o ilustración que describa cómo fluyen los datos a través del sistema mediante el esquema de:</p>
                                    </div>
                                    <div class="custom-scrollbar__bar_siete">
                                      <div class="custom-scrollbar__knob_siete cursor"><p class="text-center linea_scroll_siete">-</p></div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 d-flex">
                                    <div class="img-20">
                                      <img src="assets/img/img_ova/entrar.png" class="img-100">
                                    </div>
                                    <div class="img-80 d-flex">
                                      <h5 class="text-color-activi-o m-auto"><b>Entrada- Proceso - Salida</b></h5>
                                    </div>
                                    <div class="img-20">
                                      <img src="assets/img/img_ova/sign-out.png" class="img-100">
                                    </div>
                                  </div>
                                </div>
                                `);
    }else if (num == 4) {
        $(".scroll_slide-4").html('');
        $(".scroll_slide-4").removeClass('bg-azul');
        $(".scroll_slide-4").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                0
                                `);
    }else if (num == 5) {
        $(".scroll_slide-5").html('');
        $(".scroll_slide-5").removeClass('bg-azul');
        $(".scroll_slide-5").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                0
                                `);
    }else if (num == 6) {
        $(".scroll_slide-6").html('');
        $(".scroll_slide-6").removeClass('bg-azul');
        $(".scroll_slide-6").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                0
                                `);
    }else if (num == 7) {
        $(".scroll_slide-7").html('');
        $(".scroll_slide-7").removeClass('bg-azul');
        $(".scroll_slide-7").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                0
                                `);
    }
}