/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Para Gabriel García Márquez, el gran problema de América Latina fue que no logró asumirse con creatividad.", answer_id: "A", img:""},
        {question_txt: "La descolonización es un proceso de liberación centrado únicamente en el territorio. ", answer_id: "B", img:""},
        {question_txt: "La deconstrucción del heliocentrismo es determinante para la deconstrucción del eurocentrismo en América Latina.", answer_id: "A", img:""},
        {question_txt: "Las relaciones de la colonialidad desaparecieron por completo en América Latina.", answer_id: "B", img:""}

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