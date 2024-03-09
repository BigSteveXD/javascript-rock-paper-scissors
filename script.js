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
getComputerChoice();