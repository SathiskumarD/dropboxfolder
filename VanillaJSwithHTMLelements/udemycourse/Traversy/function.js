function greet(name) {
  //console.log("Hello");
  return "Hello " + name;
}
console.log(greet("Sathish"));

function greet(firstName, lastName) {
  if (typeof firstName === "undefined") {
    firstName = "John";
  }
  if (typeof lastName === "undefined") {
    lastName = "Doe";
  }
  return "Hello " + firstName + "  " + lastName;
}
console.log(greet());
//To overwrite the default
console.log(greet("Steve", "Smith"));

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

//Function Expressions

const square = function (x) {
  return x * x;
};

console.log(square(4));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES
(function () {
  console.log("IIFE Ran...");
})();

(function (name) {
  console.log("Welcome " + name + " to IIFE - This is Wonderful");
})("Sathish");

//Properties & Methods

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
todo.add(65, 35);
todo.subtract(65, 35);
todo.edit(22);
