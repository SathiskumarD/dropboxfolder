//Key and value pair
let firstItem = {
    id: 1,
    name: "laptop",
    price: 500
}

let secondItem = {
    id: 1,
    name: "Watch",
    price: 250
}
console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}`);
console.log(`firstItem has a name of ${firstItem["name"]} and a price of ${firstItem["price"]}`);

const USD_EUR = 0.9;
let thirdItem = {
    id: 3,
    name: "headphones",
    brand: "Sony",
    price: 100,
    priceEUR: this.price * USD_EUR
};

console.log("Price of thirdItem in Euros: ", thirdItem.priceEUR); //NaN is expected because of "this".Only functions can be used
let fourthItem = {
    id: 3,
    name: "headphones",
    brand: "Sony",
    price: 100,
    priceEUR: function () {
        return this.price * USD_EUR;
    }
};

console.log("Price of fourthItem in Euros: ", fourthItem.priceEUR());

//Removing the properties from Object//

fourthItem.mfgCountry = "Canada";

console.log(fourthItem);

let fifthItem = new Object();

fifthItem.id = 5;
fifthItem.name = "cellPhone";
fifthItem.brand = "iPhone";
fifthItem.price = 450;
console.log(fifthItem);