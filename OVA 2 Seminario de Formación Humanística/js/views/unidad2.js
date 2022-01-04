$( document ).ready(function() {

    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    star_uni = 2;
    paso = false;
    $('.js_uni').html('<script src="js/views/unidades.js"></script>');
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
    slide_predeterminado();

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
    });

    $(".int1").on("click", function () {
        $(".tarjetas").hide()
        $(".tarjeta1").show(400)
    })
    $(".int2").on("click", function () {
        $(".tarjetas").hide()
        $(".tarjeta2").show(400)
    })
    $(".int3").on("click", function () {
        $(".tarjetas").hide()
        $(".tarjeta3").show(400)
    })
    $(".int4").on("click", function () {
        $(".tarjetas").hide()
        $(".tarjeta4").show(400)
    })
    $(".int5").on("click", function () {
        $(".tarjetas").hide()
        $(".tarjeta5").show(400)
    })

    $(".collapse1").on("click", function () {
        $(".collapses").hide()
        $(".pcollapse1").show(500)
    })
    $(".collapse2").on("click", function () {
        $(".collapses").hide()
        $(".pcollapse2").show(500)
    })

    $(".pergamino1").on("click", function () {
        $(".pergamino1").hide()
        $(".pergamino2").show()
        $("#text26").html("Para continuar con la información referente a los procesos de escritura haga clic en cada triangulo:")
    })

    $(".flecha1").on("click", function () {
        $(".pergaminos").hide()
        $(".pergaminop1").show()
    })

    $(".flecha2").on("click", function () {
        $(".pergaminos").hide()
        $(".pergaminop2").show()
    })

    $(".flecha3").on("click", function () {
        $(".pergaminos").hide()
        $(".pergaminop3").show()
    })

    $(".flecha4").on("click", function () {
        $(".pergaminos").hide()
        $(".pergaminop4").show()
    })


    $(".btn_planificacion").on("click", function () {
        $(".textos8").hide()
        $(".textos8-1").show()
    })
    $(".btn_indagacion").on("click", function () {
        $(".textos8").hide()
        $(".textos8-2").show()
    })
    $(".btn_revision").on("click", function () {
        $(".textos8").hide()
        $(".textos8-3").show()
    })
    $(".btn_redaccion").on("click", function () {
        $(".textos8").hide()
        $(".textos8-4").show()
    }) 

    $(".btnp1").on("click", function() {
        $(".btninicio").hide();
        $(".pantalla2").show();
    })

    $(".btnp2").on("click", function() {
        $(".btninicio").hide();
        $(".pantalla4").show();
    })

    $(".btnp3").on("click", function() {
        $(".btninicio").hide();
        $(".pantalla5").show();
    })

    $(".modalp10").on("click", function() {
        $(".pantalla2").hide();
        $(".pantalla3").show();
    })

    $(".p10inicio").on("click", function() {
        $(".pantalla3").hide();
        $(".pantalla4").hide();
        $(".pantalla5").hide();
        $(".btninicio").show();
    })

    $(".i12-1").on("click", function() {
        $(".p12").hide();
        $(".p12-1").show();
    })
    $(".i12-2").on("click", function() {
        $(".p12").hide();
        $(".p12-2").show();
    })
    $(".i12-3").on("click", function() {
        $(".p12").hide();
        $(".p12-3").show();
    })
    $(".i12-4").on("click", function() {
        $(".p12").hide();
        $(".p12-4").show();
    })
    $(".i12-5").on("click", function() {
        $(".p12").hide();
        $(".p12-5").show();
    })
    canvas_1();

    $(".circle-verde").on('click' , circles);
    $(".rec").on('click' , rec);
    var slideCount = "";
    var slideWidth = "";
    var slideHeight = "";
    var slider_num = "";
    /*funcion_vanvas();
    funcion_canvas2();*/
    setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    slide_link(tema);
    
});
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD2/Tipos-de-prrafo.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> Tipos de parrafo.pdf <b class="text-cafe"><u> Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD2/Elenunciadoyeltexto.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> El enunciado y el texto.pdf <b class="text-cafe"><u> Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function hoverp41(argument) {
    $(".p4-2").show(200)
}

