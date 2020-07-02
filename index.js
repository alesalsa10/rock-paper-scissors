const buttons = document.querySelectorAll("input");
const inputButtons = document.getElementsByTagName('input');


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
            console.log('You won')
        } else if (computerPlay === 'paper'){
            console.log('You lost')
        } else {
            console.log('its a draw')
        }
    } else if (myPlay === 'paper'){
        if(computerPlay === 'rock'){
            console.log('you won')
        } else if (computerPlay === 'scissors'){
            console.log('you lost ')
        } else {
            console.log('its a draw')
        }
    } else {
        if (computerPlay === 'paper'){
            console.log('you won')
        } else if (computerPlay === 'rock'){
            console.log('you lost')
        } else {
            console.log('its a draw')
        }
    }
}

function display(){
    container.style.display = 'none';
    
}


