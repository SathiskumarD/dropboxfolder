console.log("The min of 1,2,3: ", Math.min(1, 2, 3));
let arr1 = [1, 2, 3];
console.log("The min of arr1 (without spread) : ", Math.min(arr1)); //This will not work
console.log("The min of arr1 (with spread) : ", Math.min(...arr1)); //using spread syntax

let arr2 = [4, 5, 6];
let arr3 = [2.12, 2.05, 3.12, 4.2];
console.log("The min of arr1 and arr2 : ", Math.min(...arr1, ...arr2));
console.log("Min of arr2 and more : ", Math.min(...arr2, 2.5, 2.1, ...arr3));
let arrays = [4.23, ...arr1, 5.36, 3.45, 2.68, ...arr3, 6.78, 5.23, ...arr2];
console.log(arrays);

let str = "skillsoft";
console.log("str=", str);
console.log("Array formed by spread syntax \n", [...str]);
console.log("Array formed with Array.from(str) syntax \n", Array.from(str));