// Arreglo de palabras indicando la posición de su inicio, su sentido (vertical u horizontal),
// la palabra en cuestión y la pista que se presenta al usuario
const palabras = [
  {
    pos: [3, 0],
    sentido: 0,
    palabra: 'conjuntos',
    pista: 'En las definiciones más corrientes se identifican los sistemas como.'
  },
  {
    pos: [10, 0],
    sentido: 1,
    palabra: 'organizaciones',
    pista: 'Las ________ son el objeto de estudio de la ciencia de la administración '
  },
  {
    pos: [15, 3],
    sentido: 1,
    palabra: 'los sistemas',
    pista: 'Son concebidos como una totalidad compuesta por múltiples componentes, cuyas propiedades no son atribuibles a la adición de partes o elementos independientes de sus partes o nuevos componentes.'
  },
  {
    pos: [0, 4],
    sentido: 0,
    palabra: 'retroalimentacion',
    pista: 'Una ___________ puede ser positiva o negativa, dependiendo de las consecuencias que tengan dentro del funcionamiento del sistema.'
  },
  {
    pos: [1, 9],
    sentido: 0,
    palabra: 'comportamientos',
    pista: 'Desarrollar un conjunto de leyes aplicables a los __________ y funcionamiento de los sistemas.'
  },
  {
    pos: [7, 9],
    sentido: 1,
    palabra: 'tgs',
    pista: 'La teoría general de los sistemas'
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
        puntaje = 100;
        exito = true;
        mensaje = "¡Felicitaciones!"
        $("#img-circulo").attr("src","../../../assets/img/img_ova/bien.png");  
    }
    if (puntaje < 100) {
        $("#img-circulo").attr("src","../../../assets/img/img_template/mal.png");  
    }
      // if (puntaje >= 90) {
      //     puntaje = 100;
      //     exito = true;
      //     mensaje = "¡Felicitaciones!"
      // }
      registrarActividad(puntaje);
      mostrarCalificacion(modalID, puntaje + '%', mensaje, exito);
      /*this.mensaje = `
        Tu puntuación es ${finalScore}%.
      `*/
    }
  }
})

function reiniciar(){
  location.reload();
}
