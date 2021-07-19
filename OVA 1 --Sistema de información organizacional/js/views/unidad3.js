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
    /*slide_predeterminado2();*/
    console.log(tema);
    /*slide_link3(tema);*/
    /*funcion_vanvas();
    funcion_canvas2();*/
    /*var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";*/
    
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a href="assets/PDF/UNIDAD 3/jurisdicción universal la perspectiva.pdf" target="_blank"> <img class="img-circle menu_superior w-40px" src="assets/img/img_template/pdf.png"> Jurisdicción universal.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);

function slide(){
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    
    controlSlides3(stepIndex);

}

function modal_scroll10(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob10');
    bar = document.querySelector('.custom-scrollbar__bar10');
    container = document.querySelector('.custom-scrollbar__inner10');
    scroll();
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides3(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link3(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides3(num);
}

function controlSlides3(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP",">");
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP",">");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP",">");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","El sistema para la administración de las relaciones con los clientes (CRM)");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","El sistema para la administración de las relaciones con los clientes (CRM)");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","El sistema para la administración de las relaciones con los clientes (CRM)");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","El sistema para la administración de las relaciones con los clientes (CRM)");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","El sistema para la administración de las relaciones con los clientes (CRM)");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","Los sistemas para la planeación de los recursos empresariales (ERP)");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","Los sistemas para la planeación de los recursos empresariales (ERP)");
            break;
        case 10:
            setMigaja("Unidades de aprendizaje","3. El CRM y el ERP","Los sistemas para la planeación de los recursos empresariales (ERP)");
            break;
        default:
            break;
    }
}

function letras(num){
    switch (parseInt(num)) {
        case 1:
            $('.letra1').css({'visibility': 'visible'});
            break;
        case 2:
            $('.letra2').css({'visibility': 'visible'});
            break;
        default:
            break;
    }
}


function infoactivi3(num) {
    switch (parseInt(num)) {
        
        case 1:
            $('.info3_1').css({'visibility': 'visible'});
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob6');
            bar = document.querySelector('.custom-scrollbar__bar6');
            container = document.querySelector('.custom-scrollbar__inner6');
            scroll();
            break;
        case 2:
            $('.info3_2').css({'visibility': 'visible'});
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


