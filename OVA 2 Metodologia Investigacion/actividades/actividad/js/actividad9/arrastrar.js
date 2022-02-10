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
	var i2 = 0;
	var res1 = [];
	var res2 = [];
		console.log(res1 + ' res1');
	$('.cont1>p').each(function (){
		console.log(res1[i] + ' res1');
	    res1[i] = $(this).attr('class');
	    i++;
	});
	$('.cont2>p').each(function (){
	    res2[i2] = $(this).attr('class');
	    
	    i2++;
	});
	var puntaje = 0;
	for (var i = 0; i < res1.length; i++){
	  if (res1[i] == 'uno inactivo'){
	    puntaje = puntaje + 11.1;
	  }
	}
	for (var i = 0; i < res2.length; i++){
	  if (res2[i] == 'dos inactivo'){
	    puntaje = puntaje + 11.1;
	  }
	}
	if (puntaje >= 75) {
	    $('.img_res').html('<img src="../img/img9/bien.png" style="max-width: 90%; margin-top: 5%;">');
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.mensaje').text("¡Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="../img/img9/mal.png" style="max-width: 80%; margin-top: 5%;">');
	    $('.mensaje').text("¡Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
	}
}

function reiniciar(){
  location.reload();
}
