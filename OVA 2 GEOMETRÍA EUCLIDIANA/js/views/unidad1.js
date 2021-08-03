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
    
    $(".lista").on('click',listas);
    $(".conectores").on('click',conector);
    $(".opcion-circular").on('click',opciones);
    $(".open-card").on('click',abrir_card);
    $(".circle-argumento").on('click',argumentos);
    $(".giro").on('click',rodar);
    $(".demostracion").on('click',demostraciones);
    $(".aparecer-card").on('click',aparecer_tarjeta);
    $(".esconder-card").on('click',esconder_tarjeta);
    $("#Silogismo-1").on('click',function () {
        $("#Silogismo-0").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-1").removeClass('col-md-3 col-sm-3');
        $("#Silogismo-2").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-3").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-4").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-5").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-0").addClass('col-md-3 col-sm-3');
        $("#Silogismo-1").addClass('col-md-6 col-sm-6');
        $("#Silogismo-2").addClass('col-md-3 col-sm-3');
        $("#Silogismo-3").addClass('col-md-3 col-sm-3');
        $("#Silogismo-4").addClass('col-md-3 col-sm-3');
        $("#Silogismo-5").addClass('col-md-3 col-sm-3');
        var text1 = `
                    <div class="px-3">
                        <div class="card-azul-o">
                            <h1 class="p_white"><b>1</b></h1>
                            <div class="d-flex">
                                <div class="m-auto">
                                    <p class="p_white text-rigth"><i><b>   𝑫𝒆𝒎𝒐𝒔𝒕𝒓𝒂𝒓  𝑹 ∨ 𝑻</b></i></p>
                                    <br>
                                    <p class="p_white text-center"> (1)    𝑅 ∨(~ 𝑀∧  ~𝑁)</p>
                                    <p class="p_white text-center">(2)  ~ (𝑀 ∨ 𝑁)→ 𝐽</p>
                                    <p class="p_white text-center">(3)  (𝐹 ∨ 𝐺)  →  ~ 𝐽</p>
                                    <p class="p_white text-center">(4)  𝐹</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="m-auto text-right img-70">
                                    <img src="assets/img/img_ova/apuntando-a-la-derecha.png" alt="" class="img-20">
                                </div>
                                <div class="m-auto">
                                    <button class="btn card-blanco-o p_black" data-toggle="modal" data-target="#modal-Silogismo-1">Solución</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        var text2 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>2</b></h1>
                        </div>
                    </div>
                    `;
        $("#Silogismo-0").removeClass('d-none');
        $("#Silogismo-1").removeClass('d-none');
        $("#Silogismo-2").removeClass('d-none');
        $("#Silogismo-0").html('');
        $("#Silogismo-1").html(text1);
        $("#Silogismo-2").html(text2);
        $("#Silogismo-3").addClass('d-none');
        $("#Silogismo-4").addClass('d-none');
        $("#Silogismo-5").addClass('d-none');
    });

    $("#Silogismo-2").on('click',function () {
        $("#Silogismo-0").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-1").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-2").removeClass('col-md-3 col-sm-3');
        $("#Silogismo-3").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-4").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-5").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-0").addClass('col-md-3 col-sm-3');
        $("#Silogismo-1").addClass('col-md-3 col-sm-3');
        $("#Silogismo-2").addClass('col-md-6 col-sm-6');
        $("#Silogismo-3").addClass('col-md-3 col-sm-3');
        $("#Silogismo-4").addClass('col-md-3 col-sm-3');
        $("#Silogismo-5").addClass('col-md-3 col-sm-3');
        var text1 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>1</b></h1>
                        </div>
                    </div>
                    `;
        var text2 = `
                    <div class="px-3">
                        <div class="card-azul-o">
                            <h1 class="p_white"><b>2</b></h1>
                            <div class="d-flex">
                                <div class="m-auto">
                                    <p class="p_white text-rigth"><i><b>𝑫𝒆𝒎𝒐𝒔𝒕𝒓𝒂𝒓   𝒙 = 𝒚</b></i></p>
                                    <br>
                                    <p class="p_white text-center">(1)  𝑥 + 1 = 2</p>
                                    <p class="p_white text-center">(2) 𝑥 + 1 = 2 → 𝑦 + 1 ≠ 2</p>
                                    <p class="p_white text-center">(3)  𝑥 ≠ 𝑦  ⟹  𝑦 + 1 = 2</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="m-auto text-right img-70">
                                    <img src="assets/img/img_ova/apuntando-a-la-derecha.png" alt="" class="img-20">
                                </div>
                                <div class="m-auto">
                                    <button class="btn card-blanco-o p_black" data-toggle="modal" data-target="#modal-Silogismo-2">Solución</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        var text3 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>3</b></h1>
                        </div>
                    </div>
                    `;
        $("#Silogismo-0").addClass('d-none');
        $("#Silogismo-1").removeClass('d-none');
        $("#Silogismo-2").removeClass('d-none');
        $("#Silogismo-3").removeClass('d-none');
        $("#Silogismo-1").html(text1);
        $("#Silogismo-2").html(text2);
        $("#Silogismo-3").html(text3);
        $("#Silogismo-4").addClass('d-none');
        $("#Silogismo-5").addClass('d-none');
    });

    $("#Silogismo-3").on('click',function () {
        $("#Silogismo-0").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-1").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-2").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-3").removeClass('col-md-3 col-sm-3');
        $("#Silogismo-4").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-5").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-0").addClass('col-md-3 col-sm-3');
        $("#Silogismo-1").addClass('col-md-3 col-sm-3');
        $("#Silogismo-2").addClass('col-md-3 col-sm-3');
        $("#Silogismo-3").addClass('col-md-6 col-sm-6');
        $("#Silogismo-4").addClass('col-md-3 col-sm-3');
        $("#Silogismo-5").addClass('col-md-3 col-sm-3');
        var text2 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>2</b></h1>
                        </div>
                    </div>
                    `;
        var text3 = `
                    <div class="px-3">
                        <div class="card-azul-o">
                            <h1 class="p_white"><b>3</b></h1>
                            <div class="d-flex">
                                <div class="m-auto">
                                    <p class="p_white text-rigth"><i><b>𝐷𝑒𝑚𝑜𝑠𝑡𝑟𝑎𝑟  ~(𝑦=1  → 𝑥^2≯𝑥𝑦)</b></i></p>
                                    <br>
                                    <p class="p_white text-center">(1)  𝑥=1  ∨ ~(𝑥+𝑦=𝑦  ∨  𝑥≯𝑦 )</p>
                                    <p class="p_white text-center">(2)   𝑥>𝑦  → (𝑥^2>𝑥𝑦  ∧  𝑦=1 )</p>
                                    <p class="p_white text-center">(3)  𝑥≠1</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="m-auto text-right img-70">
                                    <img src="assets/img/img_ova/apuntando-a-la-derecha.png" alt="" class="img-20">
                                </div>
                                <div class="m-auto">
                                    <button class="btn card-blanco-o p_black" data-toggle="modal" data-target="#modal-Silogismo-3">Solución</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        var text4 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>4</b></h1>
                        </div>
                    </div>
                    `;
        $("#Silogismo-0").addClass('d-none');
        $("#Silogismo-1").addClass('d-none');
        $("#Silogismo-2").removeClass('d-none');
        $("#Silogismo-3").removeClass('d-none');
        $("#Silogismo-4").removeClass('d-none');
        $("#Silogismo-2").html(text2);
        $("#Silogismo-3").html(text3);
        $("#Silogismo-4").html(text4);
        $("#Silogismo-5").addClass('d-none');
    });

    $("#Silogismo-4").on('click',function () {
        $("#Silogismo-0").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-1").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-2").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-3").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-4").removeClass('col-md-3 col-sm-3');
        $("#Silogismo-5").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-0").addClass('col-md-3 col-sm-3');
        $("#Silogismo-1").addClass('col-md-3 col-sm-3');
        $("#Silogismo-2").addClass('col-md-3 col-sm-3');
        $("#Silogismo-3").addClass('col-md-3 col-sm-3');
        $("#Silogismo-4").addClass('col-md-6 col-sm-6');
        $("#Silogismo-5").addClass('col-md-3 col-sm-3');
        var text3 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>3</b></h1>
                        </div>
                    </div>
                    `;
        var text4 = `
                    <div class="px-3">
                        <div class="card-azul-o">
                            <h1 class="p_white"><b>4</b></h1>
                            <div class="d-flex">
                                <div class="m-auto">
                                    <p class="p_white text-rigth"><i><b>Demostrar ~ 𝑷</b></i></p>
                                    <br>
                                    <p class="p_white text-center">(1) ~ (𝑃∧𝑄) </p>
                                    <p class="p_white text-center">(2) 𝑃 →𝑅</p>
                                    <p class="p_white text-center">(3) 𝑄 ∨ ~𝑅</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="m-auto text-right img-70">
                                    <img src="assets/img/img_ova/apuntando-a-la-derecha.png" alt="" class="img-20">
                                </div>
                                <div class="m-auto">
                                    <button class="btn card-blanco-o p_black" data-toggle="modal" data-target="#modal-Silogismo-4">Solución</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        var text5 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>5</b></h1>
                        </div>
                    </div>
                    `;
        $("#Silogismo-0").addClass('d-none');
        $("#Silogismo-1").addClass('d-none');
        $("#Silogismo-2").addClass('d-none');
        $("#Silogismo-3").removeClass('d-none');
        $("#Silogismo-4").removeClass('d-none');
        $("#Silogismo-5").removeClass('d-none');
        $("#Silogismo-3").html(text3);
        $("#Silogismo-4").html(text4);
        $("#Silogismo-5").html(text5);
    });

    $("#Silogismo-5").on('click',function () {
        $("#Silogismo-0").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-1").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-2").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-3").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-4").removeClass('col-md-6 col-sm-6');
        $("#Silogismo-5").removeClass('col-md-3 col-sm-3');
        $("#Silogismo-0").addClass('col-md-3 col-sm-3');
        $("#Silogismo-1").addClass('col-md-3 col-sm-3');
        $("#Silogismo-2").addClass('col-md-3 col-sm-3');
        $("#Silogismo-3").addClass('col-md-3 col-sm-3');
        $("#Silogismo-4").addClass('col-md-3 col-sm-3');
        $("#Silogismo-5").addClass('col-md-6 col-sm-6');
        var text4 = `
                    <div class="px-3 h-100">
                        <div class="card-amarillo-o h-100 d-flex">
                            <h1 class="p_white m-auto"><b>4</b></h1>
                        </div>
                    </div>
                    `;
        var text5 = `
                    <div class="px-3">
                        <div class="card-azul-o">
                            <h1 class="p_white"><b>5</b></h1>
                            <div class="d-flex">
                                <div class="m-auto">
                                    <p class="p_white text-rigth"><i>En el siguiente ejercicio, obtenga la conclusión Lógica usando todas las premisas, </i></p>
                                    <p class="p_white text-rigth"><i>Cuando se obtenga una nueva premisa, será porque efectivamente será usada, de lo contrario no se propone.</i></p>
                                    <br>
                                    <p class="p_white text-center">(1)  𝑥<𝑦 ∨  𝑥 =  𝑦  </p>
                                    <p class="p_white text-center">(2)  𝑥 =  𝑦  →  𝑦 ≠5</p>
                                    <p class="p_white text-center">(3)  (𝑥<  𝑦  ∧  𝑦=5)→  𝑥<5</p>
                                    <p class="p_white text-center">(4)  𝑦=5</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="m-auto text-right img-70">
                                    <img src="assets/img/img_ova/apuntando-a-la-derecha.png" alt="" class="img-20">
                                </div>
                                <div class="m-auto">
                                    <button class="btn card-blanco-o p_black" data-toggle="modal" data-target="#modal-Silogismo-5">Solución</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        $("#Silogismo-0").addClass('d-none');
        $("#Silogismo-1").addClass('d-none');
        $("#Silogismo-2").addClass('d-none');
        $("#Silogismo-3").addClass('d-none');
        $("#Silogismo-4").removeClass('d-none');
        $("#Silogismo-5").removeClass('d-none');
        $("#Silogismo-4").html(text4);
        $("#Silogismo-5").html(text5);
    });

    $('.card_animada').click(function () {
        var numeroTarjeta = $(this).attr("data-numeroTarjeta");

        $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
        $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
        cardanimada(numeroTarjeta);
    });
    /*setMigaja("Unidades de aprendizaje","1. Lógica matemática","Cuantificadores, sus negaciones y el contraejemplo");*/

    /*var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".modal_scroll2").on('click', modal_scroll2);
    $(".modal_scroll3").on('click', modal_scroll3);
    $(".modal_scroll4").on('click', modal_scroll4);*/
    /*$(".unidad1-1").on('click', slide_link);
    $(".unidad1-5").on('click', slide_link);
    $(".unidad1-6_paso1").on('mouseover', unidad1_pantalla6_accion1);
    $(".unidad1-6_paso3").on('mouseover', unidad1_pantalla6_accion3);
    $(".unidad1-6_paso1").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso1").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso2").on('mouseleave', unidad1_pantalla6_accion4);
    $(".unidad1-6_paso3").on('mouseleave', unidad1_pantalla6_accion4);*/

    $(".card-a-1").on('mouseover', card_amarillo1);
    $(".card-a-2").on('mouseover', card_amarillo2);
    $(".card-a-3").on('mouseover', card_amarillo3);
    $(".card-a-1").on('mouseleave', card_amarillo_salir);
    $(".card-a-2").on('mouseleave', card_amarillo_salir);
    $(".card-a-3").on('mouseleave', card_amarillo_salir);
    $(".card-a").on('click', card_amarillo_info);
    /*scroll();*/

    console.log(tema);
    slide_link(tema);
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex+1);
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
        case 1:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");            
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Proposiciones simples y compuestas /Introducción");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 25:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 26:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 31:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 34:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 35:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 36:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 37:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Argumentos");
            break;
        case 38:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            break;
        case 40:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            break;
        case 41:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            break;
        case 41:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            break;
        case 41:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            break;
        case 39:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            break;
        case 42:
            setMigaja("Unidades de aprendizaje","1. Lógica matemática","Métodos de Demostración de Teoremas");
            /*$("#content-ova").load("base/unidades/unidad2.html");
            tema = 1;*/
            break;
        default:
            break;
    }
}

