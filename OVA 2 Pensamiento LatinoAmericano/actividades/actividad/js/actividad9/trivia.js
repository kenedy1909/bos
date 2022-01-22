window.onload = function() {
    var cantidad;
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea = document.getElementsByClassName('answers')[0],
        checker = document.getElementsByClassName('checker')[0],
        current = 0,

        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions = {
            '¿Cuál es le paradigma que se adquiere para el termino “el buen vivir” según Francesca Belotti?': ['Paradigma regulador del conjunto total de la vida', 'Paradigma de control político y cultural', 1],

            '¿Qué nombre recibe  la filosofía del siglo XVIII, donde se dio la lucha de los jesuitas con los franceses y borbones?': ['Filosofía de la emancipación', 'Filosofía de la liberación', 0],

            '¿Qué temas motivaron la creación de la filosofía de la liberación?': ['La ilustración y la opresión de los criollos.', 'La unión a los estándares industriales del progreso capitalista europeo', 1]
        };

    function loadQuestion(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question = Object.keys(allQuestions)[curr];

        questionArea.innerHTML = '';
        questionArea.innerHTML = question;
    }

    function loadAnswers(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function
        if (curr == 0) {
            $('.cantidad').html("1/2");
        }
        if (curr == 1) {
            $('.cantidad').html("2/2");
        }


        var answers = allQuestions[Object.keys(allQuestions)[curr]];

        answerArea.innerHTML = '';

        for (var i = 0; i < answers.length - 1; i += 1) {
            var createDiv = document.createElement('div');
            createDiv.className += ('col-md-5 opcion img_option_' + curr + '_' + i);
            text = document.createTextNode(answers[i]);

            createDiv.appendChild(text);
            createDiv.addEventListener("click", checkAnswer(i, answers));

            cantidad = answers.length + 1;
            answerArea.appendChild(createDiv);
        }
        /*$('.cantidad').html("1/"+answers.length);*/
        Imag();
        console.log(answers);
    }

    function Imag() {
        var texto1 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/mujer.png" style="width: 100%;">
                  </div>
                </div>`;

        $('.img_option_0_0').prepend(texto1);
        var texto2 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/superpoblacion.png" style="width: 100%;">
                  </div>
                </div>`;

        $('.img_option_0_1').prepend(texto2);

        // ------------------------ pregunta 2
        var texto3 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/proceso-creativo.png" style="width: 100%;">
                  </div>
                </div>`;

        $('.img_option_1_0').prepend(texto3);
        var texto4 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/protesta.png" style="width: 100%;">
                  </div>
                </div>`;

        $('.img_option_1_1').prepend(texto4);
        // ------------------------ pregunta 3

        var texto5 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/red.png" style="width: 100%;">
                  </div>
                </div>`;

        $('.img_option_2_0').prepend(texto5);
        var texto6 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/fabrica.png" style="width: 100%;">
                  </div>
                </div>`;

        $('.img_option_2_1').prepend(texto6);
    }

    function checkAnswer(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is sams as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function() {
            var givenAnswer = i,
                correctAnswer = arr[arr.length - 1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
            } else {
                addChecker(false);
            }

            if (current < Object.keys(allQuestions).length - 1) {
                current += 1;

                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionArea.innerHTML = 'Oprime Califica para ver los resultados';
                answerArea.innerHTML = '';
            }

        };
    }

    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv = document.createElement('div'),
            txt = document.createTextNode(current + 1);

        createDiv.appendChild(txt);
        $('.cantidad').html((current + 1) + "/" + 3);
        if (bool) {

            createDiv.className += 'correct';
            checker.appendChild(createDiv);
        } else {
            createDiv.className += 'false';
            checker.appendChild(createDiv);
        }
    }


    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);

};

function calificar() {
    var i = 0;
    var res = [];
    $('.checker>div').each(function() {
        res[i] = $(this).attr('class');
        i++;
    });

    var puntaje = 0;
    for (var i = 0; i < res.length; i++) {
        if (res[i] == 'false') {
            puntaje = puntaje + 33.3;
        }
    }
    /*alert(Math.round(puntaje));*/
    if (puntaje > 98) {
        $('.img_res').html('<img src="../img/img7/bien.png" style="max-width: 90%;margin-top:5%;">');
        $('.puntaje').text(Math.round(puntaje) + "%");
        $('.mensaje').text("¡Felicitaciones!");
        $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: 0px;" onclick="reiniciar()">cerrar</button>');
    } else {
        $('.img_res').html('<img src="../img/img7/mal.png" style="max-width: 80%;margin-top:5%;">');
        $('.mensaje').text("¡Puedes hacerlo mejor!");
        $('.puntaje').text(Math.round(puntaje) + "%");
        $('.btns_modal').html('<button style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: 0px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
    }
}

function reiniciar() {
    location.reload();
}