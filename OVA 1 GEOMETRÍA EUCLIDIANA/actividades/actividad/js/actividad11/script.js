/*js de la Lección*/
/*$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "p"},
            {id: "B", answer_txt: "q"},
            {id: "C", answer_txt: "~ q"},
            {id: "D", answer_txt: "~ p"},
            {id: "E", answer_txt: "p → q"},
            {id: "F", answer_txt: "~ q →~ p"},
            {id: "G", answer_txt: "q → p"},
            {id: "V", answer_txt: "V"},
            {id: "f", answer_txt: "F"}
        ];
    var _questions = [
        {question_txt: "", answer_id: "B", img:""},
        {question_txt: "", answer_id: "A", img:""},
        {question_txt: "", answer_id: "A", img:""},
        {question_txt: "", answer_id: "B", img:""}

    ];

    var qwsa = new QuestionsSameAnswers({
        activity_name: "Faltas al cliente",
        table_bordered: false
    });
    qwsa.addForm({
        answers: _answers,
        questions: _questions,
        table_bordered: false
    });
    qwsa.start("#cuestionario-actividad2");

    //termina Actividad 2

}*/

 $(document).on('ready', inicioRecurso);

  var array = ['v', 'v', 'v', 'f', 'f', 'f','v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'];
  function inicioRecurso() {
      $(".enviar_tabla").on('click', tabla2);
  }


  function tabla2(){
      

      var array_r = [];

      for (var i = 1; i <= 15; i++) {
          var valor = $(".tabla_opciones_"+i).val();
          array_r.push(valor);
      }
/*
      for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 7; j++) {
              var valor = $(".tabla_opciones_"+i+"_"+j).val();
              array_r[i][j] = valor;
          }
      }*/
      /*for (var a = 0; a < this.forms.length; a++) {
          total = total + this.forms[a].questions.length
      };*/

      var points = 0;
      for (var i = 1; i <= 15; i++) {
            if (array_r[i] == array[i]) {
                points++;
            }
      }
      var total = 15;
      var puntaje = ((points * 100)/total).toFixed(0);
      var modalID = "#calificacionModal";
      var exito = false;
      var mensaje = "Inténtalo nuevamente.";
      if (puntaje == 100) {
          exito = true;
          mensaje = "¡Felicitaciones!"
      }
      registrarActividad(puntaje);
      mostrarCalificacion(modalID, puntaje + '%', mensaje, exito, function () {
      });
  }