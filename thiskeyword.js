/*console.log("Is this === window?", this === window);
console.log("What is this?", this);
var age = 35;
console.log("window.age: ", window.age);
console.log("this.age:", this.age);
var age = 55;
console.log("window.age: ", window.age);
console.log("this.age:", age);
let somefunction = () => this;
console.log("this returned from a  function: ", somefunction());*/

let myCar = {
  make: "Toyota",
  model: "RAV4",
  Year: 2017,
  price: 37000,
  printDetails() {
    console.log("this from myCar: ", this);
  },
};

let myVehicle = {
  make: "Honda",
  model: "HRV",
  Year: 2019,
  Price: 420000,
  printDetails() {
    console.log(`
        Make:${this.make}
        Model:${this.model}
        Price:$${this.price}`);
  },
  engine: {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250,
    printDetails() {
      console.log(`
            Displacement:${this.displacement} cc
            HorsePower:${this.horsepower} bhp`);
    },
  },
};

myCar.printDetails();
myVehicle.printDetails();
myVehicle.engine.printDetails();

myCar = {
  make: "Toyota",
  model: "RAV4",
  Year: 2017,
  price: 37000,
  engine: {
    displacement: 4000,
    horsepower: 300,
  },
};

function printMycarDetails() {
  console.log(`Make:${this.make}
            Model:${this.model}
            Year:${this.Year}
            Price:$${this.price}`);
}

function printMyEngineDetails() {
  console.log(`Displacement:${this.displacement} cc
    Horsepower:${this.horsepower} bhp`);
}

//1st method using call method//
printMycarDetails.call(myCar);
printMyEngineDetails.call(myCar.engine);
printMycarDetails.call(myVehicle);
printMyEngineDetails.call(myVehicle.engine);
