
  $("#nossaMissao, #quemSomos").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1000);
  });
  $("#servicostop").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1000);
  });
  $("#contato").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1000);
  });
  $("#topPage").on('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

var scrolll
var tamanho

if($(window).width() > 991) {
  $(window).scroll(function() {
      scrolll = $('html').scrollTop();
      tamanho = $(window).height();
      if (scrolll >= tamanho)
        $(".side-bar").addClass("scrolled")
      else
        $(".side-bar").removeClass("scrolled")
  });
}