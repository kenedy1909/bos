$( document ).ready(function() {
    slide_predeterminado2();
    console.log(tema);
    /*slide_link(tema);*/
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
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*setMigaja("Unidades de aprendizaje","2. Conjuntos",";*/
    /*slide_predeterminado();*/

    /*$(".t_1").on('click', cambiacontenido2(1));
    $(".t_2").on('click', cambiacontenido2(2));
    $(".t_3").on('click', cambiacontenido2(3));*/
    
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides2(stepIndex);
}

function slide_predeterminado2(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides2(1);
    // window.location.href ="#unidad2-1";
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    // window.location.href ="#unidad2-"+num;
    controlSlides2(num);
}
function controlSlides2(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            $("#content-ova").load("base/unidades/unidad1.html");
            tema = 6;
            break;
        case 1:
            var pdf = `<div class="col-md-12">
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD2/Epistemologias_del_sur_2018.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Epistemologías del sur.pdf</a>
                              </p>
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD2/La idea de américa Latina.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> La idea de América Latina.pdf</a>
                              </p>
                              <p class="p_white size_20">
                                  <a href="assets/PDF/UNIDAD2/Modernidad, COLONIALISMO.pdf" target="_blank"> <i class="fas fa-file-pdf fa-2x"></i> Modernidad, Colonialismo y emancipación en América Latina.pdf</a>
                              </p>
                            </div>`;
            $('.pdfs').html(pdf);
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            break;
        case 11:
            setMigaja("Unidades de aprendizaje","2. Fundamentación del pensamiento autónomo","La idea de America Latina");
            $("#content-ova").load("base/unidades/unidad3.html");
            tema = 9;
            break;
        
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

function pantalla2_1(num){
  switch (parseInt(num)) {
      case 1:
          var text = `<div class="col-md-6">
                        <div style="background: #E2C4DF;border-radius: 50px;height: 150px;padding: 25px 25px 25px 25px;">
                          <p class="justificado">El método en economía, como en cualquier otra área del conocimiento, tiene que ver con el procedimiento del cual se sirve la disciplina para desarrollar un nuevo conocimiento.</p>
                        </div>
                        <div class="mt-2">
                          <p class="justificado">Por otra parte, la metodología ha sido un tema de preocupación desde los economistas clásicos hasta las corrientes contemporáneas de la economía, por lo que el método es indispensable en cualquier área del conocimiento, pero sobre todo en economía, donde el <b class="subrayado">método rige los estados y ámbitos del proceso numérico.</b></p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text-center">
                          <img src="assets/img/img_ova/metodo.png" style="max-width: 50%;">
                        </div>
                      </div>`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav1').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na1').removeClass('inactivo');           
          $('.na1').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      case 2:
          var text = `<div class="col-md-12">
                        <div class="banner_crema">
                          <p class="justificado">La comprobación empírica de la economía se hace mediante la econometría y la estadística. Y en el avance de los métodos cuantitativos aplicados han ocurrido los siguientes hechos:</p>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="banner3_2 text-center mt-2">
                          <img src="assets/img/img_ova/hechos.png" style="max-width: 77%">
                        </div>
                      </div>`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav2').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na2').removeClass('inactivo');           
          $('.na2').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      case 3:
          var text = `<div class="col-md-6">
                              <div class="banner_crema">
                                <p class="justificado">Si fuese posible establecer un común denominador de los desarrollos contemporáneos de la teoría económica y de sus componentes metodológicos, podríamos señalar que los mismos se enmarcan en la necesidad de explicar fenómenos altamente complejos y, en consecuencia y en mayor o menor grado, ciertos niveles de interdisciplinariedad. <br>
                                Así, la economía encuentra explicaciones más competentes a sus temas de estudio a partir de su relación con disciplinas como la política, el derecho, la filosofía, la psicología, la sociología, la antropología, entre otras</p>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="col-md-12">
                                <p class="color-text">Haga clic en cada tarjeta para seguir con la lectura</p>
                              </div>
                              <div class="col-md-12 row p-0">
                                <div class="col-md-3 p-0">
                                  <div class="fondotargeta text-center text-center cursor" data-toggle="modal" data-target="#modal2-1_1">
                                    <div class="encabezado" style=""></div>
                                    <div class="circulotarget" style="">1</div>
                                    <div>
                                      <img src="assets/img/img_ova/idea-genial.png" style="max-width: 70%;">
                                    </div>
                                  </div>
                                </div>
                                
                                <div class="col-md-3 p-0">
                                  <div class="fondotargeta text-center cursor" data-toggle="modal" data-target="#modal2-1_2">
                                    <div class="encabezado" style=""></div>
                                    <div class="circulotarget" style="">2</div>
                                    <div>
                                      <img src="assets/img/img_ova/negocios-en-linea.png"style="max-width: 70%;">
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-3 p-0">
                                  <div class="fondotargeta text-center cursor" data-toggle="modal" data-target="#modal2-1_3">
                                    <div class="encabezado" style=""></div>
                                    <div class="circulotarget" style="">3</div>
                                    <div>
                                      <img src="assets/img/img_ova/ingeniero.png"style="max-width: 70%;">
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-3 p-0">
                                  <div class="fondotargeta text-center cursor" data-toggle="modal" data-target="#modal2-1_4">
                                    <div class="encabezado" style=""></div>
                                    <div class="circulotarget" style="">4</div>
                                    <div>
                                      <img src="assets/img/img_ova/pareja.png"style="max-width: 70%;">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>`;
          $('.avance_blanco').removeClass('activa');            
          $('.nav3').addClass('activa');

          $('.opcion_p2_2').removeClass('encendido');
          $('.opcion_p2_2').addClass('inactivo');

          $('.na3').removeClass('inactivo');           
          $('.na3').addClass('encendido');
          
          $('.cont2_1').html(text);
          break;
      
      default:
          break;
  }
}

// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}

