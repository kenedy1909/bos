/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
            {id: "A", answer_txt: "Verdadero"},
            {id: "B", answer_txt: "Falso"}
        ];
    var _questions = [
        {question_txt: "La pasarela de pagos se refiere al  flujo de dinero entre el cliente a la tienda", answer_id: "B", img:""},
        {question_txt: "C2B  es la relación comercial  entre una persona que ofrece sus servicios o productos a empresas", answer_id: "A", img:""},
        {question_txt: "Las cargas de comisión y los canales de recaudo en Colombia son siempre los mismos", answer_id: "B", img:""},
        {question_txt: "Government to Consumer (G2C) se refiere a un marketplace o plataforma comercial, en la cual una empresa grande oferta productos o servicios para venderle a sus empleados.", answer_id: "B", img:""},
        {question_txt: "Business to Employee (B2E) es la relación comercial  que se da cuando una empresa o las empresas en general le ofrecen productos o servicios al gobierno.", answer_id: "B", img:""},
        {question_txt: "La experiencia de usuario es uno de los criterios a evaluara a la hora de elegir una pasarela de pago.", answer_id: "A", img:""}
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