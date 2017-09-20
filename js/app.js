function coloresTitulo(selector) {
  $(selector).delay(1000).animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', 'red');
    },
    queue: true
  }
  )
  .delay(1000)
  .animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', 'yellow')
      coloresTitulo('h1.main-titulo');
    },
    queue: true
  }
  );
}



$(document).ready(function(){

     coloresTitulo('.main-titulo');

});
   

