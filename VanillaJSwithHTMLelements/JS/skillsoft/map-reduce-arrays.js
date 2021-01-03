let items = [{
        name: "meat",
        price: 25
    },
    {
        name: "vegetables",
        price: 17
    },
    {
        name: "cake",
        price: 20
    },
    {
        name: "drinks",
        price: 38
    }
];
// let prices = [];
// for (let item of items) {
//     prices.push(item.price);
// }
// console.log("Price list using for loop: " + prices);
// let priceList = items.map(function (item) {
//     return item.price;
// });
// console.log(priceList);

let studentMarks = [{
        sub: "Chemistry",
        mark: 35
    }, {
        sub: "Physics",
        mark: 45
    },
    {
        sub: "Math",
        mark: 48
    },
    {
        sub: "English",
        mark: 40
    }
];

// let markList = studentMarks.map(function (studentmark) {
//     return studentmark.mark; //need to learn more about this
// });
// console.log(markList);
//or 

markList = studentMarks.map(studentmark => studentmark.mark);
console.log(markList);

//Reduce method in Array/
//Using for of loop
let total = 0;
for (let item of items) {
    total += item.price;

}
console.log("Total cost of items (for loop): " + total);

//Now using reduce method//
let totalReducer = items.reduce((sum, item) => sum + item.price, 0);

//2nd Example using reduce method

let ranDNum = [10, 20, 30, 40];
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
let summAtion = ranDNum.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
console.log("The reducer method yields the value of : " + summAtion);

let ranDAlp = ["b", "a", "c", "k"];
let sumALphabets = ranDAlp.reduce((accumulator, currentValue) => accumulator + currentValue, "it");
console.log("The reducer method yields the value for strings : " + sumALphabets);

let householdItems = ["ladle", "spoon", "fryingpan", "rollingpin", "colander", "sieve", "Whisk", "Measuring spoon", "Teapot"];
let filterHousehold = householdItems.filter(item => item.length > 5);
console.log(filterHousehold);

//combined operations of filter and reduce//

let studentNames = ["John", "Joker", "James", "Jessica", "Amy", "knoxville", "Amerhest"];
let sumStuNames = studentNames.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumStuNames);
let filterStuNames = studentNames.filter(names => names.match(/[J-O]/g));
console.log(filterStuNames);

let expensiveItems = items.filter(item => item.price >= 25);
console.log("The expensive items are :", expensiveItems);
let costofExpensiveItems = expensiveItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
console.log("Sum of Expensive Items : " + costofExpensiveItems);
//Finding Unique values//
let values = [3, 1, 4, 5, 6, 8, 3, 2, 4, 5, 6, 7, 8, 9, 0, 1, 3, 5, 6, 9, 4, 2];
let setOfValues = new Set(values);
let uniqueOfValues = [...setOfValues];
console.log(uniqueOfValues);