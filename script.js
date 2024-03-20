const getRock = document.querySelector("#rock");
const getPaper = document.querySelector("#paper");
const getScissors = document.querySelector("#scissors");
//const gameResult = document.getElementById("div");
const gameResult = document.querySelector("div");
let playerSelection = "";

getRock.addEventListener("mousedown", () => {//onclick
    console.log("rock");
    playerSelection = "rock";
    play(playerSelection);//play("rock");//playRound
    //playerSelection = "";
});
getPaper.addEventListener("mousedown", () => {
    console.log("paper");
    playerSelection = "paper";
    play(playerSelection);//play("paper");
    //playerSelection = "";
});
getScissors.addEventListener("mousedown", () => {
    console.log("scissors");
    playerSelection = "scissors";
    play(playerSelection);//play("scissors");
    //playerSelection = "";
});



function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    let choice = "rock";
    if(random == 0){
        choice = "rock";
    }else if(random == 1){
        choice = "paper";
    }else {
        choice = "scissors";
    }
    return choice;
}

function getPlayerChoice(){
    let choice = "rock";
    //choice = prompt("Choose rock, paper, or scissors");
    choice = playerSelection;
    //console.log(choice);//
    choice = choice.toLowerCase();
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
    return choice;
}

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

function playGame(){//userSelection
    let computerScore = 0;
    let playerScore = 0;
    let winVar;

    //
    for(let x=0; x<5; x++){
        //console.log(x);
        let computerSelection = getComputerChoice();
        //console.log("                                            " + computerSelection);
        let playerSelection = getPlayerChoice();
        //let playerSelection = userSelection;
        winVar = play(playerSelection, computerSelection);
        console.log(winVar);
        if(winVar.indexOf("Tie") < 0){
            if(winVar.indexOf("Lose") > -1){//returns index of first occurance of word, else returns -1 //winVar.indexOf(-1)
                computerScore++;
            }else{
                playerScore++;
            }
        }else{
            //console.log("temp");
        }

        if(x==4){
            if(playerScore==computerScore){
                //console.log("Tie!");
                gameResult.textContent = "Tie!";
            }else if(playerScore>2){
                //console.log("You Win!");
                gameResult.textContent = "You Win!";
            }else {//if(computerScore>2)
                //console.log("You Lose!");
                gameResult.textContent = "You Lose!";
            }
        }
    }
    //
}
playGame();