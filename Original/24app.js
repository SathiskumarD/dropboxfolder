// function greeting(name) {
// console.log('hello ' + name);
// }

// function test(callback) {
// let name = 'Laurence';
// callback(name);
// }
// test(greeting);

function whoAmI(name) {
    console.log("How are you  " + name);
}

function yourName(iDTy) {
    let xYz = 'Sathish';
    iDTy(xYz);
}
yourName(whoAmI);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];

function isOddNumber(number) {
    return number % 2;
}

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers);