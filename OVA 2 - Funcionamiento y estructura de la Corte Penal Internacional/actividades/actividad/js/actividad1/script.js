/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "El examen preliminar por parte de la fiscalía es diferente al inicio formal de una investigación. ", answer_id: "A"},
        {question_txt: "En caso de confluir competencia y admisibilidad, le corresponde a la Corte analizar si una investigación y enjuiciamiento.", answer_id: "B"},
        {question_txt: "Los requisitos de admisibilidad se encuentran establecidos en el artículo 117 del ER.", answer_id: "B"},
        {question_txt: "Debe destacarse que los requisitos de admisibilidad están orientados a verificar que el estado tenga jurisdicción para ejercer la acción penal.", answer_id: "A"}

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