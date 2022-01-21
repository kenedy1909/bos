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
  if (curr == 0) {
    $('.cantidad').html("1/5");
  }
  if (curr == 1) {
    $('.cantidad').html("2/5");
  }
  if (curr == 2) {
    $('.cantidad').html("3/5");
  }
  if (curr == 3) {
    $('.cantidad').html("4/5");
  }
  if (curr == 4) {
    $('.cantidad').html("5/5");
  }
  
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div');
      createDiv.className += ('col-md-5 opcion img_option_'+curr+'_'+i);
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      cantidad = answers.length;
      answerArea.appendChild(createDiv);
    }
    /*$('.cantidad').html("1/"+answers.length);*/
    Imag();
    console.log(answers);
  }

  function Imag() {
    var texto1 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/indigena_actividad.png" style="width: 130%; margin-top: -10%; margin-left: -10%;">
                  </div>
                </div>`;

    $('.img_option_0_0').prepend(texto1);
    var texto2 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img class="rota-horizontal" src="../img/img9/colonialismo.png" style="width: 300%;margin-left: -80px;margin-top: -23%;">
                  </div>
                </div>`;

    $('.img_option_0_1').prepend(texto2);

// ------------------------ pregunta 2
    var texto3 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/calendario.png" style="width: 170%;margin-top: -25%;margin-left: -23%;">
                  </div>
                </div>`;

    $('.img_option_1_0').prepend(texto3);
    var texto4 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/calendario.png" style="width: 170%;margin-top: -25%;margin-left: -23%;">
                  </div>
                </div>`;

    $('.img_option_1_1').prepend(texto4);
// ------------------------ pregunta 3

    var texto5 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/continente.png" style="width: 130%;margin-left: -17%;">
                  </div>
                </div>`;

    $('.img_option_2_0').prepend(texto5);
    var texto6 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/maparojoclaro.png" style="width: 240%;margin-left: -78%;margin-top: -40%;">
                  </div>
                </div>`;

    $('.img_option_2_1').prepend(texto6);

// ------------------------ pregunta 4
    var texto7 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/BanderaEuropa.png" style="width: 140%;margin-left: -20%;margin-top: -20%;">
                  </div>
                </div>`;

    $('.img_option_3_0').prepend(texto7);
    var texto8 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/BanderaEuropa.png" style="width: 140%;margin-left: -20%;margin-top: -20%;">
                  </div>
                </div>`;

    $('.img_option_3_1').prepend(texto8);

// ------------------------ pregunta 5

    var texto9 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/Desigual.png" style="width: 115%;margin-left: -6%;">
                  </div>
                </div>`;

    $('.img_option_4_0').prepend(texto9);
    var texto10 = `<div style="width: 100%; position: relative; display: flex;">
                  <div style="width: 100px;height: 100px;background: white;border-radius: 50%;padding: 12px;margin: auto;position: absolute;top: -55px;left: 38%;">
                    <img src="../img/img9/Igualdad.png" style="width: 115%;">
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
        $('.showcal').show();
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

  var puntaje = 0;
  for (var i = 0; i < res.length; i++){
    if (res[i] == 'correct'){
      puntaje = puntaje + 20;
    }
  }
  /*alert(Math.round(puntaje));*/
  if (puntaje == 100) {
    $('.img_res').html('<img src="../img/img7/bien.png" style="max-width: 90%;margin-top:5%;">');
    $('.puntaje').text(puntaje+"%");
    $('.mensaje').text("¡Felicitaciones!");
    $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: 0px;" onclick="reiniciar()">cerrar</button>');
  }else{
    $('.img_res').html('<img src="../img/img7/mal.png" style="max-width: 80%;margin-top:5%;">');
    $('.mensaje').text("¡Puedes hacerlo mejor!");
    $('.puntaje').text(Math.round(puntaje)+"%");
    $('.btns_modal').html('<button style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: 0px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
  }
}

function reiniciar(){
  location.reload();
}