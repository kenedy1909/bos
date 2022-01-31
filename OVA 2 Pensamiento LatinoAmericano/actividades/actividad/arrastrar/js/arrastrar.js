function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
}

function dragEnd(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

function calificar() {
    var i = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;
    var res1 = [];
    var res2 = [];
    var res3 = [];
    var res4 = [];
    $('.cont1>p').each(function() {
        res1[i] = $(this).attr('class');
        i++;
    });
    $('.cont2>p').each(function() {
        res2[i2] = $(this).attr('class');

        i2++;
    });
    $('.cont3>p').each(function() {
        res3[i3] = $(this).attr('class');

        i3++;
    });
    $('.cont4>p').each(function() {
        res4[i4] = $(this).attr('class');

        i4++;
    });
    var puntaje = 0;
    for (var i = 0; i < res1.length; i++) {
        if (res1[i] == 'uno') {
            puntaje = puntaje + 25;
        }
    }
    for (var i = 0; i < res2.length; i++) {
        if (res2[i] == 'dos') {
            puntaje = puntaje + 25;
        }
    }
    for (var i = 0; i < res3.length; i++) {
        if (res3[i] == 'tres') {
            puntaje = puntaje + 25;
        }
    }
    for (var i = 0; i < res4.length; i++) {
        if (res4[i] == 'cuatro') {
            puntaje = puntaje + 25;
        }
    }
    if (puntaje >= 75) {
        $('.img_res').html('<img src="img/bien.png" style="max-width: 80%;margin-top: 14px;">');
        $('.puntaje').text(Math.round(puntaje) + "%");
        $('.mensaje').text("¡Felicitaciones!");
        $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -25px;" onclick="reiniciar()">cerrar</button>');
    } else {
        $('.img_res').html('<img src="img/mal.png" style="max-width: 80%;margin-top: 10px;">');
        $('.mensaje').text("¡Puedes hacerlo mejor!");
        $('.puntaje').text(Math.round(puntaje) + "%");
        $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -25px;" onclick="reiniciar()">Volver a intentar</button>');
    }
}

function reiniciar() {
    location.reload();
}