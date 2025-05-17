console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let a = prompt("Input your choice")
    return a
}

function playRound(humanChoice, computerChoice){

     humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();

    

    if ( humanChoice == "scissors" && computerChoice == "rock"){
        computerScore ++
        return"Rock beats scissors, Pc wins"
         
    } else if ( computerChoice == "scissors" && humanChoice =="rock") {
        humanScore ++ 
        return"Rock beats scissors, User wins"
        

    } else if ( humanChoice == "paper" && computerChoice =="rock")  {
        humanScore ++
        return "Paper beats rock, User wins"
        

    } else if ( computerChoice == "paper" && humanChoice =="rock")  {
        computerScore ++ 
        return "Paper beats rock, Pc wins" 
        

    } else if ( humanChoice == "scissors" && computerChoice == "paper"){
        humanScore ++ 
        return "Scissors beat paper, User wins"
        

    } else if ( computerChoice == "scissors " && humanChoice == "paper"){
        computerScore ++
        return "Scissors beat paper, Pc wins"
        
    } else {
        return " Its a draw"
    }
    

    }
    
    function playGame (){
        for ( let i = 0; i < 5; i++){
            console.log(playRound());
            console.log(" User :" + humanScore + " Pc :" + computerScore )
        }

        if(humanScore > computerScore){
            console.log("User won the battles!")
        }else {
            console.log("Pc won the battles!")
        }
        
    }
    console.log(playGame());
    