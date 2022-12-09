
// EXERCRISE 1
function parameterType(param){
    return typeof param;
}

// OBJECTS
console.log(parameterType({}));
console.log(parameterType(null));
console.log('');

// BOOLEAN
console.log(parameterType(true));
console.log(parameterType(false));
console.log('');

// NUMBER
console.log(parameterType(42));
console.log(parameterType(Number(42)));
console.log(parameterType(parseFloat(53)));
console.log(parameterType(parseInt(53)));
console.log();

// STRING
console.log(parameterType("Hello"));
console.log(parameterType("553"));
console.log(parameterType("false"));
console.log(parameterType("{}"));
console.log(parameterType(""));
console.log(parameterType("undefined"));
console.log(parameterType("null"))
console.log();

// UNDEFINED
console.log(parameterType());
console.log(parameterType(undefined));


// EXERCISE 2
let dogOrHuman = prompt("Enter dog or human years \n Enter H to convert human years to dog years or D to convert dog years to human years").toLowerCase();

function dogAge(dogOrHumanParam){
    let age;
    if(dogOrHumanParam === 'd'){
        age =  Number(prompt("Enter your age"));
        if(isNaN(age)){
        alert("Please enter a number");
        } else{
        console.log(`${age} dog year is equal to ${age / 7} human years`);
        }
    } else if(dogOrHumanParam === 'h'){
        age = Number(prompt("Enter your dog age please"));
        if(isNaN(age)){
            alert("Please enter a number");
            } else{
            console.log(`${age} human years is equal to ${age * 7} dog years`);
            }
    } else{
        alert("Please enter D or H");
    }
}

dogAge(dogOrHuman);

// EXERCISE 3

let deposit = Number(prompt("Please enter your balance: "));

function ATM(deposit){
if(typeof deposit != 'number' || Number.isNaN(deposit)){
    alert("Please enter valid budget");
}else{
    let withdraw = Number(prompt("Enter the amount you want to withdraw:"));
    if(typeof withdraw != 'number' || Number.isNaN(withdraw)){
        alert("Please enter a valid amount");
    }else if(deposit < withdraw){
        alert("Not enough money");
    } else{
        let moneyLeft = deposit - withdraw;
        alert(`You withdrew ${withdraw} denars from your account.Now, you have ${moneyLeft} denars on your account`);
    }
}

}

ATM(deposit);