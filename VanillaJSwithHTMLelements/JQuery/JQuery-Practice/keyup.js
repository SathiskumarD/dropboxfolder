$(function () {
  $("#first").keyup(function () {
    var singleVal = $(this).val();
    $("#second").text(singleVal.toLowerCase().replace(/ /g, "_"));
  });
  $("button").on("click", function () {
    $("#removable").removeAttr("title");
  });
});
