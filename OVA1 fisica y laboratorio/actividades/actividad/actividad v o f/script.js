/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Si  𝑝 es (𝐹) , 𝑞 es (𝑉) y 𝑟 es (𝑉), el valor de la verdad de 𝑞 →( 𝑝 ∧ 𝑟 ) será:", answer_id: "B", img:""},
        {question_txt: "Si ( 𝑝 ∧ 𝑞 ) es (𝑉), el valor de verdad de ( ~ 𝑞 → 𝑝 ) será:", answer_id: "A", img:""},
        {question_txt: "Si ( ~ p ∨ q ) es (F) , el valor de verdad de ( p ↔q ) será", answer_id: "B", img:""},
        {question_txt: "Si ∼(∼q ∨r ) es (V), el valor de verdad de [ q → ( p ∧ r ) ] será:", answer_id: "B", img:""}

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