window.onload = function () {
  var cantidad;
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
      
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '¿ En qué articulo se encuentran definidas de manera general las funciones y atribuciones de la Sala de Primera Instancia,?' : ['Artículo 64 del ER', 'Ley de confidencialidad 1432 del AR', 0],

        '¿Cuáles son los elementos por los que debe velar la Sala de Primera Instancia para que el juicio sea justo?' : ['Que se lean las pruebas correspondientes al crimen cometido', 'Que se sustancie con respeto de los derechos del acusado y la protección de victimas y testigos', 1],
        
        '¿Qué articulo le da poder al juez para realizar un juicio a puerta cerrada ?' : ['Articulo 68', 'Articulo 46', 0],
        
        '¿Cuál de las siguientes decisiones, pueden ser tomadas por la Sala de primera Instancia a solicitud de una de las partes?' : ['Modificar fecha de juicio y posibles testigos', 'Administrar la pertinencia de las pruebas y mantener el orden en las audiencias', 1]
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
    $('.cantidad').html('1/4');
  }
  if (curr == 1) {
    $('.cantidad').html('2/4');
  }
  if (curr == 2) {
    $('.cantidad').html('3/4');
  }
  if (curr == 3) {
    $('.cantidad').html('4/4');
  }
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div');
      createDiv.className += ('col-md-5 opcion img_option_'+curr+'_'+i);
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      cantidad = answers.length +1;
      answerArea.appendChild(createDiv);
    }
    /*$('.cantidad').html("1/"+answers.length);*/
    Imag();
  }

  function Imag() {
    var texto1 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/manualDeFunciones.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_0').prepend(texto1);
    var texto2 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/confidencialidad.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_1').prepend(texto2);

// ------------------------ pregunta 2
    var texto3 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/leer.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_0').prepend(texto3);
    var texto4 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/testigo.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_1').prepend(texto4);
// ------------------------ pregunta 3

    var texto5 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/icono_tribunal.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_0').prepend(texto5);
    var texto6 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/forma4.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_1').prepend(texto6);
// ------------------------ pregunta 4

    var texto7 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/icono_tribunal.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_3_0').prepend(texto7);
    var texto8 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/forma4.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_3_1').prepend(texto8);
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
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
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      if ((current+2) != 4) {
        $('.cantidad').html((current+2)+"/"+cantidad);
      }
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

function calificar(){
  var i = 0;
  var res = [];
  $('.checker>div').each(function (){
    res[i] = $(this).attr('class');
    i++;
  });

  var puntaje = 0;
  for (var i = 0; i < res.length; i++){
    if (res[i] == 'correct'){
      puntaje = puntaje + 25;
    }
  }
  /*alert(Math.round(puntaje));*/
  if (puntaje == 100) {
    $('.img_res').html('<img src="./img/bien.png" style="max-width: 90%;">');
    $('.puntaje').text(puntaje+"%");
    $('.mensaje').text("¡Felicitaciones!");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
  }else{
    $('.img_res').html('<img src="./img/mal.png" style="max-width: 90%;">');
    $('.mensaje').text("¡Puedes hacerlo mejor!");
    $('.puntaje').text(Math.round(puntaje)+"%");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
  }
}

function reiniciar(){
  location.reload();
}