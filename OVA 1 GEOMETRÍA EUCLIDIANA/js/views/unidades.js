$( document ).ready(function() {
    setMigaja("Unidades de aprendizaje","","");
    flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
        onItemSwitch: function (currentItem,previousItem,index) {
            var slide = $(currentItem).attr("data-flip-title");
        }
    });
});

$('.init-unidad').off('click').on('click', function(evt){
    var item = $(this).attr('data-id');
    $("#content-ova").load("base/unidades/unidad"+item+".html");
    evt.preventDefault();
});

