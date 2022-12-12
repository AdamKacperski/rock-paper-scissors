let playerScore, computerScore;

playerScore = 0
computerScore = 0

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = [Math.floor(Math.random()*3)];
    const compChoice = choices[randomNum]
    return compChoice
}
 
const playRound = (playerSelection, computerSelection) =>{

    if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
       return "Draw!" 
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
        return "Draw!" 
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        return "Draw!" 
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "Player wins!"
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        playerScore++;
        return "Player wins!"
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "Player wins!"       
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        computerScore++;
        return "Computer wins!"      
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "Computer wins!"
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "Computer wins!"
    }
}

const game = () => {
 for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper, scissors?").toLowerCase()
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log("Player: " + playerScore)
    console.log("Opponent: " + computerScore)
}

    if (playerScore >= computerScore){
    console.log("You won!") 
    } else if(computerScore >= playerScore){    
    console.log("You lost!") 
    } else {
    console.log("You tied with a computer!") 
    }
}

game();

