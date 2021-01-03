var choice1 = document.getElementById("computerchoice");
var myChoice = document.getElementById("userchoice");
var choice3 = document.getElementById("result");
var choices = ["rock", "paper", "scissor"];

function myFunction1() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  myChoice.textContent = "rock";

  if (computerChoice == myChoice.textContent) {
    choice3.textContent = "Tie!";
  } else if (computerChoice == "paper") {
    choice3.textContent = "You lose!";
  } else if (computerChoice == "scissor") {
    choice3.textContent = "You Win!";
  }
  choice1.textContent = computerChoice;
}

function myFunction2() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  myChoice.textContent = "paper";

  if (computerChoice == myChoice.textContent) {
    choice3.textContent = "Tie!";
  } else if (computerChoice == "rock") {
    choice3.textContent = "You Win!";
  } else if (computerChoice == "scissor") {
    choice3.textContent = "You lose!";
  }
  choice1.textContent = computerChoice;
}
function myFunction3() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  myChoice.textContent = "scissor";
  if (computerChoice == myChoice.textContent) {
    choice3.textContent = "Tie!";
  } else if (computerChoice == "rock") {
    choice3.textContent = "You lose!";
  } else if (computerChoice == "paper") {
    choice3.textContent = "You Win!";
  }
  choice1.textContent = computerChoice;
}

// if ((computerChoice == "rock") & myFunction1()) {
//   choice3 = "Tie!";
// } else if ((computerChoice == "paper") & myFunction1()) {
//   choice3 = "You Win!";
// } else if ((computerChoice == "scissor") & myFunction1()) {
//   choice3 = "You lose!";
// }
