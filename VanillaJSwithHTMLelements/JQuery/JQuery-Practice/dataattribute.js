$(function () {
  /* for (var i = 0; i <= 9; i++) {
    $("#container").append(
      `<div id=s${i}class=square data-position=${i}></div>`);
    }
    if(i%2==0){
        $("#s" +i).data()
    } */
  // $("selector").data("key", "value");

  $("#divSite").data("student", {
    name: "John",
    agenda: "start learning today",
  });
  $("span").first().text($("divSite").data("student").name);
  $("span").last().text($("divSite").data("student").agenda);
});
