$( document ).ready(function() {
    
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
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado2();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    slide_predeterminado2();
    slide_link2(tema);
    
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides2(stepIndex);
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
        case 1:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob');
            bar = document.querySelector('.custom-scrollbar__bar');
            container = document.querySelector('.custom-scrollbar__inner');
            /*scroll();*/
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            
            break;
        case 4:
            $("#cont_imp").html('');
            $('.triangulo_indica').css({ "visibility": "hidden"
                            
                        });
            primero();
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            inicio();
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 7:
            /*dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob19');
            bar = document.querySelector('.custom-scrollbar__bar19');
            container = document.querySelector('.custom-scrollbar__inner19');
            scroll();*/
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 8:
            var contenido = `<p class="color-text">Clic en el ícono para visualizar información</p>`;
            $('.imprime_heare').html(contenido);
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 9:
            $('.p_9c').html('<p>Clic en cada círculo para visualizar la información</p>');
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 11:

            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 12:
             carruselimagenes();
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo ", "¿Qué es el humanismo?");
            break;
        case 13:
            $('.wite_ban_13').css({ "background": "transparent"
                    
                });
            $('.pant13').html('');
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 14:
            var pdf = `<div class="col-md-12">
                          <p class="p_white size_20">
                              <a href="assets/PDF/Humanismo-en-la-antigua-grecia.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Humanismo en la antigua Grecia.pdf</a>
                          </p>
                        </div>
                        <div class="col-md-12">
                          <p class="p_white size_20">
                              <a href="assets/PDF/Formación-humanística-para-el-desarrollo-humano.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i>Formación humanística para el desarrollo humano PDF</a>
                          </p>
                        </div>`;
            $('.contpdf').html(pdf);
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 15:
            cambiatargeta(3);
            cambiatargeta2(3);
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 16:
            $('.pantallas16').html('');
            $('.16_imprime').html('<p style="float: right;">Clic para ampliar la información</p>');
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            /*$("#content-ova").load("base/unidades/unidad2.html");
            tema = 1;*/
            break;
        case 17:
            
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1. Introducción al humanismo", "Aspectos relevantes de la formación humanística ");
           tema = 1;
           break;
        default:
            break;
    }
}



function cambiacontenido(opcion){
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
}

