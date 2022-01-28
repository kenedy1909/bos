var ubicar;
var lugar;
var num;
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";

    for (var i = 1; i <= 4; i++) {
    	$(".cont"+i).attr('ondrop', 'drop(event, '+i+')');
    	$(".cont"+i).attr('ondragover', 'allowDrop(event)');
    }
    console.log("activo")
    for (var i = 1; i <= 4; i++) {
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
    
    for (var i = 1; i <= 4; i++) {
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
	var i4 = 0;
	var i5 = 0;
	var i6 = 0;
	var i7 = 0;
	var res1 = [];
	var res2 = [];
	var res3 = [];
	var res4 = [];
	var res5 = [];
	var res6 = [];
	var res7 = [];
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
	/*$('.cont5>p').each(function (){
	    res5[i5] = $(this).attr('class');
	    
	    i5++;
	});
	$('.cont6>p').each(function (){
	    res6[i6] = $(this).attr('class');
	    
	    i6++;
	});
	$('.cont7>p').each(function (){
	    res7[i7] = $(this).attr('class');
	    
	    i7++;
	});*/
	var puntaje = 0;
	for (var i = 0; i < res1.length; i++){
	  console.log(res1[i]);
	  if (res1[i] == 'cuatro'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res2.length; i++){
	  console.log(res1[i]);
	  if (res2[i] == 'uno'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res3.length; i++){
	  console.log(res1[i]);
	  if (res3[i] == 'tres'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res4.length; i++){
	  console.log(res1[i]);
	  if (res4[i] == 'dos'){
	    puntaje = puntaje + 25;
	  }
	}
	/*for (var i = 0; i < res5.length; i++){
	  console.log(res1[i]);
	  if (res5[i] == 'seis'){
	    puntaje = puntaje + 14.28;
	  }
	}
	for (var i = 0; i < res6.length; i++){
	  console.log(res1[i]);
	  if (res6[i] == 'cinco'){
	    puntaje = puntaje + 14.28;
	  }
	}
	for (var i = 0; i < res7.length; i++){
	  console.log(res1[i]);
	  if (res7[i] == 'siete'){
	    puntaje = puntaje + 14.28;
	  }
	}*/
	if (puntaje >= 75) {
	    $('.img_res').html('<img src="img/fuegos-artificiales.png" style="max-width: 90%;">');
        $('.btns_modal').html('<button type="button" class="btn btnsModal" data-dismiss="modal" style="margin-right: 5px; background: var(--bg-color-dark);width: 15%;color: #fff;">cerrar</button>');
        $('#texto-modal').html('<b style="color: var(--bg-color);">¡FELICITACIONES!</b><br> Su puntaje es <b style="color: var(--bg-color);">'+Math.round(puntaje)+"%</b>");
        /*$('#exampleModal').modal("show");*/
	}else{
	    $('.img_res').html('<img src="img/mala-critica.png" style="max-width: 90%;">');
	    $('#texto-modal').html('<br> Su puntaje es <b style="color: var(--bg-color);">'+Math.round(puntaje)+"%</b>");
	    $('.btns_modal').html('<button id="add" class="btn btnsModal" onclick="reiniciar();">INTÉNTELO NUEVAMENTE</button>');
		/*$('#exampleModal').modal("show");*/
	}
}

function reiniciar(){
  location.reload();
}
