var myCar = {
    make: "Toyota",
    model: "RAV4",
    price: 37000,
    color: "Silver Grey",
    seats: {
        materials: "Leather",
        color: "Brown"
    }

}
//console.log(myCar)

// var yourCar = myCar; //shallow copy of an object
//console.log(yourCar);
// yourCar.tyres = "GoodYear";
// yourCar.seats.color = "Silver Grey";
//console.log(yourCar);
//console.log(myCar);
var hisCar = Object.assign({}, myCar);
hisCar.color = "Red";
hisCar.seats.color = "Neon Green";
//console.log("His car: ", hisCar); //nested objects cannot changed using deep copy of objects
// console.log("My car: ", myCar);
// hisCar.color = "Red";
// hisCar.seats.color = "Neon Green";
/*var herCar = {
    ...myCar
};
console.log("Her Car: ", herCar);
herCar.seats.color = "Black";
console.log("The effect of the spread syntax");
console.log("Her car: ", herCar);
console.log("My car: ", myCar);*/

//Deep copy cannot be created by using Object.assign{} method
//User JSON 
yourCar = JSON.parse(JSON.stringify(myCar));
yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple";
console.log(myCar);
console.log(yourCar);