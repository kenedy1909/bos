/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "Desde la época de Aristóteles, el movimiento circular de los cuerpos celestiales se consideraba natural.", answer_id: "A", img:""},
        {question_txt: "Aristóteles fundó y desarrolló el campo de la óptica.", answer_id: "B", img:""},
        {question_txt: "Para comprobar su hipótesis de que la gravedad de la Tierra llega a la Luna, Newton comparó la caída de una manzana con la “caída” de la Luna", answer_id: "A", img:""},
        {question_txt: "Newton razonó que la fuerza sobre cada planeta se dirigiría hacia un punto central fijo: la luna.", answer_id: "B", img:""},
        {question_txt: "El interés de Newton en la mecánica se reavivó con la aparición de un espectacular cometa en 1680.", answer_id: "A", img:""},
        {question_txt: "La ley de gravitación universal puede expresarse como una ecuación exacta.", answer_id: "A", img:""}
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