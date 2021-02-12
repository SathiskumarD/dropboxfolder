"use strict";
$(function () {
  $("p")
    .find("i")
    .filter(function () {
      return (this.textContent || this.innerText || " ").indexOf(filter) == 0;
    })
    .css("background-color", "green");
});
//   $("p:contains(i)").css("background-color", "green");
//   $("p:contains(My)").css("color", "red");
