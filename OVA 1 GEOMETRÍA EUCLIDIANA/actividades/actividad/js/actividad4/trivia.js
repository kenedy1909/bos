window.onload = function () {
  var cantidad;
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
      
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '(𝒑→∼𝒒)↔ (𝒑 ∨ 𝒒)' : ['SI', 'NO', 1],
        
        '(𝒒→∼𝒑)↔ (∼𝒑 ∨ 𝒒)∨𝒓' : ['SI', 'NO', 1],

        '(𝒒→∼𝒑)↔ ∼(𝒑 ∧ 𝒒)' : ['SI', 'NO', 0],
        
        '[(𝒑 ∨ 𝒒)∧ (𝒑 → 𝒓) ∧  (𝒒 → 𝒔)]→ (𝒓∨ 𝒔)' : ['SI', 'NO', 0]
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
      createDiv.className += 'col-md-5 opcion';
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      cantidad = answers.length +1;
      answerArea.appendChild(createDiv);
    }
    /*$('.cantidad').html("1/"+answers.length);*/
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
    $('.cantidad').html((current+1)+"/"+cantidad);
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