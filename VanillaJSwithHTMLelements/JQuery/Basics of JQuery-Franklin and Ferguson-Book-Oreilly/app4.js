$(function () {
  /* for (var i = 0; i < 10; i++) {
    $("#box").slideToggle(2000);
  } */
  //$("div p").slideToggle(1000).text("Hey");
  const prep = $("pre");
  prep.wrap("<p>Hello I am wrapped with jQuery</p>");
  var newDiv = $("<div/>", {
    class: "Hello",
    text: "Hey",
  });
  /* var divis = $("div");
  divis.wrap(newDiv); 
     var areaT = $("textarea");
    areaT.wrap(newDiv); */
  var sec = $("section");
  $("<strong>Howdy</strong>").append(sec);
});
