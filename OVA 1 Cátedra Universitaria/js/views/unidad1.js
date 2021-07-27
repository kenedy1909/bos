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
    /*slide_predeterminado();*/

    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = "";
    bar = "";
    container = "";

    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/1. La Teoría General de Sistemas - TGS.pdf" target="_blank"> <img class="img-circle menu_superior w-40px img-5" src="assets/img/img_template/pdf.png"> La Teoría General de Sistemas - TGS.pdf  <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/2. Introducción a los Conceptos Básicos de la TGS.pdf" target="_blank"> <img class="img-circle menu_superior w-40px img-5" src="assets/img/img_template/pdf.png"> 2. Introducción a los Conceptos Básicos de la TGS.pdf.pdf  <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD1-LA-TGS/TEMA1-ConceptosGenerales/3-Componentes-de-la-TGS.pdf" target="_blank"> <img class="img-circle menu_superior w-40px img-5" src="assets/img/img_template/pdf.png"> 3. Componentes de la TGS.pdf  <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);
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
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","");
            
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","Influencia del movimiento estudiantil de Córdoba (1918)");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","Influencia del movimiento estudiantil de Córdoba (1918)");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","Principios ideológicos del Acta de Fundación");
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","Principios ideológicos del Acta de Fundación");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","Principios ideológicos del Acta de Fundación");
             
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","1. Antecedentes históricos de la fundación de la Universidad Autónoma Latinoamericana","Principios ideológicos del Acta de Fundación");
            tema=1;
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


//dezlizador


