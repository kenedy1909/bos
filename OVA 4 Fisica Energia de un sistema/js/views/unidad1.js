$(document).ready(function () {
    $(".zoomContainer").remove();
    $('#smartwizard').smartWizard({
        loader: "show",
        theme: 'arrows',
        toolbarSettings: {
            showNextButton: false, // show/hide a Next button
            showPreviousButton: false, // show/hide a Previous button
            toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing: '' // Transition animation easing. Not supported without a jQuery easing plugin
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
    // slide_predeterminado();

    knob = document.querySelector('.custom-scrollbar__knob_U2_1');
    bar = document.querySelector('.custom-scrollbar__bar_U2_1');
    container = document.querySelector('.custom-scrollbar__inner_U2_1');
    // scroll();
    slide_link(tema);
});




$("#btnEvent1").on("click", function () {
    $("#verEventUnd1-3").html('<p class="justificado p_black">Una definición alterna para trabajo sería: “El trabajo, cantidad física equivalente al producto punto entre el vector de la fuerza resultante sobre una partícula y el de su desplazamiento”. Se nota que si esta fuerza es constante entonces el trabajo calculado durante el tiempo que se aplique la fuerza será una cantidad escalar y además se puede interpretar como el producto del desplazamiento y la componente de la fuerza en la dirección del movimiento. A continuación, se muestra la ecuación del trabajo:</p>');
});

$("#btnEvent2").on("click", function () {
    $("#verEventUnd1-3").html('<p class="justificado p_black">La unidad de trabajo en el SI es el joule (que se abrevia J, nombrado así en honor del físico inglés del siglo XIX James Prescott Joule) y equivale a un Newton por metro. En el sistema británico, la unidad de fuerza es la libra (lb), la unidad de distancia es el pie (ft), y la unidad de trabajo es el pie-libra (ft·lb).</p>');
});

$("#btnEvent3").on("click", function () {
    $("#verEventUnd1-3").html('<p class="justificado p_black">Es importante entender que el trabajo también puede ser negativo o incluso cero. En alguna circunstancia cuando se intenta subir una nevera por una rampa o escalera y aunque se jale con fuerza la nevera se mueve hacia abajo. Esta es la diferencia esencial entre la definición de trabajo en física y la definición “cotidiana” del mismo.</p>');
});


var elementoPadre1 = document.querySelector(".inputDiv.i1");
var elementoPadre2 = document.querySelector(".inputDiv.i2");
var inputsRy = [];

function Input() {
    //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
    this.att = {};
    this.att.type = "range";
    this.att.value = 0;
    this.att.min = 0;
    this.att.max = 4;
    this.att.autocomplete = "off";
    this.att.step = "1";
    this.input;
    this.output;

    this.crear = function (elementoPadre) {
        // crea un nuevo elemento input
        this.input = document.createElement("input");
        //para cada propiedad del objeto att establece un nuevo atributo del elemento input
        for (var name in this.att) {
            if (this.att.hasOwnProperty(name)) {
                this.input.setAttribute(name, this.att[name]);
            }
        }
        // crea un nuevo elemento div
        this.output = document.createElement("div");
        // establece el valor del atributo class del nuevo div
        this.output.setAttribute("class", "output");
        // y el contenido (innerHTML) de este
        this.output.innerHTML = this.att.value;

        // inserta los dos elementos creados al final  del elemento Padre 
        elementoPadre.appendChild(this.input);
        elementoPadre.appendChild(this.output);
    }

    this.actualizar = function () {
        eventUnidad1_3(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
}

// setup
var i = new Input();
i.crear(elementoPadre1);
inputsRy.push(i);

var i2 = new Input();
i2.att.value = 70;
i2.att.min = 20;
i2.att.max = 120;
i2.crear(elementoPadre2);
inputsRy.push(i2);

for (var n = 0; n < inputsRy.length; n++) {
    (function (n) {
        inputsRy[n].input.addEventListener("input", function () {
            inputsRy[n].actualizar();
        }, false)
    }(n));
}

// Inicio evento/efecto unidad1-3 => ruta destino: base/unidades/unidad1.html
function eventUnidad1_3(num) {
    $(".flechaVertical_1, .flechaVertical_2, .flechaVertical_3, .flechaVertical_4").html('<img class="img-100" src="assets/img/img_ova/flecha_azul.png" alt="">');
    switch (parseInt(num)) {
        case 0:
            $("#verEventUnd1-3").html('');
            break;
        case 1:
            $(".flechaVertical_1").html('<img class="img-100" src="assets/img/img_ova/flecha_amarrilla.png" alt="">')
            $("#verEventUnd1-3").html('<p class="justificado p_black">Una definición alterna para trabajo sería: “El trabajo, cantidad física equivalente al producto punto entre el vector de la fuerza resultante sobre una partícula y el de su desplazamiento”. Se nota que si esta fuerza es constante entonces el trabajo calculado durante el tiempo que se aplique la fuerza será una cantidad escalar y además se puede interpretar como el producto del desplazamiento y la componente de la fuerza en la dirección del movimiento. A continuación, se muestra la ecuación del trabajo:</p><img src="assets/img/img_ova/texto.png" alt="formula" style="width: 200px;">');
            break;
        case 2:
            $(".flechaVertical_2").html('<img class="img-100" src="assets/img/img_ova/flecha_amarrilla.png" alt="">')
            $("#verEventUnd1-3").html('<p class="justificado p_black">La unidad de trabajo en el SI es el joule (que se abrevia J, nombrado así en honor del físico inglés del siglo XIX James Prescott Joule) y equivale a un Newton por metro. En el sistema británico, la unidad de fuerza es la libra (lb), la unidad de distancia es el pie (ft), y la unidad de trabajo es el pie-libra (ft·lb).</p>');
            break;
        case 3:
            $(".flechaVertical_3").html('<img class="img-100" src="assets/img/img_ova/flecha_amarrilla.png" alt="">')
            $("#verEventUnd1-3").html('<p class="justificado p_black">Es importante entender que el trabajo también puede ser negativo o incluso cero. En alguna circunstancia cuando se intenta subir una nevera por una rampa o escalera y aunque se jale con fuerza la nevera se mueve hacia abajo. Esta es la diferencia esencial entre la definición de trabajo en física y la definición “cotidiana” del mismo.</p>');
            break;
        case 4:
            $(".flechaVertical_4").html('<img class="img-100" src="assets/img/img_ova/flecha_amarrilla.png" alt="">')
            $("#verEventUnd1-3").html('<p class="justificado p_black">Ahora se plantean las opciones para un trabajo positivo, negativo y cero:</p><ul><li class="justificado p_black">Si la fuerza tiene una componente en la misma dirección que el desplazamiento, es decir, ϕ entre 0° y 90°, entonces el cos(ϕ) y el trabajo (W) son positivos.</li><li class="justificado p_black">Si la fuerza tiene una componente opuesta al desplazamiento, es decir, ϕ entre 90° y 180°, entonces el cos(ϕ) y el trabajo (W) son negativos.</li><li class="justificado p_black">Si la fuerza es perpendicular al desplazamiento, el trabajo (W) realizado por la fuerza es cero.</li></ul>');
            break;
        default:
            break;
    }
}

// Fin evento/efecto unidad1-3


// Inicio evento/efecto unidad1-5 => ruta destino: base/unidades/unidad1.html
// boton # 1
$("#btn1Und1_5").mouseenter(function () {
    $("#caja-msj").html('<p class="caja-texto-msj position-absolute">Siempre se habla de trabajo realizado sobre un cuerpo específico por una fuerza determinada. Nunca se debe olvidar especificar exactamente qué fuerza realiza el trabajo en cuestión. Si se levanta un libro, se ejerce una fuerza hacia arriba sobre el libro y el desplazamiento de este es hacia arriba, así que el trabajo realizado por la fuerza de levantamiento sobre el libro es positivo.</p>');
    $("#caja-msj").show();
});

$("#btn1Und1_5").mouseleave(function () {
    $("#caja-msj").hide();
});

// boton # 2
$("#btn2Und1_5").mouseenter(function () {
    $("#caja-msj").html('<p class="caja-texto-msj position-absolute" style="top:43%">En cambio, el trabajo realizado por la fuerza gravitacional (peso) sobre el libro que se levanta es negativo, porque la fuerza es opuesta al desplazamiento hacia arriba.</p>');
    $("#caja-msj").show();
});

$("#btn2Und1_5").mouseleave(function () {
    $("#caja-msj").hide();
});

// boton # 3
$("#btn3Und1_5").mouseenter(function () {
    $("#caja-msj").html('<p class="caja-texto-msj position-absolute" style="top:57%">Es importante saber que el trabajo (W) es una transferencia de energía. Es decir, si W es el trabajo realizado sobre un sistema y es positivo, se dice que se transfiere al sistema; pero si el trabajo (W) es negativo, se dice que la energía se transfiere desde el sistema. Por lo tanto, al sistema interactuar con su entorno produce una interacción que se describe como una transferencia de energía a través de las fronteras del sistema dando como resultado un cambio en la energía almacenada en el sistema. </p>');
    $("#caja-msj").show();
});

$("#btn3Und1_5").mouseleave(function () {
    $("#caja-msj").hide();
});
// Fin evento/efecto unidad1-5


// Inicio evento/efecto unidad1-10 => ruta destino: base/unidades/unidad1.html

// tarjeta # 1
$("#cajaImgMsj_1").mouseenter(function () {
    $("#imgMsj_1").hide();
    $("#p-imgMsj_1").html('<p class="position-absolute pUnd1-10">Cuando un arquero realiza trabajo para tensar la cuerda de su arco, el arco doblado adquiere la capacidad de realizar trabajo sobre la flecha.</p>');
    $("#p-imgMsj_1").show();
});

$("#cajaImgMsj_1").mouseleave(function () {
    $("#p-imgMsj_1").hide();
    $("#imgMsj_1").show();
});

// tarjeta # 2
$("#cajaImgMsj_2").mouseenter(function () {
    $("#imgMsj_2").hide();
    $("#p-imgMsj_2").html('<p class="position-absolute pUnd1-10">Cuando se realiza trabajo para elevar el pesado pistón de un mazo, el pistón adquiere la capacidad de realizar trabajo sobre el objeto que golpea cuando cae.</p>');
    $("#p-imgMsj_2").show();
});

$("#cajaImgMsj_2").mouseleave(function () {
    $("#p-imgMsj_2").hide();
    $("#imgMsj_2").show();
});

// tarjeta # 3
$("#cajaImgMsj_3").mouseenter(function () {
    $("#imgMsj_3").hide();
    $("#p-imgMsj_3").html('<p class="position-absolute">Cuando se realiza trabajo para envolver un mecanismo de resorte, el resorte adquiere la capacidad para realizar trabajo sobre varios engranes para operar un reloj, timbrar una campana o sonar una alarma.</p>');
    $("#p-imgMsj_3").show();
});

$("#cajaImgMsj_3").mouseleave(function () {
    $("#p-imgMsj_3").hide();
    $("#imgMsj_3").show();
});
// Fin evento/efecto unidad1-10


// Inicio evento/efecto unidad1-17 => ruta destino: base/unidades/unidad1.html
// acordeon # 1
$("#btnAcordeon1").click(function () {
    $("#acordeon1").slideToggle("slow");
});

// acordeon # 2
$("#btnAcordeon2").click(function () {
    $("#acordeon2").slideToggle("slow");
});

// acordeon # 3
$("#btnAcordeon3").click(function () {
    $("#acordeon3").slideToggle("slow");
});

// acordeon # 4
$("#btnAcordeon4").click(function () {
    $("#acordeon4").slideToggle("slow");
});

// acordeon # 5
$("#btnAcordeon5").click(function () {
    $("#acordeon5").slideToggle("slow");
});
// Fin evento/efecto unidad1-17



// Inicio evento/efecto unidad1-20 => ruta destino: base/unidades/unidad2.html

$("#btn1-und2-3").click(function () {
    $(".btn-und2-3").removeClass("btn-und2-3-color");
    $(this).addClass("btn-und2-3-color");
    $("#eventoUnidad2-3").hide();
    $("#eventoUnidad2-3").html(
        `<div class="row align-items-center justify-content-center position-absolute und2-3-1">
        <div class="col-md-6 p-0">
            <p class="justificado p_black font13">La cantidad de movimiento se define como el producto de la masa de un objeto y su velocidad <img style="width: 50px;cursor: pointer;" src="assets/img/img_ova/formula3.png" title="Clic para Zoom" data-toggle="modal" data-target="#modalimg_FormulaNue" >,se debe tener en cuenta que la cantidad
                de movimiento es una cantidad vectorial, cuando la dirección no es un factor importante, se puede mencionar que la cantidad de movimiento es masa por rapidez. En la definición se puede ver que un objeto
                en movimiento puede tener una gran cantidad de movimiento si su masa o su velocidad es grande, o si tanto su masa como su velocidad son grandes.</p>
        </div>
        <div class="col-md-2 p-0">
            <img class="rounded" src="assets/img/img_ova/imagen18.png" alt="imagen18" style="width: 218px;">
        </div>
    </div>`);
    $("#eventoUnidad2-3").show();
});

$("#btn2-und2-3").click(function () {
    $(".btn-und2-3").removeClass("btn-und2-3-color");
    $(this).addClass("btn-und2-3-color");
    $("#eventoUnidad2-3").hide();
    $("#eventoUnidad2-3").html(
        `<div class="row align-items-center justify-content-center position-absolute und2-3-2">
        <img class="img1-und2-3-2" src="assets/img/img_ova/Camion.png" alt="camion">
        <div class="col-md-4 borde-dashed px-4 py-5 mr-3" style="min-height: 214px">
            <p class="justificado p_black font13">El camión tiene más cantidad de movimiento que el carro que se mueve con
                la misma rapidez porque el camión tiene mayor masa.</p>
        </div>
        <div class="col-md-4 borde-dashed px-4 py-5 ml-3">
            <p class="justificado p_black font13">Se puede ver que un gran barco que se mueve con una rapidez pequeña puede
                tener una gran cantidad de movimiento, como la puede tener una pequeña bala que se mueve con gran rapidez.
            </p>
        </div>
        <img class="img2-und2-3-2" src="assets/img/img_ova/Barco.png" alt="barco">
    </div>`);
    $("#eventoUnidad2-3").show();
});

$("#btn3-und2-3").click(function () {
    $(".btn-und2-3").removeClass("btn-und2-3-color");
    $(this).addClass("btn-und2-3-color");
    $("#eventoUnidad2-3").hide();
    $("#eventoUnidad2-3").html(
        `<div class="row align-items-center justify-content-center position-absolute und2-3-2">
        <div class="row">
            <div class="col-md-12">
                <p class="justificado p_black font13">Cuando Newton estableció su segunda ley en realidad lo
                    hizo en términos del momento así:</p>
            </div>
        </div>
        <img class="w-50" src="assets/img/img_ova/formula6.png" alt="formula6">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <p class="justificado p_black font13">A la cantidad p, se le suele llamar momento lineal o
                    momentum, se quiere resaltar nuevamente que la cantidad de movimiento es una cantidad
                    vectorial, esto significa que si en un sistema de dos partículas de igual masa, ambas tienen
                    la misma rapidez, pero las velocidades están en sentido opuesto el momento es cero.</p>
            </div>
        </div>
    </div>`);
    $("#eventoUnidad2-3").show();
});

$("#btn4-und2-3").click(function () {
    $(".btn-und2-3").removeClass("btn-und2-3-color");
    $(this).addClass("btn-und2-3-color");
    $("#eventoUnidad2-3").hide();
    $("#eventoUnidad2-3").html(
        `<div class="row align-items-center justify-content-center position-absolute und2-3-4">
        <div class="row justify-content-center">
          <div class="col-md-8 mb-2">
            <p class="justificado p_black font13">Cuando la cantidad de movimiento de un objeto cambia,
              entonces la masa o la velocidad o ambas cambian. Si la masa permanece invariable, como suele
              suceder, entonces la velocidad cambia y ocurre una aceleración. </p>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-2 d-flex justify-content-end p-0">
            <img class="w-50" src="assets/img/img_ova/Relojarena.png" alt="reloj arena">
          </div>
          <div class="col-md-8">
            <p class="justificado p_black font13"><b>¿Qué produce esa aceleración?</b><br>
              La respuesta es una fuerza. Cuanto mayor sea la fuerza neta que actúa sobre un objeto, mayor es el cambio de velocidad en un intervalo de tiempo dado y, en consecuencia, mayor es su cambio en cantidad de movimiento. Pero hay algo más que es importante para cambiar la cantidad de movimiento: el tiempo, es decir, durante cuánto tiempo actúa la fuerza. Si se aplica una fuerza breve a una partícula en reposo, se produce un cambio en su cantidad de movimiento. Si se aplica la misma fuerza durante un periodo más prolongado y se produce un cambio más grande en la cantidad de movimiento del carro. </p>
          </div>
        </div>
      </div>`);
    $("#eventoUnidad2-3").show();
});

$("#btn5-und2-3").click(function () {
    $(".btn-und2-3").removeClass("btn-und2-3-color");
    $(this).addClass("btn-und2-3-color");
    $("#eventoUnidad2-3").hide();
    $("#eventoUnidad2-3").html(
        `<div class="row align-items-center justify-content-center position-absolute und2-3-5">
        <div class="col-md-10">
          <p class="justificado p_black font13">Una fuerza sostenida durante un tiempo largo produce más
            cambio en la cantidad de movimiento que la misma fuerza aplicada un lapso breve. De modo que
            tanto la fuerza como el intervalo de tiempo son importantes para cambiar la cantidad de
            movimiento. La cantidad de fuerza en el intervalo de tiempo se denomina impulso J. Pero también
            se dijo que hay un cambio de momento así que el impulso también se puede deducir como p. Para
            aumentar la cantidad de movimiento de un objeto, tiene sentido aplicar la fuerza más grande
            posible durante el mayor tiempo posible. Para que un golfista dé su golpe de salida, abanica lo
            más fuerte posible y continúa con su balanceo. Continuar con el balanceo extiende el tiempo de
            contacto y por ende se transfiere más cantidad de movimiento a la bola.</p>
        </div>
      </div>`);
    $("#eventoUnidad2-3").show();
});
// Fin evento/efecto unidad1-20


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function slide() {
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex + 1);
}

function slide_predeterminado() {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num) {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num - 1);
    controlSlides(num);
}

function controlSlides(num) {
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");

            break;
        case 2:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "El trabajo y la energía");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 21:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 22:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 23:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 24:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 25:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 26:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 27:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 28:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 29:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 30:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 31:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 32:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 33:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 34:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 35:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;
        case 36:
            setMigaja("Unidades de aprendizaje", "1. Energía de un sistema", "Cantidad de movimiento lineal y colisiones");
            break;

        default:
            break;
    }
}

function vinetas(num) {
    switch (parseInt(num)) {
        case 1:
            $('.vineta').addClass('inactive');
            $('.vineta').removeClass('active');

            $('.vineta1').removeClass('inactive');
            $('.vineta1').addclass('active');
            break;
        case 2:
            $('.vineta').addClass('inactive');
            $('.vineta').removeClass('active');

            $('.vineta2').removeClass('inactive');
            $('.vineta2').addclass('active');
            break;
        default:
            break;
    }
}

function infoactivi(num) {
    switch (parseInt(num)) {
        case 1:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue1').removeClass('inactive');
            $('.infoblue1').addclass('active');
            break;
        case 2:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue2').removeClass('inactive');
            $('.infoblue2').addclass('active');
            break;
        case 3:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue3').removeClass('inactive');
            $('.infoblue3').addclass('active');
            break;
        default:
            break;
    }
}

function objetivos(num) {
    switch (parseInt(num)) {

        case 1:
            $('.visible1').css({ 'visibility': 'visible' });
            break;
        case 2:
            $('.visible2').css({ 'visibility': 'visible' });
            break;
        case 3:
            $('.visible3').css({ 'visibility': 'visible' });
            break;
        default:
            break;
    }
}

function infoactivi2(num) {
    switch (parseInt(num)) {

        case 1:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue1').removeClass('inactive');
            $('.infoblue1').addclass('active');
            break;
        case 2:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue2').removeClass('inactive');
            $('.infoblue2').addclass('active');
            break;
        case 3:
            $('.banner_info_activi').addClass('inactive');
            $('.banner_info_activi').removeClass('active');

            $('.infoblue3').removeClass('inactive');
            $('.infoblue3').addclass('active');
            break;
        default:
            break;
    }
}

function planeasion(num) {
    switch (parseInt(num)) {

        case 1:
            $('.targetasFondo').addClass('escondido');
            $('.targetasFondo').removeClass('mostrado');

            $('.targetaF1').removeClass('escondido');
            $('.targetaF1').addclass('mostrado');
            break;
        case 2:
            $('.targetasFondo').addClass('escondido');
            $('.targetasFondo').removeClass('mostrado');

            $('.targetaF2').removeClass('escondido');
            $('.targetaF2').addclass('mostrado');
            break;
        case 3:
            $('.targetasFondo').addClass('escondido');
            $('.targetasFondo').removeClass('mostrado');

            $('.targetaF3').removeClass('escondido');
            $('.targetaF3').addclass('mostrado');
            break;
        default:
            break;
    }
}

function recoger(num) {
    switch (parseInt(num)) {

        case 1:
            $('.reco1').addClass('recogido');
            $('.reco1').removeClass('abierto');

            var text = `<div class="row">
                            <div style="width: 20%;">
                                <img src="assets/img/img_ova/ACTIVIDAD4.png" style="max-width: 90%;">
                            </div>
                            <div style="padding: 12px 0px 3px 30px;"><b style="color: white;">ACTIVIDAD 1</b></div>
                        </div> `;

            $('.reco1').html(text);
            break;
        case 2:
            $('.reco2').addClass('recogido');
            $('.reco2').removeClass('abierto');

            var text = `<div class="row">
                            <div style="width: 20%;">
                                <img src="assets/img/img_ova/ACTIVIDAD2.png" style="max-width: 90%;">
                            </div>
                            <div style="padding: 12px 0px 3px 30px;"><b style="color: white;">ACTIVIDAD 2</b></div>
                        </div> `;

            $('.reco2').html(text);
            break;
        case 3:
            $('.reco3').addClass('recogido');
            $('.reco3').removeClass('abierto');

            var text = `<div class="row">
                            <div style="width: 20%;">
                                <img src="assets/img/img_ova/ACTIVIDAD3.png" style="max-width: 90%;">
                            </div>
                            <div style="padding: 12px 0px 3px 30px;"><b style="color: white;">ACTIVIDAD 3</b></div>
                        </div>`;

            $('.reco3').html(text);
            break;
        default:
            break;
    }
}

function funcionalidad_1(num) {
    switch (parseInt(num)) {

        case 1:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/DIAGNOSTICO1.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <p class="p_black justificado">Cuando se define la intencionalidad es necesario empezar por definir los intereses que se tienen; como el análisis de problemáticas que no son aisladas de las dificultades que no fueron identificadas con anterioridad denominadas “pandillas” al referirnos a esas  problemáticas. Para atenderlas será mucho más fácil y efectivo si se han identificado plenamente la confluencia de problemas que las integran y para esto es necesario:</p>
                                                `);
            break;
        case 2:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/INVENTARIO.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <ul class="p_black">
                                                    <li>Realizar un inventario ordenado de problemas o situaciones desfavorables identificadas.</li>
                                                    <li>Agrupar o separar las problemáticas identificadas para lograr la clasificación de las situaciones, teniendo en cuenta la disponibilidad y la calidad de la información relacionada con sus intereses. (Valdez.2010).</li>
                                                </ul>
                                                `);
            break;
        case 3:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/problema.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <ul class="p_black">
                                                    <li>Priorizar los problemas encontrados que implica ordenar jerárquicamente las diferentes categorías de los problemas según la importancia que se les asigne.</li>
                                                    <li>Integrar los análisis al identificar cada una de las causas del problema seleccionado de tal forma que se tenga una comprensión integral del problema.</li>
                                                </ul>
                                                `);
            break;
        case 4:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/DIAGRAMA(1).png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <p class="p_black justificado">Para la elaboración de un diagnóstico estratégico, se tienen en cuenta una serie de estrategias que se refieren a cómo lograr los objetivos. Se debe realizar un estudio y un análisis, tanto interno como externo de la organización que permita conocer a fondo, tanto las debilidades como las fortalezas, las oportunidades y las amenazas (Valdez.2010), por medio de una Matriz DOFA donde por la asociación de estas variables se obtendrán una serie de resultados aplicables a la empresa.</p>
                                                `);
            break;
        case 5:
            $('#info_funcionalidad_1_1').html(`
                                                <img src="assets/img/img_ova/VALORES.png" class="img-75 m-auto">
                                                `);
            $('#info_funcionalidad_1_2').html(`
                                                <p class="p_black justificado">El diagnóstico empresarial debe de ser el análisis integral de todas las variables que influyen en el posicionamiento de la empresa y las variables que le generan afectación también.</p>
                                                <br>
                                                <p class="p_black justificado">Los diagnósticos deben contener la integración funcional de todas las áreas, que permita obtener una visión del sistema para poder tener un acercamiento a la posible solución. Con la inclusión de un  análisis financiero hasta el estudio del entorno interno y externo de la organización, haciendo uso de las múltiples herramientas existentes.</p>
                                                `);
            break;
        default:
            break;
    }
}

