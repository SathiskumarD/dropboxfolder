// let friends = ['Mike', 'john', 'Lisa', 'Jane'];
// console.log(friends);
// friends.forEach(function (friend, index) {
//     console.log(friend, index);
//     console.log(friend);
// })
// friends.forEach((friend, index) => {
//     console.log(friend, index);
//     console.log(friend);
// })
let friends = ["Mike", "John", "Joe", "Natlie"];
console.log(friends);
friends.forEach(function (friend, index) {
  console.log(friend, index);
  //   console.log(friend);
});
friends.forEach(friend => {
  console.log(friend);
});

//Using arrow function
friends.forEach((friend, index) => {
  console.log(friend, index);
});

for (var i = 0; i < friends.length; i++) {
  console.log(friends.charAt(i));
}