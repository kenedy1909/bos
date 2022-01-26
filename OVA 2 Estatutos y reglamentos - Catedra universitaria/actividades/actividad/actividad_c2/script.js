// Arreglo de palabras indicando la posición de su inicio, su sentido (vertical u horizontal),
// la palabra en cuestión y la pista que se presenta al usuario
const palabras = [{
        pos: [9, 0],
        sentido: 1,
        palabra: 'asambleadelegataria',
        pista: 'Está conformada por representantes de todos los asociados de la Universidad'
    },
    {
        pos: [0, 1],
        sentido: 0,
        palabra: 'fundadores',
        pista: 'Órgano jerárquico más alto y se encuentra conformado por los fundadores'
    },
    {
        pos: [16, 1],
        sentido: 1,
        palabra: 'cogobierno',
        pista: 'Órgano que se encuentra conformado por profesores, estudiantes y egresados exclusivamente'
    },
    {
        pos: [9, 9],
        sentido: 0,
        palabra: 'eleccion',
        pista: 'Órgano que tiene representantes de estudiantes y de profesores o de profesores, estudiantes y egresados.'
    },
    {
        pos: [9, 12],
        sentido: 0,
        palabra: 'gobierno',
        pista: 'Órgano que toma las decisiones fundamentales para la dirección de la Universidad.'
    }

]

// Objeto default para celdas vacías de la grilla
const empty = {
    start: false,
    letter: '',
    words: [],
    empty: true
}

new Vue({
    el: '#app',
    data() {
        return {
            // Arreglo de booleanos indicando si una palabra fue completada
            completed: Array(palabras.length).fill(false),
            // Entero indicando la palabra que fue seleccionada para completar
            selected: undefined,
            // String donde se guarda lo que ingresa el usuario
            answer: '',
            // Cantidad de veces que se solicitó una pista
            penalties: 0,
            // Temporizador en segundos desde el comienzo de la partida. Comienza en 5 minutos.
            timer: 60 * 1,
            // La tabla que será armada al inicio, conteniendo todas las celdas
            matrix: [],
            // Mensaje final a mostrar
            mensaje: undefined
        }
    },
    created() {
        // Creación de la tabla que contiene las celdas.
        const width = palabras.reduce((max, cur) =>
            Math.max(max, cur.pos[0] + (cur.sentido === 0 ? cur.palabra.length : 1)), 0)
        const height = palabras.reduce((max, cur) =>
            Math.max(max, cur.pos[1] + (cur.sentido === 1 ? cur.palabra.length : 1)), 0)
        let matrix = Array(height).fill(0).map(() => Array(width).fill(null).map(() => empty))
        palabras.forEach((palabra, index) => {
            const [x, y] = palabra.pos
            palabra.palabra.split('').forEach((l, i) => {
                let cell = matrix[y + (palabra.sentido ? i : 0)][x + (palabra.sentido ? 0 : i)]
                if (cell === empty) {
                    cell = matrix[y + (palabra.sentido ? i : 0)][x + (palabra.sentido ? 0 : i)] = { words: [] }
                }
                cell.empty = false
                cell.words.push(index)
                if (i === 0) {
                    cell.start = index + 1
                }
                cell.letter = l
            })
        })
        this.matrix = matrix

        // Control del temporizador y disparador del evento final cuando éste se acabe
        this.$options.interval = setInterval(() => {
            this.timer--
                if (this.timer <= 0) {
                    clearInterval(this.$options.interval)
                        // this.finalizar()
                }
        }, 1000)
    },
    computed: {
        // Contiene la pista de la palabra seleccionada
        pista() {
            if (this.selected === undefined) return undefined
            return `${palabras[this.selected].sentido ? 'Vertical' : 'Horizontal'} ${this.selected + 1}: ${palabras[this.selected].pista}`
        },
        // Formato a mostrar del cronómetro
        cronometro() {
            const minutes = Math.floor(this.timer / 60).toString().padStart(2, '0')
            const seconds = Math.floor(this.timer % 60).toString().padStart(2, '0')
            return `${minutes}:${seconds}`
        }
    },
    methods: {
        selectWord(index) {
            if (index > 0) {
                this.selected = index - 1
                this.answer = ''
                setTimeout(() => this.$refs.input.focus(), 50)
            }
        },
        // Se fija si la palabra ingresada es correcta y de ser así, modifica el arreglo de palabras completas
        corregir() {
            const solucion = palabras[this.selected].palabra
            const answer = this.answer.toLowerCase()
            if (answer === solucion) {
                this.completed[this.selected] = true
                this.selected = undefined
            }
        },
        // Agrega una letra correcta más a la respuesta actual
        solucion() {
            const solucion = palabras[this.selected].palabra
            const answer = this.answer.toLowerCase()
            if (answer === solucion) {
                return
            }
            if (answer !== solucion.slice(0, answer.length)) {
                this.penalties++
                    this.answer = ''
            }
            this.answer = solucion.slice(0, this.answer.length + 1)
            this.penalties++
        },
        // Calcula el puntaje final del jugador en base a las respuestas correctas y las penalidades por pistas
        finalizar() {
            const total = this.completed.reduce((total, current, i) => total + palabras[i].palabra.length, 0)
            const completo = this.completed.reduce((total, current, i) => current ? total + palabras[i].palabra.length : total, 0)
            const tempScore = Math.ceil(100 * completo / total)
            const finalScore = Math.max(tempScore - this.penalties, 0)
            if (tempScore < 100) {
                this.penalties++
            }
            var puntaje = finalScore;
            var modalID = "#exampleModal";
            var exito = false;
            var mensaje = "Inténtalo nuevamente."
                /*if (puntaje >= 90) {
                    puntaje = 100;
                    exito = true;
                    mensaje = "¡Felicitaciones!"
                }
                registrarActividad(puntaje);
                mostrarCalificacion(modalID, puntaje + '%', mensaje, exito);*/
            if (puntaje >= 100) {
                $('.img_res').html('<img src="../img/img7/bien.png" style="max-width: 80%;margin-top: 9%;">');
                $('.puntaje').text("100%");
                $('.mensaje').text("¡Felicitaciones!");
                $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: 1%;" onclick="reiniciar()">cerrar</button>');
            } else {
                $('.img_res').html('<img src="../img/img7/mal.png" style="max-width: 80%;margin-top: 11px;">');
                $('.mensaje').text("¡Puedes hacerlo mejor!");
                $('.puntaje').text("0%");
                $('.btns_modal').html('<button style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: 1%;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reiniciar()">Volver a intentar</button>');
            }
            $("#exampleModal").modal("show");
            /*this.mensaje = `
              Tu puntuación es ${finalScore}%.
            `*/
        }
    }
})

function reiniciar() {
    location.reload();
}