const choices = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay();


let playerSelection = window.prompt('Please enter rock, paper or scissors to play. Best 3 out of 5 wins!').toLowerCase();
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function game(){
    for(i=1; i <= 5; i++){
        onePlay();
        
    }
}

function onePlay(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "tie game, please try again";
    }
}  