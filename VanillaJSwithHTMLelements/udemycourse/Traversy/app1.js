//Log to console-ctrl+///
console.log("Hello World!");
/* Multi-line comments-alt+shift+A */
/* console.log(123);
console.log(1, 2, 3, 4);
var greeting = "Hello";
console.log(greeting);
console.log({ a: 1, b: 2 });
console.log(true);
console.table({ c: 4, d: 6 });
console.error("This is an error"); //Clear the console
console.clear();
console.warn("This is a warning");
console.time("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.timeEnd("hello"); */
//var,let const

/* var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name); */
//Init var
/* var greeting;
console.log(greeting);

greeting = "Hello";
console.log(greeting); */

//letter,number, _,$//
//cannot start with number//
/* var $name = "John"; //Use '$' only in jquery
var firstname = "Joe"; //camelcase
var first_name = "Sara"; //underscore
var FirstName = "Tom"; //Pascal case
var firstname; */

//LET works like var
/* let name;
name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name); */

//CONST
/* const name = "John Doe";
console.log(name); */
/* name = "Steve Smith";
console.log(name); */
/* const person = {
  name: "John",
  age: 30,
};
console.log(person); */
//primitive
//string
/* const name = "Johnny Doe";
console.log(typeof name);
//number
const age = "39";
console.log(typeof age);
//Boolean//
const hasKids = true;
console.log(typeof hasKids);
//Null
const car = null;
console.log(typeof car);

//undefined
let test;
console.log(typeof test);
//symbol
const sym = Symbol();
console.log(typeof sym);
console.log(sym);
//Arrays
const hobbies = ["movies", "music"];
console.log(typeof hobbies);
const address = {
  city: "Boston",
  state: "MA",
};
console.log(typeof address);
const today = new Date();
console.log(today);
console.log(typeof today);
 */
/* let val;
//Number to String
val = String(555);
val = String(4 + 4);
//Boolean to String
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();
val = true.toString();

//String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); //Not a Number (NaN)
val = Number([1, 2, 3]); //NaN

//parse-int
val = parseInt("100.30");
val = parseFloat("100.50");
//output
console.log(val);
console.log(typeof val);
 */
/* const num1 = 100;
const num2 = 50;
let val;
val = num1 + num2;
val = num2 * num1;
val = num1 / num2;
val = num1 % num2; */
//Math Object
/* val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.round(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.pow(24, 2);
val = Math.min(2, 33, 4, 1, 55, 6, -10);
val = Math.max(2, 33, 4, 1, 55, 6, -10);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1); //1-20 random number including 20; */

/* const firstname = "Sathishkumar";
const lastName = "Dharmalingam";
const str = "hello there my name is sathish";
//let val;
val = firstname + lastName;
//concatenation
val = firstname + " " + lastName;
//Appending
val = "Sathish ";
val += "Dharmalingam";
val = "Hello my name is " + firstname + " and I am " + age; */

//Escaping

/* val = "Sathishkumar";
val += "Dharmalingam";
val = "That's awesome,I can't wait";

//Length
val = firstname.length;

//concat
val = firstname.concat(" ", lastName);

//change case
val = firstname.toUpperCase();
val = lastName.toLowerCase();
val = lastName[5];
//indexOf()
val = firstname.indexOf("l");
val = lastName.lastIndexOf("o");
//charAt()
val = firstname.charAt("2");
//get Last char
val = firstname.charAt(firstname.length - 1);

//substring
val = firstname.substring(0, 4);
//slice
val = firstname.slice(0, 4);
val = firstname.slice(-3);
//split
val = str.split("");
//replace
val = str.replace("sathish", "Sathiskumar");
//includes
val = str.includes("sathish");
//template literals
const name1 = "John";
const age1 = 49;
const job = "Web developer";
const city = "Huntsville";
let html; */

//without template strings ()-ES5 way
/* html =
  "<ul><li> Name: " +
  name1 +
  "</li><li> Age : " +
  age1 +
  "</li><li> Job: " +
  job +
  "</li><li> City : " +
  city +
  "</li></li> </ul>";
document.body.innerHTML = html;
html =
  "<ul>" +
  "<li>Name: " +
  name1 +
  "</li><li>Age: " +
  age1 +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";
 */
//with template Strings
/* function hello() {
  return "hello";
}

html = `<ul><li>Name: ${name1}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>Eligible to watch porn: ${age1 > 30 ? "Yes" : "No"}</li>
  </ul>`;
document.body.innerHTML = html; */

//create some arrays
const numbers = [43, 56, 23, 33, 44, 36, 5];
const numbers1 = new Array(22, 45, 33, 76, 54);

const fruit = ["apple", "banana", "orange", "pear"];
const mixed = [
  22,
  "Hello",
  true,
  undefined,
  null,
  { a1: 1, b1: 2 },
  new Date(),
];
//let val1;

//Array length
val1 = numbers.length;
//check if it is Array
val1 = Array.isArray(numbers);
//Get a single value
val1 = numbers[3];
numbers[2] = 100;

/* //Find index of value
val = numbers.indexOf(100);
//Mutating Arrays
//add on to end
//numbers.push(250);
//Add on to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Take off from front
numbers.shift();
//splice values
numbers.splice(1, 2);

//concatenate array
val1 = numbers.concat(numbers1);
 */
//sorting array
val = fruit.sort();
val1 = numbers.sort();
//using compare
val1 = numbers.sort(function (x, y) {
  return x - y;
});
//find
function under50(num) {
  num < 50;
}
val = numbers1.find(under50);

const person = {
  firstName: "Steve",
  lastname: "Jobs",
  yearOfBirth: 1952,
  email: "stevejobs@apple.com",
  //hobbies=['music','sports'],
  address: {
    city: "Miami",
    state: "FL",
  },
  getAge: function () {
    currentDate = new Date();
    getYear = currentDate.getFullYear();
    age = getYear - this.yearOfBirth;
    return age;
  },
};
let val2;
val2 = person;
val2 = person.getAge(); /* console.log(numbers);
console.log(numbers1); */
/* let daTeofYear = new Date();
console.log(daTeofYear);
 */ console.log(val2);
/* console.log(val1); */

//console.log(val.length); //length only works on string
/* console.log(val.toFixed()); //works only for number
console.log(val.toFixed(2)); */

/* const val1 = String(5);
const val2 = 6;
const sum = val1 + val2; */
/* console.log(sum);
console.log(typeof sum); */
let val3;
const today = new Date();
let birthDay = new Date("9-14-1981 10:20:00");
//birthDay = new Date("September 14 1981");
val3 = birthDay.getMonth(); //0 based i.e. if it is january, it is zero and february is 1
val3 = birthDay.getDate();
val3 = birthDay.getDay();
val3 = birthDay.getFullYear();
val3 = birthDay.getHours();
val3 = birthDay.getMinutes();
val3 = birthDay.getUTCDate();
val3 = today.getMilliseconds();
val3 = today.getTime();
val3 = birthDay.setMonth(2);
val3 = birthDay.setFullYear(1989);
val3 = birthDay.setHours(11);
val3 = birthDay.setSeconds(25);
console.log(birthDay);

//val3 = birthDay.toString();
console.log(val3);
//console.log(typeof val3);
