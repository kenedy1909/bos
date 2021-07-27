/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Reforma Universitaria fue hecha en 1918", answer_id: "A", img:""},
        {question_txt: "No se invitan a los jóvenes americanos a defender sus derechos en el ámbito universitario", answer_id: "B", img:""},
        {question_txt: "El doctor Héctor Abad Gómez fue quien redacto el acta de fundación", answer_id: "A", img:""},
        {question_txt: "Las voces de los jóvenes universitarios fueron escuchas en los años sesenta", answer_id: "B", img:""}
        

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

}