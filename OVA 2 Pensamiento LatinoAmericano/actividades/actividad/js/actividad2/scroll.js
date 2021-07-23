/*$(document).ready(iniciar);

function iniciar(){
  dragging = "";
  diff = "";
  newTop = "";
  scrollOffset = "";
  knob = document.querySelector('.custom-scrollbar__knob5');
  bar = document.querySelector('.custom-scrollbar__bar5');
  container = document.querySelector('.custom-scrollbar__inner5');
  scroll();


<div class="contenido custom-scrollbar5" id="contenido_actividad1">
    <div class="row mauto custom-scrollbar__inner5 pl-4">
        <div class="col-xs-4">
            <ul id="grupoA" class="list-group connectedSortable">
                <li class="list-group-item" id="item-0" data-item="2" draggable="false">
                    <div class="circulo_icon" style=""><img src="../img/img2/piezas-de-rompecabezas.png" class="img-65"></div>
                    <div class="ficha-texto text-amarillo-oscuro">Dilema</div>
                </li>
                <li class="list-group-item" id="item-1" data-item="0" draggable="false">
                    <div class="circulo_icon" style=""><img src="../img/img2/burbuja-de-dialogo.png" class="img-65"></div>
                    <div class="ficha-texto text-amarillo-oscuro">Dilema hipotético</div>
                </li>
                <li class="list-group-item" id="item-2" data-item="1" draggable="false">
                    <div class="circulo_icon" style=""><img src="../img/img2/problema-resuelto.png" class="img-65"></div>
                    <div class="ficha-texto text-amarillo-oscuro">Dilema real</div>
                </li>
                <li class="list-group-item" id="item-3" data-item="2" draggable="false">
                    <div class="circulo_icon" style=""><img src="../img/img2/piezas-de-rompecabezas.png" class="img-65"></div>
                    <div class="ficha-texto text-amarillo-oscuro">Dilema moral</div>
                </li>
                <li class="list-group-item" id="item-4" data-item="0" draggable="false">
                    <div class="circulo_icon" style=""><img src="../img/img2/burbuja-de-dialogo.png" class="img-65"></div>
                    <div class="ficha-texto text-amarillo-oscuro">Autonomía moral</div>
                </li>
                <li class="list-group-item" id="item-5" data-item="1" draggable="false">
                    <div class="circulo_icon" style=""><img src="../img/img2/problema-resuelto.png" class="img-65"></div>
                    <div class="ficha-texto text-amarillo-oscuro">Aspectos del dilema ético</div>
                </li>
                
            </ul>
        </div>
        <div class="col-xs-7 col-xs-offset-1">
            <ul id="grupoB" class="list-group connectedSortable">
                
                <li class="list-group-item" data-item="2" draggable="false">
                    <div class="ficha-texto">
                        <p>Se muestran como aspectos de la cotidianidad fundamentados en la realidad del sujeto y problemas concretos de su día a día</p>
                    </div>
                </li>
                <li class="list-group-item" data-item="0" draggable="false">
                    <div class="ficha-texto">
                        <p>En cada una de las alternativas disponibles los agentes involucrados tienen razones morales de peso tanto para seguirlas como para dejarlas de lado.</p>
                    </div>
                </li>
                <li class="list-group-item" data-item="1" draggable="false">
                    <div class="ficha-texto">
                        <p>Se muestran dilemas de forma abstracta y general y se dificulta posicionarlos con claridad en lo tangible o en lo real que vivencia la persona.</p>
                    </div>
                </li>
                <li class="list-group-item" data-item="5" draggable="false">
                    <div class="ficha-texto">
                        <p>Personaje central, Posibilidad real de escoger, pregunta central, conflicto moral o valorativo, análisis del dilema.</p>
                    </div>
                </li>
                <li class="list-group-item" data-item="3" draggable="false">
                    <div class="ficha-texto">
                        <p>Denominados también "conflicto de deberes"</p>
                    </div>
                </li>
                <li class="list-group-item" data-item="4" draggable="false">
                    <div class="ficha-texto">
                        <p>Justificar argumentativamente para sí mismo y ante sus semejantes, sus opiniones y actuaciones.</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
    <div class="custom-scrollbar__bar5">
      <div class="custom-scrollbar__knob5 cursor"><p class="text-center linea_scroll5">-</p></div>
    </div>
    <div class="col-xs-12 text-center">
        <button id="calificar" class="btn btn-primary btn-calificar">Calificar</button>
    </div>
</div>
  
}*/


function scroll(){
    // When the container is scrolled
    alert();
    container.addEventListener('scroll', () => {
      // If we are dragging the knob, do nothing
      if (dragging) return;

      // Otherwise, set the knob position based on the scroll position
      knob.style.top = container.scrollTop / (container.scrollHeight - container.offsetHeight) * 100 + '%';
    });

    dragging = false;

    knob.addEventListener('mousedown', event => {
        
    console.log(knob+" "+bar+" "+container);
      dragging = {
        x: event.clientX,
        y: event.clientY };

    });
    window.addEventListener('mousemove', event => {
      if (dragging) {
        // When dragging
        event.preventDefault();
        diff = {
          x: event.clientX - dragging.x,
          y: event.clientY - dragging.y };


        // Clamp the position of the knob to be a maximum of 
        // the knobs container, and a minimum of 0
        newTop = Math.max(0, Math.min(knob.offsetTop + diff.y, bar.offsetHeight));
        knob.style.top = newTop + 'px';

        // Base the scroll offset on the knobs position
        // in relation to the knobs container
        scrollOffset = newTop / bar.offsetHeight * (container.scrollHeight - container.offsetHeight);
        container.scrollTop = scrollOffset;

        dragging = {
          x: event.clientX,
          y: event.clientY };

      }
    });
    window.addEventListener('mouseup', () => {
      dragging = false;
    });
}