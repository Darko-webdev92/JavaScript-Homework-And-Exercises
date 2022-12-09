let averageEl = document.getElementById('average')
let scores = [10,6,8,9,6];
let average = 0;
for(let i = 0; i <scores.length; i++){
    average +=scores[i];
}


if((average / scores.length) >=8){
    alert('Student has pass with average of ' + average / scores.length);
}else{
    alert('Student has not pass. His average is' + average / scores.length)
}