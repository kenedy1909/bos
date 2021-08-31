/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Todos los elementos 𝑥 de 𝑈 cumplen:", answer_id: "B", img:"../img/img1/Imagen5.png"},
        {question_txt: "Existe algún elemento de 𝑈 que cumple:", answer_id: "A", img:"../img/img1/Imagen4.png"},
        {question_txt: "Todos los elementos 𝑥 de 𝑈 cumplen:", answer_id: "A", img:"../img/img1/Imagen3.png"},
        {question_txt: "Existe algún elemento de 𝑈 que cumple:", answer_id: "B", img:"../img/img1/Imagen1.png"}

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