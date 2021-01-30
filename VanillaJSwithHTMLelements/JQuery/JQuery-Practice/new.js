// (function mywelcome(){
//   alert('hello this is IIFE');
// })();

$(function(){
  $('button').on('click',function(){
  $('h3').text('This is heading 2 obtained by onClick event');
  });
});
