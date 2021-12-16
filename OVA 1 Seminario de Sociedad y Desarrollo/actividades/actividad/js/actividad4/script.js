// Arreglo de palabras indicando la posición de su inicio, su sentido (vertical u horizontal),
// la palabra en cuestión y la pista que se presenta al usuario
const palabras = [
  {
    pos: [7, 0],
    sentido: 1,
    palabra: 'planificacion',
    pista: 'Es la clave de la vida social y organizacional que deriva en deshumanización y control.'
  },
  {
    pos: [11, 0],
    sentido: 1,
    palabra: 'naturalizacion',
    pista: 'cuando se concibe la vida social como si ella se comportara de acuerdo con las leyes de la naturaleza. Genera una aceptación resignada de lo social'
  },
  {
    pos: [3, 2],
    sentido: 0,
    palabra: 'mercado',
    pista: 'De acuerdo con el capitalismo, esta es la ley suprema que regula la economía y la vida social.'
  },
  {
    pos: [15, 3],
    sentido: 1,
    palabra: 'eurocentrismo',
    pista: 'Europa como modelo de civilización para el mundo'
  },
  {
    pos: [13, 4],
    sentido: 0,
    palabra: 'acumulativa',
    pista: 'Esta característica de la modernidad surge como resultado de los ideales de la burguesía y el anhelo de libertad del hombre expresado en tener cada vez más'
  },
  {
    pos: [5, 5],
    sentido: 1,
    palabra: 'libertad',
    pista: 'Uno de los fundamentos que guio las esperanzas de la modernidad'
  },
  {
    pos: [20, 6],
    sentido: 1,
    palabra: 'antropocentris',
    pista: 'El hombre como centro de la naturaleza y del mundo.'
  },
  {
    pos: [2, 9],
    sentido: 0,
    palabra: 'extractiva',
    pista: 'En los países no industrializados, se desarrolló este tipo de economía para satisfacer las necesidades de materia prima y de energía de las grandes industrias.'
  },
  {
    pos: [13, 9],
    sentido: 1,
    palabra: 'determinismo',
    pista: 'La creencia de que el reconocimiento de las leyes naturales permitirá predecir los acontecimientos futuros.'
  },
  {
    pos: [11, 10],
    sentido: 0,
    palabra: 'cientifico',
    pista: 'El tipo de pensamiento que se desarrolló en la modernidad, en oposición a la visión religiosa de la vida.'
  },
  {
    pos: [4, 11],
    sentido: 0,
    palabra: 'razon',
    pista: 'Es el fundamento de la autonomía, la esencia que identifica al hombre moderno.'
  },
  {
    pos: [18, 15],
    sentido: 0,
    palabra: 'control',
    pista: 'La acionalización de todas las esferas sociales, conduce a una excesiva regulación.  Lo que lleva a sofisticados mecanismos para garantizarlo.'
  },
  {
    pos: [3, 16],
    sentido: 1,
    palabra: 'individualidad',
    pista: 'El deseo de obtenerla, distancia al hombre de su sentido de comunidad.'
  },
  {
    pos: [2, 17],
    sentido: 0,
    palabra: 'uniformizacion',
    pista: 'El desarrollo de los medios de producción y la influencia de los medios de comunicación, condujo a la idea de la producción en masa, con lo cual se llegó a esta característica en las personas'
  },
  {
    pos: [0, 24],
    sentido: 0,
    palabra: 'expansion',
    pista: 'Se favoreció por el anhelo de aumentar el consumo de bienes, y fue causa de conflictos entre quienes la defendían y quienes la atacaban'
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
          $('.img_res').html('<img src="../img/img7/bien.png" style="max-width: 90%;margin-top: 5%;margin-left: -1%;">');
          $('.puntaje').text(puntaje+"%");
          $('.mensaje').text("¡Felicitaciones!");
          $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -15px;">cerrar</button>');
          $('#exampleModal').modal("show");
      }else{
          $('.img_res').html('<img src="../img/img7/mal.png" style="max-width: 90%;">');
          $('.mensaje').text("Inténtalo nuevamente.");
          $('.puntaje').text(Math.round(puntaje)+"%");
          $('.btns_modal').html('<button style="font-size: 20px;color: #420F0F;font-weight: bold;margin-top: -15px;" id="add" class="btn calificacion-intentar" data-dismiss="modal" onclick="reload()">Volver a intentar</button>');
          $('#exampleModal').modal("show"); 
      }
      registrarActividad(puntaje);
      mostrarCalificacion(modalID, puntaje + '%', mensaje, exito);
      /*this.mensaje = `
        Tu puntuación es ${finalScore}%.
      `*/
    }
  }
})

/*1. Es la clave de la vida social y organizacional que deriva en deshumanización y control.
2. cuando se concibe la vida social como si ella se comportara de acuerdo con las leyes de la naturaleza. Genera una aceptación resignada de lo social 
3. De acuerdo con el capitalismo, esta es la ley suprema que regula la economía y la vida social.
4. Europa como modelo de civilización para el mundo
5. Esta característica de la modernidad surge como resultado de los ideales de la burguesía y el anhelo de libertad del hombre expresado en tener cada vez más
6. Uno de los fundamentos que guio las esperanzas de la modernidad 
7. El hombre como centro de la naturaleza y del mundo.
8. En los países no industrializados, se desarrolló este tipo de economía para satisfacer las necesidades de materia prima y de energía de las grandes industrias.
9. La creencia de que el reconocimiento de las leyes naturales permitirá predecir los acontecimientos futuros.
10. El tipo de pensamiento que se desarrolló en la modernidad, en oposición a la visión religiosa de la vida.
11. Es el fundamento de la autonomía, la esencia que identifica al hombre moderno.
12. La acionalización de todas las esferas sociales, conduce a una excesiva regulación.  Lo que lleva a sofisticados mecanismos para garantizarlo.
13. El deseo de obtenerla, distancia al hombre de su sentido de comunidad.
14. El desarrollo de los medios de producción y la influencia de los medios de comunicación, condujo a la idea de la producción en masa, con lo cual se llegó a esta característica en las personas
15. Se favoreció por el anhelo de aumentar el consumo de bienes, y fue causa de conflictos entre quienes la defendían y quienes la atacaban

1. planificacion
2. naturalizacion
3. mercado
4. eurocentrismo
5. acumulativa
6. libertad
7. antropocentris
8. extractiva
9. determinismo
10. cientifico
11. razon
12. control
13. individualidad
14. uniformizacion
15. expansion*/