// window.console.log(123);
//Alert
// window.alert("Hello");
//Prompt
/* const input = prompt();
alert(input); */
//confirm
/* if (confirm("Are you sure")) {
  console.log("YES");
} else {
  console.log("NO");
} */
//Height and Width of window

// let val;
//Outer Height & Width
val1 = window.outerHeight;
val2 = window.outerWidth;
//Inner Height & Width
val3 = window.innerHeight;
val4 = window.innerWidth;

//scroll points
val5 = window.scrollY;
val6 = window.scrollX;
//Location Object
val7 = window.location;
val8 = window.location.hostname;
val9 = window.location.href;
val10 = window.location.search; //You will not see anything in the console.But go to URL and type id=1 at the end.

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
