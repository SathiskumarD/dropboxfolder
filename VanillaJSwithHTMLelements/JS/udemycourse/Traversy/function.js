/* function greet(name) {
  //console.log("Hello");
  //return "Hello " + name;
  document.write(`Hello  ${name}`);
}
//console.log(greet("Sathish"));
greet("Sathish"); */

function greet(firstName, lastName) {
  if (typeof firstName === "undefined") {
    firstName = "John";
  }
  if (typeof lastName === "undefined") {
    lastName = "Doe";
  }
  //return "Hello " + firstName + "  " + lastName;
  document.write(`Hello ${firstName} ${lastName}`);
}
//console.log(greet());
//To overwrite the default
greet("Steve", "Smith");
/*
//In ES6

function greet(firstName = "John", lastName = "Doe") {
  //   if (typeof firstName === "undefined") {
  //     firstName = "John";
  //   }
  //   if (typeof lastName === "undefined") {
  //     lastName = "Doe";
  //   }
  return "Hello " + firstName + "  " + lastName;
}
console.log(greet());
*/
//Function Expressions

const square = function (x) {
  return x * x;
};

//console.log(square(4));
document.write("<br> The value of 16 square is " + square(16));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES
(function () {
  console.log("IIFE Ran...");
})();

(function (name) {
  console.log("Welcome " + name + " to IIFE - This is Wonderful");
})("Sathish");

//Property Methods(when function is inside the object)//

let todo = {
  add: function (a, b) {
    console.log(a + b);
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
  subtract: function (a, b) {
    console.log(a - b);
  },
};
todo.delete = function () {
  document.write(`<br>Delete todo..`);
};
todo.add(65, 35);
todo.subtract(65, 35);
todo.edit(22);
todo.delete();
