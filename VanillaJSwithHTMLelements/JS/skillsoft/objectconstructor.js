function car(make, model, price, engine) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
    this.details = function () {
        console.log(`Make:${this.make}
        Model:${this.model}
        Price:${this.price}`)
    };
    this.engine.details = function () {
        console.log(`Displacement:${this.displacement}
        Horsepower:${this.horsepower}bhp`)
    }
}

let s60engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

let myCar = new car("Toyota", "rav4", 37000, s60engine, 2000, 275);
console.log(`My car is a ${myCar.make} ${myCar.model}`);

let caymanEngine = {
    cylinders: 4,
    displacement: 2750,
    horsepower: 350
}
let yourCar = new car("Porshe", "718 Cayman", 61000, caymanEngine);
console.log(`Your car is a ${yourCar.make} ${yourCar.model}`);
console.log("My car details:\n");
myCar.engine.details();
//Using class//
class Vehicle {
    constructor(make, model, price, engine) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
    }
    details = function () {
        console.log(`Make:${this.make}
        Model:{this.model}
        Price:$${this.price}`);
    }
}

console.log("My vehicle details: \n");
myCar.details();