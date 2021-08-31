/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Describir y analizar puntualmente la situación socio jurídica.", answer_id: "A"},
        {question_txt: "Centrar la pregunta en la intención investigativa", answer_id: "A"},
        {question_txt: "El contexto pasa a un segundo plano", answer_id: "B"},
        {question_txt: "Reflexión sobre un punto específico", answer_id: "A"}

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