$(function () {
  $("#click").on("click", function (event) {
    alert(`Your mouse is at X : ${event.pageX} and at Y : ${event.pageY}`);
  });
});
