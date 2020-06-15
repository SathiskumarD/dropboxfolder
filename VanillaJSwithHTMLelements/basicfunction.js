let globalLet = "This is a global variable declared with let";
var globalVar = "This is a global variable declared with var";
let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;


// function firstFunction() {
//     // var x = 15;
//     // console.log("firstFunction: x = ", x);
//     let localLet = "This is a local variable declared with let";
//     var localVar = "This is a local variable declared with var";
//     undeclaredLocalVar = "This is an undeclared variable";
//     console.log("globalLet from inside firstFunction: ", globalLet);
//     console.log("globalVar from inside firstFunction: ", globalVar);
//     console.log("numLet from inside firstFunction: ", numLet);
//     console.log("numVar from inside firstFunction: ", numVar);
//     console.log("NUM_CONST from inside firstFunction: ", NUM_CONST);
//     console.log("localLet from inside firstFunction: ", localLet);
//     console.log("localVar from inside firstFunction: ", localVar);
// }
// firstFunction();

// function secondFunction() {
//     let numLet = 100;
//     var numVar = 200;
//     const NUM_CONST = 300;
//     console.log("numLet after invoking second function,", numLet);
//     console.log("numVar after invoking second function,", numVar);
//     console.log("NUM_CONST after invoking second function,", NUM_CONST);
// }
// secondFunction();

// function thirdFunction() {
//     numLet = 1000;
//     numVar = 2000;
//     // NUM_CONST = 3000;
//     console.log("Updated numLet from inside thirdFunction,", numLet);
//     console.log("Updated numVar from inside thirdFunction,", numVar);
//     console.log("NUM_CONST after invoking third function,", NUM_CONST);
// }
// thirdFunction();

function fourthFunction() {
    console.log("Starting first for loop ...");
    for (let i = 0; i < 20; i += 2) { // instead of let, var is used this will not create an error
        console.log(i);
    }
    //console.log("Value of i from fourthFunction is ", i); 
    console.log("Starting second for loop...");
    for (var j = 0; j < 10; j++) {
        console.log(j);
    }
    console.log("Value of j from fourthFunction is", j)
}

fourthFunction();