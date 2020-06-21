let numbers = [10, 20, 30, 40];
let [a, b, c, d] = numbers;
console.log("Values after the first assignment (no rest parameters):\n");
console.log("Value of a: " + a);
console.log("Value of b: " + b);
console.log("Value of c: " + c);
console.log("Value of d: " + d);

var introduction = ["Hello", "I", "am", "Sathish"];
var greeting = introduction[0];
var name = introduction[3];
console.log(greeting);
console.log(name);

[a, b, c] = numbers;
console.log("Value of a : " + a);
console.log("Value of a : " + b);
console.log("Value of a : " + c);
[a, ...b] = numbers //length of b is unknown but it should be an array
console.log("Value of a: " + a);
console.log("Value of b: " + b);
[, ...a] = numbers; //comma will ignore the very first value
console.log("Value of a : " + a);