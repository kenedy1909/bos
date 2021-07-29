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

//funcion que tiene la responsabilidad de guardar la calificacion en el scorm
function registrarActividad(calificacion) {
    try {
        //implementar API SCORM que registra la calificación
        //is_internet_connected(guardarActividadServer,parametros);
    } catch (e) {
        console.log(e);
    }
}