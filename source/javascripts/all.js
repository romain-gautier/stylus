//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){

  $(window).on("scroll", function(){
    if ( $(this).scrollTop() > 80 ){
      $(".navbar").css("background-color", "black");
    } else {
      $(".navbar").css("background-color", "transparent");
    }
  });


});
