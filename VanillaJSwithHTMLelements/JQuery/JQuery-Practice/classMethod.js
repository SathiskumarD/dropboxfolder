$(function () {
  $("#hasClass").on("click", function () {
    $(".epicClass").addClass("blue");
  });

  $("#toggleclass").on("click", function () {
    $(".epic-class").toggleClass("red");
  });
  $("#removeclass").on("click", function () {
    $("p").removeClass("epiCclass");
  });
});
