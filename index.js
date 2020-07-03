const buttons = document.querySelectorAll("input");
const result = document.getElementById('result');
const myPlay = document.getElementById('myChoice');
const compPlay = document.getElementById('computerChoice');


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
            result.innerHTML = 'You won';
        } else if (computerPlay === 'paper'){
            result.innerHTML = 'You Lost'
        } else {
            result.innerHTML = "It's a draw"
        }
    } else if (myPlay === 'paper'){
        if(computerPlay === 'rock'){
            result.innerHTML = 'You won';
        } else if (computerPlay === 'scissors'){
            result.innerHTML = 'You lost';
        } else {
            result.innerHTML = "It's a draw";
        }
    } else {
        if (computerPlay === 'paper'){
            result.innerHTML = 'You won';
        } else if (computerPlay === 'rock'){
            result.innerHTML = 'You lost';
        } else {
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
        myPlay.src = rockLinkl
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
    
}

//display();


