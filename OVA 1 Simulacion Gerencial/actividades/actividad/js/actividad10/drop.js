/*
* Credits to http://www.htmldrive.net/items/show/13/HTML5-Demo-drag-and-drop
*
*/

var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();

(function () {

var pre = document.createElement('pre');
pre.id = "view-source"

// private scope to avoid conflicts with demos
addEvent(window, 'click', function (event) {
  if (event.target.hash == '#view-source') {
    // event.preventDefault();
    if (!document.getElementById('view-source')) {
      pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
      document.body.appendChild(pre);      
    }
    document.body.className = 'view-source';
    
    var sourceTimer = setInterval(function () {
      if (window.location.hash != '#view-source') {
        clearInterval(sourceTimer);
        document.body.className = '';
      }
    }, 200);
  }
});
  
})();

  var opciones;
  var eat = ['correcto', 'incorrecto'];
  var yum = document.createElement('p');
  var msie = /*@cc_on!@*/0;
  yum.style.opacity = 1;

  var links = document.querySelectorAll('li > a'), el = null;
  for (var i = 0; i < links.length; i++) {
    el = links[i];
  
    el.setAttribute('draggable', 'true');
  
    addEvent(el, 'dragstart', function (e) {
      e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
      e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
      opciones = this.id;
    });
  }

  var bin = document.querySelector('#bin');

  addEvent(bin, 'dragover', function (e) {
    if (e.preventDefault) e.preventDefault(); // allows us to drop
    this.className = 'over';
    e.dataTransfer.dropEffect = 'copy';
    return false;
  });

  // to get IE to work
  addEvent(bin, 'dragenter', function (e) {
    this.className = 'over';
    return false;
  });

  addEvent(bin, 'dragleave', function () {
    this.className = '';
  });

  addEvent(bin, 'drop', function (e) {
    if (e.stopPropagation) e.stopPropagation(); // stops the browser from redirecting...why???

    var el = document.getElementById(e.dataTransfer.getData('Text'));
    
    el.parentNode.removeChild(el);

    // stupid nom text + fade effect
    bin.className = '';
    if (opciones == 'one' || opciones == 'two' || opciones == 'four') {
      yum.innerHTML = eat[0];
    }else{
      yum.innerHTML = eat[1];
    }
    var y = yum.cloneNode(true);
    bin.appendChild(y);

    setTimeout(function () {
      var t = setInterval(function () {
        if (y.style.opacity <= 0) {
          if (msie) { // don't bother with the animation
            y.style.display = 'none';
          }
          clearInterval(t); 
        } else {
          y.style.opacity -= 0.1;
        }
      }, 50);
    }, 250);

    return false;
  });


$('#add').on('click', function() {    
  //numero de elementos p
  var num_p = $('#bin').find('p').length;

  //recorrer el contenedor y obtener los valores
  var res = [];
  var i = 0;
  var puntaje = 100;
  $("#bin p").each(function(){
    res[i] = $(this).text();
    i++;
  });

  if (num_p > 3 || num_p < 1) {
      $('.img_res').html('<img src="../img/img10/mal.png" style="max-width: 90%;">');
      $('.mensaje').text("¡Puedes hacerlo mejor!");
      $('.puntaje').text("0%");
      $('.btns_modal').html('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
      die();
  }
  for (var i = 0; i < res.length; i++) {
    if (res[i] == 'incorrecto'){
      puntaje = puntaje - 50;
    }
  }
  if (puntaje == 100 && num_p == 3) {
    $('.img_res').html('<img src="../img/img10/bien.png" style="max-width: 90%;">');
    $('.puntaje').text(puntaje+"%");
    $('.mensaje').text("¡Felicitaciones!");
    $('.btns_modal').append('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button>');
  }else if (puntaje == 50){
    $('.img_res').html('<img src="../img/img10/mal.png" style="max-width: 90%;">');
    $('.mensaje').text("¡Puedes hacerlo mejor!");
    $('.puntaje').text(puntaje+"%");
    $('.btns_modal').append('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
  }else{
    $('.img_res').html('<img src="../img/img10/mal.png" style="max-width: 90%;">');
    $('.mensaje').text("¡Puedes hacerlo mejor!");
    $('.puntaje').text("50%");
    $('.btns_modal').append('<button type="button" class="btn" data-dismiss="modal" style="margin-right: 5px;">cerrar</button><button id="add" class="btn" onclick="reiniciar();">reiniciar</button>');
  }
  
});

function reiniciar(){
  location.reload();
}

// For discussion and comments, see: https://remysharp.com/2009/01/07/html5-enabling-script/
/*@cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@*/