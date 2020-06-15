let a,b,c,d,e;
let names=['david','eddie','alex','micheal','sammy'];


/* [b,c,a,d,e]=names;

console.log(a);
console.log(b);
console.log(c);
console.log(e);
 */
let others;
[a,b, ...others]=names;
console.log(a);
console.log(b);
console.log(others);


let year,model;
({year,model}={
    make:'Toyota',
    model:'RAV4',
    year:2017,
    value:31000

});

console.log(year);
console.log(model);