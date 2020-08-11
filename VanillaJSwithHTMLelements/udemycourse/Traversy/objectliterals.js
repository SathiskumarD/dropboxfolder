const person = {
    firstName: 'Steve',
    lastname: 'Jobs',

    email: 'stevejobs@apple.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getAge: function () {
        currentDate = new Date(2020);
        birthDate = new Date('September 14, 71 08:50:00');
        birthYear = birthDate.getFullYear();
        age = currentDate - birthYear;
        return age;
    },
}

let val;

val = person;
//get specific value
val1 = person.firstName;
val2 = person.getAge();
val3 = person.hobbies[0];
val4 = person.address.state;

//or
//val = person['firstName'];
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

const people = [{
        name: 'Joe',
        age: 25
    },
    {
        name: 'John',
        age: 35
    },
    {
        name: 'nancy',
        age: 40
    },
]
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}