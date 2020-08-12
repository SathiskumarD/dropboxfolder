(function () {
  console.log(" General Loops ");
})();

//FOR Loop
//found out by accident
for (let i = 0; i < 10; i++) {
  console.log("name is Zs"[i]);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log(`My favorite number is 2`);
    continue; //it goes to next iteration
  }
  console.log(`Number` + i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`My favorite number is 5`);
    break; //it breaks the loop
  }
  console.log(`Number` + i);
}
//WHILE loop

let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}

//DO WHILE LOOP
let j = 0;
do {
  console.log("Number " + j);
  j++;
} while (j < 10);

//LOOPING THROUGH ARRAYS
const cars = ["ford", "chevy", "honda", "Toyoya"];
for (let i = 0; i < cars.length; i++) {
  for (k = 0; k < cars[i].length; k++) {
    console.log(cars[i][k]);
  }
}

//For Each Loop
cars.forEach(function (car) {
  console.log(car);
});

cars.forEach(function (car, index) {
  console.log(`${index}:${car}`);
});
cars.forEach(function (car, index, array) {
  // console.log(`${index}:${car}`);
  console.log(array);
});
//MAP
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Joe" },
  {
    id: 3,
    name: "Sam",
  },
  { id: 4, name: "Steve" },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);
//FOR IN Loop
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};
for (let x in user) {
  console.log(x);
  console.log(`${x}:${user[x]}`); //key-value pair display in the loop
}
