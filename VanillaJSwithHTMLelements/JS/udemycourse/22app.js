// const message1 = function (mes = 'default', b = 100) {
//     console.log(b);
//     return 'Hello world function expression ' + mes + ' ' + b;
// }

// function message2(mes = 'default', b = 100) {
//     return 'Hello world function declaration ' + mes + ' ' + b;
// }
// console.log(message1());
// let str1 = message1('hello world', 500);
// let str2 = message2('hello world');

const message1 = function (mes = 'default', b = 100) {
    console.log("Hello world function expression" + '  ' + mes + b);
}

function message2(mes) {
    console.log("Hello world function declaration" + '  ' + mes);
}

message1('test1');
message2('test2');
message1(); //this will return "undefined" because arguements were not provided