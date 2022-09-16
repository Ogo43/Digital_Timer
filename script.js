let seconds = 0;
let minutes = 0;
let hours = 0;

//Declare display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Timer function logic to determine when to increment

function activeTimer(){
    
    seconds++;

    //logic to determine when to increment next value
    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    //add a leading '0' to seconds/minutes/hours to display '00'

    if (seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    //Display time value on screen
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

window.setInterval(activeTimer, 1000);
