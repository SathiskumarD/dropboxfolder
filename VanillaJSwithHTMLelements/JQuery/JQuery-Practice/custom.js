$(function(){
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
$('div:eq(2)').fadeToggle('slow', function() {
  alert("This will fade Toggle")
});


$("#Hw").on('click',function(event){
  event.preventDefault();
  alert('Hw is clicked');
});
$(".checksome").on('click',function(){
  $("p").hide();
});
$("div,.checksome").on('click',function(){
  $(this).hide();
});


});
