const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = [Math.floor(Math.random()*3)];
    const compChoice = choices[randomNum]
    return compChoice
}
 
const playRound = (playerSelection, computerSelection) =>{

    if(playerSelection === "rock" && computerSelection === "rock"){
       return "Draw!" 
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Draw!" 
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "Draw!" 
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "Player wins!"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "Player wins!"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "Player wins!"
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "Computer wins!"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "Computer wins!"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "Computer wins!"
    }
}

const playerSelection = prompt("rock, paper, scissors?")
console.log(playerSelection)
const computerSelection = getComputerChoice()
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))
