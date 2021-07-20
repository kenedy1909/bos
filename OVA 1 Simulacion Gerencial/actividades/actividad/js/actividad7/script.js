/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Sin teorías, no se puede entender una situación problemática.", answer_id: "A", img:""},
        {question_txt: "Nunca se debe delimitar las investigaciones en el marco teórico.", answer_id: "B", img:""},
        {question_txt: "El marco teórico es fundamental en una investigación, ya que es la guía y la referencia bibliográfica de nuestra investigación", answer_id: "A", img:""},
        {question_txt: "Con marco teórico no se pueden predecir estados futuros.", answer_id: "B", img:""}

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