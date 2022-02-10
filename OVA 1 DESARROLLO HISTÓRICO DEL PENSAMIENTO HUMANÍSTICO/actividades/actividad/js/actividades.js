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
                $('.img_res').html('<img src="../img/img7/bien.png" style="max-width: 90%; margin: auto">');
                $('.mensaje').text("¡Felicitaciones!");
                $('.puntaje').text("100%");
                $('.btns_modal').html('<button style="font-size: 20px;color: #8b6229;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
                $('#exampleModal').modal('show');
    } else {
               $('.img_res').html('<img src="../img/img7/mal.png" style="max-width: 80%; margin: auto">');
                $('.mensaje').text("¡Puedes hacerlo mejor!");
                $('.puntaje').text("25%");
                $('.btns_modal').html('<button style="font-size: 20px;color: #8b6229;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
                $('#exampleModal').modal('show');
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