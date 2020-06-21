function sum(x, y) {
    add = x + y;
    return add;
}
console.log(sum(1, 2)) //supposed to return 3
console.log(sum(1, 2, 3, 4))
//Using rest parameters//
var add;

function sum(...nums) {
    add = 0;
    for (var num of nums) {
        add += num;
    }
    return add;

}
// let addition = sum(10, 20, 30, 40);
// console.log(addition);

console.log(sum(176896, 98765, 2345));

//another example using rest parameters

function studentDetails(name, ...courses) {
    console.log("Name of the student is: " + name);
    let sub;
    for (sub = 0; sub < courses.length; sub++) {
        console.log(courses[sub]);
    }
}

studentDetails("Chris", "JS", "Python", "Java", "Drupal");


//Reduce in Array using Accumulator and current value 

let vals = [5, 4, 1, 2, 9]

function sum(acc, val) {
    return acc + val;
}

let answer = vals.reduce(...sum);
console.log(answer);