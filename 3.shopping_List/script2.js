// Creating and selecting Variables
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


// Add an event & Test it
button.addEventListener("click", function() {

	// Testing
	// console.log("click is working");
	// console.log(input.value);

	// to make user input value more valid 
	if (input.value.length > 0) {

		// Create list element from user input
		var li = document.createElement("li");

		// li.appendChild(document.createTextNode("Testing"));
		// To make value dynamic
		li.appendChild(document.createTextNode(input.value));
		// append value in ul
		ul.appendChild(li);

		// After value entered in item, it should become empty
		input.value = "";
	}
})


// Add an keypress "enter" event & Test it
input.addEventListener("keypress", function(event) {

	// Testing
	// console.log(event);

	// to make user input value more valid  & press enter to control enter userinput value
	if (input.value.length > 0  && event.keyCode === 13) {

		// Create a li value in ul from user
		var li = document.createElement("li");

		// To make value dynamic
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);

		input.value = "";
	}
})
