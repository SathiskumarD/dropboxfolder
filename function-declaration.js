


function sayhello(name){
    console.log('------------');
    console.log('hello!'+ name+'!');
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

function calculatetax(amount){
    let result=amount*0.0825;
    return result;
}

let tax=calculatetax(100);
console.log(tax);