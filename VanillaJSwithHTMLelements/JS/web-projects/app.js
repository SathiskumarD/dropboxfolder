var choice1 = document.getElementById("computerchoice");
var myChoice = document.getElementById("userchoice");
var choice3 = document.getElementById("result");
var choices = ["rock", "paper", "scissor"];

function myFunction1() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  myChoice.textContent = "rock";

  if (computerChoice == myChoice.textContent) {
    choice3.textContent = "Tie!";
    choice3.style.color = "grey";
  } else if (computerChoice == "paper") {
    choice3.textContent = "You lose!";
    choice3.style.color = "red";
  } else if (computerChoice == "scissor") {
    choice3.textContent = "You Win!";
    choice3.style.color = "blue";
  }
  choice1.textContent = computerChoice;
}

function myFunction2() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  myChoice.textContent = "paper";

  if (computerChoice == myChoice.textContent) {
    choice3.textContent = "Tie!";
    choice3.style.color = "grey";
  } else if (computerChoice == "rock") {
    choice3.textContent = "You Win!";
    choice3.style.color = "blue";
  } else if (computerChoice == "scissor") {
    choice3.textContent = "You lose!";
    choice3.style.color = "red";
  }
  choice1.textContent = computerChoice;
}
function myFunction3() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  myChoice.textContent = "scissor";
  if (computerChoice == myChoice.textContent) {
    choice3.textContent = "Tie!";
    choice3.style.color = "grey";
  } else if (computerChoice == "rock") {
    choice3.textContent = "You lose!";
    choice3.style.color = "red";
  } else if (computerChoice == "paper") {
    choice3.textContent = "You Win!";
    choice3.style.color = "blue";
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
