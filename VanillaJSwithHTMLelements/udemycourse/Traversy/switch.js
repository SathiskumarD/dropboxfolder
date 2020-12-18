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
let result;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    result = day.fontcolor("green");
    break;
  case 1:
    day = "Monday";
    result = day.fontcolor("red");
    break;
  case 2:
    day = "Tuesday";
    result = day.fontcolor("darkgreen");
    break;
  case 3:
    day = "wednesday";
    result = day.fontcolor("Orange");
    break;
  case 4:
    day = "Thursday";
    result = day.fontcolor("magenta");
    break;
  case 5:
    day = "Friday";
    result = day.fontcolor("blue");
    break;
  case 6:
    day = "Saturday";
    result = day.fontcolor("green");
    break;
}
document.write(result);
//or
console.log(result);
