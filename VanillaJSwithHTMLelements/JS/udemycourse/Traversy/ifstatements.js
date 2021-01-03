/* if(something){
    do something
}else{
    do something else
} */

const id = "300";
//EQUAL TO
/* if (id == 100) {
  console.log("correct");
} else {
  console.log("wrong");
}

//NOT EQUAL TO

if (id != 101) {
  console.log("correct");
} else {
  console.log("incorrect");
}
//ALWAYS USE THIS === SIGN//
if (id === 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}
//NOT EQUAL TO
if (id !== 100) {
  console.log("correct");
} else {
  console.log("Incorrect");
}

if (id) {
  console.log(`id is ${id}`);
} else {
  console.log("NO ID");
}
 */
//Test if undefined//
/*
 */

//IF ELSE
const color = "yellow";
if (color === "red") {
  document.write("Color is red");
} else if (color === "blue") {
  document.write("Color is blue");
} else {
  document.write("Color is NOT red nor blue");
}

//Logical operators using function
/* function personAge(name, age) {
  var name = prompt("What is your name?");
  if (age > 0 && age < 50) {
    document.write(`<br> ${name} is an adult`);
  } else if (age >= 13 && age <= 19) {
    document.write(`<br>${name} is a teenager`);
  } else {
    document.write(`<br>${name} is an adult`);
  }
}
personAge(name, 39);
 */
function runForRace(personName, age) {
  var personName = prompt("What is your name?");
  var age = prompt("what is your age?");
  if (age < 16 || age > 65) {
    document.write(
      `<br> ${personName}cannot run nor register for a race because of his/her ${age} bar`
    );
  } else {
    document.write(
      `<br> ${personName} is eligible to register and/or run a race`
    );
  }
}
runForRace();

//Ternary Operator

//console.log(id === 100 ? "correct" : "incorrect");
id === 100
  ? document.write("<br>The value is correct")
  : document.write("<br>The value is NOT correct");

//without BRACES
if (id === 300) document.write("<br> correct");
else document.write("<br> incorrect");
