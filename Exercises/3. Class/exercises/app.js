function subract(num1 , num2){
 return num1 - num2;
}

console.log(subract(10,6));


function multiply(num1 , num2){
    return num1 * num2;
}

console.log(multiply(10,6));


function divide(num1 , num2){

    return num1 / num2;
}

console.log(divide(10,6));


function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(30));

function fahrenheitToCelsius(fahrenheit){
    return (5 / 9) * (fahrenheit -32);
}

console.log(fahrenheitToCelsius(96));


let date = new Date();
function calculateAge(currentYear,birthYear){
    return currentYear - birthYear;
}
console.log(calculateAge(date.getFullYear(), 1992));