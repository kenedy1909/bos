/*js de la LecciΓ³n*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "{π, π}β{π,π,π,{ π}}", answer_id: "B", img:""},
        {question_txt: "{π, π, π}β{π}", answer_id: "A", img:""},
        {question_txt: "{β}=0", answer_id: "B", img:""},
        {question_txt: "π={β}:", answer_id: "A", img:""},
        {question_txt: "Si π΄ β π΅ entonces  π΄ β©π΅ β π΅:", answer_id: "B", img:""},
        {question_txt: "Si  π₯βπ΄ βͺπ΅  entonces  π₯ β π΄β³π΅", answer_id: "B", img:""}

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
