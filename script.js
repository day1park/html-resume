// ~ HEADER SLIDE ~
$(window).on("load", function() {
  $("header").slideDown(1000), $(".click-here").fadeIn(3000);
});

// ~ COLLAPSE ~
$(".click-here").click(function() {
  $(".collapse").toggle(1200), $(".click-here").toggle(800);
});
$(".collapse").click(function() {
  $(".click-here").toggle(1200), $(".collapse").toggle(800);
});
