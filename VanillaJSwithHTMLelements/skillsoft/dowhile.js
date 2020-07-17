/* var drink = "Sugar Cane Juice";
var cans = 0;
do {
    text = cans + "  cans of  " + drink + " on the wall ";
    text = text + cans + " cans of " + drink;
    cans++;
    console.log(text);
} */

// while (cans <= 99);
/* Example of while loop using math.floor and math.random method
 // there will be no zero in the result due to following expression//
let total = 0;
while (total < 30) {
    total += Math.floor(Math.random() * 5) + 1;
    console.log(total);
}*/
//to get zero 
/*let total = 0;
while (total < 30) {
    total += Math.floor(Math.random() * 5);
    console.log(total);*/
/*var drink = "Sugar Cane Juice";
var cans = 0;
do {
    text = cans + "  cans of  " + drink + " on the wall ";
    text = text + cans + " cans of " + drink;
    console.log(text);
    ++cans;
    if (cans == 50) {
        console.log("Half way through");
    } else if (cans >= 90) {
        console.log("That's full of juices ");
    } else {
        console.log("Sugarcane");
    };


}
while (cans <= 99);*/

var drink = "Sugar Cane Juice";
var cans = 99;
do {
    text = cans + "  cans of  " + drink + " on the wall <br>";
    text = text + cans + " cans of " + drink + "<br>"

    console.log(text);
    cans = cans - 1;
} while (cans >= 0);