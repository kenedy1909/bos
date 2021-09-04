$(document).ready(function() {
	console.log(num_aleatorio_1);
	console.log(num_aleatorio_2);
	console.log(num_aleatorio_3);
	var img1 = `
								<img src="./img/imagen67.png" class="w-100" style="width: 60%; margin: auto;">
				`;
	var img2 = `
				<div class="img_questionario d-flex">
								<img src="./img/imagen52.png" class="w-100" style="width: 60%; margin: auto;">
								</div>
				`;
	var img3 = `
				<div class="img_questionario d-flex">
								<img src="./img/triangulo (3).png" class="w-100" style="
				    width: 90%;
				    margin: auto;
				">
								</div>
				`;
	/*$(".img_questionario1").html(img1);
	$(".img_questionario2").html(img2);
	$(".img_questionario3").html(img3);*/

	$("#cuestionario-2").css('display','none');
	$("#cuestionario-3").css('display','none');
	$(".img-cuestionario-1").css('display','none');
	$(".img-cuestionario-2").css('display','none');
	$(".img-cuestionario-3").css('display','none');
	$(".img-cuestionario-"+num_aleatorio_1).css('display','block');

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
	$("#cuestionario-3").css('display','none');
	$(".img-cuestionario-1").css('display','none');
	$(".img-cuestionario-2").css('display','none');
	$(".img-cuestionario-3").css('display','none');
	$("#cuestionario-"+slide).css('display','block');
		/*$("#siguente").removeData('slide');
		$("#atras").removeData('slide');*/
	if (slide == 1) {
		$(".img-cuestionario-"+num_aleatorio_1).css('display','block');
		$("#siguente").data('slide', 2);
		/*$("#atras").data('slide', 3);*/
	}else if (slide == 2) {
		$(".img-cuestionario-"+num_aleatorio_2).css('display','block');
		$("#siguente").data('slide', 3);
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 3) {
		$(".img-cuestionario-"+num_aleatorio_3).css('display','block');
		$("#siguente").data('slide', 1);
		/*$("#atras").data('slide', 1);*/
	}
}
/*function atras(){
	var slide = $(this).data('slide');
	$("#cuestionario-1").css('display','none');
	$("#cuestionario-2").css('display','none');
	$("#cuestionario-3").css('display','none');
	$("#cuestionario-"+slide).css('display','block');
	$("#siguente").removeData('slide');
		$("#atras").removeData('slide');
	if (slide == 1) {
		$("#siguente").data('slide', 2);
		$("#atras").data('slide', 3);
	}else if (slide == 2) {
		$("#siguente").data('slide', 3);
		$("#atras").data('slide', 1);
	}else if (slide == 3) {
		$("#siguente").data('slide', 1);
		$("#atras").data('slide', 2);
	}
}*/