/*function modal_scroll2(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob3');
    bar = document.querySelector('.custom-scrollbar__bar3');
    container = document.querySelector('.custom-scrollbar__inner3');
    scroll();
}
function modal_scroll3(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob4');
    bar = document.querySelector('.custom-scrollbar__bar4');
    container = document.querySelector('.custom-scrollbar__inner4');
    scroll();
}
function modal_scroll4(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob5');
    bar = document.querySelector('.custom-scrollbar__bar5');
    container = document.querySelector('.custom-scrollbar__inner5');
    scroll();
}*/

/*function funcion_vanvas() {
    var canvas = new fabric.Canvas('id_canvas');
    var imgElement = 'assets/img/uno.png';
    var imgElement2 = 'assets/img/dos.png'; 
    var imgElement3 = 'assets/img/tres.png';
    var imgElement4 = 'assets/img/cuatro.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=40;
        oImg.top=10;
        oImg.scaleToHeight(40);
        oImg.scaleToWidth(40);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito1").modal("show");            
        });
        oImg.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=260;
        oImg2.top=50;
        oImg2.scaleToHeight(40);
        oImg2.scaleToWidth(40);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito2").modal("show");            
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=240;
        oImg3.top=230;
        oImg3.scaleToHeight(40);
        oImg3.scaleToWidth(40);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito3").modal("show");            
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=10;
        oImg4.top=230;
        oImg4.scaleToHeight(40);
        oImg4.scaleToWidth(40);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_circuito4").modal("show");            
        });
        oImg4.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
}*/