function Input(num) {
  //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
  this.att = {};
  this.att.type = "range";
  this.att.value = 0;
  this.att.min = 0;
  this.att.max = num;
  this.att.autocomplete = "off";
  this.att.step = "1";
  this.input;
  this.output;

  this.crear = function(elementoPadre) {
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

  this.actualizar = function() {
    scroll_horizontal(this.input.value);
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
  $("input[type=range]").on('change', function () {
      /*alert();*/
  });
  this.actualizar2 = function() {
    scroll_horizontal2(this.input.value);
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
  $("input[type=range]").on('change', function () {
      /*alert();*/
  });
}

function funcionalidad_1(num) {
    switch(parseInt(num)){
        case 1:
            $("#funcionalidad-1").html(`
                                        <div class="custom-scrollbar_uno">
                                          <div class="custom-scrollbar__inner_uno">
                                            <div class="position-relative d-flex" style="width: 700px; height: 445px;">
                                                <img src="assets/img/img_ova/linea.png" class="img-100 m-auto">
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 100px; top: 4px;" onclick="funcionalidad_1_1(1)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 256px; top: 4px;" onclick="funcionalidad_1_1(2)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 391px; top: 4px;" onclick="funcionalidad_1_1(3)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 531px; top: 4px;" onclick="funcionalidad_1_1(4)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 645px; top: 67px;" onclick="funcionalidad_1_1(5)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 535px; top: 139px;" onclick="funcionalidad_1_1(6)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 319px; top: 139px;" onclick="funcionalidad_1_1(7)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 100px; top: 139px;" onclick="funcionalidad_1_1(8)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 8px; top: 209px;" onclick="funcionalidad_1_1(9)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 100px; top: 275px;" onclick="funcionalidad_1_1(10)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 319px; top: 275px;" onclick="funcionalidad_1_1(11)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 535px; top: 275px;" onclick="funcionalidad_1_1(12)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 643px; top: 332px;" onclick="funcionalidad_1_1(13)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 535px; top: 407px;" onclick="funcionalidad_1_1(14)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 319px; top: 407px;" onclick="funcionalidad_1_1(15)"></div>
                                                <div class="position-absolute radius-50" style="width: 32px; height: 32px; left: 100px; top: 407px;" onclick="funcionalidad_1_1(16)"></div>
                                                <div id="info_funcionalidad_1" class="position-absolute d-none img-45"></div>
                                                <div id="info_funcionalidad_2" class="position-absolute d-none img-45"></div>
                                            </div>
                                          </div>
                                          <div class="custom-scrollbar__bar_uno">
                                            <div class="custom-scrollbar__knob_uno cursor"><p class="text-center linea_scroll_uno">-</p></div>
                                          </div>
                                        </div>
                                        `);
            scroll_uno();
            break;
        case 2:
            $("#funcionalidad-1").html(`
                                        <div class="row d-flex align-items-start flex-column">
                                            <div class="col-md-12 p-3">
                                                <div class="row">
                                                    <div class="col-md-12 py-3">
                                                        <h2 class="color-text-o">Antecedentes a Nivel Local:</h2>
                                                        <br>
                                                        <p class="justificado p-black">A continuación se presentan los acontecimientos más relevantes a nivel local que surgieron entre los años 1953 y 1966, clic sostenido y deslice el botón por la línea para conocerlos:</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 p-3" id="funcionalidad_1_2">

                                            </div>
                                            <div class="col-md-12 mx-auto mt-auto">
                                                <div class="my-3 bg-gris radius-2 py-3">
                                                    <div class="inputDiv i1"></div>
                                                    <div class="inputDiv i2" style="display: none;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        `);
            $(".i1").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
            var i = new Input(13);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(13);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
              (function(n) {
                inputsRy[n].input.addEventListener("input", function() {
                  inputsRy[n].actualizar();
                }, false)
              }(n));
            }
            break;
        default:
            break;
    }
}

function scroll_horizontal(num){
    switch (parseInt(num)) {
        case 0:
            $('#funcionalidad_1_2').html('');
            break;
        case 1:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-70 my-auto px-3">
                                        <p class="justificado p_black">En 1965, surge la huelga en la Universidad de Antioquia, para destituir al Rector Ignacio Vélez Escobar.</p>
                                        <br>
                                        <p class="text-right p_black">Universidad de Antioquia</p>
                                    </div>
                                    <div class="img-30">
                                        <img src="assets/img/img_ova/Imagen9.jpg" class="img-100 m-auto">
                                    </div>
                                </div>
                                `);
            break;
        case 2:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">Simultáneamente se dan las protestas de las universidades a nivel nacional, por la invasión de los “marines” americanos a Santo Domingo, ambas causas apoyadas por la FUN, creada en 1962.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">El 21 de mayo de 1965 asesinan al estudiante Jorge Enrique Useche, dentro de esas confrontaciones callejeras.</p>
                                    </div>
                                </div>
                                `);
            break;
        case 3:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 m-auto px-3">
                                        <p class="justificado p_black">En 1965 se decreta el estado de sitio por el presidente Guillermo León Valencia y prolongado durante los años siguientes por el presidente Carlos Lleras Restrepo./p>
                                    </div>
                                    <div class="img-50 my-auto px-3 border-left-color-c">
                                        <div class="col-md-12 d-flex">
                                            <div class="img-50 p-3">
                                                <img src="assets/img/img_ova/Imagen10.jpg" class="img-100 m-auto">
                                            </div>
                                            <div class="img-50 p-3">
                                                <p class="justificado p_black">Guillermo León Valencia.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12 d-flex">
                                            <div class="img-50 p-3">
                                                <img src="assets/img/img_ova/Imagen11.jpg" class="img-100 m-auto">
                                            </div>
                                            <div class="img-50 p-3">
                                                <p class="justificado p_black">Carlos Lleras Restrepo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `);
            break;
        case 4:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">En el año 1966 aparece el Decreto 2128  y otras drásticas medidas como el juzgamiento de los delitos de secuestro, asonada y asociación para delinquir, por la Justicia Penal Militar, aunque fueran cometidos por civiles.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">26 de julio de 1966, Asamblea General de la Universidad de Antioquia, para protestar por la ordenanza 036 de ese año, expedida por la Asamblea Departamental de Antioquia.</p>
                                    </div>
                                </div>
                                `);
            break;
        case 5:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">El 12 de agosto de 1966, se dá la manifestación de FEDETA y sus filiales por mejores salarios y por cátedra libre, bajo la consigna “unidad obrero estudiantil”.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">El 22 de mayo de 1966, comunicado del consejo estudiantil Universidad de Medellín a la consiliatura, denunciando abusos y malos manejos de las directivas</p>
                                    </div>
                                </div>
                                `);
            break;
        case 6:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-70 my-auto px-3">
                                        <p class="justificado p_black">El 28 de julio de 1966, la asamblea General de la Universidad de Medellín, decreta paro indefinido, en solidaridad con la Universidad de Antioquia y por los problemas propios (comunicado antes mencionado).</p>
                                    </div>
                                    <div class="img-30">
                                        <img src="assets/img/img_ova/Imagen9.jpg" class="img-100 m-auto">
                                    </div>
                                </div>
                                `);
            break;
        case 7:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 row">
                                    <div class="col-md-12 my-auto p-5">
                                        <p class="justificado p_black">El 22 de mayo de 1966 sale el comunicado estudiantil el cual contiene los siguientes puntos relevantes que va a poder visualizar al dar clic sobre cada tarjeta:</p>
                                    </div>
                                    <div class="col-md-4 my-auto p-3">
                                        <div class="bg-rojo-1 radius-2 p-3 d-flex funcionalidad_1_2-1" onclick="funcionalidad_1_2(1)">
                                            <img src="assets/img/img_ova/grupo.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-auto p-3">
                                        <div class="bg-rojo-1 radius-2 p-3 d-flex funcionalidad_1_2-2" onclick="funcionalidad_1_2(2)">
                                            <img src="assets/img/img_ova/grupo_1.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-auto p-3">
                                        <div class="bg-rojo-1 radius-2 p-3 d-flex funcionalidad_1_2-3" onclick="funcionalidad_1_2(3)">
                                            <img src="assets/img/img_ova/grupo_2.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-auto p-3">
                                        <div class="bg-rojo-1 radius-2 p-3 d-flex funcionalidad_1_2-4" onclick="funcionalidad_1_2(4)">
                                            <img src="assets/img/img_ova/profesor.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-auto p-3">
                                        <div class="bg-rojo-1 radius-2 p-3 d-flex funcionalidad_1_2-5" onclick="funcionalidad_1_2(5)">
                                            <img src="assets/img/img_ova/profesor_1.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                    <div class="col-md-4 my-auto p-3">
                                        <div class="bg-rojo-1 radius-2 p-3 d-flex funcionalidad_1_2-6" onclick="funcionalidad_1_2(6)">
                                            <img src="assets/img/img_ova/profesor_2.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                </div>
                                `);
            break;
        case 8:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 row">
                                    <div class="col-md-12 my-auto p-5">
                                        <p class="justificado p_black">El 22 de mayo de 1966 sale el comunicado estudiantil el cual contiene los siguientes puntos relevantes que va a poder visualizar al dar clic sobre cada tarjeta:</p>
                                    </div>
                                    <div class="col-md-6 my-auto p-3">
                                        <div class="bg-color-activi-c radius-2 p-3 d-flex funcionalidad_1_2-7" onclick="funcionalidad_1_2(7)">
                                            <img src="assets/img/img_ova/decisiones.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                    <div class="col-md-6 my-auto p-3">
                                        <div class="bg-color-activi-c radius-2 p-3 d-flex funcionalidad_1_2-8" onclick="funcionalidad_1_2(8)">
                                            <img src="assets/img/img_ova/eleccion.png" class="img-40 m-auto">
                                        </div>
                                    </div>
                                </div>
                                `);
            break;
        case 9:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-70 my-auto px-3">
                                        <p class="justificado p_black">El 28 de julio de 1966, la asamblea General de la Universidad de Medellín, decreta paro indefinido, en solidaridad con la Universidad de Antioquia y por los problemas propios (comunicado antes mencionado).</p>
                                    </div>
                                    <div class="img-30">
                                        <img src="assets/img/img_ova/Imagen12.png" class="img-100 m-auto">
                                    </div>
                                </div>
                                `);
            break;
        case 10:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">El 7 de agosto de 1966, se hace la posesión de Carlos Lleras Restrepo como presidente.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">El nuevo gobierno nacional endurece la represión (desequilibrio entre los dos grupos enfrentados: los jóvenes rebeldes vs las fuerzas activas del país).</p>
                                    </div>
                                </div>
                                `);
            break;
        case 11:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">Toma de las instalaciones de la Universidad de Medellín y de las de Estudios Generales por parte de los huelguistas.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <p class="justificado p_black">En agosto 3 de 1966, sale el comunicado del Consejo Directivo de la Universidad de Medellín, refutando los cuestionamientos estudiantiles y haciendo una apología de su gestión.</p>
                                    </div>
                                </div>
                                `);
            break;
        case 12:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 d-flex">
                                    <div class="img-50 my-auto p-5">
                                        <p class="justificado p_black">En Agosto 12, se emite el comunicado del Comité Central de Paro a la opinión pública rechazando el Comité Pro-Defensa.</p>
                                        <br>
                                        <p class="justificado p_black">Se presenta constante alteración del orden público mediante desfiles, manifestaciones públicas y protestas por parte de los estudiantes.</p>
                                    </div>
                                    <div class="img-50 my-auto p-5 border-left-color-c">
                                        <img src="assets/img/img_ova/Imagen13.jpg" class="img-100 m-auto">
                                    </div>
                                </div>
                                `);
            break;
        case 13:
            $('#funcionalidad_1_2').html(`
                                <div class="bg-blanco radius-2 p-3 row">
                                    <div class="col-md-12 my-auto p-5">
                                        <p class="justificado p_black">Debido a estos sucesos se toman drásticas medidas en contra de los huelguistas, las cuales fueron:</p>
                                    </div>
                                    <div class="col-md-6 offset-md-3 my-auto p-3">
                                        <div class="bg-color-activi-c radius-2 p-3 row">
                                            <div class="col-md-6 border-bottom-rojo-c">
                                                <li class="p_white">Cancelación de matrículas.</li>
                                            </div>
                                            <div class="col-md-6 border-left-rojo-c border-bottom-rojo-c">
                                                <li class="p_white">Expulsión de estudiantes de la universidad.</li>
                                            </div>
                                            <div class="col-md-6 border-bottom-rojo-c">
                                                <li class="p_white">Encarcelamiento de estudiantes.</li>
                                            </div>
                                            <div class="col-md-6 border-left-rojo-c border-bottom-rojo-c">
                                                <li class="p_white">Cancelación de cursos.</li>
                                            </div>
                                            <div class="col-md-12">
                                                <p class="p_white">Desalojo de las instalaciones universitarias de los huelguistas a manos de la fuerza pública, etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `);
            break;
        default:
            break;
    }
}

