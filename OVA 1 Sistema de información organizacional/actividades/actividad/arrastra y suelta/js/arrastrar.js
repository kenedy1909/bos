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

function calificar(){
	var i = 0;
	var res1 = [];
	$('.cont1>p').each(function (){
	    res1[i] = $(this).attr('class');
	    i++;
	});

	var puntaje = 100;
	for (var i = 0; i < res1.length; i++){
	  if (res1[i] == 'falso'){
	    puntaje = puntaje - 50;
	  }
	}
	if (res1.length < 5 ) {
		if (puntaje  == 100 && res1.length >= 3) {
			puntaje = 75;
		}else{
			puntaje = 25;
		}
	}

	if (puntaje >= 75) {
	    $('.img_res').html('<img src="img/bien.png" style="max-width: 90%; margin: auto">');
	    $('.puntaje').text("100%");
	    $('.mensaje').text("¡Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="img/mal.png" style="max-width: 90%; margin: auto; background-color:#FFC000; border-radius:50%; padding:3px;">');
	    $('.mensaje').text("¡Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
	}
}

function reiniciar(){
  location.reload();
}
