function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
}

function dragEnd(event, num) {
	let ubicar;
	let lugar;
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
	ubicar = $("#dragtarget"+num).parent('.droptarget');
	    lugar = $(ubicar).attr('class');
    	if (lugar != undefined) {
			$('#dragtarget'+num).addClass("inactivo");
    	}


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
		console.log(res1[i]);
	    res1[i] = $(this).attr('class');
	    i++;
	});

	var puntaje=0;
	for (var i = 0; i < res1.length; i++){
		
		if (res1[i] == 'verdadero inactivo'){
		  puntaje = puntaje + 20;
		}
  }
	let dato =res1.filter(element => element == 'falso inactivo');
	if(dato == 'falso inactivo'){
		puntaje = 0;
		console.log(puntaje);
	}
	if(res1.length > 5){
		puntaje = 0;
	}

	if (puntaje >= 75) {
	    $('.img_res').html('<img src="../img/img13/bien.png" style="max-width: 90%; margin: auto;">');
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.mensaje').text("¡Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;background: #AB751D;">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="../img/img13/mal.png" style="max-width: 90%; margin: auto;">');
	    $('.mensaje').text("¡Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;background: #AB751D;">cerrar</button><button id="add" style="background: #AB751D;" class="btn" onclick="reiniciar();">reiniciar</button>');
	}
}

function reiniciar(){
  location.reload();
}