function funcionalidad_1_2(num) {
            $('.funcionalidad_1_2-1').html(`<img src="assets/img/img_ova/grupo.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-2').html(`<img src="assets/img/img_ova/grupo_1.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-3').html(`<img src="assets/img/img_ova/grupo_2.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-4').html(`<img src="assets/img/img_ova/profesor.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-5').html(`<img src="assets/img/img_ova/profesor_1.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-6').html(`<img src="assets/img/img_ova/profesor_2.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-7').html(`<img src="assets/img/img_ova/decisiones.png" class="img-40 m-auto">`);
            $('.funcionalidad_1_2-8').html(`<img src="assets/img/img_ova/eleccion.png" class="img-40 m-auto">`);
    switch (parseInt(num)) {
        case 1:
            $('.funcionalidad_1_2-1').html(`
                                <p class="p_white justificado">Denuncia de anomalías académicas, administrativas y de extensión, así como violaciones de los estatutos y de los reglamentos universitarios.</p>
                                `);
            break;
        case 2:
            $('.funcionalidad_1_2-2').html(`
                                <p class="p_white justificado">Suspensión de los Consejos Consultivos de las Facultades, conformados por profesores y estudiantes.</p>
                                `);
            break;
        case 3:
            $('.funcionalidad_1_2-3').html(`
                                <p class="p_white justificado">Rechazo a la expulsión, inadmisión y matrícula condicional de estudiantes por discriminación política e ideológica.</p>
                                `);
            break;
        case 4:
            $('.funcionalidad_1_2-4').html(`
                                <p class="p_white justificado">Nivel académico mediocre; improvisación en el nombramiento de profesores, muchos de ellos no titulados.</p>
                                `);
            break;
        case 5:
            $('.funcionalidad_1_2-5').html(`
                                <p class="p_white justificado">Demora en la provisión de profesores.</p>
                                `);
            break;
        case 6:
            $('.funcionalidad_1_2-6').html(`
                                <p class="p_white justificado">Rechazo de docentes idóneos por razones políticas e ideológicas.</p>
                                `);
            break;
        case 7:
            $('.funcionalidad_1_2-7').html(`
                                <ul class="p_white">
                                    <li>Exigir el retiro del Rector Juan Peláez Sierra.</li>
                                    <li>Levantamiento de las sanciones impuestas a los estudiantes por motivos ideológicos.</li>
                                    <li>Consagración definitiva de la libertad de cátedra y de expresión (Escudo de la U. de M.: “libertad y Ciencia”).</li>
                                    <li>Conformación del Comité de Paro.</li>
                                </ul>
                                `);
            break;
        case 8:
            $('.funcionalidad_1_2-8').html(`
                                <ul class="p_white">
                                    <li>Apoyo al movimiento estudiantil de la U. de A. en la lucha por la derogatoria de la ordenanza 036 del 66.</li>
                                    <li>Elevación del nivel académico, cultural y de bienestar estudiantil.</li>
                                    <li>Participación de los estudiantes en el gobierno universitario y en la elección de directivos y profesores (antecedente del cogobierno).</li>
                                </ul>
                                `);
            break;
        default:
            break;
    }
}

function funcionalidad_1_1(num) {
            $("#info_funcionalidad_1").addClass('d-none');
            $("#info_funcionalidad_2").addClass('d-none');
    switch (parseInt(num)) {
        case 1:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">En 1953 se da el Golpe de Estado por el General Gustavo Rojas Pinilla al gobierno conservador del presidente Laureano Gómez.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen1.jpg" class="img-80 m-auto">
                                                </div>
                                                <div>
                                                    <p class="p_white justificado">Alfonso López P., Gustavo Rojas Pinilla, Mariano Ospina P.</p>
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 45px;');
            $("#info_funcionalidad_2").attr('style', 'top: 45px; left: 330px;');
            break;
        case 2:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Se conformó la Asamblea Nacional Constituyente (ANAC).</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 45px;');
            break;
        case 3:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">En 1954 La Mujer adquiere por primera vez el derecho al voto.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen2.jpg" class="img-80 m-auto">
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 45px;');
            $("#info_funcionalidad_2").attr('style', 'top: 45px; left: 330px;');
            break;
        case 4:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Masacres de estudiantes entre 1954 y 1956.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen3.jpg" class="img-80 m-auto">
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 45px;');
            $("#info_funcionalidad_2").attr('style', 'top: 45px; left: 330px;');
            break;
        case 5:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">El 10 de mayo de 1957 se dá el derrocamiento del General Rojas Pinilla, con la participación de los partidos políticos tradicionales, de la Unión Nacional de Estudiantes Colombianos (UNEC), de los sindicatos y de las fuerzas económicas en general.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 45px;');
            break;
        case 6:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Surgimiento del Frente Nacional por un período de 16 años, a partir de 1958 (democracia anulada).</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 173px; left: 45px');
            break;
        case 7:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Movimientos disidentes: MRL y ANAPO.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen4.jpg" class="img-80 m-auto">
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 173px; left: 45px');
            $("#info_funcionalidad_2").attr('style', 'top: 173px; left: 375px;');
            break;
        case 8:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">En 1970 se presentan las elecciones en las que el general Rojas Pinilla, apoyado por ANAPO, disputa la presidencia de la República con el candidato conservador Misael Pastrana Borrero.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 173px; left: 45px');
            break;
        case 9:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Después de dichas elecciones se genera disgusto de los anapistas por presunto fraude en dichas elecciones, a favor del candidato frentenacionalista.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 148px; left: 45px');
            break;
        case 10:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Después de las elecciones se crea el Movimiento 19 de abril (M-19) como consecuencia del mencionado fraude electoral.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen5.png" class="img-80 m-auto">
                                                </div>
                                                <div>
                                                    <p class="p_white justificado">Publicación en El Tiempo, 17 de Enero de 1974</p>
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").attr('style', 'top: 45px;');
            $("#info_funcionalidad_1").attr('style', 'top: 45px; left: 330px;');
            break;
        case 11:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">En 1964 aparece el surgimiento de las FARC ligadas al Partido Comunista Colombiano (PCC) 1960, después de un tiempo, en 1993 estas dos organizaciones se separan.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 125px; left: 45px');
            break;
        case 12:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">En 1965 Camilo Torres consigue reunir el ejército de Liberación Nacional (ELN) junto con militantes del Movimiento Obrero Estudiantil Campesino (MOEC) el cual fue una guerrilla izquierdista fundada en 1959.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 311px;');
            break;
        case 13:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Partido Comunista Marxista Leninista (PCML)  y su brazo armado, el Ejército Popular de Liberación (EPL) creado en 1967.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_1").attr('style', 'top: 311px;');
            break;
        case 14:
           $("#info_funcionalidad_1").removeClass('d-none');
           $("#info_funcionalidad_2").removeClass('d-none');
           $("#info_funcionalidad_1").html(`
                                           <div class="cafe-c-1 radius-2 p-3">
                                               <p class="p_white justificado">Camilo Torres Restrepo (1929- 1966); 12 de marzo de 1965 en Medellín, lanza  la plataforma del Frente Unido de Movimientos Populares.</p>
                                           </div>
                                           `);
           $("#info_funcionalidad_2").html(`
                                           <div class="cafe-c-1 radius-2 p-3">
                                               <div class="d-flex">
                                                   <img src="assets/img/img_ova/Imagen6.jpg" class="img-50 m-auto">
                                               </div>
                                           </div>
                                           `);
           $("#info_funcionalidad_2").attr('style', 'top: 235px;');
           $("#info_funcionalidad_1").attr('style', 'top: 235px; left: 330px;');
            break;
        case 15:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Auge de la literatura latino americana. Publicación de “Cien Años de Soledad” por la Editorial Suramericana, Buenos Aires, en 1967. Gabriel García Márquez.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen7.jpg" class="img-80 m-auto">
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").attr('style', 'top: 235px;');
            $("#info_funcionalidad_1").attr('style', 'top: 235px; left: 330px;');
            break;
        case 16:
            $("#info_funcionalidad_1").removeClass('d-none');
            $("#info_funcionalidad_2").removeClass('d-none');
            $("#info_funcionalidad_1").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <p class="p_white justificado">Surgimiento del Nadaísmo, movimiento juvenil rebelde, liderado por Gonzalo Arango, cuyas manifestaciones dejaron un importante aporte literario.</p>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").html(`
                                            <div class="cafe-c-1 radius-2 p-3">
                                                <div class="d-flex">
                                                    <img src="assets/img/img_ova/Imagen8.jpg" class="img-50 m-auto">
                                                </div>
                                            </div>
                                            `);
            $("#info_funcionalidad_2").attr('style', 'top: 235px;');
            $("#info_funcionalidad_1").attr('style', 'top: 235px; left: 330px;');
            break;
        default:
            break;
    }
}

function funcionalidad_2(num) {
    $(".comprension-circulo-1, .comprension-circulo-2, .comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5, .comprension-circulo-6").removeClass('bg-color-activi-o');
    $(".comprension-circulo-1, .comprension-circulo-2, .comprension-circulo-3, .comprension-circulo-4, .comprension-circulo-5, .comprension-circulo-6").addClass('bg-rojo-1');
    $("#info_funcionalidad").addClass('d-none');
    switch(parseInt(num)){
        case 1:
            $("#info_funcionalidad").removeClass('d-none');
            $("#info_funcionalidad").html(`
                                        <p class="justificado p_white">El derecho de los estudiantes a darse un gobierno propio. Autonomía administrativa y académica.</p>
                                        `);
            $(".comprension-circulo-1").removeClass('bg-rojo-1');
            $(".comprension-circulo-1").addClass('bg-color-activi-o');
            break;
        case 2:
            $("#info_funcionalidad").removeClass('d-none');
            $("#info_funcionalidad").html(`
                                        <p class="justificado p_white">El reclamo de un principio de autoridad fundamentado en el vínculo espiritual del amor de los profesores a los estudiantes, más que en reglamentos, estatutos o disciplinas impositivas.</p>
                                        `);
            $(".comprension-circulo-2").removeClass('bg-rojo-1');
            $(".comprension-circulo-2").addClass('bg-color-activi-o');
            break;
        case 3:
            $("#info_funcionalidad").removeClass('d-none');
            $("#info_funcionalidad").html(`
                                        <p class="justificado p_white">El imperio de la ciencia sobre los intereses burocráticos y personalistas.</p>
                                        `);
            $(".comprension-circulo-3").removeClass('bg-rojo-1');
            $(".comprension-circulo-3").addClass('bg-color-activi-o');
            break;
        case 4:
            $("#info_funcionalidad").removeClass('d-none');
            $("#info_funcionalidad").html(`
                                        <p class="justificado p_white">Ejercicio de la insurrección y la violencia, para asegurar el respeto a la dignidad, a la verdad, a la democracia y a la reivindicación de los derechos estudiantiles.</p>
                                        `);
            $(".comprension-circulo-4").removeClass('bg-rojo-1');
            $(".comprension-circulo-4").addClass('bg-color-activi-o');
            break;
        case 5:
            $("#info_funcionalidad").removeClass('d-none');
            $("#info_funcionalidad").html(`
                                        <p class="justificado p_white">Rechazo a la hipocresía, falsa moral y clericalismo imperantes en los claustros universitarios.</p>
                                        `);
            $(".comprension-circulo-5").removeClass('bg-rojo-1');
            $(".comprension-circulo-5").addClass('bg-color-activi-o');
            break;
        case 6:
            $("#info_funcionalidad").removeClass('d-none');
            $("#info_funcionalidad").html(`
                                        <p class="justificado p_white">Invitación a las juventudes de América a defender sus derechos en el ámbito universitario, conforme a los postulados de este Manifiesto.</p>
                                        `);
            $(".comprension-circulo-6").removeClass('bg-rojo-1');
            $(".comprension-circulo-6").addClass('bg-color-activi-o');
            break;
        default:
            break;
    }
}

function funcionalidad_3(num) {
    if (num == 1) {
        $("#info_funcionalidad_3").html(`
                                        <div class="bg-color-activi-c radius-2 img-70 m-auto d-flex">
                                            <div class="p_white p-3 text-center img-50">
                                              <p>Con el fin de ampliar la temática del manifiesto de córdoba, realice  la lectura del documento PDF “Manifiesto de córdoba”. Lo anterior permitirá realizar un paralelo de lo que veremos en la unidad 3.</p>
                                              <br>
                                              <p>Haga clic en el botón PDF.</p>
                                            </div>
                                            <div class="img-50 d-flex">
                                                <a href="assets/PDF/UNIDAD 1/pdf-1.pdf" target="_blank" class="img-60 m-auto"><img src="assets/img/img_ova/pdf.png" class="img-100 m-auto"></a>
                                            </div>
                                        </div>
                                        `);
    }else if (num == 2) {
        $("#info_funcionalidad_3_2").html(`
                                        <div class="bg-color-activi-c radius-2 img-100 m-auto d-flex">
                                            <div class="p_white p-3 text-center img-65">
                                              <p>Para ampliar el tema tratado realizar la lectura del (Art. 6º, inc. 2º) del PDF <b>“Estatutos UNAULA 2018”</b> el cual servirá para complementar el tema y desarrollar la actividad evaluativa que se encuentra al final de este contenido digital.</p>
                                              <br>
                                              <p>Haga clic en el botón PDF.</p>
                                            </div>
                                            <div class="img-35 d-flex">
                                                <a href="assets/PDF/UNIDAD 1/pdf-2.pdf" target="_blank" class="img-60 m-auto"><img src="assets/img/img_ova/pdf.png" class="img-100 m-auto"></a>
                                            </div>
                                        </div>
                                        `);
    }else if (num == 3) {
        $("#info_funcionalidad_3_3").html(`
                                        <div class="bg-color-activi-c radius-2 img-100 m-auto row">
                                            <div class="col-md-12 d-flex">
                                                <img src="assets/img/img_ova/grupo-personas.png" class="position-relative img-40 m-auto" style="top: -40px;">
                                            </div>
                                            <div class="p_white text-center col-md-12">
                                              <p>Con el fin de exponer sus percepciones y puntos de vista acerca del proceso de fundación de la universidad Autónoma Latinoamericana. Visite y participe en el foro <b>“Fundación de la Universidad Autónoma Latinoamericana. UNAULA”.</b></p>
                                            </div>
                                        </div>
                                        `);
    }
}

function funcionalidad_4(num) {
    $(".info_funcionalidad_4_1, .info_funcionalidad_4_2").removeClass('bg-blanco');
    $(".info_funcionalidad_4_1, .info_funcionalidad_4_2").addClass('bg-morado');
    $(".info_funcionalidad_4_1").html(`
                                        <p class="p_white bg-morado p-3 text-center">Acta de fundación</p>
                                        <div class="p-3 d-flex">
                                            <img class="img-80 m-auto" src="assets/img/img_ova/documentos.png">
                                        </div>
                                        `);
    $(".info_funcionalidad_4_2").html(`
                                        <p class="p_white bg-morado p-3 text-center">Manifiesto de córdoba</p>
                                        <div class="p-3 d-flex">
                                            <img class="img-80 m-auto" src="assets/img/img_ova/contrato.png">
                                        </div>
                                        `);
    switch(parseInt(num)){
        case 1:
            $(".info_funcionalidad_4_1").removeClass('bg-morado');
            $(".info_funcionalidad_4_1").addClass('bg-blanco');
            $(".info_funcionalidad_4_1").html(`
                                        <p class="p_white bg-morado p-3 text-center">Acta de fundación</p>
                                        <div class="<div class="p-3 d-flex">
                                            <ul class="p_black">
                                                <li>En cuanto al gobierno, el Acta lo asigna a estudiantes y profesores paritariamente (cogobierno). </li>
                                                <li>El Acta puso punto final al movimiento estudiantil de los años 60, en Antioquia  con la fundación de UNAULA.</li>
                                                <li>El Acta no contempla la insurrección ni la violencia.</li>
                                                <li>El Acta es la concreción de  los principios filosóficos de UNAULA.</li>
                                            </ul>
                                        </div>
                                        `);
            $(".comprension-circulo-1").removeClass('bg-rojo-1');
            $(".comprension-circulo-1").addClass('bg-color-activi-o');
            break;
        case 2:
            $(".info_funcionalidad_4_2").removeClass('bg-morado');
            $(".info_funcionalidad_4_2").addClass('bg-blanco');
            $(".info_funcionalidad_4_2").html(`
                                        <p class="p_white bg-morado p-3 text-center">Manifiesto de córdoba</p>
                                        <div class="<div class="p-3 d-flex">
                                            <ul class="p_black">
                                                <li>El Manifiesto, lo confiere en principio, a los estudiantes  exclusivamente y luego lo reduce a una mera participación de éstos en los órganos de gobierno.</li>
                                                <li>El Manifiesto motivó la revolución estudiantil no sólo en Córdoba, sino también en Latinoamérica y en el mundo.</li>
                                                <li>El Manifiesto expresamente invita a su ejercicio como expresión de un derecho y como medio  para lograr  las reivindicaciones anheladas.</li>
                                                <li>El Manifiesto es una declaración general e idealista.</li>
                                            </ul>
                                        </div>
                                        `);
            $(".comprension-circulo-2").removeClass('bg-rojo-1');
            $(".comprension-circulo-2").addClass('bg-color-activi-o');
            break;
        default:
            break;
    }
}

function funcionalidad_5(num) {
     $("#info-slider").html('');
     $("#info-slider-2").html('');
    switch(parseInt(num)){
        case 1:
            $("#info-slider").html(`
                                        <p class="p_black justificado">Por lo anterior, no solo en los aspectos mencionados, sino en su integridad y alcance, en primer lugar, se anunciarán las decisiones tomadas, para luego correlacionarlas, de manera ordenada, con las fundamentaciones que las sustentan y a través de esa correlación, se deducirán los principios que inspiraron a los fundadores para la creación de UNAULA, como una universidad diferente de aquellas contra las cuales ellos protestaron.</p>
                                        `);
            break;
        case 2:
            $("#info-slider-2").html(`
                                        <div class="radius-2 bg-blanco my-0 p-3 mx-3">
                                            <p class="p_black justificado">Fundar la Universidad Autónoma Latinoamericana con sede en Medellín, que con base en el cogobierno de estudiantes y profesores, dentro de un ambiente de absoluta libertad científica de estricta disciplina académica. Proporcionar a quienes así lo desearan los medios educativos que, como institución de educación Superior, constituían su objetivo primordial permitir a sus estudiantes formarse como ciudadanos al servicio de la comunidad.</p>
                                        </div>
                                        `);
            break;
        default:
            break;
    }
}

function funcionalidad_6(num) {
     $(".funcionalidad_6_1, .funcionalidad_6_2, .funcionalidad_6_3").addClass('d-none');
     $(".funcionalidad_6_1, .funcionalidad_6_2, .funcionalidad_6_3").removeClass('d-flex');
    switch(parseInt(num)){
        case 1:
            $(".funcionalidad_6_1").removeClass('d-none');
            $(".funcionalidad_6_1").removeClass('d-flex');
            break;
        case 2:
            $(".funcionalidad_6_2").removeClass('d-none');
            $(".funcionalidad_6_2").removeClass('d-flex');
            break;
        case 3:
            $(".funcionalidad_6_3").removeClass('d-none');
            $(".funcionalidad_6_3").removeClass('d-flex');
            break;
        default:
            break;
    }
}

function funcionalidad_7(num) {
     $(".funcionalidad_7_1, .funcionalidad_7_2, .funcionalidad_7_3, .funcionalidad_7_4, .funcionalidad_7_5, .funcionalidad_7_6").addClass('d-none');
    switch(parseInt(num)){
        case 1:
            $(".funcionalidad_7_1").removeClass('d-none');
            break;
        case 2:
            $(".funcionalidad_7_2").removeClass('d-none');
            break;
        case 3:
            $(".funcionalidad_7_3").removeClass('d-none');
            break;
        case 4:
            $(".funcionalidad_7_4").removeClass('d-none');
            break;
        case 5:
            $(".funcionalidad_7_5").removeClass('d-none');
            break;
        case 6:
            $(".funcionalidad_7_6").removeClass('d-none');
            break;
        default:
            break;
    }
}