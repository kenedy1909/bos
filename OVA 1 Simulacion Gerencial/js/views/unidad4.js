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
    slide_predeterminado();

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

    $(".p4-1").on("hover", function () {
        // $(".p4-2").show(1000)
        alert("añldskad")
    })
    slide_link(tema);
    
});

function hoverp41(argument) {
    $(".p4-2").show(200)
}

function hoverp42(argument) {
    $(".p4-4").show(200)
}

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides(stepIndex);
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    window.location.href ="#unidad2-1";
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    window.location.href ="#unidad2-"+num;
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");
            $("#content").html('');
            $("#img_cont").html('');
            break;
        case 4:
            // $("#content-ova").load("base/unidades/unidad4.html");
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