/*function unidad1_pantalla6_accion1(){
    var info = '<p class="text-white">Se verifica que la proposición es cierta para el primer caso (si se desea se verifica para algunos casos siguientes al primero).</p>';
    $("#unidad1-6_paso1").html(info);
}

function unidad1_pantalla6_accion2(){
    var info = '<p class="text-white">Se <u>supone cierta</u> la proposición para un caso 𝑛=𝒌. Siendo 𝒌 cualquier natural.</p>';
    $("#unidad1-6_paso2").html(info);
}

function unidad1_pantalla6_accion3(){
    var info = `
                <p class="text-white">Se <u>demuestra que es cierta</u> para el caso siguiente; n=k+1) Se apoya en la premisa 2) que recibe el nombre de <u>hipótesis de inducción</u>.</p>
                <p class="text-white">El enunciado del paso 3) recibe el nombre de tesis de Inducción</p>
                <p class="text-white">Para probar que la afirmación (∀n) (n∈N) (Pn) es falsa se recurre al CONTRAEJEMPLO.</p>
                `;

    $("#unidad1-6_paso3").html(info);
    $(".custom-scrollbar__bar2").css('display','block');
    $(".custom-scrollbar2").css('height','240px');
}

function unidad1_pantalla6_accion4(){
    $(".limpiar_pasos").html('');
    $(".custom-scrollbar__bar2").css('display','none');
    $(".custom-scrollbar2").css('height','88px');
}*/

//scroll



//scroll2  bg-btn-a-c

/*var knob = document.querySelector('.custom-scrollbar__knob2');
var bar = document.querySelector('.custom-scrollbar__bar2');
var container = document.querySelector('.custom-scrollbar__inner2');*/
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
/*function scroll(){
    $(".scroll-scrollbar").css({
            'position':'relative',
            'height':'240px',
            'width':'fit-content',
            'overflow':'hidden'
    });
    $(".scroll-scrollbar__bar").css({
              'position':' absolute',
              'top':' 22px',
              'bottom':' 45px',
              'background':'#FFFFFF',
              'width':' 3px',
              'right':' 30px',
              'border-radius':' 4px'
    });
    $(".scroll-scrollbar__knob").css({
              'position': 'absolute',
              'top':' 0',
              'left':' 50%',
              'width':' 25px',
              'height':' 25px',
              'border-radius':' 50%',
              'background':' #FFFFFF',
              'transform':' translate(-50%, -50%)',
              'will-change':' top'
    });
    $(".scroll-linea_scroll_modal").css({
            'font-size':' 50px',
            'margin':' 0px',
            'position':' relative',
            'top':' -32px'
    });
}*/

function poner(num) {
    
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display','block');
        $(".custom-scrollbar2").css('height','250');
    }
}
function quitar(num) {
    $(".texto_efecto"+num).css({
        position: 'relative',
        top: '2px',
        display: 'none',
        'z-index': '100'
    });
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display','none');
        $(".custom-scrollbar2").css('height','180px');
    }
}

function listas(){
    var lista_num = $(this).data('lista');
    if (lista_num == 1) {
        var text = `
                    <p class="text-center"><img src="assets/img/img_ova/ejemplo preposiciones 1.png" alt="" class="img-80"></p>
                    `;
        $("#lista-1").html(text);
        $(".lista-s").data('lista', 2);
        $(".lista-a").data('lista', 3);
    }else if (lista_num == 2) {
        var text = `
                    <p class="text-center"><img src="assets/img/img_ova/ejemplo preposiciones 2.png" alt="" class="img-80"></p>
                    `;
        $("#lista-1").html(text);
        $(".lista-s").data('lista', 3);
        $(".lista-a").data('lista', 1);
    }else if (lista_num == 3) {
        var text = `
                    <p class="text-center"><img src="assets/img/img_ova/ejemplo preposiciones 3.png" alt="" class="img-80"></p>
                    `;
        $("#lista-1").html(text);
        $(".lista-s").data('lista', 1);
        $(".lista-a").data('lista', 2);
    }
}

