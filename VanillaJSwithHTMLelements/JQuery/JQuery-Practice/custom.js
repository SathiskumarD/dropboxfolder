$(function () {
  // $("div").on('click',function(){
  //   alert('DIV is clicked');
  // });

  // $("*").on("click",function(){
  //   alert('This is all element selector');
  // });
  // $('div').on('click',function(){
  //   alert('DIV is clicked');
  //   $(this).hide();
  // });
  /* $("div:eq(2)").fadeToggle("slow", function () {
    alert("This will fade Toggle");
  });

  $("#Hw").on("click", function (event) {
    event.preventDefault();
    alert("Hw is clicked");
  });
  $(".checksome").on("click", function () {
    $("p").hide();
  });
  $(".checksome").on("click", function () {
    $(this).hide();
  });
 */
  $(".head:even").on("click", function () {
    var imageURL = "sampleimage.jpg";
    $(".box").css("background-image", "url(" + imageURL + ")");
  });
  //number starts from 0
  $(".head:odd").on("click", function () {
    $(".box").toggle(function () {
      $(this).removeClass();
    });
  });

  $("tr:odd").css("background-color", "red");
  $("tr:even").css("background-color", "green");

  $("div>span").css("background-color", "brown");
  $("div").css("font-size", "20px");

  $(":button").click(function () {
    const el = $(this).prop("tagName");
    const elType = $(this).attr("type");

    alert(el + " " + elType + " is clicked");
  });
});
