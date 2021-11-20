$(document).ready(function() {
	/*var img1 = `
				<div class="content_img_questionario">
					<div class="img_questionario d-flex">
						<h2 style="color: #000; margin: auto;">1</h2>			
					</div>
				</div>
				`;
	var img2 = `
				<div class="content_img_questionario">
					<div class="img_questionario d-flex">
						<h2 style="color: #000; margin: auto;">2</h2>			
					</div>
				</div>
				`;
	var img3 = `
				<div class="content_img_questionario">
					<div class="img_questionario d-flex">
						<h2 style="color: #000; margin: auto;">3</h2>			
					</div>
				</div>
				`;
	var img4 = `
				<div class="content_img_questionario">
					<div class="img_questionario d-flex">
						<h2 style="color: #000; margin: auto;">4</h2>			
					</div>
				</div>
				`;
	var img5 = `
				<div class="content_img_questionario">
					<div class="img_questionario d-flex">
						<h2 style="color: #000; margin: auto;">5</h2>			
					</div>
				</div>
				`;*/

	$("#cuestionario-2").css('display','none');
	$("#cuestionario-3").css('display','none');
	$("#cuestionario-4").css('display','none');


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
	$("#cuestionario-"+slide).css('display','block');
	$(".img_questionario1, .img_questionario2, .img_questionario3, .img_questionario4").addClass('d-none');
		/*$("#siguente").removeData('slide');
		$("#atras").removeData('slide');*/
	if (slide == 1) {
		$("#siguente").data('slide', 2);
		$(".img_questionario1").removeClass('d-none');
		
		/*$("#atras").data('slide', 3);*/
	}else if (slide == 2) {
		$("#siguente").data('slide', 3);
		$(".img_questionario2").removeClass('d-none');
		
		/*$("#atras").data('slide', 1);*/
	}else if (slide == 3) {
		$("#siguente").data('slide', 4);
		$(".img_questionario3").removeClass('d-none');
		
		/*$("#atras").data('slide', 2);*/
	}else if (slide == 4) {
		$("#siguente").data('slide', 1);
		$(".img_questionario4").removeClass('d-none');
		$('.calificar').css({
								'visibility': 'visible',
								'color': '#FFF',
								'background': '#003442'
							});
		/*$("#atras").data('slide', 2);*/
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