function disyunciones(){
    var disyuncion_num = $(this).data('disyuncion');
    if (disyuncion_num == 1) {
        var text1 = `
                    <p class="p_black justificado">Dadas dos proposiciones p ,q se definen, o se pueden formar una conjunción lógica.</p>
                    <br>
                    <p class="p_black justificado">“La conjunción de p con q”:      p ^ q, se lee “p y q”</p>
                    <br>
                    <p class="p_black justificado">La conjunción entre dos proposiciones será verdadera (V) y se debe cumplir solo cuando ambas sean verdaderas:</p>
                    `;
        var text2 = `
                    <img src="assets/img/img_ova/tabla de disyunción lógica-02.png" alt="" class="img-100">
                    `;
        $("#disyuncion-1").html(text1);
        $("#disyuncion-2").html(text2);
        $(".disyuncion-s").data('disyuncion', 2);
        $(".disyuncion-a").data('disyuncion', 2);
    }else if (disyuncion_num == 2) {
        var text1 = `
                    <div class="bg-btn-a-c">
                        <div class="row px-3">
                            <div class="col-md-3 col-sm-3 d-flex">
                                  <img src="assets/img/img_ova/transparencia.png" alt="" class="img-100 m-auto">
                            </div>
                            <div class="col-md-9 col-sm-9 px-3">
                                  <p class="p_black justificado">Hay un conector, que no es muy utilizado, llamado:</p>
                                  <br>
                                  <p class="p_black justificado">“La disyunción exclusiva o fuerte de “p con q”:    p V q,  y se lee “O  p o q”</p>
                                  <br>
                                  <p class="p_black justificado">La disyunción exclusiva (fuerte) entre dos proposiciones será verdadera (V) cuando solo</p>
                                  <p class="p_black justificado">una sea verdadera; no admite la opción de que ambas sean verdaderas, para ser verdadera.</p>
                            </div>
                        </div>
                    </div>
                    `;
        var text2 = `
                    <div class="row px-3">
                        <div class="col-md-3 col-sm-3 px-3 d-flex">
                              <img src="assets/img/img_ova/prueba.png" alt="" class="img-100 m-auto">
                        </div>
                        <div class="col-md-9 col-sm-9 px-3">
                              <p class="p_black justificado"><b>Por ejemplo:</b> “lo traen vivo o muerto” se podrá tener solo una de las dos.</p>
                              <br>
                              <p class="p_black justificado">En este curso no se profundizará en este conector:</p>
                              <p class="text-center"><img src="assets/img/img_ova/tabla de disyunción lógica-03.png" alt="" class="img-70"></p>
                        </div>
                    </div>
                    `;
        $("#disyuncion-1").html(text1);
        $("#disyuncion-2").html(text2);
        $(".disyuncion-s").data('disyuncion', 1);
        $(".disyuncion-a").data('disyuncion', 1);
    }else if (disyuncion_num == 3) {
        var text = `
                    <div class="col-md-2 col-sm-2 px-3 d-flex">
                          <img src="assets/img/img_ova/matematicas5.png" alt="" class="img-100 mt-auto">
                    </div>
                    <div class="col-md-10 col-sm-10 px-3">
                          <p class="p_black justificado">Al hablar de implicación o también conocida como condicional, se hace referencia a la conjunción “si…entonces…si” como se explica a continuación:</p>
                          <p class="p_black justificado">“La implicación entre p y q”:     p →q , se lee “si p entonces q” o “p implica q”</p>
                          <br>
                          <p class="p_black justificado">Donde la primera proposición recibe el nombre de antecedente o hipótesis y la segunda el nombre de consecuente o tesis.  </p>
                          <p class="p_black justificado">Solo se estudiarán los casos en que la segunda proposición sea consecuencia lógica de la primera, casos como: “si estamos en la universidad entonces la manzana es roja”, no serán casos de estudio, ya que no se observa ninguna consecuencia lógica entre ellos.</p>
                    </div>
                    `;
        $("#disyuncion-3").html(text);
        $(".disyuncion-s").data('disyuncion', 4);
        $(".disyuncion-a").data('disyuncion', 4);
    }else if (disyuncion_num == 4) {
        var text = `
                    <div class="col-md-7 col-sm-7 px-3">
                          <p class="p_black justificado">La implicación entre dos proposiciones será falsa (F) solo cuando el antecedente (hipótesis) sea verdadero y el consecuente (conclusión) falso.</p>
                          <p class="text-center"><img src="assets/img/img_ova/tabla implicación.png" alt="" class="img-70"></p>
                          <p class="p_black justificado">Las proposiciones resultantes de p →q, como son</p>
                          <p class="p_black justificado">q → p, ~ p → ~ q y  ~ q→ ~ p, reciben los nombres de recíproco, contrario y contrarrecíproco de p → q,  respectivamente.</p>
                    </div>
                    <div class="col-md-5 col-sm-5">
                        <div class="row px-3 bg-btn-a-o radius-2">
                            <div class="col-md-4 col-sm-4 d-flex">
                                  <img src="assets/img/img_ova/vision.png" alt="" class="img-100 m-auto">
                            </div>
                            <div class="col-md-8 col-sm-8 p-3">
                                  <p class="p_white justificado"Use la flecha > para poner en práctica los conocimientos aprendidos a través de la siguiente actividad y luego debe continuar con los demás conectores lógicos.</p>
                            </div>
                        </div>
                    </div>
                    `;
        $("#disyuncion-3").html(text);
        $(".disyuncion-s").data('disyuncion', 3);
        $(".disyuncion-a").data('disyuncion', 3);
    }
}

function conector(){
    var conectores_num = $(this).data('conectores');
    $(".conectores").removeClass('bg-btn-a-c');
    $(".conectores").addClass('bg-btn-a-o');
    $(".conectores-"+conectores_num).addClass('bg-btn-a-c');
    $(".conectores-"+conectores_num).removeClass('bg-btn-a-o');
    $(".conectores").removeClass('p_black');
    $(".conectores").addClass('p_white');
    $(".conectores-"+conectores_num).addClass('p_black');
    $(".conectores-"+conectores_num).removeClass('p_white');
    if (conectores_num == 1) {
        var text = `
                    <div class="col-md-6 col-sm-6 px-3">
                          <p class="p_black justificado">Dadas dos proposiciones p ,q se definen, o se pueden formar una conjunción lógica.</p>
                          <br>
                          <p class="p_black justificado">“La conjunción de p con q”:      p ^ q, se lee “p y q”</p>
                          <br>
                          <p class="p_black justificado">La conjunción entre dos proposiciones será verdadera (V) y se debe cumplir solo cuando ambas sean verdaderas:</p>
                    </div>
                    <div class="col-md-6 col-sm-6 px-3">
                          <img src="assets/img/img_ova/tabla de conjunción lógica.png" alt="" class="img-100">
                    </div>
                    `;
        $("#info-conectores").html(text);
    }else if (conectores_num == 2) {
        var text = `
                    <div class="col-md-1 col-sm-1 px-3 d-flex">
                        <div class="triangulo_izq m-auto disyuncion disyuncion-a cursor" data-disyuncion="2"></div>
                    </div>
                    <div class="col-md-5 col-sm-5 px-3" id="disyuncion-1">
                          <p class="p_black justificado">Dadas dos proposiciones p ,q se definen, o se pueden formar una conjunción lógica.</p>
                          <br>
                          <p class="p_black justificado">“La conjunción de p con q”:      p ^ q, se lee “p y q”</p>
                          <br>
                          <p class="p_black justificado">La conjunción entre dos proposiciones será verdadera (V) y se debe cumplir solo cuando ambas sean verdaderas:</p>
                    </div>
                    <div class="col-md-5 col-sm-5 px-3" id="disyuncion-2">
                          <img src="assets/img/img_ova/tabla de disyunción lógica-02.png" alt="" class="img-100">
                    </div>
                    <div class="col-md-1 col-sm-1 px-3 d-flex">
                        <div class="triangulo_der m-auto disyuncion disyuncion-s cursor" data-disyuncion="2"></div>
                    </div>
                    `;
        $("#info-conectores").html(text);
        $(".disyuncion").on('click',disyunciones);
    }else if (conectores_num == 3) {
        var text = `
                    <div class="col-md-6 col-sm-6 px-3">
                          <p class="p_black justificado">“La negación de  p”:           ~ p , se lee “no p”</p>
                          <br>
                          <p class="p_black justificado">La negación de una proposición tiene el valor de verdad opuesto a la proposición dada </p>
                          <p class="p_black justificado">También se acostumbra el signo “¬”, es decir “¬ p” para la negación o con la escritura “no p”.</p>
                    </div>
                    <div class="col-md-6 col-sm-6 px-3">
                          <img src="assets/img/img_ova/tabla de negación.png" alt="" class="img-100">
                    </div>
                    `;
        $("#info-conectores").html(text);
    }else if (conectores_num == 4) {
        var text = `
                     <div class="col-md-1 col-sm-1 px-3 d-flex">
                         <div class="triangulo_izq m-auto disyuncion disyuncion-a cursor" data-disyuncion="4"></div>
                     </div>
                     <div class="col-md-10 col-sm-10">
                         <div class="row" id="disyuncion-3">
                             <div class="col-md-2 col-sm-2 px-3 d-flex">
                                   <img src="assets/img/img_ova/matematicas5.png" alt="" class="img-100 mt-auto">
                             </div>
                             <div class="col-md-10 col-sm-10 px-3">
                                   <p class="p_black justificado">Al hablar de implicación o también conocida como condicional, se hace referencia a la conjunción “si…entonces…si” como se explica a continuación:</p>
                                   <p class="p_black justificado">“La implicación entre p y q”:     p →q , se lee “si p entonces q” o “p implica q”</p>
                                   <br>
                                   <p class="p_black justificado">Donde la primera proposición recibe el nombre de antecedente o hipótesis y la segunda el nombre de consecuente o tesis.  </p>
                                   <p class="p_black justificado">Solo se estudiarán los casos en que la segunda proposición sea consecuencia lógica de la primera, casos como: “si estamos en la universidad entonces la manzana es roja”, no serán casos de estudio, ya que no se observa ninguna consecuencia lógica entre ellos.</p>
                             </div>
                         </div>
                     </div>
                     <div class="col-md-1 col-sm-1 px-3 d-flex">
                         <div class="triangulo_der m-auto disyuncion disyuncion-s cursor" data-disyuncion="4"></div>
                     </div>
                    `;
        $("#info-conectores").html(text);
        $(".disyuncion").on('click',disyunciones);
    }else if (conectores_num == 5) {
        var text = `
                     <div class="col-md-4 col-sm-4 px-3">
                         <div class="card-azul-o">
                             <p class="p_white justificado">Recuerde que en la sección anterior se conceptualizó sobre los conectores lógicos: </p>
                             <p class="p_white justificado">conjunción, disyunción, negación e implicación. Ahora debe continuar con los demás.</p>
                         </div>
                     </div>
                     <div class="col-md-4 col-sm-4 px-3">
                         <p class="p_black justificado">Proposiciones equivalentes son aquellas proposiciones compuestas que tengan los mismos valores de verdad sin importar el valor de verdad que tomen las proposiciones simples que intervengan, en otras palabras, que “siempre” tengan los mismos valores de verdad.</p>
                     </div>
                     <div class="col-md-4 col-sm-4 px-3">
                         <img src="assets/img/img_ova/Geometria euclidiana-02.png" alt="" class="img-100">
                     </div>
                    `;
        $("#info-conectores-2").html(text);
    }else if (conectores_num == 6) {
        var text = `
                     <div class="col-md-6 col-sm-6 px-3">
                             <p class="p_black justificado">Al hablar de doble implicación o bicondicional, su función es en doble sentido de la siguiente manera:</p>
                             <p class="p_black text-center my-4 bg-btn-a-c p-2 radius-2">“El bicondicional entre  𝑝 y 𝑞”:   𝑝 ↔ 𝑞, se lee “𝑝 si y solo si 𝑞”</p>
                             <p class="p_black justificado bg-btn-a-c p-2 radius-2">El bicondicional entre dos proposiciones será verdadero (𝑽) cuando ambas proposiciones tengan el mismo valor de verdad.</p>
                     </div>
                     <div class="col-md-6 col-sm-6 px-3">
                        <p class="text-center"><img src="assets/img/img_ova/tabla bicondiconal.png" alt="" class="img-65"></p>
                     </div>
                    `;
        $("#info-conectores-2").html(text);
    }
}

