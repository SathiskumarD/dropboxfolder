// let first = 'lauReNce';
// let last = 'sveKis';
// let needle = 'JavaScript';
// let str = 'I love ' + needle + ', because its ' + needle + ', and ' + needle + ' its the best';
// console.log(str);
// let start = str.indexOf(needle);
// let len = needle.length;
// let end = start + len;
// console.log(start,len,end);
// let firstSlice = str.slice(start);
// let mySlice = str.slice(start,end);
// let subby = str.substring(start,end);
// let subby2 = str.substr(start,len);

// let first = 'Sathish';
// let last = 'kuMar';
let needle = 'JavaScript';
let str =
  'I love' +
  needle +
  ',because its ' +
  needle +
  ', and' +
  needle +
  ' its the best';
console.log(str);
let start = str.indexOf(needle);
console.log(start);
let len = needle.length;
let end = start + len;
console.log(start, len, end);
let firstSlice = str.slice(start);
console.log(firstSlice);
let mySlice = str.slice(start, end);
console.log(mySlice);
let mySub = str.substring(start, end);
console.log(mySub);
//This substring method uses length //
let mySub2 = str.substr(start, len);
console.log(mySub2);