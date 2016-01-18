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

    characterFive("Supercalifragilisticexpialidotious");
    //will return ''' because it's the 5th character

//2. loop through a string and print each character into the 
//JS console

for (var i = 0; i <= string.length; i++) {
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
    
    var object = {
    
        name: name,
        placeOfBirth: "Space",
        hobby: "Being FABULOUS"
    
    }
    return object;
}

console.log(specialReturnFunc(object, "Tritia Timmins"));

function object(name) {
    console.log("My first name is " + name.split(" ", 1) + " and my last name is " + name.split(" ").slice(-1).join("") + " .");
}

//console.log(object("Tritia Timmins"));

//to get last name only use split(" ").slice(-1).join("") THANK YOU STACK OVERFLOW.

//do name.split(" ", 1) this will split off the first part of the string before the first space

//5. attempt 2


//6. make a function that takes a name as a parameter and returns "true" if it s is equivalent to the "name" property in the function call above

var returnsTrueFunc = function(name) {
    if (name === object["name"]) {
        console.log(true);
    } else {
        console.log(false); 
    }
}

returnsTrueFunc("Tritia Timmins");

//7. create a function that takes an object as a parameter and returns the length of the object

var majorTom = {
    hasSpacecraft: true,
    isBadass: true,
    isShady: false,
}

var returnsLengthOfFunc = function(object) {
    //returns length of object
    //Object.keys returns your keys in an array
    //add .length to figure out how long that array is
    console.log(Object.keys(object).length);

}

returnsLengthOfFunc(majorTom);

//8. Create a function that modifies the 'javascriptarray' 
var modifiesJavascriptArray = function(javaScriptArray) {
    //try to push this new array into the javascriptarray
    var restOfJsArray = ['S', 'c', 'r', 'i', 'p', 't'];
    //loop thru original array
    for(var i = 0; i < restOfJsArray.length; i++) {
        //push restOfJsArray[i] because [i] is the actual element/stuff inside the array. just doing it without [i], will push the restOfJsArray into the javaScriptArray 6 times.

        javaScriptArray.push(restOfJsArray[i]);
    }
    return javaScriptArray;
}

modifiesJavascriptArray(javaScriptArray);

//9. 
