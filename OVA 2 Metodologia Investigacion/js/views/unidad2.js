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
    $(".linkactividades").attr('href',urlsite+'/course/view.php?id='+courseid);

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
        controlSlides2(stepIndex);
        // quitarflecha(stepIndex+1);
        actualizarprogress(stepIndex+9);
        switch(stepIndex) {
            case 1:
                break;
            default:
                break;
            // code block
        }
        slideNum = stepIndex;
    });

    funcion_vanvas();
    slide_predeterminado2();
    slide_link2(tema);
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos","Definición, notación, determinación y clasificación de conjuntos");*/
    /*slide_predeterminado2();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
});

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlSlides2(stepIndex);
    actualizarprogress(stepIndex+9);
}

function slide_predeterminado2(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides2(1);
    $('#smartwizard').smartWizard("goToStep", 1);
    tema=1;
}

function slide_link2(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides2(num);
}

function controlSlides2(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 8;
            break;
        case 1:
            var pdf = `<div class="col-md-12">
                          <p class="p_white size_20">
                            <a href="assets/PDF/UNIDAD2/Recopilación-de-literatura.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x mr-3"></i> Recopilación de literatura</a>
                          </p>
                        </div>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            var cont = `<div class="m-auto"><img src="assets/img/img_ova/saber-como.png" style="max-width: 70%;"><div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_blanco_can');
            $('#circle_can').addClass('circulo_morado');
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            //$("#pregunta_cont").html('');
            $("#contenido2").html('');
            $("#img_2").html('');
            break;
        case 5:
            principal2_5(1);
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 6:
            knob = '';
            bar = '';
            container = '';
            knob = document.querySelector('.custom-scrollbar__knob2');
            bar = document.querySelector('.custom-scrollbar__bar2');
            container = document.querySelector('.custom-scrollbar__inner2');
            scroll();
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 8:
            knob = '';
            bar = '';
            container = '';
            knob = document.querySelector('.custom-scrollbar__knob3');
            bar = document.querySelector('.custom-scrollbar__bar3');
            container = document.querySelector('.custom-scrollbar__inner3');
            scroll();
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Fundamento Teórico","Proceso de revisión de la literatura");
            cambiarColorMenu(12);
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","2. Conjuntos","Número de elementos de la unión entre conjuntos");
            /*$("#content-ova").load("base/unidades/unidad3.html");*/
            tema = 1;
            break;
        default:
            break;
    }
}

function cres_div() {
    $('.cont_cres').css({ "width": "35%"});
}
function cres_div2() {
    $('.cont_cres2').css({ "width": "35%"});
}
function cres_div3() {
    $('.cont_cres3').css({ "width": "35%"});
}


