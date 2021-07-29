/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "{𝑎, 𝑑}⊂{𝑎,𝑏,𝑐,{ 𝑑}}", answer_id: "B", img:""},
        {question_txt: "{𝑎, 𝑎, 𝑎}⊂{𝑎}", answer_id: "A", img:""},
        {question_txt: "{┤}=0", answer_id: "B", img:""},
        {question_txt: "𝜙={┤}:", answer_id: "A", img:""},
        {question_txt: "Si 𝐴 ⊂ 𝐵 entonces  𝐴 ∩𝐵 ⊂ 𝐵:", answer_id: "B", img:""},
        {question_txt: "Si  𝑥∈𝐴 ∪𝐵  entonces  𝑥 ∈ 𝐴△𝐵", answer_id: "B", img:""}

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