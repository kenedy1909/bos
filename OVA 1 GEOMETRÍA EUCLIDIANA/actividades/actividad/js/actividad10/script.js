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

      var matriz = [  ['v','v','f','f','v','v','v'],
                      ['v','f','v','f','f','f','v'],
                      ['f','v','f','v','v','v','f'],
                      ['f','f','v','v','v','v','v']];
  function inicioRecurso() {
      var tabla;
      for (var i = 0; i < 4; i++) {
          tabla += `<tr class="p_black">`;
          for (var j = 0; j < 7; j++) {
              tabla += `<td><input type="text" name="" maxlength="1" class="tabla_opciones tabla_opciones_`+i+`_`+j+` w-137px h-100"></td>`;
          }
          tabla += `</tr>`;
      }
      $("#body_opciones").html(tabla);
      $(".enviar_tabla").on('click', tabla);
      $(".tabla_opciones_0_0, .tabla_opciones_0_1, .tabla_opciones_1_0, .tabla_opciones_2_1").val('v');
      $(".tabla_opciones_1_1, .tabla_opciones_2_0, .tabla_opciones_3_0, .tabla_opciones_3_1").val('f');
      $(".tabla_opciones_0_0, .tabla_opciones_0_1, .tabla_opciones_1_0, .tabla_opciones_1_1, .tabla_opciones_2_0, .tabla_opciones_2_1, .tabla_opciones_3_0, .tabla_opciones_3_1").attr('disabled',true);
  }


  function tabla(){
      

      var matriz_r = [[],[],[],[]];

      for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 7; j++) {
              var valor = $(".tabla_opciones_"+i+"_"+j).val();
              matriz_r[i][j] = valor;
          }
      }

/*
      for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 7; j++) {
              var valor = $(".tabla_opciones_"+i+"_"+j).val();
              matriz_r[i][j] = valor;
          }
      }*/
      /*for (var a = 0; a < this.forms.length; a++) {
          total = total + this.forms[a].questions.length
      };*/

      var points = 0;
      for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 7; j++) {
            if (matriz_r[i][j] == matriz[i][j]) {
                points++;
            }
          }
      }
      var total = 28;
      var puntaje = ((points * 100)/total).toFixed(0);
    //   var modalID = "#calificacionModal";
      var exito = false;
    //   var mensaje = "Inténtalo nuevamente.";
      if (puntaje == 100) {
          exito = true;
        //   mensaje = "¡Felicitaciones!"
      }
      registrarActividad(puntaje);
      mostrarCalificacion(modalID, puntaje + '%', mensaje, exito, function () {
      });

      
  }