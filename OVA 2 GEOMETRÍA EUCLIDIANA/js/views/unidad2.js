$( document ).ready(function() {
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $(".menu1").removeClass('c-show');
    $(".menu2").addClass('c-show');
    star_uni = 2;
    paso = false;
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
        /*actualizarprogress();*/
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
        
    });
    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        
        console.log(e);
        if (tema != 0) {
            controlSlides(tema);
            tema = 0;
        } else {
            controlSlides(stepIndex+1);
        }
        // quitarflecha(stepIndex+1);
        switch(stepIndex) {
            case 1:
                break;
            default:
                break;
            // code block
        }
        slideNum = stepIndex;
    });
    /*slide_predeterminado();*/
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
    console.log(tema);
    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/Unidad 2/ejemplo_nelementos_unidad2.pdf"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria1.pdf    <b class="ml-4"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/Unidad 2/evaluacion2_conjuntos.docx"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Actividad_complementaria2.pdf    <b class="ml-4"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    /*actualizarprogress(stepIndex+11);*/
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link(num){
    tema=1;
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function controlSlides(num){
    actualizarprogress(num+10);
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            cambiarColorMenu(12);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 11;
            break;
        case 1:
            paraIframe(0);
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            cambiarColorMenu(12);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 2:

            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            cambiarColorMenu(12);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            cambiarColorMenu(12);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Relaciones, operaciones entre conjuntos y sus propiedades. (representación gráfica)");
            cambiarColorMenu(22);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Relaciones, operaciones entre conjuntos y sus propiedades. (representación gráfica)");
            cambiarColorMenu(22);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").addClass('c-show');
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            cambiarColorMenu(32);
            $(".menu1").addClass('d-none');
            $(".menu2").addClass('d-none');
            break;
        default:
            break;
    }
}



