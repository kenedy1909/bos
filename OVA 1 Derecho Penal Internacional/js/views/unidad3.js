$( document ).ready(function() {
    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $(".menu3").removeClass('d-none');
    setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            
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
        slide(0);
        actualizarprogress();
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide(0);
        actualizarprogress();
    });
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a href="assets/PDF/UNIDAD 3/jurisdicción universal la perspectiva.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Jurisdicción universal.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    if (num = 1) {
        controlSlides(stepIndex+2);
    }else{
        controlSlides(stepIndex+1);
    }
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

figura = document.getElementById("ctrflecha");

document.addEventListener("keydown",
    function(event) {
        switch (event.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                slide(1);
                actualizarprogress();
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                slide(1);
                actualizarprogress();
                break;
        }
    }
);

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 9;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
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

function juicio(num) {
    $(".btn-juicio").removeClass('bg-piel');
    $(".btn-juicio").addClass('bg-cafe-activi');
    $(".btn-juicio-"+num).removeClass('bg-cafe-activi');
    $(".btn-juicio-"+num).addClass('bg-piel');
    if (num == 1) {
        $("#juicio").html('<p class="justificado p_black">En consecuencia, el ejercicio de la Jurisdicción Universal permite la investigación, enjuiciamiento y sanción de una persona por parte de los tribunales internos de un estado, sin importar el lugar del crimen, la nacionalidad de la víctima o victimario, pues lo jurídicamente relevante es la categoría de la conducta como elemento para determinar el inicio de la acción penal.</p>');
    }else if (num == 2) {
        $("#juicio").html('<p class="justificado p_black">El principio de Jurisdicción Universal aun cuando no es de amplia aceptación por los estados sí existe un importante número de casos de su ejercicio, al igual que existe legislación nacional y tratados internacionales que reconoce el principio de jurisdicción e incluye las reglas procesales para su aplicación.</p><p class="justificado p_black">Resulta pertinente el análisis que hace la Corte Constitucional de Colombia en sentencia C-1189 del 2000 sobre el principio de Jurisdicción Universal.</p><br><a href="assets/PDF/analisis1.pdf" target="p_black"><button class="p_white ml-auto btn bg-cafe-activi"><img class="img-10 m-auto" src="assets/img/img_ova/pdf-file.png"><b>Ver análisis</b></button></a>');
    }else if (num == 3) {
        $("#juicio").html('<p class="justificado p_black">Por otra parte, el código penal colombiano reconoce el principio de jurisdicción universal de forma expresa en su artículo 16 numeral 6, estableciendo los requisitos para su aplicación. </p><p class="justificado p_black">Para visualizar el artículo, haga clic en Ver imagen.</p><br><div><button class="p_white ml-auto btn bg-cafe-activi" data-toggle="modal" data-target="#modal-juicio"><b>Ver imagen</b></button></div>');
    }else if (num == 4) {
        $("#juicio").html('<p class="justificado p_black">Finalmente, se destaca que aun cuando Colombia no ha activado la aplicación del principio de Jurisdicción Universal, nada obsta para que en el futuro se pueda realizar, pues existen los fundamentos jurídicos para ello..</p>');
    }
}

