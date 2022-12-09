// EXERCISE 1
var studentPoints = Number(prompt("EXERCISE 1 \nHow many points do you have?"));
console.log(studentPoints);

if(typeof studentPoints != 'number' || Number.isNaN(studentPoints)){
    alert('please enter valid year');
} else{
    if(studentPoints >= 91 && studentPoints < 100){
        window.alert(10);
    }else if(studentPoints >= 81 && studentPoints < 91){
        window.alert(9);
    }else if(studentPoints >=71 && studentPoints < 81){
        window.alert(8)
    }else if(studentPoints >=61 && studentPoints <71){
        window.alert(7);
    } else if(studentPoints >=51 && studentPoints <61){
        window.alert(6);
    }else{
        window.alert('FAILED');
    }
}


// EXERCISE 2
var year = Number(prompt("EXERCISE 2 \nEnter a year: "));
console.log(year);

if(year === 0 || typeof year != 'number' || Number.isNaN(year)){
    alert('please enter valid year');
}else if(Number.isInteger(year) === false){
    alert("Please enter whole number - year");
}else if(Number.isInteger(year / 4)){
    alert("It's leap year");
}else{
    alert(`It's not a leap year`);
}


// EXERCISE 3 
var num1 = Number(prompt("EXERCISE 3 \nEnter a number: "));
var num2 = Number(prompt("Enter another number: "));
console.log(num1, num2);

if(typeof num1 != 'number' || typeof num2 != 'number' ||  Number.isNaN(num1) || Number.isNaN(num2) ){
    alert('please enter valid numbers');
}else if(Number.isInteger(num1) == false || Number.isInteger(num2) == false){
    alert('please enter whole numbers');
}else if(num1 === num2){
    var sum = (num1 + num2) * 3;
    alert(sum);
}else{
    var sum = num1 + num2;
    alert(sum);
}



// EXERCISE 4
num1 = Number(prompt("EXERCISE 4 \nEnter a number: "));
num2 = Number(prompt("Enter another number: "));
console.log(num1, num2);

if(typeof num1 != 'number' || typeof num2 != 'number' ||  Number.isNaN(num1) || Number.isNaN(num2) ){
    alert('please enter valid numbers')
}else if(num1 === 50 || num2 === 50 || (num1 + num2) === 50){
    alert(true);
}else{
    alert(false);
}
