// let weight = Number(window.prompt("Enter your weight"))
let isNum = false;
let weight  = 0;
do{
        weight = Number(window.prompt("Enter your weight"));
        if(!isNaN(weight)){
            isNum = true;
        }
        console.log(weight);
}
while(isNum == false || weight == 0);
console.log(`The weight is ${weight}`);
function weightInChickens(weight){
    return weight / 0.5;    
}

document.title = 'WEIGHT CALCULATOR IN CHICKENS';
let h1 = document.createElement('h1');
h1.textContent = 'WEIGHT CALCULATOR IN CHICKENS';
document.body.appendChild(h1);

let p = document.createElement('p').textContent = `You have ${weightInChickens(weight)} chicken kg`;
document.body.append(p);