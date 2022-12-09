let averageEl = document.getElementById('average');

// var randomNumber = Math.floor(Math.random() * 6) + 5;
function generateRandomNumber(){
    return Math.floor(Math.random() * 6) + 5;
}

console.log(generateRandomNumber());
let scores = [generateRandomNumber(),generateRandomNumber(), generateRandomNumber(),generateRandomNumber(),generateRandomNumber()];
let average = 0;
for(let i = 0; i <scores.length; i++){
    if(scores[i] === 5){
        average = 0;
        break;
    }else{
        average +=scores[i];
    }

}


if((average / scores.length) >=8){
    averageEl.textContent = 'Student has pass with average of ' + average / scores.length;
}else if(average === 0){
    alert('You failed a subject')
}else{
    averageEl.textContent = 'Student has not pass. His average is' + average / scores.length;
}