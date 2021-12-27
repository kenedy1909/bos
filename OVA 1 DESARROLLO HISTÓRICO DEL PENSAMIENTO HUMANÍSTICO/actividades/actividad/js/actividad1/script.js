/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "El humanismo florece en la renacimiento", answer_id: "A"},
        {question_txt: "En el humanismo renacentista el ser humano se apego más a las creencias éticas", answer_id: "B"},
        {question_txt: "La relectura de los filósofos clásicos griegos ayuda a restaurar la visión del ser humano como un ser racional", answer_id: "A"}

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