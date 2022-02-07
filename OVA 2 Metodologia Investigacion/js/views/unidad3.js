$( document ).ready(function() {

    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $(".menu3").removeClass('d-none');

    $(".menu3").addClass('c-show');
    $(".menu2").removeClass('c-show');
    $(".menu1").removeClass('c-show');
    
    console.log(tema);
    
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
        
        console.log(e);
        controlSlides3(stepIndex);
        // quitarflecha(stepIndex+1);
        actualizarprogress(stepIndex+9+11);
        switch(stepIndex) {
            case 1:
                break;
            default:
                break;
            // code block
        }
        slideNum = stepIndex;
    });

    $(".libro").on('click' , libros);
    $(".info-morado").on('click' , morados);
    $(".teoria").on('click' , teorias);
    $(".flechita").on('click' , flechitas);
    $(".video").on('click' , videos);

    slide_predeterminado3();
    slide_link3(tema);
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides3(stepIndex);
    actualizarprogress(stepIndex+9+11);
}

function slide_predeterminado3(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides3(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link3(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides3(num);
}

function controlSlides3(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 11;
            break;
        case 1:

            var pdf = `<div class="col-md-12">
                          <p class="p_white size_20">
                            <a href="assets/PDF/UNIDAD3/Adopción-de-una-teoría-o-desarrollo-de-una-perspectiva-teórica-o-de-referencia.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x mr-3"></i> Adopción de una teoría o desarrollo de una perspectiva teórica o de referencia.</a>
                          </p>
                          <p class="p_white size_20">
                            <a href="assets/PDF/UNIDAD3/Cómo-se-hace-una-tesis.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x mr-3"></i>Cómo se hace una tesis</a>
                          </p>
                        </div>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            break;
        case 2:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            /*$("#content").html('');
            $("#img_cont").html('');*/
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            //$("#pregunta_cont").html('');
            /*$("#contenido2").html('');
            $("#img_2").html('');*/
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. . Marco conceptual, estado del arte, marco legal y contextual ","¿Qué tener en cuenta a la hora de construir el marco teórico?");
            cambiarColorMenu(13);
            break;
        default:
            break;
    }
}



/*function cambiacontenido(opcion){
    switch (parseInt(opcion)) {
        case 1:
            var img = `<img src="assets/img/img_ova/dibujo_union.png" style="max-width: 90%;">`;
            var cont = `<p>Si se tienen dos conjuntos A y B, se llama unión al conjunto formado por los elementos que pertenecen a estos conjuntos, es decir:</p>
                                    <p>𝐴 ∪𝐵= {𝑥 / 𝑥∈𝐴 ∨ 𝑥∈𝐵}.</p>
                                    <p>Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/dibujo_interseccion.png" style="max-width: 90%;">`;
            var cont = `<p>Si se tienen dos conjuntos A y B, se llama intersección al conjunto formado por los elementos en común de estos conjuntos, es decir:</p>
                                    <p>𝐴 ∩𝐵= {𝑥 / 𝑥∈𝐴  ∧   𝑥∈𝐵}.</p>
                                    <p>Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/dibujo_diferencia.png" style="max-width: 90%;">`;
            var cont = `<p>Dados dos conjuntos A y B, se llama diferencia al conjunto al formado por los elementos que son del primero pero que no son del segundo, es decir:</p>
                                    <p>𝐴 ∩𝐵= 𝐴−𝐵= {𝑥 / 𝑥∈𝐴  ∧   𝑥∉𝐵}.</p>
                                    <p>Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 4:
            var img = `<img src="assets/img/img_ova/dibujo_diferenciasimetrica.png" style="max-width: 90%;">`;
            var cont = `<p>Se llama diferencia simétrica entre A y B al conjunto de los elementos exclusivos de los dos conjuntos, es decir:</p>
                                    <p>𝐴△𝐵= {𝑥 / 𝑥∈(𝐴−𝐵)    ⋁   𝑥∈(𝐵−𝐴)}
                                    𝐴△𝐵=(𝐴−𝐵)  ∪(𝐵−𝐴)</p>
                                    <p>Propiedad; una forma equivalente</p>
                                    <p>𝐴△𝐵=(𝐴∪𝐵)−(𝐴∩𝐵)</p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 5:
            var img = `<img src="assets/img/img_ova/dibujo_complemento.png" style="max-width: 90%;">`;
            var cont = `<p>𝐴^𝐶 o 𝐴′  o  𝐴 ̅,  o también la diferencia  𝑈−𝐴 , se le llama complemento de 𝐴 con respecto a 𝑈,  o simplemente complemento de 𝐴.</p>
                                    <p>Está conformado por los elementos que NO pertenecen al conjunto A. (Que están por fuera de 𝐴)</p>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            break;
        case 6:
            // $("#content").html('');
            // $("#img_cont").html('');
            break;
        default:
            break;
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
*/


function libros() {
    var libros_num = $(this).data('libro');
    if (libros_num == 1) {
        var text = `
                    <ul>
                        <li class="p_black justificado mt-4">Cuando se encuentre información que se considere contribuye o hace referencia a nuestro problema o tema de investigación, se deben extraer las ideas, opiniones, referencias que consideremos principales, igual que los datos y teorías.</li>
                        <li class="p_black justificado">El desarrollo de nuestro marco teórico parte de la revisión de la literatura, de lo que se encuentre, de si existen o no teorías que la preceden, de que hayan estudio que mencionen el tema a profundidad o someramente, o que en su defecto existan solamente estudios no comprobados o empezados y no terminados; todo esto se debe poner en consideración a la hora de sentarnos a escribir nuestro marco teórico.</li>
                    </ul>
                   `;
        $("#marco").html(text);
    }else if (libros_num == 2) {
        var text = `
                    <p class="p_black justificado mt-5"><b>A manera de conclusión:</b></p>
                    <ul>
                        <li class="p_black justificado">El marco teórico está integrado por los estudios que con anterioridad se han realizado, igualmente por las teorías o enfoques o antecedentes que se encuentren en relación con nuestro tema o problema de investigación.</li>
                        <li class="p_black justificado">Para el desarrollo del marco teórico es fundamental consultar toda la literatura concerniente a nuestro tema de investigación.</li>
                    </ul>
                   `;
        $("#marco").html(text);
    }else if (libros_num == 3) {
        var text = `
                    <div class="row">
                        <div class="col-md-12">
                            <p class="p_black justificado">Así mismo, si no está seguro de lo que escribió en su marco teórico, hágase las siguientes preguntas:</p>
                            <br>
                            <p class="p_purple justificado">Clic sobre cada número para conocer las preguntas</p>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-c radius-2 cursor info-morado info-morado-1" data-morado="1">
                                        <p class="p_white text-center m-auto">1</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-2" data-morado="2">
                                        <p class="p_white text-center m-auto">2</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-3" data-morado="3">
                                        <p class="p_white text-center m-auto">3</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-4" data-morado="4">
                                        <p class="p_white text-center m-auto">4</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-5" data-morado="5">
                                        <p class="p_white text-center m-auto">5</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-6" data-morado="6">
                                        <p class="p_white text-center m-auto">6</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-7" data-morado="7">
                                        <p class="p_white text-center m-auto">7</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-8" data-morado="8">
                                        <p class="p_white text-center m-auto">8</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-9" data-morado="9">
                                        <p class="p_white text-center m-auto">9</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="w-h-45px d-flex bg-morado-o radius-2 cursor info-morado info-morado-10" data-morado="10">
                                        <p class="p_white text-center m-auto">10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 p-3 d-flex">
                            <div class="p-3 bg-morado-c radius-2 d-flex my-auto" id="info-morado">
                                <p class="p_white justificado">¿A qué clase de información acudí, fue esta segura?</p>
                            </div>
                        </div>
                    </div>
                   `;
        $("#marco").html(text);
        $(".info-morado").on('click' , morados);
    }else if (libros_num == 4) {
        var text = `<p class="p_black justificado mt-5">Lo primordial a la hora de sentarnos a escribir nuestro marco teórico, es centrarnos en nuestro problema de investigación, dicho de otra forma, no irnos por las ramas o buscar información que no sea la concerniente y específica sobre nuestro tema, por lo que buscaremos única y exclusivamente sobre ello, esto ya que es probable que en la búsqueda de la literatura, se vayan encontrando temas que llamen nuestra atención, por lo que ahí en ese preciso momento, es donde usted debe centrarse en el tema que lo ocupa.</p>`;
        $("#marco").html(text);
    }else if (libros_num == 5) {
        var text = `<iframe width="560" height="315" src="https://www.youtube.com/embed/A45_n99FpsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtubes  img-100 vid" style="margin-top: 25%;"></iframe>`;
        $("#marco").html(text);
    }
}

function morados() {
    var morados_num = $(this).data('morado');
    $(".info-morado").removeClass('bg-morado-c');
    $(".info-morado").addClass('bg-morado-o');
    $(".info-morado-"+morados_num).removeClass('bg-morado-o');
    $(".info-morado-"+morados_num).addClass('bg-morado-c');

    if (morados_num == 1) {
        var text = `<p class="p_white justificado">¿A qué clase de información acudí, fue esta segura?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 2) {
        var text = `<p class="p_white justificado">¿Qué tan antigua era, sobrepasó los cinco años?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 3) {
        var text = `<p class="p_white justificado">¿Sí busca en internet, realicé las citas y referencias concernientes y de acuerdo a las normas APA?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 4) {
        var text = `<p class="p_white justificado">¿Realmente di los créditos de todos los autores citados?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 5) {
        var text = `<p class="p_white justificado">¿Consulte fuentes prestigiosas en relación al campo de la investigación, como lo son revistas científicas o especializadas?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 6) {
        var text = `<p class="p_white justificado">¿Me dirigí a algún sitio donde pudiese encontrar información de primera mano?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 7) {
        var text = `<p class="p_white justificado">¿Encontré tesis relacionadas con mi tema de investigación, cuántas, cuáles?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 8) {
        var text = `<p class="p_white justificado">¿Visité bibliotecas o por lo menos bibliotecas virtuales?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 9) {
        var text = `<p class="p_white justificado">¿Durante la búsqueda encontré autores que se destacaron en relación a mi tema de investigación, puedo nombrarlos, los cité en mi marco teórico?</p>`;
        $("#info-morado").html(text);
    }else if (morados_num == 10) {
        var text = `<p class="p_white justificado">¿En qué otro medio busqué información concerniente con mi tema, ya que en ninguno de los anteriores encontré?</p>`;
        $("#info-morado").html(text);
    }
}

function cardActividad(num){
    if (num == 6) {
        $(".card-actividad").removeClass('col-12');
        $(".card-actividad").addClass('col-4');
        $(".card-actividad-text-6").removeClass('d-none');
        $(".card-actividad-text-6").addClass('d-block');
        var conjunto = `
                        <h6 class="p_black justificado">Sugerencia de lectura:</h6>
                        <p class="p_black justificado">Para una mayor comprensión del tema visto, amplíe la idea de revisión marco teórico; no es necesario que se limite a un referente bibliográfico en particular, la elección es personal.</p>
                        <br>
                        <p class="p_black justificado">Adicional, antes de continuar realizar la lectura: Adopción de una teoría o desarrollo de una perspectiva teórica o de referencia. </p>
                        <br>
                        <p><a href="assets/PDF/UNIDAD3/pdf-1.pdf" target="_blank">Adopción de una teoría o desarrollo de una perspectiva teórica o de referencia.pdf</a>
            `;
        $(".card-actividad-text-6").html(conjunto)
    }if (num == 7) {
        $(".card-actividad-7").removeClass('col-6');
        $(".card-actividad-7").addClass('col-4');
        $(".card-actividad-text-7").removeClass('d-none');
        $(".card-actividad-text-7").addClass('d-block');
        $(".content-activi-l").addClass('bg-gris');
        var conjunto = `
                        <h6 class="p_black">Sugerencia de lectura:</h6>
                        <br>
                        <p class="p_black justificado">Para una mayor comprensión del tema visto, amplíe la idea de marco conceptual; no es necesario que se limite a un referente bibliográfico en particular, la elección es personal.</p>
            `;
        $(".card-actividad-text-7").html(conjunto)
    }if (num == 8) {
        $(".card-actividad-8").removeClass('col-6');
        $(".card-actividad-8").addClass('col-4');
        $(".card-actividad-text-8").removeClass('d-none');
        $(".card-actividad-text-8").addClass('d-block');
        $(".content-activi-l-8").addClass('bg-gris');
        var conjunto = `
                        <h6 class="p_black">Sugerencia de lectura:</h6>
                        <br>
                        <p class="p_black justificado">Para una mayor comprensión del tema visto, amplíe la idea de marco legal; no es necesario que se limite a un referente bibliográfico en particular, la elección es personal.<br>Así aplicará al tiempo lo visto en el curso, que es la búsqueda de literatura.</p>
            `;
        $(".card-actividad-text-8").html(conjunto)
    }if (num == 9) {
        $(".card-actividad-9").removeClass('col-6');
        $(".card-actividad-9").addClass('col-4');
        $(".card-actividad-text-9").removeClass('d-none');
        $(".card-actividad-text-9").addClass('d-block');
        $(".content-activi-l-9").addClass('bg-gris');
        var conjunto = `
                        <h6 class="p_black">Sugerencia de lectura:</h6>
                        <br>
                        <p class="p_black justificado">Para una mayor comprensión del tema visto, amplíe la idea de estado del arte; no es necesario que se limite a un referente bibliográfico en particular, la elección es personal.</p>
            `;
        $(".card-actividad-text-9").html(conjunto)
    }if (num == 10) {
        $(".card-actividad-10").removeClass('col-6');
        $(".card-actividad-10").addClass('col-4');
        $(".card-actividad-text-10").removeClass('d-none');
        $(".card-actividad-text-10").addClass('d-block');
        $(".content-activi-l-10").addClass('bg-gris');
        var conjunto = `
                        <h6 class="p_black">Sugerencia de lectura:</h6>
                        <br>
                        <p class="p_black justificado">Para una mayor comprensión del tema visto, amplíe la idea de estado del arte; no es necesario que se limite a un referente bibliográfico en particular, la elección es personal.</p>
            `;
        $(".card-actividad-text-10").html(conjunto)
    }
}

function teorias() {
    var teorias_num = $(this).data('teoria');
    $(".teoria-flecha").removeClass('d-block');
    $(".teoria-flecha").addClass('d-none');
    $(".teoria-flecha-"+teorias_num).removeClass('d-none');
    $(".teoria-flecha-"+teorias_num).addClass('d-block');

    if (teorias_num == 1) {
        var texto = `
                        <div class="row">
                            <div class="col-md-12">
                                <p class="p_white bg-mm-o p-3 text-center">Marco Conceptual</p>
                            </div>
                            <div class="col-md-6 p-3">
                                <p class="p_black justificado">El marco conceptual nos ayuda a entender nuestro tema de investigación, a la vez que nos ubica respecto a la teoría y temáticas a desarrollar, ya que se deben explicar aquí las teorías y conceptos encontrados, es decir, desglosar desde lo general a lo específico lo encontrado en la revisión bibliográfica, la cual nos ayudará a:</p>
                            </div>
                            <div class="col-md-6 p-3">
                                <div class="bg-gris p-3 w-100 h-100 d-flex">
                                    <div class="w-40px position-relative left-n25px">
                                        <p class="flechita flechita-1" data-flecha="1"><img src="assets/img/img_ova/flecha-gris.png" class="w-40px cursor"></p>
                                        <p class="flechita flechita-2" data-flecha="2"><img src="assets/img/img_ova/flecha-gris.png" class="w-40px cursor"></p>
                                        <p class="flechita flechita-3" data-flecha="3"><img src="assets/img/img_ova/flecha-gris.png" class="w-40px cursor"></p>
                                        <p class="flechita flechita-4" data-flecha="4"><img src="assets/img/img_ova/flecha-gris.png" class="w-40px cursor"></p>
                                        <p class="flechita flechita-5" data-flecha="5"><img src="assets/img/img_ova/flecha-gris.png" class="w-40px cursor"></p>
                                    </div>
                                    <div class="p-2 d-flex w-100 h-100" id="flecha-info">
                                        <p class="p_black m-auto"><i>Clic en las flechas para continuar</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        $("#teorico").html(texto);
        $(".flechita").on('click' , flechitas);
    }else if (teorias_num == 2) {
        var texto = `
                    
                    <div class="col-md-12 row">
                          <div class="col-md-2" style="z-index: 100;">
                            <img src="assets/img/img_ova/actividad_general.png" class="" style="width: 100px">
                          </div>
                          <div class="col-md-3 text-center" style="padding-top: 40px;">
                            <p class="texto_act_general" style="">ACTIVIDAD #7</p>
                            <div class="linea_general" style=""></div>
                          </div>
                          <div class="col-md-7 banner_general" style="">
                            <div class="row">
                              <div class="indicacionesimg mb-2" style=""><img src="assets/img/img_ova/actividad.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Actividad de lectura.</p></div>
                            </div>
                            <div class="row">
                              <div class="indicacionesimg" style=""><img src="assets/img/img_ova/reloj.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Tiempo sugerido: 2 horas autónomos</p></div>
                            </div>
                          </div>
                    </div>
                    <div class="row mt-3 d-flex justify-content-center">
                        <div class="col-8 ">
                            <div class="row">
                                <div class="col-12 text-center my-2">
                                    <p class="color-text"><i>Clic para conocer la actividad</i></p>
                                </div>
                                <div class="col-12 d-flex justify-content-center">
                                    <div class="row border_r p-0 mh-100 content-activi-l">
                                        <div class="col-6 bg-color text-center border_r card-actividad-7 h-220px cursor d-flex" onclick="cardActividad(7)">
                                            <img src="assets/img/img_ova/libros.png" class="w-75 m-auto">
                                        </div>
                                        <div class="col-8 justify-content p-4 h-220px card-actividad-text-7 d-none">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teorico").html(texto);
    }else if (teorias_num == 3) {
        var texto = `
                    <div class="row">
                        <div class="col-md-12">
                            <p class="p_white bg-mm-o p-3 text-center">Marco legal</p>
                        </div>
                        <div class="col-md-12 p-3" id="info-circle">
                            <p class="p_black pb-4 border-b-mm-o">Como su nombre lo indica, el marco legal hace referencia al conjunto de leyes, normas y reglamentos que le dan validez a tu investigación. Por lo que, llegados a este punto, lo que se debe hacer es una selección juiciosa y rigurosa de aquellos artículos que tengan de una u otra forma relación con nuestro tema de investigación, posterior a esto, se deben referenciar de manera correcta en nuestro marco legal.</p>
                        </div>
                        <div class="col-md-12 d-flex">
                            <div class="m-auto w-80px d-flex justify-content-evenly">
                                <div class="w-h-15px radius-50 bg-morado-c cursor circle-morado circle-morado-1" data-circle="1"></div>
                                <div class="w-h-15px radius-50 bg-mm-o cursor circle-morado circle-morado-2" data-circle="2"></div>
                                <div class="w-h-15px radius-50 bg-mm-o cursor circle-morado circle-morado-3" data-circle="3"></div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teorico").html(texto);
        $(".circle-morado").on('click' , circles);
    }else if (teorias_num == 4) {
        var texto = `
                    
                    <div class="col-md-12 row">
                          <div class="col-md-2" style="z-index: 100;">
                            <img src="assets/img/img_ova/actividad_general.png" class="" style="width: 100px">
                          </div>
                          <div class="col-md-3 text-center" style="padding-top: 40px;">
                            <p class="texto_act_general" style="">ACTIVIDAD #8</p>
                            <div class="linea_general" style=""></div>
                          </div>
                          <div class="col-md-7 banner_general" style="">
                            <div class="row">
                              <div class="indicacionesimg mb-2" style=""><img src="assets/img/img_ova/actividad.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Actividad de lectura.</p></div>
                            </div>
                            <div class="row">
                              <div class="indicacionesimg" style=""><img src="assets/img/img_ova/reloj.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Tiempo sugerido: 1 horas autónomos</p></div>
                            </div>
                          </div>
                    </div>
                    <div class="row mt-3 d-flex justify-content-center">
                        <div class="col-8 ">
                            <div class="row">
                                <div class="col-12 text-center my-2">
                                    <p class="color-text"><i>Clic para conocer la actividad</i></p>
                                </div>
                                <div class="col-12 d-flex justify-content-center">
                                    <div class="row border_r p-0 mh-100 content-activi-l-8">
                                        <div class="col-6 bg-color text-center border_r card-actividad-8 h-250px cursor d-flex" onclick="cardActividad(8)">
                                            <img src="assets/img/img_ova/libros.png" class="w-75 m-auto">
                                        </div>
                                        <div class="col-8 justify-content p-4 h-250px card-actividad-text-8 d-none">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teorico").html(texto);
    }else if (teorias_num == 5) {
        var texto = `
                    <div class="row">
                        <div class="col-md-12">
                            <p class="p_white bg-mm-o p-3 text-center">Antecedentes o estado del arte</p>
                        </div>
                        <div class="col-md-4 p-3">
                            <div class="position-relative py-4">
                                <img src="assets/img/img_ova/rec.png" class="w-220px">
                                <div class="position-absolute rec rec-1 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="1"><p class="m-auto p_white">1</p></div>
                                <div class="position-absolute rec rec-2 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="2"><p class="m-auto p_white">2</p></div>
                                <div class="position-absolute rec rec-3 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="3"><p class="m-auto p_white">3</p></div>
                                <div class="position-absolute rec rec-4 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="4"><p class="m-auto p_white">4</p></div>
                                <div class="position-absolute rec rec-5 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="5"><p class="m-auto p_white">5</p></div>
                                <div class="position-absolute rec rec-6 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="6"><p class="m-auto p_white">6</p></div>
                                <div class="position-absolute rec rec-7 w-h-30px radius-50 bg-azul-c d-flex cursor" data-rec="7"><p class="m-auto p_white">7</p></div>
                            </div>
                        </div>
                        <div class="col-md-8 d-flex">
                            <div class="m-auto" id="rec">
                                <div mt-auto>
                                    <p class="p_black p-3 text-center">Clic en cada número para conocer la información</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teorico").html(texto);
        $(".rec").on('click' , rec);
    }else if (teorias_num == 6) {
        var texto = `
                    
                    <div class="col-md-12 row">
                          <div class="col-md-2" style="z-index: 100;">
                            <img src="assets/img/img_ova/actividad_general.png" class="" style="width: 100px">
                          </div>
                          <div class="col-md-3 text-center" style="padding-top: 40px;">
                            <p class="texto_act_general" style="">ACTIVIDAD #9</p>
                            <div class="linea_general" style=""></div>
                          </div>
                          <div class="col-md-7 banner_general" style="">
                            <div class="row">
                              <div class="indicacionesimg mb-2" style=""><img src="assets/img/img_ova/actividad.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Actividad de lectura.</p></div>
                            </div>
                            <div class="row">
                              <div class="indicacionesimg" style=""><img src="assets/img/img_ova/reloj.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Tiempo sugerido: 2 horas autónomos</p></div>
                            </div>
                          </div>
                    </div>
                    <div class="row mt-3 d-flex justify-content-center">
                        <div class="col-8 ">
                            <div class="row">
                                <div class="col-12 text-center my-2">
                                    <p class="color-text"><i>Clic para conocer la actividad</i></p>
                                </div>
                                <div class="col-12 d-flex justify-content-center">
                                    <div class="row border_r p-0 mh-100 content-activi-l-9">
                                        <div class="col-6 bg-color text-center border_r card-actividad-9 h-250px cursor d-flex" onclick="cardActividad(9)">
                                            <img src="assets/img/img_ova/libros.png" class="w-75 m-auto">
                                        </div>
                                        <div class="col-8 justify-content p-4 h-250px card-actividad-text-9 d-none">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teorico").html(texto);
    }else if (teorias_num == 7) {
        var texto = `
                        <div class="row">
                            <div class="col-md-12">
                                <p class="p_white bg-mm-o p-3 text-center">Marco contextual</p>
                            </div>
                            <div class="col-md-12 p-3">
                                <div id="carouselExampleControls" class="carousel slide px-5" data-ride="carousel">
                                    <div class="carousel-item active">
                                        <p class="p_black justificado d-block w-100 mt-2" alt="First slide">En el marco contextual, se incorpora el escenario físico del objeto de estudio, como lo son las condiciones del entorno, las condiciones temporales y ambientales, en general se evalúa, describe e incorpora todo lo que hace parte del contexto de nuestra investigación y que sirve como referente, por ejemplo: la cultura, las costumbres, los aspectos históricos, económicos y sociales. Y estos aspectos, son definitorios en ciertas investigaciones, como, por ejemplo, en las investigaciones cualitativas, donde se trabaja con resultados en los que influye todo este tipo de características de corte general. Por lo que el marco contextual, es definitorio en un proyecto de investigación ya que dirige la mirada hacia ciertos aspectos, esto, dependiendo del tipo de investigación que se planea hacer y de los objetivos propuestos.</p>
                                    </div>
                                    <div class="carousel-item">
                                        <p class="p_black justificado d-block w-100 mt-5" alt="Second slide">De igual forma, el marco contextual contribuye en la elaboración del marco teórico, ya que basándose en el marco contextual, delimita el tema orientando la búsqueda de la temática. Por lo que el marco contextual es un componente fundamental a la hora de desarrollar nuestro proyecto de investigación.</p>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="p_black d-block w-100 mt-3" alt="Third slide">
                                            <b>Características</b>
                                            <ul>
                                                <li class="justificado">Demarca el espacio</li>
                                                <p>El marco contextual demarca y ubica la investigación, el cual puede ser físico, de tiempo o ambos. </p>
                                                <li class="justificado">Depende de los objetivos</li>
                                                <p>Depende de los objetivos, ya que son estos los que definen el contexto en el cual tendrá lugar nuestra investigación, y este contexto puede responder a un grupo, comunidad, organización, cultura, entre muchos.</p>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="p_black d-block w-100 mt-4" alt="Fourth slide">
                                            <ul>
                                                <li class="justificado">Da sentido a la investigación</li>
                                                <p>En la medida en que ubica al investigador dentro de un entorno, realidad para a partir de allí desarrollar su investigación.</p>
                                                <li class="justificado">Va de lo general a lo particular</li>
                                                <p>Se empieza describiendo los aspectos generales del contexto para llegar a los particulares, describiendo el contexto de manera completa, pero sin extenderse demasiado en detalles que no aporten. Por otra parte, esta contextualización generalmente suele ubicarse en el marco teórico.</p>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <p class="p_black justificado d-block w-100 mt-5" alt="Fourth slide">A manera de conclusión, el marco contextual es fundamental en el proceso investigativo ya que ubica el objeto o problema de estudio para el desarrollo de los objetivos y de los demás elementos que conforman la investigación, por ejemplo, el marco teórico. De otra forma, se hace uso de este tanto en investigaciones cualitativas como cuantitativas.</p>
                                    </div>
                                  </div>
                                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <div class="carousel-control-prev-icon mr-auto triangulo-slide-d" aria-hidden="true"></div>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <div class="carousel-control-next-icon ml-auto triangulo-slide-i" aria-hidden="true"></div>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </div>
                            </div>
                        </div>
                    `;
        $("#teorico").html(texto);
    }else if (teorias_num == 8) {
        var texto = `
                    
                    <div class="col-md-12 row">
                          <div class="col-md-2" style="z-index: 100;">
                            <img src="assets/img/img_ova/actividad_general.png" class="" style="width: 100px">
                          </div>
                          <div class="col-md-3 text-center" style="padding-top: 40px;">
                            <p class="texto_act_general" style="font-size: 18px !important;">ACTIVIDAD #10</p>
                            <div class="linea_general" style=""></div>
                          </div>
                          <div class="col-md-7 banner_general" style="">
                            <div class="row">
                              <div class="indicacionesimg mb-2" style=""><img src="assets/img/img_ova/actividad.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Actividad de lectura.</p></div>
                            </div>
                            <div class="row">
                              <div class="indicacionesimg" style=""><img src="assets/img/img_ova/reloj.png" style="max-width: 70%;"></div>
                              <div><p style="" class="size_18 p_black">Tiempo sugerido: 2 horas autónomos</p></div>
                            </div>
                          </div>
                    </div>
                    <div class="row mt-3 d-flex justify-content-center">
                        <div class="col-8 ">
                            <div class="row">
                                <div class="col-12 text-center my-2">
                                    <p class="color-text"><i>Clic para conocer la actividad</i></p>
                                </div>
                                <div class="col-12 d-flex justify-content-center">
                                    <div class="row border_r p-0 mh-100 content-activi-l-10">
                                        <div class="col-6 bg-color text-center border_r card-actividad-10 h-250px cursor d-flex" onclick="cardActividad(10)">
                                            <img src="assets/img/img_ova/libros.png" class="w-75 m-auto">
                                        </div>
                                        <div class="col-8 justify-content p-4 h-250px card-actividad-text-10 d-none">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#teorico").html(texto);
    }
}

function flechitas() {
    var flechas_num = $(this).data('flecha');
    $(".flechita").html('<img src="assets/img/img_ova/flecha-gris.png" class="w-40px cursor">');
    $(".flechita-"+flechas_num).html('<img src="assets/img/img_ova/flecha-morada.png" class="w-40px cursor">');

    if (flechas_num == 1) {
        $("#flecha-info").html('<p class="p_black m-auto">Orientarnos y ubicarnos en relación a nuestro tema de investigación.</p>')
    }else if (flechas_num == 2) {
        $("#flecha-info").html('<p class="p_black m-auto">Fundamentar nuestra investigación a la vez que la justificamos a través del desglose de los contenidos de nuestra pregunta problema.</p>')
    }else if (flechas_num == 3) {
        $("#flecha-info").html('<p class="p_black m-auto">Desarrollar criterios y conceptos para la interpretación y comprensión del problema.</p>')
    }else if (flechas_num == 4) {
        $("#flecha-info").html('<p class="p_black m-auto">Identificar vacíos, límites y posibles errores que estemos cometiendo en el proceso investigativo.</p>')
    }else if (flechas_num == 5) {
        $("#flecha-info").html('<p class="p_black m-auto">Y, en definitiva, nos ayuda a centrarnos de manera puntual en nuestro problema de investigación.</p>')
    }
}

function circles() {
    var circle_num = $(this).data('circle');
    $(".circle-morado").removeClass('bg-morado-c');
    $(".circle-morado").addClass('bg-mm-o');
    $(".circle-morado-"+circle_num).removeClass('bg-mm-o');
    $(".circle-morado-"+circle_num).addClass('bg-morado-c');
    if (circle_num == 1) {
        $("#info-circle").html('<p class="p_black pb-4 border-b-mm-o">Como su nombre lo indica, el marco legal hace referencia al conjunto de leyes, normas y reglamentos que le dan validez a tu investigación. Por lo que, llegados a este punto, lo que se debe hacer es una selección juiciosa y rigurosa de aquellos artículos que tengan de una u otra forma relación con nuestro tema de investigación, posterior a esto, se deben referenciar de manera correcta en nuestro marco legal.</p>');
    }else if (circle_num == 2) {
        var texto = `
                    <div class="row border-b-mm-o">
                        <div class="col-md-12">
                            <p class="p_black justificado">Para la realización de este paso, lo más recomendable es organizarlo por secciones:</p>
                        </div>
                        <div class="col-md-2 offset-md-1 p-1">
                            <div class="my-auto">
                                <div class="d-flex mb-3">
                                    <p class="flecha-morada flecha-morada-1" data-numero="1"><img src="assets/img/img_ova/numero.png" class="w-40px cursor"></p>
                                    <div class="triangulo-derecha derecha-triangulo my-auto d-none triangulo-moradito triangulo-moradito-1"></div>
                                </div>
                                <div class="d-flex">
                                    <p class="flecha-morada flecha-morada-2" data-numero="2"><img src="assets/img/img_ova/numero (1).png" class="w-40px cursor"></p>
                                    <div class="triangulo-derecha derecha-triangulo my-auto d-none triangulo-moradito triangulo-moradito-2"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 d-flex" id="info-triangulo">
                            <p class="p_black m-auto">Clic en cada número para conocer las secciones</p>
                        </div>
                    </div>
                    `;
        $("#info-circle").html(texto);
        $(".flecha-morada").on('click' , flecha_m);
    }else if (circle_num == 3) {
        var texto = `
                    <p class="p_black justificado">Posterior a esto subdividir las normas de la siguiente forma por títulos y subtítulos, si fuera el caso de la siguiente forma:</p>
                    <ul class="row">
                        <li class="p_black col p-0"><b>Leyes.</b></li>
                        <li class="p_black col p-0"><b>Decretos.</b></li>
                        <li class="p_black col pl-0 pr-3"><b>Resoluciones.</b></li>
                        <li class="p_black col p-0"><b>Acuerdos.</b></li>
                        <li class="p_black col p-0"><b>Ordenanzas.</b></li>
                        <li class="p_black col p-0"><b>Sentencias.</b></li>
                        <li class="p_black col p-0"><b>Circulares.</b></li>
                    </ul>
                    <p class="p_black justificado border-b-mm-o">Como puedes ver, hay una gran diferencia entre hacer un listado y presentar las definiciones que se encuentran en las normas.</p>
                    `;
        $("#info-circle").html(texto);
    }
}

function flecha_m() {
    var flecha_num = $(this).data('numero');
    $(".triangulo-moradito").removeClass('d-block');
    $(".triangulo-moradito").addClass('d-none');
    $(".triangulo-moradito-"+flecha_num).removeClass('d-none');
    $(".triangulo-moradito-"+flecha_num).addClass('d-block');
    if (flecha_num == 1) {
        var texto = `
                    <p class="p_white mb-auto mx-auto bg-morado radius-2 p-3">Legislación internacional por una parte.</p>
                    `;
        $("#info-triangulo").html(texto);
    }else if (flecha_num == 2) {
        var texto = `
                    <p class="p_white mt-auto mx-auto bg-morado radius-2 p-3">Las nacionales por otra.</p>
                    `;
        $("#info-triangulo").html(texto);
    }
}

function rec() {
    var rec_num = $(this).data('rec');
    $(".rec").removeClass('bg-rec-morado');
    $(".rec").addClass('bg-azul-c');
    $(".rec-"+rec_num).addClass('bg-rec-morado');
    $(".rec-"+rec_num).removeClass('bg-azul-c');
    if (rec_num == 1) {
        $("#rec").html('<p class="p_black justificado">El estado del arte es uno de los procesos fundamentales dentro de una investigación, ya que ayuda a ubicarse en relación a la situación actual del tema que se desea abordar, pues es el que nos mostrará de qué manera ha sido tratado el tema; en la actualidad cómo se encuentra la situación investigativa del tema y las tendencias que en relación al mismo existen en la actualidad.</p>');
    }else if (rec_num == 2) {
        $("#rec").html('<p class="p_black justificado">Todo lo anterior, lo que hace es ayudar al investigador a asumir de una forma crítica su propio tema de investigación, ya que, al tener la posibilidad de ver y asumir el estado de la cuestión de su investigación, estará en la capacidad de darse cuenta no solo de lo se ha hecho sino, además, de ver y pensar en lo que hace falta, para así desarrollar nuevos conocimientos en relación a este.</p>');
    }else if (rec_num == 3) {
        $("#rec").html('<p class="p_black justificado">Es a través del estado del arte, que el investigador se preguntará: ¿Qué se ha dicho sobre mi tema de investigación? ¿Cómo se ha dicho? ¿A quiénes se ha dicho? ¿Cuándo? Y la pregunta quizás más importante ¿Qué falta por decir?</p>');
    }else if (rec_num == 4) {
        $("#rec").html('<p class="p_black justificado">El estado del arte ayuda, además, a las instituciones de educación superior e investigativas a hacer un balance sobre lo que se investiga, la actualidad de este y qué posible nuevas líneas de investigación podrían surgir. El estado del arte, como bien se puede ver, es un elemento fundamental en el desarrollo no solo de la investigación, sino además del movimiento del conocimiento.</p>');
    }else if (rec_num == 5) {
        $("#rec").html('<p class="p_black justificado">El estado del arte, aporta toda la parte documental sobre el objeto de estudio analizado, estudiado, desglosándolo en su forma más íntegra, para así desarrollar nuevos conocimientos determinando, además, nuevos contextos que conlleven a nuevos estudios.</p>');
    }else if (rec_num == 6) {
        $("#rec").html('<p class="p_black justificado">El estado del arte, además, nos da a conocer todo lo novedoso en relación a nuestro objeto de estudio, mostrando, conceptos, enfoques, líneas, ámbitos, contextos de estudio, en diferentes ámbitos como, por ejemplo: en lo epistemológico, en las metodologías, en lo político, lo legislativo, lo pedagógico, además de orientar sobre la forma de analizar e indagar.</p>');
    }else if (rec_num == 7) {
        var texto = `
                    <p class="p_black justificado"><b>Aspectos técnicos del estado del arte:</b></p>
                    <p class="p_black justificado">Para la realización del estado del arte y el desarrollo de este usted puede optar por:</p>
                    <div class="row">
                        <div class="col-md-6">
                            <p class="p_white bg-opcion-morado-c p-3 text-center radius-2 opcion opcion-1 cursor" data-opcion="1">Técnica documental:</p>
                        </div>
                        <div class="col-md-6">
                            <p class="p_white bg-opcion-morado-o p-3 text-center radius-2 opcion opcion-2 cursor" data-opcion="2">Técnica de campo:</p>
                        </div>
                        <div class="col-md-12 d-flex px-5">
                            <div class="mr-auto triangulo-arriba bajar-triangulo triangulo-opcion"></div>
                        </div>
                        <div class="col-md-12 ">
                            <div class="m-auto border-opcion-morado-o radius-2 p-2 bg-gris" id="info-opcion">
                                <p class="p_black justificado">Como su nombre lo indica, está relacionada con la búsqueda de información a través de documentos de investigaciones ya publicadas, las cuales sustentan de manera rigurosa las teorías existentes.</p>
                            </div>
                        </div>
                    </div>
                    `;
        $("#rec").html(texto);
        $(".opcion").on('click', opciones);
    }
}

function opciones() {
    var opciones_num = $(this).data('opcion');
    $(".opcion").removeClass('bg-opcion-morado-c');
    $(".opcion").addClass('bg-opcion-morado-o');
    $(".opcion-"+opciones_num).addClass('bg-opcion-morado-c');
    $(".opcion-"+opciones_num).removeClass('bg-opcion-morado-o');
    if (opciones_num ==1) {
        $(".triangulo-opcion").removeClass('ml-auto');
        $(".triangulo-opcion").addClass('mr-auto');
        $("#info-opcion").html('<p class="p_black justificado">Como su nombre lo indica, está relacionada con la búsqueda de información a través de documentos de investigaciones ya publicadas, las cuales sustentan de manera rigurosa las teorías existentes.</p>');
    }else if (opciones_num ==2) {
        $(".triangulo-opcion").removeClass('mr-auto');
        $(".triangulo-opcion").addClass('ml-auto');
        $("#info-opcion").html('<p class="p_black justificado">A través de ésta el investigador se relaciona de forma directa con el objeto de estudio y permite recolectar información empírica y que quizás aún no ha sido documentada sobre su objeto de estudio.</p>');
    }
}

function videos() {
    var videos_num = $(this).data('video');
    $(".video").removeClass('bg-blanco');
    $(".video").addClass('bg-opcion-morado-o');
    $(".video-"+videos_num).addClass('bg-blanco');
    $(".video-"+videos_num).removeClass('bg-opcion-morado-o');
    if (videos_num == 1) {
        var texto = `
                    <div>
                        <p class="p_black justificado"><b>Video:</b> Dr. Roberto Hernández Sampieri. La revisión de la literatura. </p>
                        <p class="p_black justificado">Tiempo: 8 minutos autónomos.</p>
                        <p class="p_black justificado">El video lo encuentra al dar clic <a href="https://www.youtube.com/watch?v=zrvZFEcQ_rg" target="_blank">aquí</a></p>
                    </div>
                    `;
        $(".video-1").html(texto);
        $(".video-2").html('<p class="m-auto text-center w-fit"><img src="assets/img/img_ova/jugar.png" class="w-125px"></p>');
    }else if (videos_num == 2) {
        var texto = `
                    <div>
                        <p class="p_black justificado"><b>Video:</b> Dra. Rosario Hernández.</p>
                        <p class="p_black justificado">Tiempo: 8 minutos autónomos.</p>
                        <p class="p_black justificado">El video lo encuentra al dar clic <a href="https://www.youtube.com/watch?v=cG4UnZDH_d8" target="_blank">aquí</a></p>
                    </div>
                    `;
        $(".video-1").html('<p class="m-auto text-center w-fit"><img src="assets/img/img_ova/jugar.png" class="w-125px"></p>');
        $(".video-2").html(texto);
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