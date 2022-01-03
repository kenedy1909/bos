$(document).ready(function() {
	var img1 = `
				<div class="img_questionario"><img class="img_quest" src="../../../assets/img/img_ova/sabermas.webp"></div>
				`;
	var img2 = `
				<div class="img_questionario"><img class="img_quest" src="../../../assets/img/img_ova/sabermas.webp"></div>
				`;
	$(".img_questionario1").html(img1);
	$(".img_questionario2").html(img2);
	$(".img_questionario3").html(img1);
	$(".img_questionario4").html(img2);
	$(".img_questionario5").html(img1);
	$(".img_questionario6").html(img2);
	$(".img_questionario7").html(img1);

	$("#cuestionario-2").css('display','none');
	$("#cuestionario-3").css('display','none');
	$("#cuestionario-4").css('display','none');
	$("#cuestionario-5").css('display','none');
	$("#cuestionario-6").css('display','none');
	$("#cuestionario-7").css('display','none');


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
	$("#cuestionario-4").css('display','none');
	$("#cuestionario-5").css('display','none');
	$("#cuestionario-6").css('display','none');
	$("#cuestionario-7").css('display','none');
	$("#cuestionario-"+slide).css('display','block');
		/*$("#siguente").removeData('slide');
		$("#atras").removeData('slide');*/
	if (slide == 1) {
		$("#siguente").data('slide', 2);
		/*$("#atras").data('slide', 3);*/
	}else if (slide == 2) {
		$("#siguente").data('slide', 3);
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 3) {
		$("#siguente").data('slide', 4);
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 4) {
		$("#siguente").data('slide', 5);
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 5) {
		$("#siguente").data('slide', 6);
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 6) {
		$("#siguente").data('slide', 7);
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 7) {
		$("#siguente").data('slide', 1);
		/*$("#atras").data('slide', 1);*/
	}
}