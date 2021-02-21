$(function () {
  $("#heading").on("click", function () {
    var head = $("header");
    $("<h2>JQuery Project</h2>").appendTo(head).css("color", "blue");
    $("#para").css({ "font-size": "20px", "font-style": "italic" });
    $(this).hide();
  });
  $("#theme").on("click", function () {
    var bodyEl = $("body");
    bodyEl.toggleClass("dark-theme");
    if (bodyEl.hasClass("dark-theme")) {
      $("#shape").text("Dark");
    } else {
      $("#shape").text("Light");
    }
  });
  $("#first,#last").keyup(function () {
    var firstVal = $("#first").val();
    var lastVal = $("#last").val();
    $("#full").text(
      (firstVal + " " + lastVal).toLowerCase().replace(/ /g, "_")
    );
  });
});
