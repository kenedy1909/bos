$(document).ready(function() {
    /*slide_predeterminado();*/
    // console.log(tema);
    $(".ov-personaje").hide();
    $(".menu1").removeClass('d-none');
    $(".pedfs").addClass('d-none');
    $(".pedfs1").removeClass('d-none');

    $('#smartwizard').smartWizard({
        loader: "show",
        theme: 'arrows',
        toolbarSettings: {
            showNextButton: false, // show/hide a Next button
            showPreviousButton: false, // show/hide a Previous button
            toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing: '' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $(".linkactividades").attr('href', urlsite + '/course/view.php?id=' + courseid);

    $('#next').on('click', function() {
        $('#smartwizard').smartWizard("next");
        slide();

    });

    $('#prev').on('click', function() {
        $('#smartwizard').smartWizard("prev");
        slide();
    });

    $("[data-toggle='toggle']").click(function() {
        var selector = $(this).data("target");
        $(selector).toggleClass('in');
    });

    $(".ven1").on("click", function() {
        $(".ventajas").hide();
        $(".ventajas1").show(300);
    })

    $(".ven2").on("click", function() {
        $(".ventajas").hide();
        $(".ventajas2").show(300);
    })

    $(".bpr1").on("click", function() {
        $(".pr1").show(300);
    })

    $(".bpr2").on("click", function() {
        $(".pr2").show(300);
    })
    $(".bpr3").on("click", function() {
        $(".pr3").show(300);
    })

    $(".btn21-1").on("click", function() {
        $(".p21").hide();
        $(".p21-1").show();
    })
    $(".btn21-2").on("click", function() {
        $(".p21").hide();
        $(".p21-2").show();
    })
    $(".btn21-3").on("click", function() {
        $(".p21").hide();
        $(".p21-3").show();
    })

    $(".btn13-1").on("click", function() {
        $(".btn13-1").hide();
        $(".p13-2").hide();
        $(".btn13-2").show();
        $(".p13-1").show();

    })

    $(".btn13-2").on("click", function() {
        $(".btn13-2").hide();
        $(".p13-1").hide();
        $(".btn13-1").show();
        $(".p13-2").show();

    })

    $(".i3").html('')
    var elementoPadre1 = document.querySelector(".inputDiv2.i3");
    var elementoPadre2 = document.querySelector(".inputDiv2.i4");
    var inputsRy = [];
    var i = new Input(4);
    i.crear(elementoPadre1);
    inputsRy.push(i);

    var i2 = new Input(9);
    i2.att.value = 70;
    i2.att.min = 20;
    i2.att.max = 120;
    i2.crear(elementoPadre2);
    inputsRy.push(i2);

    for (var n = 0; n < inputsRy.length; n++) {
        (function(n) {
            inputsRy[n].input.addEventListener("input", function() {
                inputsRy[n].actualizar2();
            }, false)
        }(n));
    }

    /*setMigaja("Unidades de aprendizaje","1. Inducción Matemática","Cuantificadores, sus negaciones y el contraejemplo");*/

    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".modal_scroll2").on('click', modal_scroll2);
    $(".modal_scroll3").on('click', modal_scroll3);
    $(".modal_scroll4").on('click', modal_scroll4);

    $(".circle-verde").on('click', circles);

    /*scroll();*/
    slide_link(tema);





});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function slide() {
    var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"));
    controlSlides(stepIndex + 1);
    actualizarprogress(stepIndex + 1);
}

function slide_predeterminado() {
    /* $(".nav-link").removeClass('done');
     $(".nav-link").removeClass('active');*/
    controlSlides(1);
    /*window.location.href ="#unidad1-1";*/
    /*$url =$('.enlaces_ova')
    $url.attr('href',"#unidad1-1");
    $url[0].click()*/
    $('#smartwizard').smartWizard("goToStep", 1);
}

function slide_link(num) {
    /* $(".nav-link").removeClass('done');
     $(".nav-link").removeClass('active');*/
    /*window.location.href ="#unidad1-"+num;*/
    /*location.assign("#unidad1-4");*/
    /*$url =$('.enlaces_ova')
    $url.attr('href',"#unidad1-3");
    $url[0].click()*/
    $('#smartwizard').smartWizard("goToStep", num);
    controlSlides(num);
}


function rec_cg(num) {
    switch (num) {
        case 1:
            $(".btn-p1").removeClass("rec");
            $(".btn-p1").addClass("rec0");

            $(".btn-p2").addClass("rec");
            $(".btn-p2").removeClass("rec0");

            $(".btn-p3").addClass("rec");
            $(".btn-p3").removeClass("rec0");

            $(".btn-p4").addClass("rec");
            $(".btn-p4").removeClass("rec0");

            $(".btn-p5").addClass("rec");
            $(".btn-p5").removeClass("rec0");

            $(".p20").hide();
            $(".p20-1").show();
            break;
        case 2:
            $(".btn-p1").addClass("rec");
            $(".btn-p1").removeClass("rec0");

            $(".btn-p2").removeClass("rec");
            $(".btn-p2").addClass("rec0");

            $(".btn-p3").addClass("rec");
            $(".btn-p3").removeClass("rec0");

            $(".btn-p4").addClass("rec");
            $(".btn-p4").removeClass("rec0");

            $(".btn-p5").addClass("rec");
            $(".btn-p5").removeClass("rec0");

            $(".p20").hide();
            $(".p20-2").show();
            break;
        case 3:
            $(".btn-p1").addClass("rec");
            $(".btn-p1").removeClass("rec0");

            $(".btn-p2").addClass("rec");
            $(".btn-p2").removeClass("rec0");

            $(".btn-p3").removeClass("rec");
            $(".btn-p3").addClass("rec0");

            $(".btn-p4").addClass("rec");
            $(".btn-p4").removeClass("rec0");

            $(".btn-p5").addClass("rec");
            $(".btn-p5").removeClass("rec0");

            $(".p20").hide();
            $(".p20-3").show();
            break;
        case 4:
            $(".btn-p1").addClass("rec");
            $(".btn-p1").removeClass("rec0");

            $(".btn-p2").addClass("rec");
            $(".btn-p2").removeClass("rec0");

            $(".btn-p3").addClass("rec");
            $(".btn-p3").removeClass("rec0");

            $(".btn-p4").removeClass("rec");
            $(".btn-p4").addClass("rec0");

            $(".btn-p5").addClass("rec");
            $(".btn-p5").removeClass("rec0");

            $(".p20").hide();
            $(".p20-4").show();
            break;
        case 5:
            $(".btn-p1").addClass("rec");
            $(".btn-p1").removeClass("rec0");

            $(".btn-p2").addClass("rec");
            $(".btn-p2").removeClass("rec0");

            $(".btn-p3").addClass("rec");
            $(".btn-p3").removeClass("rec0");

            $(".btn-p4").addClass("rec");
            $(".btn-p4").removeClass("rec0");

            $(".btn-p5").removeClass("rec");
            $(".btn-p5").addClass("rec0");

            $(".p20").hide();
            $(".p20-5").show();
            break;
        default:
            break;
    }
}

function crc(num) {
    switch (num) {
        case 1:
            $(".btn-cr1").removeClass("btn-circle");
            $(".btn-cr1").addClass("btn-circle1");

            $(".btn-cr3").addClass("btn-circle");
            $(".btn-cr3").removeClass("btn-circle1");

            $(".btn-cr2").addClass("btn-circle");
            $(".btn-cr2").removeClass("btn-circle1");

            $(".btn-cr4").addClass("btn-circle");
            $(".btn-cr4").removeClass("btn-circle1");

            $(".btn-cr5").addClass("btn-circle");
            $(".btn-cr5").removeClass("btn-circle1");

            $(".btn-cr6").addClass("btn-circle");
            $(".btn-cr6").removeClass("btn-circle1");
            $(".p17").hide();
            $(".p17-1").show();
            break;
        case 2:
            $(".btn-cr2").removeClass("btn-circle");
            $(".btn-cr2").addClass("btn-circle1");

            $(".btn-cr1").addClass("btn-circle");
            $(".btn-cr1").removeClass("btn-circle1");

            $(".btn-cr3").addClass("btn-circle");
            $(".btn-cr3").removeClass("btn-circle1");

            $(".btn-cr4").addClass("btn-circle");
            $(".btn-cr4").removeClass("btn-circle1");

            $(".btn-cr5").addClass("btn-circle");
            $(".btn-cr5").removeClass("btn-circle1");

            $(".btn-cr6").addClass("btn-circle");
            $(".btn-cr6").removeClass("btn-circle1");
            $(".p17").hide();
            $(".p17-2").show();
            break;
        case 3:
            $(".btn-cr3").removeClass("btn-circle");
            $(".btn-cr3").addClass("btn-circle1");

            $(".btn-cr1").addClass("btn-circle");
            $(".btn-cr1").removeClass("btn-circle1");

            $(".btn-cr2").addClass("btn-circle");
            $(".btn-cr2").removeClass("btn-circle1");

            $(".btn-cr4").addClass("btn-circle");
            $(".btn-cr4").removeClass("btn-circle1");

            $(".btn-cr5").addClass("btn-circle");
            $(".btn-cr5").removeClass("btn-circle1");

            $(".btn-cr6").addClass("btn-circle");
            $(".btn-cr6").removeClass("btn-circle1");
            $(".p17").hide();
            $(".p17-3").show();
            break;
        case 4:
            $(".btn-cr4").removeClass("btn-circle");
            $(".btn-cr4").addClass("btn-circle1");

            $(".btn-cr1").addClass("btn-circle");
            $(".btn-cr1").removeClass("btn-circle1");

            $(".btn-cr2").addClass("btn-circle");
            $(".btn-cr2").removeClass("btn-circle1");

            $(".btn-cr3").addClass("btn-circle");
            $(".btn-cr3").removeClass("btn-circle1");

            $(".btn-cr5").addClass("btn-circle");
            $(".btn-cr5").removeClass("btn-circle1");

            $(".btn-cr6").addClass("btn-circle");
            $(".btn-cr6").removeClass("btn-circle1");
            $(".p17").hide();
            $(".p17-4").show();
            break;
        case 5:
            $(".btn-cr5").removeClass("btn-circle");
            $(".btn-cr5").addClass("btn-circle1");

            $(".btn-cr1").addClass("btn-circle");
            $(".btn-cr1").removeClass("btn-circle1");

            $(".btn-cr2").addClass("btn-circle");
            $(".btn-cr2").removeClass("btn-circle1");

            $(".btn-cr3").addClass("btn-circle");
            $(".btn-cr3").removeClass("btn-circle1");

            $(".btn-cr4").addClass("btn-circle");
            $(".btn-cr4").removeClass("btn-circle1");

            $(".btn-cr6").addClass("btn-circle");
            $(".btn-cr6").removeClass("btn-circle1");
            $(".p17").hide();
            $(".p17-5").show();
            break;
        case 6:
            $(".btn-cr6").removeClass("btn-circle");
            $(".btn-cr6").addClass("btn-circle1");

            $(".btn-cr1").addClass("btn-circle");
            $(".btn-cr1").removeClass("btn-circle1");

            $(".btn-cr2").addClass("btn-circle");
            $(".btn-cr2").removeClass("btn-circle1");

            $(".btn-cr3").addClass("btn-circle");
            $(".btn-cr3").removeClass("btn-circle1");

            $(".btn-cr4").addClass("btn-circle");
            $(".btn-cr4").removeClass("btn-circle1");

            $(".btn-cr5").addClass("btn-circle");
            $(".btn-cr5").removeClass("btn-circle1");
            $(".p17").hide();
            $(".p17-6").show();
            break;
        default:
            break;
    }
}

function controlSlides(num) {
    switch (parseInt(num)) {
        case 0:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            dragging = "";
            diff = "";
            newTop = "";
            scrollOffset = "";
            knob = document.querySelector('.custom-scrollbar__knob8');
            bar = document.querySelector('.custom-scrollbar__bar8');
            container = document.querySelector('.custom-scrollbar__inner8');
            scroll();


            break;
        case 1:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            $(".i3").html('')
            var elementoPadre1 = document.querySelector(".inputDiv2.i3");
            var elementoPadre2 = document.querySelector(".inputDiv2.i4");
            var inputsRy = [];
            var i = new Input(3);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(3);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
                (function(n) {
                    inputsRy[n].input.addEventListener("input", function() {
                        inputsRy[n].actualizar2();
                    }, false)
                }(n));
            }
            break;
        case 2:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 3:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");

            break;
        case 4:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 5:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 6:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 7:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 8:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 9:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 10:

            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            $(".i1").html('')
            var elementoPadre1 = document.querySelector(".inputDiv.i1");
            var elementoPadre2 = document.querySelector(".inputDiv.i2");
            var inputsRy = [];
            var i = new Input(11);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(11);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
                (function(n) {
                    inputsRy[n].input.addEventListener("input", function() {
                        inputsRy[n].actualizar();
                    }, false)
                }(n));
            }
            break;

        case 11:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 12:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 13:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Fundamentos");
            break;
        case 14:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "La cadena de valor del E-commerce");
            break;
        case 15:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "La cadena de valor del E-commerce");
            break;
        case 16:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "La cadena de valor del E-commerce");
            break;
        case 17:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Sistemas de recaudo y pasarelas");
            break;
        case 18:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Sistemas de recaudo y pasarelas");
            break;
        case 19:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Sistemas de recaudo y pasarelas");
            break;
        case 20:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Sistemas de recaudo y pasarelas");
            $(".i5").html('')
            var elementoPadre1 = document.querySelector(".inputDiv3.i5");
            var elementoPadre2 = document.querySelector(".inputDiv3.i6");
            var inputsRy = [];
            var i = new Input(3);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(3);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
                (function(n) {
                    inputsRy[n].input.addEventListener("input", function() {
                        inputsRy[n].actualizar3();
                    }, false)
                }(n));
            }
            scroll_set(12);
            break;
        case 21:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Categorías del E-commerce");
            $(".i5").html('')
            var elementoPadre1 = document.querySelector(".inputDiv3.i5");
            var elementoPadre2 = document.querySelector(".inputDiv3.i6");
            var inputsRy = [];
            var i = new Input(3);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(3);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
                (function(n) {
                    inputsRy[n].input.addEventListener("input", function() {
                        inputsRy[n].actualizar3();
                    }, false)
                }(n));
            }
            break;
        case 22:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Categorías del E-commerce");
            $(".i7").html('')
            var elementoPadre1 = document.querySelector(".inputDiv.i7");
            var elementoPadre2 = document.querySelector(".inputDiv.i8");
            var inputsRy = [];
            var i = new Input(2);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(2);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
                (function(n) {
                    inputsRy[n].input.addEventListener("input", function() {
                        inputsRy[n].actualizar4();
                    }, false)
                }(n));
            }
            break;
        case 23:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Normatividad");
            $(".i7").html('')
            var elementoPadre1 = document.querySelector(".inputDiv.i7");
            var elementoPadre2 = document.querySelector(".inputDiv.i8");
            var inputsRy = [];
            var i = new Input(2);
            i.crear(elementoPadre1);
            inputsRy.push(i);

            var i2 = new Input(2);
            i2.att.value = 70;
            i2.att.min = 20;
            i2.att.max = 120;
            i2.crear(elementoPadre2);
            inputsRy.push(i2);

            for (var n = 0; n < inputsRy.length; n++) {
                (function(n) {
                    inputsRy[n].input.addEventListener("input", function() {
                        inputsRy[n].actualizar4();
                    }, false)
                }(n));
            }
            break;
        case 24:
            star_uni = 1;
            $('.js_uni').html('<script src="js/views/unidades.js"></script>');
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Normatividad");
            break;
        case 25:
            setMigaja("Unidades de aprendizaje", "1. Fundamentos del E-commerce", "Normatividad");
            break;
        default:
            break;
    }
}