function funcionalidad_2(num) {
    switch (parseInt(num)) {

        case 1:
            $('#info_funcionalidad_2_1').html(`
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/ACTIVIDAD 4.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10">
                                                  <ul class="p_black">
                                                      <li>Hacer una lista de las fortalezas internas claves.</li>
                                                      <li>Hacer una lista de las debilidades internas decisivas.</li>
                                                      <li>Hacer una lista de las oportunidades externas importantes.</li>
                                                      <li>Hacer una lista de las amenazas externas claves.</li>
                                                      <li>Las fortalezas internas con las oportunidades externas conforman las estrategias FO resultantes en la casilla apropiada.</li>
                                                  </ul>
                                                </div>
                                                `);
            break;
        case 2:
            $('#info_funcionalidad_2_1').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado"">Básicamente, este instrumento se utiliza con el fin de formular estrategias, resumir y evaluar las fortalezas y debilidades más importantes dentro de las áreas más funcionales de la organización. Además, ofrece una base para identificar y evaluar las relaciones entre dichas áreas (Gomez.2009).</p>
                                                  <br>
                                                  <p class="p_black justificado"">Este es el proceso que se le puede llamar desarrollo de auditoría interna y representa una oportunidad para todos los agentes y empleados de participar en la determinación del futuro de la empresa.</p>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/ESTRATEGIA2.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 3:
            $('#info_funcionalidad_2_2').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado">Las cifras no son mágicas y el objetivo no es obtener una sola cifra, sino más bien asimilar y evaluar la información de manera significativa con la finalidad de apoyar la toma de decisiones. Debemos tener en cuenta la incertidumbre, mediante la identificación de las oportunidades y amenazas en el entorno, y se puede anticipar lo que otros actores pueden hacer y que puedan afectar la empresa.</p>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/LISTA.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 4:
            $('#info_funcionalidad_2_2').html(`
                                                <div class="col-md-12">
                                                    <img src="assets/img/img_ova/Imagen3.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 5:
            $('#info_funcionalidad_2_3').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado">La Matriz DOFA puede emplear tipología de estrategias las cuales se describen a continuación, así:</p>
                                                  <ul class="p_black">
                                                      <li>Las oportunidades que se aprovechan con las fortalezas originan estrategias ofensivas.</li>
                                                      <li>Las que se deben de enfrentar teniendo debilidades generan estrategias adaptativas.</li>
                                                      <li>Las amenazas que se enfrentan con fortalezas originan estrategias reactivas.</li>
                                                  </ul>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/matriz 1.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 6:
            $('#info_funcionalidad_2_3').html(`
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/matriz2.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10">
                                                  <ul class="p_black">
                                                      <li>Mientras que las enfrentadas con debilidades generan estrategias defensivas.</li>
                                                      <li>Al momento de cotejar las debilidades internas con las oportunidades externas y registrar las estrategias DO resultantes.</li>
                                                      <li>Comparar las fortalezas internas con las amenazas externas y registrar las estrategias FA resultantes.</li>
                                                  </ul>
                                                </div>
                                                `);
            break;
        case 7:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-10">
                                                  <p class="p_black justificado">Ahora para formular estrategias a raíz de la Matriz DOFA se describirán cada una de las posibilidades, lo que define cada una de ellas y cuál es el campo de aplicación. enfocándose solo en los factores claves de éxito para la organización, así:</p>
                                                </div>
                                                <div class="col-md-2 p-0 d-flex">
                                                    <img src="assets/img/img_ova/matriz3.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 8:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/FO.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">En ellas se usan las fuerzas o fortalezas internas de la empresa para aprovechar la ventaja de las oportunidades externas. Por regla general, las organizaciones siguen a las estrategias de DO, FA o DA para colocarse en una situación donde puedan aplicar estrategias FO. (Porter.2009).</p>
                                                </div>
                                                `);
            break;
        case 9:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">Pretenden superar las debilidades internas aprovechando las oportunidades externas. (Porter.2009).</p>
                                                </div>
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/DO.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        case 10:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/FA.png" class="m-auto img-100">
                                                </div>
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">Aprovechan las fortalezas de la empresa para evitar o disminuir las repercusiones de las amenazas externas. (Porter.2009).</p>
                                                </div>
                                                `);
            break;
        case 11:
            $('#info_funcionalidad_2_4').html(`
                                                <div class="col-md-10 d-flex">
                                                  <p class="p_black justificado m-auto">Son tácticas defensivas que pretenden disminuir las debilidades internas y evitar las amenazas del entorno. (Porter.2009).</p>
                                                </div>
                                                <div class="col-md-2 p-0">
                                                    <p class="justificado py-3" style="color: #1458BF;">ESTRATEGIAS</p>
                                                    <img src="assets/img/img_ova/DA.png" class="m-auto img-100">
                                                </div>
                                                `);
            break;
        default:
            break;
    }
}

function scroll_uno() {
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}

function scroll_dos() {
    knob = document.querySelector('.custom-scrollbar__knob_dos');
    bar = document.querySelector('.custom-scrollbar__bar_dos');
    container = document.querySelector('.custom-scrollbar__inner_dos');
    scroll();
}

function scroll_tres() {
    knob = document.querySelector('.custom-scrollbar__knob_tres');
    bar = document.querySelector('.custom-scrollbar__bar_tres');
    container = document.querySelector('.custom-scrollbar__inner_tres');
    scroll();
}

function globos(num) {
    switch (parseInt(num)) {

        case 1:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo1').removeClass('inactive');
            $('.globo1').addclass('active');
            break;
        case 2:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo2').removeClass('inactive');
            $('.globo2').addclass('active');
            break;
        case 3:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo3').removeClass('inactive');
            $('.globo3').addclass('active');
            break;
        case 4:
            $('.globo').addClass('inactive');
            $('.globo').removeClass('active');

            $('.globo4').removeClass('inactive');
            $('.globo4').addclass('active');
            break;
        default:
            break;
    }
}

function flecha_abajo(num) {
    switch (parseInt(num)) {
        case 1:
            $('.triangulocordeon').removeClass('abajo');
            $('.triangulo1').addClass('abajo');
            break;
        case 2:
            $('.triangulocordeon').removeClass('abajo');
            $('.triangulo2').addClass('abajo');
            break;
        default:
            break;
    }
}

/*var knob = document.querySelector('.custom-scrollbar__knob2');
var bar = document.querySelector('.custom-scrollbar__bar2');
var container = document.querySelector('.custom-scrollbar__inner2');*/
function scroll() {
    // When the container is scrolled
    container.addEventListener('scroll', () => {
        // If we are dragging the knob, do nothing
        if (dragging) return;

        // Otherwise, set the knob position based on the scroll position
        knob.style.top = container.scrollTop / (container.scrollHeight - container.offsetHeight) * 100 + '%';
    });

    dragging = false;

    knob.addEventListener('mousedown', event => {

        console.log(knob + " " + bar + " " + container);
        dragging = {
            x: event.clientX,
            y: event.clientY
        };

    });
    window.addEventListener('mousemove', event => {
        if (dragging) {
            // When dragging
            event.preventDefault();
            diff = {
                x: event.clientX - dragging.x,
                y: event.clientY - dragging.y
            };


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
                y: event.clientY
            };

        }
    });
    window.addEventListener('mouseup', () => {
        dragging = false;
    });
}

//boton para abrir dos enlaces (documentos) al mismo tiempo 
$("#btnEvaFinal").click(function () {
    open('assets/PDF/2021_1_Cuestionario_OVA_4__Energ_a_de_un_sistema___Q01.pdf');
    open('assets/PDF/2021_1_Cuestionario_OVA_4__Energ_a_de_un_sistema___Q02.pdf');
});


//dezlizador


// function Input(num) {
//   //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
//   this.att = {};
//   this.att.type = "range";
//   this.att.value = 0;
//   this.att.min = 0;
//   this.att.max = num;
//   this.att.autocomplete = "off";
//   this.att.step = "1";
//   this.input;
//   this.output;

//   this.crear = function(elementoPadre) {
//     // crea un nuevo elemento input
//     this.input = document.createElement("input");
//     //para cada propiedad del objeto att establece un nuevo atributo del elemento input
//     for (var name in this.att) {
//       if (this.att.hasOwnProperty(name)) {
//         this.input.setAttribute(name, this.att[name]);
//       }
//     }
//     // crea un nuevo elemento div
//     this.output = document.createElement("div");
//     // establece el valor del atributo class del nuevo div
//     this.output.setAttribute("class", "output");
//     // y el contenido (innerHTML) de este
//     this.output.innerHTML = this.att.value;

//     // inserta los dos elementos creados al final  del elemento Padre 
//     elementoPadre.appendChild(this.input);
//     elementoPadre.appendChild(this.output);
//   }

//   this.actualizar = function() {
//     scroll_horizontal(this.input.value);
//     this.output.innerHTML = this.input.value;
//     this.att.value = this.input.value;
//   }
//   $("input[type=range]").on('change', function () {
//       /*alert();*/
//   });
//   this.actualizar2 = function() {
//     scroll_horizontal2(this.input.value);
//     this.output.innerHTML = this.input.value;
//     this.att.value = this.input.value;
//   }
//   $("input[type=range]").on('change', function () {
//       /*alert();*/
//   });
// }