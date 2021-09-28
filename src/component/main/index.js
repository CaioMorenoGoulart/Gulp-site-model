if(/webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
  $(".banner__wrapper").addClass("banner__wrapper-ios")
  $(".mission__right img").attr("src", "/src/img/Kclan-logo.webp")
}


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
//Email encaminhado com sucessovar
var url = new URL(window.location.href);
var c = url.searchParams.get("form");
if(c == "success") {
  $(".popupmsg").fadeIn("fast").addClass("content--show")
  $(".mask").fadeIn("fast").addClass("mask__show--form")
  $(".mask, .popupmsg__close").click(function(){
    url.searchParams.delete("form")
    window.history.pushState('object or string', 'Title', url)
  })
  if ( !$("popupmsg__content--show").length ){
    $(".popupmsg__sucesso").addClass("popupmsg__sucesso--show")
  }
} else {    
    console.log("não cadastrado")
}


$("#duvidas, #orc, .mission__contratar, .mission__duvidas").on("click", function (){
  var texto = $(this).text()
  $(".popupmsg__assunto").val(texto)
  $(".popupmsg__titulo").text(texto)
  $(".popupmsg__sucesso").removeClass("popupmsg__sucesso--show")
  $(".popupmsg__content").addClass("popupmsg__content--show")
  $(".popupmsg").fadeIn("fast").addClass("content--show")
  $(".mask").fadeIn("fast").addClass("mask__show--form")
})
$(".mask, .popupmsg__close").click(function(){
  $(".popupmsg").fadeOut("fast")
  $(".mask").fadeOut("fast").removeClass("mask__show--form")
})
//popup
$("#popupmsg").on("click", function (e) {
  e.preventDefault()
  if ("" != $(".popupmsg__name").val() && "" != $(".popupmsg__email").val() && "" != $(".popupmsg__site").val() ) {
    console.log("campos preenchidos")
    $(".popupmsg__spanName").removeClass("popupmsg__spanName--show")
    var email = $(".popupmsg__email").val()
    if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0){
      console.log("Email Valido")
      $("form").submit()
    }else {
      console.log("Email invalido", email.indexOf('@'), email.indexOf('.'))
      $(".popupmsg__spanEmail").addClass("popupmsg__spanEmail--show")
    }
  } else
      if ( !$(".spanObrigatorio").length ) {
        console.log("preencher campos obrigatórios")
        $(".popupmsg__spanName").addClass("popupmsg__spanName--show")
        $(".popupmsg__spanEmail").removeClass("popupmsg__spanEmail--show")
      }
})
