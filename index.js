const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    var computer = choices[Math.floor(Math.random()*choices.length)];
    console.log('Opponent chose ' + computer);
}

getComputerChoice();
