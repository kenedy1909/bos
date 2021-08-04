/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Un elemento clave del Capital es la posibilidad de obtener ganancia a partir de la posesión e intercambio de estos medios", answer_id: "A", img:""},
        {question_txt: "La visión de Marx ha recibido diversas críticas por limitarse exclusivamente al capitalismo industrial y por minimizar el efecto del mercado", answer_id: "A", img:""},
        {question_txt: "El Capitalismo ha tenido un comportamiento homogéneo en todos los países.", answer_id: "B", img:""},
        {question_txt: "El Capitalismo es un sistema económico que permea formas de concebir el mundo y la sociedad", answer_id: "A", img:""}

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