const today = new Date();
console.log(today);
console.log(typeof today);
let birthDay = new Date('09-14-1981 04:50:00');
console.log(birthDay);
let birthDate = new Date('September 14 1981');
console.log(birthDate);
let birthMonth = birthDate.getMonth();
console.log(birthMonth); //It will give 8 because 0 is Jan and 1 is Feb
val = today.getDate();
console.log(val);
val1 = birthDay.getDay();
console.log(val1); //1-Monday
val2 = today.getFullYear();
console.log(val2);
val3 = today.getHours();
console.log(val3);
val4 = today.getMinutes();
console.log(val4);
val5 = today.getSeconds();
console.log(val5);
val6 = today.getTime(); //gives time stamp the amount of time passed since 1970
console.log(val6);

//setting the month
val7 = birthDate.setMonth(3);
val8 = birthDate.setDate(08);
val9 = birthDate.setFullYear(1969);
val10 = birthDate.setHours(3);
val11 = birthDate.setMinutes(25);
val12 = birthDate.setSeconds(30);
console.log(birthDate); //this will change the birth month,date and year