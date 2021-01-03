/* //Event Listener
document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("Hello World!");
  //e.preventDefault();
}); */

//OR
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log("clicked");
  //Event target element
  /* const val1 = e.target;
  console.log(val1);

  const val2 = e.target.id;
  console.log(val2);
  const val3 = e.target.className;
  console.log(val3); 
  const val4 = e.target.classList;
  console.log(val4);*/
  //e.target.innerText = "Hello";
  //Event Type
  val6 = e.type;
  console.log(val6);
}
