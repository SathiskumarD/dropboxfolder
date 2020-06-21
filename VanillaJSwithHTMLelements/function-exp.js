/*settimeout(function,milliseconds)*/


//setTimeout(function(){console.log('I waited 2 seconds')},2000);//

/*let counter=0;
function timeout(){
    setTimeout(function(){
        console.log('hi' + counter++);
        timeout();
    },2000)
}*/

//timeout();//

(function () {
    console.log('Immediately invoked function expression(IIFE)');
})();

//ctrl+c//*/
function sayhello(name) {
    console.log('------------');
    console.log('hello!' + name + '!');
    console.log('------------');
}

/*sayhello();
var a=sayhello;
a();
a();
a();
*/

sayhello('bob');
sayhello('beth');
sayhello('Mr Tibbles');

function calculatetax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculatetax(100);
console.log(tax);
//DON"T DO THIS//
/*
var myVariable='I am not at the global scope';
var myFunction= function(){
    console.log('me too!');
}
}
*/

function one() {
    return 'one';
}

//let value = one();//
//console.log(value);//

//console.log(one());//
let value = one;
//console.log(typeof value);//
console.log(value());

//string//
//number//
//boolean//
//undefined//
//function//


function two() {
    return function () {
        console.log('two');
    }
}

let myFunction = two();
myFunction();


function three() {
    return function () {
        return 'three';
    }
}
console.log(three()());

function mphToKmph(mph) {
    console.log("MPH value entered:", mph);
    return 1.61 * mph;
}
let speedLimit = mphToKmph(65);
console.log("Speed limit in Km/h: ", speedLimit);
let mphToKmphArrow = mph => {
    console.log("Enter the MPH value", mph)
    return 1.61 * mph;
}
let mphToKmphImplicit = mph => 1.61 * mph;
speedLimit = mphToKmphImplicit(65);
console.log("Speed Limit in km/h (Implicit return): ", speedLimit);

let areaOfTriangle = (b, h) => 0.5 * b * h;
console.log("Area of a triangle with base of 5 and height of 4 : ", areaOfTriangle(5, 4));

var x = function (f) {
    return 5 * (f - 32) / 9
};
console.log("50F in celsius is: ", x(50));