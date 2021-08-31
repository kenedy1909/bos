/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Se llama ángulo a la “figura”  que se forma por dos semirrectas que tienen su origen en un mismo punto.", answer_id: "A", img:""},
        {question_txt: "Las perpendiculares no se cortan.", answer_id: "B", img:""},
        {question_txt: "La perpendicular es más corta que toda oblicua.", answer_id: "A", img:""},
        {question_txt: "Dos rectas paralelas a una tercera serán paralelas entre sí.", answer_id: "A", img:""}
        

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