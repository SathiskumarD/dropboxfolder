$(function () {
  $("body").data("greetings", "welcome to data Method in Jquery");
  $("#geolocation").data("geolonglat", {
    long: 42.36,
    lat: -71.05,
  });
  $("#btn1").click(function () {
    $("#long").text($("#geolocation").data("geolonglat").long);
    $("#lat").text($("#geolocation").data("geolonglat").lat);
    alert($("body").data("greetings"));
  });
});
/*
  $("#btn1").click(function(){
    $("div").data("greeting", "Hello World");
  });
  $("#btn2").click(function(){
    alert($("div").data("greeting"));
  });
  */
