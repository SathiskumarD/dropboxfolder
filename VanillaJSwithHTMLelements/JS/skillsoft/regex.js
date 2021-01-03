let pattern= /xyz/;
console.log(typeof pattern);
let value = 'This is a xyz test.';

/* console.log(pattern.test(value));
console.log(value.replace(pattern,'just')); */

console.log(value.match(pattern));
var match=value.match(pattern);
console.log(match.index);
