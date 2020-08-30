// setting both the button and content into variables

let content = document.getElementById('content');
let button = document.getElementById('show-more');

button.onclick = function() {
    // check if the box is open then we want to shrink it otherwise expand it
    if (content.className == "open") {
        // shrink the box
        content.className = " ";
        button.innerHTML = "Show  more";


    } else {
        // expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }

};
