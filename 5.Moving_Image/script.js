var dir_h = 'right';  // Horizontal Direction
var dir_v = 'down';   // Vertical Direction

// var random_position = Math.floor(Math.random() * 10)  // Reset and Pause
var random_position = Math.floor(Math.random())

// Reset Function
function reset1() {
    clearTimeout(my_time);
    document.getElementById('i1').style.left = random_position;
    document.getElementById('i1').style.top = random_position;
    document.getElementById("msg").innerHTML = "";
}

// Display Function
function disp() {
    var step = 2;

    var y = document.getElementById('i1').offsetTop;
    var x = document.getElementById('i1').offsetLeft;

    if (x >= 900) {
        dir_h = 'left';
    }
    if (x <= 400) {
        dir_h = 'right';
    }
    if (dir_h == 'right') {
        x = x + step;
    }
    else {
        x = x - step;
    }

    if (y >= 500) {
        dir_v = 'up';
    }
    if (y <= 100) {
        dir_v = 'down';
    }

    if (dir_v == 'down') {
        y = y + step;
    }
    else {
        y = y - step;
    }

    document.getElementById('i1').style.top = y + "px"; // vertical movment
    document.getElementById('i1').style.left = x + "px"; // horizontal  movment

    //////////////////////
}

function timer() {
    disp();
    var y = document.getElementById('i1').offsetTop;
    var x = document.getElementById('i1').offsetLeft;
    document.getElementById("msg").innerHTML = "X: " + x + " Y : " + y
    my_time = setTimeout('timer()', 10);
}

