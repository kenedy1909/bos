// ### VARIABLES ###
var intentosEmparejamiento = 0;
// Array de palabras
var palabras = [["Mantenimiento", ""]];
// Palabra a averiguar
var palabra = "";
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 8;
// Botones de letras
var buttons = document.getElementsByClassName('letra');
// Boton de reset
var btnInicio = document.getElementById("reset");


// ### FUNCIONES ###

// Escoger palabra al azar
function generaPalabra() {
  /*rand = (Math.random() * 2).toFixed(0);
  console.log(rand);*/
  rand = 0;
  palabra = palabras[rand][0].toUpperCase();
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

//Generar abecedario
function generaABC (a,z) {
  document.getElementById("abcdario").innerHTML = "";
  $('.letra').prop('disabled',false);
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for(; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra btn btn-cloud' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra btn btn-cloud' id='"+letra+"'>Ñ</button>";
    }
  }
}

// Chequear intento
function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += " acierto verde";
  }else{
    cont--;
    $("#image"+cont).removeClass('ahorcado_intento_2');
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += " acierto rojo";
    document.getElementById("image"+cont).className += "fade-in-juego";
  }
  compruebaFin();
  setTimeout(function () { 
      document.getElementById("acierto").className = ""; 
  }, 2200);
}

// Obtener pista
function pista() {
  document.getElementById("pregunta-jg").innerHTML = palabras[rand][1];
}

// Compruba si ha finalizado
function compruebaFin() {
  if( oculta.indexOf("_") == -1 ) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    intentosEmparejamiento++;

    if(intentosEmparejamiento >= 2){
        Swal.fire(
            '¡Lo sentimos!',
            'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
            'warning'
        )
        intentosEmparejamiento = 0;
        document.getElementById("msg-final").innerHTML = "Sigue estudiando";
        document.getElementById("msg-final").className += "zoom-in";
        $("#res-true").html(palabra);
        $( '.respuesta-div' ).show()
                        .css( {'opacity': 0, 'bottom': '-100px' } )
                        .animate( { 'opacity': '1', 'bottom' : 0 }, 1000);   
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
        document.getElementById("reset").innerHTML = "Empezar";
        btnInicio.onclick = function () { location.reload() };
    } else {
        Swal.fire(
            '¡Lo sentimos!',
            'Puedes intentarlo de nuevo',
            'error'
        )
        inicio();
        for (var h = 0; h < cont; h++) {
          $("#image"+h).removeClass('fade-in-juego');
          $("#image"+h).addClass("ahorcado_intento_2");
        }
    }
  }
}

// Restablecer juego
function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  generaABC("a","z");
  cont = 8;
  document.getElementById("intentos").innerHTML=cont;
  pista();
}

// Iniciar
window.onload = inicio();
