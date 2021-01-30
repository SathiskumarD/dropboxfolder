/* $(function () {
  //$("body").css("font-size", "50px");
  //$("body").textContent = "Welcome";
  var box = $("#box");
  var para = $("#p");
  var count = 0;
  /* box.fadeOut("slow", function () {
    alert("box finished fading out");
  }) */

/* $(function () {
  var box = $("#box");
  var para = $("#p");
  var count = 0;
  toggleBox(box, para, 1, 10);
});
function toggleBox(box_selector, para_selector, count, max_count) {
  $(box_selector).fadeOut(500, function () {
    $(box_selector).fadeIn(500, function () {
      $(para_selector).text(count);
      if (count < max_count) {
        toggleBox(box_selector, para_selector, count + 1, max_count);
      }
    });
  });
}
 */
$(function () {
  var box = $("#box");
  var para = $("p");
  var i = 0;
  para.text(i);
  function toggleBox(i) {
    box.fadeToggle(500, function () {
      i = i + 1;
      if (i < 10) {
        para.text(i);
        toggleBox(i);
      }
    });
  }
  toggleBox(i);
});
