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
	var i2 = 0;
	var res1 = [];
	var res2 = [];
	$('.cont1>p').each(function (){
	    res1[i] = $(this).attr('class');
	    i++;
	});
	$('.cont2>p').each(function (){
	    res2[i2] = $(this).attr('class');
	    
	    i2++;
	});
	var puntaje = 100;
	for (var i = 0; i < res1.length; i++){
	  if (res1[i] == 'dos'){
	    puntaje = puntaje - 11.1;
	  }
	}
	for (var i = 0; i < res2.length; i++){
	  if (res2[i] == 'uno'){
	    puntaje = puntaje - 11.1;
	  }
	}
	if (puntaje >= 75) {
	    $('.img_res').html('<img src="../img/img9/bien.png" style="max-width: 90%;">');
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.mensaje').text("¬°Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="../img/img9/mal.png" style="max-width: 90%;">');
	    $('.mensaje').text("¬°Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
	}
}

function reiniciar(){
  location.reload();
}
