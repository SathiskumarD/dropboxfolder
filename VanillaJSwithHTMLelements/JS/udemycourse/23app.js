// const addme = function(a=0,b=0){
//     console.log(a,b);
//     return a + b +10;
// }
// console.log(addme());
// console.log(addme(5));
// console.log(addme(5,7));

// const adder = (a=0,b=0) => {
//     console.log(a,b);
//     return a + b +10; 
// }
// console.log(adder());
// console.log(adder(5));
// console.log(adder(5,7));
// const adder2 = (a=0,b=0) => a + b +10; 

// console.log(adder2());
// console.log(adder2(5));
// console.log(adder2(5,7));

const addme = function (a = 0, b = 0) {
    console.log(a, b);
    return a + b + 10;
}

console.log(addme());
console.log(addme(5));
//Arrow function

const adder = (a = 0, b = 0) => {
    console.log(a, b);
    return a + b + 20;
}
console.log(adder());
console.log(adder(5));