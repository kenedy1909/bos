/*js de la Lección*/
$(document).on('ready', inicioRecurso);

function inicioRecurso() {
    //Actividad 2
    var _answers = [
        { id: "A", answer_txt: "Verdadero" },
        { id: "B", answer_txt: "Falso" }
    ];
    var _questions = [
        { question_txt: "La parte V del Estatuto de Roma consagra las normas aplicables a la investigación, iniciando en el artículo 53 que establece el inicio de la investigación por parte del Fiscal, donde cuál se consagra los requisitos que debe analizar la fiscalía a fin de poder determinar el inicio formal de la investigación.", answer_id: "A", img: "" },

        { question_txt: "La Regla 401 de las Reglas de procedimiento y prueba de la CPI, dispone todas las instancias a las que puede acudir el fiscal para recabar la información necesaria para evaluar la información que ha recibido.", answer_id: "B", img: "" },

        { question_txt: "La regla 109 establece el plazo y procedimiento para la sala de cuestiones preliminares revisar una decisión de la fiscalía.", answer_id: "A", img: "" },

        { question_txt: "La regla 116 establece el procedimiento para cuando la prueba sea solicitada por la defensa.", answer_id: "A", img: "" },

        { question_txt: "Todas las actuaciones que se dan en la investigación, hasta antes de la confirmación de cargos, corresponde el control judicial a la sala de cuestiones preliminares.", answer_id: "A", img: "" },

        { question_txt: "El juez y policia judicial son quienes deciden, con base en la evaluación que realiza de la información suministrada, si solicita o no a la sala de cuestiones preliminares el inicio de una investigación.", answer_id: "B", img: "" },
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