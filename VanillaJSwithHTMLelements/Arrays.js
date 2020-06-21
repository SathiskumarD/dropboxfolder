let a = [4, 8, 15, 16, 23, 42];
let b = ['david', 'eddie', 'micheal', 'abstract'];
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
a[10] = 77;
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
var array1 = [1, 2.4, 3];
var array2 = [7, 2.4, 3];
let newArray = [];
for (var i = 0; i < array1.length; i++) {
    newArray.push([array1[i], array2[i]]);
}
//document.write(newArray);
console.log(newArray);

var array1 = [1, 2.4, 3];
var array2 = [7, 2.4, 3];
let newArray = [];
for (var i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
        newArray.push(array1[i] + array2[i]);
    } else
    if (array1[i] < array2[i]) {
        newArray.push(array2[i]);
    } else {
        newArray.push(array1[i]);
    }
}

//document.write(newArray);
console.log(newArray);

let studentGrades = ["A", "B", 3, "D", 5];
console.log("Length: " + studentGrades.length);
console.log("Element at index3:" + studentGrades[3]);
console.log("Iterating over old syntax");
for (var i = 0; i < studentGrades.length; i++) {
    console.log(studentGrades[i]);
}
console.log("Iterating over new ES6 Syntax");
for (i in studentGrades) {
    console.log(studentGrades[i]);
}

studentGrades.forEach((Grades) => {
    console.log(Grades);
})

console.log("Elements in vowels");
let vowels = new Array("A", "E", "I", "O", "U");
for (i of vowels) {
    console.log(i);
}

let eleMent = 0;
while (eleMent < vowels.length) {
    console.log("The " + [eleMent] + " Element in this Array is " + vowels[eleMent]);
    eleMent++;
}

let grades = [];
grades[0] = "A";
grades[1] = "B";
grades[2] = "C";
grades[3] = "D";
grades[4] = "E";
grades[7] = "H"
console.log("Length: ", grades.length);
for (i of grades) {
    console.log(i);
}
console.log(`\n The elements at index 5 and 6: ${grades[5]} and ${grades[6]}`);
let testScores = [43, 45, 56, 67, 78, 98];

function flagGoodScore(score) {
    if (score > 70) {
        console.log(`The score of ${score} is good!`)
    }
}
console.log("Iterating over the test scores with ForEach");
testScores.forEach(flagGoodScore);