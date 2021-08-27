/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Para hablar de la cantidad de materia que tiene algo, se utiliza el término masa", answer_id: "A", img:""},
        {question_txt: "La proporción directa entre la masa y el peso dice que, si la masa de un objeto se duplica, su peso también se duplica; si la masa se reduce a la mitad, el peso se reduce a la mitad. Debido a esto, masa y peso con frecuencia se usan en forma igual.", answer_id: "B", img:""},
        {question_txt: "Masa y peso son iguales entre sí.", answer_id: "B", img:""},
        {question_txt: "La masa es una cantidad fundamental que escapa por completo a la observación de la mayoría de las personas.", answer_id: "A", img:""},
        {question_txt: "¿La primera ley de Newton establece la equivalencia entre el estado de reposo y de movimiento rectilíneo uniforme?", answer_id: "A", img:""}
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