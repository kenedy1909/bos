/*js de la LecciΓ³n*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Si  π es (πΉ) , π es (π) y π es (π), el valor de la verdad de π β( π β§ π ) serΓ‘:", answer_id: "B", img:""},
        {question_txt: "Si ( π β§ π ) es (π), el valor de verdad de ( ~ π β π ) serΓ‘:", answer_id: "A", img:""},
        {question_txt: "Si ( ~ p β¨ q ) es (F) , el valor de verdad de ( p βq ) serΓ‘", answer_id: "B", img:""},
        {question_txt: "Si βΌ(βΌq β¨r ) es (V), el valor de verdad de [ q β ( p β§ r ) ] serΓ‘:", answer_id: "B", img:""}

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