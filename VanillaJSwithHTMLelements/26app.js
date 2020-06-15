// let car = {
//     make: 'ford'
//     , model: 'mustang'
//     , year: 2000
//     , price: 50000
//     , color: 'red'
//     , tires: true
// };
// console.log(car);
// car.color = 'blue';
// console.log(car);
// car['color'] = 'green';
// console.log(car);
// let prop = 'color';
// car[prop] = 'black';
// console.log(car);
// car.inside = ['radio', 'seats', 'steering wheel', true];
// car.outside = {
//     tires: 4
//     , windshield: 'glass'
//     , bumper: true
// }
let car = {
    make: 'Toyota',
    model: 'RAV4',
    Year: 2017,
    color: 'Silver Grey',
    Price: 37000,
    tires: 'factory - manufactured',
    Apple_play: false,
    Android_play: false
};
// console.log(car);

// car.color = "Grey";
// console.log(car);
car['color'] = 'Silver-laminated';
console.log(car.color);
let tailorMake = 'model';
car[tailorMake] = 'Camry';
car.inside = ['radio', 'seats', 'steering wheel', true];
car.outside = {
    tires: 4,
    windshield: 'glass',
    bumper: true
}

console.log(car.inside[2]);
console.log(car.outside.windshield);

car.outside.windshield = "wood";
console.log(car);