function scroll_set(num) {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob' + num);
    bar = document.querySelector('.custom-scrollbar__bar' + num);
    container = document.querySelector('.custom-scrollbar__inner' + num);
    scroll();
}


function modal_scroll2() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob3');
    bar = document.querySelector('.custom-scrollbar__bar3');
    container = document.querySelector('.custom-scrollbar__inner3');
    scroll();
}

function modal_scroll3() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob4');
    bar = document.querySelector('.custom-scrollbar__bar4');
    container = document.querySelector('.custom-scrollbar__inner4');
    scroll();
}

function modal_scroll4() {
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob5');
    bar = document.querySelector('.custom-scrollbar__bar5');
    container = document.querySelector('.custom-scrollbar__inner5');
    scroll();
}

function funcion_vanvas() {
    var canvas = new fabric.Canvas('id_canvas');
    var imgElement = 'assets/img/uno.png';
    var imgElement2 = 'assets/img/dos.png';
    var imgElement3 = 'assets/img/tres.png';
    var imgElement4 = 'assets/img/cuatro.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left = 40;
        oImg.top = 10;
        oImg.scaleToHeight(40);
        oImg.scaleToWidth(40);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');
            $("#modal_circuito1").modal("show");
        });
        oImg.on('mousemove', function() {
            console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left = 260;
        oImg2.top = 50;
        oImg2.scaleToHeight(40);
        oImg2.scaleToWidth(40);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            console.log('selected a circle');
            $("#modal_circuito2").modal("show");
        });
        oImg2.on('mousemove', function() {
            console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left = 240;
        oImg3.top = 230;
        oImg3.scaleToHeight(40);
        oImg3.scaleToWidth(40);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            console.log('selected a circle');
            $("#modal_circuito3").modal("show");
        });
        oImg3.on('mousemove', function() {
            console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left = 10;
        oImg4.top = 230;
        oImg4.scaleToHeight(40);
        oImg4.scaleToWidth(40);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            console.log('selected a circle');
            $("#modal_circuito4").modal("show");
        });
        oImg4.on('mousemove', function() {
            console.log('hover a circle');
        });
    });
}

