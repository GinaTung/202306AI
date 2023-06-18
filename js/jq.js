$(document).ready(function () {
  $("#deco-jq").slideUp(1000);
});

$("#scrollToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    100
  );
});

$(function () {
  $(".qa-text").hide();
});
$(".qa-title").on("click", function (e) {
  $(this).siblings(".qa-text").slideToggle(1000);
  $(this).find("h6").toggleClass("active");
  $(this).find(".y").toggle();
});

