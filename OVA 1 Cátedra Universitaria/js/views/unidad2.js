$( document ).ready(function() {
    $( ".zoomContainer" ).remove();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $( ".ov-personaje").hide();
    star_uni = 2;
    paso = false;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');
    setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior",">");
            
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
    $('#zoom_img1').elevateZoom({zoomWindowPosition: 10});
    $('#zoom_img2').elevateZoom({
          zoomType: "lens",
          lensShape: "round",
          lensSize: 200
        });
    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    slide_predeterminado2();
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    var scroll_control = 0;
    
    console.log(tema);
    slide_link2(tema);
});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides2(stepIndex);
    actualizarprogress(stepIndex+1+10);
}

function slide_predeterminado2(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides2(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link2(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides2(num);
}

function controlSlides2(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior",">");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 10;
            break;
        case 1:
            var pdf = `<p class="p_white">
                            <a href="assets/PDF/UNIDAD 2/Sentencia-C-337_96.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png"> Sentencia-C-337_96.pdf <b class="text-cafe"><u>Ver</u></b></a>
                      </p>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior",">");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior",">");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior","Normas constitucionales y legales");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior","Autonomía universitaria ");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior","Autonomía universitaria ");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior","Autonomía universitaria ");
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Normatividad Constitucional y Legal de la Educación Superior","Autonomía universitaria ");
            $(".menu1").addClass('d-none');
            $(".menu2").addClass('d-none');
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

function normativas(num){
    switch (parseInt(num)) {
        case 1:
            $('.bg-normativas').addClass('bg-rojo-inactive');
            $('.bg-normativas').removeClass('bg-blanco-1');

            $('.normativas1').removeClass('bg-rojo-inactive');
            $('.normativas1').addClass('bg-blanco-1');

            $('.text-normativas').addClass('inactive');
            $('.text-normativas').removeClass('active');

            $('.textN1').removeClass('inactive');
            $('.textN1').addClass('active');
            break;
        case 2:
            $('.bg-normativas').addClass('bg-rojo-inactive');
            $('.bg-normativas').removeClass('bg-blanco-1');

            $('.normativas2').removeClass('bg-rojo-inactive');
            $('.normativas2').addClass('bg-blanco-1');

            $('.text-normativas').addClass('inactive');
            $('.text-normativas').removeClass('active');

            $('.textN2').removeClass('inactive');
            $('.textN2').addClass('active');
            break;
        default:

            break;
    }
}

function aparece_abajo(num){
    switch (parseInt(num)) {
        case 1:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada1').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Ley 30 de 1992:</b> Servicio Público de Educación Superior. Expresa normas por medio de las cuales se reglamenta la organización del servicio público de la Educación Superior. (El Congreso de Colombia, 28 de Diciembre de 1992).</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC1').addClass('inactive');
            break;
        case 2:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada3').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `<div class="custom-scrollbar_U2_1">
                            <div class="custom-scrollbar__inner_U2_1">
                              <p class="justificado font14" style="color:black!important;"><b>Ley 115 de 1994:</b> Ley General de Educación. Ordena la organización del Sistema Educativo General Colombiano. Esto es, establece normas generales para regular el Servicio Público de la Educación que cumple una función social acorde con las necesidades e intereses de las personas, de la familia y de la sociedad. Respecto a la Educación Superior, señala que ésta es regulada por ley especial, excepto lo dispuesto en la presente Ley. "Excepto en lo dispuesto en la Ley 115 de 1994, sobre Educación Tecnológica que había sido omitida en la Ley 30 de 1992”. Ver Artículo 213 de la Ley 115.</p>
                            </div>
                            <div class="custom-scrollbar__bar_U2_1">
                              <div class="custom-scrollbar__knob_U2_1 cursor"><p class="text-center linea_scroll_U2_1">-</p></div>
                            </div>
                          </div>`;
            $('.imprimetext1').html(text);
            knob = document.querySelector('.custom-scrollbar__knob_U2_1');
            bar = document.querySelector('.custom-scrollbar__bar_U2_1');
            container = document.querySelector('.custom-scrollbar__inner_U2_1');
            scroll();
            $('.imgC1').addClass('inactive');
            break;
        case 3:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada4').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;padding: 10px 0px 1px;"><b>Ley 489 de diciembre 29 de 1998:</b> Por la cual se dictan normas sobre la organización y funcionamiento de las entidades del orden nacional.</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC1').addClass('inactive');
            break;
        case 4:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada5').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Decreto 2230 de 2003:</b> Modificación Estructura Ministerio de Educación Nacional. Sanciona normas por las cuales se modifica la estructura del Ministerio de Educación Nacional, y se dictan otras disposiciones. Dado en Bogotá, D. C., a 8 de agosto de 2003.</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC2').addClass('inactive');
            break;
        case 5:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada6').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;padding: 20px 40px 2px;"><b>Decreto 644 de 2001:</b> Reglamentación sobre puntajes altos en Exámenes de Estado</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC2').addClass('inactive');
            break;
        case 6:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada7').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Acuerdo No. 01 de Junio 23 de 2005:</b> Consejo Nacional de Educación Superior, CESU, por el cual se expide el reglamento interno de funcionamiento.</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC2').addClass('inactive');
            break;
        case 7:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada13').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Decreto 4729 de 2007:</b> Por el cual se otorga la Orden a la Educación Superior y a la Fe Pública "Luis López de Mesa".</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC4').addClass('inactive');
            break;
        case 8:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada14').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Decreto 128 de enero 26 de 1976:</b> Por el cual se dicta el estatuto de inhabilidades, incompatibilidades y responsabilidades de los miembros de las juntas directivas de las entidades descentralizadas y de los representantes legales de estas.</p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC4').addClass('inactive');
            break;
        case 9:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada16').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW1').removeClass('inactive');
            $('.baneW1').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Ley 29 de 1990:</b> "Por la cual se dictan disposiciones para el fomento de la investigación científica y el desarrollo tecnológico y se otorgan facultades extraordinarias".</p>
                        <p class="justificado font14" style="color:black!important;text-align: right;">Tomado de <b class="color-text">mineducación.gov.co </b></p>
                        `;
            $('.imprimetext1').html(text);
            $('.imgC5').addClass('inactive');
            break;
        default:
            break;
    }
}

function aparece_arriba(num) {
    switch (parseInt(num)) {
        case 1:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada2').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `<div class="custom-scrollbar_U2_1">
                            <div class="custom-scrollbar__inner_U2_1">
                              <p class="justificado font14" style="color:black!important;"><b>Decreto 1403 de 1993:</b> Reglamentación de Ley 30 de 1992. Establece que mientras se dictaminan los requisitos para la creación y funcionamiento de los programas académicos de pregrado que puedan ofrecer las instituciones de educación superior, estas deberán presentar al Ministerio de Educación Nacional por conducto del Instituto Colombiano para el Fomento de la Educación Superior (ICFES), con el fin de garantizar el cumplimiento de los fines de la educación, la información referida al correspondiente programa. Así también regula lo referido a la autorización de la oferta de programas de Maestría, Doctorado y Postdoctorado, de conformidad con la referida Ley. (Dado el 21 de Julio de 1993 y Publicado en el Diario Oficial N° 41.476 del 5 de agosto de 1994).</p>
                            </div>
                            <div class="custom-scrollbar__bar_U2_1">
                              <div class="custom-scrollbar__knob_U2_1 cursor"><p class="text-center linea_scroll_U2_1">-</p></div>
                            </div>
                          </div>`;
            $('.imprimetext2').html(text);
            knob = document.querySelector('.custom-scrollbar__knob_U2_1');
            bar = document.querySelector('.custom-scrollbar__bar_U2_1');
            container = document.querySelector('.custom-scrollbar__inner_U2_1');
            $('.imgC1').addClass('inactive');
            scroll();
            break;
        case 2:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada8').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `<div class="custom-scrollbar_U2_1">
                            <div class="custom-scrollbar__inner_U2_1">
                              <p class="justificado font14" style="color:black!important;"><b>Acuerdo No. 02 de Junio 23 de 2005:</b> Consejo Nacional de Educación Superior, CESU, por el cual se subroga el Acuerdo 001 de 2000 del Consejo Nacional de Educación Superior, CESU, y con el cual se expide el reglamento, se determina la integración y las funciones del Consejo Nacional de Acreditación.</p>
                            </div>
                            <div class="custom-scrollbar__bar_U2_1">
                              <div class="custom-scrollbar__knob_U2_1 cursor"><p class="text-center linea_scroll_U2_1">-</p></div>
                            </div>
                          </div>`;
            $('.imprimetext2').html(text);
            knob = document.querySelector('.custom-scrollbar__knob_U2_1');
            bar = document.querySelector('.custom-scrollbar__bar_U2_1');
            container = document.querySelector('.custom-scrollbar__inner_U2_1');
            scroll();
            $('.imgC2').addClass('inactive');
            break;
        case 3:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada9').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;padding: 20px 1px 1px;"><b>Resolución Nº 000167 del 31 de Mayo de 2006:</b> Icfes, por la cual se formaliza una delegación</p>
                        `;
            $('.imprimetext2').html(text);
            $('.imgC3').addClass('inactive');
            break;
        case 4:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada10').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Resolución N° 183 de Febrero 2 de 2004:</b> Por la cual se define la organización de la Comisión Nacional Intersectorial de Aseguramiento de la Calidad de la Educación Superior, CONACES.</p>
                        `;
            $('.imprimetext2').html(text);
            $('.imgC3').addClass('inactive');
            break;
        case 5:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada11').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;padding: 10px 1px 1px;"><b>Decreto 4675 de 2006:</b> Por el cual se Modifica la Estructura del Ministerio de Educación Nacional</p>
                        `;
            $('.imprimetext2').html(text);
            $('.imgC3').addClass('inactive');
            break;
        case 6:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada12').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Decreto 4674 de 2006:</b> Por el cual se modifica la Planta Global del Ministerio de Educación Nacional.</p>
                        `;
            $('.imprimetext2').html(text);
            $('.imgC3').addClass('inactive');
            break;
        case 7:
            $('.btn_x').removeClass('btn_xActive');
            $('.btn_cordenada15').addClass('btn_xActive');
            

            $('.bane_blanco').addClass('inactive');
            $('.bane_blanco').removeClass('active');
            $('.baneW2').removeClass('inactive');
            $('.baneW2').addClass('active');

            var text = `
                        <p class="justificado font14" style="color:black!important;"><b>Ley 1286 de 2009:</b> "Por la cual se modifica la ley 29 de 1990, se transforma a Colciencias en departamento administrativo, se fortalece el sistema nacional de ciencia, tecnología e innovación en Colombia y se dictan otras disposiciones".</p>
                        `;
            $('.imprimetext2').html(text);
            $('.imgC5').addClass('inactive');
            break;
        default:
            break;
    }
}
function cerrar(){
    $('.bane_blanco').addClass('inactive');
}

function funcionalidad_U2(num) {
    if (num == 1) {
        $("#info_funcionalidad_3U2_1").html(`
                                        <img src="assets/img/img_ova/enlace.png" class="img-40 m-auto" onclick="funcionalidad_U2(2)">
                                        `);
        $("#info_funcionalidad_3U2").html(`
                                        <div class="bg-color-activi-c radius-2 img-100 m-auto d-flex">
                                            <div class="p_white p-3 text-center img-50">
                                              <p class="size_13 justificado">Realice la lectura de la sentencia C-337/96 del PDF “sentencia C-337/96” con el fin de ampliar el contenido. Haga clic en el botón PDF:</p>
                                              <br>
                                              <p>Haga clic en el botón PDF.</p>
                                            </div>
                                            <div class="img-50 d-flex">
                                                <a href="assets/PDF/UNIDAD 2/Sentencia-C-337_96.pdf" target="_blank" class="img-60 m-auto"><img src="assets/img/img_ova/pdf.png" class="img-100 m-auto"></a>
                                            </div>
                                        </div>
                                        `);
    }else if (num == 2) {
        $("#info_funcionalidad_3U2").html(`
                                        <img src="assets/img/img_ova/leyendo1.png" class="img-80 m-auto">
                                        `);
        $("#info_funcionalidad_3U2_1").html(`
                                        <div class="bg-color-activi-c radius-2 img-100 m-auto row" style="height: 200px;">
                                            <div class="col-md-12 d-flex" style="height: 60px;">
                                                <img src="assets/img/img_ova/enlace.png" class="position-relative img-30 m-auto" style="top: -40px;">
                                            </div>
                                            <div class="p_white text-center col-md-12 justificado">
                                              <p>Al mismo tiempo realizar la lectura de “la sentencia T-1127/2003” como lectura complementaria siguiendo el link:</b></p>
                                                <a href="https://www.corteconstitucional.gov.co/relatoria/2003/T-1127-03.htm" target="_blank"><button class="btn" style="background: #540F23;color: white;">Clic aquí</button></a>
                                            </div>
                                        </div>
                                        `);
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



function instrucciones(num) {
    if (num == 1) {
        $(".instrucciones-1").removeClass('d-none');
    }else if (num == 2) {
        $(".instrucciones-2").removeClass('d-none');
    }
}

figura = document.getElementById("ctrflecha");

document.addEventListener("keydown",
    function(event) {
        switch (event.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                slide();
                actualizarprogress();
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                slide();
                actualizarprogress();
                break;
        }
    }
);