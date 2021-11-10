// static way
// if (new Date().getHours() < 18) {
//     document.getElementById("demo").innerHTML = "Good Day!"; }


// Dynamic way
const hour = new Date().getHours()
let greeting;

if (hour < 18 ) {
    greeting = "Good Day!";
}
else if ( hour >= 18) {
    greeting = "Good Evening!";
}
else if ( hour >= 20) {
    greeting = "Good Night!";
}
else {
    greeting = "Good Morning!";
}

document.getElementById("demo").innerHTML = greeting;