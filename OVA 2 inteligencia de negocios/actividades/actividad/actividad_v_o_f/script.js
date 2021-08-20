/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "La evolución de los sistemas de información, fue una gran mejora con respecto al modelo jerárquico.", answer_id: "A", img:""},
        {question_txt: "Basada en la estructuración se utilizan puntos de datos no un lenguaje como SQL.", answer_id: "B", img:""},
        {question_txt: "Desde diferentes usuarios pueden acceder a la información y compartirla sin muchos problemas.", answer_id: "A", img:""},
        {question_txt: "No tienen ninguna clase de  limitaciones por su incapacidad de representar de manera eficiente grandes cantidades de datos.", answer_id: "B", img:""},
        {question_txt: "El término de base de datos se conoció por primera vez en 1963.", answer_id: "A", img:""}
        

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