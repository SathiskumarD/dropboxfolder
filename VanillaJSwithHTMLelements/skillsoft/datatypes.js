/*let x=7;
console.log(typeof x);

let y=true;//can be true or false//
console.log(typeof y);

var z='hello world'//single quotes//
console.log(typeof z);*/

let a;
console.log(a);
console.log(typeof a);
const firstName = "Sathishkumar";
const nameArray = ['Sathishkumar', 'Dharmalingam']
const lastName = "Dharmalingam";
const age = 38;
val1 = firstName.slice(0, 4);
val2 = firstName.slice(-3);
val3 = firstName + ' ' + lastName; //concat
concatVal4 = firstName.concat(lastName); //concat
concatVal5 = firstName.concat(' ', lastName);
val5 = "Sathishkumar ";
val5 += "Dharmalingam"; //Append
val6 = 'Hello, my name is ' + concatVal4 + " and I am " + age + "years Old";
val7 = 'That\'s awesome,I can\'t wait';
val8 = firstName.length;
val9 = firstName.toUpperCase();
val10 = lastName.toLowerCase();
val11 = firstName[0];
//indexOf() method
val12 = firstName.indexOf('s');
val13 = lastName.lastIndexOf('a');
val14 = firstName.lastIndexOf('a');
//charAt()
val15 = firstName.charAt('10');
//Get last char
val16 = firstName.charAt(firstName.length - 1);
val17 = nameArray[nameArray.length - 1];
//substring
val18 = firstName.substring(0, 4);
//slice()
val19 = firstName.slice(0, 4);
val20 = firstName.slice(-3);
//split()



console.log(val1);
console.log(val2);
console.log(val3);
console.log(concatVal4); //No space b/w names
console.log(concatVal5);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8);
console.log(val9);
console.log(val10);
console.log(val11);
console.log(val12);
console.log(val13);
console.log(val14);
console.log(val15);
console.log(val16);
console.log(val17);
console.log(val18);
console.log(val19);
console.log(val20);