function funcion_vanvas() {
    var canvas = new fabric.Canvas('canvas_unid2');
    var imgElement = 'assets/img/img_ova/uno.png';
    var imgElement2 = 'assets/img/img_ova/dos.png'; 
    var imgElement3 = 'assets/img/img_ova/tres.png';
    var imgElement4 = 'assets/img/img_ova/cuatro.png';
    var imgElement5 = 'assets/img/img_ova/cinco.png';
    var imgElement6 = 'assets/img/img_ova/seis.png';
    var imgElement7 = 'assets/img/img_ova/siete.png';
    var imgElement8 = 'assets/img/img_ova/ocho.png';
    var imgElement9 = 'assets/img/img_ova/nueve.png';
    var imgElement10 = 'assets/img/img_ova/diez.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=190;
        oImg.top=0;
        oImg.scaleToHeight(30);
        oImg.scaleToWidth(30);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            //console.log('selected a circle');  
            contenido2_3(1);
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=300;
        oImg2.top=35;
        oImg2.scaleToHeight(30);
        oImg2.scaleToWidth(30);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(2);            
        });
        
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=360;
        oImg3.top=120;
        oImg3.scaleToHeight(30);
        oImg3.scaleToWidth(30);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(3);            
        });
        
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=370;
        oImg4.top=220;
        oImg4.scaleToHeight(30);
        oImg4.scaleToWidth(30);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(4);            
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=320;
        oImg5.top=310;
        oImg5.scaleToHeight(30);
        oImg5.scaleToWidth(30);
        oImg5.selectable = false;
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(5);           
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=190;
        oImg6.top=370;
        oImg6.scaleToHeight(30);
        oImg6.scaleToWidth(30);
        oImg6.selectable = false;
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(6);            
        });
    });
    fabric.Image.fromURL(imgElement7, function(oImg7) {
        oImg7.left=50;
        oImg7.top=310;
        oImg7.scaleToHeight(30);
        oImg7.scaleToWidth(30);
        oImg7.selectable = false;
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(7);            
        });
    });
    fabric.Image.fromURL(imgElement8, function(oImg8) {
        oImg8.left=5;
        oImg8.top=220;
        oImg8.scaleToHeight(30);
        oImg8.scaleToWidth(30);
        oImg8.selectable = false;
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(8);            
        });
    });
    fabric.Image.fromURL(imgElement9, function(oImg9) {
        oImg9.left=10;
        oImg9.top=120;
        oImg9.scaleToHeight(30);
        oImg9.scaleToWidth(30);
        oImg9.selectable = false;
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(9);            
        });
    });
    fabric.Image.fromURL(imgElement10, function(oImg10) {
        oImg10.left=75;
        oImg10.top=35;
        oImg10.scaleToHeight(30);
        oImg10.scaleToWidth(30);
        oImg10.selectable = false;
        canvas.add(oImg10);

        oImg10.on('mouseup', function() {
            //console.log('selected a circle');  
             contenido2_3(10);            
        });
    });
}

