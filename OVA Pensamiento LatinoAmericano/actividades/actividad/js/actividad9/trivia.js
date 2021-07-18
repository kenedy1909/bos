window.onload = function () {
  var cantidad;
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
      
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Una de las ventajas de la superación del eurocentrismo es:' : ['La visibilidad social de los pueblos indígenas.', 'La inclusión del colonialismo intelectual', 0],
        
        'La crítica más fuerte al Eurocentrismo, llegó en:' : ['1988', '1960', 1],

        'El Eurocentrismo ubica a Europa desde una concepción:' : ['Ideológica', 'Antropológica', 0],
        
        'El Eurocentrismo establece que Europa es una civilización:' : ['Racional e inmadura', 'Madura y racional', 1],
        
        'El  Etnocentrismo consiste en:' : ['Creer que su propia cultura es superior', 'Creer que todas las culturas son iguales', 0]
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
    console.log(answers);
  }

  function Imag() {
    var texto1 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/Indigena3.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_0').prepend(texto1);
    var texto2 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/Indigena2.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_1').prepend(texto2);

// ------------------------ pregunta 2
    var texto3 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/calendario.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_0').prepend(texto3);
    var texto4 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/calendario.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_1').prepend(texto4);
// ------------------------ pregunta 3

    var texto5 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/continente.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_0').prepend(texto5);
    var texto6 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/continente.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_1').prepend(texto6);

// ------------------------ pregunta 4
    var texto7 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/BanderaEuropa.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_3_0').prepend(texto7);
    var texto8 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/BanderaEuropa.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_3_1').prepend(texto8);

// ------------------------ pregunta 5

    var texto9 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/Desigual.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_4_0').prepend(texto9);
    var texto10 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../img/img9/Igualdad.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_4_1').prepend(texto10);
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
    $('.cantidad').html((current+1)+"/"+5);
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

  var puntaje = 100;
  for (var i = 0; i < res.length; i++){
    if (res[i] == 'false'){
      puntaje = puntaje - 33.3;
    }
  }
  /*alert(Math.round(puntaje));*/
  if (puntaje == 100) {
    $('.img_res').html('<img src="../img/img4/bien.png" style="max-width: 90%;">');
    $('.puntaje').text(puntaje+"%");
    $('.mensaje').text("¡Felicitaciones!");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
  }else{
    $('.img_res').html('<img src="../img/img4/mal.png" style="max-width: 90%;">');
    $('.mensaje').text("¡Puedes hacerlo mejor!");
    $('.puntaje').text(Math.round(puntaje)+"%");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
  }
}

function reiniciar(){
  location.reload();
}