function eichmann(num) {
    $(".eichmann-img").removeClass('bg-amarillo-c');
    $(".eichmann-img").addClass('bg-blanco');
    $(".eichmann-img-"+num).removeClass('bg-blanco');
    $(".eichmann-img-"+num).addClass('bg-amarillo-c');

    if (num == 1) {
        var texto = `
                    <div class="p-4 bg-amarillo-c border-t-r border-b-r h-fit">
                        <div style="height: 266px;overflow: auto;">
                            <p class="justificado p_black">Se trata del <b>secuestro de Adolf Eichman</b> por parte de la policía secreta de Israel, para ser juzgado por los crímenes cometidos durante la Segunda Guerra Mundial. </p>
                            <br>
                            <p class="justificado p_black">Antes de hablar del debate sobre el ejercicio de Jurisdicción Universal, debe aclararse que se dio una discusión en torno a la forma como fue detenido el señor Eichmann, toda vez que Israel ingresó a territorio argentino sin autorización y secuestró al señor Eichmann que se encontraba escondido allí desde el fin de la guerra.</p>
                        </div>
                      
                    </div>
                    `;
        $("#eichmann").html(texto);
    }else if (num == 2) {
        var texto = `
                    <div class="p-4 bg-amarillo-c border-t-r border-b-r h-fit">
                        <div style="height: 266px;overflow: auto;overflow-x: hidden;">
                            <p class="justificado p_black">Esa discusión en torno a la forma <b>como fue “detenido”</b> el señor Eichmann, fue su principal argumento de defensa en la corte de distrito en Israel, sin embargo, el tribunal consideró que lo relacionado con la forma de lograr su comparecencia era un debate entre los Estados en el derecho internacional público, que en nada afectaba el proceso.</p>
                            <p class="justificado p_black">El juicio se adelantó tomando como base el principio de jurisdicción pasiva, la jurisdicción por razones de seguridad (principio de protección) y principio de jurisdicción universal.</p>
                            <br>
                            <p class="justificado p_black">Para profundizar en el análisis  de este  tema, visualice el siguiente video donde se explica este principio y sus casos más emblemáticos.</p>
                            <div class="bg-cafe-activi ml-auto img-40 radius-2 d-flex p-3" data-toggle="modal" data-target="#modal-eichmann">
                              <p class="p_white"><b>VER VIDEO</b></p>
                              <img class="img-65 p-2 my-auto ml-auto" src="assets/img/img_ova/reproductor.png">
                            </div>
                        </div>
                      
                    </div>
                    `;
        $("#eichmann").html(texto);
    }else if (num == 3) {
        var texto = `
                    <div class="p-4 bg-amarillo-c border-t-r border-b-r h-fit">
                        <div style="height: 266px;overflow: auto;">
                            <p class="justificado p_black">De acuerdo con la Corte Distrital, al ser <b>Israel la nación de los judíos</b>, esta tiene un nexo directo con el crimen cometido por Eichmann en contra de judíos, debido a la jurisdicción personal pasiva y a la jurisdicción por razones de seguridad (la identidad del pueblo judío). Acerca de la jurisdicción universal, la Corte Distrital afirmó que la Ley por la que se juzgaba a Eichmann no sólo regulaba crímenes prohibidos en el ordenamiento interno de Israel, sino que también representaba el interés de la comunidad internacional en reprimir una violación al derecho internacional.</p>
                        </div>
                      
                    </div>
                    `;
        $("#eichmann").html(texto);
    }else if (num == 4) {
        var texto = `
                    <div class="p-4 bg-amarillo-c border-t-r border-b-r h-fit custom-scrollbar10">
                        <div class="custom-scrollbar__inner10">
                          <p class="justificado p_black">Se considera que, en el derecho internacional no se restringe que un Estado en ausencia de una Corte Penal Internacional, pueda juzgar a los responsables de crímenes internacionales, porque, atendiendo a la magnitud del daño, la jurisdicción de estos crímenes es universal.</p>
                          <br>
                          <p class="justificado p_black">No debe perderse de vista un hecho especial, es que en este caso se enjuició al señor Eichmann por ordenar la masacre de miles de judíos durante la segunda guerra mundial, facultándose Israel para ello, en la Convención contra el Genocidio creada en 1948</p>
                          <br>
                          <p class="justificado p_black">Así mismo, es un antecedente importante, en tanto es el juzgamiento por un Estado que no existía para la época de los hechos, pues recordemos que Israel surge como Estado con el fin de la segunda guerra mundial y se considera la nación de todo el pueblo judío.</p>
                        </div>
                        <div class="custom-scrollbar__bar10">
                          <div class="custom-scrollbar__knob10 cursor"><p class="text-center linea_scroll10">-</p></div>
                        </div>
                    </div>
                    `;
        $("#eichmann").html(texto);
        modal_scroll10();
    }
}

function pinochet(num) {
    if (num == 1) {
        $("#pinochet").html('');
    }else if (num == 2) {
        var texto = `
                    <a href="http://www.derechos.net/doc/pino/lores1.html" target="_blank">
                        <div class="row pl-3">
                          <div class="col-md-12 row">
                            <div class="col-md-1 p-0 zindex" style="">
                              <img src="assets/img/img_template/actividad_general.png" class="imgactividad" style="">
                            </div>
                            <div class="col-md-11">
                              <div class="titulo_sub" style="">
                                <p style=""><b>ACTIVIDAD # 8</b></p>
                              </div>
                              <br>
                            </div>
                            <div class="col-md-12 banner_activi bg-amarillo-c">
                              <div class="pr-3">
                                <p class="p_black pl-3">Como parte del debate, lea el documento "El análisis de la cámara de los lores" el cual ejemplifica la discusión que al respecto se dio en Inglaterra.</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 mt-2 mb-5">
                              <div class="d-flex">
                                  <div class="img-45 m-auto">
                                    <img src="assets/img/img_ova/reloj.png" class="img-50">
                                  </div>
                                  <p class="p_black pl-3 m-auto">Tiempo sugerido: <b>40 minutos</b></p>
                              </div>
                          </div>
                        </div>
                    </a>
                    `;
        $("#pinochet").html(texto);
    }else if (num == 3) {
        var texto = `
                          <div class="d-flex h-100">
                            <button class="p_white bg-cafe-activi btn p-2 m-auto" data-toggle="modal" data-target="#modal-actividad"><b>VER ACTIVIDAD</b></button>
                          </div>
                    `;
        $("#pinochet").html(texto);
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