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

    let padre = document.getElementById(data).closest('.droptarget');
	padre.setAttribute("ondrop", "return false;");
}

function calificar(){
	var i = 0;
	var i2 = 0;
	var i3 = 0;
	var i4 = 0;
	var res1 = [];
	var res2 = [];
	var res3 = [];
	var res4 = [];
	$('.cont1>p').each(function (){
	    res1[i] = $(this).attr('class');
	    
	    i++;
	});
	$('.cont2>p').each(function (){
	    res2[i2] = $(this).attr('class');
	    
	    i2++;
	});
	$('.cont3>p').each(function (){
	    res3[i3] = $(this).attr('class');
	    
	    i3++;
	});
	$('.cont4>p').each(function (){
	    res4[i4] = $(this).attr('class');
	    
	    i4++;
	});
	var puntaje = 0;

	
	/*if (res1[0] == '' && res2[0] == '' && res3[0] == '' && res4[0] == '' ){
	    puntaje = 0;
	}*/

	for (var i = 0; i < res1.length; i++){
		
	  if (res1[0] == 'uno'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res2.length; i++){
		
	  if (res2[0] == 'dos'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res3.length; i++){
		
	  if (res3[0] == 'tres'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res4.length; i++){
		
	  if (res4[0] == 'cuatro'){
	    puntaje = puntaje + 25;
	  }
	}
	if (puntaje >= 75) {
	    $('.img_res').html('<img src="img/bien.png" style="max-width: 80%;margin: auto;">');
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.mensaje').text("¡Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;min-width: 20%;font-weight: bold;color: #006092;font-size: 22px;padding: 5px 10px;">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="img/mal.png" style="max-width: 80%;margin: auto;">');
	    $('.mensaje').text("¡Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button id="add" class="btn" style="margin-right: 5px;min-width: 20%;font-weight: bold;color: #006092;font-size: 22px;padding: 5px 10px;" onclick="reiniciar();">Volver a intentar</button>');
	}
}

function reiniciar(){
  location.reload();
}
