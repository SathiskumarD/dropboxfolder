var array1 = [1,2.4,3];
var array2 = [7,2.4,3];
let newArray = [];
for (var i = 0; i < array1.length; i++) {
 if (array1[i] == array2[i]) {
    newArray.push(array1[i]+ array2[i]);
  } else 
  if (array1[i]<array2[i]) {
    newArray.push(array2[i]);
  } else {
    newArray.push(array1[i]);
  }
}

//document.write(newArray);
console.log (newArray);