function opciones(){
    var opciones_num = $(this).data('opcion');
    $(".opcion-circular").removeClass('opcion-circular-select');
    $(".opcion-circular"+opciones_num).addClass('opcion-circular-select');
    if (opciones_num == 1) {
        var text = `
                        <p class="p_black justificado"><b>Ejemplo:</b></p>
                        <p class="p_black justificado">Las dos proposiciones ( p ∧ q ) →r,  p ∧ ( q → r )  no tienen el mismo valor de verdad o “significado”; no son equivalentes, aun teniendo los mismos conectores.  Se halla la tabla de valores de verdad para compararlos.</p>
                        <p class="p_black text-right"><button class="btn-descarga-pdf btn p-2"  data-toggle="modal" data-target="#modal-posiciones">Ver tabla</button></p>
                   `;
        $("#info-posiciones").html(text);
    }else if (opciones_num == 2) {
        var text = `
                        <p class="p_black justificado"><b>Ejemplo:</b></p>
                        <p class="p_black justificado">Tampoco las tres proposiciones siguientes son equivalentes (ningún par de ellas)</p>
                        <br>
                        <p class="p_black justificado">[ ( 𝑝 → 𝑞 ) ∧ ( 𝑞 → 𝑝 ) ] ,  [ [𝑝 →( 𝑞 ∧ 𝑞 )] → 𝑝 ] ,  𝑝 → [ 𝑞 ∧ ( 𝑞 → 𝑝 ) ]</p>
                   `;
        $("#info-posiciones").html(text);
    }else if (opciones_num == 3) {
        var text = `
                        <p class="p_black justificado">Para indicar la equivalencia entre dos proposiciones se acostumbra a usar un bicondicional “resaltado” o especial.  “⇔” </p>
                        <p class="p_black justificado"><b>Ejemplo:</b></p>
                        <p class="p_black text-center">(𝑝 →𝑞)   ⇔  (~ 𝑞 →~ 𝑝)</p>
                        <p class="p_black text-center">(𝑝 ↔ 𝑞)   ⇔  {(𝑝 → 𝑞) ∧ (𝑞 → 𝑝)}</p>
                        <p class="p_black text-center">(𝑝 → ~𝑞)   ⇔  ~ (𝑝∧𝑞)</p>
                        <p class="p_black justificado">Los valores de verdad de las equivalencias formadas con proposiciones “equivalentes” serán en todos los casos (𝑉).</p>
                        <br>
                        <p class="p_black justificado">Para los valores de verdad de proposiciones compuestas se halla primero los de las proposiciones agrupadas más internamente.</p>
                   `;
        $("#info-posiciones").html(text);
    }
}

function card_amarillo1(){
    $(".card-a-1").removeClass('card-amarillo-o');
    $(".card-a-1").addClass('bg-btn-a-o');
}
function card_amarillo2(){
    $(".card-a-2").removeClass('card-amarillo-o');
    $(".card-a-2").addClass('bg-btn-a-o');
}
function card_amarillo3(){
    $(".card-a-3").removeClass('card-amarillo-o');
    $(".card-a-3").addClass('bg-btn-a-o');
}

function card_amarillo_salir(){
    $(".card-a").removeClass('bg-btn-a-o');
    $(".card-a").addClass('card-amarillo-o');
}

