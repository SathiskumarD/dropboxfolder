"use strict";
$(function () {
  //   var attrVar = $("div").attr("title");

  //   $("#first").on("click", function () {
  //     $("#firstImage").attr("src", "airballon.jpg");
  //     $("h2").text(attrVar);
  //   });
  //Toggle will show ("hidden") elemt and/or hide("showed") elements
  //   $("#first").on("click", function () {
  //     $("#infotoggler").find("img").toggle();
  //   });
  $("#first").on("click", function () {
    $("#firstImage").toggleClass("newImg");
  });
  $("p").hide(5000, hideMe());
  function hideMe() {
    alert("This paragraph is hidden now!");
  }
});
