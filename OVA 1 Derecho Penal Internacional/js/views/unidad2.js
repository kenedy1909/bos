$( document ).ready(function() {
    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
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
        actualizarprogress();
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
        actualizarprogress();
    });
    slide_predeterminado();
    console.log(tema);
    slide_link(tema);
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
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 16;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Tribunales internacionalizados","El desarrollo del los conflictos armados");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
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
*/
/*function cambiacontenido2(opcion){
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
}*/

/*function conjuntos(num){
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

function camboyas(num) {
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
}