# RockPaperScissors



ftiaxe mia fucntion h opia trexei mexri o paixths h to pc na ftasei stous 5 pontous
opote tha trexei rounds kai tha yparxei ena counter kathe fora
prepei na kanei episis display to score kai na krataei, na kanei announce pios nikaei kathe giro kai sto telos na leei pios nikise



pame twra step by step

do {

display.text?? = user
display.text?? = pc // auto einai to counter mas
	if(user win argument){
	displayroundwinner user won
	user++
	}else {
		displayroundwinnertext pc won 
		pc++
		}
}
while(human === 5 || pc === 5)

--------------------------------------------------------------------




/*function playRound(humanChoice, computerChoice){

     humanChoice = getHumanChoice;
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
   

    }*/
    
   /* function playGame (){
        for ( let i = 0; i < 5; i++){
            console.log(playRound());
            console.log(" User :" + humanScore + " Pc :" + computerScore )
        }

        if(humanScore > computerScore){
            console.log("User won the battles!")
        }else {
            console.log("Pc won the battles!")
        }
        
    }*/
    //console.log(playGame());