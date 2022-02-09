var ubicar;
var lugar;
var num;
/*$('.carousel').carousel({
  interval: false,
});*/

/*function ocultar_fin(num) {
	if (num == 1) {
		$("#add").removeClass('d-none');
	}else if (num == 2) {
		$("#add").addClass('d-none');
	}
}*/
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";

    for (var i = 1; i <= 4; i++) {
    	if (i >= 10) {
	    	$(".cont"+i).attr('ondrop', 'drop(event, '+i+')');
	    	$(".cont"+i).attr('ondragover', 'allowDrop(event)');
			$('.text'+i).show();
    	}else{
	    	$(".cont0"+i).attr('ondrop', 'drop(event, '+i+')');
	    	$(".cont0"+i).attr('ondragover', 'allowDrop(event)');
			$('.text0'+i).show();
    	}
    }
    console.log("activo")
    for (var i = 1; i <= 4; i++) {
    	ubicar = $("#dragtarget"+i).parent('.droptarget');
	    lugar = $(ubicar).attr('class');
    	if (lugar != undefined) {
	    	num = (lugar.substring(15,17));
	    	$(".cont"+num).removeAttr('ondrop');
	    	$(".cont"+num).removeAttr('ondragover');
    		console.log(num + ' num');
    		$('.text'+num).hide();
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
    	if (i >= 10) {
	    	$(".cont"+i).attr('ondrop', 'drop(event, '+i+')');
	    	$(".cont"+i).attr('ondragover', 'allowDrop(event)');
			$('.text'+i).show();
    	}else{
	    	$(".cont0"+i).attr('ondrop', 'drop(event, '+i+')');
	    	$(".cont0"+i).attr('ondragover', 'allowDrop(event)');
			$('.text0'+i).show();
    	}
    }
    for (var i = 1; i <= 4; i++) {
    	ubicar = $("#dragtarget"+i).parent('.droptarget');
	    lugar = $(ubicar).attr('class');
    	if (lugar != undefined) {
	    	num = (lugar.substring(15,17));
    		console.log(num + ' num');
    		$('.text'+num).hide();
    	}
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
	/*var i5 = 0;
	var i6 = 0;
	var i7= 0;
	var i8 = 0;
	var i9 = 0;
	var i10 = 0;
	var i11 = 0;
	var i12 = 0;
	var i13 = 0;
	var i14= 0;
	var i15 = 0;
	var i16 = 0;
	var i17 = 0;
	var i18 = 0;
	var i19 = 0;
	var i20 = 0;*/
	var res1 = [];
	var res2 = [];
	var res3 = [];
	var res4 = [];
	/*var res5 = [];
	var res6 = [];
	var res7 = [];
	var res8 = [];
	var res9 = [];
	var res10 = [];
	var res11 = [];
	var res12 = [];
	var res13 = [];
	var res14 = [];
	var res15 = [];
	var res16 = [];
	var res17 = [];
	var res18 = [];
	var res19 = [];
	var res20 = [];*/
	$('.cont01>p').each(function (){
	    res1[i] = $(this).attr('class');
	    i++;
	});
	$('.cont02>p').each(function (){
	    res2[i2] = $(this).attr('class');
	    i2++;
	});
	$('.cont03>p').each(function (){
	    res3[i3] = $(this).attr('class');
	    i3++;
	});
	$('.cont04>p').each(function (){
	    res4[i4] = $(this).attr('class');
	    i4++;
	});
	/*$('.cont05>p').each(function (){
	    res5[i5] = $(this).attr('class');
	    i5++;
	});
	$('.cont06>p').each(function (){
	    res6[i6] = $(this).attr('class');
	    i6++;
	});
	$('.cont07>p').each(function (){
	    res7[i7] = $(this).attr('class');
	    i7++;
	});
	$('.cont08>p').each(function (){
	    res8[i8] = $(this).attr('class');
	    i8++;
	});
	$('.cont09>p').each(function (){
	    res9[i9] = $(this).attr('class');
	    i9++;
	});
	$('.cont10>p').each(function (){
	    res10[i10] = $(this).attr('class');
	    i10++;
	});
	$('.cont11>p').each(function (){
	    res11[i11] = $(this).attr('class');
	    i11++;
	});
	$('.cont12>p').each(function (){
	    res12[i12] = $(this).attr('class');
	    i12++;
	});
	$('.cont13>p').each(function (){
	    res13[i13] = $(this).attr('class');
	    i13++;
	});
	$('.cont14>p').each(function (){
	    res14[i14] = $(this).attr('class');
	    i14++;
	});
	$('.cont15>p').each(function (){
	    res15[i15] = $(this).attr('class');
	    i15++;
	});
	$('.cont16>p').each(function (){
	    res16[i16] = $(this).attr('class');
	    i16++;
	});
	$('.cont17>p').each(function (){
	    res17[i17] = $(this).attr('class');
	    i17++;
	});
	$('.cont18>p').each(function (){
	    res18[i18] = $(this).attr('class');
	    i18++;
	});
	$('.cont19>p').each(function (){
	    res19[i19] = $(this).attr('class');
	    i19++;
	});
	$('.cont20>p').each(function (){
	    res20[i20] = $(this).attr('class');
	    i20++;
	});*/
		console.log(res4 + 'res4');
	var puntaje = 0;
	for (var i = 0; i < res1.length; i++){
	  if (res1[i] == 'uno'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res2.length; i++){
	  if (res2[i] == 'cuatro'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res3.length; i++){
	  if (res3[i] == 'dos'){
	    puntaje = puntaje + 25;
	  }
	}
	for (var i = 0; i < res4.length; i++){
	  if (res4[i] == 'tres'){
	    puntaje = puntaje + 25;
	  }
	}
	console.log(puntaje + 'puntaje');
	/*for (var i = 0; i < res5.length; i++){
	  if (res5[i] == 'seis'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res6.length; i++){
	  if (res6[i] == 'cinco'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res7.length; i++){
	  if (res7[i] == 'ocho'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res8.length; i++){
	  if (res8[i] == 'siete'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res9.length; i++){
	  if (res9[i] == 'nueve'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res10.length; i++){
	  if (res10[i] == 'once'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res11.length; i++){
	  if (res11[i] == 'diez'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res12.length; i++){
	  if (res12[i] == 'doce'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res13.length; i++){
	  if (res13[i] == 'catorce'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res14.length; i++){
	  if (res14[i] == 'trece'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res15.length; i++){
	  if (res15[i] == 'dieciseis'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res16.length; i++){
	  if (res16[i] == 'quince'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res17.length; i++){
	  if (res17[i] == 'dieciocho'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res18.length; i++){
	  if (res18[i] == 'diecisiete'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res19.length; i++){
	  if (res19[i] == 'diecinueve'){
	    puntaje = puntaje + 5;
	  }
	}
	for (var i = 0; i < res20.length; i++){
	  if (res20[i] == 'veinte'){
	    puntaje = puntaje + 5;
	  }
	}*/
	if (puntaje >= 75) {
	    $('.img_res').html('<img src="img/bien.png" style="max-width: 90%; margin: auto;">');
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.mensaje').text("¡Felicitaciones!");
	    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 22px;color: #8b6229;font-weight: bold;margin-top: -15px;width: 20%;">cerrar</button>');
	}else{
	    $('.img_res').html('<img src="img/mal.png" style="max-width: 90%; margin: auto;">');
	    $('.mensaje').text("¡Puedes hacerlo mejor!");
	    $('.puntaje').text(Math.round(puntaje)+"%");
	    $('.btns_modal').html('<button style="font-size: 20px;color: #8b6229;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
	}
}

function reiniciar(){
  location.reload();
}
