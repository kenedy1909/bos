window.onload = function () {
  var cantidad;
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
      
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '¿Cuáles son los fundamentos de la minería de datos ?' : ['Consiste en la detección de información en grandes cantidades de datos, buscando encontrar relaciones que de otra manera serían insospechadas.', 'Diferentes usuarios pueden acceder a la información y compartirla sin muchos problemas.', 0],

        '¿Cuáles son las cuatro etapas comunes de la minería de datos?' : ['●Caracteres. - ●Caracteres Unicode. - ●Numéricos. - ●Booleanos.', '●Determinación de los objetivos. - ●Preprocesamiento de los datos. - ●Determinación del modelo. - ●Análisis de los resultados.', 1],
        
        '¿Cuáles son los procesos típicos de la minería de datos?' : ['●Base de Datos. - ●Limpieza e integración. - ●Selección y Transformación. - ●Minería de Datos. - ●Patrones. - ●Evaluación y Presentación.', '●Regresión no lineal. - ●Árboles de predicción  - ●Estimador de núcleos - ●Árboles de decisión - ●Predicción numérica', 0]
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
    $('.cantidad').html('1/3');
  }
  if (curr == 1) {
    $('.cantidad').html('2/3');
  }
  if (curr == 2) {
    $('.cantidad').html('3/3');
  }
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div');
      createDiv.className += ('col-md-5 p_white opcion img_option_'+curr+'_'+i);
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
                    <img src="./img/circular.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_0').prepend(texto1);
    var texto2 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/herramienta.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_1').prepend(texto2);

// ------------------------ pregunta 2
    var texto3 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/jerarquico.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_0').prepend(texto3);
    var texto4 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/bases.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_1').prepend(texto4);
// ------------------------ pregunta 3

    var texto5 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/deductivos.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_0').prepend(texto5);
    var texto6 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="./img/relacionales.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_1').prepend(texto6);
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
      puntaje = puntaje + 33.3;
    }
  }
  /*alert(Math.round(puntaje));*/
  if (puntaje >= 90) {
        exito = true;
        mensaje = "¡Felicitaciones!"

        $('.img_res').html('<img src="img/bien.png" style="max-width: 80%; margin-top: 10%;margin-left: 1px;">');
        $('.puntaje').text(Math.round(puntaje)+"%");
        $('.mensaje').text("¡Felicitaciones!");
        $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 22px;color: #da2316;font-weight: bold;margin-top: -15px;width: 20%;">cerrar</button>');
        $("#exampleModal").modal("show");
  }else{
        $('.img_res').html('<img src="img/mal.png" style="max-width: 80%;margin-top: 10%;margin-left: 1px;">');
        $('.mensaje').text("Inténtalo nuevamente.");
        $('.puntaje').text(Math.round(puntaje)+"%");
        $('.btns_modal').html('<button style="font-size: 20px;color: #da2316;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reload()">Volver a intentar</button>');
        $("#exampleModal").modal("show");
  }
}

function reload(){
  location.reload();
}