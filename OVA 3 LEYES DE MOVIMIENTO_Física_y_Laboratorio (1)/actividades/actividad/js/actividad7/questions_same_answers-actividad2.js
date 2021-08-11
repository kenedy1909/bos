var generate_id =  function () {
    var text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var path_d1 = "M143.4,160.6l-40.1,40.2l-13.4-13.4l53.5-53.5l53.6,53.5l-13.4,13.4L143.4,160.6z M133.9,306v19.1\
        c0,0,38.2,38.2,105.2,38.2c67,0,105.2-38.2,105.2-38.2V306c0,0-38.2,38.2-105.2,38.2C172.1,344.2,133.9,306,133.9,306z\
         M478.2,239.1C478.2,371.1,371.1,478.2,239.1,478.2C107.1,478.2,0,371.1,0,239.1C0,107.1,107.1,0,239.1,0\
        C371,0,478.2,107.1,478.2,239.1z M459,239.1C459,116.7,361.5,19.2,239.1,19.2C116.7,19.2,19.2,116.7,19.2,239.1\
        C19.2,361.5,116.7,459,239.1,459C361.5,459,459,361.5,459,239.1z M281.1,187.4l13.4,13.4l40.2-40.2l40.2,40.2l13.3-13.4l-53.5-53.5\
        L281.1,187.4z";

var svg_elem1 = '<svg xml:space="preserve" style="enable-background:new 0 0 478 478; "viewBox="0 0 478 478" height="30px" width="30px" y="0px" x="0px" class="svg-radio-elegant svg1" xmlns="http://www.w3.org/2000/svg">\
                    <path d="'+path_d1+'"></path>\
                </svg>';

var path_d2 =  "M172.15,191.2c0,10.5-8.6,19.1-19.1,19.1s-19.1-8.6-19.1-19.1s8.5-19.1,19.1-19.1S172.15,180.7,172.15,191.2z    M160.25,114.1l-63.4,42.8l10.7,15.9l63.4-42.8L160.25,114.1z M133.95,344.2v19.1c0,0,38.2-38.2,105.2-38.2   c67,0,105.2,38.2,105.2,38.2v-19.1c0,0-38.3-38.2-105.2-38.2C172.15,306,133.95,344.3,133.95,344.2z M478.15,239.1   c0,132-107.1,239.101-239.1,239.101S0.05,371,0.05,239.1C0.05,107.2,107.15,0,239.15,0C371.15,0,478.15,107.1,478.15,239.1z    M459.05,239.1c0-122.399-97.5-219.899-219.9-219.899c-122.399,0-220,97.5-220,219.899c0,122.4,97.5,219.9,219.9,219.9   C361.451,459,459.05,361.5,459.05,239.1z M344.25,191.2c0-10.5-8.5-19.1-19.101-19.1c-10.6,0-19.1,8.6-19.1,19.1   s8.6,19.1,19.1,19.1S344.25,201.7,344.25,191.2z M307.25,130l63.399,42.8l10.7-15.9l-63.399-42.8L307.25,130z";

var svg_elem2 = '<svg xml:space="preserve" style="enable-background:new 0 0 478 478; "viewBox="0 0 478 478" height="30px" width="30px" y="0px" x="0px" class="svg-radio-elegant svg2" xmlns="http://www.w3.org/2000/svg">\
                    <path d="'+path_d2+'"></path>\
                </svg>';

var QWSAForm = function (conf) {
    var hasConf = typeof conf == 'object';
    if (!hasConf)
        var conf = {}
    this.id = generate_id();
    this.title = conf.title || null;
    this.answers = conf.answers || null;
    this.questions = conf.questions || null;
    this.table_bordered = (conf.table_bordered == undefined) ? true: conf.table_bordered;
    this.styles = {
        table_bordered: (this.table_bordered) ? "table-bordered": "",
    }

    // Se agrega un id a las preguntas
    for (var i = 0; i < this.questions.length; i++) {
        this.questions[i]["id"] = this.id + "_" + i;
    };

    this.shuffle_questions();
}

QWSAForm.prototype.shuffle_questions =  function () {
    var shuffleArray = function (array) {
        var m = array.length,
            t, i;

        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
    return shuffleArray(this.questions);
}

var QuestionsSameAnswers = function (conf) {
    // questionnaire with same answers
    this.id = generate_id();
    this.activity_name = conf.activity_name || "Actividad";
    this.forms = [];

    this.prepare_files();
}

QuestionsSameAnswers.prototype.addForm =  function (conf) {
    this.forms.push(new QWSAForm(conf));
}

QuestionsSameAnswers.prototype.start =  function (element) {
    var elem = $(element),
        loop = null,
        self = this;
    /*Esperamos hasta que la plantilla haya cargado*/
    loop = setInterval(function () {
        if (self.template != undefined){
            clearInterval(loop);
            self.render(elem);
        }
    }, 1000);

    $(document).on("change", ".qwsa-form input[type='radio']",  function (){
        var input = $(this);
        input.closest("tr").find(".radio-elegant").removeClass("checked");
        input.closest("td").find(".radio-elegant").addClass("checked");
        setTimeout(function(){
        }, 800);
    });

}

QuestionsSameAnswers.prototype.render =  function (elem) {

    var html = swig.render(this.template, {locals: {
        styles: this.styles,
        id: this.id,
        forms: this.forms,
    }});

    // Se pone la tabla completa en el DOM
    elem.html(html);

    // Listener para submit del form (el botón calificar)
    var self = this;
    $("#" + this.id).on("submit", function (e) {
        e.preventDefault();
        self.score();
    })
}

QuestionsSameAnswers.prototype.reset =  function (form) {
    var data = form.serializeArray();

    for (var i = 0; i < data.length; i++) {
        var question_id = data[i].name,
            current_answer = data[i].value;
        for(var idx = 0; idx<this.forms.length; idx++){
            var question_obj = $.grep(this.forms[idx].questions, function (n, index) {return n.id == question_id;})
            if (question_obj.length > 0)
                break;
        }
        var answer_id = "" + question_obj[0].answer_id;
        if (answer_id != current_answer){
            var input = $("input[name='" + question_id + "']");
            input.attr('checked', false);
            input.closest("tr").find(".radio-elegant").removeClass("checked");
        }
    };


}

QuestionsSameAnswers.prototype.score =  function () {
    var form = $("#" + this.id),
        data = form.serializeArray(),
        points = 0,
        self = this;

    for (var i = 0; i < data.length; i++) {
        var question_id = data[i].name,
            current_answer = data[i].value;
        for(var idx = 0; idx<this.forms.length; idx++){
            var question_obj = $.grep(this.forms[idx].questions, function (n, index) {return n.id == question_id;})
            if (question_obj.length > 0)
                break;
        }
        var answer_id = "" + question_obj[0].answer_id;
        if (answer_id == current_answer){
            points += 1;
        }
    };

    var total = 0;

    for (var a = 0; a < this.forms.length; a++) {
        total = total + this.forms[a].questions.length
    };

    var puntaje = ((points * 100)/total).toFixed(0);
    var modalID = "#calificacionModal";
    var exito = false;
    var mensaje = "Inténtalo nuevamente.";
    if (puntaje == 100) {
        exito = true;
        mensaje = "¡Felicitaciones!"
    }
    registrarActividad(puntaje);
    mostrarCalificacion(modalID, puntaje + '%', mensaje, exito, function () {
        self.reset(form);
    });
}

QuestionsSameAnswers.prototype.prepare_files =  function () {
    /* Crea y carga los archivos necesarios para que el módulo funcione */

    var tmp_id = "QWSA_tmp",
        template_script = "<script type='text/template' id='" + tmp_id + "'></script>";

    $("body").append(template_script);

    // Se carga el html de la tabla en la variable this.template
    this.template = null;
    var template_path = "js/QuestionsWithSameAnswer/template_of_table.html";
    var self = this;
    $("#" + tmp_id).html(TEMPLATE);
    self.template = $("#" + tmp_id).html();
}
var conta=1;
var TEMPLATE = '<form id="{{ id }}" method="post" class="qwsa-form">\
    {% for form in forms %}\
    <div class="fondoContenido">\
      <div class="border_punteado">\
        <table class="table tabla-actividad2 ">\
            <thead>\
                {% if form.title %}\
                    <tr><th colspan="10" class="form-title">{{ form.title }}</th></tr>\
                {% endif %}\
                <tr>\
                    <th>Ítem</th>\
                    {% for answer in form.answers %}\
                        <th class="title_table">{{ answer.answer_txt }}</th>\
                    {% endfor %}\
                </tr>\
            </thead>\
            <tbody>\
                {% for question in form.questions %}\
                <tr>\
                    <td>{{ question.question_txt }}  <img src="{{question.img }}"></td>\
                    {% set conta=1 %}\
                    {% for answer in form.answers %}\
                        <td>\
                            <label class="label-container">\
                                <input name="{{ question.id }}" type="radio" value="{{ answer.id }}">\
                                <span class="radio-elegant">{% if conta==1 %} '+svg_elem1+' {% else %} '+svg_elem2+'{% endif %}{% set conta=conta+1 %}</span>\
                            </label>\
                        </td>\
                    {% endfor %}\
                </tr>\
                {% endfor %}\
            </tbody>\
        </table>\
      </div>\
    </div>\
    {% endfor %}\
    <div class="text-center">\
        <button class="btn btn-primary" type="submit" >Calificar</button>\
    </div>\
</form>'
