
// Rende il menu visibile
// $('.hamburger-menu').addClass('active');

// al clik dell'hamburger aggiungo la classe con proprieta display:block
$(".header-right i").click(function(){
  $(".hamburger-menu").addClass("active");
});

// al clik della X tolgo la classe con proprieta display:block
$(".close i").click(function(){
    $(".hamburger-menu").removeClass("active");
});
