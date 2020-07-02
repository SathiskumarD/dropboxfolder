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

var samsCar = Object.create(myCar);
samsCar.seats.color = "White";
console.log("The effect of Object.create():");
console.log("Sam's car:", samsCar);
console.log("My car:", myCar);

console.log("Object keys");
console.log(Object.keys(myCar));
console.log(Object.values(myCar));
console.log(Object.entries(myCar));

let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

let yourCar = Object.assign(myCar, {
    engine: s60Engine
});
console.log("The effect of Object.assign():");
console.log("Your car: ", yourCar);
console.log("My car:", myCar);