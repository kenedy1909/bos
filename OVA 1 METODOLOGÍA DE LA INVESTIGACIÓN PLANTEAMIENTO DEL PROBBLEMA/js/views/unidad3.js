$(document).ready(function() {
    $(".ov-personaje").hide();
    $(".menu3").removeClass('d-none');

    $(".menu3").addClass('c-show');
    $(".menu2").removeClass('c-show');
    $(".menu1").removeClass('c-show');
    $(".menu4").removeClass('c-show');

    
    star_uni = 3;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');


    tema = 1;
    /*slide_link3(tema);*/
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
    $(".linkactividades").attr('href', urlsite + '/course/view.php?id=' + courseid);

    $('#next').on('click', function() {
        $('#smartwizard').smartWizard("next");
        slide();
    });

    $('#prev').on('click', function() {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    slide_predeterminado3();
    console.log(tema);
    slide_link3(tema);

});
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function slide() {
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides3(stepIndex); 
    actualizarprogress(stepIndex+11);
}

function slide_predeterminado3() {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides3(1);
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link3(num) {
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num - 1);


    controlSlides3(num);


}

function controlSlides3(num) {
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            document.getElementById("next").style.display="block";
            document.getElementById("prev").style.display="none";
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 3;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            var pdf = `<div class="col-md-12">
                              <p class="p_white size_20">
                                  <a class="p_white size_20" href="assets/PDF/UNIDAD3/Elementos_fundamentales_para_plantear_un_problema.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf-gris.png"> Elementos fundamentales para plantear un problema <b class="text-cafe"><u>Ver</u></b></a>
                              </p>
                              <p class="p_white">
                                 <a class="p_white size_20" href="assets/PDF/UNIDAD3/La_idea_en_la_investigación.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf-gris.png"> La idea en la investigación    <b class="text-cafe"><u>Ver</u></b></a>
                              </p>  
                            </div>`;

                            
            $('.pdfs').html(pdf);
            
            
            
            break;
        case 2:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            
            
            break;
        case 3:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            
            
            break;
        case 4:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            
            
            break;
        case 5:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            
            
            break;
        case 6:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            
            
            break;
        case 7:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            
            break;
        case 8:
            setMigaja("Unidades de aprendizaje", "3. Definición del problema ", "El problema en la investigación");
            cambiarColorMenu(13);
            document.getElementById("next").style.display="none";
            document.getElementById("prev").style.display="block";
            $(".menu1").addClass('d-none');
            $(".menu2").addClass('d-none');
            $(".menu3").addClass('d-none');
            $(".menu4").addClass('d-none');
            $(".ov-personaje").show();
            tema = 1;
            break;
        default:
            break;
    }
}


//dezlizador
var elementoPadre1 = document.querySelector(".inputDiv.i1");
var elementoPadre2 = document.querySelector(".inputDiv.i2");
var inputsRy = [];

function Input() {
    //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
    this.att = {};
    this.att.type = "range";
    this.att.value = 0;
    this.att.min = 1;
    this.att.max = 5;
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
        pantallas3_1(this.input.value);
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
    (function(n) {
        inputsRy[n].input.addEventListener("input", function() {
            inputsRy[n].actualizar();
        }, false)
    }(n));
}

function pantallas3_1(num) {
    switch (parseInt(num)) {
        case 1:
            var img = `<img src="assets/img/img_ova/paso1.png" style="max-width: 100%;">`;
            $('.imp_img').html(img);
            $('.texto').text('1. Objetivos');
            break;
        case 2:
            var img = `<img src="assets/img/img_ova/paso2.png" style="max-width: 100%;">`;
            $('.imp_img').html(img);
            $('.texto').text('2. Preguntas para iniciar su investigación.');
            break;
        case 3:
            var img = `<img src="assets/img/img_ova/paso3.png" style="max-width: 100%;">`;
            $('.imp_img').html(img);
            $('.texto').text('3. Justificación.');
            break;
        case 4:
            var img = `<img src="assets/img/img_ova/paso4.png" style="max-width: 100%;">`;
            $('.imp_img').html(img);
            $('.texto').text('4. Viabilidad.');
            break;
        case 5:
            var img = `<img src="assets/img/img_ova/paso5.png" style="max-width: 100%;">`;
            $('.imp_img').html(img);
            $('.texto').text('5. Evaluación.');
            break;
        default:
            break;
    }
}

function pantalla3_2(num) {
    switch (parseInt(num)) {
        case 1:
            var text = `
            <div class="col-md-6">
              <p class="justificado text-black" style="margin-top:40px;">Si tomamos la pregunta sobre “¿Cómo se relacionan los medios de comunicación colectiva con el voto?” </p><br>
              <p class="justificado text-black">Analizando cada parte encontramos:</p>
            </div>
            <div class="col-md-6 row">
              <div class="col-md-6" style="margin-top:25px;">
                <div class="arriba">
                  <p class="color-text"><b>Medios de comunicación</b></p>
                </div>
              </div>
              <div class="col-md-6" style="margin-top:25px;">
                <div class="arriba">
                  <p class="color-text" style="margin-top: 10px;"><b>Votos</b></p>
                </div>
              </div>
              <div class="col-md-6 text-center" data-toggle="modal" data-target="#modal3-medioscomu">
                                        <img src="assets/img/img_ova/medio.png" class="img-fluid cursor">

                                    </div>
                                    <div class="col-md-6 text-center" data-toggle="modal" data-target="#modal3-votos">
                                        <img src="assets/img/img_ova/votos.png" class="img-fluid cursor" style="margin-top:14px; width: 80%; height: 126px;">

                                    </div>
                                    <div class="col-md-12">
                                        <center>
                                            <p style="font-size: 13px;"><i>Haga clic en las imágenes para mejor visualización.</i></p>
                                        </center>
                                    </div>
            </div>`;

            $('.avance_blanco').removeClass('activa');
            $('.nav1').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na1').removeClass('inactivo');
            $('.na1').addClass('encendido');

            $('.cont3_2').html(text);
            break;
        case 2:
            var text = `
            <div class="col-md-6">
              <p class="justificado text-black" style="margin-top:40px;">¿Por qué hay más personas satisfechas en su trabajo que otras?</p><br>
              <p class="justificado text-black">
                ¿Cómo se relacionan los medios de comunicación colectiva con el voto?
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="assets/img/img_ova/conversation.png" class="" style="width: 40%; margin-top:20px;">
            </div>`;
            $('.avance_blanco').removeClass('activa');
            $('.nav2').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na2').removeClass('inactivo');
            $('.na2').addClass('encendido');

            $('.cont3_2').html(text);
            break;
        case 3:
            var text = `
              <div class="col-md-8">
                <p class="justificado text-black">Formular este tipo de preguntas origina una gran cantidad de dudas:</p>
                <p class="justificado sub_2 text-black" style="margin-top:40px;">¿Se investigarán los efectos que la difusión de propaganda política a través de estos medios, tienen en la conducta de los votantes?</p><br>
                <p class="justificado sub_2 text-black">
                  ¿Se analizará el papel de los medios como agentes de socialización política de los votantes?
                </p><br>
                <p class="justificado text-black">Es decir, no queda claro que se va a investigar.</p>
              </div>
              <div class="col-md-4 text-center">
                <img src="assets/img/img_ova/question.png" class="" style="width: 150px; margin-top: 40px;">
              </div>
            </div>`;
            $('.avance_blanco').removeClass('activa');
            $('.nav3').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na3').removeClass('inactivo');
            $('.na3').addClass('encendido');

            $('.cont3_2').html(text);
            break;
        case 4:
            var text = `
              <div class="col-md-8">
                <p class="justificado text-black" style="margin-top:40px;">Por lo tanto, se deben plantear preguntas mucho más específicas como</p><br>

                <p class="justificado sub_2 text-black">La exposición por parte de los votantes a los debates televisivos de los candidatos a la presidencia de Brasil, ¿Está correlacionada con la decisión de votar o abstenerse?.</p>
              </div>
              <div class="col-md-4 text-center">
                <img src="assets/img/img_ova/preguntas.png" class="" style="width: 150px; margin-top:40px;">
              </div>
            </div>`;
            $('.avance_blanco').removeClass('activa');
            $('.nav4').addClass('activa');

            $('.opcion_p2_2').removeClass('encendido');
            $('.opcion_p2_2').addClass('inactivo');

            $('.na4').removeClass('inactivo');
            $('.na4').addClass('encendido');

            $('.cont3_2').html(text);
            break;

        default:
            break;
    }
}

function efect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').addClass('crece');
            $('.div_texto').addClass('visibilidad');
            break;
        case 2:
            $('.creciente2').addClass('crece');
            $('.div_texto2').addClass('visibilidad');
            break;
        case 3:
            $('.creciente3').addClass('crece');
            $('.div_texto3').addClass('visibilidad');
            break;
        case 4:
            $('.creciente4').addClass('crece');
            $('.div_texto4').addClass('visibilidad');
            break;
        case 5:
            $('.creciente5').addClass('crece');
            $('.div_texto5').addClass('visibilidad');
            break;
        case 6:
            $('.creciente6').addClass('crece');
            $('.div_texto6').addClass('visibilidad');
            $('.btn_modal').html('<button data-toggle="modal" data-target="#modal3-4" class="btn" style="background: #482649;color: white;font-size: 18px; border-radius: 15px;">Ver aquí ejemplo de preguntas de investigación</button>');
            break;
        default:
            break;
    }

}

function removeefect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').removeClass('crece');
            $('.div_texto').removeClass('visibilidad');
            break;
        case 2:
            $('.creciente2').removeClass('crece');
            $('.div_texto2').removeClass('visibilidad');
            break;
        case 3:
            $('.creciente3').removeClass('crece');
            $('.div_texto3').removeClass('visibilidad');
            break;
        case 4:
            $('.creciente4').removeClass('crece');
            $('.div_texto4').removeClass('visibilidad');
            break;
        case 5:
            $('.creciente5').removeClass('crece');
            $('.div_texto5').removeClass('visibilidad');
            break;
        case 6:
            $('.creciente6').removeClass('crece');
            $('.div_texto6').removeClass('visibilidad');
            break;
        default:
            break;
    }

}