function card_amarillo_info(){
    var ley_num = $(this).data('ley');
    if (ley_num == 1) {
        var text = `
                   <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <p class="p_white radius-2 bg-btn-a-o w-fit m-auto pr-4"><img src="assets/img/img_ova/transparencia.png" alt="" class="w-h-65px-i">    Tabla de leyes proposicional</p>
                        </div>
                        <div class="col-md-6 col-sm-6 d-flex">
                            <div class="m-0 p-0 x-modal my-auto mover-derecha cursor" id="cerrar-info">
                                <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                            </div>
                            <div class="bg-btn-a-o my-auto w-100 h-6px">
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 d-flex">
                            <p class="text-center"><img src="assets/img/img_ova/tabla de leyes proposicional.png" alt="" class="img-65"></p>
                        </div>
                   </div>
                   `;
        $("#info-ley").html(text);
    }if (ley_num == 2) {
        var text = `
                   <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <p class="p_white radius-2 bg-btn-a-o w-fit m-auto pr-4"><img src="assets/img/img_ova/transparencia.png" alt="" class="w-h-65px-i">    Tabla de leyes proposicional</p>
                        </div>
                        <div class="col-md-6 col-sm-6 d-flex">
                            <div class="m-0 p-0 x-modal my-auto mover-derecha cursor" id="cerrar-info">
                                <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                            </div>
                            <div class="bg-btn-a-o my-auto w-100 h-6px">
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 offset-md-1 d-flex">
                            <p class="text-center"><img src="assets/img/img_ova/sin-parar.png" alt="" class="img-50"></p>
                        </div>
                        <div class="col-md-6 col-sm-6 d-flex">
                            <div class="bg-btn-a-o radius-3 p-4 m-auto img-100">
                                <p class="p_white justificado">Para ver el video explicativo de leyes del álgebra proposicional, visite la carpeta https://drive.google.com/file/d/ 1iTLEmlZEozwEAQcUewMFL9RmrJKxyojQ/view?usp=sharing de la plataforma y de clic en <b>leyes de álgebra proposicional.</b></p>
                            </div>
                        </div>
                   </div>
                   `;
        $("#info-ley").html(text);
    }if (ley_num == 3) {
        var text = `
                   <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <p class="p_white radius-2 bg-btn-a-o w-fit m-auto pr-4"><img src="assets/img/img_ova/prueba.png" alt="" class="w-h-65px-i">    Ejemplos de las leyes del álgebra proposicional</p>
                        </div>
                        <div class="col-md-6 col-sm-6 d-flex">
                            <div class="m-0 p-0 x-modal my-auto mover-derecha cursor" id="cerrar-info">
                                <h2 class="text-white text-center x-modal-text"><b>X</b></h2>
                            </div>
                            <div class="bg-btn-a-o my-auto w-100 h-6px">
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <p class="p_black text-center">En una proposición compuesta se puede sustituir una proposición por otra que sea equivalente a ella, donde se obtiene una composición equivalente a la inicial.</p>
                        </div>
                        <div class="col-md-2 col-sm-2 px-3 d-flex">
                              <p class="p_black justificado mt-auto">Use las flechas <> para navegar por la información.</p>
                        </div>
                        <div class="col-md-1 col-sm-1 px-3 d-flex">
                            <div class="triangulo_izq m-auto tabla tabla-a cursor" data-tabla="3"></div>
                        </div>
                        <div class="col-md-8 col-sm-8 px-3" id="tabla-img">
                              <p class="text-center"><img src="assets/img/img_ova/ejemplo ley1.png" alt="" class="img-50"></p>
                        </div>
                        <div class="col-md-1 col-sm-1 px-3 d-flex">
                            <div class="triangulo_der m-auto tabla tabla-s cursor" data-tabla="2"></div>
                        </div>
                   </div>
                   `;
        $("#info-ley").html(text);
        $(".tabla").on('click',tablas);
    }
    $("#cerrar-info").on('click', function (){
        var info = `
                    <div class="row px-3 d-flex justify-content-center">
                         <div class="col-md-12 col-sm-12">
                            <p class="p_black justificado"><b>Leyes del álgebra proposicional.</b> Para p, q y r proposiciones, se tienen las siguientes leyes o axiomas; las cuales se pueden probar que son tautologías.  </p>
                            <br>
                            <p class="p_black justificado">Recuerde que la equivalencia significa que los valores de verdad de ambas proposiciones son iguales</p>
                            <br>
                            <p class="p_black justificado"><i>Se usarán para simplificar proposiciones compuestas.</i></p>
                         </div>
                         <div class="col-md-3 col-sm-3 mx-2 mb-3 card-amarillo-o radius-3 card-a card-a-1" data-ley="1">
                              <div class="p-3">
                                  <p class="text-center"><img src="assets/img/img_ova/transparencia.png" class="img-80"></p>
                                  <p class="p_black text-center"><b>Tabla:</b></p>
                                  <p class="p_black text-center"><b>Leyes de algebra proposicional</b></p>
                              </div>
                         </div>
                         <div class="col-md-3 col-sm-3 mx-2 mb-3 card-amarillo-o radius-3 card-a card-a-2" data-ley="2">
                              <div class="p-3">
                                  <p class="text-center"><img src="assets/img/img_ova/diapositivas.png" class="img-80"></p>
                                  <p class="p_black text-center"><b>Video</b></p>
                                  <p class="p_black text-center"><b>explicativo</b></p>
                              </div>
                         </div>
                         <div class="col-md-3 col-sm-3 mx-2 mb-3 card-amarillo-o radius-3 card-a card-a-3" data-ley="3">
                              <div class="p-3">
                                  <p class="text-center"><img src="assets/img/img_ova/prueba.png" class="img-80"></p>
                                  <p class="p_black text-center"><b>Ejemplos</b></p>
                              </div>
                         </div>
                         <div class="col-md-12 col-sm-12">
                              <p class="p_black justificado">Dar clic en las tarjetas para ir a la información</p>
                         </div>
                    </div>
                   `;
        $("#info-ley").html(info);
        $(".card-a-1").on('mouseover', card_amarillo1);
        $(".card-a-2").on('mouseover', card_amarillo2);
        $(".card-a-3").on('mouseover', card_amarillo3);
        $(".card-a-1").on('mouseleave', card_amarillo_salir);
        $(".card-a-2").on('mouseleave', card_amarillo_salir);
        $(".card-a-3").on('mouseleave', card_amarillo_salir);
        $(".card-a").on('click', card_amarillo_info);
    });
}

function tablas(){
    var tabla_num = $(this).data('tabla');
    if (tabla_num == 1) {
        var text = `
                    <p class="text-center"><img src="assets/img/img_ova/ejemplo ley1.png" alt="" class="img-50"></p>
                    `;
        $("#tabla-img").html(text);
        $(".tabla-s").data('tabla', 2);
        $(".tabla-a").data('tabla', 3);
    }else if (tabla_num == 2) {
        var text = `
                    <p class="text-center"><img src="assets/img/img_ova/ejemplo ley2.png" alt="" class="img-50"></p>
                    `;
        $("#tabla-img").html(text);
        $(".tabla-s").data('tabla', 3);
        $(".tabla-a").data('tabla', 1);
    }else if (tabla_num == 3) {
        var text = `
                    <p class="text-center"><img src="assets/img/img_ova/ejemplo ley3.png" alt="" class="img-50"></p>
                    `;
        $("#tabla-img").html(text);
        $(".tabla-s").data('tabla', 1);
        $(".tabla-a").data('tabla', 2);
    }
}

function abrir_card(){
    $(".card-ampliar-2").removeClass('d-flex');
    $(".card-ampliar-2").addClass('d-none');
    $(".card-ampliar-1").removeClass('col-md-2 col-sm-2');
    $(".card-ampliar-1").addClass('col-md-12 col-sm-12');
    $(".card-oculta").removeClass('d-none');
}

function argumentos(){
    var argumento_num = $(this).data('argumento');
    if (argumento_num == 1) {
        $(".circle-argumento-1").removeClass('bg-circle-am');
        $(".circle-argumento-1").addClass('bg-circle-a');
        $(".circle-argumento-2").removeClass('bg-circle-a');
        $(".circle-argumento-2").addClass('bg-circle-am');
        var text1 =`
                    <p class="p_black text-center">Probar que el argumento: </p>
                    <p class="p_black text-center"> p → q ,~ q / ~ p  es un argumento válido.</p>
                    <p class="p_black text-center">         p → q</p>
                    <p class="p_black text-center">         ~ q   </p>
                    <p class="p_black text-center">                 ~ p</p>
                   `;
        var text2 =`
                   <p class="p_black justificado pb-3"><b>Solución:</b>   se muestran los valores de verdad de las premisas y de la conclusión, para todas las asignaciones posibles de las variables proposicionales que intervienen:</p>
                   <div class="row">
                       <div class="col-md-7 col-sm-7">
                           <img src="assets/img/img_ova/ejemplo argumentos 1.png" alt="" class="img-80">
                       </div>
                       <div class="col-md-5 col-sm-5">
                       <p class="p_black justificado">Se puede observar que efectivamente es válido; la única ocasión en que las premisas son V, la conclusión también lo es.</p>
                       </div>
                   </div>
                   `;
        $("#argument-info-1").html(text1);
        $("#argument-info-2").html(text2);
    }else if (argumento_num == 2) {
        $(".circle-argumento-2").removeClass('bg-circle-am');
        $(".circle-argumento-2").addClass('bg-circle-a');
        $(".circle-argumento-1").removeClass('bg-circle-a');
        $(".circle-argumento-1").addClass('bg-circle-am');
        var text1 =`
                    <p class="p_black justificado">Analizar la validez o no del siguiente argumento</p>
                    <p class="p_black justificado">p→ ( q ∨ r) ,q  /  r</p>
                    <p class="p_black text-center">(1) p→ ( q ∨ r)</p>
                    <p class="p_black text-center">(2) q</p>
                    <p class="border-bottom-azul-c w-120px mx-auto"></p>
                    <p class="p_black text-center">(3) r</p>
                   `;
        var text2 =`
                   <div class="row">
                       <div class="col-md-5 col-sm-5">
                            <p class="p_black justificado pb-3"><b>Solución:</b>   Se observan los valores de verdad de las premisas y de la conclusión para todas las asignaciones posibles de las variables proposicionales que intervienen:</p>
                       </div>
                       <div class="col-md-7 col-sm-7">
                           <img src="assets/img/img_ova/ejemplo argumentos 1.png" alt="" class="img-80">
                       </div>
                   </div>
                   `;
        $("#argument-info-1").html(text1);
        $("#argument-info-2").html(text2);
    }
}

