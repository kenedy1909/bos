function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
}

function dragEnd(event, num) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
	$('#dragtarget'+num).addClass("inactivo");

}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
	/*let padre = document.getElementById(data).parentElement;
	padre = $(padre).find('p');*/
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


	// if (res1.length < 5 ) {
	// 	if (puntaje  == 100 && res1.length >= 3) {
	// 		puntaje = 75;
	// 	}else{
	// 		puntaje = 0;
	// 	}
	// }

	// for (var i = 0; i < res1.length; i++){
	// 	if (res1[i] == 'verdadero'){
	// 	  puntaje = puntaje + 20;
	// 	}
	//   }

		// console.log(puntaje);

	if (puntaje > 80) {
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
