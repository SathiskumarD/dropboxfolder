$(function () {
  var unorLi = $("<ul/>").appendTo("#sec");
  var areaT = $(`textarea[name=txt1]`);
  for (var i = 0; i < 10; i++) {
    var orLi = $("<li/>", {
      text: `This is the list item${i + 1}`,
    })
      .appendTo(unorLi)
      .appendTo(areaT);
  }
});
