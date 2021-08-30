/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Si (q→ ∼p) es (F), el valor de verdad de (∼ q ∧ p) sera:", answer_id: "B", img:""},
        {question_txt: "Si (∼p → q) es (F), el valor de verdad de (p v ∼ q) sera:", answer_id: "A", img:""},
        {question_txt: "Si p es (V) y (∼p ↔ q) es (V), el valor de verdad de (p  → ∼ q) sera:", answer_id: "B", img:""},
        {question_txt: "Paula canta o Alex no es buen actor, si Alex no es buen actor entonces Santi no gana un Grammy, Santi gana un Grammy, ¿si las proposiciones anteriores son verdaderas entonces? Paula canta es:", answer_id: "A", img:""}

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