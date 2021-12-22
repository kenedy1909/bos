$( document ).ready(function() {
  $(".menu4").removeClass('d-none');

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
    $(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);

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
    
    $('#slider2').css({ width: '100%', height: '370px' });
    
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

    
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = "";
    bar = "";
    container = "";
    
});
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/1. La Teoría General de Sistemas - TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px img-5" src="assets/img/img_template/pdf.png"> La Teoría General de Sistemas - TGS.pdf  <b class="text-cafe ml-2"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/2. Introducción a los Conceptos Básicos de la TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px img-5" src="assets/img/img_template/pdf.png"> 2. Introducción a los Conceptos Básicos de la TGS.pdf.pdf  <b class="text-cafe ml-2"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/3-Componentes-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px img-5" src="assets/img/img_template/pdf.png"> 3. Componentes de la TGS.pdf  <b class="text-cafe ml-2"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    actualizarprogress(stepIndex+1+10+17+10);
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
function scroll_siete() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_siete');
    bar = document.querySelector('.custom-scrollbar__bar_siete');
    container = document.querySelector('.custom-scrollbar__inner_siete');
    scroll();
}
function scroll_ocho() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_ocho');
    bar = document.querySelector('.custom-scrollbar__bar_ocho');
    container = document.querySelector('.custom-scrollbar__inner_ocho');
    scroll();
}
function scroll_nueve() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_nueve');
    bar = document.querySelector('.custom-scrollbar__bar_nueve');
    container = document.querySelector('.custom-scrollbar__inner_nueve');
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

