$( document ).ready(function() {
    $(".linkactividades").attr('href',urlsite+'course/view.php?id='+courseid);
    
    $( ".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".menu2").removeClass('d-none');
    $(".menu3").removeClass('d-none');
    $(".menu1").removeClass('c-show');
    $(".menu2").removeClass('c-show');
    $(".menu3").addClass('c-show');
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
    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        
        console.log(e);
        if (tema != 0) {
            controlSlides(tema+1);
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


    canvas_1();

    $(".circle-verde").on('click' , circles);
    $(".rec").on('click' , rec);
    var slideCount = "";
    var slideWidth = "";
    var slideHeight = "";
    var slider_num = "";
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    slide_link(tema);
    
});
var pdf = `<div class="col-md-12">
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD3/culturaySociedadCanclini.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> culturay Sociedad Canclini.pdf <b class="text-cafe"><u> Ver</u></b></a>
                  </p>
                  <p class="p_white">
                        <a href="assets/PDF/UNIDAD3/educacionParaUnNuevoHumanismo.pdf" target="_blank"> <img class="menu_superior w-40px" src="assets/img/img_template/pdf.png"> educacion Para Un Nuevo Humanismo.pdf <b class="text-cafe"><u> Ver</u></b></a>
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
    /*actualizarprogress(stepIndex+20+19+1);*/
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
    actualizarprogress(num+20+19);
    slideCount = "";
    slideWidth = "";
    slideHeight = "";
    slider_num = "";
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura "," La ética humanística");
            cambiarColorMenu(13);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            /*$("#content-ova").load("base/unidades/unidad1.html");
            tema = 5;*/
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura "," La ética humanística");
            /*setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura humanística");*/
            cambiarColorMenu(13);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura humanística");
            cambiarColorMenu(23);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            scroll_set(5);
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura humanística");
            cambiarColorMenu(23);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            $("#content").html('');
            $("#img_cont").html('');
            scroll_set(5);
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura humanística");
            /*setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura y educación");*/
            cambiarColorMenu(23);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            scroll_set(5);
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura y educación");
            cambiarColorMenu(33);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura y educación");
            cambiarColorMenu(33);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura y educación");
            cambiarColorMenu(33);
            $(".menu1").removeClass('d-none');
            $(".menu2").removeClass('d-none');
            $(".menu3").removeClass('d-none');
            $(".menu1").removeClass('c-show');
            $(".menu2").removeClass('c-show');
            $(".menu3").addClass('c-show');
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Cultura y educación");
            cambiarColorMenu(33);
            $(".menu1").addClass('d-none');
            $(".menu2").addClass('d-none');
            $(".menu3").addClass('d-none');
            break;
        /*case 9:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Formación de la sociedad moderna");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Promesas y crisis de la modernidad");
            slideCount = $('#slider-3 ul li').length;
            slideWidth = $('#slider-3 ul li').width();
            slideHeight = $('#slider-3 ul li').height();
            slider_num = "#slider-3";
            slider_all();
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Promesas y crisis de la modernidad");
            slideCount = $('#slider-4 ul li').length;
            slideWidth = $('#slider-4 ul li').width();
            slideHeight = $('#slider-4 ul li').height();
            slider_num = "#slider-4";
            slider_4();
            break;
        case 12:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","Promesas y crisis de la modernidad");
            $(".i1").html('')    
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];  
            var i = new Input(3);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(3);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
              (function(n) {
                inputsRy[n].input.addEventListener("input", function() {
                  inputsRy[n].actualizar2();
                }, false)
              }(n));
            }  
            break;
        case 13:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","La postmodernidad");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","La postmodernidad");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","La postmodernidad");
            slideCount = $('#slider-5 ul li').length;
            slideWidth = $('#slider-5 ul li').width();
            slideHeight = $('#slider-5 ul li').height();
            slider_num = "#slider-5";
            slider_5();
            break;
        case 16:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","La postmodernidad");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","La postmodernidad");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje","> 3. Ética y cultura ","");
            break;*/
        default:
            break;
    }
}


function scroll_set(num) {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob'+num);
    bar = document.querySelector('.custom-scrollbar__bar'+num);
    container = document.querySelector('.custom-scrollbar__inner'+num);
    scroll();
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

function aparecerLaterales(num) {
    
    $('.cardToogle').addClass('d-none');
    $('.bg-color-ova').removeClass('bg-azul');
    
    if (num == 1) {
        $('.cardToogle1').removeClass('d-none');
        $('.btnToogle1').addClass('bg-azul');
    }else if (num == 2) {
        $('.cardToogle2').removeClass('d-none');
        $('.btnToogle2').addClass('bg-azul');
    }else if (num == 3) {
        $('.cardToogle3').removeClass('d-none');
        $('.btnToogle3').addClass('bg-azul');
    }else if (num == 4) {
        $('.cardToogle4').removeClass('d-none');
        $('.btnToogle4').addClass('bg-azul');
    }else if (num == 5) {
        $('.cardToogle5').removeClass('d-none');
        $('.btnToogle5').addClass('bg-azul');
    }
}

function ficha(num,estado) {

    $('.ocultarFicha1, .ocultarFicha2, .ocultarFicha3, .ocultarFicha4, .ocultarFicha5, .ocultarFicha6').removeClass('btn-recorridoH');
    $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');


    if (estado=='ficha') {
        if (num==1) {
            $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');

            $('.contenidoFicha1').removeClass('d-none');

            $('.ficha1').addClass('ocultarFicha1');
            $('.ficha1').addClass('btn-recorridoH');
            $('.ficha1').removeClass('ficha1');
            
            $('.ocultarFicha1').attr('onclick',"ficha(1,'ocultar')");
        }else if (num==2) {
            $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');

            $('.contenidoFicha2').removeClass('d-none');

            $('.ficha2').addClass('ocultarFicha2');
            $('.ficha2').addClass('btn-recorridoH');
            $('.ficha2').removeClass('ficha2');
            
            $('.ocultarFicha2').attr('onclick',"ficha(2,'ocultar')");
        }else if (num==3) {
            $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');

            $('.contenidoFicha3').removeClass('d-none');

            $('.ficha3').addClass('ocultarFicha3');
            $('.ficha3').addClass('btn-recorridoH');
            $('.ficha3').removeClass('ficha3');
            
            $('.ocultarFicha3').attr('onclick',"ficha(3,'ocultar')");
        }else if (num==4) {
            $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');

            $('.contenidoFicha4').removeClass('d-none');

            $('.ficha4').addClass('ocultarFicha4');
            $('.ficha4').addClass('btn-recorridoH');
            $('.ficha4').removeClass('ficha4');
            
            $('.ocultarFicha4').attr('onclick',"ficha(4,'ocultar')");
        }else if (num==5) {
            $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');

            $('.contenidoFicha5').removeClass('d-none');

            $('.ficha5').addClass('ocultarFicha5');
            $('.ficha5').addClass('btn-recorridoH');
            $('.ficha5').removeClass('ficha5');
            
            $('.ocultarFicha5').attr('onclick',"ficha(5,'ocultar')");
        }else if (num==6) {
            $('.contenidoFicha1, .contenidoFicha2, .contenidoFicha3, .contenidoFicha4, .contenidoFicha5, .contenidoFicha6').addClass('d-none');

            $('.contenidoFicha6').removeClass('d-none');

            $('.ficha6').addClass('ocultarFicha6');
            $('.ficha6').addClass('btn-recorridoH');
            $('.ficha6').removeClass('ficha6');
            
            $('.ocultarFicha6').attr('onclick',"ficha(6,'ocultar')");
        }

    }else if(estado=='ocultar'){

        if (num==1) {
            $('.ocultarFicha1').addClass('ficha1');
            $('.ocultarFicha1').removeClass('btn-recorridoH');
            $('.ocultarFicha1').removeClass('ocultarFicha1');
            
            $('.contenidoFicha1').addClass('d-none');
            
            $('.ficha1').attr('onclick',"ficha(1,'ficha')");
        }else if (num==2) {
            $('.ocultarFicha2').addClass('ficha2');
            $('.ocultarFicha2').removeClass('btn-recorridoH');
            $('.ocultarFicha2').removeClass('ocultarFicha2');
            
            $('.contenidoFicha2').addClass('d-none');
            
            $('.ficha2').attr('onclick',"ficha(2,'ficha')");
        }else if (num==3) {
            $('.ocultarFicha3').addClass('ficha3');
            $('.ocultarFicha3').removeClass('btn-recorridoH');
            $('.ocultarFicha3').removeClass('ocultarFicha3');
            
            $('.contenidoFicha3').addClass('d-none');
            
            $('.ficha3').attr('onclick',"ficha(3,'ficha')");
        }else if (num==4) {
            $('.ocultarFicha4').addClass('ficha4');
            $('.ocultarFicha4').removeClass('btn-recorridoH');
            $('.ocultarFicha4').removeClass('ocultarFicha4');
            
            $('.contenidoFicha4').addClass('d-none');
            
            $('.ficha4').attr('onclick',"ficha(4,'ficha')");
        }else if (num==5) {
            $('.ocultarFicha5').addClass('ficha5');
            $('.ocultarFicha5').removeClass('btn-recorridoH');
            $('.ocultarFicha5').removeClass('ocultarFicha5');
            
            $('.contenidoFicha5').addClass('d-none');
            
            $('.ficha5').attr('onclick',"ficha(5,'ficha')");
        }else if (num==6) {
            $('.ocultarFicha6').addClass('ficha6');
            $('.ocultarFicha6').removeClass('btn-recorridoH');
            $('.ocultarFicha6').removeClass('ocultarFicha6');
            
            $('.contenidoFicha6').addClass('d-none');
            
            $('.ficha6').attr('onclick',"ficha(6,'ficha')");
        }
    }
}