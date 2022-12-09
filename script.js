// define variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// declare display value

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// define variable to hold setinterval() function
let interval = null;

// define the button position
let statusbar = "paused";

//time function (logic to determine when to increment next value)

function activeTimer(){
    
    seconds++;

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    //if seconds/minutes/hours are only one digit, add a leading 0 to the value

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

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    
    }
}



function startPauseResume(){

    if(statusbar === "paused"){

//start/pause/resume the time (by calling the setInterval() function  

    interval = window.setInterval(activeTimer, 1000);
    document.getElementById("startPauseResume").innerHTML = "Pause";
    statusbar = "started";
 }

    else if(statusbar === "paused"){

    interval = window.setInterval(activeTimer, 1000);
    document.getElementById("startPauseResume").innerHTML = "Pause";
    statusbar = "resumed";
}

    else{

    window.clearInterval(interval);
    document.getElementById("startPauseResume").innerHTML = "Resume";
    statusbar = "paused";
}
}


//cancel the timer

function cancel(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = 
    "00:00:00";
    document.getElementById("startPauseResume").innerHTML = "Start";
    statusbar = "paused";
}




