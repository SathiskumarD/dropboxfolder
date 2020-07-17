let dogBreeds = [
    "Labrador",
    "Beagle",
    "Golden retriever",
    "Doberman",
    "German shepherd",
    "Boxer",
];
dogBreeds.push("Poodle");

// console.log("The Dog breeds before splic method: ", dogBreeds);
// dogBreeds.splice(3, 0, "Poodle", "Dalmatian"); //starting at 3 index and 0 is the number of elements removed from the array
// console.log("The Dog breeds after splice method:", dogBreeds);
// dogBreeds.splice(1, 2, "Indi");
// console.log("dog breeds now:", dogBreeds);
let sliceofDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3)=\n", sliceofDogBreeds);
sliceofDogBreeds = dogBreeds.slice(3, 5);
console.log("dogBreeds.slice(3,5):\n", sliceofDogBreeds);
sliceofDogBreeds = dogBreeds.slice(-3, -1); //upper bound will not be included
console.log("dogBreeds.slice(-3,-1):\n", sliceofDogBreeds);
let europeOffices = ["Bucharest", "Prague", "Rome"];
let africaOffices = ["Durban", "Nairobi"];
let oceaniaOffices = ["Christchurch", "Sydney"];
let southernOffices = africaOffices.concat(oceaniaOffices);
console.log("southernOffices: ", southernOffices);

console.log("africaOffices: ", africaOffices);
let allOffices = africaOffices.concat(oceaniaOffices, europeOffices);
console.log(allOffices);

let sortedAlloffices = allOffices.sort(); //sorting the arrays
console.log(sortedAlloffices);
console.log(allOffices.reverse()); //reverse sorting
console.log("Sorted copy of allOffices using spread syntax: \n", [...allOffices].sort());
console.log("allOffices after sorting: \n", );
let numArray = [20, 30, 40, 50, 3, 45, 10];
console.log("Sorted copy of numArray using the default sort: \n", numArray.slice().sort());