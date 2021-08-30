/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "7,2 s", answer_id: "B", img:""},
        {question_txt: "23,5 s", answer_id: "B", img:""},
        {question_txt: "18,6 s", answer_id: "A", img:""},
        {question_txt: "14,8 s", answer_id: "B", img:""},
        {question_txt: "34,3 s", answer_id: "B", img:""}
        

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