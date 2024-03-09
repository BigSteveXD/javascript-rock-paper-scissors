function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    console.log(random);
    let choice = "default";
    if(random == 0){
        choice = "rock";
    }else if(random == 1){
        choice = "paper";
    }else {
        choice = "scissors";
    }
    console.log(choice);
    return choice;
}
let computerSelection = getComputerChoice();

let playerSelection = prompt("Choose rock, paper, or scissors");
function getPlayerChoice(){
    let choice = prompt("Choose rock, paper, or scissors");
    choice = choice.toLowerCase;
    if(choice == "rock"){
        choice = "Rock";
    }else if(choice == "paper"){
        choice = "Paper";
    }else if(choice == "scissors"){
        choice = "Scissors";
    }else {
        choice = "Rock";
    }
    return choice;
}

function play(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    }else if(playerSelection=="rock"&&computerSelection=="paper"){
        return "You Lose! Paper beats Rock"
    }
}