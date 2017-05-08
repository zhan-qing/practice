$(function () {
  $('#worklink').click(function(){
    var Height = $('#collections').offset().top;
    $('body').animate( {scrollTop: Height}, 500);
  });
  $('#weblink').click(function(){
    var Height = $('#web').offset().top;
    $('body').animate({scrollTop: Height}, 500);
  });
  $('#applink').click(function(){
    var Height = $('#app').offset().top;
    $('body').animate({scrollTop: Height}, 500);
  });
  $('#backlink').click(function(){
    $('body').animate({scrollTop: 0}, 500);
  });

  $(window).on('scroll', function() {
    if ($('body').scrollTop() == 0){
      $('#backlink').fadeOut('fast');
    }
    else {
      $('#backlink').fadeIn('fast');
    }
  });
});

  