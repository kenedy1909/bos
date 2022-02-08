$(document).ready(function() {
	var img1 = `
				<div class="img_questionario d-flex" style="color: black;font-weight: bold;font-size: 28px;padding: 5px 16px;">1
								
				</div>
				`;
	var img2 = `
				<div class="img_questionario d-flex" style="color: black;font-weight: bold;font-size: 28px;padding: 5px 16px;">2
								
				</div>
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
		$(".imagen23").removeClass('invisible');
		
		/*$("#atras").data('slide', 3);*/
	}else if (slide == 2) {
		$("#siguente").data('slide', 1);
		$(".imagen23").addClass('invisible');
		$('.calificar').css({
								'visibility': 'visible',
								'color': '#FFF',
								'background': '#003442'
							});
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