function hoverp42(argument) {
    $(".p4-4").show(200)
}

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
    actualizarprogress(stepIndex+20+1);
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
    slideCount = "";
    slideWidth = "";
    slideHeight = "";
    slider_num = "";
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            /*$("#content-ova").load("base/unidades/unidad1.html");
            tema = 5;*/
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de lectura y comunicación");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            slideCount = $('#slider-3 ul li').length;
            slideWidth = $('#slider-3 ul li').width();
            slideHeight = $('#slider-3 ul li').height();
            slider_num = "#slider-3";
            slider_all();
            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];  
            var i = new Input(4);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(4);
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
        case 11:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            slideCount = $('#slider-4 ul li').length;
            slideWidth = $('#slider-4 ul li').width();
            slideHeight = $('#slider-4 ul li').height();
            slider_num = "#slider-4";
            slider_4();

            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];  
            var i = new Input(4);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(4);
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
        case 12:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            $(".i3").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];  
            var i = new Input(4);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(4);
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
        case 13:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        case 15:
            
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","2. Desarrollo de la comunicación","Procesos de escritura");
            break;
        
        default:
            break;
    }
}

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

  function scroll_horizontal(num){
    $(".zoomContainer" ).remove();
    switch (parseInt(num)) {
        case 0:
            var info_scroll = `
                            <p class="caja-texto-b justificado font13 col-md-6 p12-1 p12">
                                <b >Receptor:</b> puede ser una persona o idea. La finalidad es convencerle o persuadirle sobre la validez del propio punto de vista. 
                            </p>
                            `;
            $('#info-scroll2').html(info_scroll);
            break;
        case 1:
            var info_scroll = `
                            <p class="caja-texto-b justificado font13 col-md-6 p12-2 p12">
                                <b >Objeto:</b> es el tema frente al cual se genera la discusión y sobre el cual se debe argumentar. 
                            </p>
                            `;
            $('#info-scroll2').html(info_scroll);
            break;
        case 2:
            var info_scroll = `
                            <p class="caja-texto-b justificado font13 col-md-6 p12-3 p12">
                                <b >Tesis o idea:</b> implica una actitud y opinión sobre el tema u objeto. Es la afirmación concreta que se pretende defender o refutar. 
                            </p>
                            `;
            $('#info-scroll2').html(info_scroll);
            break;
        case 3:
            var info_scroll = `
                            <p class="caja-texto-b justificado font13 col-md-6 p12-4 p12">
                                <b >Argumentos:</b> son las razones válidas que se utilizan para justificar la propia tesis o posición. 
                            </p>
                            `;
            $('#info-scroll2').html(info_scroll);
            break;
        case 4:
            var info_scroll = `
                            <p class="caja-texto-b justificado font13 col-md-6 p12-5 p12">
                                <b >Conflictividad:</b> es la disputa entre dos posturas opuestas frente a un mismo tema. El tema sobre el que se debate debe ser polémico, razón por la cual se hace justamente necesario argumentar a favor o en contra de una idea concreta. 
                            </p>
                            `;
            $('#info-scroll2').html(info_scroll);
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

function circles() {
    var circle_num = $(this).data('circle');
    $(".circle-verde").removeClass('bg-circle-v-o');
    $(".circle-verde").addClass('bg-circle-v-c');
    $(".circle-verde-"+circle_num).removeClass('bg-circle-v-c');
    $(".circle-verde-"+circle_num).addClass('bg-circle-v-o');
    if (circle_num >2 && circle_num <6) {
        $(".circle-verde-3").removeClass('bg-circle-a-o');
        $(".circle-verde-4").removeClass('bg-circle-a-o');
        $(".circle-verde-5").removeClass('bg-circle-a-o');
        $(".circle-verde-3").addClass('bg-circle-a-c');
        $(".circle-verde-4").addClass('bg-circle-a-c');
        $(".circle-verde-5").addClass('bg-circle-a-c');
    }
    if (circle_num == 1) {
        var texto = `
                      Recordemos que en la alta edad media los señores Feudales construían grandes castillos con propósitos de defensa. En torno a estas edificaciones llamadas Burgos, empezaron a crearse pueblos de mercaderes y artesanos que aprovechaban la seguridad brindada por el Feudal, para desempeñar su labor.
                    `;
        $("#info-circle").html(texto);
    }else if (circle_num == 2) {
        var texto = `
                      El taller adquiere gran importancia y, debido a los desarrollos científicos, se empiezan a tecnificar hasta convertirse en fábricas. Se inicia así, en el siglo XVIII, la Revolución Industrial: A partir de allí, empieza un proceso de expansión que se extendió hasta finales del siglo XX. <br>
 
                      <a class="btn btn-warning" target="_blank" class=" font13 justificado" href="https://www.youtube.com/watch?v=3LQAnFEADl4&ab_channel=AcademiaPlay">VER VIDEO</a> 

                    `;
       $("#info-circle").html(texto);
    }else if (circle_num == 3) {
        $(".circle-verde-"+circle_num).removeClass('bg-circle-a-c');
        $(".circle-verde-"+circle_num).addClass('bg-circle-a-o');
        var texto = `
                    La guerra civil norteamericana no se libró exclusivamente, como muchos creían, por la cuestión moral de la esclavitud ni por cuestiones económicas tan mezquinas como la relativa a los aranceles. Se libró por una cuestión de alcance mucho mayor: ¿iba a ser gobernado el Nuevo Continente por los granjeros o por los industrializadores?; ¿por las fuerzas de la primera ola o por las de la segunda ola?  Cuando los ejércitos del Norte vencieron, la suerte quedó echada.
                    `;
        $("#info-circle-a").html(texto);
    }else if (circle_num == 4) {
        $(".circle-verde-"+circle_num).removeClass('bg-circle-a-c');
        $(".circle-verde-"+circle_num).addClass('bg-circle-a-o');
        var texto = `
                    La Industrialización de los Estados Unidos de América estaba asegurada. A partir de ese momento, en política y en la vida social y cultural, la agricultura fue batiéndose en retirada y comenzó a ganar preponderancia la industria. La primera ola fue perdiendo ímpetu mientras avanzaba, incontenible, la segunda ola (Daros, s.f, pág. 4).
                    `;
        $("#info-circle-a").html(texto);
    }else if (circle_num == 5) {
        $(".circle-verde-"+circle_num).removeClass('bg-circle-a-c');
        $(".circle-verde-"+circle_num).addClass('bg-circle-a-o');
        var texto = `
                    Es solo un ejemplo del proceso de expansión de una visión del mundo que ya ajusta más de 500 años, y que parece tan arraigada en nosotros que no se concibe otra forma de pensar nuestra realidad.
                    `;
        $("#info-circle-a").html(texto);
    }else if (circle_num == 6) {
        $("#info-circle-t").html(`<img class="img-100" src="assets/img/img_ova/tecnologica1.png">`);
    }else if (circle_num == 7) {
        $("#info-circle-t").html(`<img class="img-100" src="assets/img/img_ova/tecnologica2.png">`);
    }
}

function rec() {
    var rec_num = $(this).data('rec');
    if (rec_num == 1) {
        $("#rec").html(
                `<div class="col-md-12">
                  <div class="col-md-12 row imprime">
                    <div class="col-md-5">
                      <p class="justificado">1. Presentar un <b>atributo global</b>  y a su vez <b>acumulativo</b>, que repercute en las ideologías ya establecidas, en nuevas técnicas y en el desarrollo de conocimientos, probablemente por la consideración de libertad del hombre que muestra en esta etapa un anhelo por adquirir conocimiento a través de sí mismo</p>
                    </div>
                    <div class="col-md-7">
                       <p class="text-center p_black">clic a la imagen</p>
                      <img src="assets/img/img_ova/comentario2.png" data-toggle="modal" data-target="#modal-img-1" style="max-width: 100%;">
                    </div>
                  </div>
                </div>
                
                <div class="col-md-12 d-flex justify-content-center">
                  <div class="circulo_verde activo uno cursor" style="" onclick="circlerec(1);"></div>
                  <div class="circulo_verde dos cursor" style="" onclick="circlerec(2);"></div>
                </div>`
            );
    }else if (rec_num == 2) {
        $("#rec").html('<p class="text-center p_black">clic a la imagen</p><img src="assets/img/img_ova/infografia1.png" style="max-width: 100%;" data-toggle="modal" data-target="#modal-img-2">');
    }else if (rec_num == 3) {
        $("#rec").html(
                    `
                    <p class="text-center p_black">clic a la imagen</p>
                    <div id="slider-2" style="" class="d-flex justify-content-end col-md-10 pr-5">

                      <ul class="img-100">
                        <li>
                          <div class="row" data-toggle="modal" data-target="#modal-img-3">
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-1.png" style="max-width: 80%;">
                            </div>
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-2.png" style="max-width: 80%;">
                            </div>
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-3.png" style="max-width: 80%;">
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="row" data-toggle="modal" data-target="#modal-img-4">
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-4.png" style="max-width: 80%;">
                            </div>
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-5.png" style="max-width: 80%;">
                            </div>
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-6.png" style="max-width: 80%;">
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="row" data-toggle="modal" data-target="#modal-img-5">
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-7.png" style="max-width: 80%;">
                            </div>
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-8.png" style="max-width: 80%;">
                            </div>
                            <div class="col-md-12">
                              <img src="assets/img/img_ova/circulo-9.png" style="max-width: 80%;">
                            </div>
                          </div>
                        </li>
                      </ul>  
                      
                    </div>
                    <div class="col-md-2" style="padding-top: 100px;">
                      <a href="#" class="control_next"><div style="" class="triag_cambiaslide"></div></a>
                    </div>`
            );
        slideCount = $('#slider-2 ul li').length;
        slideWidth = $('#slider-2 ul li').width();
        slideHeight = $('#slider-2 ul li').height();
        slider();
    }else if (rec_num == 4) {
        $("#rec").html(
                `<div id="slider" style="" class="d-flex justify-content-center col-md-10">

                  <ul>
                    <li>
                      <p class="justificado">El hombre se emancipa de la autoridad religiosa y ahora presenta un anhelo por hacer de la razón su fundamento para explorar y conocer la vida, en un sentimiento de libertad, comprende que a través de su razón puede aprender y actuar sin una coacción externa. En la Revista de Artes y Humanidades UNICA, Ávila (2010) menciona que “La idea de modernidad sustituye, en el centro de la sociedad, a Dios por la ciencia y deja las creencias religiosas para el seno de la vida privada” (p. 168). Lo anterior comprendiendo que la religión ejercía dominio sobre el pensamiento, lo que incluso genera dificultad en este nuevo actuar independiente del hombre, llegando al punto de considerarse el razonamiento como herejía (Revuelta, 1990); no obstante, se avanza en una pretensión de descubrir.</p>
                    </li>
                    <li>
                      <p class="justificado">El culto a la racionalidad deriva en una racionalización de la vida colectiva y personal; surge así la regulación y el control como un proceso subyacente a todas las esferas. La tecnificación de los procesos productivos se extiende hacia la tecnificación de todas las acciones personales; la planificación, la burocracia y la deshumanización de los procesos surgen como resultado del culto a la eficiencia.</p>
                    </li>
                    
                  </ul>
                </div>
                <div class="col-md-2" style="padding-top: 100px;">
                  <a href="#" class="control_next"><div style="" class="triag_cambiaslide"></div></a>
                </div>`
            );
        slideCount = $('#slider ul li').length;
        slideWidth = $('#slider ul li').width();
        slideHeight = $('#slider ul li').height();
        slider2();
    }else if (rec_num == 5) {
        $("#rec").html('<p class="justificado p-4">El desarrollo del conocimiento científico y el reconocimiento de la racionalidad como fundamento de lo humano crearon la idea del hombre como centro de la vida (antropocentrismo), y de allí surge el control de la naturaleza como premisa legítima. De igual forma las demandas energéticas propias del desarrollo industrial y de la modernización de las ciudades, trajo consigo una amplia actividad extractiva con fuerte impacto sobre la naturaleza. Todo esto basado en la oposición entre lo natural y por ende entre la naturaleza y el hombre.</p>');
    }else if (rec_num == 6) {
        $("#rec").html(
            `<div class="col-md-12 row">
              <div class="col-md-5">
                <p>6.   Naturalización de la vida social tras el desarrollo de la ciencia que permitió desentrañar las leyes de la naturaleza, lo que devino en el determinismo, esto es, la capacidad de predecir los eventos futuros gracias al reconocimiento de las leyes que gobiernan la naturaleza.  Este conocimiento se traslada al ámbito de la vida social, la formulación de la Teoría de la Evolución de Darwin afincó la idea de la selección natural como clave de la evolución</p>
              </div>
              <div class="col-md-7">
              <p class="text-center p_black">clic a la imagen</p>
                <img src="assets/img/img_ova/comentario.png" style="max-width: 100%;" data-toggle="modal" data-target="#modal-img-6">
              </div>
            </div>`
        );
    }
}

function circlerec(num){
    switch(parseInt(num)){
        case 1:
            var cont = `
            <div class="col-md-5">
              <p class="justificado">1. Presentar un <b>atributo global</b>  y a su vez <b>acumulativo</b>, que repercute en las ideologías ya establecidas, en nuevas técnicas y en el desarrollo de conocimientos, probablemente por la consideración de libertad del hombre que muestra en esta etapa un anhelo por adquirir conocimiento a través de sí mismo</p>
            </div>
            <div class="col-md-7">
               <p class="text-center p_black">clic a la imagen</p>
              <img src="assets/img/img_ova/comentario2.png" data-toggle="modal" data-target="#modal-img-1" style="max-width: 100%;">
            </div>`;
            $('.imprime').html(cont);
            $('.circulo_verde').removeClass('active');
            $('.uno').addClass('active');
            break;
        case 2:
            var cont = `
            <img src="assets/img/img_ova/comentario3.png" style="max-width: 100%;">`;
            $('.imprime').html(cont);
            $('.circulo_verde').removeClass('active');
            $('.dos').addClass('active');
            break;
        default:
            break;
    }
}

function slider(){

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    /*var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();*/
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider-2').css({ width: '102%', height: '100%' });
    
    $('#slider-2 ul').css({ width: '80%', marginLeft: - slideWidth });
    
    $('#slider-2 ul li:last-child').prependTo('#slider-2 ul');

    function moveLeft() {
        $('#slider-2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider-2 ul li:last-child').prependTo('#slider-2 ul');
            $('#slider-2 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider-2 ul li:first-child').appendTo('#slider-2 ul');
            $('#slider-2 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
}

function slider2(){

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    /*var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();*/
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: '100%', height: '350px' });
    
    $('#slider ul').css({ width: '100%'});
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
}


function canvas_1() {
        var canvas = new fabric.Canvas('canvas1');
        var imgElement = 'assets/img/img_ova/b1.png';
        var imgElement2 = 'assets/img/img_ova/b2.png'; 
        var imgElement3 = 'assets/img/img_ova/b3.png';
        var imgElement4 = 'assets/img/img_ova/b4.png';
        var imgElement5= 'assets/img/img_ova/b5.png';
        var imgElement6 = 'assets/img/img_ova/b6.png';
        var imgElement7 = 'assets/img/img_ova/7.png';
        var imgElement8 = 'assets/img/img_ova/8.png';
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=0;
            oImg.top=200;
            oImg.scaleToHeight(50);
            oImg.scaleToWidth(50);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                $(".parr").hide();
                $(".parr1").show(300);           
            });
            
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=15;
            oImg2.top=120;
            oImg2.scaleToHeight(50);
            oImg2.scaleToWidth(50);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                $(".parr").hide();
                $(".parr2").show(300);           
            });
            
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=50;
            oImg3.top=50;
            oImg3.scaleToHeight(50);
            oImg3.scaleToWidth(50);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {  
                $(".parr").hide();
                $(".parr3").show(300);            
            });
            
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=120;
            oImg4.top=0;
            oImg4.scaleToHeight(50);
            oImg4.scaleToWidth(50);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                $(".parr").hide();
                $(".parr4").show(300);      
            });
            
        });
        fabric.Image.fromURL(imgElement5, function(oImg5) {
            oImg5.left=200;
            oImg5.top=0;
            oImg5.scaleToHeight(50);
            oImg5.scaleToWidth(50);
            oImg5.selectable = false;
            canvas.add(oImg5);

            oImg5.on('mouseup', function() {
                $(".parr").hide();
                $(".parr5").show(300);     
            });
            
        });

        fabric.Image.fromURL(imgElement6, function(oImg6) {
            oImg6.left=275;
            oImg6.top=50;
            oImg6.scaleToHeight(50);
            oImg6.scaleToWidth(50);
            oImg6.selectable = false;
            canvas.add(oImg6);

            oImg6.on('mouseup', function() {
                $(".parr").hide();
                $(".parr6").show(300);      
            });
            
        });

        fabric.Image.fromURL(imgElement7, function(oImg7) {
            oImg7.left=330;
            oImg7.top=120;
            oImg7.scaleToHeight(50);
            oImg7.scaleToWidth(50);
            oImg7.selectable = false;
            canvas.add(oImg7);

            oImg7.on('mouseup', function() {
                $(".parr").hide();
                $(".parr7").show(300);      
            });
            
        });

        fabric.Image.fromURL(imgElement8, function(oImg8) {
            oImg8.left=350;
            oImg8.top=190;
            oImg8.scaleToHeight(50);
            oImg8.scaleToWidth(50);
            oImg8.selectable = false;
            canvas.add(oImg8);

            oImg8.on('mouseup', function() {
                $(".parr").hide();
                $(".parr8").show(300);     
            });
            
        });
        
    }


