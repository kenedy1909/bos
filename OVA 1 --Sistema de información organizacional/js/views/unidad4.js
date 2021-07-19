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
    console.log(tema);
    slide_link(tema);
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
    controlSlides(stepIndex);
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
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num -1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            $("#content-ova").load("base/unidades/unidad2.html");
            tema = 10;
            break;
        case 1:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje","3. El principio de la jurisdicción universal","Evolución y aplicación");
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