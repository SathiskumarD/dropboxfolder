// let friend1 = {
//     firstName: 'John'
//     , lastName: 'Smith'
//     , age: 40
// };
// console.log(Object.keys(friend1));
// console.log(Object.values(friend1));
// for (prop in friend1) {
//     console.log(prop);
//     console.log(friend1[prop]);
// }
// let friend2 = {
//     firstName: 'Jane'
//     , lastName: 'Doe'
//     , age: 25
// };
// for (prop in friend2) {
//     console.log(prop);
//     console.log(friend2[prop]);
// }
// let friends = {
//     list: [friend1, friend2, friend1, friend2, friend1, friend2]
// };
// console.log(friends.list);
// friends.list.forEach(function (friend) {
//     console.log(`${friend.firstName} ${friend.lastName} `);
// })

let friend1 = {
    firstName: 'SivashankaraPandian',
    lastName: 'Chellapandian',
    age: 40,

};
console.log(Object.keys(friend1));
console.log(Object.values(friend1));

for (prop in friend1) {
    console.log(prop);
    console.log(friend1[prop]);
};

let friend2 = {
    firstName: 'Murugavelh',
    lastName: 'Somesundaram',
    Age: 37,
};
for (prop in friend2) {
    console.log(prop);
    console.log(friend2[prop]);
};
let friend3 = {
    firstName: 'Kumaran',
    lastName: 'Sivagnanam',
    Age: 37,
};
let friends = {
    list: [friend1, friend2, friend3]
};
console.log(friends.list);
friends.list.forEach((friend) => {
    console.log(`${friend.firstName}  ${friend.lastName}`);
})