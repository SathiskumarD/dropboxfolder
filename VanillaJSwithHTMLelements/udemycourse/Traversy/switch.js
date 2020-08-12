/* let color = prompt("What is the color?");
switch (color) {
  case "red":
    alert(`Color is ${color}`);
    break;
  case "blue":
    alert(`color is ${color}`);
    break;
  default:
    alert("The color is not red or blue");
    break;
} */
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
alert(day);
//or
console.log(day);
