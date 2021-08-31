(function() {

    //////estas variables preferiblemente deben ser locales ya que otra actividad utiliza los mismos nombres
    var line = null;
    var ismove = false;
    var p1, p2;
    var conexiones = [];
    var colorError = "#D46A6A";
    var colorCorrecto = "#55AA55";
    var puntaje = 0;
    var modalID = "#calificacionModal";
    var total_preguntas=0;
    var contenedor_actividad = "#contenido_actividad1";

function calificarEmparejamiento(event) {
    puntaje = 0;
    total_preguntas = 0;
    for (var i = 0; i < conexiones.length; i++) {
        if (conexiones[i] == null) continue;
        var p1 = conexiones[i][0];
        var p2 = conexiones[i][1];
        var line = conexiones[i][2];
        if (p1.data('item') == p2.data('item')) {
            p1.css('background-color', colorCorrecto);
            p2.css('background-color', colorCorrecto);
            line.css('background-color', colorCorrecto);
            puntaje++;
        } else {
            p1.css('background-color', colorError);
            p2.css('background-color', colorError);
            line.css('background-color', colorError);
        }
    };
    total_preguntas = $("#grupoA li").length;
    if (total_preguntas == 0) {
        puntaje = 0;
    } else {
        puntaje = (puntaje / total_preguntas) * 100;
    }
    puntaje = puntaje.toFixed(0);
    console.log('Puntaje ' + puntaje);
    var exito = false;
    var mensaje = "Puedes hacerlo mejor"
    if (puntaje == 100) {
        exito = true;
        mensaje = "¡Felicitaciones!"
    }
    mostrarCalificacion(modalID, puntaje + '%', mensaje, exito, init_actividad_1);

}

function getColor() {
    //'#ad123c', '#ffd200', #49a5aa
    var colors = ['#b4c6e7;'];
    var index = Math.floor(Math.random() * (colors.length - 0)) + 0;
    return colors[index];
}

function updateLines() {
    for (var i = 0; i < conexiones.length; i++) {
        if (conexiones[i] == null) continue;
        var p1 = conexiones[i][0];
        var p2 = conexiones[i][1];
        var line = conexiones[i][2];
        var x1 = p1.offset().left - $(contenedor_actividad).offset().left + p1.outerWidth() - 4;
        var y1 = p1.offset().top - $(contenedor_actividad).offset().top + p1.outerHeight() / 2;
        var x2 = p2.offset().left - $(contenedor_actividad).offset().left;
        var y2 = p2.offset().top - $(contenedor_actividad).offset().top + p2.outerHeight() / 2;
        var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) - 2;
        var angle = 180 / 3.1415 * Math.acos((p2.offset().top - p1.offset().top) / length);
        if (x2 > x1) angle *= -1;
        line.css('top', y1).css('left', x1);
        line.css('height', length).css('-webkit-transform', 'rotate(' + angle + 'deg)').css('-moz-transform', 'rotate(' + angle + 'deg)').css('-o-transform', 'rotate(' + angle + 'deg)').css('-ms-transform', 'rotate(' + angle + 'deg)').css('transform', 'rotate(' + angle + 'deg)');
    };
}

function linkMouseMoveEvent(event) {
    if (!ismove) {
        return
    };
    if (line) {
        var x1 = p1.offset().left + p1.outerWidth();
        var y1 = p1.offset().top + p1.outerHeight() / 2;
        var x2 = event.pageX;
        var y2 = event.pageY;
        if (p2) {
            x2 = p2.offset().left;
            y2 = p2.offset().top + p2.outerHeight() / 2;
        }
        var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        var angle = 180 / 3.1415 * Math.acos((y2 - y1) / length);
        if (x2 > x1) angle *= -1;
        line.css('height', length).css('-webkit-transform', 'rotate(' + angle + 'deg)').css('-moz-transform', 'rotate(' + angle + 'deg)').css('-o-transform', 'rotate(' + angle + 'deg)').css('-ms-transform', 'rotate(' + angle + 'deg)').css('transform', 'rotate(' + angle + 'deg)');
    }
}

function linkMouseMoveEventStart(event) {
    if (p1) {
        p1.removeClass("active");
        p1 = null;
        line.remove();
    }
    if ($(event.currentTarget).hasClass('active')) {
        clear($(event.currentTarget).data('line'));
    };
    ismove = true;
    p1 = $(event.currentTarget);
    p1.addClass('active');
    line = $('<div class="link-line"></div>').appendTo(contenedor_actividad);

    line.css('top', p1.offset().top - $(contenedor_actividad).offset().top + p1.outerWidth() / 2).css('left', p1.offset().left - $(contenedor_actividad).offset().left + p1.outerHeight());
}

function linkMouseMoveEventStop(event) {
    if (!ismove) {
        return;
    }
    if ($(event.currentTarget).hasClass('active')) {
        clear($(event.currentTarget).data('line'));
    }
    ismove = false;
    p2 = $(event.currentTarget);
    p2.addClass('active');
    var lineAux = line.clone();
    var color = getColor();
    p1.css('background-color', color);
    p2.css('background-color', color);
    p1.data('line', conexiones.length);
    p2.data('line', conexiones.length);
    lineAux.css('background-color', color);
    lineAux.appendTo(contenedor_actividad)
    conexiones.push([p1, p2, lineAux]);
    line.remove();
    p1 = null;
    p2 = null;
    line = null;
    updateLines();
}

function clear(index) {
    //p1
    conexiones[index][0].css('background-color', '').removeClass('active');
    //p2
    conexiones[index][1].css('background-color', '').removeClass('active');
    //linea
    conexiones[index][2].remove();
    //conexiones.splice(index, 1);
    conexiones[index] = null;
}

function init_actividad_1() {
        //Redibuja las lineas cuando se redimensiona la ventana.
        $(window).on('resize', function() {
            updateLines();
        });
        var desorden1=shuffle($('#contenido_actividad1 #grupoB li'))
        $("#grupoB").html(desorden1)
        
        $("#grupoA li").off();
        $("#grupoB li").off();
        $(document).off('mousemove');
        $("#content").off('dragstart');
        p1 = null;
        p2 = null;
        $('.link-line').remove();
        conexiones = [];
        $('.list-group-item').removeClass('active').attr('style', '');

        $("#grupoA li").on('mousedown', linkMouseMoveEventStart);
        $(document).on('mousemove', linkMouseMoveEvent);
        $("#grupoB li").on('mouseup', linkMouseMoveEventStop);
        $("#grupoB li").on('mousemove', function(event) {
            if (p1 != null) {
                p2 = $(event.currentTarget);
            }
        });
        $("#grupoB li").on('mouseleave', function(event) {
            p2 = null;
        });
        $("#content").on('dragstart', function(event) {
            event.preventDefault();
            return;
        });
        $("#calificar").on('click', calificarEmparejamiento);

    }

    //evento de onready
    $(document).on('ready',init_actividad_1);
})()