/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Decimos que los procesos de automatización industrial implican la asimilación y utilización de avances tecnológicos.", answer_id: "A", img:""},
        {question_txt: "RPA por sus siglas en inglés (Robotic Process Automation) cuando nos referimos a automatización robótica.", answer_id: "A", img:""},
        {question_txt: "Aunque la automatización se puede dar en diferentes campos y aspectos.", answer_id: "B", img:""}
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