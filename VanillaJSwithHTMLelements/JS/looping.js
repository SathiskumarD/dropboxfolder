var symBol = "#";
for (var i = 0; i < 7; i++) {
  document.write((symBol += "#"));
}
let x;
for (var i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    document.write("Fizz");
  } else if (i % 5 == 0) {
    document.write("buzz");
  } else if ((i % 3 == 0) & (i % 5 == 0)) {
    document.write("FizzBuzz");
  }
}
