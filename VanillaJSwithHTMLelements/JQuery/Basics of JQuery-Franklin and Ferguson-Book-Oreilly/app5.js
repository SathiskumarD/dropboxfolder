$(function () {
  $("p").after("<span>Hey</span>");
  var sec = $("section");
  $("<strong>Howdy</strong>").appendTo(sec); //This is working
  $("<div><em>Help</em></div>").append(sec);
  var p = $("<p/>", {
    text: "Hey How are you?",
  });
  $("div").append(p);
  $("<div><span>Help</span></div>").appendTo(sec);
  $("#txt1").val("This the text area");
});
