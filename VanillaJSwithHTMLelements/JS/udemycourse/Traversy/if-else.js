const id = 10;
//Equal to
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("Incorrect");
}
//Not Equal to
if (id != 100) {
  console.log("Correct");
} else {
  console.log("InCorrect");
}
//Equal to Value & Type
if (id === 100) {
  console.log("correct");
} else {
  console.log("Incorrect");
}
//Test if undefined//
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log(`No ID`);
}
//if-else statement
const color = "red";
if (color === "red") {
  console.log(`The color is ${color}`);
} else {
  console.log(`The color is not ${color}`);
}
//Logical operators
const name = "Steve";
const age = 70;
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(` ${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//OR
if (age < 16 || age > 65) {
  console.log(`${name} can not run in a race`);
} else {
  console.log(`${name} is registered for the race`);
}
//ternary Operator
console.log(id === 100 ? "correct" : "Incorrect");
//Without braces
if (id === 100) console.log("Without braces, correct");
else console.log("Without braces,incorrect");
