const myCar = {
    make: "Volvo",
    model: "s60",
    price: 42000,
    color: "Gray",
    seats: {
        materials: "leather",
        color: "Brown"

    }
}
let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

// let yourCar = Object.assign(myCar, {
//     engine: s60Engine
// }); //engine is s60Engine

// let herCar = Object.freeze(myCar);

// herCar.color = "Yellow";
// herCar.seats.color = "Red"; //It is possible to change the nested object

// herCar.tyres = "Good year";
// herCar.seats.bucket = true;
/*console.log("The effet of Object.freeze() method:\n");
console.log("Her Car\n:", herCar);
console.log("my Car\n:", myCar);
//console.log(herCar);*/

let hisCar = Object.seal(myCar);
hisCar.color = "White";
hisCar.seats.color = "White";
hisCar.weight = 1632;
hisCar.seats.color = "White";
hisCar.engine.torque = 250;
console.log(hisCar);
console.log(myCar);