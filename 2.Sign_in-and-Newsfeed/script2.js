// User's Database
var database = [
	{
		username: "zaheer",
		password: "123"
	},
	{
		username: "faisal",
		password: "345"
	},
	{
		username: "qurban",
		password: "567"
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


// Is valid User
function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}


// signIn function
function signIn(username, password) {
	if (isUserValid(username, password)) {
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