function acuarela(num) {
    switch (parseInt(num)) {
        case 1:
            $('.elcontendio').css({'visibility': 'hidden'});
            $('.cordenada1').css({'visibility': 'visible'});
            break;
        case 2:
            $('.elcontendio').css({'visibility': 'hidden'});
            $('.cordenada2').css({'visibility': 'visible'});
            break;
        case 3:
            $('.elcontendio').css({'visibility': 'hidden'});
            $('.cordenada3').css({'visibility': 'visible'});
            break;
        case 4:
            $('.elcontendio').css({'visibility': 'hidden'});
            $('.cordenada4').css({'visibility': 'visible'});
            break;
        case 5:
            $('.elcontendio').css({'visibility': 'hidden'});
            $('.cordenada5').css({'visibility': 'visible'});
            break;
        case 6:
            $('.elcontendio').css({'visibility': 'hidden'});
            $('.cordenada6').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}

function cerebro(num){
    switch (parseInt(num)) {
        case 1:
            var cont = `<div class="acuarelacer" style="min-height: 250px;padding: 32px 0px 11px 125px;">
                              <div class="acurela2text" style="">
                                <p class="justificado" style="font-size: 13px;">Desde múltiples corrientes humanistas se tiene que lo humano es un conjunto de potencias desarrollables en un contexto cultural, es decir, una condición a la que se llega por medio del proceso de enculturación, el cual se realiza a través de procesos formativos</p>
                              </div>
                          </div>`;
            $('.p2-2').html(cont);
            break;
        case 2:
            var cont = `<div class="acuarelacer" style="min-height: 250px;padding: 32px 0px 11px 125px;">
                          <div class="acurela2text" style="">
                            <p class="justificado" style="font-size: 13px;">Algunas de las teorías sobre la formación se encuentran basadas principalmente en una imagen de hombre de la cual se parte, un individuo libre de determinaciones culturales, sin conceptos o inclinaciones sociales, cercano al puro instinto, que posteriormente propone una imagen a la cual se debe llegar; un sujeto cultural, con códigos de comportamientos y propósitos sociales.</p>
                          </div>
                      </div>`;
            $('.p2-2').html(cont);
            break;
        case 3:
            var cont = `<div class="acuarelacer" style="min-height: 250px;padding: 32px 0px 11px 125px;">
                        <div class="acurela2text" style="">
                          <p class="justificado" style="font-size: 13px;">Esto indica que el proceso del desarrollo formativo implica que el individuo deba generar un tránsito en sí, para sí y en relación con el mejoramiento propio y de la cultura en la cual se desarrolla, con lo que puede adquirir su verdadero valor como ser humano, desarrollando sus potencias. Al respecto, Kant citado por Kanz (2001) declara que</p>
                        </div>
                      </div>
                      <div class="">
                        <div class="mensaje" style="width: 466px;height: 364px;position: absolute;top: 192px;">
                          <p class="justificado" style="font-size: 12px;position: relative;top: 113px;padding: 7px 82px 1px 85px;">Todos los progresos de la cultura a través de los cuales se educa al hombre tienen el fin de aplicar los conocimientos y habilidades adquiridas para emplearlos en el mundo; pero el objeto más importante del mundo a que el hombre puede aplicarlos es el hombre mismo, porque él es su propio fin último.</p>
                        </div>
                      </div>
                      <div style="margin-top: 30%;"><p>Lo anterior implica que la función del conocimiento humano debe ser aplicar tales saberes sobre el mismo ser humano, para con ello ayudarlo a superar su condición</p></div>`;
            $('.p2-2').html(cont);
            break;
        case 4:
            var cont = `
            <div class="acuarelacer" style="min-height: 250px;padding: 32px 0px 11px 125px;">
                <div class="acurela2text" style="">
                  <p class="justificado" style="font-size: 13px;">Con esto, es posible entender que el hombre es la única criatura -conocida por el hombre mismo- que posee una condición racional, y, por tanto, tiene la cualidad de adquirir conocimientos y aplicarlos en el mundo. No obstante, se hace necesario que el mayor campo de aplicación de dichos conocimientos sea el hombre mismo, ya que él con su carga racional debe realizar el paso de individuo a sujeto, con la finalidad de adquirir el carácter de ciudadano del mundo; sobre lo que Kanz (2001) dice</p>
                </div>
              </div>
              <div class="">
                <div class="mensaje" style="width: 466px;height: 485px;position: absolute;top: 238px;">
                  <p class="justificado" style="font-size: 12px;position: relative;top: 130px;padding: 25px 87px 1px 86px;">El énfasis en la subjetividad humana es un principio básico de la pedagogía universal actual. En virtud de tal principio, se define como sujetos a los implicados en los procesos educativos y formativos, que no pueden instrumentalizarse recíprocamente. La tesis de que todos los hombres son sujetos que no deben utilizarse unos a otros como medios está considerada como la quintaesencia de la filosofía de Kant (pág. 3).</p>
                </div>
              </div>`;
            $('.p2-2').html(cont);
            break;
        case 5:
            var cont = `
            <div class="acuarelacer" style="min-height: 250px;padding: 32px 0px 11px 125px;">
                  <div class="acurela2text" style="">
                    <p class="justificado" style="font-size: 13px;">Socialmente, la vida es entendida como la realización individual del sujeto desde las dos perspectivas señaladas (biológica y social), tal afirmación supone que el hombre se asuma como sujeto cultural, histórico, social, instintivo, pulsional, mental, etc. Sin embargo, es necesario señalar la importancia de la felicidad y la libertad como fundamento de tal realización, pues en estos conceptos se encuentra, según la historia de la cultura, el sentido de la vida.</p>
                  </div>
              </div>`;
            $('.p2-2').html(cont);
            break;
        case 6:
            var cont = `
            <div class="acuarelacer" style="min-height: 250px;padding: 32px 0px 11px 125px;">
                  <div class="acurela2text" style="">
                    <p class="justificado" style="font-size: 13px;">Así pues, ante tal obligatoriedad, se evidencia una primera dificultad; trascender al individuo, debido a que, si se asume al sujeto realmente como un individuo, se tiene que él debe procurar su propia realización, lo cual indica una finalidad netamente egoísta. En otras palabras, la vida es una constate lucha por sobrevivir y sobreponerse al otro.</p>
                  </div>
              </div>`;
            $('.p2-2').html(cont);
            break;
        default:
            break;
    }
}

function cambiatexto(num){
    switch (parseInt(num)) {
        case 1:
            var cont = `<p class="justificado font14">Para responder la anterior pregunta, es necesario pensar más allá de lo habitual, ir más allá de un dualismo que, como se dijo anteriormente, delimita al hombre desde dos esferas (biológica y social). Así pues, se tiene que la vida es deducida de términos fisiológicos a través de movimientos aparentes, tales como la respiración, el palpitar del corazón, la movilidad, entre otros; los cuales denotan que un cuerpo tiene vida en términos biológicos; ahora bien, ¿Y la vida en términos sociales?</p>`;
            $('.textobanewhite').html(cont);
            $('.circuloabnner').removeClass('prendido');
            $('.circuloabnner').addClass('apagado');

            $('.cambia1').removeClass('apagado');
            $('.cambia1').addClass('prendido');
            break;
        case 2:
            var cont = `<p class="justificado">Para entender al hombre en sociedad es inevitable comprender sus ideales, pues la humanidad proyecta una imagen de perfección delante de sí, señala el camino que los hombres deben seguir. En otras palabras, le dicen al hombre qué debe ser y cómo debe alcanzar tal forma de ser, lo que constituye de inicio una limitación</p>`;
            $('.textobanewhite').html(cont);
            $('.circuloabnner').removeClass('prendido');
            $('.circuloabnner').addClass('apagado');

            $('.cambia2').removeClass('apagado');
            $('.cambia2').addClass('prendido');
            break;
        case 3:
            var cont = `<p class="justificado font14">Este ideal de la sociedad está centrado en la felicidad, entendida como tranquilidad, o ausencia de turbación.</p>
                        <p class="justificado font14">En numerosas ocasiones se hace presente la misma respuesta: sí, tengo a mi familia, tengo trabajo y tengo comida. Tal respuesta es evidencia de la resignación a la simple permanencia biológica, es decir, a la simple duración del cuerpo, lo que niega la verdadera existencia de la vida social, pues ésta no es más que el medio para la supervivencia del cuerpo.</p><br>
                        <i><p class="justificado font14">Haga clic en la flecha para continuar con la información</p></i>`;
            $('.textobanewhite').html(cont);
            $('.circuloabnner').removeClass('prendido');
            $('.circuloabnner').addClass('apagado');

            $('.cambia3').removeClass('apagado');
            $('.cambia3').addClass('prendido');

            $('.aparece_proximo').html('<div onclick="pantallazo(1);" class="triasiguiente cursor" style="margin-top: 170px;margin-left: 10px;"></div>');
            break;
        default:
            break;
    }
}

function cambiatexto2(num) {
    switch (parseInt(num)) {
        case 1:
            var cont = `<p class="justificado font14">Además, la libertad es el medio por el cual el ser humano elije su propia limitación, pues es un sometimiento voluntario a los términos sociales, lo que es la causa que genera la ilusión de una verdadera acción, que al fin y al cabo no pasa de ser una resignación. Vivir se reduce a términos de duración, al temor de perder la vida.</p>`;
            $('.textobanewhite').html(cont);
            $('.circulop2').removeClass('prendido');
            $('.circulop2').addClass('apagado');

            $('.cambia2_1').removeClass('apagado');
            $('.cambia2_1').addClass('prendido');
            break;
        case 2:
            var cont = `<p class="justificado font14">Ahora bien, es indispensable señalar otro concepto clave en relación con la vida, la libertad y la felicidad; el deseo, que desde el psicoanálisis se comprende como una pulsión, entendiendo ésta como un impulso del inconsciente, y desde la biología como una manifestación de nuestro instinto animal; ambas concepciones son inaceptables para la teología, pues lo animal y lo inconsciente suponen lo oscuro, lo inmoral, lo que debe ser rechazado; de tal modo, surge la moralidad como medio por el cual el hombre niega sus deseos, ya oscuros, ya animales.</p>
                        <p class="justificado font14">La moral es el sometimiento a la razón, y ésta, es la que nos permite abandonar la animalidad del cuerpo ¿Acaso no somos cuerpo, acaso no somos animales, acaso el deseo no es propio de nuestra naturaleza?</p>`;
            $('.textobanewhite').html(cont);
            $('.circulop2').removeClass('prendido');
            $('.circulop2').addClass('apagado');

            $('.cambia2_2').removeClass('apagado');
            $('.cambia2_2').addClass('prendido');
            break;
        case 3:
            var cont = `<p class="justificado font14">Es pertinente pensar por un momento en la felicidad y la libertad como conceptos relativos, el primero puede hacer referencia a un estado interno del sujeto, que depende de factores externos, específicamente de la existencia o no del deseo; el segundo, puede ser un factor interno o externo, es decir, de sensibilidad o de acción.</p>
                                <p class="justificado font14">De este modo, ambos conceptos pueden manifestarse en todos los seres humanos; los hombres, las mujeres, los pobres, los ricos, los blancos, los afrodescendientes, los jóvenes, los adultos y los ancianos. Esto depende, en primera medida, de la concepción que cada sujeto tenga sobre tales conceptos, pues ello determina su sentido de felicidad o libertad.</p>
                                <i><p class="justificado font14">Haga clic en la flecha para continuar con la información</p></i>`;
            $('.textobanewhite').html(cont);
            $('.circulop2').removeClass('prendido');
            $('.circulop2').addClass('apagado');

            $('.cambia2_3').removeClass('apagado');
            $('.cambia2_3').addClass('prendido');

            $('.aparece_proximo').html('<div onclick="pantallazo(2);" class="triasiguiente cursor" style="margin-top: 170px;margin-left: 10px;"></div>');
            break;
        default:
            break;
    }
}

function pantallazo(num){
    switch (parseInt(num)) {
        case 1:
            var cont = `
            <div>
                <div class="circulo-border" style="">
                  <div class="circulop2 prendido text-center cambia2_1 cursor" onclick="cambiatexto2(1);" style="top: -20px;">
                    <img src="assets/img/img_ova/arbol.png" style="max-width: 90%;">
                  </div>
                  <div class="circulop2 apagado text-center cambia2_2 cursor" onclick="cambiatexto2(2);" style="left: 75px;top: -24px;">
                    <img src="assets/img/img_ova/hombre-palo.png" style="max-width: 90%;">
                  </div>
                  <div class="circulop2 apagado text-center cambia2_3 cursor" onclick="cambiatexto2(3);" style="left: 157px;top: -40px;">
                    <img src="assets/img/img_ova/amistad.png" style="max-width: 90%;">
                  </div>
                </div>
              </div>

              <div style="margin-top: 15px;">
                <i><p>Habla clic en las imágenes para continuar con la información sobre el sentido de la vida.</p></i>
              </div>`;
            $('.seleccionable').html(cont);
            $('.aparece_proximo').html('');
            var cont = `<p class="justificado font14">Además, la libertad es el medio por el cual el ser humano elije su propia limitación, pues es un sometimiento voluntario a los términos sociales, lo que es la causa que genera la ilusión de una verdadera acción, que al fin y al cabo no pasa de ser una resignación. Vivir se reduce a términos de duración, al temor de perder la vida.</p>`;
            $('.textobanewhite').html(cont);
            break;
        case 2:
            var cont = `<p class="justificado font14">Ahora bien, es indispensable señalar otro concepto clave en relación con la vida, la libertad y la felicidad; el deseo, que desde el psicoanálisis se comprende como una pulsión, entendiendo ésta como un impulso del inconsciente, y desde la biología como una manifestación de nuestro instinto animal; ambas concepciones son inaceptables para la teología, pues lo animal y lo inconsciente suponen lo oscuro, lo inmoral, lo que debe ser rechazado; de tal modo, surge la moralidad como medio por el cual el hombre niega sus deseos, ya oscuros, ya animales.</p>
                        <p class="justificado font14">La moral es el sometimiento a la razón, y ésta, es la que nos permite abandonar la animalidad del cuerpo ¿Acaso no somos cuerpo, acaso no somos animales, acaso el deseo no es propio de nuestra naturaleza?</p>`;
            $('.textobanewhite').html(cont);
            $('.circulop2').removeClass('prendido');
            $('.circulop2').addClass('apagado');

            $('.cambia2_2').removeClass('apagado');
            $('.cambia2_2').addClass('prendido');
            break;
        case 3:
            var cont = `<p class="justificado font14">Es pertinente pensar por un momento en la felicidad y la libertad como conceptos relativos, el primero puede hacer referencia a un estado interno del sujeto, que depende de factores externos, específicamente de la existencia o no del deseo; el segundo, puede ser un factor interno o externo, es decir, de sensibilidad o de acción.</p>
                                <p class="justificado font14">De este modo, ambos conceptos pueden manifestarse en todos los seres humanos; los hombres, las mujeres, los pobres, los ricos, los blancos, los afrodescendientes, los jóvenes, los adultos y los ancianos. Esto depende, en primera medida, de la concepción que cada sujeto tenga sobre tales conceptos, pues ello determina su sentido de felicidad o libertad.</p>
                                <i><p class="justificado font14">Haga clic en la flecha para continuar con la información</p></i>`;
            $('.textobanewhite').html(cont);
            $('.circulop2').removeClass('prendido');
            $('.circulop2').addClass('apagado');

            $('.cambia2_3').removeClass('apagado');
            $('.cambia2_3').addClass('prendido');

            $('.aparece_proximo').html('<div class="triasiguiente cursor" style="margin-top: 170px;margin-left: 10px;"></div>');
            break;
        default:
            break;
    }
}

function primero(){
    var cont = `<div class="row p-0 bannerboder" style="">
                    <div class="col-md-8 m-0" style="padding: 25px 10px 16px 10px;">
                      <p class="justificado font14">
                        De tal modo, surge la idea de preservación, la cual implica la supervivencia como un medio esencial para la manifestación del Yo; sin embargo, tal conservación de la vida es asumida legalmente como un derecho irrevocable, con lo que se tiene entonces que las sociedades defienden la vida, pero ¿Hasta qué punto es verdad tal afirmación? 
                      </p>
                      <i><p class="justificado font14">
                        Haga clic en las imágenes para continuar con la información sobre el sentido de la vida.  
                      </p></i>
                    </div>
                    <div class="col-md-4">
                      <div class="circuloabnner text-center prendido cambia1 cursor" style="" onclick="cambiatexto(1);">
                        <img src="assets/img/img_ova/pregunta1.png" style="max-width: 90%;">
                      </div>
                      <div class="circuloabnner text-center apagado cambia2 cursor" style="margin-top: 40px;margin-left: 45px;" onclick="cambiatexto(2);">
                        <img src="assets/img/img_ova/mente-humana.png" style="max-width: 90%;">
                      </div> 
                      <div class="circuloabnner text-center apagado cambia3 cursor" style="margin-top: 31px;margin-left: 3px;" onclick="cambiatexto(3);">
                        <img src="assets/img/img_ova/libertad.png" style="max-width: 90%;">
                      </div>
                    </div>
                  </div>`;
    $('.seleccionable').html(cont);
    $('.aparece_proximo').html('');
    var cont = `<p class="justificado font14">Para responder la anterior pregunta, es necesario pensar más allá de lo habitual, ir más allá de un dualismo que, como se dijo anteriormente, delimita al hombre desde dos esferas (biológica y social). Así pues, se tiene que la vida es deducida de términos fisiológicos a través de movimientos aparentes, tales como la respiración, el palpitar del corazón, la movilidad, entre otros; los cuales denotan que un cuerpo tiene vida en términos biológicos; ahora bien, ¿Y la vida en términos sociales?</p>`;
    $('.textobanewhite').html(cont);
}