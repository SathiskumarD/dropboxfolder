function sayhello(name){
    return function() {
        console.log('howdy'+' '+ name);
    }
}

let bob=sayhello('bob');
let conrad=sayhello('conrad');
let grant=sayhello('grant');
bob();
conrad();
grant();
