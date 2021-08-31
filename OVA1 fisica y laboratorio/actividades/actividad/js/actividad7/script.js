/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "La educación no ocurre solo en las escuelas", answer_id: "A", img:""},
        {question_txt: "La educación tendrá por el objeto el desarrollo de la personalidad humana", answer_id: "A", img:""},
        {question_txt: "La educación para el crecimiento económico no requiere de actitudes básica, alfabetización y competencias matemáticas", answer_id: "B", img:""},
        {question_txt: "El modelo de desarrollo humano supone un compromiso con la democracia", answer_id: "A", img:""}

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