$(document).ready(function() {
	var img1 = `
				<div class="img_questionario d-flex">
					<h2 style="color: #000; margin: auto; width: 90%;">1</h2>			
				</div>
				`;
	var img2 = `
				<div class="img_questionario d-flex">
					<h2 style="color: #000; margin: auto; width: 90%;">2</h2>			
				</div>
				`;
	var img3 = `
				<div class="img_questionario d-flex">
					<h2 style="color: #000; margin: auto; width: 90%;">3</h2>			
				</div>
				`;
	var img4 = `
				<div class="img_questionario d-flex">
					<h2 style="color: #000; margin: auto; width: 90%;">4</h2>			
				</div>
				`;
	var img5 = `
				<div class="img_questionario d-flex">
					<h2 style="color: #000; margin: auto; width: 90%;">5</h2>			
				</div>
				`;
	$(".img_questionario1").html(img1);
	$(".img_questionario2").html(img2);
	$(".img_questionario3").html(img3);
	$(".img_questionario4").html(img4);

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
		
		/*$("#atras").data('slide', 2);*/
	}else if (slide == 4) {
		$("#siguente").data('slide', 1);
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