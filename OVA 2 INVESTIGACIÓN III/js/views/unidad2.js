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

    slide_predeterminado();
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

    $(".p4-1").on("hover", function () {
        // $(".p4-2").show(1000)
        alert("añldskad")
    })

    slide_link(tema);
   
    
});

function hoverp41(argument) {
    $(".p4-2").show(200)
}

function hoverp42(argument) {
    $(".p4-4").show(200)
}

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
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
    
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Elementos generales para la comprensión del Marco Teórico","");
            
            tema = 10;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Elementos generales para la comprensión del Marco Teórico","");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","","");
            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","","");
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","","");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        
        default:
            break;
    }
}


function svg_img(num) {
            $("#svg-info").addClass('d-none');
    switch(parseInt(num)){
        case 1:
            $("#svg-info").html(`
                                <div class="radius-2 img-100 border-verde-o bg-verde-c opacity-7" style="background: #c929808a;border: solid #c92980;">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-verde" style="background: #c92980;height: 40px;width: 40px;border-radius: 50%;">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="custom-scrollbar_uno pr-3">
                                      <div class="custom-scrollbar__inner_uno">
                                        <p class="p_black justificado">Cuando se inicia el trabajo del marco teórico, nos encontramos en ocasiones, en disyuntivas sobre hacia dónde dirigir nuestro tema de investigación, o a veces encontramos demasiados aportes y se nos dificulta delimitar los temas; este es uno de los mayores obstáculos que se encuentran en la elaboración del marco teórico, el cómo empezar, pero la clave está en delimitar, cuáles son las investigaciones anteriores que se han hecho en relación a nuestro tema de investigación.</p>
                                        <br>
                                        <p class="p_black justificado">Por lo que, lo que se debe hacer es seguir la línea que responde a nuestro problema de investigación y no irnos hacia otras inclinaciones que nos llamen la atención, la clave radica en enfocarse en su investigación y solo en ella.</p>
                                        
                                      </div>
                                      <div class="custom-scrollbar__bar_uno">
                                        <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "left: 0px; bottom: 0px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        case 2:
            $("#svg-info").html(`
                                <div class="radius-2 img-100 border-azul-o bg-azul-c opacity-7" style="background: #16daf752;border: solid #16daf7;">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-azul" style="background: #16daf7;height: 40px;width: 40px;border-radius: 50%;">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="custom-scrollbar_uno pr-3">
                                      <div class="custom-scrollbar__inner_uno">
                                        <p class="p_black justificado">El marco teórico es fundamental en una investigación, ya que es la guía y la referencia bibliográfica de nuestra investigación.</p>
                                        <br>
                                        <p class="p_black justificado">A través del marco teórico se puede perfectamente tomar posición sobre el asunto estudiado.</p>
                                        <br>
                                        <p class="p_black justificado">Lo importante es que quede claro si las teorías que existen sobre el problema que investigamos resuelven o no el problema y por qué.</p>
                                        <br>
                                        <p class="p_black justificado">En gran medida, y aunque muchos no comparten esta afirmación, se puede considerar el Marco Teórico como un ensayo expositivo, descriptivo, sobre el asunto investigado. Algunos suponen que más bien se trata de una gran reseña sobre las distintas posiciones que existen.</p>
                                        
                                      </div>
                                      <div class="custom-scrollbar__bar_uno">
                                        <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "right: 40px; bottom: 0px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        case 3:
            $("#svg-info").html(`
                                <div class="radius-2 img-100 border-verde-mo bg-verde-mc opacity-7" style="background: #16daf752;border: solid #1898ab;">
                                  <div class="img-100 d-flex" style="opacity: initial;">
                                    <button type="button" class="btn position-relative ml-auto cerrar-svg" data-dismiss="modal" aria-label="Close" style="right: -40px; top: -20px;">
                                      <div class="m-0 p-0 x-modal-verde-o" style="background: #1898ab;height: 40px;width: 40px;border-radius: 50%;">
                                        <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="m-3 img-100" style="opacity: initial;">
                                    <div class="custom-scrollbar_uno pr-3">
                                      <div class="custom-scrollbar__inner_uno">
                                        <p class="p_black justificado">Lo importante es que con esta revisión se vaya perfilando ya la forma como vamos a encarar los resultados encontrados, dado que podemos en cierta manera desde el Marco Teórico predecir estados futuros.</p>
                                      </div>
                                      <div class="custom-scrollbar__bar_uno">
                                        <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `);
            $("#svg-info").removeClass('d-none');
            $("#svg-info").attr('style', "left: 0px; bottom: 0px;");
            $(".cerrar-svg").on('click', cerrar_svg);
            modal_scroll_uno();
            break;
        default:
            break;
    }
}
function cerrar_svg() {
    $('#svg-info').addClass('d-none');
}
function modal_scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
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
function conjuntos(num){
    $(".info_conjuntos").removeClass('fondo_azul_claro');
    $(".info_conjuntos"+num).addClass('fondo_azul_claro');
    $(".info_conjuntos").removeClass('shadow');
    $(".info_conjuntos"+num).addClass('shadow');
    if (num == 1) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Para algunos autores como Lyotard (1987), la Postmodernidad más que un momento en tiempo o lugar, se trata de una condición devenida a causa de las promesas rotas y efectos adversos que la modernidad originó, lo cual llevó a la sociedad al escepticismo y desconfianza de aquellos discursos que aseguraban el dominio del mundo y el progreso en todas las esferas. 

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 2) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Al precisar que a través de la razón no se lograba lo esperado, el hombre busca otras maneras de satisfacer sus necesidades, y encuentra respuesta en el placer, placer que debe ser ocupado en el presente, pues el futuro es incierto. Lo anterior conlleva a un aumento del consumismo, ya que, aquellos relatos que prometían un mundo mejor donde existía la paz, la libertad y la igualdad, ya no son creíbles e incluso llevan la desconfianza hacia quien quiera volver a ellos

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 3) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Se deja de lado el uso de la razón; lo importante ahora es el entretenimiento, justificando el hombre que la realidad y el mundo son complejos, y que, a través del razonamiento no es posible dimensionarlos y mucho menos dominarlos; así que ahora cada idea tiene algo de verdad, pero ni siquiera haciendo una suma de ellas, se logra explicar el mundo; no hay un relato absoluto, cada quien tiene su propia perspectiva o subjetividad y es cada uno el encargado de dar sentido o explicación a esa realidad. 

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 4) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Es en la postmodernidad que el ser humano hace una exigencia del reconocimiento de la pluralidad, negando la posibilidad de homogeneización que planteaba la Modernidad, defendiendo la diversidad como algo genuino y aduciendo la necesidad de libertad para decidir el estilo y forma de vida que cada quien decide llevar; esto da paso a  visibilizar las minorías que hasta el momento se encontraban relegadas por no considerarse relevantes para los procesos de avance de la sociedad, pero ahora se les da lugar otorgándoles valor e integrando la diversidad. 

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 5) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Finalmente, en este estado, el ser humano busca liberarse de estándares y prototipos que de manera sutil le han sido impuestos, y para ello hace uso del arte y realiza manifestaciones en contra de las normas que lo quieren regir y limitar, buscando apartar aquello que quiere indicarle lo que debe y no debe ser.

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }
}