function slider_all(){
  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
    var sliderUlWidth = "";
    /*var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();*/
    sliderUlWidth = slideCount * slideWidth;
    
    $(slider_num).css({ width: '100%', height: '350px' });
    
    $(slider_num+' ul').css({ width: '100%'});
    
    $(slider_num+' ul li:last-child').prependTo(slider_num+' ul');

    function moveLeft() {
        $(slider_num+' ul').animate({
            left: + slideWidth
        }, 200, function () {
            $(slider_num+' ul li:last-child').prependTo(slider_num+' ul');
        });
    };

    function moveRight() {
        $(slider_num+' ul').animate({
            left: - slideWidth
        }, 200, function () {
            $(slider_num+' ul li:first-child').appendTo(slider_num+' ul');
            $(slider_num+' ul').css('left', '');
        });
    };

    $('a.control_prev').off('click').on('click' ,moveLeft);
    $('a.control_next').off('click').on('click' ,moveRight);
    /*$('a.control_prev').click(function () {
        moveLeft();
    });*/

    /*$('a.control_next').click(function () {
alert();
        moveRight();
    });*/
}

function slider_5(){
  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
    var sliderUlWidth = "";
    /*var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();*/
    sliderUlWidth = slideCount * slideWidth;
    
    $(slider_num).css({ width: '100%', height: '100%' });
    
    $(slider_num+' ul').css({ width: '100%'});
    
    $(slider_num+' ul li:last-child').prependTo(slider_num+' ul');

    function moveLeft() {
        $(slider_num+' ul').animate({
            left: + slideWidth
        }, 200, function () {
            $(slider_num+' ul li:last-child').prependTo(slider_num+' ul');
        });
    };

    function moveRight() {
        $(slider_num+' ul').animate({
            left: - slideWidth
        }, 200, function () {
            $(slider_num+' ul li:first-child').appendTo(slider_num+' ul');
            $(slider_num+' ul').css('left', '');
        });
    };

    $('a.control_prev').off('click').on('click' ,moveLeft);
    $('a.control_next').off('click').on('click' ,moveRight);
    /*$('a.control_prev').click(function () {
        moveLeft();
    });*/

    /*$('a.control_next').click(function () {
alert();
        moveRight();
    });*/
}

function slider_4(){
  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
    var sliderUlWidth = "";
    /*var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();*/
    sliderUlWidth = slideCount * slideWidth;
    
    $(slider_num).css({ width: '100%', height: '100%' });
    
    $(slider_num+' ul').css({ width: '100%'});
    
    $(slider_num+' ul li:last-child').prependTo(slider_num+' ul');

    function moveLeft() {
        $(slider_num+' ul').animate({
            left: + slideWidth
        }, 200, function () {
            $(slider_num+' ul li:last-child').prependTo(slider_num+' ul');
        });
    };

    function moveRight() {
        $(slider_num+' ul').animate({
            left: - slideWidth
        }, 200, function () {
            $(slider_num+' ul li:first-child').appendTo(slider_num+' ul');
            $(slider_num+' ul').css('left', '');
        });
    };

    $('a.control_prev').off('click').on('click' ,moveLeft);
    $('a.control_next').off('click').on('click' ,moveRight);
    /*$('a.control_prev').click(function () {
        moveLeft();
    });*/

    /*$('a.control_next').click(function () {
alert();
        moveRight();
    });*/
}

/*jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: '100%', height: slideHeight });
    
    $('#slider ul').css({ width: '70%', marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});*/