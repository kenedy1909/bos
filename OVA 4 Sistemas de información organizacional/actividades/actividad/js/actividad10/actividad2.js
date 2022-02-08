$(document).ready(function() {
	var img1 = `
				<div class="rouded-circle p-3 bg-white img_questionario">
					<img width="100%" src="../../../assets/img/img_ova/ec2.png">
				</div>
				`;
	var img2 = `
				<div class="rouded-circle p-3 bg-white img_questionario">
					<img width="100%" src="../../../assets/img/img_ova/ec1.png">
				</div>
				`;
	var img3 = `
				<div class="rouded-circle p-3 bg-white img_questionario">
					<img width="100%" src="../../../assets/img/img_ova/ec12.png">
				</div>
				`;
	var img4 = `
				<div class="rouded-circle p-3 bg-white img_questionario">
					<img width="100%" src="../../../assets/img/img_ova/ven3.png">
				</div>
				`;
	var img5 = `
				<div class="rouded-circle p-3 bg-white img_questionario">
					<img width="100%" src="../../../assets/img/img_ova/redsocial1.png">
				</div>
				`;
	$(".img_questionario1").html(img1);
	$(".img_questionario2").html(img2);
	$(".img_questionario3").html(img3);
	$(".img_questionario4").html(img4);
	$(".img_questionario5").html(img5);

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
		$("#siguente").data('slide', 1);
		/*$("#atras").data('slide', 1);*/
	}
}