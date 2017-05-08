$(function () {
  $('#worklink').click(function(){
    var HeightCol = $('#collections').offset().top;
    $('body').animate( {scrollTop: HeightCol}, 500);
  })

});

