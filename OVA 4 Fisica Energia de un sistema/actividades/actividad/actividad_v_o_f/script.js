/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "En 1678 Hooke observó que la fuerza que se aplicaba a un resorte era proporcional a la elongación de este desde su punto de equilibrio.", answer_id: "A", img:""},
        {question_txt: "Si un objeto está en movimiento, entonces es capaz de realizar trabajo.", answer_id: "A", img:""},
        {question_txt: "La energía mecánica puede estar en la forma de energía potencial.", answer_id: "B", img:""},
        {question_txt: "La energía cinética K de un objeto depende tanto de la masa del objeto como de su rapidez.", answer_id: "A", img:""},
        {question_txt: "La energía potencial se denomina así porque en el estado almacenadono  tiene el potencial de realizar trabajo.", answer_id: "B", img:""},
        

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