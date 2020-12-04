const person = {
  firstName: "Steve",
  lastname: "Jobs",
  yearOfBirth: 1956,
  email: "stevejobs@apple.com",
  //hobbies=['music','sports'],
  address: {
    city: "Miami",
    state: "FL",
  },
  getAge: function () {
    currentDate = new Date();
    getCurrentYear = currentDate.getFullYear();
    ageOfPerson = getCurrentYear - this.yearOfBirth;
    return ageOfPerson;
  },
};
let val2;
val2 = person;
val2 = person.age;
val2 = person.getAge();
//val2 = person.address.city; /* console.log(numbers);
//console.log(numbers1);
/* let daTeofYear = new Date();
console.log(daTeofYear);
 */ console.log(val2);
/* console.log(val1); */
/* let val3;
yearOfBirth = new Date();
birthYear = yearOfBirth.getFullYear();
val3 = birthYear;
console.log(val3); */

const people = [
  { name: "Mike", age: 30 },
  { name: "John", age: 35 },
  { name: "Nancy", age: 40 },
];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
