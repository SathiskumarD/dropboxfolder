//create soem arrays

const numbers = [44, 33, 55, 66, 77, 2, 3, 4, 5, 6, 7];
//using Array Constructor
const numbers2 = new Array(2, 3, 4, 5, 6, 77, 88, 89, 90, 100);
const fruit = ["Apple", "Banana", "Orange", "pears", "pineapple", "nectarines", "HoneyDewMelon"];
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
//Splicing up values
numbers.splice(1, 1);
console.log(numbers); //33 has been removed
numbers.splice(1, 3);
console.log(numbers);
//Reverse the Array
numbers.reverse();
console.log(numbers);
//concat arrays
val6 = numbers.concat(numbers2);
console.log(val6);
val7 = val6.concat(mixed);
console.log(val7);

//sort the array
val8 = fruit.sort();
console.log(val8);
val9 = numbers.sort();
console.log(val9); // This considers only the first digit

val10 = numbers.sort(function (x, y) {
    return x - y;
});
console.log(val10);

//Reverse Sort

val11 = numbers.sort(function (x, y) {
    return y - x;
});
console.log(val11);

//Find

function under50(num) {
    return num < 50;
};

val13 = numbers.find(under50);
console.log(val13);