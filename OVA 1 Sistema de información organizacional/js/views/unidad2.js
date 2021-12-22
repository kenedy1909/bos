$( document ).ready(function() {
    $(".menu2").removeClass('d-none');

    star_uni = 2;
    paso = false;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');

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
    $('#zoom_img1').elevateZoom({zoomWindowPosition: 10});
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
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    var scroll_control = 0;

    $(".transacciones-superior-1").on('mouseenter', transaccion_1);
    $(".transacciones-superior-2").on('mouseenter', transaccion_2);
    $(".transacciones-superior-3").on('mouseenter', transaccion_3);
    $(".transacciones-superior-4").on('mouseenter', transaccion_4);
    $(".transacciones-superior-5").on('mouseenter', transaccion_5);
    $(".transacciones-superior-6").on('mouseenter', transaccion_6);
    $(".transacciones-superior-1").on('mouseleave', transaccion_n1);
    $(".transacciones-superior-2").on('mouseleave', transaccion_n2);
    $(".transacciones-superior-3").on('mouseleave', transaccion_n3);
    $(".transacciones-superior-4").on('mouseleave', transaccion_n4);
    $(".transacciones-superior-5").on('mouseleave', transaccion_n5);
    $(".transacciones-superior-6").on('mouseleave', transaccion_n6);
    $(".primer_scroll").on('mouseover', scroll_uno);
    
    console.log(tema);
    slide_link(tema);
});

