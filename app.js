let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
};

const drawGame = () => {
    msg.innerText = "Game DRAW!Play Again.";
    msg.style.backgroundColor = "#081b31";
    console.log("draw game");
};

const showWinner = (userWin) => {
   if(userWin){
    userScore++;
    userPara.innerText = userScore;
    msg.innerText = "You WON!";
    msg.style.backgroundColor = "green";
    console.log("you win")
   }
   else{
    compScore++;
    compPara.innerText = compScore;
    msg.innerText = "You LOSE!"; 
    msg.style.backgroundColor = "red";
    console.log("you lose")
   }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice){
    // draw game
     drawGame();   
  } else {
    let userWin = true;
    if(userChoice === "rock") {
        // scissor , paper
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
        // scissor , rock
        userWin = compChoice === "scissor" ? false : true;
    } else{ 
        // rock , paper
        userWin = compChoice === "rock" ? false : true;
    }
     showWinner(userWin);
  } 
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
