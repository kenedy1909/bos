window.onload = function () {
  var cantidad;
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
      
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'La Corte podrá juzgar a personas que, al momento de la comisión del crimen, fueran menores de 18 años' : ['Correcto', 'Incorrecto', 1],
        
        'La Corte establecerá principios aplicables a la reparación, incluidas la restitución, la indemnización y la rehabilitación' : ['Correcto', 'Incorrecto', 0],

        'El mandato de la oficina es investigar y juzgar crímenes de competencia de la corte' : ['Correcto', 'Incorrecto', 0],
        
        'La Corte no es un tribunal con personalidad jurídica internacional' : ['Correcto', 'Incorrecto', 1],
        
        'Para el cumplimiento de sus funciones, el ER ha previsto una estructura interna que permita su funcionamiento de forma armónica.' : ['Correcto', 'Incorrecto', 0]
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
    $('.cantidad').html("1/5");
  }
  /*if (curr == 1) {
    $('.cantidad').html("2/5");
  }*/
  if (curr == 4) {
    $('.cantidad').html("5/5");
    btr = true;
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
    console.log(answers);
  }

  function Imag() {
    var texto1 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-correcto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_0').prepend(texto1);
    var texto2 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-incorrecto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_0_1').prepend(texto2);

// ------------------------ pregunta 2
    var texto3 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-correcto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_0').prepend(texto3);
    var texto4 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-incorrecto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_1_1').prepend(texto4);
// ------------------------ pregunta 3

    var texto5 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-correcto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_0').prepend(texto5);
    var texto6 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-incorrecto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_2_1').prepend(texto6);

// ------------------------ pregunta 4
    var texto7 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-correcto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_3_0').prepend(texto7);
    var texto8 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-incorrecto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_3_1').prepend(texto8);

// ------------------------ pregunta 5

    var texto9 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-correcto.png" style="width: 100%;">
                  </div>
                </div>`;

    $('.img_option_4_0').prepend(texto9);
    var texto10 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 80px; height: 80px; background: white; border-radius: 50%; padding: 12px; margin:auto; position: absolute; top: -65px; left:38%;">
                    <img src="../../../assets/img/img_ova/icono-incorrecto.png" style="width: 100%;">
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
    if (current+2 != 6) {
      $('.cantidad').html((current+2)+"/"+5);
    }else{
      $('.cantidad').html("5/5");
      $('.btn-calificacion').css("display","initial");
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

  var puntaje = 100;
  for (var i = 0; i < res.length; i++){
    if (res[i] == 'false'){
      puntaje = puntaje - 33.3;
    }
  }
  /*alert(Math.round(puntaje));*/
  if (puntaje == 100) {
    $('.img_res').html('<img src="../img/img11/bien.png" style="max-width: 90%;">');
    $('.puntaje').text(puntaje+"%");
    $('.mensaje').text("¡Felicitaciones!");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
  }else{
    $('.img_res').html('<img src="../img/img11/mal.png" style="max-width: 90%;">');
    $('.mensaje').text("¡Puedes hacerlo mejor!");
    $('.puntaje').text(Math.round(puntaje)+"%");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
  }
}

function reiniciar(){
  location.reload();
}