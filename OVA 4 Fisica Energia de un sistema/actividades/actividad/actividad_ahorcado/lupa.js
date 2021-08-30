$(document).ready(function () {

    // boton lupa 1
    $("#btnLupa1").mouseenter(function () {
        $("#lupa1").css({
            "width": "110%",
        });
        $("#pLupa1").html('<p class="p-lupa">Está relacionado con el esfuerzo físico.</p>'); 
        $("#pLupa1").show();
    });

    $("#btnLupa1").mouseleave(function () {
        $("#lupa1").css({
            "width": "40%",
        });
        $("#pLupa1").hide();
    });


    // boton lupa 2
    $("#btnLupa2").mouseenter(function () {
        $("#lupa2").css({
            "width": "110%",
        });
        $("#pLupa2").html('<p class="p-lupa">Se realiza por todas las fuerzas que actúan sobre una partícula.</p>'); 
        $("#pLupa2").show();
    });

    $("#btnLupa2").mouseleave(function () {
        $("#lupa2").css({
            "width": "40%",
        });
        $("#pLupa2").hide();
    });

});
