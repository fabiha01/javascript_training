function setUpEvents() {
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

};



window.onload = function() {
    // after everything in the HTML has loaded then run this function
    // this makes sure that we don't fire any JS until the window has fully loadedm
    setUpEvents();

};
