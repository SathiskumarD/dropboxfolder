let prices = new Array(10, 20, 36, 43, 49);
let shallowCopy = prices;
console.log("Before changing shallowCopy,prices=\n", prices);
shallowCopy[0] = 70;
console.log("After changing shallowCopy,prices=\n", prices);

let deepCopy = prices.slice();
console.log("Before changing deepCopy,prices=\n", prices);

deepCopy[0] = "Eighty";
console.log("After changing deepCopy,prices=\n", prices);

console.log("The contents of deepCopy:", deepCopy);

prices.push(100); //move the element to last index
console.log(prices);
prices.unshift(300); //move the element to the first index
console.log(prices);
prices.pop(); //opposite of push method
console.log(prices);
prices.shift(); //inverse operation of unshift
console.log(prices);
delete prices[2];
console.log(prices); //prints out empty value