function slide_aparece(){
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

    $('a.control_prev3').click(function (e) {
        moveLeft3();
        e.preventDefault();
    });

    $('a.control_next3').click(function (e) {
        moveRight3();
        e.preventDefault();
    });

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
                                      
                                      <p class="justificado text-black">Es la etapa más determinante desde la perspectiva gerencial en el diseño de un sistema de información puesto que en ella se identifica la problemática que tiene la organización y cuya solución es claramente un sistema de información como tal. En esta fase se identifican las necesidades de los usuarios con respecto al sistema a fin de definir sus objetivos, alcances y justificación. La planeación del proyecto debe ser consistente con el plan estratégico de la empresa, por lo que es recomendable que involucre una muy buena parte del equipo directivo, así como representantes de diferentes áreas de la empresa, entre mayor sea el alcance.</p>
                                      <p class="justificado text-black">Una vez definidos los objetivos, alcances y la justificación del sistema, se procede a hacer un diagrama funcional del sistema, que consiste en una gráfica que debe mostrar de manera clara cómo operará el sistema y cuáles son sus funciones.  <br>
                                      El cronograma define las actividades o etapas que se deben seguir para la elaboración del proyecto, así como las fechas de inicio y terminación de cada una de las actividades, identificando quiénes son sus responsables (de gerencia, de sistemas y por parte de los usuarios) y los indicadores que se usarán para medir el cumplimiento de los resultados. <br>
                                      Finalmente, en el presupuesto se debe especificar la asignación de recursos en donde se cuantifican y valoran monetariamente los recursos</p>
                                      
                                    </div>
                                    <div class="custom-scrollbar__bar5">
                                      <div class="custom-scrollbar__knob5 cursor"><p class="text-white text-center linea_scroll5">-</p></div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 text-black"><b>haga clic en cada botón azul para desplegar la información.</b></div>

                                  <div class="row mt-2">
                                    <div class="col-md-4">
                                      <button class="btn p_white bg-azul" data-toggle="modal" data-target="#modal-objetivos">Objetivos</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button class="btn p_white bg-azul" data-toggle="modal" data-target="#modal-alcance">Alcance</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button class="btn p_white bg-azul" data-toggle="modal" data-target="#modal-justificacion">Justificación</button>
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
                                    <p class="justificado text-black">Una vez desarrollada la planeación del sistema (proyecto) en donde se definió qué es lo que se quiere hacer, la programación y el presupuesto, se puede proceder con la etapa de análisis del sistema. En esta fase se <b>analiza la viabilidad o factibilidad</b> del sistema, además, se <b>definen los requerimientos técnicos</b> para el desarrollo de este, <b>se estructura el flujo de los datos</b> y se determina <b>el método de almacenamiento</b> de los datos y la información generada.</p><br>
                                    <b class="text-black">haga clic en cada botón azul para desplegar la información.</b>
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
        scroll_siete();
    }else if (num == 4) {
        $(".scroll_slide-4").html('<p class="text-azul">Desarrollo del Sistema y Documentación</p>');
        $(".scroll_slide-4").removeClass('bg-azul');
        $(".scroll_slide-4").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="p-3">
                                  <h5 class="text-color-activi-o"><b>Fase 4: Desarrollo del Sistema y Documentación</b></h5>
                                  <br>
                                  <div>
                                    <p class="justificado p_black">El desarrollo de un sistema consiste en la traducción del diseño de dicho sistema a una forma entendible para la computadora. Esto se logra mediante la generación del código fuente, el cual se puede obtener en algunos casos de manera automatizada (usando herramientas CASE) y en todos los casos usando el talento de los ingenieros o programadores que elaboran dicho código para que satisfaga las especificaciones del diseño.</p>
                                    <br>
                                    <p class="justificado p_black">Se podría decir que, en esta fase el administrador o gerente no tiene mucha injerencia, o por lo menos no tiene mucho que aportar, a no ser que sea experto o tenga formación en programación de software.</p>
                                  </div>
                                </div>
                                `);
    }else if (num == 5) {
        $(".scroll_slide-5").html('<p class="text-azul">Pruebas del Sistema</p>');
        $(".scroll_slide-5").removeClass('bg-azul');
        $(".scroll_slide-5").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="p-3">
                                  <h5 class="text-color-activi-o"><b>Fase 5: Pruebas del Sistema</b></h5>
                                  <div class="content p_white custom-scrollbar_ocho pr-5">
                                    <div class="custom-scrollbar__inner_ocho">
                                      <p class="justificado p_black">Una vez desarrollado un sistema de información se podría esperar que ya estuviese listo para entrar en operación, No obstante, es absolutamente necesario que se le realicen pruebas, pues es inusual que un sistema quede completamente listo y a satisfacción de los usuarios después de finalizada su etapa de desarrollo.</p>
                                      <br>
                                      <p class="justificado p_black">Se sugiere que las pruebas de un sistema se realicen por partes, y que involucren a la mayor cantidad posible de usuarios, luego se puede hacer una prueba de funcionamiento del sistema como un todo.</p>
                                      <br>
                                      <p class="justificado p_black">Para esto, se puede seleccionar a un usuario o usuarios que sean claves por su conocimiento de los procesos, para que ingrese al sistema módulo por módulo y buscar operarlo, y hacer simulaciones con operaciones reales o ficticias en situaciones normales y anormales; todo esto para ver cómo se comporta cada parte del sistema aún en situaciones no previstas.</p>
                                      <br>
                                      <div class="d-flex">
                                        <img src="assets/img/img_ova/tecnico.png" class="img-100 mt-auto">
                                      </div>
                                      <br>
                                      <p class="justificado p_black">En ese sentido, en los momentos que se estén realizando pruebas, es una buena práctica que el administrador intente usar el software, en los campos de captura de información, incluir datos ilógicos. Por ejemplo: si se pide un valor, incluir alguno que esté por fuera del rango establecido o con signos negativos para verificar que el sistema haga las validaciones respectivas.</p>
                                      <br>
                                      <p class="justificado p_black">Finalmente, el administrador o gerente debe verificar en cada módulo hasta el mínimo detalle para que las correcciones se hagan una vez terminada la fase de pruebas y no cuando el sistema esté en operación, pues ya en este caso las correcciones son costosas y generan malestar y desconfianza entre los usuarios finales.</p>
                                    </div>
                                    <div class="custom-scrollbar__bar_ocho">
                                      <div class="custom-scrollbar__knob_ocho cursor"><p class="text-center linea_scroll_ocho">-</p></div>
                                    </div>
                                  </div>
                                </div>
                                `);
         scroll_ocho();
    }else if (num == 6) {
        $(".scroll_slide-6").html('<p class="text-azul">La Implantación del Sistema</p>');
        $(".scroll_slide-6").removeClass('bg-azul');
        $(".scroll_slide-6").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="p-3">
                                  <h5 class="text-color-activi-o"><b>Fase 6: La Implantación del Sistema</b></h5>
                                  <div class="content p_white custom-scrollbar_nueve pr-5">
                                    <div class="custom-scrollbar__inner_nueve">
                                      <p class="justificado p_black">Una vez se ha definido que el producto está terminado, probado y para entrega, se procede con la fase de implantación, que consiste en ubicar el software en el servidor, efectuando el proceso de instalación. Una vez finalizada la instalación, comenzar con el proceso de preparación de la información que se incluirá inicialmente para que arranque el sistema. </p>
                                      <br>
                                      <p class="justificado p_black">Posteriormente, se procede con la capacitación de los usuarios sobre cómo utilizar el sistema, de modo que las dudas sean mínimas cuando el sistema entre en operación.</p>
                                      <br>
                                      <p class="justificado p_black">En la fase de implantación, es clave llevar un paralelo con el sistema que funcionaba previamente (esto en los casos donde existiese), pues debe quedar muy claro que es el nuevo sistema por sí mismo el que debe desplazar el sistema anterior. Los usuarios deben percatarse, por su propia cuenta, que ya no es rentable seguir funcionando con el sistema anterior y que el nuevo sistema lo ha desplazado.</p>
                                      <br>
                                      <div class="d-flex">
                                        <img src="assets/img/img_ova/plantacion.png" class="img-100 mt-auto">
                                      </div>
                                    </div>
                                    <div class="custom-scrollbar__bar_nueve">
                                      <div class="custom-scrollbar__knob_nueve cursor"><p class="text-center linea_scroll_nueve">-</p></div>
                                    </div>
                                  </div>
                                </div>
                                `);
         scroll_nueve();
    }else if (num == 7) {
        $(".scroll_slide-7").html('<p class="text-azul">El mantenimiento del Sistema</p>');
        $(".scroll_slide-7").removeClass('bg-azul');
        $(".scroll_slide-7").addClass('bg-blanco');
        $("#scroll-slide").html(`
                                <div class="pt-3">
                                  <h3 class="color-text">Fase 7: el mantenimiento del Sistema</h3>
                                  <div class="pt-3 custom-scrollbar20">
                                    <div class="row custom-scrollbar__inner20 padding_scroll" style="padding: 0px 70px 1px 25px;">
                                      
                                      <p class="justificado text-black">Esta es la fase que más tiempo toma, además es la más costosa para la organización, incluso más costosa que el mismo diseño y desarrollo. Se puede decir que la fase de mantenimiento existirá mientras el sistema tenga vida. Implica la dedicación de capacidad profesional o del área a cargo de los sistemas (TICs, Informática, sistemas, etc), durante todo el tiempo de vida del software, pues requiere hacer correcciones, modificaciones o incluso actualizaciones de acuerdos con los cambios de la tecnología y de los cambios en los de la empresa, esto también se conoce como soporte técnico al sistema.</p>
                                      
                                      <div class="col-md-12 d-flex" style="margin-left: 5px;z-index: 100;">
                                        <div class="img-15 d-flex">
                                            <a href="#" class="control_prev3 m-auto"><div style="" class="triag_cambiaslide2rigth"></div></a>
                                        </div>
                                        <div class="img-70 d-flex">
                                          <div id="slider3" style="" class="m-auto d-flex justify-content-center">
                                            <ul>
                                              
                                              <li>
                                                <div class="row p-3" style="background: white;height: 170px;border-radius: 20px;border: solid #282f9f;">
                                                  
                                                  <div style="width: 70%;">
                                                    <p class="justificado text-black" style="font-size: 13px;">Errores o requerimientos que se dejaron pasar en las fases iniciales.</p>
                                                  </div>
                                                  <div style="width: 25%;" class="d-flex"><img src="assets/img/img_ova/error.png" class="m-auto" style="max-width: 100%;"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div class="row p-3" style="background: white;height: 170px;border-radius: 20px;border: solid #282f9f;">
                                                  
                                                  <div style="width: 70%;">
                                                    <p class="justificado text-black" style="font-size: 13px;">Cambios en los requerimientos de los usuarios originados por cambios en los procesos de la organización, cambios en las normas y leyes existentes, o nuevas inquietudes de los usuarios propias de la evolución misma del negocio. </p>
                                                  </div>
                                                  <div style="width: 25%;" class="d-flex"><img src="assets/img/img_ova/exchange.png" class="m-auto" style="max-width: 100%;"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div class="row p-3" style="background: white;height: 170px;border-radius: 20px;border: solid #282f9f;">
                                                  
                                                  <div style="width: 70%;">
                                                    <p class="justificado text-black" style="font-size: 13px;">Cambios tecnológicos, como por ejemplo la instalación de un nuevo hardware, nuevos sistemas operativos, nuevas tecnologías de redes, migración de los sistemas a otros. </p>
                                                  </div>
                                                  <div style="width: 25%;" class="d-flex"><img src="assets/img/img_ova/proceso.png" class="m-auto" style="max-width: 100%;"></div>
                                                </div>
                                              </li>
                                              
                                            </ul>  
                                          </div>
                                        </div>
                                        <div class="img-15 d-flex">
                                          <a href="#" class="control_next3 m-auto"><div style="" class="triag_cambiaslide2"></div></a>
                                        </div>
                                      </div>
                                      
                                      
                                    </div>
                                    <div class="custom-scrollbar__bar20">
                                      <div class="custom-scrollbar__knob20 cursor"><p class="text-white text-center linea_scroll20">-</p></div>
                                    </div>
                                  </div>
                                </div>
                                `);
         scroll6();
         slide_aparece();
    }
}