//create soem arrays

const numbers = [44, 33, 55, 66, 77, 2, 3, 4, 5, 6, 7];
//using Array Constructor
const numbers2 = new Array(2, 3, 4, 5, 6, 77, 88, 89, 90, 100);
const fruit = ["Apple", "Banana", "Orange", "pears"];
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];
//console.log(mixed);

let val;
//get Array length
val = numbers.length;
console.log(val);
//Check if it is Array
val2 = Array.isArray(numbers); //See the syntax
console.log(val2);
//to get a single value
val3 = numbers[3];
console.log(val3);
//insert into array
numbers[2] = 100;
console.log(numbers);
//Find index value
val4 = numbers.indexOf(3);
console.log(val4);
//Mutating array
//add onto end
val5 = numbers.push(250);
console.log(numbers);
//removing the element of an array from end
numbers.pop(250);
console.log(numbers);
//add onto front
numbers.unshift(100);
console.log(numbers);
//removing an elemenr from the front
numbers.shift(100);
console.log(numbers);