$(function () {
  $("#epicbutton").on("click", function () {
    var val = $("#simpleID").val();
    $("body").text(val);
  });

  $("#double").on("dblclick", function () {
    $("p").add().css({
      "background-color": "green",
      color: "red",
      display: "inline",
      padding: "auto",
    });
    /* $("p").hide();
    alert("Hello"); */
    $("div").html("<span><b>you are bold one.</b></span>").css({
      color: "blue",
      display: "inline-block",
    });
  });
});
