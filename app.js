let Comscore = document.querySelector(".computerScore");
let Userscore = document.querySelector(".yourScore");
const Btns = document.querySelectorAll("button");
const panel = document.querySelector(".scorepanel h2");
const computerimg = document.querySelector(".computer img");
const userimg = document.querySelector(".user img");

let Cscore = 0;
let Uscore = 0;

let userChoice = Btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    Match(btn.className);
  });
});

function computerChoice() {
  const computerchoicenum = Math.floor(Math.random() * 3);
  const computerOption = ["rock", "paper", "scissors"];
  const computerChoice = computerOption[computerchoicenum];

  return computerChoice;
}

function Match(userChoice) {
  const computer = computerChoice();

  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { scissors: 0, rock: 1, paper: 0.5 },
    scissors: { scissors: 0.5, rock: 0, paper: 1 },
  };

  var yourScore = rpsDatabase[userChoice][computer];
  var computerScore = rpsDatabase[computer][userChoice];

  console.log(yourScore, computerScore);

  switch (yourScore) {
    case 1:
      panel.innerText = "you win";
      computerimg.src = `${computer}.png`;
      userimg.src = `${userChoice}.png`;
      console.log(userimg.parentElement);
      Uscore++;
      break;
    case 0.5:
      panel.innerText = "tie";
      computerimg.src = `${computer}.png`;
      userimg.src = `${userChoice}.png`;
      break;
    case 0:
      panel.innerText = "you lost";
      computerimg.src = `${computer}.png`;
      userimg.src = `${userChoice}.png`;
      Cscore++;
      break;
  }
  Comscore.innerText = Cscore;
  Userscore.innerText = Uscore;
}

Match();
