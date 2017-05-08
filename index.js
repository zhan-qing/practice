$(function () {
  $('#worklink').click(function(){
    var Height = $('#collections').offset().top;
    $('body').animate( {scrollTop: Height}, 500);
  })
  $('#weblink').click(function(){
    var Height = $('#web').offset().top;
    $('body').animate({scrollTop: Height}, 500);
  })
});

