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
let computerSelection = getComputerChoice();

function getPlayerChoice(){
    let choice = prompt("Choose rock, paper, or scissors");
    console.log(choice);//
    choice = choice.toLowerCase;
    //console.log(choice);//
    if(choice == "rock"){
        choice = "rock";
    }else if(choice == "paper"){
        choice = "paper";
    }else if(choice == "scissors"){
        choice = "scissors";
    }else {
        choice = "rock";
    }
    //console.log(choice);//
    return choice;
}
let playerSelection = getPlayerChoice();
console.log("comp: " + computerSelection);//
console.log("play: " + playerSelection);//

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
console.log(play(playerSelection, computerSelection));