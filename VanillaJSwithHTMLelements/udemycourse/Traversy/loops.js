(function () {
  console.log(" General Loops using IIFEs ");
})();

//FOR Loop
//found out by accident
/* for (let i = 0; i < 10; i++) {
  console.log("name is Zs"[i]);
  document.write("<br> Number " + i);
}
 */
for (let i = 0; i < 10; i++) {
  console.log(`Number` + i);
  if (i === 2) {
    console.log(`My favorite number is 2`);
  } else if (i === 3) {
    console.log(`3 is not my favorite`);
  } else {
    console.log("Iteration continues");
  }
  continue; //it goes to next iteration
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

var k = 100;
while (k > 0) {
  document.write(
    "<br>Number of coke bottles on the wall is ".fontcolor("#00ff00") + k
  );
  k -= 1;
  if (k % 2 === 0) {
    document.write(
      `<br>The ${k} coke bottles in the wall - even `.fontcolor("blue")
    );
  } else {
    document.write(
      `<br>The ${k} coke bottles in the wall - odd`.fontcolor("red")
    );
  }
  continue;
}

//DO WHILE LOOP
let j = 0;
do {
  console.log("Number " + j);
  j++;
} while (j < 10);

//LOOPING THROUGH ARRAYS
const cars = ["Ford", "Chevy", "Honda", "Toyota"];
for (let i = 0; i < cars.length; i++) {
  for (k = 0; k < cars[i].length; k++) {
    console.log(cars[i][k]);
    document.write("<br>" + cars[i][k]);
  }
}

//For Each Loop
cars.forEach(function (car) {
  console.log(car);
  document.write("<br>" + car);
});

cars.forEach(function (car, index) {
  console.log(`${index}:${car}`);
});
cars.forEach(function (car, index, array) {
  // console.log(`${index}:${car}`);
  console.log(array);
});
const numbers = [12, 23, 34, 45, 56];
const summation = [];
numbers.forEach(function (number) {
  summation.push(number + number + 2);
});
document.write("<br>" + summation);

const sentence = [
  "The quick brown fox jumps over the lazy dog",
  "jumping jack",
  "kneeling jack",
];
sentence.forEach(function (words, index) {
  document.write("<br>" + `${index}:${words}`);
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
  console.log(x); //it gives only keys
  console.log(`${x}:${user[x]}`); //key-value pair display in the loop
}
