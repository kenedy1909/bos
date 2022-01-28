// Arreglo de palabras indicando la posición de su inicio, su sentido (vertical u horizontal),
// la palabra en cuestión y la pista que se presenta al usuario

// 1 vertical
// 0 horizontal
var cont = 0;
const palabras = [
  {
    // [x,y]
    pos: [6, 0],
    sentido: 1,
    palabra: 'supervisorradar',
    pista: 'Es el que garantiza la prestación de los servicios de tránsito aéreo en los aeropuertos bajo su jurisdicción.'
  },
  {
    pos: [0, 1],
    sentido: 0,
    palabra: 'aeronautica',
    pista: 'Pistas e instalaciones para el aterrizaje y despegue de aeronaves; generalmente ocupa una extensión menor la del aeropuerto y está destinado a usos militares.'
  },
  {
    pos: [4, 4],
    sentido: 0,
    palabra: 'aerodromo',
    pista: 'La navegación aérea es el conjunto de técnicas y procedimientos que permiten pilotar eficientemente una aeronave a su lugar de destino.'
  },
  {
    pos: [12, 10],
    sentido: 1,
    palabra: 'piloto',
    pista: 'es la persona cuya función es guiar aeronaves en vuelo.'
  },
  {
    pos: [5, 11],
    sentido: 0,
    palabra: 'navegacionaerea',
    pista: 'Ciencia y técnica que se ocupa de la construcción de vehículos capaces de volar y del estudio de los factores.'
  },
  {
    pos: [6, 13],
    sentido: 0,
    palabra: 'atfcm',
    pista: 'Para la comunidad aeronáutica es de gran importancia conocer el estado actual del sistema de espacio aéreo con el fin de prever las condiciones de operación futuras y así efectuar una planificación eficiente.'
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
  data () {
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
  created () {
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
          cell = matrix[y + (palabra.sentido ? i : 0)][x + (palabra.sentido ? 0 : i)] = {words: []}
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
    pista () {
      if (this.selected === undefined) return undefined
      return `${palabras[this.selected].sentido ? 'Vertical' : 'Horizontal'} ${this.selected + 1}: ${palabras[this.selected].pista}`
    },
    // Formato a mostrar del cronómetro
    cronometro () {
      const minutes = Math.floor(this.timer/60).toString().padStart(2, '0')
      const seconds = Math.floor(this.timer%60).toString().padStart(2, '0')
      return `${minutes}:${seconds}`
    }
  },
  methods: {
    selectWord (index) {
      if (index > 0) {
        this.selected = index - 1
        this.answer = ''
        setTimeout(() => this.$refs.input.focus(), 50)
      }
    },
    // Se fija si la palabra ingresada es correcta y de ser así, modifica el arreglo de palabras completas
    corregir () {
      const solucion = palabras[this.selected].palabra
      const answer = this.answer.toLowerCase()
      if (answer === solucion) {
        this.completed[this.selected] = true
        this.selected = undefined
      }else{
        cont++;
      }

      if (cont >= 3) {
        //$("#calificar").css('display','none');
        //$("tr").css('pointer-events','none');
       
        $('#correctas').modal("show");
        cont = 0;
      }
    },
    // Agrega una letra correcta más a la respuesta actual
    solucion () {
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
    finalizar () {
      const total = this.completed.reduce((total, current, i) => total + palabras[i].palabra.length, 0)
      const completo = this.completed.reduce((total, current, i) => current ? total + palabras[i].palabra.length : total, 0)
      const tempScore = Math.ceil(100 * completo / total)
      const finalScore = Math.max(tempScore - this.penalties, 0)
      if (tempScore < 100) {
        this.penalties++
      }
      var puntaje = finalScore;
      var modalID = "#calificacionModal";
      var exito = false;
      var mensaje = "Inténtalo nuevamente."
      if (puntaje >= 90) {
        $('.img_res').html('<img src="img/fuegos-artificiales.png" style="max-width: 90%;">');
        $('.btns_modal').html('<button type="button" class="btn intento" data-dismiss="modal">cerrar</button>');
        $('#texto-modal').html('<p style="font-size: 25px;color: #847770;FONT-WEIGHT: BOLD;">¡FELICITACIONES!</p> Su puntaje es <b class="num_cali">100%</b>');
        $('#modal-ahorcado').removeClass("intentar");
        $('#img_mundo').removeClass("d-none");
        $('#modal-ahorcado').modal("show");
      }else{
        $('.img_res').html('<img src="img/mala-critica.png" style="max-width: 90%;">');
        $('.btns_modal').html('<button type="button" class="btn intento" data-dismiss="modal" onclick="">INTÉNTELO NUEVAMENTE</button>');
        $('#texto-modal').html('Su puntaje es <b class="num_cali">0%</b>');
        $('#modal-ahorcado').addClass("intentar");
        $('#modal-ahorcado').modal("show");

        /*$('.img_res').html('<img src="img/fuegos-artificiales.png" style="max-width: 90%;">');
        $('.btns_modal').html('<button type="button" class="btn intento" data-dismiss="modal">cerrar</button>');
        $('#texto-modal').html('<p style="font-size: 25px;color: #847770;FONT-WEIGHT: BOLD;">¡FELICITACIONES!</p> Su puntaje es <b class="num_cali">100%</b>');
        $('#modal-ahorcado').removeClass("intentar");
        $('#img_mundo').removeClass("d-none");
        $('#modal-ahorcado').modal("show");*/
        
      }
      registrarActividad(puntaje);
      mostrarCalificacion(modalID, puntaje + '%', mensaje, exito);
      /*this.mensaje = `
        Tu puntuación es ${finalScore}%.
      `*/
    }
  }
})

function otraves(){
  location.reload();
}