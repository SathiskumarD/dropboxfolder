// let car = {
//     make: 'ford'
//     , model: 'mustang'
//     , year: 2000
//     , price: 50000
//     , color: 'red'
//     , tires: true
//     , drive() {
//         console.log('its driving');
//     }
//     , instructions: ['Turn Key', 'Put in Gear', 'Press Gas Pedal']
//     , help() {
//         console.log(this);
//     }
//     , info() {
//         console.log(`Make ${this.make} Model ${this.model}`);
//     }
//     , howto() {
//         this.instructions.forEach(step => {
//             console.log(step);
//         })
//     }
// };
// console.log(car);
// car.drive();
// car.howto();
let car = {
  make: "Toyota",
  model: "RAV4",
  year: 2017,
  price: 370000,
  color: "Silver-Grey",
  tires: "company-manufactured",
  drive() {
    console.log("Yes it is driving");
  },
  instructions: ["Turn key", "Put in Gear", "Press Gas Pedal"],
  help() {
    console.log(this);
  },
  info() {
    console.log(`Make ${this.make} Model ${this.model}`);
  },
  howto() {
    this.instructions.forEach((step) => {
      console.log(step);
    });
  },
};
car.info();
console.log(car.info);
car.howto();
