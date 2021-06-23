$("#hamburguer, .mask").click(function(){
  $("body").toggleClass("open-menu")
})
if($(window).width() < 991) {
  $("#nossaMissao, #quemSomos, #servicostop, #contato").on('click', function() {
    $("body").removeClass("open-menu")
  })
}