function contenido2_3(num) {
    switch(parseInt(num)){
        case 1:
            var cont = `<div class="m-auto"><p class="font-weight-bold">Libros:</p>
                      <ul>
                        <li>Título y subtítulo del libro.</li>

                        <li>Nombre(s) de (los) autor(es).</li>

                        <li>Lugar edición (ciudad y país).</li>

                        <li>Año de edición.</li>

                        <li>Nombre de la editorial.</li>

                        <li>No. Edición o reimpresión.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 2:
            var cont = `<div class="m-auto"><p style="font-size: 11px;" class="font-weight-bold">Capítulos de libros cuando fueron escritos por varios autores o recopilado por una o más personas:</p>
                      <ul style="font-size: 11px;">
                        <li>Título y subtítulo del capítulo</li>

                        <li>Nombre(s) de (los) autor(es).</li>

                        <li>Título y subtítulo del libro.</li>

                        <li>Nombre de los compiladores o editores.</li>

                        <li>Lugar edición (ciudad y país).</li>

                        <li>Año de edición.</li>

                        <li>Página de inicio y final del capítulo</li>

                        <li>Nombre de la editorial.</li>

                        <li>No. Edición o reimpresión.</li>

                        <li>Si el capítulo se había publicado antes en otra fuente, citarla si el libro la incluye.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 3:
            var cont = `<div class="m-auto"><p class="font-weight-bold">Artículos de revistas:</p>
                      <ul>
                        <li>Título y subtítulo del artículo</li>

                        <li>Nombre(s) de (los) autor(es).</li>

                        <li>Nombre de la revista.</li>

                        <li>Año / volumen / Número o equivalente.</li>

                        <li>Página de inicio y final del artículo.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 4:
            var cont = `<div class="m-auto"><p class="font-weight-bold">Artículo periodístico:</p>
                      <ul>
                        <li>Título y subtítulo del artículo</li>

                        <li>Nombre(s) de (los) autor(es)</li>

                        <li>Nombre del periódico</li>

                        <li>Sección y páginas donde se publicó</li>

                        <li>Fecha de publicación.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 5:
            var cont = `<div class="m-auto"><p class="font-weight-bold">Videos y películas:</p>
                      <ul>
                        <li>Título y subtítulo del video/película.</li>

                        <li>Nombre(s) de (los) productor(es) y director(es)</li>

                        <li>Nombre de la institución o empresa productora.</li>

                        <li>Lugar y fecha de producción</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 6:
            var cont = `<div class="m-auto"><p class="font-weight-bold">Trabajos presentados en seminarios, conferencias, congresos y eventos similares:</p>
                      <ul>
                        <li>Título y subtítulo del trabajo.</li>

                        <li>Nombre(s) de (los) autor(es).</li>

                        <li>Nombre del evento.</li>

                        <li>Asociación o patrocinador</li>

                        <li>Mes y año del evento.</li>

                        <li>Lugar (ciudad y país).</li>

                        <li>Nombre del presidente del comité organizador.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 7: 
            var cont = `<div class="m-auto"><p class="font-weight-bold">Entrevistas a expertos:</p>
                      <ul>
                        <li>Nombre entrevistado.</li>

                        <li>Nombre entrevistador.</li>

                        <li>Fecha de la entrevista.</li>

                        <li>Medio de transcripción o difusión.</li>

                        <li>Título o temas.</li>

                        <li>Lugar y forma en la que está disponible.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 8: 
            var cont = `<div class="m-auto"><p class="font-weight-bold">Tesis y disertaciones:</p>
                      <ul>
                        <li>Título y subtítulo de la tesis.</li>

                        <li>Nombre(s) de (los) autor(es).</li>

                        <li>Escuela o facultad</li>

                        <li>Institución Educativa.</li>

                        <li>Mes y año.</li>

                        <li>Ciudad y país.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 9: 
            var cont = `<div class="m-auto"><p class="font-weight-bold">Documentos no publicados:</p>
                      <ul>
                        <li>Título y subtítulo del documento.</li>

                        <li>Nombre(s) de (los) autor(es).</li>

                        <li>Institución o empresa que apoyó el documento.</li>

                        <li>Lugar y fecha.</li>

                        <li>Ubicación donde está disponible.</li>
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        case 10: 
            var cont = `<div class="m-auto"><p class="font-weight-bold">Sitios web:</p>
                      <ul>
                        <li>Nombre del sitio (URL).</li>

                        <li>Fecha de consulta.</li>

                        <li>Si es un documento anotar nombre de autores y lugar.</li>

                        
                      </ul></div>`;
            $('#circle_can').html(cont);
            $('#circle_can').removeClass('circulo_morado');
            $('#circle_can').addClass('circulo_blanco_can');
            break;
        default:
            break;
    }
}

function pantalla2_5(num){
    switch(parseInt(num)){
        case 1:
            var text = `<div><p>Clarke, S.P., Sloane, D.M. y Aiken, L.H. (2002), Effects of hospital staffing and organizational climate on needlestick injuries to nurses, Am J Public Health, 92(7):1115·1119.</p><br>
                        <p>En esta investigación con enfermeros(as) se encontró que el clima afecta la productividad y la calidad del servicio a nivel personal. EI estudio incluyó datos retrospectivos de 732 enfermeros(as) y prospectivos de 960.</div>`;
            $('.banner2_5').html(text);
            $('.tria1').css({ "visibility": "visible"});
            $('.tria2').css({ "visibility": "hidden"});
            $('.banner2_5').css({ "visibility": "visible"});
            break;
        case 2:
            var text = `<div class="col-lg-12">
                            <p>Fernández·Coliado, C.; Baptista, P. y Elkes, D. (1998), La televisión y el niño, México, D.F.: Editorial Oasis, p. 33.</p>
                          </div>
                          <div class="col-lg-8">
                            <p>Una referencia completa debe incluir:</p>
                            <ul>
                              <li>Cita o datos bibliográficos</li>
                              <li>Problema que se investigara o la hipótesis planteada</li>
                              <li>Sujetos o muestra de estudio.</li>
                              <li>Diseño y forma de recolección de los datos</li>
                              <li>Los resultados.</li>
                              <li>Y las conclusiones.</li>
                            </ul>
                          </div>
                          <div class="col-lg-4 cursor" onclick="principal2_5(2);">
                            <div class="row btn_2_5" style="">
                              <p style="font-weight: bold;">Ver ejemplo</p><div style="width: 50px;"><img src="assets/img/img_ova/hoja.png" style="max-width: 94%;"></div>
                            </div>
                          </div>`;
            $('.banner2_5').html(text);
            $('.tria2').css({ "visibility": "visible"});
            $('.tria1').css({ "visibility": "hidden"});
            $('.banner2_5').css({ "visibility": "visible"});
            break;
        default:
            break;
    }
}

function principal2_5(num){
    switch(parseInt(num)){
        case 1:
            var text = `<div class="col-md-12 row mt-3">
                            <div class="col-md-6 d-flex justify-content-center">
                              <div style="" class="row targeta_morada cursor" onclick="pantalla2_5(1);">
                                <div class="col-md-3 text-center">
                                  <img src="assets/img/img_ova/referencia.png" style="max-width: 90%;">
                                </div>
                                <div class="col-md-9 dashed_borde text-center" style="">
                                  <p style="color: white;">Idea extraída de una referencia</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-center">
                              <div class="row targeta_morada cursor" onclick="pantalla2_5(2);">
                                <div class="col-md-3">
                                  <img src="assets/img/img_ova/rompecabezas.png" style="max-width: 90%">
                                </div>
                                <div class="col-md-9 dashed_borde text-center">
                                  <p style="color: white;">Cifra extraída de una referencia</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 row">
                            <div class="col-md-6 pl-5">
                              <div class="triangulo-equilatero-bottom tria1">
                                
                              </div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-end pr-5">
                              <div class="triangulo-equilatero-bottom tria2">
                                
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="banner2_5 row">
                              <div class="col-lg-12">
                                <p>Fernández·Coliado, C.; Baptista, P. y Elkes, D. (1998), La televisión y el niño, México, D.F.: Editorial Oasis, p. 33.</p>
                              </div>
                              <div class="col-lg-8">
                                <p>Una referencia completa debe incluir:</p>
                                <ul>
                                  <li>Cita o datos bibliográficos</li>
                                  <li>Problema que se investigara o la hipótesis planteada</li>
                                  <li>Sujetos o muestra de estudio.</li>
                                  <li>Diseño y forma de recolección de los datos</li>
                                  <li>Los resultados.</li>
                                  <li>Y las conclusiones.</li>
                                </ul>
                              </div>
                              <div class="col-lg-4">
                                <div class="row btn_2_5 cursor" style="" onclick="principal2_5(2);">
                                  <p style="font-weight: bold;">Ver ejemplo</p><div style="width: 50px;"><img src="assets/img/img_ova/hoja.png" style="max-width: 94%;"></div>
                                </div>
                              </div>
                            </div>
                          </div>`;
            $('.prinpila').html(text);
            break;
        case 2:
            var text = `<div class="col-md-12">
                            <div class="cont_padre" style="">
                              <div class="d-flex justify-content-center">
                                <div style="" class="row header_2_5">
                                  <div class="textoheader" style="">
                                    <p>Ejemplo de una referencia completa</p>
                                  </div>
                                  <div style="width: 25%;text-align: end;">
                                    <img src="assets/img/img_ova/hoja.png" style="max-width: 70%;">
                                  </div>
                                </div>
                              </div>
                              
                              <div class="col-md-12 mt-5 pantminis" style="height: 240px;">
                                <b>Cita bibliográfica:</b>
                                <p>Spurgeon, P.; Hicks, C. y Terry, R. (1983), "A preliminary investigation into sex differences in reported friendship determinants among a group of early adolescents", in The British Journal of Sodal Psychology, vol. 22. pp. 63-64.</p>
                              </div>

                              <div class="row">
                                  <div class="col-md-4">
                                    <p>De clic en los círculos para avanzar</p>
                                  </div>
                                  <div class="col-md-4 d-flex justify-content-center">
                                    <div class="btn_circlewhite cursor btn2_1 btn_min" onclick="pantallasmin(1)"></div>
                                    <div class="btn_circle cursor btn2_2 btn_min" onclick="pantallasmin(2)"></div>
                                    <div class="btn_circle cursor btn2_3 btn_min" onclick="pantallasmin(3)"></div>
                                    <div class="btn_circle cursor btn2_4 btn_min" onclick="pantallasmin(4)"></div>
                                    <div class="btn_circle cursor btn2_5 btn_min" onclick="pantallasmin(5)"></div>
                                    <div class="btn_circle cursor btn2_6 btn_min" onclick="pantallasmin(6)"></div>
                                  </div>
                              </div>
                            </div>
                          </div>`;
            $('.prinpila').html(text);
            break;
    }
    
    
}

function pantallasmin(num){
    switch(parseInt(num)){
        case 1:
            var text = `<b>Cita bibliográfica:</b>
                        <p>Spurgeon, P.; Hicks, C. y Terry, R. (1983), "A preliminary investigation into sex differences in reported friendship determinants among a group of early adolescents", in The British Journal of Sodal Psychology, vol. 22. pp. 63-64.</p>`;
            $('.pantminis').html(text);
            $('.btn_min').removeClass('btn_circlewhite');
            $('.btn_min').addClass('btn_circle');
            $('.btn2_1').removeClass('btn_circle');
            $('.btn2_1').addClass('btn_circlewhite');
            break;
        case 2:
            var text = `<b>Problema:</b>
                        <p class="justificado">Determinar si hay diferentes tipos globales de correlación amistosa entre sexos y dentro de cada género, así como los concluyentes de dichos tipos globales.</p>`;
            $('.pantminis').html(text);
            $('.btn_min').removeClass('btn_circlewhite');
            $('.btn_min').addClass('btn_circle');
            $('.btn2_2').removeClass('btn_circle');
            $('.btn2_2').addClass('btn_circlewhite');
            break;
        case 3:
            var text = `<b>Sujetos:</b>
                        <p class="justificado">26 adolescentes de 11 a 12 años de edad (15 de género femenino y 11 de género masculino) que cursan el último año de escuela básica.</p>`;
            $('.pantminis').html(text);
            $('.btn_min').removeClass('btn_circlewhite');
            $('.btn_min').addClass('btn_circle');
            $('.btn2_3').removeClass('btn_circle');
            $('.btn2_3').addClass('btn_circlewhite');
            break;
        case 4:
            var text = `<b>Procedimientos:</b>
                        <p class="justificado">Los sujetos contestaron un cuestionario para avalar un rango de determinantes de la amistad; el cuestionario estuvo basado en descubrimientos de investigación sobre las razones más importantes subyacentes en la formación y el mantenimiento de la amistad. Se incluyeron preguntas cerradas (con escala de cinco puntos) concernientes a razones ambientales, sociológicas y de personalidad, así como preguntas abiertas acerca de la naturaleza de la amistad y la relación amistosa. Asimismo, se les pidió que calificaran a su mejor amigo o amiga en cada pregunta, y a su segundo y tercer amigo o amiga.</p>`;
            $('.pantminis').html(text);
            $('.btn_min').removeClass('btn_circlewhite');
            $('.btn_min').addClass('btn_circle');
            $('.btn2_4').removeClass('btn_circle');
            $('.btn2_4').addClass('btn_circlewhite');
            break;
        case 5:
            var text = `<div class="content custom-scrollbar10">
                            <div class="custom-scrollbar__inner10">
                                <b>Resultados:</b>
                                <p>En el caso de las mujeres, las razones para vincularse con su mejor amiga son cualitativamente diferentes de las razones para vincularse a su segunda o tercera mejores amigas. Los aspectos más importantes para la mejor amistad fueron, en orden: "jugar juntas", "sentarse juntas" y tener "la misma actitud positiva" hacia la escuela. Menos importante resultó "vivir cerca". Respecto de la segunda y tercera mejores amigas, los aspectos más relevantes fueron similares en ambos casos (por ejemplo, "actitud positiva" hacia la escuela, "agradar a la maestra y sentarse juntas"). En cambio, "visitar el hogar de la otra persona y viceversa" resulta menos importante. En contraste, el orden de aspectos importantes de la amistad entre los jóvenes es idéntico entre los tres niveles (mejor amigo, segundo y tercer lugares). <br>
                                Los aspectos más destacados fueron: "actitud negativa" hacia la escuela y “jugar y sentarse juntos". "Visitar el hogar del otro y viceversa" fue menos importante. Desde un punto de vista global, las percepciones de ambos géneros en relación con los determinantes importantes de la amistad son muy similares (r = + .82, p = 0.01). Las respuestas a las preguntas abiertas se clasificaron como situacionales, contractuales o psicológicamente internas. Los resultados demostraron un paso a través de las fases de la amistad. De las relaciones amistosas de las jóvenes, 97% están basadas en razones psicológicas internas, mientras que para los jóvenes se distribuyen entre razones psicológicas internas (54%) y contractuales (45%).</p>
                            </div>
                            <div class="custom-scrollbar__bar10">
                                <div class="custom-scrollbar__knob10 cursor">
                                    <p class="text-center linea_scroll10">-</p>
                                </div>
                            </div>
                        </div>`;
            $('.pantminis').html(text);
            $('.btn_min').removeClass('btn_circlewhite');
            $('.btn_min').addClass('btn_circle');
            $('.btn2_5').removeClass('btn_circle');
            $('.btn2_5').addClass('btn_circlewhite');
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob10');
            bar = document.querySelector('.custom-scrollbar__bar10');
            container = document.querySelector('.custom-scrollbar__inner10');
            scroll();
            break;
        case 6:
            var text = `<div class="row">
                          <div style="width: 90%;">
                            <b>Conclusiones:</b>
                            <p class="justificado">
                              Esta investigación inicial revela que, para ambos sexos, los aspectos más importantes de la amistad adolescente son similares; pero que hay diferencias en la variación de niveles de amistad que pueden reflejar preferencias por actividades distintas o tasas de maduración entre ambos géneros.
                            </p>
                          </div>
                          <div style="width: 10%;text-align: end;">
                            <img class="cursor" src="assets/img/img_ova/btn_closed.png" style="max-width: 60%;position: relative;left: 45px" onclick="principal2_5(1);">
                          </div>
                        </div>
                        
                        <div class="col-md-12 d-flex justify-content-center mt-5">
                          <div class="contenedor_sub">
                            El anterior ejemplo fue extraído de: Spurgeon et al. (1983).
                          </div>
                        </div>`;
            $('.pantminis').html(text);
            $('.btn_min').removeClass('btn_circlewhite');
            $('.btn_min').addClass('btn_circle');
            $('.btn2_6').removeClass('btn_circle');
            $('.btn2_6').addClass('btn_circlewhite');
            break;
        default:
            break;
    }
}

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

function pantalla9(num){
    switch (parseInt(num)) {
        case 1:
            var text = `<div class="p9_cont">
                      <p class="justificado">Que ya existe teoría desarrollada en relación a nuestro tema.</p>
                    </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_1').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 2:
            var text = `<div class="p9_cont">
                          <p class="justificado">Que existe evidencia y que se aplica a nuestro problema de investigación</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_2').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        case 3:
            var text = `<div class="p9_cont">
                          <p class="justificado">Que hay una o varias teorías en relación a nuestro tema de investigación.</p>
                        </div>`;
            $('.indicap9').css({ "visibility": "hidden"
                    
                });
            $('.indi_3').css({ "visibility": "visible"
                    
                });
            $('.p_9c').html(text);
            break;
        
        default:
            break;
    }
}

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


// slide
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: '100%', height: slideHeight });
    
    $('#slider ul').css({ width: '70%'});
    
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

});
function cardPara4(num,ventana){
    if (ventana==0) {
        $("#card4-1").addClass('hidden')
        $("#card4-2").addClass('hidden')
        $("#card4-3").addClass('hidden')
        $("#card4-4").addClass('hidden')
        var conjunto = `<div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,1)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
                        <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,1)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
                        <div class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,1)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
                        <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,1)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>`;
        $("#card4-padre").html(conjunto)
    }
    if (ventana==1) {
        $("#card4-1").addClass('hidden')
        $("#card4-2").addClass('hidden')
        $("#card4-3").addClass('hidden')
        $("#card4-4").addClass('hidden')
        if (num==1) {
            var conjunto = `
            <div class="col-6 bg-white border-1 justify-content pt-2 text-black" id="card4-1" onclick="cardPara4(1,0)> 
                <ul class="text-reducido">
                    <p><b>Inicio de la revisión</b></p>
                    <li class="text-reducido">Creswell (2005) recomienda escribir un título preliminar de la investigación y seleccionar dos o tres palabras “clave” que capten la idea central de la investigación o utilizar las que autores destacados en el campo suelen plantear. Es una buena manera de comenzar una búsqueda.</li>
                    <li class="text-reducido">Se recomienda iniciar la revisión acudiendo a expertos en el tema o a través de fuentes secundarias o terciarias, ya que esas personas se vuelven especialistas en el tema y es fundamental aprovechar su esfuerzo.</li>
                    <li class="text-reducido">Buscar en bancos o bases de datos físicas y electrónicas.</li>
                </ul>
            </div>
            <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
            <div class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
            <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>
            `;
            $("#card4-padre").html(conjunto)
        }
        if (num==2) {
            var conjunto = `
            <div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
            <div class="col-6 bg-white border-2 justify-content p-4 text-black" id="card4-2"  onclick="cardPara4(2,0)> 
            <ul class="text-reducido">
                <p><b>Obtención de la literatura</b></p><br>
                    <li class="text-reducido">Una vez identificadas las fuentes primarias es necesario localizarlas en las bibliotecas físicas y/o electrónicas.</li>
                </ul>
            </div>
            <div class="col-6 bg-color text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
            <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>
            `;
            $("#card4-padre").html(conjunto)
        }
        if (num==3) {
            var conjunto = `
                <div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
                <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
                <div class="col-6 bg-white border-3 justify-content pt-2 text-black" id="card4-3"  onclick="cardPara4(3,0)> 
                    <ul class="text-reducido">
                        <p><b>Consulta de la literatura</b></p>
                        <p class="text-reducido">Seleccionar las que serán de utilidad para el marco teórico específico, teniendo como base preguntas como: <i>¿La referencia se relaciona con el problema de investigación? ¿Qué aspecto trata? ¿Ayuda a resolver más rápido y profundamente la investigación?</i></p>
                        <li class="text-reducido">La bibliografía extranjera debe manejarse como guía para ayudar a definir el enfoque y tratamiento del problema solamente, ya que la información y teorías presentadas fueron elaboradas para otros contextos y situaciones.</li>
                    </ul>
                </div>
                <div class="col-6 bg-color-4 text-center border-4" id="card4-4" onclick="cardPara4(4,0)"> <img src="assets/img/img_ova/busqueda.png" class="w-50 p-4" id="img-card4-4"></div>
            `;
            $("#card4-padre").html(conjunto)
        }
        if (num==4) {
            var conjunto = `
                <div class="col-6 bg-color-2 text-center border-1" id="card4-1" onclick="cardPara4(1,0)"> <img src="assets/img/img_ova/buscar.png" class="w-50 p-3" id="img-card4-1"></div>
                <div class="col-6 bg-color text-center border-2" id="card4-2" onclick="cardPara4(2,0)"> <img src="assets/img/img_ova/navegador.png" class="w-50 p-4" id="img-card4-2"></div>
                <div class="col-6 bg-color-3 text-center border-3" id="card4-3" onclick="cardPara4(3,0)"> <img src="assets/img/img_ova/analitica.png" class="w-50 p-4" id="img-card4-3"></div>
                <div class="col-6 bg-white border-4  pt-4 text-black" id="card4-4" onclick="cardPara4(4,0)> 
                    <ul class="text-reducido">
                        <p><b>Extracción y recopilación de la información</b></p><br>
                        <li class="text-reducido">Existen diferentes maneras de recopilar la información extraída, lo importante es extraer todos los datos e ideas necesarias para la elaboración del marco teórico.</li>
                        <li class="text-reducido">Una vez extraída y recopilada la información se puede comenzar a elaborar el marco teórico integrando toda la información.</li>
                    </ul>
                </div>
            `;
            $("#card4-padre").html(conjunto)
        }
    }
}