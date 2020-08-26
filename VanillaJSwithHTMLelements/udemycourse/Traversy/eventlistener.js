/* //Event Listener
document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("Hello World!");
  //e.preventDefault();
}); */

//OR
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log("clicked");

  //let val;

  //Event target element
  // const val1 = e.target;
  const val2 = e.target.id;
  //console.log(val1);
  console.log(val2);
}
