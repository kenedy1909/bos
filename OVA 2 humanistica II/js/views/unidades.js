$(document).ready(function() {
    setMigaja("Unidades de aprendizaje", "", "");
    flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: star_uni,
        buttonNext: 'Siguiente',
        onItemSwitch: function(currentItem, previousItem, index) {
            var slide = $(currentItem).attr("data-flip-title");
        }
    });
});

$('.init-unidad').off('click').on('click', function(evt) {
    var item = $(this).attr('data-id');
    tema = 1;
    $("#content-ova").load("base/unidades/unidad" + item + ".html");
    evt.preventDefault();
});