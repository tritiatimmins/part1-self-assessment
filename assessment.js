console.log('Let\'s start Hacking!');

var string = "Javascript is super duper awesome";
var myProfileObject = {};
var javaScriptArray = ['j', 'a', 'v', 'a'];

//1. print into the console the 5th letter in a string
//no variable allowed
	//use 4 because this is a 0 index
	console.log(string.charAt(4));

	//can be done using a function
	var characterFive = function(string) {
		return console.log(string.charAt(4));
	}

	characterFive("What\'s good?");
	//will return ''' because it's the 5th character

//2. loop through a string and print each character into the 
//JS console

for (var i = 0; i < string.length; i++) {
	console.log(i);
}
