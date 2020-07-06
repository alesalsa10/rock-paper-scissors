const buttons = document.querySelectorAll("input");
const result = document.getElementById('result');
const myPlay = document.getElementById('myChoice');
const compPlay = document.getElementById('computerChoice');
const resultsContainer = document.getElementById('results-container');
const tryAgainButton = document.getElementById('try-again');
const myScoreSelector = document.getElementById('you');
const computerScoreSelector = document.getElementById('computer');

let myScore = 0;
let computerScore = 0;
let hiddenDiv = resultsContainer.style.display = 'none';

function computerPlay(){
    let options = ['rock', 'paper', 'scissors'];
    let  randomNumber = Math.floor(Math.random() *  options.length);
    return options[randomNumber];
};

function buttonsListener(){
    buttons.forEach(el => el.addEventListener(
        'click', function(){
            if(this.id === 'rock'){
                let compOption = computerPlay();
                winner(this.id, compOption);
            } else if (this.id === 'paper'){
                let compOption = computerPlay();
                winner(this.id, compOption);
            } else {
                let compOption = computerPlay();
                winner(this.id, compOption);
            }
        }
    ))
}

buttonsListener();

function winner(myPlay, computerPlay){
    if (myPlay === 'rock'){
        if(computerPlay === 'scissors'){
            display(myPlay, computerPlay);
            myScore ++;
            myScoreSelector.innerHTML = myScore
            result.innerHTML = 'You Won';
        } else if (computerPlay === 'paper'){
            display(myPlay, computerPlay);
            computerScore++;
            computerScoreSelector.innerHTML = computerScore;
            result.innerHTML = 'You Lost'
        } else {
            display(myPlay, computerPlay);
            result.innerHTML = "It's a draw"
        }
    } else if (myPlay === 'paper'){
        if(computerPlay === 'rock'){
            display(myPlay, computerPlay);
            myScore++;
            myScoreSelector.innerHTML = myScore;
            result.innerHTML = 'You Won';
        } else if (computerPlay === 'scissors'){
            display(myPlay, computerPlay);
            computerScore++;
            computerScoreSelector.innerHTML = computerScore;
            result.innerHTML = 'You Lost';
        } else {
            display(myPlay, computerPlay);
            result.innerHTML = "It's a draw";
        }
    } else {
        if (computerPlay === 'paper'){
            display(myPlay, computerPlay);
            myScore++;
            myScoreSelector.innerHTML = myScore;
            result.innerHTML = 'You Won';
        } else if (computerPlay === 'rock'){
            display(myPlay, computerPlay);
            computerScore++;
            computerScoreSelector.innerHTML = computerScore;
            result.innerHTML = 'You Lost';
        } else {
            display(myPlay, computerPlay);
            result.innerHTML = "It's a draw";
        }
    }
}

function display(myChoice, computerChoice){
    let rockLink = 'https://www.rock-paper-scissors-game.com/i/rock.png';
    let paperLink = 'https://www.rock-paper-scissors-game.com/i/paper.png';
    let scissorsLink = 'https://www.rock-paper-scissors-game.com/i/scissors.png';

    //make every button disappear
    buttons.forEach(el => el.style.display = 'none');
    //display the image of mychoise and computer choice
    if (myChoice === 'rock'){
        myPlay.src = rockLink
    } else if (myChoice === 'paper'){
        myPlay.src = paperLink;
    } else{
        myPlay.src = scissorsLink;
    }

    if (computerChoice === 'rock'){
        compPlay.src = rockLink;
    } else if (computerChoice === 'paper'){
        compPlay.src = paperLink;
    } else {
        compPlay.src = scissorsLink;
    }
    if (resultsContainer.style.display === 'none'){
        resultsContainer.style.display = '';
    } else {
        resultsContainer.style.display = 'none';
    }
}

function tryAgain(){
    tryAgainButton.addEventListener('click', function(){
        resultsContainer.style.display = 'none';
        buttons.forEach(el => el.style.display = '');
    })
}
tryAgain();


