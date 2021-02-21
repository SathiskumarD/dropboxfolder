$(function () {
  for (var i = 0; i <= 9; i++) {
    $("#container").append(
      `<div id=s${i} class=square data-position=${i}></div>`
    );

    if (i % 2 == 0) {
      $("#s" + i).data("odd[OR]even", "even");
    } else {
      $("#s" + i).data("odd[OR]even", "odd");
    }
  }
  $(".square").click(function () {
    alert(`odd[OR]even: ${$(this).data("odd[OR]even")}
    position: ${$(this).data("position")}`);
  });
});

// $("selector").data("key", "value");
/*$(function () {
 $("#divSite").data("student", {
    name: "John",
    agenda: "learning",
  });
$("span").first().text($("#divSite").data("student").name);
  $("span").last().text($("#divSite").data("student").agenda); 
});*/
