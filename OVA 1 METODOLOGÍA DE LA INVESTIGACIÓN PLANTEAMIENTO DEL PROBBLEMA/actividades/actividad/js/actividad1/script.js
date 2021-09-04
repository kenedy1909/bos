/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "El problema debe expresar una relación existente entre dos o más conceptos o variables", answer_id: "A"},
        {question_txt: "El problema  no debe estar formulado como pregunta, claramente sin ambigüedades.", answer_id: "B"},
        {question_txt: "Las preguntas de la investigación dirigen o encaminan hacia las respuestas que se busca con la investigación que se planea realizar", answer_id: "A"},
        {question_txt: "Las preguntas pueden ser más o menos generales, pero es mejor no ser muy precisos.", answer_id: "B"}

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