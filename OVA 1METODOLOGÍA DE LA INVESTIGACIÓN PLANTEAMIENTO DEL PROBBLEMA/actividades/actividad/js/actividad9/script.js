$(document).on('ready', init_recurso_1);

function init_recurso_1() {
    $('#modal-ahorcado').hide();
    var common = {
        msg: "vsdf",
        valorRandom: function (minimo, maximo) {
            return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
        },
        valorDefinido: function (opcion) {
            if (typeof opcion != 'undefined') {
                return true;
            } else {
                return false;
            }
        },
        volverAJugar: function (obj, message) {
            var valor = prompt("Deseas volver a intentarlo?\n Si = 1,\n  No= 0", "1");

            if (valor >= 0 && valor <= 1) {
                if (valor == 1) {
                    obj.jugar();
                } else {
                    this.mensajeJuego(message);
                }

            } else {
                this.mensajeJuego("Seleccione una opcion Correcta!");
                this.volverAJugar();
            }
        },
        mensajeJuego: function (messsage) {
            alert(messsage);
        }
    };
    var Canvas = function (id_canvas) {
        this.canvas = document.getElementById(id_canvas);
        this.canvasWidth = document.getElementById(id_canvas).clientWidth; //obtengo altura del canvas
        this.canvasHeight = document.getElementById(id_canvas).clientHeight; //obtengo altura del canvas
        this.canvasArea = document.getElementById(id_canvas).getContext("2d"); //obtengo el contexto del canvas que es donde se puede pintar
        this.canvasLineasGrilla = document.getElementById(id_canvas).getAttribute("data-lineas-grilla"); //defino el ancho ente lineas que tendra la grilla
        this.canvasCantidadLinea = function () { //defino el ancho de cada linea
            return this.canvasWidth / this.canvasLineasGrilla;
        };
        this.canvasLimiteX = function () { //limite de lineas de la grilla por el eje X
            return this.canvasWidth / this.canvasCantidadLinea();
        };
        this.canvasLimiteY = function () { //limete de lineas de la grilla  por el eje Y
            return this.canvasHeight / this.canvasCantidadLinea();
        };
        this.pintarGrilla = function () { //funcion para pintar la grilla
            var linea, punto

            for (linea = 0; linea <= this.canvasCantidadLinea(); linea++) {
                punto = (linea * this.canvasLineasGrilla);
                this.canvasArea.beginPath();
                this.canvasArea.strokeStyle = "#AAA";
                this.canvasArea.moveTo(punto, 0);
                this.canvasArea.lineTo(punto, this.canvasHeight);
                this.canvasArea.stroke();
                this.canvasArea.closePath();
            }

            for (linea = 0; linea <= this.canvasCantidadLinea(); linea++) {
                punto = (linea * this.canvasLineasGrilla);
                this.canvasArea.beginPath();
                this.canvasArea.strokeStyle = "#AAA";
                this.canvasArea.moveTo(0, punto);
                this.canvasArea.lineTo(this.canvasWidth, punto);
                this.canvasArea.stroke();
                this.canvasArea.closePath();
            }
        };
        this.pintarGrillaDiagonal = function () { //funcion para pintar la grilla
            var linea, punto

            for (linea = 0; linea <= (this.canvasCantidadLinea() * 2); linea++) {
                punto = (linea * this.canvasLineasGrilla);
                this.canvasArea.beginPath();
                this.canvasArea.strokeStyle = "#AAA";
                this.canvasArea.moveTo(punto, 0);
                this.canvasArea.lineTo(0, punto);
                this.canvasArea.stroke();
                this.canvasArea.closePath();
            }

            for (linea = 0; linea <= (this.canvasCantidadLinea() * 2); linea++) {
                punto = (linea * this.canvasLineasGrilla);
                this.canvasArea.beginPath();
                this.canvasArea.strokeStyle = "#AAA";
                this.canvasArea.moveTo((this.canvasWidth - punto), 0);
                this.canvasArea.lineTo((this.canvasWidth), (punto));
                this.canvasArea.stroke();
                this.canvasArea.closePath();
            }
        };
        this.pintarLineasEjercicio = function () {
            this.canvasArea.strokeStyle = "#ad123c";
            this.canvasArea.moveTo(50, 150); //paso las coordenadas del punto de partida de la linea
            this.canvasArea.lineTo(200, 50); //paso las coordenadas del punto de destino de la linea
            this.canvasArea.moveTo(200, 150);
            this.canvasArea.lineTo(50, 50);
            this.canvasArea.moveTo(50, 50);
            this.canvasArea.lineTo(50, 150);
            this.canvasArea.moveTo(200, 50);
            this.canvasArea.lineTo(200, 150)
            this.canvasArea.moveTo(50, 50);
            this.canvasArea.lineTo(200, 50);
            this.canvasArea.moveTo(50, 150);
            this.canvasArea.lineTo(200, 150);
            this.canvasArea.moveTo(125, 50);
            this.canvasArea.lineTo(125, 150);
            this.canvasArea.moveTo(50, 100);
            this.canvasArea.lineTo(200, 100);
        };
        this.pintarCirculo = function (parametros) {
            this.canvasArea.strokeStyle = parametros.borderColor;
            this.canvasArea.arc(parametros.ejeX, parametros.ejeY, parametros.radio, parametros.radian_inicio, parametros.radian_fin, parametros.direccionContraReloj);
            if (parametros.backgroundColor != false) {
                this.canvasArea.fillStyle = parametros.backgroundColor;
                this.canvasArea.fill();
            }

        };
        this.pintarImg = function (parametros) {
            var img = new Image();
            img.src = parametros.src;
            var canvasArea = this.canvasArea;
            img.onload = function () {
                parametros.imgOnload = true;
                if (parametros.imgOnload) {
                    canvasArea.drawImage(img, parametros.ejeX, parametros.ejeY);
                }
            }
        };
        this.limpiarCanvas = function () {
            this.canvasArea.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        }

    }
    var Ahorcado = function () {
        this.canvas_ahorcado = new Canvas('campo_ahorcado');
        this.intentos_maximos = 5;
        this.intento = 0;
        this.vivo = true;
        this.palabras = new Array();
        this.palabraSelect = new Array();
        this.underscoreOrLetter;
        this.palabraMostrar = "";
        this.abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', '\u00F1', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.palabrasMake = function () {

            this.palabras[0] = ['falsacion', ''];
            this.palabras[1] = ['falsacion', ''];
            this.palabras[2] = ['falsacion', ''];
            this.palabras[4] = ['falsacion', ''];
            this.palabras[5] = ['falsacion', ''];
            this.palabras[6] = ['falsacion', ''];
            this.palabras[7] = ['falsacion', ''];
            this.palabras[8] = ['falsacion', ''];

            return this.palabras;

        };
        this.palabrasRandom = function () {
            var ind = common.valorRandom(0, 8);
            this.palabraSelect = this.palabras[ind];
        };
        this.head = {
            parametros_circulo_a: {
                borderColor: "#ad123c",
                ejeX: 150,
                ejeY: 140,
                radio: 40,
                radian_inicio: 0,
                radian_fin: Math.PI * 2,
                direccionContraReloj: false,
                backgroundColor: false
            }
        };
    }

    Ahorcado.prototype.trazar = function () {
        this.intento++;
        if (this.intento >= this.intentos_maximos) {
            this.vivo = false;
        }
        this.dibujarTodo();
    }

    Ahorcado.prototype.dibujarPoste = function () {
        //inicio el path para dibujar
        this.canvas_ahorcado.canvasArea.beginPath();
        this.canvas_ahorcado.canvasArea.strokeStyle = "#f57921";
        this.canvas_ahorcado.canvasArea.moveTo(150, 100);
        this.canvas_ahorcado.canvasArea.lineTo(150, 50);
        this.canvas_ahorcado.canvasArea.lineTo(400, 50);
        this.canvas_ahorcado.canvasArea.lineTo(400, 350);
        this.canvas_ahorcado.canvasArea.lineWidth = 15;
        this.canvas_ahorcado.canvasArea.stroke();
        this.canvas_ahorcado.canvasArea.closePath();
        //finalizo el path

    }

    Ahorcado.prototype.dibujarCabeza = function () {
        //inicio el path para dibujar
        this.canvas_ahorcado.canvasArea.beginPath();
        this.canvas_ahorcado.pintarCirculo(this.head.parametros_circulo_a);
        this.canvas_ahorcado.canvasArea.lineWidth = 5;
        this.canvas_ahorcado.canvasArea.stroke();
        this.canvas_ahorcado.canvasArea.closePath();
        //finalizo el path

    }

    Ahorcado.prototype.dibujarTorso = function () {
        //inicio el path para dibujar
        this.canvas_ahorcado.canvasArea.beginPath();
        this.canvas_ahorcado.canvasArea.moveTo(150, 180);
        this.canvas_ahorcado.canvasArea.lineTo(150, 260);
        this.canvas_ahorcado.canvasArea.lineWidth = 5;
        this.canvas_ahorcado.canvasArea.stroke();
        this.canvas_ahorcado.canvasArea.closePath();
        //finalizo el path

    }

    Ahorcado.prototype.dibujarBrazos = function () {
        //inicio el path para dibujar
        this.canvas_ahorcado.canvasArea.beginPath();
        this.canvas_ahorcado.canvasArea.moveTo(120, 220);
        this.canvas_ahorcado.canvasArea.lineTo(150, 180);
        this.canvas_ahorcado.canvasArea.lineTo(180, 220);
        this.canvas_ahorcado.canvasArea.lineWidth = 5;
        this.canvas_ahorcado.canvasArea.stroke();
        this.canvas_ahorcado.canvasArea.closePath();
        //finalizo el path
    }

    Ahorcado.prototype.dibujarPiernas = function () {
        //inicio el path para dibujar
        this.canvas_ahorcado.canvasArea.beginPath();
        this.canvas_ahorcado.canvasArea.moveTo(120, 300);
        this.canvas_ahorcado.canvasArea.lineTo(150, 260);
        this.canvas_ahorcado.canvasArea.lineTo(180, 300);
        this.canvas_ahorcado.canvasArea.lineWidth = 5;
        this.canvas_ahorcado.canvasArea.stroke();
        this.canvas_ahorcado.canvasArea.closePath();
        //finalizo el path
    }

    Ahorcado.prototype.dibujarOjos = function () {
        //inicio el path para dibujar
        this.canvas_ahorcado.canvasArea.beginPath();
        //ojo izquierdo
        this.canvas_ahorcado.canvasArea.moveTo(125, 125);
        this.canvas_ahorcado.canvasArea.lineTo(145, 145);
        this.canvas_ahorcado.canvasArea.moveTo(145, 125);
        this.canvas_ahorcado.canvasArea.lineTo(125, 145);
        //ojo derecho
        this.canvas_ahorcado.canvasArea.moveTo(155, 125);
        this.canvas_ahorcado.canvasArea.lineTo(175, 145);
        this.canvas_ahorcado.canvasArea.moveTo(175, 125);
        this.canvas_ahorcado.canvasArea.lineTo(155, 145);
        this.canvas_ahorcado.canvasArea.lineWidth = 5;
        this.canvas_ahorcado.canvasArea.strokeStyle = "#4ca5aa";
        this.canvas_ahorcado.canvasArea.stroke();
        this.canvas_ahorcado.canvasArea.closePath();
        //finalizo el path
    }

    Ahorcado.prototype.escribirPista = function () {
        var pistaPalabra = document.getElementById('pista_palabra');
        pistaPalabra.innerHTML = this.palabraSelect[1];
    };

    Ahorcado.prototype.dibujarTodo = function () {
        this.dibujarPoste();
        this.escribirPista();
        this.pintarAreaSubrayada();
        if (this.intento > 0) {
            this.dibujarCabeza();
        }
        if (this.intento > 1) {
            this.dibujarTorso();
        }
        if (this.intento > 2) {
            this.dibujarBrazos();
        }
        if (this.intento > 3) {
            this.dibujarPiernas();
        }
        if (this.intento > 4) {
            this.dibujarOjos();
        }

    }

    Ahorcado.prototype.pintarAreaSubrayada = function () {
        var container_palabra = document.getElementById("container_palabra");
        if (this.vivo) {
            this.palabraMostrar = "";
            espacios = (this.palabraSelect[0].match(/-/g) || []).length;
            console.log('cantidad de espacios ', espacios);
            var length_container = this.palabraSelect[0].length;

            for (var i = 0; i < length_container; i++) {

                if (typeof this.underscoreOrLetter[i] != 'undefined') {
                    this.palabraMostrar += '<span class="letra-palabra">' + this.underscoreOrLetter[i] + '</span><span class="linea">_ </span> ';
                } else {
                    if (this.palabraSelect[0][i] == '-') {
                        this.palabraMostrar += '<span class="espacio">&nbps; </span> ';
                    } else {
                        this.palabraMostrar += '<span class="linea">_ </span> ';
                    }

                }
            }
        } else {
            this.palabraMostrar = this.palabraSelect[0];
        }
        container_palabra.innerHTML = ahorcado.palabraMostrar;

    }

    Ahorcado.prototype.pintarLetras = function () {

        var containerAbecedario = document.getElementById('container_abecedario');
        var letras = "";
        for (var i = 0; i < this.abecedario.length; i++) {
            letras += '<input type="button" id="letra_' + this.abecedario[i] + '"  class="letra" value="' + this.abecedario[i] + '" > ';
        }
        containerAbecedario.innerHTML = letras;
        //agrego a cada letra la funcionalidad de jugar
        var btn = document.getElementsByClassName("letra");
        for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function () {
                ahorcado.jugar(this, btn);
            });
        }

    }

    Ahorcado.prototype.iniciar = function () {

        this.palabrasMake();
        this.palabrasRandom();
        this.pintarLetras();
        espacios = (this.palabraSelect[0].match(/-/g) || []).length;
        this.underscoreOrLetter = new Array(this.palabraSelect[0].length - espacios); //arreglo que controla cuanto lleva de la palabra a descubrir
        this.dibujarTodo();

    };
    Ahorcado.prototype.jugar = function (datos, btn) {
        var opcion = datos.value;
        var flag = false;
        datos.setAttribute("disabled", "disabled");
        for (var a = 0; a < ahorcado.palabraSelect[0].length; a++) {
            if (ahorcado.palabraSelect[0][a] == opcion) {
                ahorcado.underscoreOrLetter[a] = opcion;
                flag = true;
            }
        }

        if (!flag) {
            ahorcado.trazar();
            if (!ahorcado.vivo) {
                $('#texto-modal').html('Incorrecto, <span class="intentalo">Inténtalo nuevamente</span>');
                $('#modal-ahorcado').addClass("intentar");
                $('#modal-ahorcado').modal("show");
                ahorcado.reiniciar();
            }
        } else {
            ahorcado.dibujarTodo();
            if (this.gano()) {
                $('#texto-modal').html('Felicitaciones, Su puntaje es 100%.');
                $('#modal-ahorcado').removeClass("intentar");
                $('#modal-ahorcado').modal("show");
                for (var b = 0; b < btn.length; b++) {
                    btn[b].setAttribute("disabled", "disabled");
                }
            }
        }
    };

    Ahorcado.prototype.gano = function () {

        var flag = true;
        for (var i = 0; i < this.underscoreOrLetter.length; i++) {
            if (typeof this.underscoreOrLetter[i] == 'undefined' && ahorcado.palabraSelect[0][i] != '-') {
                flag = false;
            }
        }

        return flag;
    }


    Ahorcado.prototype.reiniciar = function () {
        this.intento = 0;
        this.vivo = true;
        this.canvas_ahorcado.limpiarCanvas();
        this.iniciar();
        //console.clear();
    }

    var ahorcado = new Ahorcado();
    ahorcado.iniciar();


    document.getElementById('reset').addEventListener('click', function () {
        ahorcado.reiniciar();
    });

}