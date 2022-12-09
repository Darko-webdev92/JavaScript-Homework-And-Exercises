//  Exercise 1

var firstNumber = window.prompt("Please enter a number");
var secondNumber = window.prompt("Please enter another number");
var product = firstNumber * secondNumber;
var quotient = firstNumber / secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${product}`);
console.log(`${firstNumber} / ${secondNumber} = ${quotient}`);



// Exercise 2

var width = window.prompt("Width of a rectangle: ");
var height = window.prompt("Height of a rectangle: ");
var perimeter = 2 * (Number(width)  + Number(height));
console.log("The perimeter of the rectangle is " + perimeter);


// Exercise 3
var temperature = window.prompt("°C: ");
var tempToFahrenheit = (parseInt(temperature) * 9/5) + 32;
console.log(`${temperature}°C = ${tempToFahrenheit}°F` );


// Exercise 4
var chickenLegs = 2;
var cowLegs = 4;
var pigLegs = 4;

var numberOfChickens = window.prompt("Number of Chickens: ");
var numberOfCows = window.prompt("Number of Cows: ");
var numberOfPigs = window.prompt("Number of Pigs: ");

var totalNumberOfChickensLegs = parseInt(numberOfChickens) * chickenLegs; 
var totalNumberOfCowsLegs = parseInt(numberOfCows) * cowLegs;  
var totalNumberOfPigsLegs = parseInt(numberOfPigs) * pigLegs;
var sumOfLegs = totalNumberOfChickensLegs + totalNumberOfCowsLegs + totalNumberOfPigsLegs;

console.log("Total number of legs: " + sumOfLegs);




