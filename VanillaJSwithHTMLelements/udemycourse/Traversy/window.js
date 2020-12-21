//IIFE-Immediately Invokable Function Expressions

(function (lesson) {
  document.write(`<br> Learning ${lesson} in JS`);
})("Windows Object");

//Event Listener
/* const text = document.querySelector("button");
text.addEventListener("click", clickOnTitle); */
document.getElementById("header").addEventListener("mousemove", clickOnTitle);
function clickOnTitle() {
  document.getElementById("demo").innerHTML = "JavaScript Sandbox Section:2";
}

/* window.console.log(123);
//Alert
window.alert("Hello");
//Prompt
const input = prompt("What's your name?");
alert(input);
//confirm
if (confirm("Are you sure?")) {
  document.write("<br> YES");
} else {
  document.write("NO");
} */
//Height and Width of window

// let val;
//Outer Height & Width
val1 = window.outerHeight;
document.write("<br>" + val1);

val2 = window.outerWidth;
document.write(val2);
//Inner Height & Width
val3 = window.innerHeight;
document.write("<br>" + val3);
val4 = window.innerWidth;
document.write("<br>" + val4);

//scroll points
val5 = window.scrollY;
document.write("<br>" + val5);
val6 = window.scrollX;
document.write("<br>" + val6);

//Location Object
val7 = window.location;
document.write("<br>" + val7);
val8 = window.location.hostname;
document.write("<br>" + val8);
val9 = window.location.href;
document.write("<br>" + val9);
val10 = window.location.search;
//You will not see anything in the console.But go to URL and type id=1 at the end.
document.write("<br>" + val10);

//redirect
//window.location.href = "https://www.google.com";
//reload
//window.location.reload();
//History object
window.history.go(-2);
val12 = window.history.length;
//navigator object
val13 = window.navigator;
val14 = window.navigator.appName;
val15 = window.navigator.appVersion;
val16 = window.navigator.userAgent;
val17 = window.navigator.platform;
val18 = window.navigator.vendor;
val19 = window.navigator.language;
console.log(val19);
/* var student = function (sname) {
  this.name = sname;
};

student.prototype.getName = function () {
  return this.name;
};

var david = new student("david");

console.log(david.getName());
 */
