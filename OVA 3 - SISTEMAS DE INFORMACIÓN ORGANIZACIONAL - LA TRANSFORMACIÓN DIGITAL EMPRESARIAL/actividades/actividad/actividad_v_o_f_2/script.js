/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "La  Automatización se puede identificar una tendencia de hoy hacia una sociedad más lenta en los procesos con base a la tecnología", answer_id: "B", img:""},
        {question_txt: "Según la RAE, automatización es la acción de automatizar", answer_id: "A", img:""},
        {question_txt: "“Fordismo”, término que hace referencia al método de “Fredy Lord “.", answer_id: "B", img:""}
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