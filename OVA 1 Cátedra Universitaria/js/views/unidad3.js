$( document ).ready(function() {
    $( ".zoomContainer" ).remove();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $(".menu3").removeClass('d-none');
    $( ".ov-personaje").hide();
    paso = false;
    setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","");
            
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

    
    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        slide();
        // console.log(e);
        switch(stepIndex) {
            default:
            // code block
        }
    });

    slide_predeterminado();


    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider2').css({ width: '100%', height: '500px' });
    
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

    $('a.control_prev2').click(function (e) {
        paraIframe(0);
        moveLeft2();
        e.preventDefault();
    });

    $('a.control_next2').click(function (e) {
        paraIframe(0);
        moveRight2();
        e.preventDefault();
    });
    console.log(tema);
    slide_link(tema);
    /*funcion_vanvas();
    funcion_canvas2();*/
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
    
    controlSlides(stepIndex);
    actualizarprogress(stepIndex+1+17);

}

function modal_scroll_dos(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_dos');
    bar = document.querySelector('.custom-scrollbar__bar_dos');
    container = document.querySelector('.custom-scrollbar__inner_dos');
    scroll();
}

function modal_scroll_tres(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_tres');
    bar = document.querySelector('.custom-scrollbar__bar_tres');
    container = document.querySelector('.custom-scrollbar__inner_tres');
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
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","");
            // $("#content-ova").load("base/unidades/unidad2.html");
            tema = 7;
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 1:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","");
            var pdf = `<p class="p_white">
                            <a href="assets/PDF/UNIDAD 3/pdf-1.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">Código de ética y buen gobierno <b class="text-cafe"><u>Ver</u></b></a>
                      </p>
                      <p class="p_white">
                          <a href="assets/PDF/UNIDAD 3/pdf-2.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">EL presidente y vicepresidente <b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                        <p class="p_white">
                          <a href="assets/PDF/UNIDAD 3/pdf-3.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">Elecciones de los representantes de los estudiantes y de los profesores en UNAULA<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 3/pdf-4.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">Manifiesto de Córdoba<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 3/pdf-5.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">Reforma estatutos UNAULA 2018<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 3/organos-de-gobierno.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">Órganos de gobierno<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 1/Reforma-estatutos-UNAULA-2020.pdf" target="_blank"> <img class="img-circle menu_superior w-30p" src="assets/img/img_template/pdf.png">Reforma estatutos UNAULA 2020<b class="text-cafe"><u>Ver</u></b></a>
                    </p>`;
            $('.pdfs').html(pdf);
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 2:

            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","");
            document.getElementById("actividad17").contentDocument.location.reload(true);
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","Principios que lo regulan");
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","Principios que lo regulan");
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","Principios que lo regulan");
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","Principios que lo regulan");
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","Principios que lo regulan");
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Autónoma","Principios que lo regulan");
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            tema = 1;
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

function funcionalidad_8(num) {
    if (num == 1) {
        $("#funcionalidad_8").html(`
                                    <p class="p_black justificado">Para la Universidad, desde su inicio, la vigencia de la Autonomía fue primordial ya que los principios que debían regirla, así lo exigían. Por ello desde su nombre, se le dio primacía a este principio: Universidad “Autónoma” Latinoamericana.</p>
                                    <p class="p_black justificado">La Corte Constitucional en Sentencia T-1010/10 de 2010, refiriéndose a la autonomía universitaria, expresa: … “la autonomía universitaria se materializa, entre otros, en la capacidad para definir sus estatutos o reglamentos, los cuales deben ser respetados por toda la comunidad educativa, compuesta esta por alumnos y directivas de la institución”.</p>
                                    `);
    }else if (num == 2) {
        $("#funcionalidad_8").html(`<p class="p_black justificado">Es el sello característico de UNAULA. Está consagrado en la parte decisoria de su acta de fundación como la base fundamental de su estructura, conformado por profesores y alumnos, exclusivamente y fundamentado, en la exposición de motivos, en la convicción de los fundadores, para esa época, que, solo esos dos estamentos universitarios, constituyen las fuerzas dinámicas de la universidad.</p>`);
    }else if (num == 3) {
        $("#funcionalidad_8").html(`<p class="p_black justificado">En la parte decisoria del Acta, al consagrar su objetivo principal como institución de educación superior, se expresa que se ofrecerán los “…medios educativos, a los que así lo deseen”. Esto, porque en la exposición de motivos de ese documento se afirma que uno de los motivos para la fundación era, precisamente … “Porque la universidad debe estar abierta a todas las clases de la colectividad, sin distinciones políticas, religiosas, económicas sociales, de sexo o de raza”. Por consiguiente, el pluralismo como principio imperante en UNAULA, se define como la decisión de abrir la Universidad a todos los que lo deseen sin restricciones de ninguna clase.</p>`);
    }else if (num == 4) {
        $("#funcionalidad_8").html(`
                                    <p class="p_black justificado">Este principio, habiendo sido, sin duda, uno de los ideales que con mayor evidencia y vehemencia, estuvo presente en la fundación de UNAULA; inexplicablemente no quedó consagrado, en forma expresa, en su acta de fundación. Sin embargo, al consagrar como primer motivo para la decisión de fundarla, la necesidad de solucionar la crisis que se presentaba en la enseñanza nacional, debido a que no correspondía a los adelantos científicos ni técnicos, ni era adecuada a la realidad del país, tácitamente quedó consagrado este principio, ya que con las dos únicas libertades consagradas en el acta: la libertad científica y la libre investigación científica no sería suficiente para solucionar esa crisis, y, solo con la libertad de cátedra, en el más amplio sentido, se lograría ese cometido.</p>
                                    <p class="p_black justificado">Teniendo en cuenta lo dicho, la libertad de cátedra según el acta de fundación de UNAULA, se define como libertad de impartir y crear conocimiento, en todos los campos, sin ninguna limitación.</p>
                                    `);
    }else if (num == 5) {
        $("#funcionalidad_8").html(`
                                    <p class="p_black justificado">En la parte motiva del Acta se consagra como uno de los motivos para fundar a UNAULA, “porque se debe establecer una universidad que acepte la libre investigación científica en todos los campos, acate y defienda los principios consagrados en la Carta de los Derechos Humanos.” Con base en esto, la investigación, como principio fundacional de UNAULA, puede definirse como “la libertad para desarrollar libremente las actividades que se consideren necesarias o convenientes para crear conocimiento en todos los campos del saber, con el debido respeto a los principios consagrados en la Carta de los Derechos Humanos”.</p>
                                    <div class="d-flex">
                                        <div class="my-auto ml-auto img-40">
                                          <div class="bg-color-activi-c p-3 radius-2" data-toggle="modal" data-target="#actividad-modal5" style="position: relative;top: 60px;left: 28px;border-radius: 1px 1px 32px 1px;">
                                            <p class="justificado p_white size_13">Clic en el ícono para conocer la actividad</p>
                                            <div class="d-flex">
                                              <img src="assets/img/img_ova/actividad_general.png" class="img-50 m-auto">
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                    `);
    }
}

function funcionalidad_9(num) {
        $(".funcionalidad_9_1").html(`
                                    <div class="p-3 d-flex">
                                        <img class="img-80 m-auto" src="assets/img/img_ova/reunion1.png">
                                    </div>
                                    `);
        $(".funcionalidad_9_2").html(`
                                    <div class="p-3 d-flex">
                                        <img class="img-80 m-auto" src="assets/img/img_ova/votacion.png">
                                    </div>
                                    `);
        $(".funcionalidad_9_1, .funcionalidad_9_2").removeClass('bg-blanco');
        $(".funcionalidad_9_1, .funcionalidad_9_2").addClass('bg-morado');
    if (num == 1) {
        $(".funcionalidad_9_1").html(`
                                    <p class="p_white bg-morado p-3 text-center">Quórum:</p>
                                    <p class="p_black justificado" style="height: 110px;overflow: auto;">Es el número mínimo de miembros que se requieren para que lo actuado en una reunión de un órgano cualquiera, sea válido.</p>
                                    `);
        $(".funcionalidad_9_1").removeClass('bg-morado');
        $(".funcionalidad_9_1").addClass('bg-blanco');
    }else if (num == 2) {
        $(".funcionalidad_9_2").html(`
                                    <p class="p_white bg-morado p-3 text-center">La mayoría:</p>
                                    <p class="p_black justificado" style="height: 110px;overflow: auto;">Es el número de votos que se requieren para aprobar una proposición.</p>
                                    `);
        $(".funcionalidad_9_2").removeClass('bg-morado');
        $(".funcionalidad_9_2").addClass('bg-blanco');
    }
}

function funcionalidad_10(num) {
        $(".funcionalidad_10_btn1, .funcionalidad_10_btn2").removeClass('bg-rojo-1');
        $(".funcionalidad_10_btn1, .funcionalidad_10_btn2").addClass('bg-morado');
    if (num == 1) {
        $("#funcionalidad_10").html(`
                                    <div id="funcionalidad_11">
                                        <p class="p_black justificado"><b>El Quórum: </b></p>
                                        <br>
                                        <div style="height: 150px; overflow: auto;">
                                            <p class="p_black justificado">Es igual para todas las funciones de la Sala. Por regla general es de 30 miembros; y solo tiene una excepción; la cual, se presenta por la muerte de los fundadores a partir del momento en que solo queden 60 de ellos vivos. Esta excepción está consagrada en el inciso 7º del artículo 19. Esta norma no incluyó el evento en el cual haya solo 30 fundadores vivos; pero, como en ese caso, la Sala aún existe y las excepciones no se pueden extender por fuera de los límites de la norma, cuando haya 30 fundadores vivos, el cuórum volverá a ser de 30 miembros.</p>
                                            <br>
                                            <p class="p_black justificado">Clic en los círculos para avanzar en la información del Quorum y Mayoría:</p>
                                            <br>
                                        </div>
                                        
                                    </div>
                                    <div class="img-100 d-flex">
                                      <div class="m-auto img-50 d-flex">
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_1 radius-50 bg-rojo-1" onclick="funcionalidad_11(1)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_2 radius-50 bg-morado" onclick="funcionalidad_11(2)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_3 radius-50 bg-morado" onclick="funcionalidad_11(3)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_4 radius-50 bg-morado" onclick="funcionalidad_11(4)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_5 radius-50 bg-morado" onclick="funcionalidad_11(5)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                      </div>
                                    </div>
                                    `);
        $(".funcionalidad_10_btn1").removeClass('bg-morado');
        $(".funcionalidad_10_btn1").addClass('bg-rojo-1');
    }else if (num == 2) {
        $("#funcionalidad_10").html(`
                                    <div id="funcionalidad_11">
                                        <p class="p_black justificado"><b>Para La Mayoría, la regla general es:  </b></p>
                                        <br>
                                        <p class="p_black justificado" style="height: 150px; overflow: auto;">Que para aprobar cualquier propuesta, en la Sala de Fundadores, se requiere “la mitad más uno de los votos de los asistentes”, pero no siempre se aplica esta regla, ya que la mayoría puede cambiar según la función a la cual se refiera. Por eso, existen varias excepciones, porque para algunas de las funciones de la Sala se exige una mayoría diferente.</p>
                                        <br>
                                    </div>
                                    <div class="img-100 d-flex">
                                      <div class="m-auto img-50 d-flex">
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_1 radius-50 bg-morado" onclick="funcionalidad_11(1)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_2 radius-50 bg-morado" onclick="funcionalidad_11(2)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_3 radius-50 bg-rojo-1" onclick="funcionalidad_11(3)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_4 radius-50 bg-morado" onclick="funcionalidad_11(4)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                          <div class="img-20 d-flex">
                                            <div class="m-auto funcionalidad_11_5 radius-50 bg-morado" onclick="funcionalidad_11(5)" style="width: 15px; height: 15px;"></div>
                                          </div>
                                      </div>
                                    </div>
                                    `);
        $(".funcionalidad_10_btn2").removeClass('bg-morado');
        $(".funcionalidad_10_btn2").addClass('bg-rojo-1');
    }
}

function funcionalidad_11(num) {
        $(".funcionalidad_10_btn1, .funcionalidad_10_btn2").removeClass('bg-rojo-1');
        $(".funcionalidad_10_btn1, .funcionalidad_10_btn2").addClass('bg-morado');
        $(".funcionalidad_11_1, .funcionalidad_11_2, .funcionalidad_11_3, .funcionalidad_11_4, .funcionalidad_11_5").removeClass('bg-rojo-1');
        $(".funcionalidad_11_1, .funcionalidad_11_2, .funcionalidad_11_3, .funcionalidad_11_4, .funcionalidad_11_5").addClass('bg-morado');
    if (num == 1) {
        $("#funcionalidad_11").html(`
                                    <p class="p_black justificado"><b>El Quórum: </b></p>
                                    <br>
                                    <p class="p_black justificado">Es igual para todas las funciones de la Sala. Por regla general es de 30 miembros; y solo tiene una excepción; la cual, se presenta por la muerte de los fundadores a partir del momento en que solo queden 60 de ellos vivos. Esta excepción está consagrada en el inciso 7º del artículo 19. Esta norma no incluyó el evento en el cual haya solo 30 fundadores vivos; pero, como en ese caso, la Sala aún existe y las excepciones no se pueden extender por fuera de los límites de la norma, cuando haya 30 fundadores vivos, el cuórum volverá a ser de 30 miembros.</p>
                                    <br>
                                    <p class="p_black justificado">Clic en los círculos para avanzar en la información del Quorum y Mayoría:</p>
                                    <br>
                                    `);
        $(".funcionalidad_11_1").removeClass('bg-morado');
        $(".funcionalidad_11_1").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn1").removeClass('bg-morado');
        $(".funcionalidad_10_btn1").addClass('bg-rojo-1');
    }else if (num == 2) {
        $("#funcionalidad_11").html(`
                                    <div style="height: 150px; overflow: auto;">
                                        <p class="p_black justificado"><b>El Quórum se refiere siempre a los miembros:</b></p>
                                        <br>
                                        <p class="p_black justificado" style="height: 150px; overflow: auto;">En la Sala de Fundadores es igual para todas las funciones. Y, a pesar de que la norma citada se refiere al quórum para deliberar, el establecido en ella se requiere también para decidir, porque no existe norma que establezca un quórum diferente para ello. Solo cambia por muerte de los Fundadores.</p>
                                        <br>
                                    </div>
                                    
                                    `);
        $(".funcionalidad_11_2").removeClass('bg-morado');
        $(".funcionalidad_11_2").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn1").removeClass('bg-morado');
        $(".funcionalidad_10_btn1").addClass('bg-rojo-1');
    }else if (num == 3) {
        $("#funcionalidad_11").html(`
                                    <p class="p_black justificado"><b>Para La Mayoría, la regla general es:  </b></p>
                                    <br>
                                    <p class="p_black justificado" style="height: 150px; overflow: auto;">Que para aprobar cualquier propuesta, en la Sala de Fundadores, se requiere “la mitad más uno de los votos de los asistentes”, pero no siempre se aplica esta regla, ya que la mayoría puede cambiar según la función a la cual se refiera. Por eso, existen varias excepciones, porque para algunas de las funciones de la Sala se exige una mayoría diferente.</p>
                                    <br>
                                    `);
        $(".funcionalidad_11_3").removeClass('bg-morado');
        $(".funcionalidad_11_3").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn2").removeClass('bg-morado');
        $(".funcionalidad_10_btn2").addClass('bg-rojo-1');
    }else if (num == 4) {
        $("#funcionalidad_11").html(`
                                    <p class="p_black justificado"><b>Las excepciones a esa regla general son:</b></p>
                                    <br>
                                    <ul class="p_black">
                                        <li>La designación de la Comisión Permanente porque se aplica el cociente electoral. (art. 34, inc. 3º).</li>
                                        <li>La designación de Asociados Honorarios, porque requiere ¾ de los votos de los asistentes. (art.16).</li>
                                        <li>La reforma de Estatutos, porque requiere 2/3 de los votantes. (art. 19, lit. h).</li>
                                        <li>La disolución voluntaria de la Corporación, porque requiere 2/3 de los asistentes. (art. 6º, inc. 3º).</li>
                                        <li>La liquidación de la Corporación si la disolución fue voluntaria, porque requiere mayoría simple. (art. 6º, inciso 5º).</li>
                                    </ul>
                                    <br>
                                    `);
        $(".funcionalidad_11_4").removeClass('bg-morado');
        $(".funcionalidad_11_4").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn2").removeClass('bg-morado');
        $(".funcionalidad_10_btn2").addClass('bg-rojo-1');
    }else if (num == 5) {
        $("#funcionalidad_11").html(`
                                <div style="height: 150px; overflow: auto;">
                                    <p class="p_black justificado">La mayoría la constituyen los votos, pero la norma que la determine se puede basar en uno de los siguientes factores:</p>
                                    <br>
                                    <ul class="p_black">
                                        <li>En el número de miembros que conforman el órgano.</li>
                                        <li>En los votos que se emitan o.</li>
                                        <li>En los asistentes a la reunión.</li>
                                    </ul>
                                    <br>
                                </div>
                                    
                                    `);
        $(".funcionalidad_11_5").removeClass('bg-morado');
        $(".funcionalidad_11_5").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn2").removeClass('bg-morado');
        $(".funcionalidad_10_btn2").addClass('bg-rojo-1');
    }
}

function funcionalidad_12(num) {
    if (num == 1) {
        $("#info_funcionalidad_12_1").html(`
                                        <div class="bg-color-activi-c radius-2 img-100 m-auto d-flex">
                                            <div class="p_white p-3 text-center img-65">
                                              <p class="size_13 justificado">Con el fin de ampliar el contenido anterior, lea el documento PDF <b><i>“Elecciones de los representantes de los estudiantes y de los profesores en UNAULA”.</i></b></p>
                                              <br>
                                              <p class="size_13">Haga clic en el botón PDF.</p>
                                            </div>
                                            <div class="img-35 d-flex">
                                                <a href="assets/PDF/UNIDAD 3/pdf-5.pdf" target="_blank" class="img-60 m-auto"><img src="assets/img/img_ova/pdf.png" class="img-100 m-auto"></a>
                                            </div>
                                        </div>
                                        `);
        $("#info_funcionalidad_12_2").html(`
                                        <img src="assets/img/img_ova/escritura1.png" class="img-40 shadow rounded-circle m-auto">
                                        `);
    }else if (num == 2) {
        /*alert();*/
        $("#info_funcionalidad_12_2").html(`
                                        <div class="radius-2 img-100 m-auto" style="background: #D9D9D9;">
                                            <div class="img-100">
                                                <div class="img-15 m-2 d-flex">
                                                    <img src="assets/img/img_ova/escritura1.png" class="img-100 m-auto">
                                                </div>
                                            </div>
                                            <div class="p_black p-3 text-center img-100">
                                              <p class="justificado size_13">Después de la lectura, realice un paralelo entre cogobierno de UNAULA y el cogobierno Córdoba, teniendo en cuenta la lectura del documento PDF <b><a href="assets/PDF/UNIDAD 3/pdf-6.pdf" target="_blank" class="p_black">“Manifiesto de córdoba".</a></b></p>
                                              <br>
                                            </div>
                                        </div>
                                        `);
        $("#info_funcionalidad_12_1").html(`
                                        <img src="assets/img/img_ova/leyendo1.png" class="img-80 m-auto">
                                        `);
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

function aprecer(num){
    switch (parseInt(num)) {
        case 1:
            $('.botones').removeClass('escondida');

            $(".funcionalidad_10_btn1").removeClass('bg-morado');
            $(".funcionalidad_10_btn1").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn2").addClass('bg-morado');
            $(".funcionalidad_10_btn2").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx1').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora1').removeClass('btn_moraInactive');
            $('.mora1').addClass('btn_moraActive');
            break;
        case 2:
            $('.botones').removeClass('escondida');

            $(".funcionalidad_10_btn2").removeClass('bg-morado');
            $(".funcionalidad_10_btn2").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn1").addClass('bg-morado');
            $(".funcionalidad_10_btn1").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx3').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora3').removeClass('btn_moraInactive');
            $('.mora3').addClass('btn_moraActive');
            break;
        default:
            // statements_def
            break;
    }

}
function fun35(num){
    switch (parseInt(num)) {
        case 1:
            $(".funcionalidad_10_btn1").removeClass('bg-morado');
            $(".funcionalidad_10_btn1").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn2").addClass('bg-morado');
            $(".funcionalidad_10_btn2").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx1').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora1').removeClass('btn_moraInactive');
            $('.mora1').addClass('btn_moraActive');

            break;
        case 2:
            $(".funcionalidad_10_btn1").removeClass('bg-morado');
            $(".funcionalidad_10_btn1").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn2").addClass('bg-morado');
            $(".funcionalidad_10_btn2").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx2').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora2').removeClass('btn_moraInactive');
            $('.mora2').addClass('btn_moraActive');

            break;
        case 3:
            $(".funcionalidad_10_btn2").removeClass('bg-morado');
            $(".funcionalidad_10_btn2").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn1").addClass('bg-morado');
            $(".funcionalidad_10_btn1").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx3').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora3').removeClass('btn_moraInactive');
            $('.mora3').addClass('btn_moraActive');

            break;
        case 4:
            $(".funcionalidad_10_btn2").removeClass('bg-morado');
            $(".funcionalidad_10_btn2").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn1").addClass('bg-morado');
            $(".funcionalidad_10_btn1").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx4').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora4').removeClass('btn_moraInactive');
            $('.mora4').addClass('btn_moraActive');

            break;
        case 5:
            $(".funcionalidad_10_btn2").removeClass('bg-morado');
            $(".funcionalidad_10_btn2").addClass('bg-rojo-1');

            $(".funcionalidad_10_btn1").addClass('bg-morado');
            $(".funcionalidad_10_btn1").removeClass('bg-rojo-1');

            $('.contenttex').addClass('d-none');
            $('.contx5').removeClass('d-none');

            $('.btn_mora').removeClass('btn_moraActive');
            $('.btn_mora').addClass('btn_moraInactive');
            
            $('.mora5').removeClass('btn_moraInactive');
            $('.mora5').addClass('btn_moraActive');

            break;
        default:
            // statements_def
            break;
    }
}

figura = document.getElementById("ctrflecha");