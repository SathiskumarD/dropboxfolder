$(function () {
  $("#target").keyup(function (event) {
    $("#other").html(`${event.type} : ${event.which} Actual ASCII Value`);
  });

  $("#repeatName").keyup(function (event) {
    var singleVal = $(this).val();
    $("#another").html(
      `The name is ${singleVal} and this is due to the ${event.type} event`
    );
  });
});
