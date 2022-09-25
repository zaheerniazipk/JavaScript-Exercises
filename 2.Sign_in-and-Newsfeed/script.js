// User's Database
var database = [
	{
		username: "zaheer",
		password: "123"
	}
];


// User's Newsfeed
var newsfeed = [
	{
		username: "Zaheer",
		timeline: "Programming makes life interesting!"
	},
	{
		username: "Faisal",
		timeline: "Django is so cool!"
	},
	{
		username: "Qurban",
		timeline: "React is easy to learn!"
	}
];



// signIn function
function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsfeed);
	}
	else {
		alert("Sorry, Wrong username or Password!");
	}
}


// user's input
var userNamePrompt = prompt("What\'s your username?");
var userPassPrompt = prompt("What\'s your password?");


// Calling the Function
signIn(userNamePrompt, userPassPrompt);