$( document ).ready(function() {
    setMigaja("Inicio","","");
    $( ".c-sidebar-nav > li").show();
    $( ".c-sidebar-nav > .ov-inicio").show();
    var knob = "";
    var bar = "";
    var container = "";
    var dragging = "";
    var diff = "";
    var newTop = "";
    var scrollOffset = "";
    $(".modal_scroll6").on('click', modal_scroll6);
    $(".modal_scroll7").on('click', modal_scroll7);
    $(".modal_scroll8").on('click', modal_scroll8);
    
});

function modal_scroll6(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob6');
    bar = document.querySelector('.custom-scrollbar__bar6');
    container = document.querySelector('.custom-scrollbar__inner6');
    scroll();
}
function modal_scroll7(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob7');
    bar = document.querySelector('.custom-scrollbar__bar7');
    container = document.querySelector('.custom-scrollbar__inner7');
    scroll();
}
function modal_scroll8(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob8');
    bar = document.querySelector('.custom-scrollbar__bar8');
    container = document.querySelector('.custom-scrollbar__inner8');
    scroll();
}

function scroll(){
    // When the container is scrolled
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