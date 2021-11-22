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
    $(".modal_scroll_c").on('click', modal_scroll_c);
    $(".modal_scroll_d").on('click', modal_scroll_d);
});

function modal_scroll_c(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_c');
    bar = document.querySelector('.custom-scrollbar__bar_c');
    container = document.querySelector('.custom-scrollbar__inner_c');
    scroll();
}
function modal_scroll_d(){
    dragging = "";
    diff = "";
    newTop = "";
    scrollOffset = "";
    knob = document.querySelector('.custom-scrollbar__knob_d');
    bar = document.querySelector('.custom-scrollbar__bar_d');
    container = document.querySelector('.custom-scrollbar__inner_d');
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