function cambiacontenido2(opcion){
    switch (parseInt(opcion)) {
        case 1:
            var img = `<img src="assets/img/img_ova/ejp_union.png" style="max-width: 75%;">`;
            var cont = `<b>Complemento de la unión entre dos conjuntos:</b>
                                      <p>〖(𝑨∪𝑩)〗^𝑪 o (𝑨∪𝑩)′  o  ((𝑨∪𝑩)) ̅, </p>
                                      <p>O también la diferencia 𝐔−(𝐀∪𝐁</p>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            
            //$("#pregunta_cont").html('');
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/ejp_complementointerseccion.png" style="max-width: 75%;">`;
            var cont = `<b>Complemento de la intersección entre dos conjuntos:</b>
                                      <p>〖(𝐴∩𝐵)〗^𝐶 o (𝐴∩𝐵)′  o  ((𝐴∩𝐵)) </p>
                                      <p>O también la diferencia  𝑈−(𝐴∩𝐵)</p>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            //$("#pregunta_cont").html('');
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/ejp_doblemente.png" style="max-width: 75%;">`;
            var cont = `<p>Si se quisiera graficar
                        〖(𝐴∩𝐵)〗^𝐶∪𝐶 
                        Los conjuntos 〖(𝐴∩𝐵)〗^𝐶 y 𝐶, se rayan en sentidos diferentes.
                        La unión ∪, será todo lo rayado; Si se quisiera graficar la intersección
                        (𝐴∩𝐵)^𝐶∩𝐶 
                        <p>Será todo lo doblemente rayado</p>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            
            break;
        default:
            break;
    }
}

function conjuntos(num){
    $(".info_conjuntos").removeClass('fondo_azul_claro');
    $(".info_conjuntos"+num).addClass('fondo_azul_claro');
    $(".info_conjuntos").removeClass('shadow');
    $(".info_conjuntos"+num).addClass('shadow');
    if (num == 1) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Para algunos autores como Lyotard (1987), la Postmodernidad más que un momento en tiempo o lugar, se trata de una condición devenida a causa de las promesas rotas y efectos adversos que la modernidad originó, lo cual llevó a la sociedad al escepticismo y desconfianza de aquellos discursos que aseguraban el dominio del mundo y el progreso en todas las esferas. 

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 2) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Al precisar que a través de la razón no se lograba lo esperado, el hombre busca otras maneras de satisfacer sus necesidades, y encuentra respuesta en el placer, placer que debe ser ocupado en el presente, pues el futuro es incierto. Lo anterior conlleva a un aumento del consumismo, ya que, aquellos relatos que prometían un mundo mejor donde existía la paz, la libertad y la igualdad, ya no son creíbles e incluso llevan la desconfianza hacia quien quiera volver a ellos

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 3) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Se deja de lado el uso de la razón; lo importante ahora es el entretenimiento, justificando el hombre que la realidad y el mundo son complejos, y que, a través del razonamiento no es posible dimensionarlos y mucho menos dominarlos; así que ahora cada idea tiene algo de verdad, pero ni siquiera haciendo una suma de ellas, se logra explicar el mundo; no hay un relato absoluto, cada quien tiene su propia perspectiva o subjetividad y es cada uno el encargado de dar sentido o explicación a esa realidad. 

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 4) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Es en la postmodernidad que el ser humano hace una exigencia del reconocimiento de la pluralidad, negando la posibilidad de homogeneización que planteaba la Modernidad, defendiendo la diversidad como algo genuino y aduciendo la necesidad de libertad para decidir el estilo y forma de vida que cada quien decide llevar; esto da paso a  visibilizar las minorías que hasta el momento se encontraban relegadas por no considerarse relevantes para los procesos de avance de la sociedad, pero ahora se les da lugar otorgándoles valor e integrando la diversidad. 

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 5) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <p class="justificado font13 caja-texto-b">
                        Finalmente, en este estado, el ser humano busca liberarse de estándares y prototipos que de manera sutil le han sido impuestos, y para ello hace uso del arte y realiza manifestaciones en contra de las normas que lo quieren regir y limitar, buscando apartar aquello que quiere indicarle lo que debe y no debe ser.

                      </p>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }
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