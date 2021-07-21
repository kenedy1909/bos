var scorm = pipwerks.SCORM;
var tema = 0;
var active = 0;

$( document ).ready(function() {
    $("#content-ova").load("base/portada.html");
    init();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_unidad').popover({
            container: '#porcentaje_unidad',
            html: true,
            content:'<div id="percent_unidad" class="blue"></div>',
            template: '<li class="c-header-nav-item percircle_propio" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></li>'
        });
    })

    /*$("#porcentaje_unidad").click();*/
    /*$(".bs-popover-right").css('width','65px');*/
    /*$(".bs-popover-right").css({
        'position':'inherit;',
        'transform':'translate3d(0, 0, 0px);',
        'width':'65px'
    });*/

});

var total = 200;
function actualizarprogress(){
    var naveg = 0;
    var done = 0;
    
    var unidad = $(".container-fluid").data("unidad");
    if(unidad == 1){
        naveg = 0;
    }else if(unidad == 2){
        naveg = 10;
    }
    done = $(".done").length;
    if(unidad == 2){
        done--;
    }
    /*alert(naveg);
    alert(done);
    alert(active);*/
    total_porcentaje = parseInt(((done+active+naveg)*100)/23);
    $(".number").html(total_porcentaje+'%');
    var pixel = parseInt(((total_porcentaje*157)/100)+200);
    /*alert(pixel);
    alert(pixel+200);*/
    /*total = total+6;*/
    /*alert(done+active+naveg);*/
    /*$(".up").css(
            'stroke','#003140',
            'stroke-width','10px',
            'stroke-dasharray', total,
            'stroke-dashoffset','415'
    );*/
    $(".up").css({ "stroke": "#003140", 
                    "stroke-width": "10px",
                    "stroke-dasharray": pixel,
                    "stroke-dashoffset":"200"
                });
}

$('#porcentaje_unidad').on('shown.bs.popover', function () {
    /*shown.bs.popover*/
    //var numItems = $('.done').length / 2;
    //var porcent = parseFloat((numItems/numSlide) * 100).toFixed( 2 );
    /*var naveg = 0;
    var done = 0;
    
    var unidad = $(".container-fluid").data("unidad");
    if(unidad == 1){
        naveg = 0;
    }else if(unidad == 2){
        naveg = 10;
    }
    done = $(".done").length;
    if(unidad == 2){
        done--;
    }
    var total_porcentaje = parseInt(((done+active+naveg)*100)/23);*/
    /*if (done > 0) {
        active = 1;
    }else{
        avtive = 0;
    }*/
    /*alert(naveg);
    alert(done);
    alert(active);*/
    /*alert((done+active+naveg));*/

    /*$("#percent_unidad").percircle({percent: total_porcentaje ,animate: "true"});*/
})

$( "#terminarCurso" ).click(function(evt) {
    CompletarCurso();
    evt.preventDefault();
});
$( "#changeLocation" ).click(function(evt) {
    EditarLocation();
    evt.preventDefault();
});
$('.link-menu').off('click').on('click', function(evt){
    var link_item = $(this).find("a").attr('href');
    var enlace = link_item.replace('#','');
    $("#content-ova").load("base/"+enlace+".html");
    evt.preventDefault();
});
$('.link-menu-tema').off('click').on('click', function(evt){
    active = 1;
    var link_item = $(this).find("a").attr('href');
    var enlace = link_item.replace('#','');
    $("#content-ova").load("base/unidades/"+enlace+".html");
    evt.preventDefault();
    tema = $(this).data('id');
    console.log(tema);
});
function init(){
    scorm.version = "1.2";
    Mensaje("Iniciando el Curso.");
    var callSucceeded = scorm.init();
    Mensaje("Curso iniciado correctamente? " + callSucceeded);
    ObtenerNombre();
    ObtenerLocation();
}

function Mensaje(msg){
    console.log(msg);
}

function ObtenerNombre(){
    var nombreUser = scorm.get("cmi.core.student_name");
    console.log(nombreUser);
}

function end(){
    Mensaje("Conexion terminada.");
    var callSucceeded = scorm.quit();
    Mensaje("Termino correctamente? " +callSucceeded);
}

function CompletarCurso(){
    Mensaje("Marcando curso como Completado.");
    var callSucceeded = scorm.set("cmi.core.lesson_status", "completed");
    Mensaje("Curso Completado? " + callSucceeded);
}

function EditarLocation(){
    Mensaje("Marcando Localizacion.");
    var callSucceeded2 = scorm.set("cmi.core.lesson_location", "25");
    Mensaje("Curso en la pos 25" + callSucceeded2);
}

function ObtenerLocation(){
    var locacionleson = scorm.get("cmi.core.lesson_location");
    console.log(locacionleson);
}

function setMigaja(bread1,bread2,bread3){
    $(".breadcrumb ").html("");
    $(".breadcrumb").append('<li class="breadcrumb-item">Menú</li><li class="breadcrumb-item">'+bread1+'</li>');
    if (bread2 != "") {
        $(".breadcrumb ").append('<li class="breadcrumb-item">'+bread2+'</li>');
    }
    if (bread3 != "") {
        $(".breadcrumb ").append('<li class="breadcrumb-item">'+bread3+'</li>');
    }
}
window.onunload = function (){
    end();
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
