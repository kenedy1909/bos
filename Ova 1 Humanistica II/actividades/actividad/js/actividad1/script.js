/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Las posturas más tradicionales proporcionan una mayor participación a los Gobiernos en la posibilidad de garantizar confianza y mejora en las condiciones de vida de la población.", answer_id: "B"},
        {question_txt: "La educación contable se encuentra en medio de las exigencias empresariales y las tendencias sociales derivadas del mundo de los  negocios.", answer_id: "A"},
        {question_txt: "La economía clásica visiona en el pleno empleo de los factores económicos y los indicadores de orden macroeconómico que sobre ello dan cuenta.", answer_id: "A"},
        {question_txt: "El fenómeno de acuerdos globales no han derivado la necesidad  de incorporación de nuevas variables no contenidas en los análisis presentados por  las  cifras  financieras  tradicionales.", answer_id: "B"}

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