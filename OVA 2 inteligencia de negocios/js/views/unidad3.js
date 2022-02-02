$( document ).ready(function() {
    $('.menu3').removeClass('d-none');
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

    $('.zoom_img').elevateZoom({zoomWindowPosition: 10});

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
        slide();
        /*actualizarprogress();*/

    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
        slide();
    });
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";

    slide_link(tema);
});
var pdf = `<div class="col-md-12">
                  <p class="p_black">
                        <a class="p_white" href="assets/PDF/DOCUMENTOS/big.pdf" target="_blank"> <img class="menu_superior mr-2 w-40px" src="assets/img/img_template/pdf.png"> El Big Data y la minería de datos en la empresa de hoy.pdf    <b class="text-cafe"><u>Ver</u></b></a>
                  </p>
                </div>`;
$('.pdfs').html(pdf);
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function slide(){
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex+1);
    actualizarprogress(stepIndex+1+19+8);
}

function slide_predeterminado(){
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    controlSlides(1);
    $('#smartwizard').smartWizard("goToStep", 0);
}

function slide_link(num){
    tema=1;
    $(".nav-link").removeClass('done');
    $(".nav-link").removeClass('active');
    $('#smartwizard').smartWizard("goToStep", num-1);
    controlSlides(num);
}

function controlSlides(num){
    switch (parseInt(num)) {
        case 1:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","El BigData");
            break;
        case 2:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","El BigData");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","La minería de datos");
            break;
        case 4:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","La minería de datos");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","La minería de datos");
            break;
        case 0:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","El BigData");
            break;
        default:
            setMigaja("Unidades de aprendizaje","3. Big Data y minería de datos","El BigData");
            break;
    }
}

/*function scroll_uno(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_uno');
    bar = document.querySelector('.custom-scrollbar__bar_uno');
    container = document.querySelector('.custom-scrollbar__inner_uno');
    scroll();
}*/

//scroll2

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

function funcionalidad_17() {
    $(".fun_17_card").removeClass('d-flex');
    $(".fun_17_card").addClass('d-none');
    $(".fun_17_card_text").removeClass('d-none');
}
function funcionalidad_18(num) {
    $(".fun_18_content, .fun_18_text_1, .fun_18_text_2, .fun_18_text_3, .fun_18_text_4").addClass('d-none');

    if (num == 1) {
        $(".fun_18_content, .fun_18_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_18_content, .fun_18_text_2").removeClass('d-none');
    }else if (num == 3) {
        $(".fun_18_content, .fun_18_text_3").removeClass('d-none');
    }else if (num == 4) {
        $(".fun_18_content, .fun_18_text_4").removeClass('d-none');
    }
}
function funcionalidad_19(num) {
    $(".fun_19_text_1, .fun_19_text_2, .fun_19_text_3, .fun_19_text_4, .fun_19_text_5, .fun_19_text_6").addClass('d-none');
    
    if (num == 1) {
        $(".fun_19_text_1").removeClass('d-none');
    }else if (num == 2) {
        $(".fun_19_text_2").removeClass('d-none');
    }else if (num == 3) {
        $(".fun_19_text_3").removeClass('d-none');
    }else if (num == 4) {
        $(".fun_19_text_4").removeClass('d-none');
    }else if (num == 5) {
        $(".fun_19_text_5").removeClass('d-none');
    }else if (num == 6) {
        $(".fun_19_text_6").removeClass('d-none');
    }
}