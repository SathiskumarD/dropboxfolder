// let okay = true;
// let notOkay = false;
// let message = 'Hello JavaScript';
// let word = 'HTML';
// let checker = message.includes(word);
// if (word === 'JavaScript') {
//     console.log('it was true');
// }
// else {
//     console.log('Not true');
// }
// if (checker) {
//     console.log(`${word} was found`);
// }
// else {
//     console.log(`${word} Not found`);
// }

let welcomeMessage = 'Hello JS Programmers';
let word = 'JS';
let checker = welcomeMessage.includes(word);
console.log(typeof checker);
if (checker) {
    console.log(`${word} was found`);
} else {
    console.log(`${word} was not found`);
}