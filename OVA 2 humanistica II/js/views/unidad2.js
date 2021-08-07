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
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    slide_predeterminado();
    var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a href="assets/PDF/Unidad 1/etica_como_esencia.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Etica_como_esencia.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
    $('.pdfs').html(pdf);


    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";

    $(".opcion-circular-ambiente").on('click', opciones_circulares);
    $(".opcion-circular-social").on('click', opciones_circulares_sociales);
    $(".hover_card_v1").on('mouseenter', hover_v1);
    $(".hover_card_v2").on('mouseenter', hover_v2);
    $(".hover_card_v3").on('mouseenter', hover_v3);
    $(".hover_card_v1").on('mouseleave', leave_v);
    $(".hover_card_v2").on('mouseleave', leave_v);
    $(".hover_card_v3").on('mouseleave', leave_v);

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
    console.log(tema);
    slide_link(tema);
});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);

}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 1);
    tema=1;
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num+1);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","Bioética o ética para la vida");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 31;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","Bioética o ética para la vida");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob3');
            bar = document.querySelector('.custom-scrollbar__bar3');
            container = document.querySelector('.custom-scrollbar__inner3');
            scroll();
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","Bioética o ética para la vida");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Necesidad de la formación Humanística");
            /*$("#content").html('');
            $("#img_cont").html('');*/
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La ecosensibilidad");
            //$("#pregunta_cont").html('');
            /*$("#contenido2").html('');
            $("#img_2").html('');*/
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La ecosensibilidad");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La ecosensibilidad");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La bio contabilidad o contabilidad para la vida");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La bio contabilidad o contabilidad para la vida");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La bio contabilidad o contabilidad para la vida");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Bioética para la protección de la vida","La bio contabilidad o contabilidad para la vida");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje");
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

function conjuntos(num){
    $(".info_conjuntos").removeClass('fondo_azul_claro');
    $(".info_conjuntos"+num).addClass('fondo_azul_claro');
    $(".info_conjuntos").removeClass('shadow');
    $(".info_conjuntos"+num).addClass('shadow');
    if (num == 1) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12">
                      <b>Definiciones básicas</b>
                      <div class="mt-2">
                        <p class="justificado">Un conjunto es una colección o reunión de objetos o cosas.  Se llaman “elementos” a aquellos objetos o cosas que constituyen el conjunto, o que lo conforman</p>
                      </div>
                    </div>
                    
                    <div><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Por ejemplo: </b></div>

                    <div class="m-0 row">
                      <div class="col-lg-4">
                        <div class="mt-5">
                          <center><h5>Son conjuntos los siguientes</h5></center>
                        </div>
                        <div>
                          <center><img src="assets/img/img_ova/flecha_punteada.png"></center>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <p class="justificado size_13">
                          <b>a</b>. Las letras del alfabeto castellano. <br>
                          <b>b</b>. Los estudiantes de Ingenierías y de Economía de UNAULA.<br>
                          <b>c</b>. Los números pares.<br>
                          <b>d</b>. El conjunto de todos los habitantes de Colombia.<br>
                          <b>e</b>. Los ciudadanos de Colombia que han sido presidentes.<br>
                          <b>f</b>. Los estudiantes de Ingeniería Informática de Colombia que han leído la Constitución.<br>
                          <b>g</b>. Los números Enteros.
                        </p>
                      </div>
                      <div class="col-lg-4">
                        <img src="assets/img/img_ova/geometricos.png" style="max-width: 70%;">
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 2) {
        var conjunto = `
                    <div class="col-lg-12 row">
                      <div class="col-md-4 row" style="border-right: solid 1px #4141f3;">
                          <div class="col-lg-4">
                            <img src="assets/img/img_ova/mayuscula.png" style="max-width: 100%;">
                          </div>
                          <div class="col-lg-8">
                            <p class="size_13">Se acostumbra a utilizar las letras <b>mayúsculas</b> para denotar conjuntos.</p>
                          </div>
                          <div class="col-lg-4">
                            <img src="assets/img/img_ova/minuscula.png" style="max-width: 100%;">
                          </div>
                          <div class="col-lg-8">
                            <p class="size_13">Y las letras <b>minúsculas</b> para denotar sus elementos</p>
                          </div>
                      </div>
                      <div class="col-md-4" style="border-right: solid 1px #4141f3; padding-left: 20px;">
                          <div class="mb-2">
                            <p>Se tiene que para indicar que el elemento 𝒙 pertenece al conjunto B escribiremos  <b>𝒙∈𝑩;</b> Que se lee:</p>
                          </div>
                          <div class="content-banner">
                            <div class="banner">
                                <p class="text-white text-banner">“x pertenece a B”, “x es un elemento de B”.</p>
                            </div>
                          </div>
                      </div>
                      <div class="col-md-4" style="padding-left: 20px;">
                          <div class="mb-2">
                            <p>Si el elemento 𝒂 no pertenece al conjunto <b>𝑩</b> escribiremos</p>
                          </div>
                          <div class="content-banner">
                              <div class="banner">
                                <p class="text-white text-banner">𝒙∉𝑩</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-12" style="padding: 5%;">
                        
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 3) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 mt-3">
                      <h5>Determinación de conjuntos:</h5>
                      <p>Un conjunto se puede describir o determinar, por:</p>
                    </div>
                    <div class="col-lg-12 col-md-12 row">
                      <center class="col-lg-6">
                        <div>
                          <div class="card1-2">
                              <div class="card_top2">
                                  <div class="m-0 p-0">
                                      <p class="text-white text-center azul_card p-2 rounded">a. Extensión</p>
                                  </div>
                                  <br>
                                  <p>Se escriben todos sus elementos separados por comas, y encerrándolos dentro de llaves  { . . . . }</p>
                              </div>
                              <div class="card1_bottom2">
                                  <div class="row">
                                      <div class="col-lg-12">
                                        <p class="text-white"><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Por ejemplo: </b></p>
                                        <p class="text-white">
                                        Al conjunto A formado por las vocales, puedes representarlo por:  𝐴 = { 𝑎, 𝑒, 𝑖, 𝑜, 𝑢 }</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </center>
                      <div class="col-lg-6">
                        <div class="card1-2">
                            <div class="card_top2">
                                <div class="m-0 p-0">
                                    <p class="text-white text-center azul_card p-2 rounded">b. Comprensión</p>
                                </div>
                                <br>
                                <p>Se escriben todos sus elementos separados por comas, y encerrándolos dentro de llaves  { . . . . }</p>
                            </div>
                            <div class="card1_bottom2">
                                <div class="row">
                                    <div class="col-lg-12">
                                      <p class="text-white"><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Por ejemplo: </b></p>
                                      <p class="text-white">Si 𝑀 es el conjunto de los números impares: 𝑀 = { 𝒙 / 𝒙 𝑒𝑠 𝑛ú𝑚𝑒𝑟𝑜 𝑖𝑚𝑝𝑎𝑟 }
                              Que se lee “𝑀 es el conjunto de elementos 𝒙,  tal que 𝒙 es número impar”.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 4) {
        var conjunto = `
                    <div class="col-lg-12 row m-2">
                      <h5>Representación de conjuntos:</h5>
                      <p class="justificado">Los conjuntos pueden representarse en DIAGRAMA DE VENN
                      Todo conjunto se puede representar gráficamente por medio de un área plana delimitada por una curva cerrada (óvalos, círculo, triángulo, rectángulo, etc.)</p>
                    </div>
                    <div class="row m-1">
                      <div class="col-lg-2">
                        <img src="assets/img/img_ova/ejemplos.png" style="max-width: 100%;">
                      </div>
                      <div class="col-lg-5">
                        <b>Ejemplo</b>
                        <p>Los conjuntos 𝐴 = {1, 2, 3 }  y 𝐵={ 2, 4 }  gráficamente:</p>
                        <img src="assets/img/img_ova/flecha_punteada.png">
                      </div>
                      <div class="col-lg-5">
                        <img src="assets/img/img_ova/representacion_conjuntos.png" style="max-width: 70%;">
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }if (num == 5) {
        var conjunto = `
                    <div class="d-flex justify-content-center col-md-12">
                      <div class="row">
                        <div class="fondo_canvas col-lg-12 m-0 p-0">
                          <p class="rueda1 cursor" data-toggle="modal" data-target="#modalconjunto">Conjunto universal (referencial)</p>
                          <p class="rueda2 cursor" data-toggle="modal" data-target="#modalconjunto2">Conjuntos finitos e infinitos</p>
                          <p class="rueda3 cursor" data-toggle="modal" data-target="#modalconjunto3">Subconjuntos</p>
                          <p class="rueda4 cursor" data-toggle="modal" data-target="#modalconjunto4">Conjunto vacío</p>
                        </div>
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto)
    }
}*/

function opciones_circulares(){
    var opcion_num = $(this).data('opcion');
    $(".opcion-circular-ambiente").removeClass('opcion-circular-select');
    $(".opcion-circular-ambiente"+opcion_num).addClass('opcion-circular-select');
    $(".content-opcion-info-ambiente").removeClass('d-none');
    $(".content-opcion-info-ambiente").removeClass('content-opcion-info-ambiente1');
    $(".content-opcion-info-ambiente").removeClass('content-opcion-info-ambiente2');
    $(".content-opcion-info-ambiente").removeClass('content-opcion-info-ambiente3');
    $(".content-opcion-info-ambiente").removeClass('content-opcion-info-ambiente4');
    if (opcion_num == 1) {
        var texto = `
                        <p class="p_black justificado">Su abordaje, por tanto, se inserta en el campo de la multi disciplinariedad pues ante problemáticas que desbordan las posibilidades de un campo del conocimiento se hace inminente la consideración colectiva de posibilidades de solución.</p>
                    `;
        $(".content-opcion-info-ambiente").html(texto);
        $(".content-opcion-info-ambiente").addClass('content-opcion-info-ambiente1');
    }else if (opcion_num == 2) {
        var texto = `
                        <p class="p_black justificado">Al partir del supuesto de que cada cultura arraiga un conjunto de costumbres y valores, es evidente que los problemas éticos y morales que han provocado una crisis en la sociedad deben abordarse específicamente bajo las particularidades de los supuestos básicos que rigen los comportamientos de los individuos en cada región, a fin de sentar nuevas bases civilizatorias permeadas por conductas estoicas y altruistas.</p>
                    `;
        $(".content-opcion-info-ambiente").html(texto);
        $(".content-opcion-info-ambiente").addClass('content-opcion-info-ambiente2');
    }else if (opcion_num == 3) {
        var texto = `
                        <p class="p_black justificado">Ante esta apremiante necesidad de un cambio cultural en el sentido de un pensamiento colectivo que respeta la vida en todas sus formas, limitando sus usos e intervenciones a los límites ecos temáticamente posibles, se considera su importancia dentro del planeta y pasando de un pensamiento racional a un pensamiento ambiental, pues tal como lo advierte Ángel (1991)</p>
                    `;
        $(".content-opcion-info-ambiente").html(texto);
        $(".content-opcion-info-ambiente").addClass('content-opcion-info-ambiente3');
    }else if (opcion_num == 4) {
        var texto = `
                        <p class="p_black justificado">El pensamiento racional colocó por fuera la naturaleza., en la tierra la reemplazó por el pensamiento científico, es un instrumento más adecuado para manejar las transacciones comerciales y estimular el dominio tecnológico del medio natural, la ciencia y la investigación como formas de conocimiento deben considerar a la vida no como un objeto en sí mismo sino como su propósito y prioridad; sólo la protección de la vida con criterios éticos, dentro de los límites socialmente deseados y con un respeto profundo por los derechos de cada especie a ser y existir.</p>
                    `;
        $(".content-opcion-info-ambiente").html(texto);
        $(".content-opcion-info-ambiente").addClass('content-opcion-info-ambiente4');
    }
}

function opciones_circulares_sociales(){
    var opcion_num = $(this).data('opcion');
    $(".opcion-circular-social").removeClass('opcion-circular-select');
    $(".opcion-circular-social"+opcion_num).addClass('opcion-circular-select');
    $(".content-opcion-info-social").removeClass('d-none');
    $(".content-opcion-info-social").removeClass('content-opcion-info-social1');
    $(".content-opcion-info-social").removeClass('content-opcion-info-social2');
    $(".content-opcion-info-social").removeClass('content-opcion-info-social3');
    $(".content-opcion-info-social").removeClass('content-opcion-info-social4');
    $(".content-opcion-info-social").removeClass('content-opcion-info-social5');
    $(".content-opcion-info-social").removeClass('content-opcion-info-social6');

    $(".fondo-social").removeClass('fondo-social-0');
    $(".fondo-social").removeClass('fondo-social-1');
    $(".fondo-social").removeClass('fondo-social-2');
    $(".fondo-social").removeClass('fondo-social-3');
    $(".fondo-social").removeClass('fondo-social-4');
    $(".fondo-social").removeClass('fondo-social-5');
    $(".fondo-social").removeClass('fondo-social-6');
    if (opcion_num == 1) {
        var texto = `
                        <p class="p_black justificado">En este contexto, la coexistencia implica reconocerse en un espacio y tiempo compartido, para <u>Navarro (2008)</u>  la ética de la alteridad no parte de un sujeto autosuficiente y autónomo sino que enfatiza en la interrelación y de esta manera genera una nueva lógica que no está subyugada por la razón de ningún sujeto que se maquine dominador, excluyente y amenazador.</p>
                    `;
        $(".content-opcion-info-social").html(texto);
        $(".content-opcion-info-social").addClass('content-opcion-info-social1');
        $(".fondo-social").addClass('fondo-social-1');
    }else if (opcion_num == 2) {
        var texto = `
                        <div class="row">
                            <div class="col-md-5">
                                <p class="p_black justificado p-4">Lo anterior implica una relación recíproca, como lo expresa Maturana (2002)</p>
                            </div>
                            <div class="col-md-7">
                                <p class="text-center"><img src="assets/img/img_ova/nota6_34.png" alt="" class="img-100"></p>
                            </div>
                            <div class="col-md-12">
                                <p class="p_black justificado">Es importante tomar conciencia del efecto de las actuaciones no sólo en el plano profesional, en principio en el mundo de la vida.</p>
                                <p class="p_black justificado">Es importante pensar la condición de ser humano coexistente desde la ética de la alteridad, lo cual implica responsabilidad,  según Vila, "desde su compromiso social, desde la defensa del bien común y desde la actitud permanente de reflexión sobre las consecuencias y efectos de sus acciones sobre ella misma, los demás y lo que la rodea" (2004, p. 51).</p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info-social").html(texto);
        $(".content-opcion-info-social").addClass('content-opcion-info-social2');
        $(".fondo-social").addClass('fondo-social-2');
    }else if (opcion_num == 3) {
        var texto = `
                        <div class="row">
                            <div class="col-md-12">
                                <p class="p_black justificado">De acuerdo con Sánchez (2020)</p>
                            </div>
                            <div class="col-md-12">
                                <p class="text-center"><img src="assets/img/img_ova/sanchez_biocontabilidad.png" alt="" class="img-100"></p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info-social").html(texto);
        $(".content-opcion-info-social").addClass('content-opcion-info-social3');
        $(".fondo-social").addClass('fondo-social-3');
    }else if (opcion_num == 4) {
        var texto = `
                        <div class="row">
                            <div class="col-md-12 pb-3">
                                <p class="p_black justificado">En efecto un campo del conocimiento, que como el contable, ha desarrollado sus prácticas en una relación fines-medios fruto de crisis como:</p>
                            </div>
                            <div class="col-md-3">
                                <p class="text-center"><img src="assets/img/img_ova/beneficios.png" alt="" class="img-40"></p>
                                <p class="p_black text-center">El desmedido crecimiento económico</p>
                            </div>
                            <div class="col-md-3">
                                <p class="text-center"><img src="assets/img/img_ova/dinero.png" alt="" class="img-40"></p>
                                <p class="p_black text-center">La acumulación de capital</p>
                            </div>
                            <div class="col-md-3">
                                <p class="text-center"><img src="assets/img/img_ova/global.png" alt="" class="img-40"></p>
                                <p class="p_black text-center">La degradación ambiental</p>
                            </div>
                            <div class="col-md-3">
                                <p class="text-center"><img src="assets/img/img_ova/confused.png" alt="" class="img-40"></p>
                                <p class="p_black text-center">y la desnaturalización de la labor del profesional contable</p>
                            </div>
                            <div class="col-md-12 pt-3">
                                <p class="p_black justificado">Entre otras; se ve inmersa en una crisis de sentido acentuado por el espacio reflexivo y de encuentro, que durante el espacio de pandemia ha devuelto a la comunidad académica la posibilidad de repensar su rol en el actual escenario de transformación social.</p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info-social").html(texto);
        $(".content-opcion-info-social").addClass('content-opcion-info-social4');
        $(".fondo-social").addClass('fondo-social-4');
    }else if (opcion_num == 5) {
        var texto = `
                        <p class="p_black justificado">Las voces contables en respuesta a este panorama descrito suben su tono para fijar nuevos rumbos que permitan a los profesionales en formación y en ejercicio, vislumbrar posibilidades más allá de las tendencias hegemónicas financieras, ante la evidente insuficiencia que esta información a nivel organizacional permite para capturar con confianza la amplia y compleja trama de relaciones que encierra la vida social y ambiental.</p>
                    `;
        $(".content-opcion-info-social").html(texto);
        $(".content-opcion-info-social").addClass('content-opcion-info-social5');
        $(".fondo-social").addClass('fondo-social-5');
    }else if (opcion_num == 6) {
        var texto = `
                        <div class="row">
                            <div class="col-md-8">
                                <p class="p_black justificado pb-3">La teoría tridimensional de la contabilidad T3C entendida como:</p>
                                <p class="text-center"><img src="assets/img/img_ova/teoria_tridimencional.png" alt="" class="img-100"></p>
                            </div>
                            <div class="col-md-4">
                                <p class="p_black justificado">Pone al ser humano no como centro de la vida misma, sino como coexistente con toda forma de vida que requiere ser protegida y conservada más allá del capital financiero como pilar de la contabilidad ambiental de la cual difiere el concepto referido.</p>
                            </div>
                        </div>
                    `;
        $(".content-opcion-info-social").html(texto);
        $(".content-opcion-info-social").addClass('content-opcion-info-social6');
        $(".fondo-social").addClass('fondo-social-6');
    }
}

function hover_v1(){
    $(".hover_card_v1").removeClass('w-fit');
    $(".hover_card_v1 span").removeClass('d-none');
}

function hover_v2(){
    $(".hover_card_v2").removeClass('w-fit');
    $(".hover_card_v2 span").removeClass('d-none');
}

function hover_v3(){
    $(".hover_card_v3").removeClass('w-fit');
    $(".hover_card_v3 span").removeClass('d-none');
}

function leave_v(){
    $(".hover_card_v1").addClass('w-fit');
    $(".hover_card_v1 span").addClass('d-none');
    $(".hover_card_v2").addClass('w-fit');
    $(".hover_card_v2 span").addClass('d-none');
    $(".hover_card_v3").addClass('w-fit');
    $(".hover_card_v3 span").addClass('d-none');
}