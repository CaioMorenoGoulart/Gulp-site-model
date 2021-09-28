$("#hamburguer, .mask").click(function(){
  $(".mask").fadeToggle("fast").addClass("mask__show")
  if (!$(".mask__show--form").length){
    $("body").toggleClass("open-menu")
  }
})
if($(window).width() < 991) {
  $("#nossaMissao, #quemSomos, #servicostop, #contato").on('click', function() {
    $("body").removeClass("open-menu")
  })
}