//funcion que tiene la responsabilidad de ordenar aleatoriamente un arreglo
function shuffle(a) {
    var array = a.slice(0);
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//Funcion que la responsabilidad mostrar en un modal la calificación obtenida en la actividad
function mostrarCalificacion(modalID, puntaje, mensaje, exito, resetcallback) {
    //console.log('se llamo el modal');
    $(modalID).find('.texto-puntaje').text(mensaje);
    $(modalID).find('.puntaje').text(puntaje);
    //Si es exitoso se muestra el boton cerrar de lo contrario el boton intentar nuevamente.
    $(modalID).find('.mensaje').removeClass('animated wobble');
    if (exito) {
        $(modalID).find('.modal-body').removeClass('parcial');
        $(modalID).find('.modal-body').addClass('exito');
        $(modalID).find('.calificacion-intentar').addClass('hide');
        $(modalID).find('.calificacion-cerrar').removeClass('hide');
    } else {
        $(modalID).find('.modal-body').removeClass('exito');
        $(modalID).find('.modal-body').addClass('parcial');
        $(modalID).find('.calificacion-intentar').removeClass('hide').on('click', resetcallback);
        $(modalID).find('.calificacion-cerrar').addClass('hide');
    }
    setTimeout(function(){
        $(modalID).modal({
            backdrop: 'static',
            show: true
        });
        $(modalID).find('.mensaje').addClass('animated wobble');
    },100);
}


$(document).on('ready', inicioREDIR1);

//Variables globales
var modalIDR1 = "#calificacionModal";
var exitoR1 = false;
var origenR1 = "#listaComponentes";
var btnCalificarR1 = "#calificar";
var contenedorAR1 = ".contenedorA";
var contenedorBR1 = ".contenedorB";
var contenedorCR1 = ".contenedorC";
var arrOrigenR1 = [
    {
        code : '<div class="componente opcion_circulo" data-order-origen="contenedorA" >\n'+
        '<div class="opcion_circulo_content"><img src="./img/bunker (1).png" style="width: 60%;"></div><div class="opcion_circulo_text">Conflicto ocurrido en la República Federativa de Yugoslavia a partir de la muerte del general Josip Broz Tito en 1980.</div>\n'+
        '</div>\n'
    },
    {
        code : '<div class="componente opcion_circulo" data-order-origen="contenedorB" >\n'+
        '<div class="opcion_circulo_content"><img src="./img/africa.png" style="width: 60%;"></div><div class="opcion_circulo_text">Conflicto ocurrido en 1994 en el continente africano con un alto grado de violencia entre dos grupos étnicos que habitan en la república de Ruanda.</div>\n'+
        '</div>\n'
    },
    {
        code : '<div class="componente opcion_circulo" data-order-origen="contenedorC" >\n'+
        '<div class="opcion_circulo_content"><img src="./img/granada.png" style="width: 60%;"></div><div class="opcion_circulo_text">Cifras oficiales dan cuenta de más de 800.000 víctimas del genocidio durante el año 1994, de las cuales, cerca de 600.000 ocurrieron en un lapso de tres meses.</div>\n'+
        '</div>\n'
    }/*,
    {
        code : '<div class="componente opcion_circulo" data-order-origen="contenedorD" >\n'+
        '<div class="opcion_circulo_content"><div class="opcion_circulo_text">se recurre al CONTRAEJEMPLO para afirmar que es falsa</div></div>\n'+
        '</div>\n'
    }*/
];
var widthR1 = $(window).width();
var incrementoR1 = 100/arrOrigenR1.length;
var jR1 = 0;
var arrOrigenInitialR1 = shuffle(arrOrigenR1);

function inicioREDIR1() {
    cerrarPrecarga();
    $(btnCalificarR1).off('click');
    $(btnCalificarR1).attr('disabled', true);
    shuffleOrigenR1();
    $('.js-close').on('click', function() {
        var data = {
            'close': 'cerrar',
        };
        window.top.postMessage(data, '*');
        //Registra la calificacion
        return false;
    });
}
//funcion responsable de enviar el mensaje al padre para que cerrar la precarga
function cerrarPrecarga() {
    console.log('Cerrando Precarga');
    var data = {
        'cerrarPrecarga': 'cerrar',
    };
    window.top.postMessage(data, '*');
 }
 
function reinitREDIR1() {
    jR1 = 0;
    $(contenedorAR1).html('<h2 class="tituloContenedor tituloContenedorA">EVENTO 1</h2>');
    $(contenedorBR1).html('<h2 class="tituloContenedor tituloContenedorB">EVENTO 2</h2>');
    $(contenedorCR1).html('<h2 class="tituloContenedor tituloContenedorC">EVENTO 3</h2>');
    inicioREDIR1();
 }

 function reinitREDIR2() {
    jR1 = 0;
    $(contenedorAR1).html('<h2 class="tituloContenedor tituloContenedorA">EVENTO 1</h2>');
    $(contenedorBR1).html('<h2 class="tituloContenedor tituloContenedorB">EVENTO 2</h2>');
    $(contenedorCR1).html('<h2 class="tituloContenedor tituloContenedorC">EVENTO 3</h2>');
    inicioREDIR1();
 }

function shuffleOrigenR1() {
    if (widthR1 < 767) {
       shuffleOrigenMovilR1();
    } else {
        $(origenR1).html('');
        var arrCodeInitialOrigenR1 = shuffle(arrOrigenInitialR1);
        arrCodeInitialOrigenR1.slice(-4).forEach(function (value) {
           $(origenR1).append(value.code);
        });
    }
    activityDragR1();
}

function shuffleOrigenMovilR1() {
    $(origenR1).html('');
    $(origenR1).html(arrOrigenInitialR1[jR1].code);
    jR1+=1;
    activityDragR1();
}

function calificarR1() {
    puntajeR1 = 0;
    var contenidoAR1 = $(contenedorAR1).find('div'); 
    var contenidoBR1 = $(contenedorBR1).find('div');
    var contenidoCR1 = $(contenedorCR1).find('div');
    /*var contenidoDR1 = $(contenedorDR1).find('div');*/

    contenidoAR1.each(function(){
        if(($(this).attr('data-order-origen') != "contenedorA")){
            $(origenR1).append($(this).context.outerHTML);
            $(this).remove();
        } else {
            puntajeR1 = puntajeR1 + incrementoR1;
        }
    })

    contenidoBR1.each(function(){
        if(($(this).attr('data-order-origen') != "contenedorB")){
            $(origenR1).append($(this).context.outerHTML);
            $(this).remove();
        } else {
            puntajeR1 = puntajeR1 + incrementoR1;
        }
    })

    contenidoCR1.each(function(){
        if(($(this).attr('data-order-origen') != "contenedorC")){
            $(origenR1).append($(this).context.outerHTML);
            $(this).remove();
        } else {
            puntajeR1 = puntajeR1 + incrementoR1;
        }
    })

    /*contenidoDR1.each(function(){
        if(($(this).attr('data-order-origen') != "contenedorD")){
            $(origenR1).append($(this).context.outerHTML);
            $(this).remove();
        } else {
            puntajeR1 = puntajeR1 + incrementoR1;
        }
    })*/
/*alert(puntajeR1);*/

    if(parseInt(puntajeR1) == 100) {
        mensajeR1 = 'Felicitaciones!';
        exitoR1 = true;
        mostrarCalificacion(modalIDR1, parseInt(puntajeR1)+'%', mensajeR1, exitoR1, reinitREDIR2());
     } else {
        mensajeR1 = 'Sigue intentando!';
         if (widthR1 < 767) {
            exitoR1 = false;
            mostrarCalificacion(modalIDR1, parseInt(puntajeR1)+'%', mensajeR1, exitoR1, reinitREDIR1());
         } else {
            exitoR1 = false;
            mostrarCalificacion(modalIDR1, parseInt(puntajeR1)+'%', mensajeR1, exitoR1, reinitREDIR1());
         }

    }
    if (parseInt(puntajeR1) == 100) {
        exitoR1 = true;
        mostrarCalificacion(modalIDR1, parseInt(puntajeR1)+'%', mensajeR1, exitoR1, reinitREDIR2());
      $('.img_res').html('<img src="img/bien.png" style="max-width: 90%; position:relative; top:6px;">');
      $('.puntaje').text(parseInt(puntajeR1)+"%");
      $('.mensaje').text("¡Felicitaciones!");
      $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -15px;">cerrar</button>');
    }else{
        exitoR1 = false;
        mostrarCalificacion(modalIDR1, parseInt(puntajeR1)+'%', mensajeR1, exitoR1, reinitREDIR1());
      $('.img_res').html('<img src="img/mal.png" style="max-width: 90%;  background-color: #FFC000;border-radius: 50%;padding:2px; position:relative; top:6px;">');
      $('.mensaje').text("Inténtalo nuevamente.");
      $('.puntaje').text(parseInt(puntajeR1)+"%");
      $('.btns_modal').html('<button style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reload()">Volver a intentar</button>');
    }
    $("#exampleModal").modal("show");
}

var activityDragR1 = function () {
    var initListR1 = function (cajas, pos, nombre) {
        $(cajas).sortable({
            connectWith: ".list-connected", 
            tolerance: "pointer",
            containment: '.redi1',
            over: function (event, ui) {
               //console.log('sobre ',event.target)
               $(event.target).css({'transform': 'scale(1.05)'});
               $('.ui-sortable-helper').parent().css('z-index', '2');
               //console.log('nuevo z-index: ', $('.ui-sortable-helper').parent().parent().html());
            },
            out: function( event, ui ) {
                $(event.target).css({'transform': 'scale(1)'});
            },
            stop: function (event, ui) {
                var items = $(ui.item).parent().children().length;
                //si el contenedor tiene el titulo y un elemento = 2
                if (items > 2) {
                    $(this).sortable('cancel');
                }
                $('.contenedorA,.contenedorB,.contenedorC,.contenedorD,.contenedorE').css('z-index','initial');
            },
            receive: function (event, ui) {
                //verifico que el contenedor no tenga otro elemento
                var items = $(ui.item).parent().children().length;
                //si el contenedor tiene el titulo y un elemento = 2
                if (items > 2) {
                    $(this).sortable('cancel');
                }else{
                    if(widthR1 < 767) {
                        if(jR1 < arrOrigenR1.length) {
                            shuffleOrigenR1();
                        } else {
                            $(btnCalificarR1).attr('disabled', false);
                            $(btnCalificarR1).off('click').on('click', calificarR1);
                        }
                    } else {
                        $(btnCalificarR1).attr('disabled', false);
                        $(btnCalificarR1).off('click').on('click', calificarR1);
                    }
                }
                
            }
        }).disableSelection();
    }
    initListR1("#listaComponentes, #lista-componentesDestino .list-connected", 0, "sortable");
}