function formulas(num){
    if (num == 1) {
        var info = '<p class="text-center pt-3"><img src="assets/img/img_ova/Formula solucion 1.png" alt="" class="img-90"></p>';
        $("#info-formula").html(info);
    }else if (num == 2) {
        var info = '<p class="text-center pt-3"><img src="assets/img/img_ova/Formula solucion 2.png" alt="" class="img-90"></p>';
        $("#info-formula").html(info);
    }
}

function rodar(){
    var giro_num = $(this).data('giro');
    if (giro_num == 1) {
        var text = `
                    <p class="p_black justificado">Se plantea un ejemplo donde se considera el siguiente argumento:</p>
                    <br>
                    <p class="p_black justificado">(1) Si hay fuego entonces hay presencia de oxígeno</p>
                    <p class="p_black justificado">(2)  Hay fuego                                                            .</p>
                    <p class="p_black justificado">(3) ¿ _____________________?   ¿Cuál será la conclusión? </p>
                    <p class="p_black text-right">                       RTA.    Hay presencia de oxígeno</p>
                    <p class="p_white p-4 mt-2 bg-btn-a-o">Rta/ Hay presencia de Oxigeno</p>
                   `;
        $("#girar-info").html(text);
        $(".giro-a").data('giro', 2);
        $(".giro-s").data('giro', 2);
    }else if (giro_num == 2) {
        var text = `
                    <p class="p_black justificado">En términos de variables proposicionales</p>
                    <p class="p_black justificado"> tenemos:  𝑝 →𝑞  ,  𝑝  / 𝑞</p>
                    <br>
                    <p class="p_black justificado">(1) (𝑝 →𝑞 )          premisa</p>
                    <p class="p_black justificado">(2)  𝑝          .        premisa</p>
                    <p class="p_black justificado">(3)  ¿______?        Conclusión</p>
                    <p class="p_white p-4 mt-2 bg-btn-a-o">Rta/ q</p>
                   `;
        $("#girar-info").html(text);
        $(".giro-a").data('giro', 1);
        $(".giro-s").data('giro', 1);
    }
}

function demostraciones(){
    var demostracion_num = $(this).data('demostracion');
    $(".demostracion").removeClass('bg-circle-a');
    $(".demostracion").addClass('bg-circle-am');
    $(".demostracion-"+demostracion_num).removeClass('bg-circle-am');
    $(".demostracion-"+demostracion_num).addClass('bg-circle-a');
    if (demostracion_num == 1) {
        var text = `
                   <div class="col-md-2 col-sm-2">
                       <p class="text-center"><img src="assets/img/img_ova/prueba.png" alt="" class="img-100"></p>
                   </div>
                   <div class="col-md-10 col-sm-10">
                       <p class="p_black justificado"><b>Ejemplo:</b> seguir paso a paso la demostración de Q</p>
                       <br>
                       <p class="p_black">(1)  A       premisa dada</p>
                       <p class="p_black">(2)  A → B   premisa dada</p>
                       <p class="p_black">(3)  B → C   premisa dada</p>
                       <p class="p_black">(4)  C → Q   premisa dada</p>
                       <p class="p_black">(   )    . . . . . </p>
                       <p class="p_black border-bottom-azul-c"></p>
                       <p class="p_black">(   )    Q       Conclusión.</p>
                   </div>
                   `;
        $("#demostracion-info").html(text);
    }else if (demostracion_num == 2) {
        var text = `
                   <div class="col-md-12 col-sm-12">
                       <p class="p_black justificado"><b>Ley del Modus Tollendo Tollens</b></p>
                   </div>
                   <div class="col-md-1 col-sm-1">
                        <div class="triangulo_izq m-auto validez validez-a cursor" data-validez="3"></div>
                   </div>
                   <div class="col-md-2 col-sm-2" id="info-validez-img">
                       <p class="text-center"><img src="assets/img/img_ova/prueba.png" alt="" class="img-100"></p>
                   </div>
                   <div class="col-md-8 col-sm-8" id="info-validez">
                       <p class="p_black justificado">Se muestra un ejemplo; donde se considera el siguiente argumento:</p>
                       <br>
                       <p class="p_black text-center">1) Si hay fuego entonces hay presencia de oxígeno</p>
                       <p class="p_black text-center">2) No hay presencia de oxígeno                                   .    </p>
                       <p class="p_black text-center">  3) ¿_________________ ?   ¿Cuál es la conclusión?</p>
                       <p class="p_white p-4 mt-2 bg-btn-a-o text-center">Rta/ Hay presencia de Oxigeno</p>
                   </div>
                   <div class="col-md-1 col-sm-1">
                        <div class="triangulo_der m-auto validez validez-s cursor" data-validez="2"></div>
                   </div>
                   `;
        $("#demostracion-info").html(text);
        $(".validez").on('click',validar);
    }else if (demostracion_num == 3) {
        var text = `
                   <div class="col-md-12 col-sm-12 d-flex" data-toggle="modal" data-target="#modal-actividad">
                       <div class="col-md-8 col-sm-8 row m-auto">
                          <img src="assets/img/img_ova/actividad_general.png" class="img-activi">
                          <div class="content-text-img-activi">
                            <b class="text-img-actividad">ACTIVIDAD # 6</b>
                          </div>
                       </div>
                       <p class="p_black text-right mt-auto"><b>Clic para realizar la actividad </b></p>
                   </div>
                   `;
        $("#demostracion-info").html(text);
        $(".validez").on('click',validar);
    }else if (demostracion_num == 4) {
        var text = `
                   <div class="col-md-1 col-sm-1">
                        <div class="triangulo_izq m-auto validez validez-a cursor" data-validez="6"></div>
                   </div>
                   <div class="col-md-10 col-sm-10">
                       <div class="row" id="info-validez-2">
                           <div class="col-md-12 col-sm-12">
                               <p class="p_black justificado">En algunas ocasiones no basta con una sola utilización del M.T.T. o del M.P.P. una conclusión de un argumento podrá entrar a hacer parte de las premisas como una nueva:</p>
                               <br>
                               <p class="p_black text-center">          (A → B), (~ A → C), ~ B / C; se observa paso a paso:    </p>
                               <br>
                               <p class="p_black text-center">          (1)  A →  B premisa dada</p>
                               <p class="p_black text-center">          (2) ~ A → C premisa dada</p>
                               <p class="p_black text-center">          (3) ~ B     premisa dada</p>
                               <p class="p_black text-center">          (4) ~ A         Modus T.T.  (1) y (3)</p>
                               <p class="p_black justificado">Conclusión    (5)   C     Modus P.P.  (2) y (4)</p>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-1 col-sm-1">
                        <div class="triangulo_der m-auto validez validez-s cursor" data-validez="5"></div>
                   </div>
                   `;
        $("#demostracion-info").html(text);
        $(".validez").on('click',validar);
    }
}

