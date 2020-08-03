alert("Welcome");
//var userName = prompt("Your name?");
//var userFavColor = prompt("Your favorite Color");
//var randNum = Math.random();
//to get the whole number in random
var randNum = Math.random() * 50;
//Math.floor returns a largest integer
var ranNum = Math.floor(Math.random() * 50) + 1; //+1 is used to round down the integer.
//document.write(` Hello ${userName} <br> Your Favorite Colour is ${userFavColor} and <br> Your Random number is ${ranNum}`);
document.write(`Your random number is ${randNum} and <br> Your largest Integer Random number is ${ranNum}`);
//Hello ${userName} Your Favorite Colour is ${userFavColor} and
console.log("Program Complete");