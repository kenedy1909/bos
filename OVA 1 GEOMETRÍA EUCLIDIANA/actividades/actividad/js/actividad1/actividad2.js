$(document).ready(function() {
	var img1 = `
				<img class="img_questionario" src="../img/img1/Geometria euclidiana-03.png">
				`;
	var img2 = `
				<img class="img_questionario" src="../img/img1/Geometria euclidiana-03.png">
				`;
	$(".img_questionario1").html(img1);
	$(".img_questionario2").html(img2);

	$("#cuestionario-2").css('display','none');

	/*$(".siguente1").data('slide', 2);
	$(".siguente2").data('slide', 3);
	$(".siguente3").data('slide', 1);*/
	$("#siguente").on('click', siguente);
	/*$("#atras").on('click', atras);*/
});

function siguente(){
	var slide = $(this).data('slide');
	$("#cuestionario-1").css('display','none');
	$("#cuestionario-2").css('display','none');
	$("#cuestionario-"+slide).css('display','block');
		/*$("#siguente").removeData('slide');
		$("#atras").removeData('slide');*/
	if (slide == 1) {
		$("#siguente").data('slide', 2);
		$("#btnCalificar").hide();
		/*$("#atras").data('slide', 3);*/
	}else if (slide == 2) {
		$("#siguente").data('slide', 1); 
		$("#btnCalificar").show();
		/*$("#atras").data('slide', 1);*/
	}
}