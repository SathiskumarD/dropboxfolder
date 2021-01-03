//Global scope
var a = 1;
let b = 2;
const c = 3;

/* function test() {
  var a = 41;
  let b = 52;
  const c = 63;
  console.log("Function scope:", a, b, c);
}
test(); */
//Block level scope

/* if (true) {
  var a = 37;
  let b = 54;
  const c = 60;
  console.log("If scope:", a, b, c);
} */
console.log("Global scope:", a, b, c); //var is a security risks

for (var a = 0; a < 10; a++) {
  console.log(`loop:${a}`);
}
console.log("Global scope:", a, b, c);
//always USE let or CONST