function Input(num) {
    //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
    this.att = {};
    this.att.type = "range";
    this.att.value = 0;
    this.att.min = 0;
    this.att.max = num;
    this.att.autocomplete = "off";
    this.att.step = "1";
    this.input;
    this.output;

    this.crear = function(elementoPadre) {
        // crea un nuevo elemento input
        this.input = document.createElement("input");
        //para cada propiedad del objeto att establece un nuevo atributo del elemento input
        for (var name in this.att) {
            if (this.att.hasOwnProperty(name)) {
                this.input.setAttribute(name, this.att[name]);
            }
        }
        // crea un nuevo elemento div
        this.output = document.createElement("div");
        // establece el valor del atributo class del nuevo div
        this.output.setAttribute("class", "output");
        // y el contenido (innerHTML) de este
        this.output.innerHTML = this.att.value;

        // inserta los dos elementos creados al final  del elemento Padre 
        elementoPadre.appendChild(this.input);
        elementoPadre.appendChild(this.output);
    }

    this.actualizar = function() {
        scroll_horizontal(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
    this.actualizar2 = function() {
        scroll_horizontal2(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
    this.actualizar3 = function() {
        scroll_horizontal3(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
    this.actualizar4 = function() {
        scroll_horizontal4(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function() {
        /*alert();*/
    });
}

function scroll_horizontal(num) {

    $('.venCards,.espacioEnBlanco1, .espacioEnBlanco2, .espacioEnBlanco1_2, .espacioEnBlanco2_2').removeClass('d-flex');
    $('.venCards,.espacioEnBlanco1, .espacioEnBlanco2, .espacioEnBlanco1_2, .espacioEnBlanco2_2').addClass('d-none');

    switch (parseInt(num)) {
        case 0:
            $('#ven1').removeClass('d-none');
            $('#ven1').addClass('d-flex');
            break;
        case 1:
            $('#ven1_2').removeClass('d-none');
            $('#ven1_2').addClass('d-flex');

            break;
        case 2:
            $('#ven2').removeClass('d-none');
            $('#ven2').addClass('d-flex');

            break;
        case 3:
            $('#ven2_2').removeClass('d-none');
            $('#ven2_2').addClass('d-flex');

            break;
        case 4:
            $('#ven3').removeClass('d-none');
            $('#ven3').addClass('d-flex');

            break;
        case 5:
            $('.espacioEnBlanco1').removeClass('d-none');
            $('.espacioEnBlanco1').addClass('d-flex');

            $('.espacioEnBlanco2').removeClass('d-none');
            $('.espacioEnBlanco2').addClass('d-flex');

            $('#ven3_2').removeClass('d-none');
            $('#ven3_2').addClass('d-flex');

            break;
        case 6:
            $('.espacioEnBlanco1').removeClass('d-none');
            $('.espacioEnBlanco1').addClass('d-flex');

            $('.espacioEnBlanco2').removeClass('d-none');
            $('.espacioEnBlanco2').addClass('d-flex');

            $('#ven4').removeClass('d-none');
            $('#ven4').addClass('d-flex');

            break;
        case 7:
            $('.espacioEnBlanco1').removeClass('d-none');
            $('.espacioEnBlanco1').addClass('d-flex');

            $('.espacioEnBlanco2').removeClass('d-none');
            $('.espacioEnBlanco2').addClass('d-flex');

            $('#ven4_2').removeClass('d-none');
            $('#ven4_2').addClass('d-flex');

            break;
        case 8:
            $('.espacioEnBlanco1').removeClass('d-none');
            $('.espacioEnBlanco1').addClass('d-flex');

            $('#ven5').removeClass('d-none');
            $('#ven5').addClass('d-flex');

            break;
        case 9:
            $('.espacioEnBlanco1_2').removeClass('d-none');
            $('.espacioEnBlanco1_2').addClass('d-flex');

            $('.espacioEnBlanco2_2').removeClass('d-none');
            $('.espacioEnBlanco2_2').addClass('d-flex');

            $('#ven5_2').removeClass('d-none');
            $('#ven5_2').addClass('d-flex');

            break;
        case 10:
            $('.espacioEnBlanco1_2').removeClass('d-none');
            $('.espacioEnBlanco1_2').addClass('d-flex');

            $('.espacioEnBlanco2_2').removeClass('d-none');
            $('.espacioEnBlanco2_2').addClass('d-flex');

            $('#ven6').removeClass('d-none');
            $('#ven6').addClass('d-flex');

            break;
        case 11:
            $('.espacioEnBlanco1_2').removeClass('d-none');
            $('.espacioEnBlanco1_2').addClass('d-flex');

            $('.espacioEnBlanco2_2').removeClass('d-none');
            $('.espacioEnBlanco2_2').addClass('d-flex');

            $('#ven7').removeClass('d-none');
            $('#ven7').addClass('d-flex');
            break;
        default:
            break;
    }
}

function scroll_horizontal2(num) {
    $(".zoomContainer").remove();
    switch (parseInt(num)) {
        case 0:
            var info_scroll = `
                            <div class="row">
                                <div class="banderita"></div>
                                <div class="row banner_abluc">
                                    <div class="text_bluc">
                                        <p class="font13 p_white" style="height: 177px;overflow: auto;">Como complemento a lo anterior, se podría decir, que el E-commerce, es una actividad económica que llegó para quedarse en los negocios del planeta entero. De hecho, hacer esta afirmación podría considerarse como irresponsable, al generalizarlo al mundo entero, sin embargo, como lo ha resaltado Bill Gates el fundador de Microsoft, “Si tu negocio no está en internet, tu negocio no existe”, lo que significa que la actividad comercial en internet, ya sea a través de plataformas propias, plataformas especializadas de uso compartido (Marketplace) o redes sociales, es ahora más que nunca, el escenario donde opera la actividad comercial del planeta entero. </p>
                                    </div>
                                    <div class="circle_bluc">
                                        <img src="assets/img/img_ova/ec1.png" class="img-70">
                                    </div>
                                </div>
                            </div>
                            `;
            $('#info-scroll').html(info_scroll);
            break;
        case 1:
            var info_scroll = `
                            <div class="row">
                                <div class="banderita"></div>
                                <div class="row banner_abluc">
                                    <div class="text_bluc">
                                        <p class="font13 p_white mt-4">Según PlacetoPay, una de las pasarelas de pago más reconocidas de Colombia; en el país al 2019, antes de la pandemia, el 38% de las empresas vendían por internet. Esta cifra, casi se duplicó, llegando al 72% a mayo de 2021, 14 meses después de haber comenzado la pandemia, según lo expresó Carlos Mario López Muñoz, Jefe de Desarrollo Empresarial y Líder de los procesos de Transformación Digital y E-commerce de la Cámara de Comercio de Medellín para Antioquia. </p>
                                    </div>
                                    <div class="circle_bluc">
                                        <img src="assets/img/img_ova/ec2.png" class="img-70">
                                    </div>
                                </div>
                            </div>
                            `;
            $('#info-scroll').html(info_scroll);
            break;
        case 2:
            var info_scroll = `
                            <div class="row">
                                <div class="banderita"></div>
                                <div class="row banner_abluc">
                                    <div class="text_bluc">
                                        <p class="font13 p_white mt-4">Teniendo en cuenta lo anterior, se tomó la decisión de dedicar una OVA completa dentro del curso de Sistemas de Información Organizacional, para que el estudiante de Administración de Empresas conozca los elementos fundamentales del E-commerce, así como los beneficios que tiene para los negocios y las empresas, con respecto al comercio tradicional, y esté en condiciones de determinar cómo diseñar y gestionar estrategias para la comercialización en medios electrónicos.</p>
                                    </div>
                                    <div class="circle_bluc">
                                        <img src="assets/img/img_ova/ec3.png" class="img-70">
                                    </div>
                                </div>
                            </div>
                            `;
            $('#info-scroll').html(info_scroll);
            break;
        case 3:
            var info_scroll = `
                            <div class="row">
                                <div class="banderita"></div>
                                <div class="row banner_abluc">
                                    <div style="width: 70%;">
                                        <div class="text_bluc col-md-12" style="height: 125px;width: 100%;">
                                            <p class="font13 p_white mt-4">Antes de comenzar a abordar los contenidos, tenga en cuenta que la última unidad de la presente OVA se dedicará a diseñar una propuesta de tienda online o E-commerce, por lo que es necesario conformar grupos de mínimo 2  y máximo 3 estudiantes. <br><br>
                                            Para conocer más acerca de la actividad final, seleccione el botón RECOMENDACIONES:</p>
                                        </div>
                                        <div class="text-center mt-2">
                                            <button class="btn bg-white color-text py-2 btn-lg" data-toggle="modal" data-target="#modalPant1">
                                                <b>RECOMENDACIONES</b>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="circle_bluc">
                                        <img src="assets/img/img_ova/importante.png" class="img-70">
                                    </div>
                                </div>
                            </div>
                            `;
            $('#info-scroll').html(info_scroll);
            break;
        default:
            break;
    }
}

function scroll_horizontal3(num) {
    $(".zoomContainer").remove();
    switch (parseInt(num)) {
        case 0:
            var imgScrollV = `<img width="20%" src="assets/img/img_ova/cat3.png">`;
            var textScrollV = `<div class="content custom-scrollbar12">
                                    <div class="custom-scrollbar__inner12">
                                    <p class="justificado mt-3 text-black"><b>Consumer to Business (C2B):</b>aunque no es tan común, este tipo de relación comercial se da entre una persona que ofrece sus servicios o productos a empresas (business). Una forma bastante común como se puede dar son los prestadores de servicios o freelance que ofrecen sus servicios profesionales a las empresas.
                                        <br><br>
                                        El C2B es un modelo que la mayoría de la gente no piensa inmediatamente, pero que está creciendo en prevalencia, especialmente para profesiones de desarrollo informático, programación, diseño gráfico, traducción y capacitación. Dos plataformas reconocidas en este modelo son UpWork y Google AdSense.
                                    </p>
                                    </div>
                                    <div class="custom-scrollbar__bar12">
                                    <div class="custom-scrollbar__knob12 cursor">
                                        <p class="text-center linea_scroll12">-</p>
                                    </div>
                                    </div>
                                </div>`;
            $('#imgScrollV').html(imgScrollV);
            $('#textScrollV').html(textScrollV);
            scroll_set(12);
            break;
        case 1:
            var imgScrollV = `<img width="20%" src="assets/img/img_ova/cat2.png">`;
            var textScrollV = `<p class="justificado mt-3 text-black"><b>Government to Consumer (G2C):</b> esta relación comercial se da cuando un gobierno permite que los ciudadanos realicen sus trámites y los paguen a través de una plataforma, en el caso colombiano existe una estrategia que se llama Gobierno en Línea. Su gran ventaja es el ahorro del tiempo, eficiencias en trámites y la seguridad que puede brindar el respaldo electrónico. Es bastante común para el pago de impuestos.</p>`;
            $('#imgScrollV').html(imgScrollV);
            $('#textScrollV').html(textScrollV);
            break;
        case 2:
            var imgScrollV = `<img width="20%" src="assets/img/img_ova/cat5.png">`;
            var textScrollV = `<p class="justificado mt-3 text-black"><b>Business to Government (B2G):</b> esta relación comercial se da cuando una empresa o las empresas en general le ofrecen productos o servicios al gobierno. Normalmente son plataformas a través de las cuales se realizan las contrataciones, compras públicas y licitaciones</p>`;
            $('#imgScrollV').html(imgScrollV);
            $('#textScrollV').html(textScrollV);
            break;
        case 3:
            var imgScrollV = `<img width="20%" src="assets/img/img_ova/cat1.png">`;
            var textScrollV = `<div class="content custom-scrollbar13">
                                    <div class="custom-scrollbar__inner13">
                                    <p class="justificado mt-3 text-black"><b>Consumer to Business (C2B):</b>aunque no es tan común, este tipo de relación comercial se da entre una persona que ofrece sus servicios o productos a empresas (business). Una forma bastante común como se puede dar son los prestadores de servicios o freelance que ofrecen sus servicios profesionales a las empresas.
                                        <br><br>
                                        El C2B es un modelo que la mayoría de la gente no piensa inmediatamente, pero que está creciendo en prevalencia, especialmente para profesiones de desarrollo informático, programación, diseño gráfico, traducción y capacitación. Dos plataformas reconocidas en este modelo son UpWork y Google AdSense.
                                    </p>
                                    </div>
                                    <div class="custom-scrollbar__bar13">
                                    <div class="custom-scrollbar__knob13 cursor">
                                        <p class="text-center linea_scroll13">-</p>
                                    </div>
                                    </div>
                                </div>`;
            $('#imgScrollV').html(imgScrollV);
            $('#textScrollV').html(textScrollV);
            scroll_set(13);
            break;
        default:
            break;
    }
}

function scroll_horizontal4(num) {
    $(".zoomContainer").remove();
    switch (parseInt(num)) {
        case 0:
            $('#padreScrollH').addClass('d-none');
            var imgScrollH = ``;
            var textScrollH = ``;
            $('#imgScrollH').html(imgScrollH);
            $('#textScrollH').html(textScrollH);
            break;
        case 1:
            $('#padreScrollH').removeClass('d-none');
            var imgScrollH = `<img width="15%" src="assets/img/img_ova/est2.png" class="px-3 py-2 bg-white rounded-circle menos-marginT-25">`;
            var textScrollH = `Los clientes deben conocer todo lo relacionado con el producto que están comprando, independientemente si se hace por internet o en canales tradicionales, es un derecho adquirido por Ley, estar informados sobre su precio, impuestos y costos adicionales que se puedan generar. Es así como el Estatuto del consumidor (Ley 1480 de 2011) se convierte en una herramienta que permite formalizar la relación de las empresas con sus clientes.`;
            $('#imgScrollH').html(imgScrollH);
            $('#textScrollH').html(textScrollH);
            break;
        case 2:
            $('#padreScrollH').removeClass('d-none');
            var imgScrollH = `<img width="15%" src="assets/img/img_ova/est1.png" class="px-3 py-2 bg-white rounded-circle menos-marginT-25">`;
            var textScrollH = `Su importancia radica en que a través de ella se promueve la protección que se brinda al consumidor, y cómo ampara el respeto a su dignidad e intereses económicos. Por lo tanto, es fundamental que las empresas, brinden a sus clientes información adecuada sobre los productos o servicios, dejando claros atributos, precio, garantías, y sobre todo que respete su libre decisión en la compra`;
            $('#imgScrollH').html(imgScrollH);
            $('#textScrollH').html(textScrollH);
            break;
        default:
            break;
    }
}

function efect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').addClass('crece');
            $('.div_texto').addClass('visibilidad');
            break;
        case 2:
            $('.creciente2').addClass('crece');
            $('.div_texto2').addClass('visibilidad');
            break;
        case 3:
            $('.creciente3').addClass('crece');
            $('.div_texto3').addClass('visibilidad');
            break;
        case 4:
            $('.creciente4').addClass('crece');
            $('.div_texto4').addClass('visibilidad');
            break;
        case 5:
            $('.creciente5').addClass('crece');
            $('.div_texto5').addClass('visibilidad');
            break;
        case 6:
            $('.creciente6').addClass('crece');
            $('.div_texto6').addClass('visibilidad');
            $('.btn_modal').html('<button data-toggle="modal" data-target="#modal3-4" class="btn" style="background: #7a3d74;color: white;font-size: 18px;">Ver aquí ejemplo de preguntas de investigación</button>');
            break;
        default:
            break;
    }

}

function removeefect(num) {
    switch (parseInt(num)) {
        case 1:
            $('.creciente').removeClass('crece');
            $('.div_texto').removeClass('visibilidad');
            break;
        case 2:
            $('.creciente2').removeClass('crece');
            $('.div_texto2').removeClass('visibilidad');
            break;
        case 3:
            $('.creciente3').removeClass('crece');
            $('.div_texto3').removeClass('visibilidad');
            break;
        case 4:
            $('.creciente4').removeClass('crece');
            $('.div_texto4').removeClass('visibilidad');
            break;
        case 5:
            $('.creciente5').removeClass('crece');
            $('.div_texto5').removeClass('visibilidad');
            break;
        case 6:
            $('.creciente6').removeClass('crece');
            $('.div_texto6').removeClass('visibilidad');
            break;
        default:
            break;
    }

}

function textBane_10(num) {
    switch (parseInt(num)) {
        case 0:
            $('.blue_aquaBane').addClass('invisible');
            $('.blue_aquaBane').removeClass('visible');
            break;
        case 1:
            $('.blue_aquaBane').addClass('visible');
            $('.blue_aquaBane').removeClass('invisible');

            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-1').addClass('visible');
            $('.bane10-1').removeClass('invisible');
            break;
        case 2:
            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-2').addClass('visible');
            $('.bane10-2').removeClass('invisible');
            scroll_(6);
            break;
        case 3:
            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-3').addClass('visible');
            $('.bane10-3').removeClass('invisible');
            scroll_(7);
            break;
        case 4:
            $('.textBane-10').removeClass('visible');
            $('.textBane-10').addClass('invisible');

            $('.bane10-4').addClass('visible');
            $('.bane10-4').removeClass('invisible');
            break;
        default:
            break;
    }
}



/*var knob = document.querySelector('.custom-scrollbar__knob2');
var bar = document.querySelector('.custom-scrollbar__bar2');
var container = document.querySelector('.custom-scrollbar__inner2');*/
function scroll() {
    // When the container is scrolled
    container.addEventListener('scroll', () => {
        // If we are dragging the knob, do nothing
        if (dragging) return;

        // Otherwise, set the knob position based on the scroll position
        knob.style.top = container.scrollTop / (container.scrollHeight - container.offsetHeight) * 100 + '%';
    });

    dragging = false;

    knob.addEventListener('mousedown', event => {

        console.log(knob + " " + bar + " " + container);
        dragging = {
            x: event.clientX,
            y: event.clientY
        };

    });
    window.addEventListener('mousemove', event => {
        if (dragging) {
            // When dragging
            event.preventDefault();
            diff = {
                x: event.clientX - dragging.x,
                y: event.clientY - dragging.y
            };


            // Clamp the position of the knob to be a maximum of 
            // the knobs container, and a minimum of 0
            newTop = Math.max(0, Math.min(knob.offsetTop + diff.y, bar.offsetHeight));
            knob.style.top = newTop + 'px';

            // Base the scroll offset on the knobs position
            // in relation to the knobs container
            scrollOffset = newTop / bar.offsetHeight * (container.scrollHeight - container.offsetHeight);
            container.scrollTop = scrollOffset;

            dragging = {
                x: event.clientX,
                y: event.clientY
            };

        }
    });
    window.addEventListener('mouseup', () => {
        dragging = false;
    });
}
/*function scroll(){
    $(".scroll-scrollbar").css({
            'position':'relative',
            'height':'240px',
            'width':'fit-content',
            'overflow':'hidden'
    });
    $(".scroll-scrollbar__bar").css({
              'position':' absolute',
              'top':' 22px',
              'bottom':' 45px',
              'background':'#FFFFFF',
              'width':' 3px',
              'right':' 30px',
              'border-radius':' 4px'
    });
    $(".scroll-scrollbar__knob").css({
              'position': 'absolute',
              'top':' 0',
              'left':' 50%',
              'width':' 25px',
              'height':' 25px',
              'border-radius':' 50%',
              'background':' #FFFFFF',
              'transform':' translate(-50%, -50%)',
              'will-change':' top'
    });
    $(".scroll-linea_scroll_modal").css({
            'font-size':' 50px',
            'margin':' 0px',
            'position':' relative',
            'top':' -32px'
    });
}*/

function poner(num) {

    $(".texto_efecto" + num).css({
        position: 'relative',
        top: '2px',
        display: 'block',
        'z-index': '100'
    });
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display', 'block');
        $(".custom-scrollbar2").css('height', '250');
    }
}

function quitar(num) {
    // $(".texto_efecto"+num).css({
    //     position: 'relative',
    //     top: '2px',
    //     display: 'none',
    //     'z-index': '100'
    // });
    if (num == 1) {
        $(".custom-scrollbar__bar2").css('display', 'none');
        $(".custom-scrollbar2").css('height', '180px');
    }
    if (num == 2) {
        $(".custom-scrollbar__bar2").css('display', 'none');
        $(".custom-scrollbar2").css('height', '180px');
    }
    if (num == 3) {
        $(".custom-scrollbar__bar2").css('display', 'none');
        $(".custom-scrollbar2").css('height', '180px');
    }
}

function circles() {
    var circle_num = $(this).data('circle');
    $(".circle-verde").removeClass('bg-circle-v-o');
    $(".circle-verde").addClass('bg-circle-v-c');
    $(".circle-verde-" + circle_num).removeClass('bg-circle-v-c');
    $(".circle-verde-" + circle_num).addClass('bg-circle-v-o');
    if (circle_num == 1) {
        $("#info-circle").html('<p style="padding: 20px; background-color: #f6ba0a; margin-top: 50px;" class="justificado p_black">El pensamiento grecolatino reviste un interés filosófico para áreas de lo más diverso. Aristóteles, por ejemplo, ofrece a los especialistas en las sociedades modernas una serie de recursos muy ricos para reflexionar acerca de la vulnerabilidad y la prosperidad humanas, asuntos a los que los poetas trágicos prestaron mucha atención. Gracias a él aprendemos que los bienes humanos son plurales y no individuales, al tiempo que nos dota de argumentos para criticar el actual pensamiento utilitario.</p>');
    } else if (circle_num == 2) {
        $("#info-circle").html('<p style="padding: 20px; background-color: #f6ba0a; margin-top: 50px;" class="justificado p_black">Algunos distinguidos textos clásicos plantean desafíos a nuestros modelos actuales de pensamiento y suelen ser mejores y más ricos que los últimos artículos periodísticos, que, en su mayoría serán olvidados en menos de un año, por no hablar de en los próximos dos mil años (Citada por Lozano, 2013).</p>');
    } else if (circle_num == 3) {
        var texto = `
                    0
                    `;
        $("#info-circle").html(texto);
    }
}

jQuery(document).ready(function($) {

    $('#checkbox').change(function() {
        setInterval(function() {
            moveRight();
        }, 3000);
    });

    var slideCount = $('#slider-uni-1 ul li').length;
    var slideWidth = $('#slider-uni-1 ul li').width();
    var slideHeight = $('#slider-uni-1 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider-uni-1').css({ width: '100%', height: slideHeight });

    $('#slider-uni-1 ul').css({ width: '70%', marginLeft: -slideWidth });

    $('#slider-uni-1 ul li:last-child').prependTo('#slider-uni-1 ul');

    function moveLeft() {
        $('#slider-uni-1 ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#slider-uni-1 ul li:last-child').prependTo('#slider-uni-1 ul');
            $('#slider-uni-1 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-uni-1 ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#slider-uni-1 ul li:first-child').appendTo('#slider-uni-1 ul');
            $('#slider-uni-1 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function() {
        moveLeft();
    });

    $('a.control_next').click(function() {
        moveRight();
    });

});


function btnHover(num) {

    if (num == 1) {
        $('.imgBtnHover1').addClass('d-none');
        $('.img2BtnHover1').removeClass('d-none');
        $('.text2BtnHover1').removeClass('d-none');
        $('.btnHover1').removeClass('btn-ova');
        $('.btnHover1').addClass('bg-white');

    } else if (num == 2) {
        $('.imgBtnHover2').addClass('d-none');
        $('.img2BtnHover2').removeClass('d-none');
        $('.text2BtnHover2').removeClass('d-none');
        $('.btnHover2').removeClass('btn-ova');
        $('.btnHover2').addClass('bg-white');

    } else if (num == 3) {
        $('.imgBtnHover3').addClass('d-none');
        $('.img2BtnHover3').removeClass('d-none');
        $('.text2BtnHover3').removeClass('d-none');
        $('.btnHover3').removeClass('btn-ova');
        $('.btnHover3').addClass('bg-white');

    } else if (num == 4) {
        $('.imgBtnHover4').addClass('d-none');
        $('.img2BtnHover4').removeClass('d-none');
        $('.text2BtnHover4').removeClass('d-none');
        $('.btnHover4').removeClass('btn-ova');
        $('.btnHover4').addClass('bg-white');

    }
}

function tiendaSeccion(num, accion) {

    $('.selectorTienda1').attr('onclick', "tiendaSeccion(1,'abrir')");
    $('.selectorTienda2').attr('onclick', "tiendaSeccion(2,'abrir')");
    $('.selectorTienda3').attr('onclick', "tiendaSeccion(3,'abrir')");

    if (accion == 'abrir') {
        if (num == 1) {
            var contenido = `
            <div class="bg-color-claro p-4 pt-5 border-rb-25 mt-5" style="transition: all 1s ease-out;">
                <div class="w-100 text-center menos-marginT-150">
                <img class="zindex" width="40%" src="assets/img/img_ova/tyc2.png">
                </div>
                <p class="mt-2 text-justify" style="color: black;">
                    Los Términos y Condiciones (TyC), son aquellas normas que se hacen públicas en el sitio web, con las cuales se regula la relación tienda-comprador, también es conocido como Condiciones de Uso y Contratación. Hacen referencia al conjunto de reglas o declaraciones que los usuarios, los clientes y los posibles clientes de una tienda virtual, han de conocer cuando desean comprar en un sitio web. Generalmente, los TyC se presentan a través de un texto que se hace visible dentro del sitio, ya sea en el momento de logeo inicial, en una pestaña visible o en la parte inferior del home principal.
                </p>
            </div>
            `;
            $('#contenidoTiendaSeccion').html(contenido);

            $('.selectorTienda1').attr('onclick', "tiendaSeccion(1,'cerrar')");
        } else if (num == 2) {
            var contenido = `
            <div class="bg-color-claro p-4 pt-5 border-rb-25 mt-5" style="transition: all 1s ease-out;">
                <div class="w-100 text-center menos-marginT-150">
                <img class="zindex" width="40%" src="assets/img/img_ova/tyc3.png">
                </div>
                <p class="mt-2 text-justify" style="color: black;">
                Es redactado con las estipulaciones y cláusulas, que dispone la tienda con las políticas de compra, garantías de producto, condiciones para las promociones y descuentos, devoluciones, responsabilidades ante daños, entre otras estipuladas en el Estatuto del Consumidor o en las leyes asociadas a la actividad comercial online.
                </p>
            </div>
            `;
            $('#contenidoTiendaSeccion').html(contenido);

            $('.selectorTienda2').attr('onclick', "tiendaSeccion(2,'cerrar')");
        } else if (num == 3) {
            var contenido = `
                            <div class="content custom-scrollbar14">
                                <div class="custom-scrollbar__inner14 py-5">
                                    <div class="bg-color-claro p-4 pt-5 border-rb-25 mt-5" style="transition: all 1s ease-out;">
                                    <div class="w-100 text-center menos-marginT-100">
                                    <img class="zindex" width="30%" src="assets/img/img_ova/tyc4.png">
                                    </div>
                                    <p class="mt-2 text-justify" style="color: black;">
                                        Es fundamental que una tienda en línea cuente con los TyC dentro del sitio web, para que los clientes lo puedan conocer y recordar cada vez que sea necesario. Para estipular y definir adecuadamente los términos y condiciones del E-commerce, VendesFácil el servicio de Coordinadora Mercantil, que apoya a las mipymes colombianas en la creación de las tiendas en línea, propone una serie de recomendaciones o consejos para que los usuarios entiendan muy bien los requisitos o cláusulas que se deben incluir en el sitio de comercio electrónico.
                                    </p>
                                    </div>
                                    <div class="bg-color-claro p-4 border-25 mt-5" style="transition: all 1s ease-out;">
                                        <p class="mt-2 text-justify" style="color: black;">
                                        Como se ha mencionado los términos y condiciones permiten definir las reglas que los usuarios y clientes de una tienda virtual deben conocer para comprar por lo tanto es necesario que los fundadores de un E-commerce conozcan como escribirlas.
                                        </p>
                                    </div>
                                    <div class="mt-2">
                                    <p class="text-black text-justify" style="color: black;">
                                        Antes de continuar, realice la lectura del artículo “<b>Términos y condiciones: ¡tenlos muy presentes para tu tienda virtual!</b>” del servicio vendesfacil.com
                                    </p>
                                    
                                    <div class="row d-flex justify-content-center my-2 ">
                                        <a href="https://www.vendesfacil.com/ecommerce/terminos-y-condiciones-tenlos-muy-presentes-para-tu-tienda-virtual/" target="_blank" class="col-7 btn btn-ova p-2 d-flex justify-content-center align-items-center zindex cursor shadow">
                                        <img src="assets/img/img_ova/tyc5.png" width="30%" class="position-absolute" style="right: 0;">
                                        <p class="text-white pr-5 h4"><b>ARTÍCULO</b></p>
                                        </a>
                                    </div>
                                    
                                    <p class="text-black text-justify mt-3" style="color: black;">
                                        A continuación se describen las recomendaciones mas importantes para la elaboración de los términos y condiciones de una tienda virtual, <b>seleccione el botón para conocerlas: </b>
                                    </p>
                                    <div class="row d-flex justify-content-center my-2">
                                        <a href="assets/img/img_ova/recomendacionesTiendaOnline.png" target="_blank" download class="col-7 btn btn-ova p-2 d-flex justify-content-center align-items-center zindex cursor shadow">
                                        <img src="assets/img/img_ova/tyc6.png" width="30%" class="position-absolute" style="right: 0;">
                                        <p class="text-white pr-5 h4"><b>DESCARGAR</b></p>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                <div class="custom-scrollbar__bar14">
                                    <div class="custom-scrollbar__knob14 cursor">
                                    <p class="text-center linea_scroll14">-</p>
                                    </div>
                                </div>
                            </div>
            `;
            $('#contenidoTiendaSeccion').html(contenido);
            scroll_set(14);

            $('.selectorTienda3').attr('onclick', "tiendaSeccion(3,'cerrar')");
        }
    } else if (accion == 'cerrar') {
        if (num == 1) {
            $('#contenidoTiendaSeccion').html(``);

            $('.selectorTienda1').attr('onclick', "tiendaSeccion(1,'abrir')");
            $('.selectorTienda2').attr('onclick', "tiendaSeccion(2,'abrir')");
            $('.selectorTienda3').attr('onclick', "tiendaSeccion(3,'abrir')");
        } else if (num == 2) {
            $('#contenidoTiendaSeccion').html(``);

            $('.selectorTienda1').attr('onclick', "tiendaSeccion(1,'abrir')");
            $('.selectorTienda2').attr('onclick', "tiendaSeccion(2,'abrir')");
            $('.selectorTienda3').attr('onclick', "tiendaSeccion(3,'abrir')");
        } else if (num == 3) {
            $('#contenidoTiendaSeccion').html(``);

            $('.selectorTienda1').attr('onclick', "tiendaSeccion(1,'abrir')");
            $('.selectorTienda2').attr('onclick', "tiendaSeccion(2,'abrir')");
            $('.selectorTienda3').attr('onclick', "tiendaSeccion(3,'abrir')");
        }
    }
}
/*function pausevideo(num){
  switch(parseInt(num))
  {
    case 1:
      var videointro = document.getElementById('video_intro1');
      videointro.pause(); 
    break;
    default:
    break;
  }
}*/
function paraIframe(num) {
    switch (parseInt(num)) {
        case 0:
            $('.vid').attr('src', $('.vid').attr('src'));
            break;
        case 1:
            $('.vid1').attr('src', $('.vid1').attr('src'));
            break;
        case 2:
            $('.vid2').attr('src', $('.vid2').attr('src'));
            break;
        case 3:
            $('.vid3').attr('src', $('.vid3').attr('src'));
            break;
        case 4:
            $('.vid4').attr('src', $('.vid4').attr('src'));
            break;
        case 5:
            $('.vid5').attr('src', $('.vid5').attr('src'));
            break;
        case 6:
            $('.vid6').attr('src', $('.vid6').attr('src'));
            break;
        default:
            break;
    }

}

function esc_tar(num) {
    switch (num) {
        case 1:
            $('.img_esc1').addClass('d-none');
            $('.img_esc2').removeClass('d-none');
            $('.card01').removeClass('d-none');
            $('.card02').addClass('d-none');
            break;
        case 2:
            $('.img_esc1').removeClass('d-none');
            $('.img_esc2').addClass('d-none');
            $('.card01').addClass('d-none');
            $('.card02').removeClass('d-none');
            break;
        default:
            break;
    }
}