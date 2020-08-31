// let myMessage = document.getElementById('message');

// function showMessage () {
//     myMessage.className = 'show';
// }

// setTimeout(showMessage, 3000)

// set interval repeatedly calls the function many times
let colourChanger = document.getElementById('colour-changer');
let colours = ['blue', 'green', 'red', 'pink'];
let counter = 0;

function changeColour() {

    if (counter >= colours.length) {
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;

}

let myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function() {
    // this is how we stop a timer
    clearInterval(myTimer);
    colourChanger.innerHTML = 'Timer stopped!';

}
