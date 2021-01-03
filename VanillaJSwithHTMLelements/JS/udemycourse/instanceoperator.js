class Vehicle {
    conbstructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

let myCar = new Vehicle("Volkswagen", "GTI", 29000);
let yourCar = JSON.parse(JSON.stringify(myCar));
let herCar = {
    ...myCar
}
let hisCar = Object.create(myCar);
console.log("Is myCar a vehicle ? ", myCar instanceof Vehicle);
console.log("Is yourCar (deep copy) a vehicle ?", yourCar instanceof Vehicle);
console.log(herCar instanceof Vehicle);
console.log(hisCar instanceof Vehicle);

console.log(typeof herCar);
console.log(typeof hisCar);
console.log(typeof myCar);
console.log(typeof yourCar);
console.log(herCar);
console.log(hisCar);
console.log(myCar);
console.log(yourCar);