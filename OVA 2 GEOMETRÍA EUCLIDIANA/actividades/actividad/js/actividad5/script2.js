$(function() {
    //define some global variables
    var answers = {},
        currentId,
        currentAnswer,
        checks = [],
        actualAnswers = "",
        feed,
        curCont,
        progressWidth = 0,
        score = 0,
        firstAtempt = true,
        quiz = [{
                "id": "first",
                "question": "¿Cuáles relaciones de contención ⊂  (“ser subconjunto de”) se cumplen entre ellos?",
                "options": {
                    "a": "𝑬⊂𝑭",
                    "b": "𝑬⊂𝑨  ",
                    "c": "𝑭⊂𝑪",
                    "d": "𝑭⊂𝑨",
                    "e": "𝑮⊂𝑫",
                    "f": "𝑮⊂𝑨  ",
                    "g": "𝑭⊂𝑮",
                    "h": "𝑭⊂𝑫",
                    "i": "𝑩⊂𝑨",
                    "j": "𝑫⊂𝑨",
                    "k": "𝑪⊂𝑨",
                    "l": "𝑩⊂𝑪"
                },
                "answers": ["b", "d", "f", "h", "i", "j", "k"],
                "wrongs": {
                    "a": "",
                    "c": "",
                    "e": "",
                    "g": "",
                    "l": ""
                }
            },
            {
                    "id": "second",
                    "question": "¿Cuáles conjuntos No tienen elementos en común?",
                    "options": {
                        "a": "El 𝑪 y el F",
                        "b": "El 𝑨 y el D",
                        "c": "El 𝑫 y el 𝑬",
                        "d": "el 𝑬 y el 𝑭"
                    },
                    "answers": ["c", "d"],
                    "wrongs": {
                        "a": "",
                        "b": ""
                    }
                }

        ];

    function roundit(x) {
        var temp = Math.round(x * 100) / 100;
        return temp;
    }
    //initialise the quiz and prepareAnswers
    makequiz();
    //animate the progress-bar the equivalent of 1 questContainer
    var width = roundit(1 / quiz.length * 100) + "%";
    $('.container-fluid').eq(0).find('.progress-bar').html(width).animate({
        "width": roundit(1 / quiz.length * 100) + "%"
    }, 300, "linear");
    //house keeping
    $("input[type=checkbox]").iCheck('uncheck');

    prepareAnswers();
    //hook event listeners
    $('.check').click(function(ev) {
        curCont = $(this).parents('.questContainer');
        feed = curCont.find('.feedback');
        currentId = curCont.attr("id");
        currentAnswer = answers[currentId].sort();
        actualAnswers = curCont.find('input[type=checkbox]:checked');

        getAnswer();
        checkAnswer();
    });

    $('.why').click(function() {
        curCont = $(this).parents('.questContainer');
        index = $(curCont).attr("questindex");
        feed = curCont.find('.feedback');
        showWhy();
    });

    $('.next').click(function() {
        var questNum = parseInt($(this).parents('.questContainer').attr('questindex')) + 1,
            progressbar = $(this).parents('.container-fluid').find('.progress-bar'),
            nextprog = $(this).parents('.container-fluid').next().find('.progress-bar');
        $(this).parents('.container-fluid').fadeOut(300, function() {
            $(this).next('.container-fluid').fadeIn(300, function() {
                var width = roundit((questNum + 1) / quiz.length) * 100 + "%";
                console.log(width);
                nextprog.html(width).animate({
                    "width": width
                }, 300, "linear");
            });
        });
    });

    $('.prev').click(function() {

        var questNum = parseInt($(this).parents('.questContainer').attr('questindex')),
            progressbar = $(this).parents('.container-fluid').find('.progress-bar'),
            prevprog = $(this).parents('.container-fluid').prev().find('.progress-bar');
        $(this).parents('.container-fluid').fadeOut(300, function() {
            $(this).prev('.container-fluid').fadeIn(300, function() {
                var width = roundit((questNum) / quiz.length) * 100 + "%";
                console.log(width);
                prevprog.html(width).animate({
                    "width": width
                }, 300, "linear");
            });
        });
    });
    $('.redo').click(function() {
        $(this).parents('.questContainer').find('input').iCheck('uncheck');
        $(this).parents('alert-danger').slideUp(120);
        $(this).parents('.container-fluid').find('.check').slideDown(120);
    });
    $('.finish').click(function() {
        alert("You had " + score + " correct questions out of " + quiz.length);
    });

    $('input[type=checkbox]').on('ifChanged', function() {
        $(feed).hide();
        $(this).parents('.container-fluid').find('.alert-danger').hide();
        $(this).parents('.container-fluid').find('.navbuttons').slideUp(200);
        $(this).parents('.container-fluid').find('.check').slideDown(200);
    });
    //functionality functions


    function getAnswer() {
        checks = [];
        for (var i = 0, y; i < actualAnswers.length; i++) {
            y = actualAnswers[i].value;
            checks.push(y);
        }
        console.log("checks : ", checks);
    }

    function checkAnswer() {
        var counter = 0;
        checks = checks.sort();
        currentAnswer = currentAnswer.sort();
        if (!checks.length) {
            feed.show().html("<span>Por favor elegir una opcion</span>");
            return;
        }
        if (!(checks.length == currentAnswer.length)) {
            badAnswer();
            return;
        }
        for (var i = 0; i < checks.length; i++) {
            if (checks[i] == currentAnswer[i]) counter++;
        }
        counter == currentAnswer.length ? goodAnswer() : badAnswer();
        curCont.attr("firstAtempt", false);
    }
    //feedback
    function goodAnswer() {
        $(curCont).parents('.container-fluid').find('.check').addClass('hide');
        $(curCont).parents('.container-fluid').find('.alert-success').fadeIn(120);
        $(curCont).find('input[type=checkbox]').on('ifToggled', function() {
            $(this).iCheck('toggle');
        });
        $('#success-sound')[0].play();
        actualAnswers = '';
        var curAtempt = JSON.parse(curCont.attr("firstAtempt"));
        if (curAtempt) score++;
    }

    function badAnswer() {
        $(curCont).parents('.container-fluid').find('.check').hide();
        $(curCont).parents('.container-fluid').find('.alert-danger').fadeIn(120);
        curCont.attr("firstAtempt", false);
        $('#danger-sound')[0].play();
    }

    function showWhy() {

        var wrongs = quiz[index].wrongs;
        $.each(currentAnswer, function(key) {
            curCont.find('input[value=' + currentAnswer[key] + ']:checked').parents('label').addClass("success").find('div').after("<span class='glyphicon glyphicon-ok-sign' ></span>");
            curCont.find('input[value=' + currentAnswer[key] + ']:not(:checked)').parents('label').addClass("warning").find('div').after("<span class='glyphicon glyphicon-exclamation-sign' ></span>");
        });
        curCont.find('label').not('.success,.warning').has('input[type=checkbox]:checked').addClass("danger").find('div').after("<span class='glyphicon glyphicon-remove-sign' ></span>");
        $(curCont).parents('.container-fluid').find('.alert-danger').slideUp(120);
        $(curCont).parents('.container-fluid').find('.navbuttons').slideDown(120);
        feed.empty();
        for (var el in wrongs) feed.append(el + " : " + wrongs[el] + "<br>");
        feed.fadeIn(120);
        $(curCont).find('input[type=checkbox]').on('ifToggled', function() {
            $(this).iCheck('toggle');
        });

    }

    //quiz builder
    function makequiz() {
        quiz.forEach(function(ques, i) {
            var isfirst, question = "",
                feedbuttons, nextbutton, prevbutton,
                questionIndex = quiz.indexOf(ques),
                questionNumber = questionIndex + 1;
            isfirst = (i === 0) ? "" : "hideit",
                nextClassAndValue = (i == quiz.length - 1) ? "d-none'>siguiente" : "next'>siguiente", //feedbuttons = "<button class='check hideit'>Check</button><button class='why hideit' questindex='" + questionIndex + "'>see why</button><p class='feedback'></p><span></span>";
                header = "<div class='container-fluid " + isfirst + "'><div class='row'><div class='col-md-12'><div class='row'><div class='questContainer row p-0' firstatempt='" + firstAtempt + "' id='" + ques.id + "' questindex='" + questionIndex + "'>",
                pager = "<div class='col-md-12'><div class='row'><div class='interact'><p class='feedback hideit'></p><div class='check hideit'><div class='col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2'><button type='button' class='btn btn-primary btn-block'>Calificar</button></div></div><div class='navbuttons '><div class='col-md-8 col-md-offset-2'><button class='btn bg-azul-os btn-block prev'><span class='glyphicon glyphicon-chevron-left'></span> anterior</button></div><div class='col-xs-6 '><button class='btn bg-azul-os btn-block " + nextClassAndValue + "<span class='glyphicon glyphicon-chevron-right'></span></button></div></div><div class='alert alert-success hideit'><h4><span class='glyphicon glyphicon-ok'></span> Correcto</h4><div class='row'><div class='col-md-6'><button class='btn bg-azul-os btn-block prev d-none' href='#'><span class='glyphicon glyphicon-chevron-left'></span> anterior</button></div><div class='col-md-6'><button class='btn bg-azul-os btn-block " + nextClassAndValue + "<span class='glyphicon glyphicon-chevron-right'></span></button></div></div></div><div class='alert alert-danger hideit'><h4><span class='glyphicon glyphicon-remove'></span>Incorrecto</h4><div class='row'><div class='col-md-6'><button class='btn btn-danger btn-block why' href='#'>terminar<span class='glyphicon glyphicon-question-sign'></span></button></div><div class='col-md-6'><button class='btn btn-primary btn-block redo' href='#'>reiniciar<span class='glyphicon glyphicon-repeat'></span></button></div></div></div></div></div></div></div></div></div></div></div>";

            question = header + "<div class='col-md-12 p-0'><p class='quest p-2 radius-22px-top'>" + questionNumber + ". " + ques.question + "</p>";
            for (var opt in ques.options) {
                var choices = "";
                choices += "<div class='col-md-6'><label><input type='checkbox'  value='" + opt + "'/>" + ques.options[opt] + "</label></div>";
                question += choices;
            }
            //question += feedbuttons + prevbutton+nextbutton;
            question += pager;
            $('.quiz-multiplito').append(question);
        });
        $('.questContainer').eq(0).find('.navbuttons div').eq(0).remove();
        $('.questContainer').eq(0).find('.alert-success .col-xs-6').eq(0).remove();
        $('.questContainer').eq(0).find('.navbuttons div,.alert-success .col-xs-6').attr("class", "col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2");
    }
    //prepare answers
    function prepareAnswers() {
        quiz.forEach(function(el) {
            answers[el.id] = el.answers;
        });
    }
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
});