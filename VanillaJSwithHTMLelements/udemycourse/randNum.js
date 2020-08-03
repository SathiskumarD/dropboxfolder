//numRand = parseInt(userInput);
//var rNumber = Math.floor(Math.random() * numRand) + 1;
//document.write(rNumber);
//number.isInteger(value) This method takes only value

let numberRand = (userInput) => {
    var userInput = prompt("Enter the number");
    userNumber = parseInt(userInput);

    if (userNumber) {
        document.write(Math.floor(Math.random() * userInput) + 1);
    } else {
        document.write("Number is NOT an Integer");
    }
};



numberRand();