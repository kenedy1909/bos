$( document ).ready(function() {
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
        moveLeft2();
        e.preventDefault();
    });

    $('a.control_next2').click(function (e) {
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
                        <a href="assets/PDF/UNIDAD 3/jurisdicci??n universal la perspectiva.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Jurisdicci??n universal.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    
    controlSlides(stepIndex);

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
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","");
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 7;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","");
            var pdf = `<p class="p_white">
                            <a href="assets/PDF/UNIDAD 3/pdf-1.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">C??digo de ??tica y buen gobierno <b class="text-cafe"><u>Ver</u></b></a>
                      </p>
                      <p class="p_white">
                          <a href="assets/PDF/UNIDAD 3/pdf-2.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">EL presidente y vicepresidente <b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                        <p class="p_white">
                          <a href="assets/PDF/UNIDAD 3/pdf-3.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">Elecciones de los representantes de los estudiantes y de los profesores en UNAULA<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 3/pdf-4.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">Manifiesto de C??rdoba<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 3/pdf-5.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">Reforma estatutos UNAULA 2018<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 3/organos-de-gobierno.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">??rganos de gobierno<b class="text-cafe"><u>Ver</u></b></a>
                    </p>
                    <p class="p_white">
                        <a href="assets/PDF/UNIDAD 1/Reforma-estatutos-UNAULA-2020.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png">Reforma estatutos UNAULA 2020<b class="text-cafe"><u>Ver</u></b></a>
                    </p>`;
            $('.pdfs').html(pdf);
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","Principios que lo regulan");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","Principios que lo regulan");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","Principios que lo regulan");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","Principios que lo regulan");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","Principios que lo regulan");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","3. El cogobierno en la Universidad Aut??noma","Principios que lo regulan");
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
                                    <p class="p_black justificado">Para la Universidad, desde su inicio, la vigencia de la Autonom??a fue primordial ya que los principios que deb??an regirla, as?? lo exig??an. Por ello desde su nombre, se le dio primac??a a este principio: Universidad ???Aut??noma??? Latinoamericana.</p>
                                    <p class="p_black justificado">La Corte Constitucional en Sentencia T-1010/10 de 2010, refiri??ndose a la autonom??a universitaria, expresa: ??? ???la autonom??a universitaria se materializa, entre otros, en la capacidad para definir sus estatutos o reglamentos, los cuales deben ser respetados por toda la comunidad educativa, compuesta esta por alumnos y directivas de la instituci??n???.</p>
                                    `);
    }else if (num == 2) {
        $("#funcionalidad_8").html(`<p class="p_black justificado">Es el sello caracter??stico de UNAULA. Est?? consagrado en la parte decisoria de su acta de fundaci??n como la base fundamental de su estructura, conformado por profesores y alumnos, exclusivamente y fundamentado, en la exposici??n de motivos, en la convicci??n de los fundadores, para esa ??poca, que, solo esos dos estamentos universitarios, constituyen las fuerzas din??micas de la universidad.</p>`);
    }else if (num == 3) {
        $("#funcionalidad_8").html(`<p class="p_black justificado">En la parte decisoria del Acta, al consagrar su objetivo principal como instituci??n de educaci??n superior, se expresa que se ofrecer??n los ??????medios educativos, a los que as?? lo deseen???. Esto, porque en la exposici??n de motivos de ese documento se afirma que uno de los motivos para la fundaci??n era, precisamente ??? ???Porque la universidad debe estar abierta a todas las clases de la colectividad, sin distinciones pol??ticas, religiosas, econ??micas sociales, de sexo o de raza???. Por consiguiente, el pluralismo como principio imperante en UNAULA, se define como la decisi??n de abrir la Universidad a todos los que lo deseen sin restricciones de ninguna clase.</p>`);
    }else if (num == 4) {
        $("#funcionalidad_8").html(`
                                    <p class="p_black justificado">Este principio, habiendo sido, sin duda, uno de los ideales que con mayor evidencia y vehemencia, estuvo presente en la fundaci??n de UNAULA; inexplicablemente no qued?? consagrado, en forma expresa, en su acta de fundaci??n. Sin embargo, al consagrar como primer motivo para la decisi??n de fundarla, la necesidad de solucionar la crisis que se presentaba en la ense??anza nacional, debido a que no correspond??a a los adelantos cient??ficos ni t??cnicos, ni era adecuada a la realidad del pa??s, t??citamente qued?? consagrado este principio, ya que con las dos ??nicas libertades consagradas en el acta: la libertad cient??fica y la libre investigaci??n cient??fica no ser??a suficiente para solucionar esa crisis, y, solo con la libertad de c??tedra, en el m??s amplio sentido, se lograr??a ese cometido.</p>
                                    <p class="p_black justificado">Teniendo en cuenta lo dicho, la libertad de c??tedra seg??n el acta de fundaci??n de UNAULA, se define como libertad de impartir y crear conocimiento, en todos los campos, sin ninguna limitaci??n.</p>
                                    `);
    }else if (num == 5) {
        $("#funcionalidad_8").html(`
                                    <p class="p_black justificado">En la parte motiva del Acta se consagra como uno de los motivos para fundar a UNAULA, ???porque se debe establecer una universidad que acepte la libre investigaci??n cient??fica en todos los campos, acate y defienda los principios consagrados en la Carta de los Derechos Humanos.??? Con base en esto, la investigaci??n, como principio fundacional de UNAULA, puede definirse como ???la libertad para desarrollar libremente las actividades que se consideren necesarias o convenientes para crear conocimiento en todos los campos del saber, con el debido respeto a los principios consagrados en la Carta de los Derechos Humanos???.</p>
                                    <div class="d-flex">
                                        <div class="my-auto ml-auto img-40">
                                          <div class="bg-color-activi-c p-3 radius-2" data-toggle="modal" data-target="#actividad-modal5">
                                            <p class="justificado p_white">Clic en el ??cono para conocer la actividad</p>
                                            <div class="d-flex">
                                              <img src="assets/img/img_ova/actividad_general.png" class="img-40 m-auto">
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
                                    <p class="p_white bg-morado p-3 text-center">Qu??rum:</p>
                                    <p class="p_black justificado">Es el n??mero m??nimo de miembros que se requieren para que lo actuado en una reuni??n de un ??rgano cualquiera, sea v??lido.</p>
                                    `);
        $(".funcionalidad_9_1").removeClass('bg-morado');
        $(".funcionalidad_9_1").addClass('bg-blanco');
    }else if (num == 2) {
        $(".funcionalidad_9_2").html(`
                                    <p class="p_white bg-morado p-3 text-center">La mayor??a:</p>
                                    <p class="p_black justificado">Es el n??mero de votos que se requieren para aprobar una proposici??n.</p>
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
                                        <p class="p_black justificado"><b>El Qu??rum: </b></p>
                                        <br>
                                        <p class="p_black justificado">Es igual para todas las funciones de la Sala. Por regla general es de 30 miembros; y solo tiene una excepci??n; la cual, se presenta por la muerte de los fundadores a partir del momento en que solo queden 60 de ellos vivos. Esta excepci??n est?? consagrada en el inciso 7?? del art??culo 19. Esta norma no incluy?? el evento en el cual haya solo 30 fundadores vivos; pero, como en ese caso, la Sala a??n existe y las excepciones no se pueden extender por fuera de los l??mites de la norma, cuando haya 30 fundadores vivos, el cu??rum volver?? a ser de 30 miembros.</p>
                                        <br>
                                        <p class="p_black justificado">Clic en los c??rculos para avanzar en la informaci??n del Quorum y Mayor??a:</p>
                                        <br>
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
                                        <p class="p_black justificado"><b>Para La Mayor??a, la regla general es:  </b></p>
                                        <br>
                                        <p class="p_black justificado">Que para aprobar cualquier propuesta, en la Sala de Fundadores, se requiere ???la mitad m??s uno de los votos de los asistentes???, pero no siempre se aplica esta regla, ya que la mayor??a puede cambiar seg??n la funci??n a la cual se refiera. Por eso, existen varias excepciones, porque para algunas de las funciones de la Sala se exige una mayor??a diferente.</p>
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
                                    <p class="p_black justificado"><b>El Qu??rum: </b></p>
                                    <br>
                                    <p class="p_black justificado">Es igual para todas las funciones de la Sala. Por regla general es de 30 miembros; y solo tiene una excepci??n; la cual, se presenta por la muerte de los fundadores a partir del momento en que solo queden 60 de ellos vivos. Esta excepci??n est?? consagrada en el inciso 7?? del art??culo 19. Esta norma no incluy?? el evento en el cual haya solo 30 fundadores vivos; pero, como en ese caso, la Sala a??n existe y las excepciones no se pueden extender por fuera de los l??mites de la norma, cuando haya 30 fundadores vivos, el cu??rum volver?? a ser de 30 miembros.</p>
                                    <br>
                                    <p class="p_black justificado">Clic en los c??rculos para avanzar en la informaci??n del Quorum y Mayor??a:</p>
                                    <br>
                                    `);
        $(".funcionalidad_11_1").removeClass('bg-morado');
        $(".funcionalidad_11_1").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn1").removeClass('bg-morado');
        $(".funcionalidad_10_btn1").addClass('bg-rojo-1');
    }else if (num == 2) {
        $("#funcionalidad_11").html(`
                                    <p class="p_black justificado"><b>El Qu??rum se refiere siempre a los miembros:</b></p>
                                    <br>
                                    <p class="p_black justificado">En la Sala de Fundadores es igual para todas las funciones. Y, a pesar de que la norma citada se refiere al qu??rum para deliberar, el establecido en ella se requiere tambi??n para decidir, porque no existe norma que establezca un qu??rum diferente para ello. Solo cambia por muerte de los Fundadores.</p>
                                    <br>
                                    `);
        $(".funcionalidad_11_2").removeClass('bg-morado');
        $(".funcionalidad_11_2").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn1").removeClass('bg-morado');
        $(".funcionalidad_10_btn1").addClass('bg-rojo-1');
    }else if (num == 3) {
        $("#funcionalidad_11").html(`
                                    <p class="p_black justificado"><b>Para La Mayor??a, la regla general es:  </b></p>
                                    <br>
                                    <p class="p_black justificado">Que para aprobar cualquier propuesta, en la Sala de Fundadores, se requiere ???la mitad m??s uno de los votos de los asistentes???, pero no siempre se aplica esta regla, ya que la mayor??a puede cambiar seg??n la funci??n a la cual se refiera. Por eso, existen varias excepciones, porque para algunas de las funciones de la Sala se exige una mayor??a diferente.</p>
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
                                        <li>La designaci??n de la Comisi??n Permanente porque se aplica el cociente electoral. (art. 34, inc. 3??).</li>
                                        <li>La designaci??n de Asociados Honorarios, porque requiere ?? de los votos de los asistentes. (art.16).</li>
                                        <li>La reforma de Estatutos, porque requiere 2/3 de los votantes. (art. 19, lit. h).</li>
                                        <li>La disoluci??n voluntaria de la Corporaci??n, porque requiere 2/3 de los asistentes. (art. 6??, inc. 3??).</li>
                                        <li>La liquidaci??n de la Corporaci??n si la disoluci??n fue voluntaria, porque requiere mayor??a simple. (art. 6??, inciso 5??).</li>
                                    </ul>
                                    <br>
                                    `);
        $(".funcionalidad_11_4").removeClass('bg-morado');
        $(".funcionalidad_11_4").addClass('bg-rojo-1');
        $(".funcionalidad_10_btn2").removeClass('bg-morado');
        $(".funcionalidad_10_btn2").addClass('bg-rojo-1');
    }else if (num == 5) {
        $("#funcionalidad_11").html(`
                                    <p class="p_black justificado">La mayor??a la constituyen los votos, pero la norma que la determine se puede basar en uno de los siguientes factores:</p>
                                    <br>
                                    <ul class="p_black">
                                        <li>En el n??mero de miembros que conforman el ??rgano.</li>
                                        <li>En los votos que se emitan o.</li>
                                        <li>En los asistentes a la reuni??n.</li>
                                    </ul>
                                    <br>
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
                                        <div class="bg-color-activi-c radius-2 img-90 m-auto d-flex">
                                            <div class="p_white p-3 text-center img-65">
                                              <p>Con el fin de ampliar el contenido anterior, lea el documento PDF <b><i>???Elecciones de los representantes de los estudiantes y de los profesores en UNAULA???.</i></b></p>
                                              <br>
                                              <p>Haga clic en el bot??n PDF.</p>
                                            </div>
                                            <div class="img-35 d-flex">
                                                <a href="assets/PDF/UNIDAD 3/pdf-5.pdf" target="_blank" class="img-60 m-auto"><img src="assets/img/img_ova/pdf.png" class="img-100 m-auto"></a>
                                            </div>
                                        </div>
                                        `);
    }else if (num == 2) {
        /*alert();*/
        $("#info_funcionalidad_12_2").html(`
                                        <div class="radius-2 img-100 m-auto" style="background: #D9D9D9;">
                                            <div class="img-100">
                                                <div class="img-20 m-2 d-flex">
                                                    <img src="assets/img/img_ova/escritura1.png" class="img-100 m-auto">
                                                </div>
                                            </div>
                                            <div class="p_black p-3 text-center img-100">
                                              <p class="justificado">Despu??s de la lectura, realice un paralelo entre cogobierno de UNAULA y el cogobierno C??rdoba, teniendo en cuenta la lectura del documento PDF <b><a href="assets/PDF/UNIDAD 3/pdf-6.pdf" target="_blank" class="p_black">???Manifiesto de c??rdoba".</a></b></p>
                                              <br>
                                            </div>
                                        </div>
                                        `);
    }
}