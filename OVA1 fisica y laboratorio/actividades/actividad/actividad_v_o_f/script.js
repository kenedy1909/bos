/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "En los vectores y sus componente rectangulares se representa una cantidad vectorial, como una flecha donde se muestra que los vectores tienen dirección.", answer_id: "A", img:""},
        {question_txt: "En general, se puede calcular la magnitud de un vector si se conocen sus componentes heptágonos", answer_id: "B", img:""},
        {question_txt: "Al dibujar un vector, siempre se traza una línea con punta de flecha. La longitud de la línea indica la magnitud del vector, y la dirección de la línea es la del vector.", answer_id: "A", img:""}
        

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