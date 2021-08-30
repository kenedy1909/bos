/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Una referencia completa no requiere de información adicional del texto citado.", answer_id: "B"},
        {question_txt: "Para citar de manera correcta no es necesario seguir las normas APA, no se requiere créditos referenciales.", answer_id: "B"},
        {question_txt: "El principal objetivo al momento de realizar la revisión de la literatura, es analizar si la teoría que existe y por consiguiente las investigaciones anteriores dan o apuntan a una respuesta tentativa a la pregunta.", answer_id: "A"},
        {question_txt: "La revisión literaria nos da información si hay una o varias teorías en relación al tema.", answer_id: "A"}

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