function validar(){
    var validez_num = $(this).data('validez');
    if (validez_num == 1) {
        var info = `
                   <p class="p_black justificado">Se muestra un ejemplo; donde se considera el siguiente argumento:</p>
                   <br>
                   <p class="p_black text-center">1) Si hay fuego entonces hay presencia de oxígeno</p>
                   <p class="p_black text-center">2) No hay presencia de oxígeno                                   .    </p>
                   <p class="p_black text-center">  3) ¿_________________ ?   ¿Cuál es la conclusión?</p>
                   <p class="p_white p-4 mt-2 bg-btn-a-o text-center">Rta/ Hay presencia de Oxigeno</p>
                   `;
        var img = `
                   <p class="text-center"><img src="assets/img/img_ova/prueba.png" alt="" class="img-100"></p>
                   `;
        $("#info-validez").html(info);
        $("#info-validez-img").html(img);
        $(".validez-s").data('validez', 2);
        $(".validez-a").data('validez', 3);
    }else if (validez_num == 2) {
        var info = `
                   <p class="p_black justificado">En términos de variables proposicionales tenemos:   𝑝 → 𝑞 ,  ~ 𝑞  / ~ 𝑝</p>
                   <br>
                   <p class="p_black justificado">(𝑝 → 𝑞)   premisa dada</p>
                   <p class="p_black justificado border-bottom-azul-c w-fit"> ~ 𝑞         .    premisa dada</p>
                   <p class="p_black justificado"> ~ 𝑝      conclusión.</p>
                   `;
        var img = `
                   <p class="text-center"><img src="assets/img/img_ova/prueba.png" alt="" class="img-100"></p>
                   `;
        $("#info-validez").html(info);
        $("#info-validez-img").html(img);
        $(".validez-s").data('validez', 3);
        $(".validez-a").data('validez', 1);
    }else if (validez_num == 3) {
        var info = `
                   <p class="p_black justificado">La Ley Modus Tollendo Tollens establece:</p>
                   <br>
                   <p class="p_black justificado">“Siempre que se tenga un condicional y se dé la negación del consecuente, entonces se dará la negación del antecedente”</p>
                   `;
        var img = `
                   <p class="text-center"><img src="assets/img/img_ova/vision.png" alt="" class="img-100"></p>
                   `;
        $("#info-validez").html(info);
        $("#info-validez-img").html(img);
        $(".validez-s").data('validez', 1);
        $(".validez-a").data('validez', 2);
    }else if (validez_num == 4) {
        var info = `
                       <div class="col-md-12 col-sm-12">
                           <p class="p_black justificado">En algunas ocasiones no basta con una sola utilización del M.T.T. o del M.P.P. una conclusión de un argumento podrá entrar a hacer parte de las premisas como una nueva:</p>
                           <br>
                           <p class="p_black text-center">          (A → B), (~ A → C), ~ B / C; se observa paso a paso:    </p>
                           <br>
                           <p class="p_black text-center">          (1)  A →  B premisa dada</p>
                           <p class="p_black text-center">          (2) ~ A → C premisa dada</p>
                           <p class="p_black text-center">          (3) ~ B     premisa dada</p>
                           <p class="p_black text-center">          (4) ~ A         Modus T.T.  (1) y (3)</p>
                           <p class="p_black justificado">Conclusión    (5)   C     Modus P.P.  (2) y (4)</p>
                       </div>
                   `;
        $("#info-validez-2").html(info);
        $(".validez-s").data('validez', 5);
        $(".validez-a").data('validez', 6);
    }else if (validez_num == 5) {
        var info = `
                       <div class="col-md-12 col-sm-12">
                           <p class="p_black justificado"><b>Ley del Modus Tollendo Ponens</b></p>
                           <br>
                       </div>
                       <div class="col-md-12 col-sm-12">
                           <p class="p_black text-center">Se muestra un ejemplo; considerando el siguiente argumento:</p>
                           <p class="p_black text-center">“Hay huevos o hay harina” no hay huevos” / “(......)” </p>
                           <br>
                           <p class="p_black text-center">¿Cuál será la conclusión?</p>
                           <br>
                           <p class="p_black text-center">En términos de variables proposicionales:</p>
                           <p class="p_black text-center">𝑝 ∨ 𝑞 ,  ~ 𝑞  / 𝑝,     o           𝑝 ∨ 𝑞 ,  ~ 𝑝  / 𝑞</p>
                       </div>
                   `;
        $("#info-validez-2").html(info);
        $(".validez-s").data('validez', 6);
        $(".validez-a").data('validez', 4);
    }else if (validez_num == 6) {
        var info = `
                       <div class="col-md-2 col-sm-2">
                       <p class="text-center"><img src="assets/img/img_ova/vision.png" alt="" class="img-100"></p>
                       </div>
                       <div class="col-md-10 col-sm-10">
                           <p class="p_black justificado">La Ley Modus Tollendo Ponens establece:</p>
                           <br>
                           <p class="p_black justificado">“Siempre que se tenga una disyunción y se dé la negación de una de las proposiciones, se dará la afirmación de la otra proposición”</p>
                       </div>
                   `;
        $("#info-validez-2").html(info);
        $(".validez-s").data('validez', 4);
        $(".validez-a").data('validez', 5);
    }
}

function aparecer_tarjeta(){
    var aparecer_num = $(this).data('aparecer');
    if (aparecer_num == 1) {
        $(".aparecer-card-1").removeClass('d-none');
        $(".aparecer-card").data('aparecer' , 2);
        $(".esconder-card").data('esconder' , 2);
    }else if (aparecer_num == 2) {
        $(".aparecer-card-2").removeClass('d-none');
        $(".aparecer-card").data('aparecer' , 3);
        $(".esconder-card").data('esconder' , 3);
    }else if (aparecer_num == 3) {
        $(".aparecer-card-3").removeClass('d-none');
        $(".aparecer-card").data('aparecer' , 4);
        $(".esconder-card").data('esconder' , 4);
    }else if (aparecer_num == 4) {
        $(".aparecer-card-4").removeClass('d-none');
    }
}

function esconder_tarjeta(){
    var esconder_num = $(this).data('esconder');
    if (esconder_num == 1) {
        $(".aparecer-card-1").addClass('d-none');
    }else if (esconder_num == 2) {
        $(".aparecer-card-2").addClass('d-none');
        $(".aparecer-card").data('aparecer' , 1);
        $(".esconder-card").data('esconder' , 1);
    }else if (esconder_num == 3) {
        $(".aparecer-card-3").addClass('d-none');
        $(".aparecer-card").data('aparecer' , 2);
        $(".esconder-card").data('esconder' , 2);
    }else if (esconder_num == 4) {
        $(".aparecer-card-4").addClass('d-none');
        $(".aparecer-card").data('aparecer' , 3);
        $(".esconder-card").data('esconder' , 3);
    }
}

