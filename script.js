function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    //console.log(random);//
    let choice = "rock";
    if(random == 0){
        choice = "rock";
    }else if(random == 1){
        choice = "paper";
    }else {
        choice = "scissors";
    }
    //console.log(choice);//
    return choice;
}
//let computerSelection = getComputerChoice();

function getPlayerChoice(){
    let choice = "rock";
    choice = prompt("Choose rock, paper, or scissors");
    //console.log(choice);//
    choice = choice.toLowerCase();
    //console.log(choice);//
    if(choice == "rock"){
        choice = "rock";
    }else if(choice == "paper"){
        choice = "paper";
    }else if(choice == "scissors"){
        choice = "scissors";
    }else {
        console.log("ran");
        choice = "rock";
    }
    //console.log(choice);//
    return choice;
}
//let playerSelection = getPlayerChoice();

//console.log("comp: " + computerSelection);//
//console.log("play: " + playerSelection);//

function play(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    }else if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            return "You Lose! Paper beats Rock";
        }else{
            return "You Win! Rock beats Scissors";
        }
    }else if(playerSelection=="paper"){
        if(computerSelection=="scissors"){
            return "You Lose! Scissors beats Paper";
        }else{
            return "You Win! Paper beats Rock";
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "You Lose! Rock beats Scissors";
        }else{
            return "You Win! Scissors beats Paper";
        }
    }else{
        return "Error!";
    }
}
//console.log(play(playerSelection, computerSelection));

function playGame(){
    let computerScore = 0;
    let playerScore = 0;
    let winVar;

    for(let x=0; x<5; x++){
        console.log(x);
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        winVar = play(playerSelection, computerSelection);
        console.log(winVar);
        if(winVar.indexOf(-1)){
            computerScore++; 
        }else{
            playerScore++;
        }

        if(x==4){
            if(playerScore==computerScore){
                console.log("Tie!");
            }else if(playerScore>2){
                console.log("You Win!");
            }else if(computerScore>2){
                console.log("You Lose!");
            }
        }
    }
}
playGame();