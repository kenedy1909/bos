/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "El término América Latina fue un término utilizado en el siglo XIX y no en el siglo XVIII, y la razón de éste fenómeno se dió gracias a la influencia del proceso de la Ilustración.", answer_id: "A", img:""},
        {question_txt: "Interculturalidad reunió pensamientos coloniales y modernistas los cuales determinaron la forma de percibir el mundo, el conocimiento individual y colectivo", answer_id: "B", img:""},
        {question_txt: "La modernidad colonial se caracteriza por definir modelos de vida que permanecen con el paso de los años.", answer_id: "A", img:""},
        {question_txt: "La importancia del proceso de modernidad tuvo su  protagonismo en  América Latina, por cuanto el descubrimiento se dio en este continente.", answer_id: "B", img:""}

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