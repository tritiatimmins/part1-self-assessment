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
	console.log(string[i]);
}

//3. refractor problem 2 using a while loop

var j = 0;
while(j <= string.length) {
	j++;
	console.log(string[j]);	
}

//some reason it says 'avascript is awesome', and i think this is bc j starts at 0.

//4.use a certain kind of notation to add values to myProfileObject

//I used bracket notation because when I used dot notation, location and name were showing up as keywords, so I thought that this would be a better way.

myProfileObject["school"] = "Telegraph Prep";
myProfileObject["location"] = "Berkeley, California";
myProfileObject["name"] = "Tritia Timmins";

console.log(myProfileObject);

//5. create a function that takes an object and a name as parameters. 

var specialReturnFunc = function(object, name) {
	return object;
}