function cambiacontenido(opcion){
    $(".hover_1, .hover_2, .hover_3, .hover_4, .hover_5").removeClass('font-weight-bold');
    switch (parseInt(opcion)) {
        case 1:
            var img = `<img src="assets/img/img_ova/dibujo_union.png" style="max-width: 90%;">`;
            var cont = `<div class="m-auto"><p class="justificado">Si se tienen dos conjuntos A y B, se llama unión al conjunto formado por los elementos que pertenecen a estos conjuntos, es decir:</p>
                                    <p class="justificado">𝐴 ∪𝐵= {𝑥 / 𝑥∈𝐴 ∨ 𝑥∈𝐵}.</p>
                                    <p class="justificado">Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p></div>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            $(".hover_1").addClass('font-weight-bold');
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/dibujo_interseccion.png" style="max-width: 90%;">`;
            var cont = `<div class="m-auto"><p class="justificado">Si se tienen dos conjuntos A y B, se llama intersección al conjunto formado por los elementos en común de estos conjuntos, es decir:</p>
                                    <p class="justificado">𝐴 ∩𝐵= {𝑥 / 𝑥∈𝐴  ∧   𝑥∈𝐵}.</p>
                                    <p class="justificado">Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p></div>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            $(".hover_2").addClass('font-weight-bold');
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/dibujo_diferencia.png" style="max-width: 90%;">`;
            var cont = `<div class="m-auto"><p class="justificado">Dados dos conjuntos A y B, se llama diferencia al conjunto al formado por los elementos que son del primero pero que no son del segundo, es decir:</p>
                                    <p class="justificado">𝐴 ∩𝐵= 𝐴−𝐵= {𝑥 / 𝑥∈𝐴  ∧   𝑥∉𝐵}.</p>
                                    <p class="justificado">Sombreado <img src="assets/img/img_ova/señalar.png" style="max-width: 15%;"></p></div>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            $(".hover_3").addClass('font-weight-bold');
            break;
        case 4:
            var img = `<img src="assets/img/img_ova/dibujo_diferenciasimetrica.png" style="max-width: 90%;">`;
            var cont = `<div class="m-auto"><p class="justificado">Se llama diferencia simétrica entre A y B al conjunto de los elementos exclusivos de los dos conjuntos, es decir:</p>
                                    <p class="justificado">𝐴△𝐵= {𝑥 / 𝑥∈(𝐴−𝐵)    ⋁   𝑥∈(𝐵−𝐴)}
                                    𝐴△𝐵=(𝐴−𝐵)  ∪(𝐵−𝐴)</p>
                                    <p class="justificado">Propiedad; una forma equivalente</p>
                                    <p class="justificado">𝐴△𝐵=(𝐴∪𝐵)−(𝐴∩𝐵)</p></div>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            $(".hover_4").addClass('font-weight-bold');
            break;
        case 5:
            var img = `<img src="assets/img/img_ova/dibujo_complemento.png" style="max-width: 90%;">`;
            var cont = `<div class="m-auto"><p class="justificado">𝐴<sup>𝐶</sup> o 𝐴′  o  𝐴 ̅,  o también la diferencia  𝑈−𝐴 , se le llama complemento de 𝐴 con respecto a 𝑈,  o simplemente complemento de 𝐴.</p>
                                    <p class="justificado">Está conformado por los elementos que NO pertenecen al conjunto A. (Que están por fuera de 𝐴)</p></div>`;
            $("#content").html(cont);
            $("#img_cont").html(img);
            $(".hover_5").addClass('font-weight-bold');
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
            $("#pregunta_cont").addClass('d-none');
    switch (parseInt(opcion)) {
        case 1:
            var img = `<div class="m-auto"><img src="assets/img/img_ova/ejp_union.png" style="max-width: 75%;"></div>`;
            var cont = `<div class="m-auto"><b>Complemento de la unión entre dos conjuntos:</b>
                                      <p>(𝑨∪𝑩)<sup>𝑪</sup> o (𝑨∪𝑩)′  o  ((𝑨∪𝑩)) ̅, </p>
                                      <p>O también la diferencia 𝐔−(𝐀∪𝐁)</p></div>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            
            //$("#pregunta_cont").html('');
            break;
        case 2:
            var img = `<div class="m-auto"><img src="assets/img/img_ova/ejp_complementointerseccion.png" style="max-width: 75%;"></div>`;
            var cont = `<div class="m-auto"><b>Complemento de la intersección entre dos conjuntos:</b>
                                      <p>(𝐴∩𝐵)<sup>𝐶</sup> o (𝐴∩𝐵)′  o  ((𝐴∩𝐵)) </p>
                                      <p>O también la diferencia  𝑈−(𝐴∩𝐵)</p></div>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            //$("#pregunta_cont").html('');
            break;
        case 3:
            var img = `<div class="m-auto"><img src="assets/img/img_ova/ejp_doblemente.png" style="max-width: 75%;"></div>`;
            var cont = `<div class="m-auto"><p>Si se quisiera graficar
                        (𝐴∩𝐵)<sup>𝐶</sup>∪𝐶 
                        Los conjuntos (𝐴∩𝐵)<sup>𝐶</sup> y 𝐶, se rayan en sentidos diferentes.
                        La unión ∪, será todo lo rayado; Si se quisiera graficar la intersección
                        (𝐴∩𝐵)<sup>𝐶</sup>∩𝐶 
                        <p>Será todo lo doblemente rayado</p></div>`;
            $("#contenido2").html(cont);
            $("#img_2").html(img);
            $("#pregunta_cont").removeClass('d-none');
            
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
    $(".tri1, .tri2, .tri3, .tri4, .tri5").addClass('d-none');
    if (num == 1) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 pt-4">
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
                      <div class="col-lg-4 d-flex justify-content-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uOOW-0kkbqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtubes img-100 vid"></iframe>
                      </div>
                      <div class="col-lg-4">
                        <img src="assets/img/img_ova/geometricos.png" style="max-width: 70%;">
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto);
        $(".tri1").removeClass('d-none');
    }if (num == 2) {
        var conjunto = `
                    <div class="col-lg-12 row pt-4">
                      <div class="col-md-4" style="border-right: solid 1px #4141f3;">
                        <div class="row">
                          <div class="col-lg-4 col-md-4" style="height: fit-content;">
                            <img src="assets/img/img_ova/mayuscula.png" style="max-width: 100%;">
                          </div>
                          <div class="col-lg-8 col-md-8" style="height: fit-content;">
                            <p class="size_13">Se acostumbra a utilizar las letras <b>mayúsculas</b> para denotar conjuntos.</p>
                          </div>
                        </div>
                        <br>
                        <div class="row">
                          <div class="col-lg-4 col-md-4" style="height: fit-content;">
                            <img src="assets/img/img_ova/minuscula.png" style="max-width: 100%;">
                          </div>
                          <div class="col-lg-8 col-md-8" style="height: fit-content;">
                            <p class="size_13">Y las letras <b>minúsculas</b> para denotar sus elementos.</p>
                          </div>
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
                              <div class="banner mt-4">
                                <p class="text-white text-banner">𝒙∉𝑩</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-12" style="padding: 5%;">
                        
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto);
        $(".tri2").removeClass('d-none');
    }if (num == 3) {
        var conjunto = `
                    <div class="col-lg-12 col-md-12 pt-4">
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
                                        <p class="text-white text-center"><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Ejemplo: </b></p>
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
                                <p class="justificado">Consiste esta forma, en describir un conjunto enunciando las propiedades de todos sus elementos.  Esto se representa usando la expresión matemática: “ / ” que se lee “tal que” (o “tales que”).</p>
                            </div>
                            <div class="card1_bottom2">
                                <div class="row">
                                    <div class="col-lg-12">
                                      <p class="text-white text-center"><img src="assets/img/img_template/ejemplos.png" alt="" class="img-icon"> <b>Ejemplo: </b></p>
                                      <p class="text-white justificado">Si 𝑀 es el conjunto de los números impares: 𝑀 = { 𝒙 / 𝒙 𝑒𝑠 𝑛ú𝑚𝑒𝑟𝑜 𝑖𝑚𝑝𝑎𝑟 }
                              Que se lee “𝑀 es el conjunto de elementos 𝒙,  tal que 𝒙 es número impar”.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto);
        $(".tri3").removeClass('d-none');
    }if (num == 4) {
        var conjunto = `
                    <div>
                        <div class="col-lg-12 m-2 pt-4">
                            <div class="row">
                              <h5>Representación de conjuntos:</h5>
                              <p class="justificado">Los conjuntos pueden representarse en DIAGRAMA DE VENN
                              Todo conjunto se puede representar gráficamente por medio de un área plana delimitada por una curva cerrada (óvalos, círculo, triángulo, rectángulo, etc.)</p>
                            </div>
                        </div>
                        <br>
                        <div class="col-lg-12 m-1">
                            <div class="row ">
                              <div class="col-lg-2 d-flex">
                                <img src="assets/img/img_ova/ejemplos.png" class="my-auto" style="max-width: 100%;">
                              </div>
                              <div class="col-lg-5 d-flex">
                                  <div class="my-auto">
                                    <b>Ejemplo</b>
                                    <p>Los conjuntos 𝐴 = {1, 2, 3 }  y 𝐵={ 2, 4 }  gráficamente:</p>
                                    <img src="assets/img/img_ova/flecha_punteada.png">
                                  </div>
                              </div>
                              <div class="col-lg-5">
                                <img src="assets/img/img_ova/representacion_conjuntos.png" style="max-width: 70%;">
                              </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto);
        $(".tri4").removeClass('d-none');
    }if (num == 5) {
        var conjunto = `
                    <div class="d-flex justify-content-center col-md-12">
                      <div class="row">
                        <div class="fondo_canvas col-lg-12 m-0 p-0">
                          <p class="rueda1 cursor" data-toggle="modal" data-target="#modalconjunto">Conjunto universal (referencial)</p>
                          <p class="rueda2 cursor" data-toggle="modal" data-target="#modalconjunto2">Conjuntos finitos e infinitos</p>
                          <p class="rueda3 cursor" data-toggle="modal" data-target="#modalconjunto4">Subconjuntos</p>
                          <p class="rueda4 cursor" data-toggle="modal" data-target="#modalconjunto3">Conjunto vacío</p>
                        </div>
                        <div class="d-flex  col-lg-12">
                            <p class="text-center mx-auto">Al hacer clic en los circulos puede ver más información</p>
                        </div>
                      </div>
                    </div>
                    `;
        $("#info_unidad2").html(conjunto);
        $(".tri5").removeClass('d-none');
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