window.addEventListener("DOMContentLoaded",() => {

let humanScore = 0;
let computerScore = 0;
let getHumanChoice;

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    
    if( a == 0){
        return "rock"
    } else if (a == 1){
        return "paper"
    }else {
        return "scissors"
    }
}

function playingFive(humanChoice, computerChoice){

    
    if (humanScore >= 5 || computerScore >= 5) {
        return; // Game is over
    }


    humanChoice = getHumanChoice;
    computerChoice = getComputerChoice();
    let message;

        
    if ( humanChoice == "scissors" && computerChoice == "rock"){
        computerScore ++
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        message = "Rock beats scissors, Pc wins";
        divDisplay.textContent = message;
         
    } else if ( computerChoice == "scissors" && humanChoice =="rock") {
        humanScore ++ 
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        message = "Rock beats scissors, User wins";
        divDisplay.textContent = message;

    } else if ( humanChoice == "paper" && computerChoice =="rock")  {
        humanScore ++
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        message = "Paper beats rock, User wins";
        divDisplay.textContent = message;

    } else if ( computerChoice == "paper" && humanChoice =="rock")  {
        computerScore ++ 
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        message = "Paper beats rock, Pc wins" ;
        divDisplay.textContent = message;

    } else if ( humanChoice == "scissors" && computerChoice == "paper"){
        humanScore ++ 
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        message = "Scissors beat paper, User wins";
        divDisplay.textContent = message;

    } else if ( computerChoice == "scissors" && humanChoice == "paper"){
        computerScore ++
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        message = "Scissors beat paper, Pc wins";
        divDisplay.textContent = message;
    } else {
        message = " Its a draw";
        scoreDisplay.textContent = " User's Score : " + humanScore+ " Pc Score : " + computerScore;
        divDisplay.textContent = message;
    }

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore === 5) {
            divDisplay.textContent = "GAME WON";
        } else {
            divDisplay.textContent = "GAME OVER, PC WON";
        }
        
    }


        
} 
const btn1Ref = document.querySelector("#btn1");
const btn2Ref = document.querySelector("#btn2");
const btn3Ref = document.querySelector("#btn3");

const display = document.querySelector("#display");
const divDisplay = document.createElement("div");
const scoreDisplay = document.createElement("div");

display.setAttribute("style", "height: 50px")
display.appendChild(divDisplay);
display.appendChild(scoreDisplay);



btn1Ref.addEventListener("click", () => {
getHumanChoice = "rock"
playingFive();
});

btn2Ref.addEventListener("click", () => {
getHumanChoice = "paper"
playingFive();
});
    
btn3Ref.addEventListener("click", ()=>{
getHumanChoice = "scissors"
playingFive();
});

}); 


