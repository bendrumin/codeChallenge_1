console.log('JS Sourced');

var i = 0;

$('document').ready(function(){
  $('#generate').on("click", function(){
//Step One
    $('#container').append("<div class='buttonContainer'></div>");
//Step Two
      $('.buttonContainer').empty().append('<p>This was clicked ' + (i+=1) + '</p>');

      $('.buttonContainer').append("<button type='button' id='colorSwap'>Swap</button>");
      $('.buttonContainer').append("<button type='button' id='remove'>Remove</button>");

      //Button Swap
       $('#colorSwap').on('click', function(){
         $('#colorSwap').parent('.buttonContainer').css('background-color', 'yellow');
    });
});
});
