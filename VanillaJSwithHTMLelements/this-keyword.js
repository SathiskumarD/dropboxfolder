/* /* var car={
    make:'Toyota',
    model:'RAV4',
    year:2017,
    getprice:function(){
        //perform some calc//
        return 31000;
    },
    printdescription: function(){
        console.log(this.make+' ' +this.model)
    }

} */

//car.printdescription();//

//ALT+SHIFT+A will comment the full code//

function first(){
    return this;
    }

    console.log(first()===global);

//this is Node's global object//
///because that's where the
//first method was called//

function second(){
    'use strict';
return this;
}
console.log(second()===global);
console.log(second()===undefined);

let myObject = { value: 'My object'};
//value is set on the global object//
    global.value ='Global object';
function third(){
    return this.value;
}
console.log(third());
console.log(third.call(myObject));
console.log(third.apply(myObject));

function four(name){
    //return something how we call this method//
    return this.value+name;
}
console.log(four()); */

function fifth(){
    console.log(this.firstname+' ' +this.lastname)
}

let customer1={
    firstname: 'bob',
    lastname: 'tabor',
    print:fifth
}

let customer2={
    firstname: 'richard',
    lastname: 'boughton',
    print:fifth
}

customer2.print();
customer1.print();