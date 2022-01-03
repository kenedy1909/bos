jQuery(document).ready(function($) {

  var drag_items = $('.dnd-image-drag .drag');
  var drop_items = $('.dnd-image-drag').find('.drop');
  var num = ["0",undefined];

  //set up drag and drop event listeners
  function setUpEventListeners() {

    drag_items.each(function() {
      var thisDrag = $(this);
      thisDrag[0].addEventListener('dragstart', dragStart);
      thisDrag[0].addEventListener('drag', drag);
      thisDrag[0].addEventListener('dragend', dragEnd);
    });

    drop_items.each(function() {
      var thisDrop = $(this);

      thisDrop[0].addEventListener('dragenter', dragEnter);
      thisDrop[0].addEventListener('dragover', dragOver);
      thisDrop[0].addEventListener('dragleave', dragLeave);
      thisDrop[0].addEventListener('drop', drop);

    });

  }
  setUpEventListeners();

  var dragItem;

  //called as soon as the draggable starts being dragged
  //used to set up data and options
  function dragStart(event) {

    drag = event.target;
    dragItem = event.target;

    //set the effectAllowed for the drag item
    event.dataTransfer.effectAllowed = 'copy';

    var imageSrc = $(dragItem).prop('src');
    var imageHTML = $(dragItem).prop('outerHTML');

    //check for IE (it supports only 'text' or 'URL')
    try {
      event.dataTransfer.setData('text/uri-list', imageSrc);
      event.dataTransfer.setData('text/html', imageHTML);
    } catch (e) {
      event.dataTransfer.setData('text', imageSrc);
    }

    $(drag).addClass('drag-active');

  }

  //called as the draggable enters a droppable 
  //needs to return false to make droppable area valid
  function dragEnter(event) {

    var drop = this;

    //set the drop effect for this zone
    event.dataTransfer.dropEffect = 'copy';
    $(drop).addClass('drop-active');

    event.preventDefault();
    event.stopPropagation();

  }

  //called continually while the draggable is over a droppable 
  //needs to return false to make droppable area valid
  function dragOver(event) {
    var drop = this;

    //set the drop effect for this zone
    event.dataTransfer.dropEffect = 'copy';
    $(drop).addClass('drop-active');

    event.preventDefault();
    event.stopPropagation();
  }

  //called when the draggable was inside a droppable but then left
  function dragLeave(event) {
    var drop = this;
    $(drop).removeClass('drop-active');
  }

  //called continually as the draggable is dragged
  function drag(event) {

  }

  //called when the draggable has been released (either on droppable or not)
  //may be called on invalid or valid drop
  function dragEnd(event) {

    var drag = this;
    $(drag).removeClass('drag-active');

  }

  //called when draggable is dropped on droppable 
  //final process, used to copy data or update UI on successful drop
  function drop(event) {

    drop = this;
    $(drop).removeClass('drop-active');

    var dataList, dataHTML, dataText;
    var bloqueo = true;

    //collect our data (based on what browser support we have)
    try {
      dataList = event.dataTransfer.getData('text/uri-list');
      dataHTML = event.dataTransfer.getData('text/html');
    } catch (e) {;
      dataText = event.dataTransfer.getData('text');
    }
    var dropValue = $(drop).attr('data-value');
    for (var i = 0 - 1; i <= num.length; i++) {
      if(parseInt(dropValue) == num[i]){
        bloqueo = false;
      }
    }

    //we have access to the HTML
    if (bloqueo) {
      num.push(parseInt(dropValue));
      if (dataHTML) {
        $(drop).empty();
        $(drop).prepend(dataHTML);
        var drag = $(drop).find('.drag');
      }
      //only have access to text (old browsers + IE)
      else {
        $(drop).empty();
        $(drop).prepend($(dragItem).clone());
        var drag = $(drop).find('.drag');
      }

      //check if this element is in the right spot
      checkCorrectDrop(drop, drag);
      //see if the final image is complete
      checkCorrectFinalImage();

      event.preventDefault();
      event.stopPropagation();
    }
  }

  //check to see if this dropped item is in the correct spot
  function checkCorrectDrop(drop, drag) {
    //check if this drop is correct
    var imageValue = $(drag).attr('data-value');
    var dropValue = $(drop).attr('data-value');

    
      
        if (imageValue == dropValue) {
          $(drop).removeClass('incorrect').addClass('correct');
          $("[data-value="+(parseInt(imageValue)+1)+"]").attr('draggable',true);
          $("[data-value="+parseInt(imageValue)+"]").css('visibility', 'hidden');

          if (parseInt(imageValue) == 1) {
            /*$(".text-drag1").css({
              'top':'282px',
              'z-index':'100',
              'left':'93px'
            });*/
            $(".drop1 img").css('visibility', 'visible');
            var texto = `
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">Desde una visión más enfocada en los derechos de tercera generación (colectivos y del ambiente) una de las principales exponentes es Adela Cortina, quien advierte ya no solo la existencia del ser humano como ser social, sino de las organizaciones como sistemas sociales vivos que intercambian con diferentes grupos de interés motivaciones y formas de vida.</p>
                          </div>
                        `;
            $("#info").html(texto);
            $(".drop2").removeClass('d-none');
          }else if (parseInt(imageValue) == 2) {
            /*$(".text-drag2").css({
              'top':'255px',
              'z-index':'100',
              'left':'157px'
            });*/
            $(".drop2 img").css('visibility', 'visible');
            var texto = `
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">Desde una visión más enfocada en los derechos de tercera generación (colectivos y del ambiente) una de las principales exponentes es Adela Cortina, quien advierte ya no solo la existencia del ser humano como ser social, sino de las organizaciones como sistemas sociales vivos que intercambian con diferentes grupos de interés motivaciones y formas de vida.</p>
                          </div>
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">En tal sentido, pensar el sujeto inserto en estas dinámicas socio-culturales implica dotarlo de elementos que permitan establecer juicios y criterios para discernir las rutas de actuación correctas.</p>
                          </div>
                        `;
            $("#info").html(texto);
            $(".drop3").removeClass('d-none');
          }else if (parseInt(imageValue) == 3) {
            /*$(".text-drag3").css({
              'top':'336px',
              'z-index':'100',
              'left':'116px'
            });*/
            $(".drop3 img").css('visibility', 'visible');
            var texto = `
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">Desde una visión más enfocada en los derechos de tercera generación (colectivos y del ambiente) una de las principales exponentes es Adela Cortina, quien advierte ya no solo la existencia del ser humano como ser social, sino de las organizaciones como sistemas sociales vivos que intercambian con diferentes grupos de interés motivaciones y formas de vida.</p>
                          </div>
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">En tal sentido, pensar el sujeto inserto en estas dinámicas socio-culturales implica dotarlo de elementos que permitan establecer juicios y criterios para discernir las rutas de actuación correctas.</p>
                          </div>
                          <div class="p-3 d-flex justify-content-center">
                            <img src="../img/nota3_12.png" alt="" class="img-90">
                          </div>
                        `;
            $("#info").html(texto);
            $(".drop4").removeClass('d-none');
          }else if (parseInt(imageValue) == 4) {
            /*$(".text-drag4").css({
              'top':'319px',
              'z-index':'100',
              'left':'173px'
            });*/
            $(".drop4 img").css('visibility', 'visible');
            var texto = `
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">Desde una visión más enfocada en los derechos de tercera generación (colectivos y del ambiente) una de las principales exponentes es Adela Cortina, quien advierte ya no solo la existencia del ser humano como ser social, sino de las organizaciones como sistemas sociales vivos que intercambian con diferentes grupos de interés motivaciones y formas de vida.</p>
                          </div>
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">En tal sentido, pensar el sujeto inserto en estas dinámicas socio-culturales implica dotarlo de elementos que permitan establecer juicios y criterios para discernir las rutas de actuación correctas.</p>
                          </div>
                          <div class="p-3 d-flex justify-content-center">
                            <img src="../img/nota3_12.png" alt="" class="img-90">
                          </div>
                          <div class="p-3 col-md-12">
                            <p class="p_black justificado">Es precisamente en este eje en que se va a desarrollar la práctica de sí mismo, lo que constituye algo evidentemente capital. El individuo siempre está a tiempo de corregirse, incluso si no lo hizo en su época de juventud, siempre existen medios para volver al buen camino, aún si se está endurecido; siempre la persona puede corregirse a sí misma para llegar a convertirse en lo que se debería ser y no se ha sido nunca (p. 27).</p>
                          </div>
                        `;
            var btn_texto =`<div class="d-flex align-items-center"><p class="p_white bg-verde p-3 cursor radius-2" data-toggle="modal" data-target="#modal-actividad">Boff piensa que…   </p><img src="../img/poema.png" data-toggle="modal" data-target="#modal-actividad" class="img-actividad cursor" alt=""></div>`;
            $("#btn-1").html(btn_texto);
            $("#info").html(texto);
          }
          /*console.log(parseInt(imageValue));*/
          /*$(drop).removeAttr('data-value');
          $(drag).removeAttr('data-value');*/
          
          //make the dropped item no longer draggable (removing the attr)
          $(drag).attr('draggable', 'false');
          $(drop).attr('draggable', 'false');

          //hide the original drag item (set during dragStart), we don't need it anymore
          /*$(dragItem).hide();*/

        } else {
          $(drop).removeClass('correct').addClass('incorrect');
          num.pop();
        }

  }

  //checks to see if the dropped images are in the correct locations
  function checkCorrectFinalImage() {

    /*var correctItems = drop_items.filter('.correct');
    if (correctItems.length == drop_items.length) {
      $('.message-container').empty();
      $('.message-container').append('<h3>You solved the puzzle!</h3>');
      $('.message-container').append('<p>Thanks for putting Internet Explorer back together again!</p>');
    } else {
      $('.message-container').empty();
    }*/
  }

  //Reset the drop containers
  /*$('.reset-button').on('click', function() {
    $('.dnd-image-drag').find('.drop').children('img').remove();
    $('.dnd-image-drag').find('.drop').removeClass('correct incorrect');
    $('.message-container').empty();
    $('.dnd-image-drag .drag').show();
  });*/
  
  // check for ie
  var userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('MSIE') != -1) {
    $('.ie-message').show();
  }

});