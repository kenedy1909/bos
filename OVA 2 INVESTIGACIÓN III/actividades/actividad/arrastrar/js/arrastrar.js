var ubicar;
var lugar;
var num;
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";

    for (var i = 1; i <= 3; i++) {
    	$(".cont"+i).attr('ondrop', 'drop(event, '+i+')');
    	$(".cont"+i).attr('ondragover', 'allowDrop(event)');
    }
    console.log("activo")
    for (var i = 1; i <= 3; i++) {
    	ubicar = $("#dragtarget"+i).parent('.droptarget');
	    lugar = $(ubicar).attr('class');
    	if (lugar != undefined) {
	    	num = (lugar.substring(15,16));
	    	$(".cont"+num).removeAttr('ondrop');
	    	$(".cont"+num).removeAttr('ondragover');
    		console.log(num);
    	}
    } 
    console.log("inactivo")
    
    ubicar = "";
    lugar = "";
    num = "";
}

function dragEnd(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
    
    for (var i = 1; i <= 3; i++) {
    	$(".cont"+i).removeAttr('ondrop');
    	$(".cont"+i).removeAttr('ondragover');
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, num) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));

    /*$(".cont"+num).removeAttr('ondrop ondragover');*/
}

function calificar(){
	var i = 0;
	var i2 = 0; 
	var i3 = 0;
	var res1 = [];
	var res2 = [];
	var res3 = [];
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
	var puntaje = 0;
	for (var i = 0; i < res1.length; i++){
	  if (res1[i] == 'dos'){
		puntaje = puntaje + 33.33;
	  }
	}
	for (var i = 0; i < res2.length; i++){
	  if (res2[i] == 'uno'){
	    puntaje = puntaje + 33.33;
	  }
	}
	for (var i = 0; i < res3.length; i++){
	  if (res3[i] == 'tres'){
	    puntaje = puntaje + 33.33;
	  }
	}
	puntaje = Math.round(puntaje);
	if (puntaje == 100) {
	    $('.img_res').html('<img src="../../../assets/img/img_ova/bien_naranja.png" style="max-width: 90%; margin-top: 4%;">'); 
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.mensaje').text("¡Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;" onclick="reiniciar();">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="../../../assets/img/img_ova/mal_naranja.png" style="max-width: 90%; margin-top: 4%;">');
	    $('.mensaje').text("¡Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
	}
}

function reiniciar(){
  location.reload();
}
