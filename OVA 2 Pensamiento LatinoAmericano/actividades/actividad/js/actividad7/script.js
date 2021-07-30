/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "La ecología de saberes implica un diálogo entre los saberes eurocéntricos y los saberes indígenas", answer_id: "A", img:""},
        {question_txt: "La ecología de saberes concibe a la realidad compuesta por un cúmulo de posibilidades que concibe lo marginado o lo nunca intentado. ", answer_id: "A", img:""},
        {question_txt: "El Buen Vivir es un solo concepto que nació bajo movilizaciones ciudadanas", answer_id: "B", img:""},
        {question_txt: "El carácter colectivo del desarrollo de abajo hacia arriba no permite un proceso de construcción de poder comunitario capaz de crear un potencial para que los efectos de las iniciativas económicas populares alcancen la esfera política e impacten las causas estructurales de la marginación", answer_id: "B", img:""},
        {question_txt: "En la crítica al concepto de desarrollo son importantes los autores y activistas feministas quienes postulan como necesario el abandono al proyecto eurocéntrico patriarcal. ", answer_id: "A", img:""},
        {question_txt: "Las alternativas propuestas frente al concepto de desarrollo tradicional, reivindican la diversidad cultural pero no la diversidad en las formas de producir", answer_id: "B", img:""},
        {question_txt: "La resistencia a la postura tradicional del desarrollo mediante alternativas basadas en culturas no hegemónicas tuvo como una de sus manifestaciones la lucha contra el colonialismo. ", answer_id: "A", img:""},
        {question_txt: "Las alternativas al desarrollo en América Latina dependen de las formas de vida y el conocimiento anticapitalista", answer_id: "A", img:""},
        {question_txt: "El Buen vivir permite establecer nuevos diálogos frente al concepto tradicional eurocéntrico de desarrollo", answer_id: "A", img:""},
        {question_txt: "Las identidades históricas coloniales son hechos que ocurren fuera  de la cultura. ", answer_id: "B", img:""},

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