/* let newNum = Array.from(new Array(3), (x, i) => {
  x = [Math.floor(Math.random() * 255)];
  return x;
});
console.log(newNum); */

var color = "rgb";
let newNum = Array.from(new Array(3), (x, i) => {
  x = [Math.floor(Math.random() * 255)];
  return x;
});
color += `(${newNum})`;
console.log(color);
