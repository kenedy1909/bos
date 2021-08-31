/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "El documento creado por la comisión de expertos donde recolectaron las infracciones presentadas tuvo más de 65.000 páginas.", answer_id: "A", img:""},
        {question_txt: "En febrero de 1993 el consejo de seguridad mediante la resolución 808 decidió que debía crearse un tribunal Ad hoc para investigar los infracciones al DIH.", answer_id: "A", img:""},
        {question_txt: "El trabajo realizado por el Comité de expertos fue entregado al tribunal en 1999.", answer_id: "B", img:""},
        {question_txt: "El Estatuto conformado desde mayo de 1993 también establece la competencia del tribunal para juzgar crímenes como el genocidio.", answer_id: "A", img:""},
        {question_txt: "El Consejo de Seguridad de Naciones Unidas decide crear los tribunales ad hoc para investigar y juzgar a los responsables de los crímenes cometidos en los conflictos de Yugoslavia y Ruanda.", answer_id: "A", img:""}

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