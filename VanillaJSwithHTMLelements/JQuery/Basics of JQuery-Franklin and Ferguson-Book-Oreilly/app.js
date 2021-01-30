$(function () {
  var accordion = $("#accordion");
  var headings = $("h2");
  var para = $("p");
  para.not(":first").hide();

  headings.on("click", function () {
    var tH = $(this);
    if (tH.next().is(":visible")) {
      return;
    }
    para.slideUp("normal");
    tH.next().slideDown("normal");
  });

  /* Event Delegation
  $("body").on("click", function () {
    alert("hello World");
  }); */
  /*   $("<p />", {
    text: "Paragraph6",
  }).appendTo("body"); */

  //Event stop propagation
  /* $("h5").on("click", function (event) {
    alert("You clicked the heading");
    event.stopPropagation();
  });
  $("div").on("click", function () {
    alert("You clicked the div element");
  }); */

  $("a").on("click", function (event) {
    $("div").css("background", "blue");
    event.preventDefault();
  });
});