var pdf = `<div class="col-md-12">
                <p class="p_white">
                    <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/1.LaTeoriaGeneraldeSistemas-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> 1.LaTeoriaGeneraldeSistemas-TGS.pdf   <b class="text-cafe ml-2"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                    <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/2-Introducción-a-los-Conceptos-Básicos-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> 2-Introducción-a-los-Conceptos-Básicos-de-la-TGS.pdf   <b class="text-cafe ml-2"><u>Ver</u></b></a>
                </p>
                <p class="p_white">
                    <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/3-Componentes-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> 3-Componentes-de-la-TGS.pdf   <b class="text-cafe ml-2"><u>Ver</u></b></a>
                </p>
            </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    actualizarprogress(stepIndex+1+10);
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
    $('#smartwizard').smartWizard("goToStep", num -1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 10;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            scroll_uno();
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","","");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","","");
            tema = 1;
            break;
        default:
            break;
    }
}

function scroll_uno() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}

function scroll_dos() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_dos');
    bar = document.querySelector('.custom-scrollbar__bar_dos');
    container = document.querySelector('.custom-scrollbar__inner_dos');
    scroll();
}

function scroll_tres() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_tres');
    bar = document.querySelector('.custom-scrollbar__bar_tres');
    container = document.querySelector('.custom-scrollbar__inner_tres');
    scroll();
}

function scroll_cuatro() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_cuatro');
    bar = document.querySelector('.custom-scrollbar__bar_cuatro');
    container = document.querySelector('.custom-scrollbar__inner_cuatro');
    scroll();
}

function scroll_cinco() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_cinco');
    bar = document.querySelector('.custom-scrollbar__bar_cinco');
    container = document.querySelector('.custom-scrollbar__inner_cinco');
    scroll();
}

function scroll_seis() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_seis');
    bar = document.querySelector('.custom-scrollbar__bar_seis');
    container = document.querySelector('.custom-scrollbar__inner_seis');
    scroll();
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

/*function camboyas(num) {
    $(".camboya-btn").removeClass('bg-amarillo');
    $(".camboya-btn").addClass('bg-cafe-mo');
    $(".camboya-btn-"+num).removeClass('bg-cafe-mo');
    $(".camboya-btn-"+num).addClass('bg-amarillo');   
    if (num == 1) {
        var texto = `
                    <p class="p_black justificado m-auto">En 2003 se dio vida a las salas especiales de Camboya, mediante un acuerdo suscrito entre el gobierno de Camboya y la ONU. Se trata en este caso no del establecimiento de un nuevo tribunal, sino de la conformación de salas especiales dentro de los tribunales ya existentes, para juzgar a los responsables de los crímenes cometidos en Kampuchea democrática.</p>
                    <br>
                    <p class="p_black justificado m-auto">Las salas tienen competencia para juzgar los crímenes cometidos en la Kampuchea democrática entre el 17 de abril de 1975 y el 6 de enero de 1979, aplicando tanto la legislación penal interna como el derecho internacional humanitario, y con la posibilidad de aplicar penas incluso de prisión perpetua.</p>
                    `;
        $("#camboya").html(texto);
    }else if (num == 2) {
        var texto = `
                    <p class="p_black justificado m-auto">Se debe  recordar que durante el periodo de tiempo que tiene competencia temporal la sala, Camboya se encontró bajo el régimen de los jemeres rojos, liderado por Pol Pot, quien finalmente fallece en 1998, periodo durante el cual se calculan que fueron asesinados cerca de 1.6 millones de personas, en lo que algunos historiadores han denominado un auto genocidio, pues se trataba de un sistema político basado en un “comunismo agrario” en el que los jemeres centraron sus ataques contra intelectuales, líderes políticos opositores, monjes budistas, profesionales, entre otros.</p>
                    `;
        $("#camboya").html(texto);
    }else if (num == 3) {
        var texto = `
                    <p class="p_black justificado m-auto">Aunque las salas especiales aún se encuentran en funcionamiento, son pocos los juicios que ha podido culminar, en parte por la avanzada edad de los presuntos responsables.</p>
                    `;
        $("#camboya").html(texto);
    }
}

function cardPara4(num) {
    $("#card4-1, #card4-2, #card4-3, #card4-4").removeClass('bg-blanco');
    $("#card4-1").addClass('bg-cafe-activi');
    $("#card4-2").addClass('bg-cafe-mo');
    $("#card4-3").addClass('bg-piel');
    $("#card4-4").addClass('bg-piel-mo');
    $("#card4-1").html('<img src="assets/img/img_ova/tribune.png" class="img-50 p-3">');
    $("#card4-2").html('<img src="assets/img/img_ova/juzgando.png" class="img-50 p-4">');
    $("#card4-3").html('<img src="assets/img/img_ova/Derecho penal internacional-06.png" class="img-50 p-4">');
    $("#card4-4").html('<img src="assets/img/img_ova/Derecho penal internacional-02.png" class="img-50 p-4">');
    if (num == 1) {
        var texto = `
                    <p class="justificado p_black p-4">Se trata en consecuencia, de unas salas especiales (también conocida como paneles) que no fueron creadas propiamente por un Estado, sino por un órgano internacional que para el momento tenía asignada la tarea de administrar Timor Leste.</p>
                    `;
        $("#card4-1").removeClass('bg-cafe-activi');
        $("#card4-1").addClass('bg-blanco');
        $("#card4-1").html(texto);
    }if (num == 2) {
        var texto = `
                    <p class="justificado p_black p-4">A estas salas especiales les fue asignado el mandato de juzgar a los responsables de los crímenes cometidos entre el 1 de enero de 1999 al 25 de octubre del mismo año, aplicando tanto el derecho penal de Timor Leste, como el derecho internacional humanitario. Estas salas empezaron a funcionar en el año 2000 y culminaron en el 2005, siendo su primera sentencia en el 2001 y teniendo como resultado final la condena de 84 personas y 3 absueltas.</p>
                    `;
        $("#card4-2").removeClass('bg-cafe-mo');
        $("#card4-2").addClass('bg-blanco');
        $("#card4-2").html(texto);
    }if (num == 3) {
        var texto = `
                    <p class="justificado p_black p-4">Debe destacarse que en Timor Leste se trata de una situación que se originó porque luego de 24 años bajo el control de las fuerzas militares de Indonesia, Timor votó por constituirse como un estado independiente, lo que desató los enfrentamientos entre militares indonesios y grupos de milicias que se oponían al resultado, aun cuando el proceso fue llevado a cabo por la misma ONU.</p>
                    `;
        $("#card4-3").removeClass('bg-piel');
        $("#card4-3").addClass('bg-blanco');
        $("#card4-3").html(texto);
    }if (num == 4) {
        var texto = `
                    <p class="justificado p_black p-4">La jurisdicción de las salas especiales fue exclusiva, es decir que solo esa instancia podía conocer de los hechos ocurridos durante ese periodo de tiempo, a diferencia del resto de los tribunales y salas especiales donde su competencia era concurrente.</p>
                    `;
        $("#card4-4").removeClass('bg-piel-mo');
        $("#card4-4").addClass('bg-blanco');
        $("#card4-4").html(texto);
    }
}*/

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

function comprensiones(num) {
    $(".comprension-circulo-2, .comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5").removeClass('bg-azul');
    $(".comprension-circulo-2, .comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5").addClass('bg-blanco');
    if (num == 1) {
        $(".comprension-btn-1").html('<h1 class="text-color-activi-o m-auto"><b>D</b></h1>');
        $(".comprension-btn-2, .comprension-btn-3, .comprension-btn-4, .comprension-btn-5").html('<img src="assets/img/img_ova/more.png" class="img-100">');
        $(".comprension-text-2, .comprension-text-3, .comprension-text-4, .comprension-text-4").addClass('d-none');
        $(".comprension-circulo-2, .comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5").removeClass('bg-blanco');
        $(".comprension-circulo-2, .comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5").addClass('bg-azul');
    }else if (num == 2) {
        $(".comprension-btn-1").html('<h1 class="text-color-activi-o m-auto"><b>D</b></h1>');
        $(".comprension-btn-2").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -5px;"><b>H</b></h1>');
        $(".comprension-btn-3, .comprension-btn-4, .comprension-btn-5").html('<img src="assets/img/img_ova/more.png" class="img-100">');
        $(".comprension-text-2").removeClass('d-none');
        $(".comprension-text-3, .comprension-text-4, .comprension-text-4").addClass('d-none');
        $(".comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5").removeClass('bg-blanco');
        $(".comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5").addClass('bg-azul');
    }else if (num == 3) {
        $(".comprension-btn-1").html('<h1 class="text-color-activi-o m-auto"><b>D</b></h1>');
        $(".comprension-btn-2").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -5px;"><b>H</b></h1>');
        $(".comprension-btn-3").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -4px; left: 1px"><b>S</b></h1>');
        $(".comprension-btn-4, .comprension-btn-5").html('<img src="assets/img/img_ova/more.png" class="img-100">');
        $(".comprension-text-2, .comprension-text-3").removeClass('d-none');
        $(".comprension-text-4, .comprension-text-5").addClass('d-none');
        $(".comprension-circulo-4, .comprension-circulo-5").removeClass('bg-blanco');
        $(".comprension-circulo-4, .comprension-circulo-5").addClass('bg-azul');
    }else if (num == 4) {
        $(".comprension-btn-1").html('<h1 class="text-color-activi-o m-auto"><b>D</b></h1>');
        $(".comprension-btn-2").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -5px;"><b>H</b></h1>');
        $(".comprension-btn-3").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -4px; left: 1px"><b>S</b></h1>');
        $(".comprension-btn-4").html('<h1 class="text-color-activi-o m-auto" style="position: relative;top: -4px;"><b>M</b></h1>');
        $(".comprension-btn-5").html('<img src="assets/img/img_ova/more.png" class="img-100">');
        $(".comprension-text-2, .comprension-text-3, .comprension-text-4").removeClass('d-none');
        $(".comprension-text-5").addClass('d-none');
        $(".comprension-circulo-5").removeClass('bg-blanco');
        $(".comprension-circulo-5").addClass('bg-azul');
    }else if (num == 5) {
        $(".comprension-btn-1").html('<h1 class="text-color-activi-o m-auto"><b>D</b></h1>');
        $(".comprension-btn-2").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -5px;"><b>H</b></h1>');
        $(".comprension-btn-3").html('<h1 class="text-color-activi-o m-auto" style="position: relative; top: -4px; left: 1px"><b>S</b></h1>');
        $(".comprension-btn-4").html('<h1 class="text-color-activi-o m-auto" style="position: relative;top: -4px;"><b>M</b></h1>');
        $(".comprension-btn-5").html('<h1 class="text-color-activi-o m-auto" style="position: relative;top: -4px;"><b>U</b></h1>');
        $(".comprension-text-2, .comprension-text-3, .comprension-text-4, .comprension-text-5").removeClass('d-none');
    }
}

function cajas(num){
  switch (parseInt(num)) {
      case 1:
          var text = `
                     <div class="d-flex img-30">
                       <img src="assets/img/img_ova/cloud.png" class="m-auto img-70">
                     </div>
                     <div class="d-flex img-70">
                       <div class="m-auto">
                         <p class="p_black justificado">Son quienes alimentan el sistema y los que intervienen en la transformación de los datos.</p>
                       </div>
                     </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na1').removeClass('inactivo');           
          $('.na1').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      case 2:
          var text = `
                     <div class="d-flex img-30">
                       <img src="assets/img/img_ova/people.png" class="m-auto img-70">
                     </div>
                     <div class="d-flex img-70">
                       <div class="m-auto">
                         <p class="p_black justificado">Son aquellos usuarios que no interactúan directamente con los resultados, pero sí se benefician de ellos. Por ejemplo, en el sistema de información de una EPS, el usuario podrá la Superintendencia de Salud, quienes deben supervisar y monitorear de manera permanente a los afiliados.</p>
                       </div>
                     </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2').removeClass('inactivo');           
          $('.na2').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      case 3:
          var text = `
                     <div class="d-flex img-30">
                       <img src="assets/img/img_ova/administracion.png" class="m-auto img-70">
                     </div>
                     <div class="d-flex img-70">
                       <div class="m-auto">
                         <p class="p_black justificado">Son los usuarios que generalmente tienen la responsabilidad de tomar decisiones, con base a la información que contiene o genera el sistema. Ejemplo: el gerente de una gran empresa, que debe tomar decisiones de la empresa, tomando como insumos los datos e información generado por diferentes niveles y/o procesos de la empresa.</p>
                       </div>
                     </div>
                     `;
          $('.avance_blanco').removeClass('activa');            
          $('.nav3').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na3').removeClass('inactivo');           
          $('.na3').addClass('encendido');
          
          $('#infografia').html(text);
          break;
      
      default:
          break;
  }
}

function informacion(num) {
    if (num == 1) {
        $("#informacion_num").html('<h1 class="m-auto"><b>1</b></h1>');
        $("#informacion_img").html('<div><p class="p_black text-center"><i><b>clic a la imagen</b></i></p><img id="zoom_img1" src="assets/img/img_ova/Entrada.png" data-toggle="modal" data-target="#modal-agra1" class="img-100 m-auto"></div>');
        $(".zoomContainer" ).remove();
        $('#zoom_img1').elevateZoom({zoomWindowPosition: 10});
    }else if (num == 2) {
        $(".zoomContainer" ).remove();
        $("#informacion_num").html('<h1 class="m-auto"><b>2</b></h1>');
        $("#informacion_img").html('<img src="assets/img/img_ova/Almacenamiento.png" class="img-100 m-auto">');
    }else if (num == 3) {
        $(".zoomContainer" ).remove();
        $("#informacion_num").html('<h1 class="m-auto"><b>3</b></h1>');
        $("#informacion_img").html('<img src="assets/img/img_ova/Procesamiento.png" class="img-100 m-auto">');
    }else if (num == 4) {
        $(".zoomContainer" ).remove();
        $("#informacion_num").html('<h1 class="m-auto"><b>4</b></h1>');
        $("#informacion_img").html('<img src="assets/img/img_ova/Salida .png" class="img-100 m-auto">');
    }
}

function transaccion_1() {
    $(".transacciones-info").removeClass('img-100');
    $(".transacciones-info-1").html('<h1 class="m-auto p_white">1</h1>');
    $(".transacciones-info-2").html('<h1 class="m-auto p_white">2</h1>');
    $(".transacciones-info-3").html('<h1 class="m-auto p_white">3</h1>');
    $(".transacciones-info-4").html('<h1 class="m-auto p_white">4</h1>');
    $(".transacciones-info-5").html('<h1 class="m-auto p_white">5</h1>');
    $(".transacciones-info-6").html('<h1 class="m-auto p_white">6</h1>');
    $(".transacciones-inferior").removeClass('d-none');
    $(".transacciones-inferior").addClass('d-flex');
    $(".transacciones-info-1").addClass('img-100');
    $(".transacciones-info-1").html(`
                                    <div class="d-flex transacciones-infoCardss">
                                        <div class="img-100 m-auto" data-toggle="modal" data-target="#modal-tps">
                                          <p class="justificado p_white"><b>Diseño de un TPS</b></p>
                                          <p class="justificado p_white">(De clic aquí para desplegar más información)</p>
                                        </div>
                                    </div>
                                    `);
    $(".transacciones-inferior-1").removeClass('d-flex');
    $(".transacciones-inferior-1").addClass('d-none');
    scroll_control = 0;
}

function transaccion_2() {
    $(".transacciones-info").removeClass('img-100');
    $(".transacciones-info-1").html('<h1 class="m-auto p_white">1</h1>');
    $(".transacciones-info-2").html('<h1 class="m-auto p_white">2</h1>');
    $(".transacciones-info-3").html('<h1 class="m-auto p_white">3</h1>');
    $(".transacciones-info-4").html('<h1 class="m-auto p_white">4</h1>');
    $(".transacciones-info-5").html('<h1 class="m-auto p_white">5</h1>');
    $(".transacciones-info-6").html('<h1 class="m-auto p_white">6</h1>');
    $(".transacciones-inferior").removeClass('d-none');
    $(".transacciones-inferior").addClass('d-flex');
    $(".transacciones-info-2").addClass('img-100');
    $(".transacciones-info-2").html(`
                                    <div class="d-flex transacciones-infoCardss">
                                        <div class="img-100">
                                          <p class="justificado p_white"><b>Identificar Propósito y Funcionalidad</b></p>
                                          <p class="justificado p_white">Esto implica tener certeza de la situación, intención y contexto. Ejemplo: base de datos de clientes para diseñar la estrategia de fidelización de acuerdo con su comportamiento en compras.</p>
                                        </div>
                                    </div>
                                    `);
    $(".transacciones-inferior-2").removeClass('d-flex');
    $(".transacciones-inferior-2").addClass('d-none');
    scroll_control = 0;
}

function transaccion_3() {
    $(".transacciones-info").removeClass('img-100');
    $(".transacciones-info-1").html('<h1 class="m-auto p_white">1</h1>');
    $(".transacciones-info-2").html('<h1 class="m-auto p_white">2</h1>');
    $(".transacciones-info-3").html('<h1 class="m-auto p_white">3</h1>');
    $(".transacciones-info-4").html('<h1 class="m-auto p_white">4</h1>');
    $(".transacciones-info-5").html('<h1 class="m-auto p_white">5</h1>');
    $(".transacciones-info-6").html('<h1 class="m-auto p_white">6</h1>');
    $(".transacciones-inferior").removeClass('d-none');
    $(".transacciones-inferior").addClass('d-flex');
    $(".transacciones-info-3").addClass('img-100');
    $(".transacciones-info-3").html(`
                                    <div class="d-flex transacciones-infoCardss">
                                        <div class="img-100">
                                          <p class="justificado p_white"><b>Definir Las Entidades</b></p>
                                          <p class="justificado p_white">Implica identificar los grupos de variables con los que contará la base de datos. Ejemplo: 1. Datos Personales Cliente; 2. Ubicación o localización del cliente. 3.  Histórico de compras cliente.</p>
                                        </div>
                                    </div>
                                    `);
    $(".transacciones-inferior-3").removeClass('d-flex');
    $(".transacciones-inferior-3").addClass('d-none');
    scroll_control = 0;
}

function transaccion_4() {
    $(".transacciones-info").removeClass('img-100');
    $(".transacciones-info-1").html('<h1 class="m-auto p_white">1</h1>');
    $(".transacciones-info-2").html('<h1 class="m-auto p_white">2</h1>');
    $(".transacciones-info-3").html('<h1 class="m-auto p_white">3</h1>');
    $(".transacciones-info-4").html('<h1 class="m-auto p_white">4</h1>');
    $(".transacciones-info-5").html('<h1 class="m-auto p_white">5</h1>');
    $(".transacciones-info-6").html('<h1 class="m-auto p_white">6</h1>');
    $(".transacciones-inferior").removeClass('d-none');
    $(".transacciones-inferior").addClass('d-flex');
    $(".transacciones-info-4").addClass('img-100');
    $(".transacciones-info-4").html(`
                                    <div class="d-flex transacciones-infoCardss">
                                        <div class="img-100">
                                          <p class="justificado p_white"><b>Definir Las Variables</b></p>
                                          <p class="justificado p_white">Se definen los atributos o variables con los que contará cada entidad, y que será objeto de alimentación de la base de datos: Ejemplo: Nombre, Apellido, teléfono, Dirección.</p>
                                        </div>
                                    </div>
                                    `);
    $(".transacciones-inferior-4").removeClass('d-flex');
    $(".transacciones-inferior-4").addClass('d-none');
    scroll_control = 0;
}

function transaccion_5() {
    $(".transacciones-info").removeClass('img-100');
    $(".transacciones-info-1").html('<h1 class="m-auto p_white">1</h1>');
    $(".transacciones-info-2").html('<h1 class="m-auto p_white">2</h1>');
    $(".transacciones-info-3").html('<h1 class="m-auto p_white">3</h1>');
    $(".transacciones-info-4").html('<h1 class="m-auto p_white">4</h1>');
    $(".transacciones-info-5").html('<h1 class="m-auto p_white">5</h1>');
    $(".transacciones-info-6").html('<h1 class="m-auto p_white">6</h1>');
    $(".transacciones-inferior").removeClass('d-none');
    $(".transacciones-inferior").addClass('d-flex');
    scroll_control++;
    $(".transacciones-info-5").addClass('img-100');
    $(".transacciones-info-5").html(`
                                    <div class="custom-scrollbar_dos">
                                      <div class="custom-scrollbar__inner_dos">
                                        <div class="d-flex transacciones-infoCardss">
                                            <div class="img-80">
                                              <p class="justificado p_white"><b>Definir El Esquema De Recopilación De Datos</b></p>
                                              <p class="justificado p_white">En este paso se deben definir las técnicas sobre las cuales se recopilarán los datos, de acuerdo con el propósito o funcionalidad. Ejemplo: proceso transaccional, captura de imagen, captura de texto. Etc.</p>
                                              <p class="justificado p_white">Es ideal que un TPS cuente con una política de gobernanza de datos donde se determinen las premisas de calidad de los datos, para su recolección, además donde se asegure que se cuenten con bases de datos estructuradas. (más adelante veremos el tema ESTRUCTURACIÓN DE BASES DE DATOS).</p>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="custom-scrollbar__bar_dos">
                                        <div class="custom-scrollbar__knob_dos cursor"><p class="text-center linea_scroll_dos">-</p></div>
                                      </div>
                                    </div>
                                    `);
    $(".transacciones-inferior-5").removeClass('d-flex');
    $(".transacciones-inferior-5").addClass('d-none');
    if (scroll_control == 1) {
        scroll_dos();
    }
}

function transaccion_6() {
    $(".transacciones-info").removeClass('img-100');
    $(".transacciones-info-1").html('<h1 class="m-auto p_white">1</h1>');
    $(".transacciones-info-2").html('<h1 class="m-auto p_white">2</h1>');
    $(".transacciones-info-3").html('<h1 class="m-auto p_white">3</h1>');
    $(".transacciones-info-4").html('<h1 class="m-auto p_white">4</h1>');
    $(".transacciones-info-5").html('<h1 class="m-auto p_white">5</h1>');
    $(".transacciones-info-6").html('<h1 class="m-auto p_white">6</h1>');
    $(".transacciones-inferior").removeClass('d-none');
    $(".transacciones-inferior").addClass('d-flex');
    $(".transacciones-info-6").addClass('img-100');
    $(".transacciones-info-6").html(`
                                    <div class="d-flex transacciones-infoCardss">
                                        <div class="img-100">
                                          <p class="justificado p_white"><b>Definir El Esquema De Almacenamiento De Los Datos</b></p>
                                          <p class="justificado p_white">En este último paso, se debe determinar la forma y la fuente de almacenamiento de los datos que se recopilen. Ejemplo: software, datamart, la nube, cubos, etc.</p>
                                        </div>
                                    </div>
                                    `);
    $(".transacciones-inferior-6").removeClass('d-flex');
    $(".transacciones-inferior-6").addClass('d-none');
    scroll_control= 0;
}

function transaccion_n1() {
    $(".transacciones-info-1").removeClass('img-100');
    $(".transacciones-info-1").html(`
                                    <h1 class="m-auto p_white">1</h1>
                                    `);
    $(".transacciones-inferior-1").addClass('d-flex');
    $(".transacciones-inferior-1").removeClass('d-none');
    scroll_control = 0;
}

function transaccion_n2() {
    $(".transacciones-info-2").removeClass('img-100');
    $(".transacciones-info-2").html(`
                                    <h1 class="m-auto p_white">2</h1>
                                    `);
    $(".transacciones-inferior-2").addClass('d-flex');
    $(".transacciones-inferior-2").removeClass('d-none');
    scroll_control = 0;
}

function transaccion_n3() {
    $(".transacciones-info-3").removeClass('img-100');
    $(".transacciones-info-3").html(`
                                    <h1 class="m-auto p_white">3</h1>
                                    `);
    $(".transacciones-inferior-3").addClass('d-flex');
    $(".transacciones-inferior-3").removeClass('d-none');
    scroll_control = 0;
}

function transaccion_n4() {
    $(".transacciones-info-4").removeClass('img-100');
    $(".transacciones-info-4").html(`
                                    <h1 class="m-auto p_white">4</h1>
                                    `);
    $(".transacciones-inferior-4").addClass('d-flex');
    $(".transacciones-inferior-4").removeClass('d-none');
    scroll_control = 0;
}

function transaccion_n5() {
    scroll_control++;
    $(".transacciones-info-5").removeClass('img-100');
    $(".transacciones-info-5").html(`
                                    <h1 class="m-auto p_white">5</h1>
                                    `);
    $(".transacciones-inferior-5").addClass('d-flex');
    $(".transacciones-inferior-5").removeClass('d-none');
    if (scroll_control == 1) {
        scroll_dos();
    }
}

function transaccion_n6() {
    $(".transacciones-info-6").removeClass('img-100');
    $(".transacciones-info-6").html(`
                                    <h1 class="m-auto p_white">6</h1>
                                    `);
    $(".transacciones-inferior-6").addClass('d-flex');
    $(".transacciones-inferior-6").removeClass('d-none');
    scroll_control= 0;
}

function circulos(num) {
    $(".opcion-circulo").removeClass('bg-blanco');
    $(".opcion-circulo").addClass('bg-azul');
    $(".opcion-circulo-"+num).removeClass('bg-azul');
    $(".opcion-circulo-"+num).addClass('bg-blanco');
    if (num == 1) {
        var texto = `
                    <div class="col-md-7 p-3">
                      <div>
                         <h5 class="text-color-activi-o"><b>Sistemas de Información para la Gestión (MIS)</b></h5>
                         <br>
                         <p class="p_black justificado">También conocidos por sus siglas en inglés como <i>Management Information Systems (MIS)</i>, son sistemas de nivel táctico, encargados del procesamiento que normalmente requiere un mayor esfuerzo de procesamiento de los datos para facilitar la labor de gestión y planificación.  Generalmente procesan datos recolectados en el nivel operativo, para elaborar informes a los niveles directivos que les sean útiles en la toma de decisiones.  En los MIS, la capacidad de procesamiento del hardware es fundamental, puesto que de ésta depende la calidad y velocidad del procesamiento y por ende de los informes.</p>
                       </div> 
                    </div>
                    <div class="col-md-5 p-3">
                      <div>
                         <img src="assets/img/img_ova/hardware.png" class="img-100">
                       </div> 
                    </div>
                    `;
        $("#circulos-info").html(texto);
    }else if (num == 2) {
        var texto = `
                    <div class="col-md-12 p-3 custom-scrollbar_tres">
                        <h5 class="text-color-activi-o"><b>Sistemas de Soporte a la Decisión (DSS)</b></h5>
                        <div class="img-100 radius-2 bg-blanco py-3 pl-3 pr-5 custom-scrollbar__inner_tres">
                            <div class="mr-5">
                                <p class="p_black justificado">También conocidos por sus siglas en inglés como Decision Support Systems (DSS), son niveles que responden adecuadamente, tanto para el nivel táctico como para el nivel estratégico. Son sistemas capaces de combinar modelos para intentar resolver problemas de nivel medio-alto, utilizando una interfaz amigable para el usuario. Según LAPIEDRA, 2011, este tipo de sistemas, surgen como respuesta a mayores necesidades de información para tomar decisiones ante entornos más adversos.  Con un DDS, los directivos logran que las tecnologías les ayuden a tratar mucha más información para realizar sus análisis de modo más rápido. (LAPIEDRA, 2011).</p>
                                <p class="p_black text-center"><i><b>clic a la imagen</b></i></p>
                                <div class="img-100 d-flex">
                                    <img src="assets/img/img_ova/Tabla 1.png" class="img-80 m-auto" data-toggle="modal" data-target="#modal-agra2">
                                </div>
                            </div>
                        </div>
                        <div class="custom-scrollbar__bar_tres">
                          <div class="custom-scrollbar__knob_tres cursor"><p class="text-center linea_scroll_tres">-</p></div>
                        </div>
                    </div>
                    `;
        $("#circulos-info").html(texto);
        scroll_tres();
    }else if (num == 3) {
        var texto = `
                    <div class="col-md-12 p-3 custom-scrollbar_cuatro">
                        <h5 class="text-color-activi-o"><b>Sistemas de Información para Ejecutivos</b></h5>
                        <div class="img-100 radius-2 bg-blanco py-3 pl-3 pr-5 custom-scrollbar__inner_cuatro">
                            <div class="mr-5 row">
                                <div class="col-md-6 p-4">
                                    <p class="p_black justificado">También conocidos por sus siglas en inglés como Executive Information Systems (EIS), son similares a los DSS, pero con el objetivo de que los directivos de más alto nivel puedan monitorear permanentemente la compañía en su totalidad. Suelen ser aplicativos que permiten acceder de manera muy rápida a indicadores consolidados o informes ya elaborados por otros sistemas (no a los datos concretos). Las herramientas visuales son claves en este tipo de sistemas de información, usualmente se relacionan con otras herramientas como los cuadros de mando integral. (LAPIEDRA, 2011).</p>
                                </div>
                                <div class="col-md-6 p-4 border-left-color-o">
                                    <p class="p_black justificado">Los sistemas de información para Ejecutivos (EIS), a medida que han ido apareciendo nuevas funcionalidades, tipologías e incluso necesidades, en la gerencia e incluso en la tecnología, también han ido surgiendo nuevas formas de concebirlos desde de las organizaciones; hoy día también son conocidos como sistemas de información estratégicos.</p>
                                </div>
                            </div>
                            <p class="p_black justificado">LAUDON Y LAUDON, 2016, resaltan las siguientes características de este tipo de sistemas de información:</p>
                            <div class="row pt-4 mr-3">
                              <div class="col-md-3 d-flex pl-5 pr-3 py-3" style="background-image: url('assets/img/img_ova/1.png'); background-size: 100% 100%; background-repeat: no-repeat;"> 
                                <p class="p_black justificado m-auto pl-3">Cambian significativamente el desempeño de un negocio al medirse por uno o más indicadores clave.</p>
                              </div>
                              <div class="col-md-3 d-flex pl-5 pr-3 py-3" style="background-image: url('assets/img/img_ova/2.png'); background-size: 100% 100%; background-repeat: no-repeat;"> 
                                <p class="p_black justificado m-auto pl-3">Contribuyen al logro de una meta estratégica.</p>
                              </div>
                              <div class="col-md-3 d-flex pl-5 pr-3 py-3" style="background-image: url('assets/img/img_ova/3.png'); background-size: 100% 100%; background-repeat: no-repeat;"> 
                                <p class="p_black justificado m-auto pl-3">Apoyan el proceso de innovación de productos dentro de la empresa.</p>
                              </div>
                              <div class="col-md-3 d-flex pl-5 pr-3 py-3" style="background-image: url('assets/img/img_ova/4.png'); background-size: 100% 100%; background-repeat: no-repeat;">
                                <p class="p_black justificado m-auto pl-3">Generan cambios en la forma de dirigir una compañía, como compite o interactúa con clientes y proveedores al facilitar información integral.</p>
                              </div>
                            </div>
                        </div>
                        <div class="custom-scrollbar__bar_cuatro">
                          <div class="custom-scrollbar__knob_cuatro cursor"><p class="text-center linea_scroll_cuatro">-</p></div>
                        </div>
                    </div>
                    `;
        $("#circulos-info").html(texto);
        scroll_cuatro();
    }else if (num == 4) {
        var texto = `
                    <div class="col-md-12 p-3 custom-scrollbar_cinco">
                        <h5 class="text-color-activi-o"><b>Sistemas de Información Geográfica (SIG)</b></h5>
                        <div class="img-100 radius-2 bg-blanco py-3 pl-3 pr-5 custom-scrollbar__inner_cinco">
                            <div class="mr-5 row">
                                <div class="col-md-6 p-4">
                                    <p class="p_black justificado">Es un sistema que permite relacionar e integrar un conjunto de datos vinculados en torno a un espacio y procesarlos basados en su ubicación o referenciación geográfica, facilitando la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz. También son conocidos como SIG por sus siglas en inglés.</p>
                                </div>
                                <div class="col-md-6 p-4 border-left-color-o">
                                    <p class="p_black justificado">La mejor forma de utilizar este tipo de sistemas, especialmente para el uso empresarial, es a través de mapas, en diferentes formatos.  Estos sistemas han ido evolucionando notoriamente a través del tiempo, sobre todo, en la medida que surgen tecnologías satelitales que permiten el reconocimiento de la posición exacta de elementos en un espacio geográfico, por ejemplo, ahora muchos SIG ahora son usables a través de tecnologías 3D y 4D, que facilitan la experiencia de usuario, a la vez que arrojan datos más precisos.</p>
                                </div>
                            </div>
                            <div class="row pt-4 mr-5">
                              <div class="col-md-4 p-3"> 
                                <img src="assets/img/img_ova/geo1.png" class="img-100">
                              </div>
                              <div class="col-md-4 p-3"> 
                                <img src="assets/img/img_ova/geo2.png" class="img-100">
                              </div>
                              <div class="col-md-4 p-3"> 
                                <img src="assets/img/img_ova/geo3.png" class="img-100">
                              </div>
                            </div>
                        </div>
                        <div class="custom-scrollbar__bar_cinco">
                          <div class="custom-scrollbar__knob_cinco cursor"><p class="text-center linea_scroll_cinco">-</p></div>
                        </div>
                    </div>
                    `;
        $("#circulos-info").html(texto);
        scroll_cinco();
    }else if (num == 5) {
        var texto = `
                    <div class="col-md-8 p-2">
                      <div>
                         <h5 class="text-color-activi-o"><b>Sistemas de Información Biométricos</b></h5>
                         <br>
                         <p class="p_black justificado">Es un tipo de sistema de información, que funciona a través de la biometría, es decir, funciona mediante el reconocimiento de una característica personal, en este caso del ser humano, y que puede ser identificada o verificada de manera automatizada a través de los parámetros con los cuales se configuró el sistema.</p>
                         <br>
                         <p class="p_black justificado">Este tipo de sistemas es muy usado principalmente para suplir condiciones de seguridad, es por esto que los sistemas de información biométricos se han ido perfeccionando y posicionando como respuesta a la creciente demanda de seguridad existente en la actualidad en los sistemas operativos. Sin embargo, a pesar de eso, y aunque algunos de ellos son altamente fiables, ningún sistema de información biométrico es efectivo al 100%, puesto que también son susceptibles de ser intervenidos.</p>
                       </div> 
                    </div>
                    <div class="col-md-4 p-0 d-flex">
                      <div class="m-auto">
                         <img src="assets/img/img_ova/biometria.png" class="img-100">
                       </div> 
                    </div>
                    `;
        $("#circulos-info").html(texto);
        scroll_cinco();
    }else if (num == 6) {
        var texto = `
                    <div class="col-md-12 p-3 custom-scrollbar_seis">
                        <h5 class="text-color-activi-o"><b>¿Qué es la Biometría?</b></h5>
                        <div class="img-100 radius-2 bg-blanco py-3 pl-3 pr-5 custom-scrollbar__inner_seis">
                            <div class="mr-5 row">
                                <div class="col-md-6 p-4">
                                    <p class="p_black justificado">El concepto biometría proviene de las palabras bio que significa vida y metría que significa medida o métrica, por lo tanto, podemos decir que el concepto de biometría hace referencia a la medición sobre elementos con vida, pero a través de las herramientas tecnológicas. es decir, mide e identifica características propias de una persona. Por lo tanto, en los sistemas de información, la biometría es la ciencia que evalúa y mide a través de características fisiológicas y de comportamiento que pueden ser utilizadas para verificar la identidad del individuo.</p>
                                </div>
                                <div class="col-md-6 p-4 border-left-color-o">
                                    <p class="p_black justificado">Todos los seres humanos tienen características morfológicas únicas que los hacen diferentes y difícilmente irrepetibles.  Las métricas o elementos más comunes en la biometría son las huellas digitales, el reconocimiento facial, la lectura del iris, la morfología de la mano, reconocimiento visual y otras técnicas, que han ido evolucionando a medida que avanzan los descubrimientos tecnológicos.</p>
                                </div>
                            </div>
                            <div class="row pt-4 mr-5">
                              <div class="col-md-12 p-3"> 
                                <p class="p_black justificado">Cuando se define un elemento o indicador para utilizarlo en un sistema biométrico, se debe asegurar que cumpla los siguientes principios:</p>
                              </div>
                              <div class="col-md-12 p-3 row ml-3"> 
                                  <div class="col-md-3 p-0 d-flex" style="min-height: 200px"> 
                                    <img src="assets/img/img_ova/Universalidad.png" class="img-100 mt-auto">
                                  </div>
                                  <div class="col-md-3 p-0 d-flex" style="min-height: 200px"> 
                                    <img src="assets/img/img_ova/Unicidad.png" class="img-100 mt-auto">
                                  </div>
                                  <div class="col-md-3 p-0 d-flex" style="min-height: 200px"> 
                                    <img src="assets/img/img_ova/Permanencia.png" class="img-100 mt-auto">
                                  </div>
                                  <div class="col-md-3 p-0 d-flex" style="min-height: 200px"> 
                                    <img src="assets/img/img_ova/Cuantificación.png" class="img-100 mt-auto">
                                  </div>
                              </div>
                            </div>
                        </div>
                        <div class="custom-scrollbar__bar_seis">
                          <div class="custom-scrollbar__knob_seis cursor"><p class="text-center linea_scroll_seis">-</p></div>
                        </div>
                    </div>
                    `;
        $("#circulos-info").html(texto);
        scroll_seis();
    }
}

function instrucciones(num) {
    if (num == 1) {
        $(".instrucciones-1").removeClass('d-none');
    }else if (num == 2) {
        $(".instrucciones-2").removeClass('d-none');
    }
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