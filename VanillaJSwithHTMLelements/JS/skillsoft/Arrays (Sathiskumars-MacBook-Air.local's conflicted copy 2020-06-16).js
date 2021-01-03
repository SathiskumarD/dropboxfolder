let a=[4,8,15,16,23,42];
let b=['david','eddie','micheal','abstract'];
/* console.log(a);
//getting the elements of array//
//first element//
console.log(a[0]);
console.log(b[0]);
//second element//
console.log(a[1]);
console.log(b[1]);

console.log(typeof a);

var c=[44,'Alex',true];
console.log(typeof c);
console.log(c.length);
console.log(a.length);*/
//giving new index to variable a//
a[10]=77;
console.log(a);
console.log(a.length);
//Adding last elemt can be done using Push method//
a.push(77);
console.log(a);
console.log(a.length);
//removing the last element using pop//
a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);

let studentGrades=["A","B",3,"D",5];
console.log("Length: " +studentGrades.length);
console.log("Element at index3:" +studentGrades[3]);
// New ES6 format for for loop//
console.log("Iterating over Elements with the Old Syntax: \n");
for(i=0;i<studentGrades.length;i++){
    console.log(studentGrades[i]);
}
console.log("Iterating over Eletns with the ES6 Syntax: \n");v
for (i of studentGrades){
    console.log(i);
}
let vowels=new Array["A","E","I","O","U"];
for(i of vowels){
    console.log(i);
    
}


