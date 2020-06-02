// for(let x=10;x<5;x++){
//     console.log(x);
// }
// console.log('loop completed');
// let y = 10;
// while (y < 5){
//     console.log(y);
//     y++;
// }
// console.log('while loop completed');
// let z =10;
// do{
//     console.log(z);
//     z++;
// }
// while(z<5);
// console.log('dowhile loop completed');

// let friends = ['Mike','John','Lisa','Joe','Jane'];
// for(let i=0;i < friends.length;i++){
//     console.log(friends[i]);
// }

// let j = 0;
// while( j < friends.length){
//     console.log(friends[j]);
//     j++;
// }

// let friends = ["Mike", "John", "Jake"];
// let k = 0;
// while (k < friends.length) {
//   console.log("The value of friends is  " + friends[k]);
//   k++;
// }

let count = 0;
while (count < 200) {
  console.log(count);
  count += 2;
}

let friends = ["Mike", "John", "Joe", "Natalie"];
for (var i = 0; i < friends.length; i++) {
  console.log("The friend in the list is " + friends[i]);
}
//for(initialization;condition;post-expression)//
for (var counter = 0; counter < 100; counter += 3) {
  console.log("Inside the FOR loop  " + counter);
}
for (let x = 0; x < 100; x += 2) {
  console.log(x);
}
var myMarkSheet = { kumaran: 78, Murugavel: 79, Tarjan: 80, Kamalprasad: 76 };
for (var marks in myMarkSheet) {
  console.log("The marks for " + `${marks} is ${myMarkSheet[marks]}`);
}

//do while loop
let x = 0;
do {
  x++;
  console.log(x);
} while (x < 10);
