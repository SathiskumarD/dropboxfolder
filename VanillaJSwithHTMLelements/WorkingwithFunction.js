function mphToKmph(mph) {
    console.log("MPH value entered:", mph);
    return 1.61 * mph;
}
let speedLimit = mphToKmph(65);
console.log("Speed limit in Km/h: ", speedLimit);
let mphToKmphArrow = mph => {
    console.log("Enter the MPH value", mph)
    return 1.61 * mph;
}
let mphToKmphImplicit = mph => 1.61 * mph;
speedLimit = mphToKmphImplicit(65);
console.log("Speed Limit in km/h (Implicit return): ", speedLimit);

let areaOfTriangle = (b, h) => 0.5 * b * h;
console.log("Area of a triangle with base of 5 and height of 4 : ", areaOfTriangle(5, 4));

var x = function (f) {
    return 5 * (f - 32) / 9
};
console.log("50F in celsius is: ", x(50));