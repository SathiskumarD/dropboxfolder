$(function () {
  $("form").on("submit", function () {
    alert("You just submitted the form");
  });

  $("input")
    .on("focus", function () {
      alert("You are focused on an input");
    })
    .on("blur", function () {
      alert("you lost focus");
    });
});
