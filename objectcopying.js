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

// console.log("My car value is:", myCar)

// var yourCar = myCar; //shallow copy of an object
// console.log("Your Car is:", yourCar);
// yourCar.tyres = "GoodYear";
// yourCar.seats.color = "Silver Grey";
// console.log("Your car afetr adding properties:", yourCar);
// console.log("The value of my car is: ", myCar);
// var hisCar = Object.assign({}, myCar); //source is myCar and empty object is the first argument
// hisCar.color = "Red";
// hisCar.seats.color = "Neon Green";
// hisCar.seats.materials = "Rexin";
// console.log("The effect of Object.assign():");
// console.log("His car: ", hisCar); //nested objects cannot be changed using deep copy of objects
// console.log("My car: ", myCar); //my Car has not changed but only nested object is changed
// var herCar = {
//     ...myCar
// };
// console.log("Her Car: ", herCar);
// herCar.color = "Red";
// herCar.seats.color = "Black";
// herCar.seats.materials = "Rexin";
// console.log("The effect of the spread syntax");
// console.log("Her car: ", herCar);
// console.log("My car: ", myCar);//only nested object is changed

//Deep copy cannot be created by using Object.assign{} method
//User JSON 
yourCar = JSON.parse(JSON.stringify(myCar)); //functions are recognised by JSON format
yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple";
console.log("The effect of JSON.parse() and JSON.stringify(): ");
console.log(myCar);
console.log(yourCar);