/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Los experimentos “puros” implican el manejo de grupos intactos, es decir, que estaban creados antes del experimento.", answer_id: "B"},
        {question_txt: "Las hipótesis pueden considerarse, una posible respuesta a la pregunta de investigación.", answer_id: "A"},
        {question_txt: "Los estudios con posprueba son el grado de confianza que se tiene de que los resultados del experimento se interpreten adecuadamente y sean válidos.", answer_id: "B"},
        {question_txt: "Las “unidades de análisis” son los sujetos, objetos, sucesos o comunidades de estudio que se desprenden del planteamiento de la investigación.", answer_id: "A"}

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