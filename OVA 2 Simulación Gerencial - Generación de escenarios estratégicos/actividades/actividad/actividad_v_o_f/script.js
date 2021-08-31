/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Realizar un inventario ordenado de problemas o situaciones desfavorables identificadas", answer_id: "A", img:""},
        {question_txt: "Desintegrar los análisis al identificar cada una de las causas del problema", answer_id: "B", img:""},
        {question_txt: "Desjerarquizar las diferentes categorías de los problemas", answer_id: "B", img:""},
        {question_txt: "Agrupar o separar las problemáticas identificadas", answer_id: "A", img:""}
        

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